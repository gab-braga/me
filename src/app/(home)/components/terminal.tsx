"use client";

import { sleep } from "@/lib/sleep";
import { useEffect, useState } from "react";

type CodeLine = { text: string; color: string };

const CODE_LINES: CodeLine[] = [
  { text: "import React from 'react';", color: "#60A5FA" },
  { text: "import { useState } from 'react';", color: "#60A5FA" },
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
  { text: "export default Dev;", color: "#60A5FA" },
  { text: "", color: "" },
];

export function Terminal() {
  const [codeLines, setCodeLines] = useState<CodeLine[]>([]);

  async function typeCodeLines() {
    for (const line of CODE_LINES) {
      let typedText = "";
      setCodeLines((prev) => [...prev, { ...line, text: "" }]);
      for (const char of line.text) {
        typedText += char;
        setCodeLines((prev) => [
          ...prev.slice(0, -1),
          { ...line, text: typedText },
        ]);
        await sleep(30);
      }
    }
  }

  useEffect(() => {
    const timeout = setTimeout(typeCodeLines, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="overflow-hidden rounded-[14px] border border-[#1c2333] bg-[#0a0e16] text-xs">
      <div className="flex items-center gap-1.5 border-b border-[#1c2333] bg-[#0d1117] px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]"></div>
        <span className="font-mono ml-2 text-[0.72rem] text-[#6b7280]">
          portfolio.tsx
        </span>
      </div>
      <div className="font-mono p-5 px-6 leading-[1.8] min-h-65">
        {codeLines.map(({ text, color }, index) => {
          const isLastLine = index === codeLines.length - 1;
          return (
            <pre key={index} style={{ color }} className="min-h-5">
              {text}
              {isLastLine && <Cursor />}
            </pre>
          );
        })}
      </div>
    </div>
  );
}

function Cursor() {
  return (
    <span
      aria-hidden="true"
      className="ml-px inline-block h-[1.1em] w-0.5 animate-blink bg-primary-light align-middle motion-reduce:animate-none"
    ></span>
  );
}
