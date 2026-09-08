const fs = require('fs');
const path = require('path');

const cssFile = 'c:/Users/user/Desktop/Khreolife/khreeolife-next/src/app/globals.css';
let cssContent = fs.readFileSync(cssFile, 'utf8');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('c:/Users/user/Desktop/Khreolife/khreeolife-next/src');
let allTsxContent = '';
files.forEach(f => {
    allTsxContent += fs.readFileSync(f, 'utf8') + '\n';
});

// A simple regex to find all class selectors in globals.css
const classRegex = /\.([a-zA-Z0-9_-]+)(?![a-zA-Z0-9_-])/g;
const classes = new Set();
let match;
while ((match = classRegex.exec(cssContent)) !== null) {
    if (!match[1].match(/^[0-9]/)) {
        classes.add(match[1]);
    }
}

console.log('Total unique classes in globals.css:', classes.size);

const unusedClasses = [];
classes.forEach(cls => {
    // Check if class is used in any TSX file
    // We look for the class name inside quotes, backticks, or as an exact word match
    const regex = new RegExp(`\\b${cls}\\b`);
    if (!regex.test(allTsxContent)) {
        unusedClasses.push(cls);
    }
});

console.log('Unused classes:', unusedClasses.length);
console.log(unusedClasses.join(', '));

// For each unused class, let's remove its rules from globals.css
// Note: This is a basic regex approach and might not catch nested rules perfectly,
// but works for standard flat CSS or basic media queries.
let newCss = cssContent;
unusedClasses.forEach(cls => {
    // Remove blocks like `.className { ... }` or `.className img { ... }`
    const ruleRegex = new RegExp(`(^|\\n)\\s*\\.${cls}[^{]*\\{[^}]*\\}`, 'g');
    newCss = newCss.replace(ruleRegex, '');
});

// Clean up empty media queries
newCss = newCss.replace(/@media[^{]+\{\s*\}/g, '');

if (newCss !== cssContent) {
    fs.writeFileSync(cssFile, newCss, 'utf8');
    console.log('globals.css updated. Original length:', cssContent.length, 'New length:', newCss.length);
}
