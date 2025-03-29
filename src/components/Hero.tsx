
import React from 'react';
import DownloaderForm from './DownloaderForm';

const Hero = () => {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-insta-gradient opacity-90 h-72 md:h-80"></div>
      
      {/* Content */}
      <div className="relative pt-10 pb-16 md:pt-16 md:pb-24 container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Download Instagram Reels Video
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Download Reels videos from Instagram online, quickly and easily
          </p>
        </div>
        
        <DownloaderForm />
        
        <div className="mt-8 text-center">
          <button className="flex items-center gap-1 text-white/80 hover:text-white mx-auto transition-colors">
            <span>How to download Instagram video</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
