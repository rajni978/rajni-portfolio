import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-white dark:bg-obsidian-950 py-10 transition-colors duration-500">
      {/* Subtle Illuminated Top Border */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/45 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-200/70 dark:border-slate-800/70">
          <div>
            <div className="flex items-center gap-2.5 font-bold text-lg text-slate-900 dark:text-white">
              <span className="w-6 h-6 rounded-md bg-violet-600/15 border border-violet-500/35 flex items-center justify-center text-xs font-mono font-bold text-violet-600 dark:text-violet-300">
                R
              </span>
              <span>
                {PORTFOLIO_CONFIG.name}
                <span className="text-violet-500">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5">
              Full-Stack MERN Developer building practical web applications &amp; APIs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              data-cursor="hover"
              className="p-2.5 rounded-xl bg-alabaster-100 dark:bg-obsidian-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-violet-500 hover:text-violet-500 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-cursor="hover"
              className="p-2.5 rounded-xl bg-alabaster-100 dark:bg-obsidian-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-violet-500 hover:text-violet-500 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_CONFIG.email}`}
              aria-label="Email"
              data-cursor="hover"
              className="p-2.5 rounded-xl bg-alabaster-100 dark:bg-obsidian-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-violet-500 hover:text-violet-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© {currentYear} {PORTFOLIO_CONFIG.name}. All rights reserved.</p>
          <p className="font-mono text-slate-400 dark:text-slate-500">
            Built with React, Node.js, Express &amp; MongoDB
          </p>
        </div>
      </div>
    </footer>
  );
}