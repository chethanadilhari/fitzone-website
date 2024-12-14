import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-transparent text-white fixed top-0 w-full z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-20 py-4">
        {/* Logo section */}
        <div className="flex space-x-2 items-center">
          <a href="/">
            <img src="src/assets/images/header/logo.png" alt="FitZone Logo" className="h-8" />
          </a>
          <img src="src/assets/images/header/logo-text.png" alt="FitZone Logo Text" className="h-5" />
        </div>

        {/* Navigation Links */}
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
