import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

const Header = () => {
  // State to track whether the user has scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  // Scroll event handler to update the state
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Add scrolled class
    } else {
      setIsScrolled(false); // Remove scrolled class
    }
  };

  // Adding and cleaning up the event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
    className={`z-50 fixed top-0 w-full p-4 transition-all duration-300 ease-in-out ${
      isScrolled ? 'bg-black text-white' : 'bg-transparent text-white'
    }`}
  >
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
