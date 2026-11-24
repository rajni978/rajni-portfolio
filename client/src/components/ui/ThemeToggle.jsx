import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      data-cursor="hover"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
      className="relative inline-flex items-center gap-1 p-1 rounded-full bg-alabaster-200/90 dark:bg-obsidian-850 border border-slate-300/90 dark:border-slate-700/90 shadow-inner transition-colors duration-300"
    >
      <span
        className={`relative z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors duration-300 ${
          !isDark ? 'text-slate-900' : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        {!isDark && (
          <motion.span
            layoutId="themePillIndicator"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            className="absolute inset-0 rounded-full bg-white shadow-sm border border-slate-200/80 -z-10"
          />
        )}
        <Sun className="w-3.5 h-3.5 text-amber-500" />
        <span className="hidden sm:inline">Light</span>
      </span>

      <span
        className={`relative z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        {isDark && (
          <motion.span
            layoutId="themePillIndicator"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            className="absolute inset-0 rounded-full bg-indigo-600 shadow-sm -z-10"
          />
        )}
        <Moon className="w-3.5 h-3.5 text-amber-300" />
        <span className="hidden sm:inline">Dark</span>
      </span>
    </button>
  );
}