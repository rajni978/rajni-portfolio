import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '../../data/portfolioConfig';
import ThemeToggle from '../ui/ThemeToggle';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 145;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-alabaster-50/85 dark:bg-obsidian-950/85 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          data-cursor="hover"
          className="flex items-center gap-2.5 font-bold text-lg tracking-tight text-slate-900 dark:text-white shrink-0"
        >
          <span className="w-7 h-7 rounded-lg bg-violet-600/15 border border-violet-500/35 flex items-center justify-center text-xs font-mono font-bold text-violet-600 dark:text-violet-300">
            R
          </span>
          <span>
            Rajni<span className="text-violet-500">.</span>
          </span>
        </a>

        <nav aria-label="Primary Navigation" className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                data-cursor="hover"
                className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-indigo-600 dark:text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navActivePill"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    className="absolute inset-0 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 -z-10"
                  />
                )}
                {link.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            data-cursor="hover"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-sm transition-colors"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            className="xl:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-slate-800"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden overflow-hidden bg-white dark:bg-obsidian-900 border-b border-slate-200 dark:border-slate-800"
          >
            <div className="px-4 py-4 space-y-1.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
                    activeSection === link.id
                      ? 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-300'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-obsidian-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 flex items-center gap-2 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('contact');
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-violet-600 text-white"
                >
                  Let&apos;s Connect
                </a>
                <a
                  href={PORTFOLIO_CONFIG.resumePath}
                  download="Rajni_Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200"
                >
                  <FileDown className="w-3.5 h-3.5" /> Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}