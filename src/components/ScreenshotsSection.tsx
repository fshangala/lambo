import React from 'react';

interface ScreenshotsSectionProps {
  basePath: string;
}

const ScreenshotsSection: React.FC<ScreenshotsSectionProps> = ({ basePath }) => (
  <section className="py-24 bg-white" id="screenshots">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <span className="mb-4 inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-violet-700">Take a look inside</span>
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">A clear view of every step</h2>
        <p className="text-lg text-gray-600">From device readiness to the Master and Slave home screens, Lambo keeps the experience straightforward.</p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { image: 'screenshot-master-home.png', alt: 'Lambo Master home with the signed-in account and assigned website card', title: 'Master home', description: 'Pick a website and start browsing.' },
          { image: 'screenshot-slave-home.png', alt: 'Lambo Slave home waiting for the Master to start a session', title: 'Slave waiting', description: 'See when the room is ready to follow.' },
          { image: 'screenshot-startup-loading.png', alt: 'Lambo device settings while configuration is loading', title: 'Connecting', description: 'Device configuration loads securely.' },
          { image: 'screenshot-startup-ready.png', alt: 'Lambo device settings with its assigned room and Slave role', title: 'Device ready', description: 'Check your room, role, and status.' },
        ].map((screenshot, index) => (
          <figure key={screenshot.image} className={`group overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-indigo-50/70 p-3 shadow-lg shadow-indigo-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none ${index % 2 === 1 ? 'lg:translate-y-6' : ''}`}>
            <div className="overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={`${basePath}${screenshot.image}`}
                alt={screenshot.alt}
                loading="lazy"
                className="aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
              />
            </div>
            <figcaption className="px-3 pb-3 pt-5">
              <h3 className="mb-1 font-bold text-gray-900">{screenshot.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{screenshot.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default ScreenshotsSection;
