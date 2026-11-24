import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../data/portfolioConfig';
import { fadeUpVariant, LUXURY_EASE } from '../../utils/motionConfig';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const visibleCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="skills"
      className="py-20 bg-alabaster-100/70 dark:bg-obsidian-900/40 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-amber-400">
              02 // Technical Stack
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
              Skills &amp; Technologies
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {[{ id: 'all', title: 'All Areas' }, ...SKILL_CATEGORIES].map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  data-cursor="hover"
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                    active
                      ? 'text-white'
                      : 'bg-white dark:bg-obsidian-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="skillTabPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-xl bg-indigo-600 -z-10"
                    />
                  )}
                  {cat.title}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleCategories.map((category) => (
            <motion.div
              layout
              key={category.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: LUXURY_EASE }}
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 shadow-executive-light dark:shadow-none transition-colors"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-alabaster-100 dark:bg-obsidian-950 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-500/40 hover:text-indigo-600 dark:hover:text-amber-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}