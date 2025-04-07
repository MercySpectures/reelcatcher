import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-4 space-y-4">
            <Logo />
            <p className="text-gray-600 text-sm max-w-2xl">
              A free online tool to download Instagram Reels videos in high quality. Fast, secure, and easy to use.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-4 md:pl-8">
            <h3 className="font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-insta-purple transition-colors text-sm inline-block"
                >
                  How to Use
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-insta-purple transition-colors text-sm inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 hover:text-insta-purple transition-colors text-sm inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-4 md:pl-8">
            <h3 className="font-semibold mb-4 text-gray-800">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-gray-600 hover:text-insta-purple transition-colors text-sm inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-gray-600 hover:text-insta-purple transition-colors text-sm inline-block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
            <p className="text-sm text-gray-500">
              © {currentYear} Reel Catcher
            </p>
            <span className="text-sm text-gray-500">
              For personal use only
            </span>
          </div>
          
          <div className="text-xs text-gray-400 mt-2">
            Not affiliated with Instagram or Meta
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
