// ── Terminal typewriter ──
const lines = [
  { text: "import React from 'react';", color: "#A78BFA" },
  { text: "import { useState } from 'react';", color: "#A78BFA" },
  { text: "", color: "" },
  { text: "interface Props {", color: "#60A5FA" },
  { text: "  name: string;", color: "#E2E8F0" },
  { text: "  role: 'Frontend Engineer';", color: "#E2E8F0" },
  { text: "}", color: "#60A5FA" },
  { text: "", color: "" },
  { text: "const Dev = ({ name, role }: Props) => {", color: "#34D399" },
  { text: "  return (", color: "#E2E8F0" },
  { text: "    <div className='portfolio'>", color: "#FCD34D" },
  { text: "      <h1>{name}</h1>", color: "#E2E8F0" },
  { text: "      <p>{role}</p>", color: "#E2E8F0" },
  { text: "    </div>", color: "#FCD34D" },
  { text: "  );", color: "#E2E8F0" },
  { text: "};", color: "#34D399" },
  { text: "", color: "" },
  { text: "export default Dev;", color: "#A78BFA" },
];

const output = document.getElementById("code-output");
let currentLineEl: HTMLElement | null = null;
let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex >= lines.length) {
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    output?.appendChild(cursor);
    return;
  }

  const line = lines[lineIndex];

  if (charIndex === 0) {
    currentLineEl = document.createElement("pre");
    currentLineEl.style.color = line.color || "transparent";
    currentLineEl.style.minHeight = "1.8em";
    output?.appendChild(currentLineEl);
  }

  if (charIndex < line.text.length && currentLineEl) {
    currentLineEl.textContent += line.text[charIndex];
    charIndex++;
    setTimeout(typeLine, line.text.length === 0 ? 0 : 28);
  } else {
    lineIndex++;
    charIndex = 0;
    setTimeout(typeLine, lineIndex % 3 === 0 ? 120 : 40);
  }
}

setTimeout(typeLine, 800);
