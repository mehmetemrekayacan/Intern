import { paragraphs } from "/javascript/lorem-generator/data.js";

const value = document.querySelector("#value");
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const generateButton = document.querySelector("#generate-button");

function getLines(paragraph, count) {
    const lines = paragraph.split("\n");
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push(lines[i % lines.length]);
    }
    return result;
}

function generate() {
    output.innerHTML = ""; 
    const lineCount = Math.min(input.value, 150);
    const lines = getLines(paragraphs, lineCount);
    lines.forEach(line => {
        const p = document.createElement("p");
        p.textContent = line;
        output.appendChild(p);
    });
}

generateButton.addEventListener("click", () => {
    const inputValue = Math.max(0, Math.min(input.value, 150)); 
    input.value = inputValue;
    generate();
});