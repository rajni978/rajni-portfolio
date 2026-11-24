import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../../data/portfolioConfig';
import { fadeUpVariant, LUXURY_EASE } from '../../utils/motionConfig';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 bg-alabaster-100/70 dark:bg-obsidian-900/40 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-amber-400">
            04 // Experience
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
            Mentorship &amp; Academic Facilitation
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-indigo-500/35 ml-3 md:ml-6 space-y-8">
          {EXPERIENCE_DATA.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: LUXURY_EASE }}
              className="relative pl-8"
            >
              <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-indigo-600 border-4 border-alabaster-50 dark:border-obsidian-950" />

              <div className="p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-slate-800 shadow-executive-light dark:shadow-none">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-amber-400 flex items-center gap-1.5 mt-0.5">
                      <Briefcase className="w-4 h-4" /> {exp.organization}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-lg text-xs font-mono bg-alabaster-100 dark:bg-obsidian-950 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                    {exp.duration}
                  </span>
                </div>

                <ul className="grid sm:grid-cols-2 gap-2.5 mt-4">
                  {exp.responsibilities.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}