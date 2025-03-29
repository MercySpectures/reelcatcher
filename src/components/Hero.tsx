
import React from 'react';
import DownloaderForm from './DownloaderForm';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToHowTo = () => {
    const howToSection = document.getElementById('how-to-use');
    if (howToSection) {
      howToSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-insta-gradient opacity-90 h-72 md:h-96"></div>
      
      {/* Content */}
      <div className="relative pt-10 pb-16 md:pt-16 md:pb-24 container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Download Instagram Reels Video
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto mb-4">
            Download Reels videos from Instagram online, quickly and easily - without watermarks
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">Free</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">No Login Required</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">High Quality</span>
          </div>
        </div>
        
        <DownloaderForm />
        
        <div className="mt-8 text-center">
          <button 
            onClick={scrollToHowTo}
            className="flex items-center gap-1 text-white/80 hover:text-white mx-auto transition-colors"
          >
            <span>How to download Instagram video</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
