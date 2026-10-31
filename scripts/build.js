
const fs = require("node:fs");
const path = require("node:path");

const files = [
    "index.html",
    "style.css",
    "script.js"
];

const outputFolder = "dist";

// Create deployment folder
fs.mkdirSync(outputFolder, { recursive: true });

// Copy website files
for (const file of files) {
    fs.copyFileSync(
        file,
        path.join(outputFolder, file)
    );

    console.log(`Copied ${file}`);
}

console.log("Website build completed!");
