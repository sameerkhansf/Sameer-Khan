"use client";

export default function PrintButton() {
  return (
    <button onClick={() => window.print()} className="meta link-quiet">
      Print / save as PDF
    </button>
  );
}
