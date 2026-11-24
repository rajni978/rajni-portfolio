import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, Server } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {project.featured && (
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                      Featured Project
                    </span>
                  )}
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-alabaster-100 dark:bg-obsidian-800 text-slate-600 dark:text-slate-300"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h3
                  id="modal-project-title"
                  className="text-2xl font-bold text-slate-900 dark:text-white"
                >
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {project.tagline}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-obsidian-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 mt-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-amber-400 mb-2">
                  Project Overview
                </h4>
                <p>{project.overview}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-alabaster-50 dark:bg-obsidian-950/70 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-rose-500 mb-1.5">
                    Problem Statement
                  </h4>
                  <p className="text-xs md:text-sm">{project.problemStatement}</p>
                </div>
                <div className="p-4 rounded-xl bg-alabaster-50 dark:bg-obsidian-950/70 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1.5">
                    Solution
                  </h4>
                  <p className="text-xs md:text-sm">{project.solution}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-amber-400 mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4" /> Key Features
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-amber-400 mb-2">
                    My Contribution
                  </h4>
                  <p className="text-xs md:text-sm">{project.myContribution}</p>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-amber-400 mb-2">
                    Development Challenges
                  </h4>
                  <p className="text-xs md:text-sm">{project.challenges}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-amber-400 mb-2.5 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" /> Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 mt-8 pt-5 border-t border-slate-200 dark:border-slate-800">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-slate-300 dark:border-slate-700 hover:border-indigo-500 text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <Github className="w-4 h-4" /> Source Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
              {project.backendUrl && (
                <a
                  href={project.backendUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-slate-300 dark:border-slate-700 hover:border-indigo-500 text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <Server className="w-4 h-4" /> Backend API
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}