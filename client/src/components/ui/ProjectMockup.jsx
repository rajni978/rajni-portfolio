import React from 'react';

export default function ProjectMockup({ type }) {
  if (type === 'collabsphere') {
    return (
      <div className="w-full h-full min-h-[250px] rounded-xl bg-obsidian-950 border border-slate-800 p-4 flex flex-col justify-between font-mono text-xs text-slate-300 select-none overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-violet-500" />
            <span className="text-slate-300 font-semibold">
              CollabSphere / Workspace
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30 text-[10px]">
            JWT + Gemini AI
          </span>
        </div>

        <div className="grid grid-cols-12 gap-3 my-3 flex-1">
          <div className="col-span-4 rounded-lg bg-obsidian-900/90 border border-slate-800/80 p-2.5 space-y-2">
            <div className="text-violet-400 font-semibold">Projects</div>
            <div className="p-1.5 rounded bg-violet-600/15 border-l-2 border-violet-500 text-slate-200">
              MERN Sprint
            </div>
            <div className="p-1.5 rounded bg-slate-800/40 text-slate-400">
              Team Notes
            </div>
            <div className="p-1.5 rounded bg-slate-800/40 text-slate-400">
              Shared Files
            </div>
          </div>

          <div className="col-span-8 rounded-lg bg-obsidian-900/90 border border-slate-800/80 p-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-slate-200 font-semibold">
                  Workspace Notes
                </span>
                <span className="text-[10px] text-emerald-400">Synced</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                • Role-based member collaboration
                <br />• Cloudinary file uploads &amp; sharing
              </p>
            </div>
            <div className="mt-2 p-2 rounded bg-violet-950/60 border border-violet-500/30 text-[10px] text-violet-200">
              Gemini AI Assistant: Contextual project guidance enabled.
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-800/80">
          <span>MongoDB + Express + React</span>
          <span>Shared Workspace</span>
        </div>
      </div>
    );
  }

  if (type === 'feedback') {
    return (
      <div className="w-full h-44 rounded-xl bg-obsidian-950 border border-slate-800 p-3.5 flex flex-col justify-between font-mono text-xs text-slate-300 select-none">
        <div className="flex items-center justify-between">
          <span className="text-violet-400 font-semibold">
            POST /api/feedback
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            201 Created
          </span>
        </div>
        <div className="space-y-1.5 my-2">
          <div className="p-2 rounded bg-obsidian-900 border border-slate-800 text-[11px] text-slate-200 truncate">
            &quot;Clean UI and reliable feedback storage!&quot;
          </div>
          <div className="p-2 rounded bg-obsidian-900 border border-slate-800 text-[11px] text-slate-400 truncate">
            &quot;Structured API retrieval &amp; database sync.&quot;
          </div>
        </div>
        <div className="text-[10px] text-slate-500">
          React ↔ Express ↔ MongoDB
        </div>
      </div>
    );
  }

  if (type === 'gemini') {
    return (
      <div className="w-full h-44 rounded-xl bg-obsidian-950 border border-slate-800 p-3.5 flex flex-col justify-between font-mono text-xs text-slate-300 select-none">
        <div className="flex items-center justify-between">
          <span className="text-purple-400 font-semibold">Ask Gemini AI</span>
          <span className="text-[10px] text-slate-500">POST /ask</span>
        </div>
        <div className="space-y-2 my-1">
          <div className="ml-6 p-2 rounded-lg bg-violet-600/20 border border-violet-500/30 text-[11px] text-violet-100">
            Explain Express REST middleware
          </div>
          <div className="mr-4 p-2 rounded-lg bg-obsidian-900 border border-slate-800 text-[10px] text-slate-300 leading-relaxed">
            Middleware functions access req, res, and next() to validate
            requests...
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-500">
          <span>Google Gemini API</span>
          <span>Express Proxy</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-44 rounded-xl bg-obsidian-950 border border-slate-800 p-3.5 flex flex-col justify-between font-mono text-xs text-slate-300 select-none">
      <div className="flex items-center justify-between">
        <span className="text-sky-400 font-semibold">JALSETU • BluePulse</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
          Hackathon
        </span>
      </div>
      <div className="p-2.5 rounded-lg bg-obsidian-900 border border-slate-800 space-y-1.5">
        <div className="text-[11px] text-slate-200 font-semibold">
          Water-Focused Environmental Solution
        </div>
        <p className="text-[10px] text-slate-400 leading-relaxed">
          Technology-driven platform built collaboratively by Team BluePulse.
        </p>
      </div>
      <div className="flex items-center justify-between text-[10px] text-slate-500">
        <span>Team BluePulse</span>
        <span>Full-Stack Build</span>
      </div>
    </div>
  );
}