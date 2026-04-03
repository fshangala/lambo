import React from 'react';

interface HeroSectionProps {
  releaseTag: string | null;
}

const HeroSection: React.FC<HeroSectionProps> = ({ releaseTag }) => (
  <section className="relative pt-20 pb-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Release {releaseTag || 'v1.0.0'}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
          Master-Slave <span className="text-indigo-600">Automation</span> Redefined
        </h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          Synchronize browsing, actions, and device state seamlessly across multiple devices in real-time. Built for precision, performance, and power.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#download" className="bg-indigo-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2">
            Get Started Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </a>
          <a href="https://github.com/fshangala/lambo" className="bg-white border-2 border-gray-100 text-gray-700 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
            View on GitHub
          </a>
        </div>
      </div>
    </div>

    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none opacity-40">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-[120px]"></div>
    </div>
  </section>
);

export default HeroSection;
