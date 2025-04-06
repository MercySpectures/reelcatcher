import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="text-amber-500 shrink-0">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Legal Disclaimer</h3>
              <p className="text-gray-600 text-sm">
                This tool is provided for personal use only. By using this service, you agree to download content only from public Instagram Reels that you have the right to access and download.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Please respect copyright laws and content creators' rights. Do not use downloaded content for commercial purposes without proper authorization from the content owner.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                We are not affiliated with Instagram or Meta. All trademarks and brand names belong to their respective owners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
