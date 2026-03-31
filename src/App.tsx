import { useState, useEffect } from 'react'

interface Asset {
  name: string;
  browser_download_url: string;
}

interface Release {
  tag_name: string;
  assets: Asset[];
}

function App() {
  const [release, setRelease] = useState<Release | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const basePath = import.meta.env.BASE_URL;

  useEffect(() => {
    fetch('https://api.github.com/repos/fshangala/lambo/releases/latest')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch releases');
        return res.json();
      })
      .then(data => {
        setRelease(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const getAssetUrl = (pattern: string) => {
    if (!release) return '#';
    const asset = release.assets.find(a => a.name.toLowerCase().includes(pattern.toLowerCase()));
    return asset ? asset.browser_download_url : '#';
  };

  const serverUrl = getAssetUrl('lambo_server.exe');
  const appUrl = getAssetUrl('app-release.apk');

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <img src={`${basePath}icon.png`} alt="Lambo" className="w-10 h-10 rounded-xl shadow-sm" />
              <span className="text-xl font-bold tracking-tight text-indigo-600">Lambo</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#screenshots" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Screenshots</a>
              <a href="#download" className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-shadow shadow-lg shadow-indigo-200">Download</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Release {release?.tag_name || 'v1.0.0'}</span>
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
        
        {/* Decorative Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Lambo Server</h3>
              <p className="text-gray-600 leading-relaxed">
                A robust Dart-based WebSocket relay server designed for real-time device synchronization. Efficiently broadcasts messages and manages room states.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Master App</h3>
              <p className="text-gray-600 leading-relaxed">
                The control center. Synchronized web browsing on any website, action replication (clicks, input), and high-fidelity browser synchronization.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Slave Clients</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect multiple devices that replicate every action from the master in real-time. Automatically stays awake and syncs room state instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 bg-white" id="screenshots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Seamless Experience</h2>
            <p className="text-lg text-gray-600">Explore the intuitive and modern interface across all devices.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <img src={`${basePath}screenshot-master.jpeg`} alt="Master App" className="rounded-3xl shadow-2xl border border-gray-100 object-cover w-full aspect-[9/16]" />
              <p className="text-center font-bold text-gray-700">Master Interface</p>
            </div>
            <div className="flex flex-col gap-4 mt-8 md:mt-0">
              <img src={`${basePath}screenshot-slave.jpeg`} alt="Slave App" className="rounded-3xl shadow-2xl border border-gray-100 object-cover w-full aspect-[9/16]" />
              <p className="text-center font-bold text-gray-700">Slave Replication</p>
            </div>
            <div className="flex flex-col gap-4">
              <img src={`${basePath}screenshot-settings.jpeg`} alt="Settings" className="rounded-3xl shadow-2xl border border-gray-100 object-cover w-full aspect-[9/16]" />
              <p className="text-center font-bold text-gray-700">Flexible Configuration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
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
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
          </div>
        </div>
      </section>

      {/* Author/Contact Section */}
      <section className="py-24 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[48px] p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-extrabold mb-4">Get in touch</h2>
              <p className="text-lg text-gray-600 mb-8">Lambo is maintained with passion. Reach out for support or collaboration.</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="https://wa.me/260974836436" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all text-green-600">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <a href="https://github.com/fshangala" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all text-gray-900">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                </a>
                <a href="https://linkedin.com/in/fshangala" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all text-blue-600">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://fshangala.github.io/profile" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all text-indigo-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img src={`${basePath}icon.png`} alt="Lambo" className="w-32 h-32 md:w-48 md:h-48 rounded-[32px] shadow-2xl bg-white p-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Lambo Automation. Released under the MIT License.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
