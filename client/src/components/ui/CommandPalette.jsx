import React, { useEffect, useState } from 'react';
import {
  Search,
  User,
  Code2,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Github,
  ExternalLink,
  FileDown,
  X,
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioConfig';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  const actions = [
    {
      id: 'about',
      label: 'Navigate to About',
      section: 'Section',
      icon: User,
      onSelect: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      id: 'skills',
      label: 'Navigate to Skills',
      section: 'Section',
      icon: Code2,
      onSelect: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      id: 'projects',
      label: 'Navigate to Projects',
      section: 'Section',
      icon: FolderGit2,
      onSelect: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      id: 'experience',
      label: 'Navigate to Experience',
      section: 'Section',
      icon: Briefcase,
      onSelect: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      id: 'education',
      label: 'Navigate to Education',
      section: 'Section',
      icon: GraduationCap,
      onSelect: () => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      id: 'certificates',
      label: 'Navigate to Certificates',
      section: 'Section',
      icon: Award,
      onSelect: () => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      id: 'contact',
      label: 'Navigate to Contact',
      section: 'Section',
      icon: Mail,
      onSelect: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      id: 'collabsphere',
      label: 'Open CollabSphere Live Demo',
      section: 'Project',
      icon: ExternalLink,
      onSelect: () => window.open('https://collab-sphere-three-lyart.vercel.app', '_blank', 'noopener'),
    },
    {
      id: 'github',
      label: 'Open GitHub Profile',
      section: 'External',
      icon: Github,
      onSelect: () => window.open(PORTFOLIO_CONFIG.githubUrl, '_blank', 'noopener'),
    },
    {
      id: 'resume',
      label: 'Download Resume (PDF)',
      section: 'Action',
      icon: FileDown,
      onSelect: () => {
        const link = document.createElement('a');
        link.href = PORTFOLIO_CONFIG.resumePath;
        link.download = 'Rajni_Resume.pdf';
        link.click();
      },
    },
  ];

  const filtered = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) setQuery('');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-4 h-4 text-slate-400 mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search section..."
            className="w-full bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close command palette"
            className="p-1 text-slate-400 hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="py-8 text-center text-sm text-slate-500">
              No matching commands found.
            </p>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.onSelect();
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm text-slate-700 dark:text-slate-200 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-amber-300 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-indigo-500" />
                    {item.label}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {item.section}
                  </span>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}