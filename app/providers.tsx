'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'midnight' | 'obsidian' | 'sunset';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    // Remove all theme classes
    root.classList.remove('dark', 'theme-midnight', 'theme-obsidian', 'theme-sunset');

    // Add new theme class
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else if (newTheme !== 'light') {
      root.classList.add(`theme-${newTheme}`);
      // Also add 'dark' for components that rely on .dark class for basic dark mode styles
      root.classList.add('dark');
    }

    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    const initial = stored ||
      (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    setThemeState(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div className={mounted ? '' : 'invisible'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
