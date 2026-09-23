// Run after `npm run build`: checks source coverage and the actual emitted CSS.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const ts = require("typescript");
const postcss = require("postcss");

const root = path.resolve(__dirname, "..");
const roles = {
  hero: 1.04,
  section: 1.1,
  card: 1.2,
  lead: 1.6,
  body: 1.7,
  reading: 1.75,
  caption: 1.5,
  control: 1.4,
};

function source(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function files(dir) {
  return fs.readdirSync(path.join(root, dir), { withFileTypes: true }).flatMap((entry) => {
    const file = `${dir}/${entry.name}`;
    return entry.isDirectory() ? files(file) : file.endsWith(".tsx") ? [file] : [];
  });
}

function elements(file) {
  const ast = ts.createSourceFile(file, source(file), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const result = [];
  function visit(node) {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const attr = node.attributes.properties.find((item) => ts.isJsxAttribute(item) && item.name.getText(ast) === "className");
      result.push({
        tag: node.tagName.getText(ast),
        classes: attr?.initializer ? attr.initializer.getText(ast) : "",
        line: ast.getLineAndCharacterOfPosition(node.getStart(ast)).line + 1,
      });
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  return result;
}

test("all headings and paragraphs explicitly declare a typography role", () => {
  let checked = 0;
  for (const file of [...files("app"), ...files("components")]) {
    for (const { tag, classes, line } of elements(file)) {
      if (!/^(h[1-6]|p)$/.test(tag)) continue;
      const assigned = classes.match(/\bleading-(hero|section|card|lead|body|reading|caption|control)\b/g) ?? [];
      assert.equal(assigned.length, 1, `${file}:${line}: expected one explicit role`);
      assert(!/(?:max-|min-)?\w+:leading-|leading-\[|leading-\d/.test(classes), `${file}:${line}: stray leading override`);
      checked += 1;
    }
  }
  assert(checked > 80, "The audit must cover the full UI, not a small subset");
});

test("buttons declare control leading, including dynamic filter/tab classes", () => {
  for (const file of [...files("app"), ...files("components")]) {
    for (const { tag, classes, line } of elements(file)) {
      if (tag === "button") assert(classes.includes("leading-control"), `${file}:${line}`);
    }
  }
  assert(source("components/ui/AnimatedButton.tsx").includes("leading-control"));
});

test("Mission and Vision share heading and body typography", () => {
  const entries = elements("components/home/MissionVision.tsx");
  const headings = entries.filter(({ tag }) => tag === "h3");
  const paragraphs = entries.filter(({ tag }) => tag === "p");
  assert.equal(headings.length, 2);
  assert.equal(paragraphs.length, 2);
  assert.equal(headings[0].classes, headings[1].classes);
  assert.equal(paragraphs[0].classes, paragraphs[1].classes);
});

test("pillar heading and article reading text retain distinct roles", () => {
  const pillar = elements("components/home/PillarSlider.tsx").find(({ tag }) => tag === "h4");
  assert(pillar.classes.includes("leading-card"));
  assert(!pillar.classes.includes("leading-[4rem]"));
  assert(source("components/blog/BlogMagazine.tsx").includes("leading-reading"));
});

function builtRules() {
  const cssDir = path.join(root, ".next/static/css");
  assert(fs.existsSync(cssDir), "Run npm run build before the typography regression tests");
  const css = fs.readdirSync(cssDir).filter((file) => file.endsWith(".css")).map((file) => fs.readFileSync(path.join(cssDir, file), "utf8")).join("\n");
  const rules = [];
  postcss.parse(css).walkRules((rule) => {
    let parent = rule.parent;
    while (parent) {
      if (parent.type === "atrule" && parent.name === "media") return;
      parent = parent.parent;
    }
    rules.push(rule);
  });
  return rules;
}

function lineHeight(rules, selectors) {
  let value;
  for (const rule of rules) {
    if (!rule.selector.split(",").some((selector) => selectors.includes(selector.trim()))) continue;
    rule.walkDecls("line-height", (decl) => { value = decl.value; });
  }
  return value;
}

test("all eight unitless roles survive the production build", () => {
  const rules = builtRules();
  for (const [role, value] of Object.entries(roles)) {
    assert.equal(Number(lineHeight(rules, [`.leading-${role}`])), value, role);
  }
  assert.equal(Number(lineHeight(rules, [".display-title"])), roles.section);
});

test("role utilities override size utility leading and display-title defaults", () => {
  const rules = builtRules();
  for (const size of [".text-sm", ".text-xl", ".text-3xl", ".text-4xl"]) {
    for (const role of ["card", "body", "caption", "control"]) {
      assert.equal(Number(lineHeight(rules, [size, ".display-title", `.leading-${role}`])), roles[role], `${size} + ${role}`);
    }
  }
});

test("display font and text-built logo treatment are preserved", () => {
  const css = source("app/globals.css");
  assert(css.includes("--display-font: serif;"));
  assert(css.includes("--logo-font: serif;"));
  assert(source("components/ui/logo.tsx").includes("font-logo"));
  assert(source("components/ui/logo.tsx").includes("leading-none"));
  assert(source("components/layout/SiteFooter.tsx").includes("font-logo"));
});
