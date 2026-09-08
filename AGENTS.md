<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Khreeolife UI Refactor & Premium Polish — Working Plan

> **Status:** Steps 0 and 1 complete. Step 2 (extract component classes) is next.
> **Scope:** Refactor the Tailwind layer, reconcile with the reference HTML,
> close responsive gaps, and raise the finish to a premium level.
> **Non-goal:** This is **not** a redesign. Layout, content, brand colours and
> section order stay as they are. We are tightening execution, not changing direction.

## Reference files

| Role | Path |
| --- | --- |
| Design source of truth | `../Khreeolife_Homepage_Refined_V6_PM_Changes (1).html` (CSS = lines 13–5137) |
| Implementation | `src/` in this package |
| Migration leftovers | `migrate_tailwind.js`, `clean_css.js`, `find_classes.js`, `replace_container.js` |

---

## 1. What the analysis found

### 1.1 How the current state was created

`migrate_tailwind.js` holds a hardcoded `classMappings` dictionary that
string-replaced each semantic CSS class with a long utility string, e.g.

```js
'eyebrow': "mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.1em] text-brand uppercase before:h-px before:w-6 before:bg-current before:content-['']"
```

Every occurrence got the full string inlined. Nothing was ever re-abstracted,
so one design decision now lives in ~180 places. This is the root cause of
almost everything below.

**Measured repetition across `src/`:**

| Pattern | Occurrences |
| --- | --- |
| `[&_…]:` / `[&>…]:` arbitrary descendant variants | **932** |
| `max-[760px]:` | **231** |
| `.eyebrow` utility blob (inlined) | **177** |
| `max-[1050px]:` | **97** |
| `max-[400px]:` | **38** |
| Page container `w-[min(var(--max-width),calc(100%_-_64px))]…` | **36** |
| Standard Tailwind breakpoints (`sm:` `md:` `lg:`) | **0** |

Six ad-hoc pixel breakpoints are in use (`400, 430, 760, 900, 1050, 1180`),
none of them named, all desktop-first inside a mobile-first framework.

### 1.2 Dead code still shipping

- The `.event-motion-card` block in `globals.css` (~50 lines including two media
  queries and a reduced-motion block) is **entirely unused**. `events-rail.tsx`
  applies only the `data-event-motion-card` attribute for JS querying — the
  class is never set. The card is styled a second time, independently, in
  Tailwind. Two sources of truth, one of them dead.
- `.pillar-progress` and `.pillar-progress.active .pillar-progress-fill` are
  unused; only the `pillar-progress-load` keyframe is referenced.
- The four `*.js` migration scripts at package root are one-shot tooling and
  should not remain in the repo.

### 1.3 Confirmed inconsistencies vs the reference

The reference CSS was written in layered passes (V5 → V6 → V7), each overriding
the last. **The migration copied early-pass rules for some properties and
late-pass rules for others**, producing hybrids that match neither.

| # | Component | Reference (final, after overrides) | Current Next implementation | Severity |
| --- | --- | --- | --- | --- |
| 1 | `.btn-dark` | `background: var(--ink)` — a dark/black button | `globals.css:294` groups `.btn-brand, .btn-dark` and forces **both** to `var(--brand)` purple. `btn-dark` is indistinguishable from `btn-brand`. | **High** |
| 2 | Campaign cards | Late pass: `border: 0`, `box-shadow: none`, `background: transparent`, `transform: none`, cards at `top: 18/104/18px`, **flip on hover/focus** | Early pass: `border border-ink`, `shadow-[0_18px_45px…]`, `rotate-[-3deg]/[2deg]/[3deg]`, `hover:-translate-y-[8px]`, and flip **on click only** | **High** |
| 3 | Mega-menu icon | `.mega-item:hover .mega-icon` → `color: brand-dark`, `background: #f1e7f5`, `border-color: #bda7c9` | No icon hover state at all. Only `hover:bg-brand/8` on the row. | **High** |
| 4 | Events progress bar | `.events-progress-fill` → `display:block; height:100%; background: var(--brand); transition: width .6s` | `events-rail.tsx:290` renders a `<span>` with an inline `width` only — no `block`, no `h-full`, no `bg-brand`. **The fill is invisible.** | **High (bug)** |
| 5 | `.btn-light` / `.btn-brand` hover | Sets `background` + `color` only | Also sets `border-color`, changing the button's outline weight mid-hover | Low |
| 6 | Nav CTA | `.nav-cta:hover` → `background: var(--brand-dark)` on both label and arrow | Correct result, but expressed as an 11-part `[&>span]:` / `[&>svg]:` blob on a single element | Low (readability) |
| 7 | Eyebrow tracking | `letter-spacing: 0.13em` | The migration dictionary wrote `tracking-[.1em]`; components use `tracking-[.13em]`. Both exist in the codebase. | Medium |
| 8 | `h2` size | `clamp(42px, 5vw, 78px)` | `clamp(42px,5vw,74px)` everywhere | Low |

### 1.4 Responsive gaps

- **Dropped breakpoints.** The reference has `@media (max-width: 560px)` (event
  card basis, media height, `h3` → 27px, bottom-row alignment) and
  `@media (max-width: 360px)` (hero `h1` → 39px, hero `p` → 15px). **Neither
  survived the migration.** Between 430px and 760px, and below 360px, several
  components have no intermediate step.
- **`site-header.tsx` declares 2 grid layouts and 0 responsive overrides.** The
  mega-menu grid is a hard `grid-cols-2` at every width.
- Ratio grids that collapse only at 1050px sit in an awkward middle state on
  tablets: `pillar-rotator` (`.38fr/.62fr`, 3 grids / 1 override),
  `project-archive` (5 / 2), `event-archive` (7 / 3).
- The `pillar-rotator` stat row is `grid-cols-4` of `aspect-square` circles at
  every width — at ~360px each circle is under 70px with 8px text inside.
- Fixed heights (`h-[260px]`, `min-h-[380px]`, `min-h-[460px]`, `min-h-[650px]`)
  are applied without small-screen relief in several cards.

### 1.5 Typography and premium finish

- **No font loading at all.** `layout.tsx` imports no font; `--ui-font` is
  `Arial, Helvetica, sans-serif` and `--display-font` is `Georgia, "Times New
  Roman", serif`. Rendering depends entirely on what the visitor's OS ships —
  on Android there is no Georgia, so the display face silently falls back to a
  different serif. This is the single largest gap to a premium feel.
- No optical sizing, no `font-feature-settings`, no metric-matched fallback, so
  there is layout shift on first paint.
- Spacing is a bag of one-off pixel values (`py-[54px]`, `pb-[104px]`,
  `mb-[38px]`, `mt-[34px]`, `gap-[72px]`) with no underlying rhythm.
- Section transitions are abrupt: `bg-paper` → `bg-white` → `bg-cream` →
  `bg-brand` with no blending, seam treatment or tonal easing.
- Hover timings are inconsistent (`200ms`, `220ms`, `250ms`, `350ms`, `.3s`,
  `.36s`, `.72s`) with several different easing curves for the same gesture class.

---

## 2. Guiding principles for the refactor

The requirement is that the coding pattern stay readable **for developers of
mixed experience levels**. Concretely:

1. **A junior should read a component's JSX and see the structure.** If a
   `className` is longer than the line, the design intent is hidden.
2. **One design decision, one place.** Changing the eyebrow's letter-spacing must
   be a one-line edit, not a 177-position find/replace.
3. **Named breakpoints over pixel literals.** `tablet:grid-cols-1` says what it
   means; `max-[760px]:grid-cols-1` requires you to know what 760 signifies.
4. **Prefer plain Tailwind utilities in markup; reserve component classes for
   genuinely repeated multi-property patterns.** We are not rebuilding a CSS
   framework — we are removing duplication.
5. **No behaviour change without a note.** Every deviation from current rendering
   gets recorded in the checklist so it can be reviewed.

---

## 3. Step-by-step plan

Each step is independently reviewable and leaves the app in a working state.
**Verify after every step:** `npm run lint`, `npm run build`, and a visual pass
across all 7 routes at 360 / 430 / 560 / 760 / 1050 / 1440px.

### Step 0 — Baseline and safety net

- [x] 0.1 **Done.** Rollback point created: `Snapshot working state before UI
      refactor` (42 files). Before this the repo had a single commit
      (`b659785 Initial commit from Create Next App`) with all real work
      uncommitted.
- [ ] 0.2 Capture "before" screenshots of all 7 routes at the 6 widths above.
      These are the visual-regression reference for every later step.
- [x] 0.3 Baseline recorded (Node 24.19.0, Next 16.3.4, Turbopack):

      | Metric | Baseline |
      | --- | --- |
      | `npm run build` | **passes**, exit 0 — 12 static routes, compiled in 6.5s |
      | CSS bundle | **97,129 bytes** (single chunk) |
      | JS chunks | ~1,001,851 bytes |
      | `npm run lint` | **fails**, exit 1 — 7 errors, 2 warnings |

      All 7 lint errors are `no-require-imports` in the four leftover migration
      scripts that Step 7.2 deletes; removing them makes lint pass. The two
      warnings are an anonymous default export in `postcss.config.mjs` and an
      unused `index` binding at `project-archive.tsx:58`.

      **The 97 KB CSS bundle is the headline number for this refactor.** For a
      7-page brochure site that is very large, and it is a direct consequence of
      the 932 arbitrary variants each generating a unique class. Step 7.5 should
      compare against it.
- [x] 0.4 **Resolved.** Node.js LTS v24.19.0 + npm 11.17.0 installed via
      `winget install OpenJS.NodeJS.LTS` at `C:\Program Files\nodejs\`.
      (Before this, no Node existed on the machine and the dev server only ran
      via Adobe Creative Cloud's bundled `node.exe` v20.18.0.)

> **Environment note.** Long-running shells started before the install inherit a
> stale environment block and will not see `node` on `PATH`. Either open a fresh
> terminal, or prefix commands with:
> ```powershell
> $env:Path = "C:\Program Files\nodejs;" + $env:Path
> ```

### Step 1 — Establish the design-token layer (`globals.css`)

Foundation for everything after; no visual change intended.

**Step 1 is complete.** Build passes; CSS grew 97,129 → 97,985 bytes (+856),
which is exactly the `:root` token declarations. **Zero utility classes were
emitted** — verified by grepping the built CSS for each new utility — so the
step is visually inert, as intended. Tokens only become rules when components
adopt them in Steps 2–3.

> **Engine finding, worth knowing before Step 2.** Tailwind v4 has an `--ease-*`
> theme namespace but **no `--duration-*` namespace**. `ease-brand` and
> `ease-flip` generate real utilities; `duration-lift` and `duration-media`
> silently generate **nothing**. Confirmed by building a throwaway probe
> component and grepping the output.
>
> Use the CSS-variable shorthand in markup instead — this does work:
> ```
> duration-(--duration-lift)
> ```
> Inside a component class in `globals.css`, plain `var(--duration-lift)` is
> fine. Do not write `duration-lift` and assume it applied; it will fail silently.
>
> The same probe confirmed the durations currently in the wild are
> `duration-200`, `[220ms]`, `[250ms]`, `[280ms]` and `[350ms]` — the
> inconsistency recorded in §1.5, now visible in the build output.

- [x] 1.1 Add named breakpoint variants so pixel literals disappear from markup:
      ```css
      @custom-variant phone   (@media (max-width: 400px));
      @custom-variant mobile  (@media (max-width: 560px));
      @custom-variant tablet  (@media (max-width: 760px));
      @custom-variant laptop  (@media (max-width: 1050px));
      @custom-variant desktop (@media (min-width: 1051px));
      ```
      Reconcile the stray `430px` / `900px` / `1180px` uses onto this scale.
- [x] 1.2 Add a spacing rhythm to `@theme` (`--spacing-section`,
      `--spacing-section-tight`, `--spacing-gutter`) to replace one-off
      `py-[54px]` / `pb-[104px]` values.
- [x] 1.3 Add a motion scale (`--ease-brand`, `--duration-hover`,
      `--duration-panel`) so every hover uses one curve and one timing.
- [x] 1.4 Add the type scale as tokens (`--text-display-1/2/3`, `--text-lede`),
      correcting `h2` to the reference's `clamp(42px, 5vw, 78px)`.

### Step 2 — Extract repeated patterns into component classes

This is where the 932 arbitrary variants collapse.

- [ ] 2.1 `.container-page` — replaces the 36 inlined container blobs.
- [ ] 2.2 `.eyebrow` — replaces 177 inlined copies. Settle the tracking at the
      reference's `.13em` (resolves inconsistency #7).
- [ ] 2.3 `.display-1` / `.display-2` / `.display-3` / `.lede` — replaces the
      repeated `font-display text-[clamp(...)] leading-[.98] font-normal` blobs.
- [ ] 2.4 `.tag`, `.status`, `.status-future`, `.sticker` — from the reference's
      own definitions.
- [ ] 2.5 `.card` + `.card-media` + `.card-body` — one hover contract
      (`translateY(-5px)` + `0 18px 42px rgba(18,17,19,.1)`) applied everywhere,
      replacing the four slightly-different card hovers in use today.
- [ ] 2.6 `.section-head` — the "eyebrow + h2 + right-hand blurb" pattern used on
      5 pages.

### Step 3 — Rewrite components against the new layer

One file per commit, in dependency order. Mechanical, low-risk, high-volume.

- [ ] 3.1 `site-header.tsx` (479 lines) — also unpack the nav-CTA `[&>span]:`
      blob into real child elements, and give the mega-grid a `tablet:` fallback.
- [ ] 3.2 `home-hero.tsx`, `home-page.tsx`, `pillar-rotator.tsx`
- [ ] 3.3 `campaign-cards.tsx`, `events-rail.tsx`
- [ ] 3.4 `blog-magazine.tsx`, `event-archive.tsx`, `project-archive.tsx`
- [ ] 3.5 `donation-intent.tsx`, `involvement-application.tsx`
- [ ] 3.6 `site-footer.tsx`, `rich-hero.tsx`, `side-panel.tsx`
- [ ] 3.7 Page files: `about`, `blog`, `donate`, `events`, `get-involved`,
      `projects`, `error`, `not-found`
- [ ] 3.8 De-duplicate the 4 identical stat-circle blocks in `pillar-rotator.tsx`
      into a mapped array.

### Step 4 — Reconcile against the reference

Fix the table in §1.3, one entry per commit.

- [ ] 4.1 Split `.btn-dark` from `.btn-brand`; restore `background: var(--ink)`.
- [ ] 4.2 Rebuild campaign cards to the reference's **final** state: no border,
      no shadow, no rotation, flip on `hover` / `focus-within` **and** retain the
      existing click-to-flip for touch. (A superset of both behaviours.)
- [ ] 4.3 Add the `.mega-item:hover .mega-icon` treatment.
- [ ] 4.4 Fix the invisible events progress fill (`block h-full bg-brand` plus
      `transition-[width]`).
- [ ] 4.5 Drop the `border-color` changes from `.btn-light` / `.btn-brand` hover.
- [ ] 4.6 Normalise every hover to the Step 1.3 motion tokens.
- [ ] 4.7 Sweep for any remaining early-pass/late-pass hybrids not yet catalogued.

### Step 5 — Close the responsive gaps

- [ ] 5.1 Reinstate the dropped `max-width: 560px` rules (event card basis
      `82vw`, media height `250px`, `h3` `27px`, bottom row `align-items: flex-end`).
- [ ] 5.2 Reinstate the dropped `max-width: 360px` rules (hero `h1` `39px`, hero
      `p` `15px`).
- [ ] 5.3 Give `site-header.tsx` a real responsive mega-menu (single column on
      `tablet`).
- [ ] 5.4 Add tablet steps to the ratio grids in `pillar-rotator`,
      `project-archive`, `event-archive`, `blog-magazine`.
- [ ] 5.5 Make the `pillar-rotator` stat row wrap to 2×2 on `mobile`.
- [ ] 5.6 Audit every fixed `h-[…px]` / `min-h-[…px]` for small-screen relief.
- [ ] 5.7 Verify no horizontal overflow at 320px on any route.

### Step 6 — Premium finish pass

The "make it feel expensive" work, done last so it lands on clean foundations.

- [ ] 6.1 **Typography.** Load the display and UI faces via `next/font` with
      `display: 'swap'` and metric-matched fallbacks (removes FOUT and the
      Android-has-no-Georgia problem). **Decision needed:** keep the
      Georgia/Arial character exactly, or move to a closely-matched premium
      pairing? Recommendation: a transitional serif for display plus a neutral
      grotesque for UI, chosen to sit within a few percent of current metrics so
      nothing reflows.
- [ ] 6.2 **Colour blending.** Introduce tonal transitions between the
      `paper → white → cream → brand` section stack; soften the `bg-brand` CTA
      band's entry and exit edges.
- [ ] 6.3 **Rhythm.** Replace one-off paddings with the Step 1.2 spacing scale.
- [ ] 6.4 **Depth.** One shadow scale (`--shadow-card`, `--shadow-raised`,
      `--shadow-panel`) replacing the six ad-hoc `shadow-[0_…]` values.
- [ ] 6.5 **Micro-interactions.** Unify focus rings, add cursor affordances on
      the rail, refine the card lift so image scale and card lift share a curve.
- [ ] 6.6 **Image treatment.** The `saturate-[.88] contrast-[1.02]` filter is
      repeated 20+ times inline — move it to a `.photo` class and tune once.

### Step 7 — Cleanup and verification

- [ ] 7.1 Delete the dead `.event-motion-card` and `.pillar-progress` CSS.
- [ ] 7.2 Delete `migrate_tailwind.js`, `clean_css.js`, `find_classes.js`,
      `replace_container.js`.
- [ ] 7.3 `npm run lint` clean; `npm run build` clean.
- [ ] 7.4 Side-by-side visual diff against the Step 0.2 screenshots — every
      difference must be an intended entry from §1.3 or Step 6.
- [ ] 7.5 Confirm the CSS bundle shrank; record before/after numbers.
- [ ] 7.6 Re-check keyboard navigation and `prefers-reduced-motion` on every
      interactive component.

---

## 3a. Git identity — borrowed machine

This work is being done on a machine that belongs to someone else. The two
identities must not be mixed up.

| Scope | Identity | Applies to |
| --- | --- | --- |
| `--global` (`C:/Users/DDR_PC/.gitconfig`) | `Oluwatosin Ademola <Princetyson49@gmail.com>` | **Machine owner.** Every other repo on this machine. **Do not modify.** |
| `--local` (this repo only) | `Bankole Olaniyi <adeniyisunday2244@gmail.com>` | This repo's commits only. |

`origin` → `https://github.com/VIFLO-BOS/khreeolife`

### End-of-project teardown checklist

Run **after** the final push, to leave the machine as it was found:

```bash
git config --local --unset user.name
git config --local --unset user.email
git remote remove origin
cmdkey /delete:git:https://github.com
```

> **The last line is the one that is easy to miss.** The credential helper is
> `manager` (Git Credential Manager), set at *system* level in
> `C:/Program Files/Git/etc/gitconfig`. On the first push it stores the GitHub
> token in **Windows Credential Manager, machine-wide** — that is not
> repo-scoped, and `git config --local --unset` will not touch it. Without that
> line the account stays logged in on the owner's machine.
>
> Verify the reset with:
> ```bash
> git config user.email          # should print the OWNER's address
> cmdkey /list | grep -i github  # should print nothing
> ```

As of the baseline commit, `cmdkey /list` showed no GitHub entries — nothing has
been stored yet.

---

## 4. Decisions taken

All three open questions were settled with the user on 2026-09-08.

| # | Question | Decision |
| --- | --- | --- |
| 1 | Node.js install | **Install Node LTS via winget.** Done — v24.19.0 / npm 11.17.0. Step 0.4 closed. |
| 2 | Typography direction (Step 6.1) | **Metric-matched premium pairing.** A transitional serif for display plus a neutral grotesque for UI, loaded via `next/font`, chosen to sit within a few percent of the current Georgia/Arial metrics so nothing reflows. |
| 3 | Campaign card flip (Step 4.2) | **Hover + click.** Flip on `hover` / `focus-within` to match the reference on desktop, and keep the existing click-to-flip so touch devices still work. Superset of both behaviours. |

### Consequences for the plan

- **Step 6.1** is now a build task, not a question. Candidate faces must be
  checked against Georgia's metrics (cap height, x-height, advance widths)
  before selection, and paired with `next/font` `adjustFontFallback` so first
  paint does not shift.
- **Step 4.2** must keep `onClick` state alongside the CSS hover rule. The
  flip state becomes `hovered || focused || clicked`, so a click that flips a
  card must not be undone when the pointer leaves.
