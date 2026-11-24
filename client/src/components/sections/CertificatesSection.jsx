import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { CERTIFICATES_DATA } from '../../data/certificatesData';
import {
  fadeUpVariant,
  staggerContainer,
  staggerItem,
} from '../../utils/motionConfig';

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
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
            06 // Certificates &amp; Achievements
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
            Verified Certifications
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {CERTIFICATES_DATA.map((cert) => (
            <motion.div
              key={cert.id}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="cert-card flex flex-col justify-between p-6 md:p-7 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/45 shadow-executive-light dark:shadow-none transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-600 dark:text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-md text-[11px] font-mono bg-alabaster-100 dark:bg-obsidian-950 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-indigo-600 dark:text-amber-400 mt-1.5">
                  Issued by {cert.issuer}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  Verified Achievement
                </span>
                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}