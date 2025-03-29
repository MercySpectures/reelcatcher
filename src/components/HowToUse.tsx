
import React from 'react';
import { ArrowDownRight, Copy, Clipboard, ExternalLink } from 'lucide-react';

const HowToUse = () => {
  return (
    <div className="my-16">
      <h2 className="text-2xl font-bold text-center mb-8">How to download Instagram Reels videos?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="h-12 w-12 bg-insta-purple/10 rounded-full flex items-center justify-center mb-4">
            <ExternalLink className="h-6 w-6 text-insta-purple" />
          </div>
          <h3 className="font-semibold mb-2">Step 1</h3>
          <p className="text-gray-600">Open the Instagram app on your device or go to Instagram.com on your PC.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="h-12 w-12 bg-insta-purple/10 rounded-full flex items-center justify-center mb-4">
            <Copy className="h-6 w-6 text-insta-purple" />
          </div>
          <h3 className="font-semibold mb-2">Step 2</h3>
          <p className="text-gray-600">Find the Reel you want to download and copy the link by tapping the share button and selecting "Copy Link".</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="h-12 w-12 bg-insta-purple/10 rounded-full flex items-center justify-center mb-4">
            <Clipboard className="h-6 w-6 text-insta-purple" />
          </div>
          <h3 className="font-semibold mb-2">Step 3</h3>
          <p className="text-gray-600">Paste the copied link into the input box on SaveClip and click the Download button.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="h-12 w-12 bg-insta-purple/10 rounded-full flex items-center justify-center mb-4">
            <ArrowDownRight className="h-6 w-6 text-insta-purple" />
          </div>
          <h3 className="font-semibold mb-2">Step 4</h3>
          <p className="text-gray-600">The video will appear. Click the Download Video button to save the Reel to your device.</p>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
