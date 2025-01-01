"use client";

import { 
  createContext, 
  useContext, 
  useEffect, 
  useState, 
  useCallback, 
  ReactNode 
} from "react";

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    return savedTheme === 'dark' || 
      ((!savedTheme || savedTheme === 'system') && 
        window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [mounted, setMounted] = useState<boolean>(false);

  const applyTheme = useCallback((dark: boolean): void => {
    setIsDark(dark);
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = useCallback((): void => {
    applyTheme(!isDark);
  }, [isDark, applyTheme]);

  const handleSystemThemeChange = useCallback((e: MediaQueryListEvent): void => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (!savedTheme || savedTheme === 'system') {
      applyTheme(e.matches);
    }
  }, [applyTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    setMounted(true);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [handleSystemThemeChange]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}