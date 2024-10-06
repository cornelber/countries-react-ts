import React, { createContext, useState, useEffect } from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeProviderType {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children } : ThemeProviderType) => {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
