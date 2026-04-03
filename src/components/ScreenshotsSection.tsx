import React from 'react';

interface ScreenshotsSectionProps {
  basePath: string;
}

const ScreenshotsSection: React.FC<ScreenshotsSectionProps> = ({ basePath }) => (
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
);

export default ScreenshotsSection;
