
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors">
            Instagram Video Downloader
          </Link>
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors">
            Private Downloader
          </Link>
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors">
            Instagram Downloader
          </Link>
          <div className="border-l border-gray-200 h-5 mx-2"></div>
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors">
            English
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
