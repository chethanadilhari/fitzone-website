// src/components/Footer.jsx
import React from 'react';
import SocialMediaLinks from '../../components/common/SocialMediaLinks';

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <div className="w-full max-w-screen-xl h-auto mx-auto px-20 ">
        
        <div className="grid grid-cols-3 gap-4 justify-center tracking-[0.2em] font-sairaCondensed pt-10 ">
          <div>
            <div className="grid gap-4 mx-auto justify-center">
              <a href="/">
                <img src="src/assets/images/header/logo.png" alt="FitZone Logo" className="h-14 mx-auto" />
              </a>
              <img src="src/assets/images/header/logo-text.png" alt="FitZone Logo Text" className="h-5" />
            </div>
            <div className="text-xs tracking-[0.2em] font-thin py-5 w-72 text-left leading-loose mx-auto">
              <p>FitZone Fitness Center offers expert training, modern equipment, and diverse classes to support your fitness journey. Join our community and achieve your health goals in an inspiring environment.</p>
            </div>
          </div>
          <div className="grid h-5 mx-auto gap-4">
            <div className="text-bronze text-left h-8 text-xl font-bold">
              <h3>Open Hours</h3>
            </div>
            <div className="font-thin text-xs text-left leading-loose">
              <p>Mon-Fri: 9 AM - 10 PM</p>
              <p>Saturday: 9 AM - 7 PM</p>
              <p>Mon-Fri: 8 AM - 12 PM</p>
            </div>
          </div>
          <div className="grid h-5 mx-auto gap-4">
            <div className="text-bronze text-left h-8 text-xl font-bold">
              <h3>Get in Touch</h3>
            </div>
            <div className="font-thin text-xs text-left leading-loose">
              <p>333 Middle Winchendon Rd, Rindge,<br /> NH 03461</p>
              <p>125-711-811 | 125-668-886</p>
              <p>Support.fitness@gmail.com</p>
              <SocialMediaLinks />
            </div>
          </div>
        </div>
        <div 
          style={{
            borderTop: '1px solid white',
            width: '100%',
            margin: '20px 0',
          }}
        ></div>
        <div className="flex justify-between pb-10">
        <div className="text-left text-sm font-sairaCondensed tracking-[0.1em] ">
          <p>&copy; {new Date().getFullYear()} FitZone Fitness Center. All rights reserved.</p>
        </div>
         <div>
          <ul className="flex justify-center  text-white font-sairaCondensed gap-6 text-sm font-thin tracking-[0.1em]">
            <li>Home</li>
            <li>About</li>
            <li>Packages</li>
            <li>Classes</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
