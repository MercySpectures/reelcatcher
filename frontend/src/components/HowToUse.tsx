import React from 'react';
import { ArrowDownRight, Copy, Clipboard, ExternalLink, CheckCircle } from 'lucide-react';

const HowToUse = () => {
  return (
    <div id="how-to-use" className="py-16 scroll-mt-16">
      <h2 className="text-2xl font-bold text-center mb-8">How to Download Instagram Reels?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div className="h-12 w-12 bg-insta-purple/10 rounded-full flex items-center justify-center mb-4">
            <Copy className="h-6 w-6 text-insta-purple" />
          </div>
          <h3 className="font-semibold mb-2">Step 1: Copy Link</h3>
          <p className="text-gray-600">Find the Reel you want to download and copy its URL from Instagram.</p>
          <ul className="mt-4 text-sm text-gray-500 space-y-1">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Click Share button on the Reel</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Select "Copy Link"</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div className="h-12 w-12 bg-insta-purple/10 rounded-full flex items-center justify-center mb-4">
            <Clipboard className="h-6 w-6 text-insta-purple" />
          </div>
          <h3 className="font-semibold mb-2">Step 2: Paste Link</h3>
          <p className="text-gray-600">Paste the copied Instagram Reel link into the input box above.</p>
          <ul className="mt-4 text-sm text-gray-500 space-y-1">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Click the paste button or use Ctrl+V</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Make sure it's a valid Instagram Reel URL</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div className="h-12 w-12 bg-insta-purple/10 rounded-full flex items-center justify-center mb-4">
            <ArrowDownRight className="h-6 w-6 text-insta-purple" />
          </div>
          <h3 className="font-semibold mb-2">Step 3: Download</h3>
          <p className="text-gray-600">Click the Download button and wait for your video to be processed.</p>
          <ul className="mt-4 text-sm text-gray-500 space-y-1">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Video downloads automatically</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Original HD quality preserved</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
        <h3 className="font-semibold mb-2 text-gray-800">⚡ Note</h3>
        <p className="text-gray-600">
          This tool works with public Instagram Reels only. Make sure the Reel you want to download is from a public account.
        </p>
      </div>
    </div>
  );
};

export default HowToUse;
