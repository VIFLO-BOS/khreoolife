const fs = require('fs');
const path = require('path');

const containerClasses = "mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)]";

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

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content;
    
    // Replace exact "container"
    newContent = newContent.replace(/className="container"/g, `className="${containerClasses}"`);
    // Replace "container " (at the start of multiple classes)
    newContent = newContent.replace(/className="container /g, `className="${containerClasses} `);
    // Replace " container " (in the middle)
    newContent = newContent.replace(/ className="([^"]*) container /g, ` className="$1 ${containerClasses} `);
    // Replace " container" (at the end)
    newContent = newContent.replace(/ className="([^"]*) container"/g, ` className="$1 ${containerClasses}"`);

    // Handle string literals in clsx or similar, but the user mostly uses className="..."
    // Also handle `<Reveal className="container...">`
    newContent = newContent.replace(/className="([^"]*)\bcontainer\b([^"]*)"/g, (match, p1, p2) => {
        return `className="${p1}${containerClasses}${p2}"`.replace(/  +/g, ' ');
    });

    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Updated ${file}`);
    }
});
