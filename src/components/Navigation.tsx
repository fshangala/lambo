import React from 'react';

interface NavigationProps {
  basePath: string;
}

const Navigation: React.FC<NavigationProps> = ({ basePath }) => (
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
);

export default Navigation;
