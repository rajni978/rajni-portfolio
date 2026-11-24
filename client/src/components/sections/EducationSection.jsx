import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA } from '../../data/portfolioConfig';
import { fadeUpVariant } from '../../utils/motionConfig';

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 border-b border-slate-200/80 dark:border-slate-800/80"
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
            05 // Education
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
            Academic Background
          </h2>
        </motion.div>

        {EDUCATION_DATA.map((edu) => (
          <motion.div
            key={edu.id}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="p-6 md:p-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-slate-800 shadow-executive-light dark:shadow-none"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-amber-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {edu.note}
                  </p>
                </div>
              </div>

              <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/25 self-start md:self-auto">
                {edu.period}
              </span>
            </div>

            <div className="pt-6">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-indigo-500" /> Core
                Coursework &amp; Learning Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {edu.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-alabaster-100 dark:bg-obsidian-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}