
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-600 text-sm">
              SaveClip is a free online tool that helps you download Instagram Reels videos easily and quickly.
            </p>
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-500 hover:text-insta-purple transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="/" className="text-gray-500 hover:text-insta-purple transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="/" className="text-gray-500 hover:text-insta-purple transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="/" className="text-gray-500 hover:text-insta-purple transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-insta-purple transition-colors text-sm">Instagram Downloader</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-insta-purple transition-colors text-sm">Reels Downloader</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-insta-purple transition-colors text-sm">Story Downloader</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-insta-purple transition-colors text-sm">IGTV Downloader</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-insta-purple transition-colors text-sm">Profile Picture Downloader</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-insta-purple transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-insta-purple transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-insta-purple transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-insta-purple transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-insta-purple transition-colors text-sm">DMCA</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-insta-purple transition-colors text-sm">About Us</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-insta-purple transition-colors text-sm">Blog</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-insta-purple transition-colors text-sm">Affiliates</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-insta-purple transition-colors text-sm">Careers</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-insta-purple transition-colors text-sm">Media</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">© {currentYear} SaveClip. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="text-xs text-gray-500 hover:text-insta-purple transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-xs text-gray-500 hover:text-insta-purple transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="text-xs text-gray-500 hover:text-insta-purple transition-colors">
              Cookie Policy
            </Link>
            <div className="flex items-center text-xs text-gray-500">
              Made with <Heart className="h-3 w-3 text-red-500 mx-1" /> by SaveClip Team
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
