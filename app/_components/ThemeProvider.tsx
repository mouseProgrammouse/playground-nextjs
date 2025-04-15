'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import {
  THEME_DARK,
  THEME_DEFAULT,
  THEME_LIGHT,
  THEME_STORAGE_KEY,
} from '../_utils/const';

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: THEME_DEFAULT,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(THEME_DEFAULT);

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === THEME_DARK || storedTheme === THEME_LIGHT) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === THEME_DARK) {
      document.documentElement.classList.add(THEME_DARK);
    } else {
      document.documentElement.classList.remove(THEME_DARK);
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
