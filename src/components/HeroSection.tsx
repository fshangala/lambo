import React from 'react';

interface HeroSectionProps {
  releaseTag: string | null;
}

const HeroSection: React.FC<HeroSectionProps> = ({ releaseTag }) => (
  <section className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white pb-24 pt-16 sm:pt-24 md:pb-32">
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
      <div className="absolute -right-16 top-32 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
    </div>
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center motion-safe:animate-fade-up">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-4 py-2 shadow-sm shadow-indigo-100 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" />
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">Lambo for Android</span>
          <span className="h-1 w-1 rounded-full bg-indigo-300" />
          <span className="text-xs font-semibold text-gray-500">Version {releaseTag || '2.0.0'}</span>
        </div>
        <h1 className="mb-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-gray-950 sm:text-6xl md:text-7xl">
          Browse together.
          <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
            Stay in sync.
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
          One Master leads the way. Every connected Slave follows along in real time — websites, taps, scrolling, and navigation, all in one shared browsing session.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a href="#download" className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-indigo-300/40 transition duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-300/50 motion-reduce:transition-none">
            Get the Android app
            <svg className="h-5 w-5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
          <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white/80 px-8 py-4 text-lg font-bold text-gray-700 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-indigo-200 hover:bg-white motion-reduce:transition-none">
            Explore how it works
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-gray-500">
          <span className="inline-flex items-center gap-2">
            <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 12 2 2 4-4" /></svg>
            Sign-in protected
          </span>
          <span className="inline-flex items-center gap-2">
            <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect x="8" y="3" width="8" height="4" rx="1" strokeWidth="2" /></svg>
            No separate server to install
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
