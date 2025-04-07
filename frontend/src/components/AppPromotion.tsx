import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, ArrowRight } from 'lucide-react';

const AppPromotion = () => {
  return (
    <div className="bg-insta-gradient text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-block bg-white/20 p-2 rounded-full mb-4">
              <Smartphone className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Download the Reel Catcher app for Android</h2>
            <p className="text-white/90 max-w-lg mb-6">
              Get the best Instagram video downloader on your phone. Download videos anywhere, anytime with our easy-to-use mobile app.
            </p>
            <ul className="space-y-2 mb-6 text-left max-w-md mx-auto md:mx-0">
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-3 w-3" />
                </div>
                <span>Download multiple videos at once</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-3 w-3" />
                </div>
                <span>Save directly to your gallery</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-3 w-3" />
                </div>
                <span>Faster downloads with our dedicated servers</span>
              </li>
            </ul>
            
            <Link to="/" className="inline-block">
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get it on Google Play" 
                className="h-14 md:h-16"
              />
            </Link>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative h-[400px] w-[220px]">
              <div className="absolute inset-0 border-8 border-black rounded-[40px] overflow-hidden bg-white shadow-2xl">
                <div className="absolute top-0 w-1/2 h-7 bg-black left-1/4 rounded-b-lg"></div>
                <div className="h-full w-full bg-gradient-to-b from-purple-100 to-white p-3">
                  <div className="bg-insta-purple text-white h-8 rounded-t-lg flex items-center justify-center font-medium">
                    Reel Catcher
                  </div>
                  <div className="bg-white rounded-b-lg h-[calc(100%-2rem)] overflow-hidden shadow-inner">
                    <div className="p-3">
                      <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                      <div className="h-8 w-full bg-gray-200 rounded mb-2"></div>
                      <div className="h-40 w-full bg-gray-100 rounded mb-2"></div>
                      <div className="h-8 w-full bg-insta-purple rounded mb-2"></div>
                      <div className="h-4 w-16 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromotion;
