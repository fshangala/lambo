import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import ScreenshotsSection from './components/ScreenshotsSection';
import DownloadSection from './components/DownloadSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SuccessModal from './components/SuccessModal';

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
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('registration_success') === 'true') {
      setIsSuccessModalOpen(true);
    }
  }, []);

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
    window.history.replaceState(null, '', window.location.pathname);
  };

  const getAssetUrl = (pattern: string) => {
    if (!release) return '#';
    const asset = release.assets.find(a => a.name.toLowerCase().includes(pattern.toLowerCase()));
    return asset ? asset.browser_download_url : '#';
  };

  const serverUrl = getAssetUrl('lambo_server.exe');
  const appUrl = getAssetUrl('app-release.apk');

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <SuccessModal isOpen={isSuccessModalOpen} onClose={handleCloseSuccessModal} />
      <Navigation basePath={basePath} />
      <HeroSection releaseTag={release?.tag_name ?? null} />
      <OverviewSection />
      <ScreenshotsSection basePath={basePath} />
      <DownloadSection loading={loading} error={error} serverUrl={serverUrl} appUrl={appUrl} />
      <ContactSection basePath={basePath} />
      <Footer />
    </div>
  );
}

export default App;
