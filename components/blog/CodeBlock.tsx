"use client";

import { useState, useRef, useEffect } from "react";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode;
}

export default function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const copyCode = async () => {
    if (preRef.current) {
      const codeElement = preRef.current.querySelector("code");
      if (codeElement) {
        const codeText = codeElement.textContent || "";
        try {
          await navigator.clipboard.writeText(codeText);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error("Failed to copy:", err);
        }
      }
    }
  };

  return (
    <div className="relative group my-6">
      <pre
        ref={preRef}
        tabIndex={0}
        className={`relative overflow-x-auto rounded-md bg-gray-900 dark:bg-gray-950 p-5 text-sm border border-gray-800 dark:border-gray-700 ${className || ""}`}
        {...props}
      >
        {children}
      </pre>
      <button
        onClick={copyCode}
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-gray-300 dark:text-gray-400 rounded-lg text-xs font-medium flex items-center gap-2"
        aria-label="Copy code"
      >
        {copied ? (
          <>
            <svg
              className="w-3.5 h-3.5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Copy
          </>
        )}
      </button>
    </div>
  );
}
