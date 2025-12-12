"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme, type ThemeProviderProps } from "next-themes";

function ThemeTransitionWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const prevThemeRef = React.useRef(theme);

  React.useEffect(() => {
    if (prevThemeRef.current !== theme) {
      document.documentElement.classList.add("theme-transition");
      const timeout = setTimeout(() => {
        document.documentElement.classList.remove("theme-transition");
      }, 300);
      prevThemeRef.current = theme;
      return () => clearTimeout(timeout);
    }
  }, [theme]);

  return <>{children}</>;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeTransitionWrapper>{children}</ThemeTransitionWrapper>
    </NextThemesProvider>
  );
}