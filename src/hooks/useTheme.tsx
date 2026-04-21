import { useEffect, useState } from "react";

const INITIAL_THEME = "original";

export function useTheme() {
  const [theme, setTheme] = useState(INITIAL_THEME);
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = (theme: string) => {
    setTheme(theme);
  };
  return { theme, toggleTheme };
}
