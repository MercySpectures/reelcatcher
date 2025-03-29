
import React from 'react';
import { Link } from 'react-router-dom';

const AppPromotion = () => {
  return (
    <div className="bg-insta-purple text-white py-8 md:py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Download the SaveClip app for Android</h2>
          <p className="text-white/80 max-w-md">Download the SaveClip app for Android: Quick · Easy · High quality</p>
        </div>
        
        <Link to="/" className="inline-block">
          <img 
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
            alt="Get it on Google Play" 
            className="h-14 md:h-16"
          />
        </Link>
      </div>
    </div>
  );
};

export default AppPromotion;
