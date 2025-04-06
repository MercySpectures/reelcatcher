import React from 'react';
import { Shield, Download, Zap, Lock, Clock, Globe } from 'lucide-react';

const Features = () => {
  return (
    <div id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Why Choose Our Reel Downloader?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Download Instagram Reels videos in high quality format, completely free and without any restrictions.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="text-insta-purple mb-4">
              <Zap className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast & Easy</h3>
            <p className="text-gray-600">
              Download Instagram Reels instantly with just a few clicks. No registration or software installation needed.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="text-insta-purple mb-4">
              <Shield className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold mb-2">100% Safe</h3>
            <p className="text-gray-600">
              Our service is completely secure and private. We don't store your data or downloaded videos.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="text-insta-purple mb-4">
              <Download className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold mb-2">High Quality</h3>
            <p className="text-gray-600">
              Download Instagram Reels in their original high quality without any compression or quality loss.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="text-insta-purple mb-4">
              <Lock className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No Watermarks</h3>
            <p className="text-gray-600">
              Get the original video without any additional watermarks or branding overlays.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="text-insta-purple mb-4">
              <Clock className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Processing</h3>
            <p className="text-gray-600">
              Our optimized servers process your requests instantly, delivering your videos in seconds.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="text-insta-purple mb-4">
              <Globe className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Always Available</h3>
            <p className="text-gray-600">
              Access our service 24/7 from anywhere in the world. No restrictions or limitations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
