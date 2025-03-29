
import React from 'react';
import DownloaderForm from './DownloaderForm';
import { ChevronDown, Camera, Shield, Zap } from 'lucide-react';

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
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Download Instagram Reels Video
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto mb-6 text-sm md:text-base">
            Save any Instagram Reel video to your device in seconds - high quality, no watermarks, and completely free
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-10">
            <div className="px-3 py-1 bg-white/20 rounded-full text-white text-xs md:text-sm flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5" />
              <span>Free & Fast</span>
            </div>
            <div className="px-3 py-1 bg-white/20 rounded-full text-white text-xs md:text-sm flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" />
              <span>No Login Required</span>
            </div>
            <div className="px-3 py-1 bg-white/20 rounded-full text-white text-xs md:text-sm flex items-center gap-1.5">
              <Camera className="h-3.5 w-3.5" />
              <span>High Quality</span>
            </div>
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
