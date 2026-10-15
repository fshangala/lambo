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
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(
    () => new URLSearchParams(window.location.search).get('registration_success') === 'true',
  );
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

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
    window.history.replaceState(null, '', window.location.pathname);
  };

  const appUrl = release?.assets.find(asset =>
    asset.name.toLowerCase().includes('app-release.apk'),
  )?.browser_download_url ?? null;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <SuccessModal isOpen={isSuccessModalOpen} onClose={handleCloseSuccessModal} />
      <Navigation basePath={basePath} />
      <HeroSection releaseTag={release?.tag_name ?? null} />
      <OverviewSection />
      <ScreenshotsSection basePath={basePath} />
      <DownloadSection loading={loading} error={error} appUrl={appUrl} />
      <ContactSection basePath={basePath} />
      <Footer />
    </div>
  );
}

export default App;
