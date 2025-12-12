"use client";

import { useState, useEffect } from "react";

const KeyboardHint = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf("MAC") >= 0);

    // Show hint after 3 seconds, hide after 8 seconds
    const showTimer = setTimeout(() => setIsVisible(true), 3000);
    const hideTimer = setTimeout(() => setIsVisible(false), 8000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 animate-fade-in">
      <div className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300">
        <span>Press</span>
        <kbd className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium">
          {isMac ? "⌘" : "Ctrl"}
        </kbd>
        <kbd className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium">
          K
        </kbd>
        <span>to search</span>
      </div>
    </div>
  );
};

export default KeyboardHint;
