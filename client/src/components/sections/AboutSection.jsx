import React from 'react';
import { Code2, Layers, Wrench, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeUpVariant,
  staggerContainer,
  staggerItem,
} from '../../utils/motionConfig';

const IDENTITY_CARDS = [
  {
    title: 'Developer',
    description:
      'Building clean React UIs and modular Express backends with modern JavaScript.',
    icon: Code2,
  },
  {
    title: 'Full-Stack Learner',
    description:
      'Connecting frontend state, REST APIs, JWT auth, and MongoDB schemas end-to-end.',
    icon: Layers,
  },
  {
    title: 'Project Builder',
    description:
      'Learning by shipping real apps—from collaborative workspaces to Gemini AI tools.',
    icon: Wrench,
  },
  {
    title: 'Problem Solver',
    description:
      'Breaking product requirements into clean components, schemas, and testable logic.',
    icon: Lightbulb,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-amber-400">
            01 // About Me
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
            Practical Full-Stack Development Driven by Curiosity
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-6 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            <motion.p variants={staggerItem}>
              I am <strong className="text-slate-900 dark:text-white">Rajni</strong>, a BCA student at{' '}
              <strong className="text-slate-900 dark:text-white">Eternal University</strong> (2025–2028) and a Full-Stack Developer focused on building practical, user-centered web applications.
            </motion.p>
            <motion.p variants={staggerItem}>
              <strong className="text-slate-900 dark:text-white">Learning by Building:</strong> I develop full-stack applications by designing MongoDB schemas, writing Express REST APIs with JWT and bcrypt authentication, and building responsive React interfaces.
            </motion.p>
            <motion.p variants={staggerItem}>
              <strong className="text-slate-900 dark:text-white">API &amp; AI Integration:</strong> I experiment with and integrate services such as the Google Gemini API and Cloudinary file workflows to turn ideas into functional digital products.
            </motion.p>
            <motion.p variants={staggerItem}>
              <strong className="text-slate-900 dark:text-white">Collaboration &amp; Growth:</strong> Supporting 69 learners at NavGurukul Foundation and building JALSETU with Team BluePulse has strengthened my problem-solving, debugging, and teamwork skills.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-4"
          >
            {IDENTITY_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 shadow-executive-light dark:shadow-none transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-amber-400 mb-3.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}