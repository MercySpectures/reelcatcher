import React, { useState } from 'react';
import { Button, Input, message } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import AdModal from './AdModal';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const DownloaderForm: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAd, setShowAd] = useState(false);

  const startDownload = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to download video');
      }

      // Create a temporary link to trigger download
      const link = document.createElement('a');
      link.href = data.downloadUrl;
      link.download = 'instagram_reel.mp4';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      message.success('Download started!');
      setUrl('');
    } catch (error) {
      console.error('Error downloading reel:', error);
      message.error(error instanceof Error ? error.message : 'Failed to download video');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      message.error('Please enter an Instagram reel URL');
      return;
    }

    // Show ad first
    setShowAd(true);
  };

  // Handle ad close and start download
  const handleAdClose = () => {
    setShowAd(false);
    startDownload();
  };

  return (
    <>
      <div className="max-w-xl mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Paste Instagram reel URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            size="large"
            className="w-full"
          />
          <Button
            type="primary"
            htmlType="submit"
            icon={<DownloadOutlined />}
            loading={loading}
            size="large"
            className="w-full"
          >
            Download Reel
          </Button>
        </form>
      </div>

      {showAd && <AdModal onClose={handleAdClose} />}
    </>
  );
};

export default DownloaderForm; 