import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import GoogleAd from './GoogleAd';

interface AdModalProps {
  onClose: () => void;
}

const AdModal: React.FC<AdModalProps> = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState(5); // 5 seconds countdown
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    // Start countdown
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanClose(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full mx-4">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Advertisement</h2>
          
          {/* Ad Container */}
          <div className="mb-4 min-h-[250px] bg-gray-100 flex items-center justify-center flex-col">
            {/* Google AdSense Ad */}
            <GoogleAd 
              slot="5962276783"  // Replace with your actual ad slot ID
              style={{ 
                display: 'block',
                width: '100%',
                height: '250px'
              }} 
            />
            
            {/* Countdown timer */}
            {!canClose && (
              <div className="text-gray-500 mt-4">
                Please wait {timeLeft} seconds...
              </div>
            )}
          </div>

          {/* Continue button */}
          <Button 
            type="primary"
            onClick={onClose}
            disabled={!canClose}
            className="w-full"
          >
            {canClose ? 'Continue to Download' : `Wait ${timeLeft}s`}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdModal; 