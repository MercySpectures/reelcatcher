
import React from 'react';
import { Shield } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="text-amber-500 shrink-0">
              <Shield className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Important Disclaimer</h3>
              <p className="text-gray-600 text-sm">
                With SaveClip, you can download any Instagram content (Videos, Photos, Reels, Story, IGTV). We will continuously upgrade to bring you the best experience! Please share this tool with friends and family. Thank you!
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Our download tool is designed to assist you in downloading videos and images posted by your own account. However, we reserve the right not to provide the service if you use this tool to violate the privacy and materials of others!
              </p>
              <p className="text-gray-700 text-sm mt-4 font-medium">
                Read our Terms of Service <a href="#" className="text-insta-purple underline">here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
