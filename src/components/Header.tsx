
import React, { useState } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full py-4 px-4 md:px-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
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
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors flex items-center gap-1">
            <Globe className="h-4 w-4" />
            <span>English</span>
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50 border-t border-gray-100">
          <div className="container mx-auto py-4 px-4">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/"
                className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Instagram Video Downloader
              </Link>
              <Link 
                to="/" 
                className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Private Downloader
              </Link>
              <Link 
                to="/" 
                className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Instagram Downloader
              </Link>
              <Link 
                to="/" 
                className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors py-2 flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Globe className="h-4 w-4" />
                <span>English</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
