import React from 'react';

interface DownloadSectionProps {
  loading: boolean;
  error: string | null;
  appUrl: string | null;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({ loading, error, appUrl }) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-700 py-24" id="download">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] border border-white/15 bg-white/[0.08] p-8 text-center text-white shadow-2xl shadow-indigo-950/20 backdrop-blur-xl md:rounded-[48px] md:p-16">
        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-indigo-50">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="2" strokeWidth="2" /><path strokeLinecap="round" strokeWidth="2" d="M11 18h2" /></svg>
            Android app
          </span>
          <h2 className="mb-5 text-4xl font-extrabold tracking-tight md:text-5xl">Ready to browse together?</h2>
          <p className="mb-10 text-lg leading-relaxed text-indigo-100">Get the latest Lambo app release. Sign in with your account and connect with your assigned room — no separate server download required.</p>

          {loading ? (
            <div className="flex items-center justify-center py-8" role="status" aria-label="Loading the latest Android release">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/30 border-t-white motion-reduce:animate-none" />
            </div>
          ) : error || !appUrl ? (
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-indigo-50">
              <p className="mb-4">{error ? `Could not load the latest release: ${error}` : 'The Android APK was not found in the latest release.'}</p>
              <a href="https://github.com/fshangala/lambo/releases" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl motion-reduce:transition-none">
                Browse GitHub Releases
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17 17 7M7 7h10v10" /></svg>
              </a>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <a href={appUrl} className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-5 text-lg font-bold text-indigo-700 shadow-2xl shadow-indigo-950/20 transition duration-200 hover:-translate-y-1 hover:shadow-white/20 motion-reduce:transition-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="2" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v6m-3-3 3 3 3-3" /></svg>
                Download Android APK
                <svg className="h-5 w-5 transition-transform group-hover:translate-y-0.5 motion-reduce:transition-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v12m-4-4 4 4 4-4M5 21h14" /></svg>
              </a>
              <a href="https://github.com/fshangala/lambo/releases" className="text-sm font-semibold text-indigo-100 underline decoration-white/40 underline-offset-4 transition hover:text-white">View all releases</a>
            </div>
          )}
        </div>

        <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-fuchsia-300/20 blur-3xl" aria-hidden="true" />
      </div>
    </div>
  </section>
);

export default DownloadSection;
