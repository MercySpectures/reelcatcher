
import React from 'react';
import { Shield, Smartphone, Download, Zap } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Best Instagram Reels Video Downloader</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          SaveClip is an online Instagram Reels video downloader that allows you to download Reels videos in high quality format, completely free and without watermarks.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-insta-purple mb-4">
              <Zap className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast & Easy</h3>
            <p className="text-gray-600">
              Download Instagram Reels quickly with just a few clicks. No registration or software installation is required.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-insta-purple mb-4">
              <Shield className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold mb-2">100% Safe</h3>
            <p className="text-gray-600">
              Our service is completely secure. We don't store your data or videos on our servers after download.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-insta-purple mb-4">
              <Download className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold mb-2">High Quality</h3>
            <p className="text-gray-600">
              Download Instagram Reels videos in the highest available quality without any quality loss.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-insta-purple mb-4">
              <Smartphone className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold mb-2">All Devices</h3>
            <p className="text-gray-600">
              Works on all devices including smartphones, tablets, and computers, regardless of operating system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
