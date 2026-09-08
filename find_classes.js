const fs = require('fs');

const cssContent = fs.readFileSync('c:/Users/user/Desktop/Khreolife/khreeolife-next/src/app/globals.css', 'utf8');

// A simple regex to find all class selectors
const classRegex = /\.([a-zA-Z0-9_-]+)(?![a-zA-Z0-9_-])/g;
const classes = new Set();
let match;
while ((match = classRegex.exec(cssContent)) !== null) {
    // Ignore fractional Tailwind classes if they accidentally match
    if (!match[1].match(/^[0-9]/)) {
        classes.add(match[1]);
    }
}

console.log('Total unique classes in globals.css:', classes.size);
console.log([...classes].slice(0, 50).join(', '));
