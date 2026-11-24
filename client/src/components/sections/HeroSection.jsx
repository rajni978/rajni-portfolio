import React, { useState } from 'react';
import { ArrowUpRight, FileDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '../../data/portfolioConfig';
import { fadeUpVariant, LUXURY_EASE } from '../../utils/motionConfig';

export default function HeroSection() {
  const [depth, setDepth] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const stageParallaxY = useTransform(scrollY, [0, 700], [0, 32]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setDepth({ x: normX * 10, y: normY * 8 });
  };

  const handleMouseLeave = () => setDepth({ x: 0, y: 0 });

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-alabaster-50 dark:bg-obsidian-950 bg-architectural-grid py-20 lg:py-28 border-b border-slate-200/80 dark:border-violet-950/70 transition-colors duration-500"
    >
      {/* Rectangular Midnight Purple Ambient Lighting */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-[4%] w-[38rem] h-80 bg-gradient-to-r from-violet-600/14 via-purple-600/10 to-transparent dark:from-violet-700/24 dark:via-purple-800/18 dark:to-transparent blur-[95px]" />
        <div className="absolute bottom-0 right-[2%] w-[36rem] h-80 bg-gradient-to-l from-indigo-500/12 via-violet-500/08 to-transparent dark:from-indigo-700/22 dark:via-violet-900/16 dark:to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Recruiter Clarity & Editorial Hierarchy */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0.08}
            >
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium tracking-wide">
                <span className="w-2 h-2 bg-emerald-400" />
                <span>{PORTFOLIO_CONFIG.availability}</span>
              </span>
            </motion.div>

            <div className="space-y-2.5">
              <motion.p
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={0.16}
                className="text-sm sm:text-base font-mono uppercase tracking-[0.22em] text-violet-600 dark:text-violet-300"
              >
                {PORTFOLIO_CONFIG.heroLabel}
              </motion.p>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.24, ease: LUXURY_EASE }}
                    className="block"
                  >
                    {PORTFOLIO_CONFIG.headlineLine1}
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.36, ease: LUXURY_EASE }}
                    className="block bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 dark:from-violet-300 dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent"
                  >
                    {PORTFOLIO_CONFIG.headlineLine2}
                  </motion.span>
                </span>
              </h1>
            </div>

            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0.46}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300/90 max-w-xl leading-relaxed"
            >
              {PORTFOLIO_CONFIG.supportingText}
            </motion.p>

            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0.54}
              className="flex flex-wrap items-center gap-2 pt-0.5"
            >
              {PORTFOLIO_CONFIG.coreBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-white dark:bg-obsidian-900 text-slate-800 dark:text-violet-200 border border-slate-200 dark:border-violet-500/30 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0.62}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#projects"
                data-cursor="hover"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-indigo-glow transition-all hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_CONFIG.resumePath}
                download="Rajni_Resume.pdf"
                data-cursor="hover"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-white/95 dark:bg-obsidian-900/95 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-violet-500/35 hover:border-violet-500 transition-all hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 text-violet-500" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={0.7}
              className="flex flex-wrap items-center gap-5 pt-1 text-sm"
            >
              <a
                href={PORTFOLIO_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-400/50">|</span>
              <a
                href={PORTFOLIO_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-400/50">|</span>
              <a
                href={`mailto:${PORTFOLIO_CONFIG.email}`}
                data-cursor="hover"
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Layered Rectangular Architectural Composition */}
          <div className="lg:col-span-6">
            <motion.div
              style={{ y: stageParallaxY }}
              className="relative mx-auto max-w-xl min-h-[340px] sm:min-h-[390px] flex items-center justify-center select-none"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-3 bottom-6 rounded-xl border border-violet-500/20 dark:border-violet-400/20 bg-gradient-to-br from-violet-500/[0.06] via-transparent to-indigo-500/[0.08] dark:from-violet-600/[0.12] dark:to-purple-950/[0.25]"
              />

              {/* Primary Layered Panel */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, x: depth.x, y: depth.y }}
                transition={{ duration: 0.75, delay: 0.3, ease: LUXURY_EASE }}
                className="relative z-20 w-full sm:w-[90%] rounded-xl bg-white/95 dark:bg-[#110e22]/95 border border-slate-200 dark:border-violet-400/30 p-5 sm:p-6 shadow-[0_24px_60px_-15px_rgba(15,10,40,0.45)] backdrop-blur-md"
              >
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-violet-500/20">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-violet-600 dark:text-violet-300">
                      Featured Build • MERN + AI
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                      CollabSphere Workspace
                    </h2>
                  </div>
                  <a
                    href="https://collab-sphere-three-lyart.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-violet-600/15 hover:bg-violet-600 text-violet-700 dark:text-violet-200 hover:text-white border border-violet-500/30 transition-colors"
                  >
                    <span>Live</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-12 gap-3 mt-4">
                  <div className="col-span-4 rounded-lg bg-alabaster-100 dark:bg-obsidian-950/90 border border-slate-200/80 dark:border-slate-800 p-3 space-y-2">
                    <div className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                      Workspaces
                    </div>
                    <div className="px-2 py-1 rounded bg-violet-600/15 border-l-2 border-violet-500 text-[11px] font-medium text-violet-700 dark:text-violet-200">
                      Team Projects
                    </div>
                    <div className="px-2 py-1 rounded text-[11px] text-slate-500 dark:text-slate-400">
                      Markdown Notes
                    </div>
                    <div className="px-2 py-1 rounded text-[11px] text-slate-500 dark:text-slate-400">
                      Shared Files
                    </div>
                  </div>

                  <div className="col-span-8 rounded-lg bg-alabaster-100 dark:bg-obsidian-950/90 border border-slate-200/80 dark:border-slate-800 p-3 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                          Project Architecture
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20">
                          JWT Protected
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Role-based member collaboration, Cloudinary asset
                        uploads, and contextual Gemini AI assistance.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {['React', 'Express', 'MongoDB', 'Gemini API'].map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-obsidian-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Secondary Layered Surface (Bottom-Left) */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, x: -depth.x * 1.2, y: -depth.y * 1.1 }}
                transition={{ duration: 0.8, delay: 0.45, ease: LUXURY_EASE }}
                className="absolute -bottom-4 left-0 sm:left-2 z-30 w-[82%] sm:w-[70%] rounded-xl bg-white/95 dark:bg-[#16122c]/95 border border-slate-200 dark:border-violet-400/25 p-4 shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-violet-300/80 mb-2">
                  <span>Shipped Full-Stack Applications</span>
                  <span>04 Builds</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <a
                    href="#projects"
                    className="p-2 rounded-lg bg-alabaster-100 dark:bg-obsidian-950/90 border border-slate-200/80 dark:border-slate-800 hover:border-violet-500/50 transition-colors"
                  >
                    <div className="font-semibold text-slate-900 dark:text-white truncate">
                      Feedback
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">
                      REST + DB
                    </div>
                  </a>
                  <a
                    href="#projects"
                    className="p-2 rounded-lg bg-alabaster-100 dark:bg-obsidian-950/90 border border-slate-200/80 dark:border-slate-800 hover:border-violet-500/50 transition-colors"
                  >
                    <div className="font-semibold text-slate-900 dark:text-white truncate">
                      Ask Gemini
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">
                      AI Proxy
                    </div>
                  </a>
                  <a
                    href="#projects"
                    className="p-2 rounded-lg bg-alabaster-100 dark:bg-obsidian-950/90 border border-slate-200/80 dark:border-slate-800 hover:border-violet-500/50 transition-colors"
                  >
                    <div className="font-semibold text-slate-900 dark:text-white truncate">
                      JALSETU
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">
                      BluePulse
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Tertiary Layered Surface (Top-Right) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, x: depth.x * 1.3, y: -depth.y * 1.2 }}
                transition={{ duration: 0.8, delay: 0.58, ease: LUXURY_EASE }}
                className="hidden sm:flex items-center gap-2.5 absolute -top-3 right-2 z-30 px-3.5 py-2 rounded-lg bg-white/95 dark:bg-[#191433]/95 border border-slate-200 dark:border-violet-400/30 shadow-lg backdrop-blur-md"
              >
                <span className="w-2 h-5 bg-gradient-to-b from-violet-400 to-indigo-600 rounded-sm" />
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Architecture
                  </div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    REST APIs • Auth • Database
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}