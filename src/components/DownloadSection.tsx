import React from 'react';

interface DownloadSectionProps {
  loading: boolean;
  error: string | null;
  serverUrl: string;
  appUrl: string;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({ loading, error, serverUrl, appUrl }) => (
  <section className="py-24 bg-indigo-600" id="download">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-indigo-700/50 backdrop-blur-sm rounded-[48px] p-8 md:p-16 border border-white/10 text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to sync?</h2>
          <p className="text-xl text-indigo-100 mb-12">Download the latest versions of Lambo for your server and mobile devices.</p>

          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
            </div>
          ) : error ? (
            <div className="bg-red-500/20 text-red-100 p-4 rounded-xl border border-red-500/30">
              {error}. Please check our <a href="https://github.com/fshangala/lambo/releases" className="underline font-bold">GitHub Releases</a> manually.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href={serverUrl} className="bg-white text-indigo-600 px-8 py-6 rounded-3xl font-bold text-lg hover:scale-105 transition-transform flex flex-col items-center gap-2 shadow-2xl shadow-indigo-900/50">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>Download Server for PC</span>
                <span className="text-xs font-normal opacity-70">Lambo Server (Windows)</span>
              </a>
              <a href={appUrl} className="bg-indigo-500/40 text-white border border-white/20 px-8 py-6 rounded-3xl font-bold text-lg hover:scale-105 transition-transform flex flex-col items-center gap-2 shadow-2xl shadow-indigo-900/50 backdrop-blur-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                <span>Download App for Mobile</span>
                <span className="text-xs font-normal opacity-70">Lambo Master/Slave APK</span>
              </a>
            </div>
          )}
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
      </div>
    </div>
  </section>
);

export default DownloadSection;
