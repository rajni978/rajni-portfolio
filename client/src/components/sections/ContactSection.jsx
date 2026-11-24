import React, { useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FileDown,
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../../data/portfolioConfig';
import { submitContactForm } from '../../services/api';

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateClient = () => {
    if (form.name.trim().length < 2) {
      return 'Please enter your name (at least 2 characters).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      return 'Please enter a valid email address.';
    }
    if (form.subject.trim().length < 3) {
      return 'Please enter a subject (at least 3 characters).';
    }
    if (form.message.trim().length < 10) {
      return 'Please enter a message of at least 10 characters.';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;

    const validationError = validateClient();
    if (validationError) {
      setStatus('error');
      setFeedbackMsg(validationError);
      return;
    }

    setStatus('loading');
    setFeedbackMsg('');

    try {
      const response = await submitContactForm({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });
      setStatus('success');
      setFeedbackMsg(
        response.message || 'Your message has been sent and stored successfully.'
      );
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus('error');
      setFeedbackMsg(err.message);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-amber-400">
            07 // Contact &amp; Resume
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Interested in discussing Software Development, MERN Stack, or
            Full-Stack internship opportunities? Send a direct message below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Direct Channels
              </h3>

              <a
                href={`mailto:${PORTFOLIO_CONFIG.email}`}
                data-cursor="hover"
                className="flex items-center gap-3 p-3 rounded-xl bg-alabaster-100/80 dark:bg-obsidian-950 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 transition-colors"
              >
                <Mail className="w-5 h-5 text-indigo-500" />
                <div>
                  <div className="text-xs text-slate-500">Email</div>
                  <div className="text-sm font-medium text-slate-900 dark:text-slate-200">
                    {PORTFOLIO_CONFIG.email}
                  </div>
                </div>
              </a>

              <a
                href={PORTFOLIO_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="flex items-center gap-3 p-3 rounded-xl bg-alabaster-100/80 dark:bg-obsidian-950 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 transition-colors"
              >
                <Github className="w-5 h-5 text-indigo-500" />
                <div>
                  <div className="text-xs text-slate-500">GitHub</div>
                  <div className="text-sm font-medium text-slate-900 dark:text-slate-200">
                    github.com/rajni978
                  </div>
                </div>
              </a>

              <a
                href={PORTFOLIO_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="flex items-center gap-3 p-3 rounded-xl bg-alabaster-100/80 dark:bg-obsidian-950 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-indigo-500" />
                <div>
                  <div className="text-xs text-slate-500">LinkedIn</div>
                  <div className="text-sm font-medium text-slate-900 dark:text-slate-200">
                    Connect on LinkedIn
                  </div>
                </div>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-indigo-600/10 border border-indigo-500/25 space-y-3">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Resume / CV
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Download a copy of my latest resume outlining my projects,
                technical skills, education, and facilitation experience.
              </p>
              <a
                href={PORTFOLIO_CONFIG.resumePath}
                download="Rajni_Resume.pdf"
                data-cursor="hover"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
              >
                <FileDown className="w-4 h-4" /> Download Resume (PDF)
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 md:p-8 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-slate-800 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-alabaster-50 dark:bg-obsidian-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-alabaster-50 dark:bg-obsidian-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship Opportunity / Project Inquiry"
                  className="w-full px-4 py-2.5 rounded-xl bg-alabaster-50 dark:bg-obsidian-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-alabaster-50 dark:bg-obsidian-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 resize-y"
                />
              </div>

              {status === 'success' && (
                <div
                  role="status"
                  className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-sm flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              {status === 'error' && (
                <div
                  role="alert"
                  className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-sm flex items-start gap-2.5"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                data-cursor="hover"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white transition-colors"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending
                    Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}