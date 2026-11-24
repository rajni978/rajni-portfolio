import React, { useState } from 'react';
import { Github, ExternalLink, Eye, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../../data/projectsData';
import ProjectMockup from '../ui/ProjectMockup';
import ProjectModal from '../ui/ProjectModal';
import { fadeUpVariant, LUXURY_EASE } from '../../utils/motionConfig';

const FILTER_CATEGORIES = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI'];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.categories.includes(activeFilter));

  const featuredProject = filteredProjects.find((p) => p.featured);
  const secondaryProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-amber-400">
              03 // Featured Work
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
              Selected Full-Stack &amp; AI Projects
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2"
          >
            {FILTER_CATEGORIES.map((category) => {
              const active = activeFilter === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(category)}
                  data-cursor="hover"
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    active
                      ? 'text-white'
                      : 'bg-white dark:bg-obsidian-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="projectFilterPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-xl bg-indigo-600 shadow-sm -z-10"
                    />
                  )}
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        <AnimatePresence mode="popLayout">
          {featuredProject && (
            <motion.article
              layout
              key={featuredProject.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: LUXURY_EASE }}
              whileHover={{ y: -3 }}
              className="mb-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-violet-500/35 p-6 lg:p-8 shadow-executive-light dark:shadow-executive-dark"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-semibold border border-amber-500/25">
                    <Sparkles className="w-3.5 h-3.5" /> Featured Project
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                      {featuredProject.title}
                    </h3>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                      {featuredProject.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {featuredProject.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-alabaster-100 dark:bg-obsidian-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => setSelectedProject(featuredProject)}
                      data-cursor="hover"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-colors"
                    >
                      <Eye className="w-4 h-4" /> Project Details
                    </button>

                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="hover"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-slate-300 dark:border-slate-700 hover:border-violet-500 text-slate-800 dark:text-slate-200 transition-colors"
                      >
                        <Github className="w-4 h-4" /> GitHub
                      </a>
                    )}

                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="hover"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-slate-300 dark:border-slate-700 hover:border-violet-500 text-slate-800 dark:text-slate-200 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <ProjectMockup type={featuredProject.mockupType} />
                </div>
              </div>
            </motion.article>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: LUXURY_EASE }}
                whileHover={{ y: -4 }}
                className="flex flex-col justify-between rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-slate-800 hover:border-violet-500/45 p-5 shadow-executive-light dark:shadow-none transition-colors"
              >
                <div className="space-y-4">
                  <ProjectMockup type={project.mockupType} />

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-alabaster-100 dark:bg-obsidian-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-5 mt-5 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => setSelectedProject(project)}
                    data-cursor="hover"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" /> Details
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="hover"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-slate-300 dark:border-slate-700 hover:border-violet-500 text-slate-700 dark:text-slate-200 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="hover"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-slate-300 dark:border-slate-700 hover:border-violet-500 text-slate-700 dark:text-slate-200 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatePresence>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}