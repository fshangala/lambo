import React from 'react';

const OverviewSection: React.FC = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-indigo-50/60 py-24" id="features">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="mb-4 inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">Simple by design</span>
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">One session. Every screen.</h2>
        <p className="text-lg leading-relaxed text-gray-600">Lambo brings your group’s browsing together with secure sign-in and realtime room connections powered by Supabase.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="group rounded-3xl border border-white/80 bg-white/85 p-8 shadow-lg shadow-indigo-950/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/10 motion-reduce:transition-none">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-200 transition-transform group-hover:scale-105 motion-reduce:transition-none">
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 21h8m-4-4v4m-5-9 3-3 2 2 4-4" /></svg>
          </div>
          <h3 className="mb-3 text-xl font-bold text-gray-900">Master leads the session</h3>
          <p className="leading-relaxed text-gray-600">Choose an assigned website and browse normally. Your taps, scrolling, typing, and browser controls are shared with your room.</p>
        </div>
        <div className="group rounded-3xl border border-white/80 bg-white/85 p-8 shadow-lg shadow-indigo-950/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/10 motion-reduce:transition-none">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-200 transition-transform group-hover:scale-105 motion-reduce:transition-none">
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="2" strokeWidth="2" /><path strokeLinecap="round" strokeWidth="2" d="M11 18h2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 8 2 2 4-4" /></svg>
          </div>
          <h3 className="mb-3 text-xl font-bold text-gray-900">Slaves follow along</h3>
          <p className="leading-relaxed text-gray-600">Connected devices mirror the Master and catch up to the current page when they join late or reconnect.</p>
        </div>
        <div className="group rounded-3xl border border-white/80 bg-white/85 p-8 shadow-lg shadow-indigo-950/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-950/10 motion-reduce:transition-none">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-200 transition-transform group-hover:scale-105 motion-reduce:transition-none">
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m7.07.93-1.42 1.42M21 12h-2M5 12H3m3.35-5.65L4.93 4.93M12 19v2m6.07-2.93-1.42-1.42M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16.5A5.5 5.5 0 0 1 9 6h.5a6 6 0 0 1 11 3.5 4.5 4.5 0 0 1-1 8.9H9" /></svg>
          </div>
          <h3 className="mb-3 text-xl font-bold text-gray-900">Realtime, no server setup</h3>
          <p className="leading-relaxed text-gray-600">Supabase handles the live connection between devices. Sign in, use your assigned room, and let Lambo keep the session moving.</p>
        </div>
      </div>
      <div className="mt-8 rounded-3xl border border-indigo-100/80 bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white shadow-xl shadow-indigo-300/30 md:flex md:items-center md:justify-between md:gap-8">
        <div>
          <h3 className="mb-2 text-xl font-bold">Convenience built into every device</h3>
          <p className="max-w-3xl leading-relaxed text-indigo-100">Personal sign-in shortcuts, optional Android proxy settings, an always-awake browsing screen, and clear connection feedback keep shared sessions smooth.</p>
        </div>
        <span className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold md:mt-0">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.42 1.42M7.05 16.95l-1.42 1.42m12.73 0-1.42-1.42M7.05 7.05 5.63 5.63M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" /></svg>
          Made for Android
        </span>
      </div>
    </div>
  </section>
);

export default OverviewSection;
