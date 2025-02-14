"use client";

import { useTheme } from "./theme-provider";

export default function ThemeSwitch() {
  const { isDark, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button className="relative w-14 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800">
        <div 
          className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md
            ${isDark ? 'translate-x-8' : 'translate-x-1'}
          `}
        />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div
        className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 ease-in-out flex items-center justify-center
          ${isDark ? 'translate-x-8' : 'translate-x-1'}
        `}
      >
        <span 
          className={`absolute transition-opacity duration-300 text-sm
            ${isDark ? 'opacity-0' : 'opacity-100'}
          `}
          aria-hidden="true"
        >
          🌞
        </span>
        <span
          className={`absolute transition-opacity duration-300 text-sm
            ${isDark ? 'opacity-100' : 'opacity-0'}
          `}
          aria-hidden="true"
        >
          🌙
        </span>
      </div>
    </button>
  );
}