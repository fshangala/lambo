import React from 'react';

const Footer: React.FC = () => (
  <footer className="py-12 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Lambo Automation. Released under the MIT License.</p>
    </div>
  </footer>
);

export default Footer;
