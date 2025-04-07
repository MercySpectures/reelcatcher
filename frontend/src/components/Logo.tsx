import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Instagram } from 'lucide-react';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="h-9 w-9 bg-insta-gradient rounded-lg flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <Download className="h-5 w-5 text-white" />
      </div>
      <div className="flex flex-col items-start leading-none">
        <span className="font-bold text-xl bg-clip-text text-transparent bg-insta-gradient">
          Reel Catcher
        </span>
        <span className="text-xs text-gray-500">Instagram Downloader</span>
      </div>
    </Link>
  );
};

export default Logo;
