
import React from 'react';
import { ArrowDownRight, Copy, Clipboard, ExternalLink, CheckCircle } from 'lucide-react';

const HowToUse = () => {
  return (
    <div id="how-to-use" className="py-16 scroll-mt-16">
      <h2 className="text-2xl font-bold text-center mb-8">How to download Instagram Reels videos?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div className="h-12 w-12 bg-insta-purple/10 rounded-full flex items-center justify-center mb-4">
            <ExternalLink className="h-6 w-6 text-insta-purple" />
          </div>
          <h3 className="font-semibold mb-2">Step 1</h3>
          <p className="text-gray-600">Open the Instagram app on your device or go to Instagram.com on your PC.</p>
          <ul className="mt-4 text-sm text-gray-500 space-y-1">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Find the Reel you want to save</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Works with public profile posts</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div className="h-12 w-12 bg-insta-purple/10 rounded-full flex items-center justify-center mb-4">
            <Copy className="h-6 w-6 text-insta-purple" />
          </div>
          <h3 className="font-semibold mb-2">Step 2</h3>
          <p className="text-gray-600">Find the Reel you want to download and copy the link by tapping the share button and selecting "Copy Link".</p>
          <ul className="mt-4 text-sm text-gray-500 space-y-1">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Tap the three dots (⋯)</span>
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
          <h3 className="font-semibold mb-2">Step 3</h3>
          <p className="text-gray-600">Paste the copied link into the input box on SaveClip and click the Download button.</p>
          <ul className="mt-4 text-sm text-gray-500 space-y-1">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Use paste button or Ctrl+V</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Click the Download button</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div className="h-12 w-12 bg-insta-purple/10 rounded-full flex items-center justify-center mb-4">
            <ArrowDownRight className="h-6 w-6 text-insta-purple" />
          </div>
          <h3 className="font-semibold mb-2">Step 4</h3>
          <p className="text-gray-600">The video will appear. Click the Download Video button to save the Reel to your device.</p>
          <ul className="mt-4 text-sm text-gray-500 space-y-1">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Video downloads automatically</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>No watermarks added</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
        <h3 className="font-semibold mb-2 text-gray-800">💡 Pro Tip</h3>
        <p className="text-gray-600">
          If you're on mobile, you can share the Instagram Reel directly to SaveClip without copying the link. 
          Just tap Share → Copy Link, then open SaveClip!
        </p>
      </div>
    </div>
  );
};

export default HowToUse;
