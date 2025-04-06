import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors">
            Contact
          </Link>
          <div className="h-4 w-px bg-gray-200" />
          <Link to="/privacy-policy" className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors">
            Privacy
          </Link>
          <Link to="/terms" className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors">
            Terms
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
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="h-px bg-gray-200 my-2" />
              <Link 
                to="/privacy-policy" 
                className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-sm font-medium text-gray-700 hover:text-insta-purple transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
