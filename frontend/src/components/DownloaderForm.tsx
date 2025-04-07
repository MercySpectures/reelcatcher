import React, { useState } from 'react';
import { Button, Input, message, Progress } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import AdModal from './AdModal';

const API_URL = import.meta.env.VITE_API_URL || 'https://api.reelcatcher.fun';

// Instagram URL validation regex
const INSTAGRAM_URL_REGEX = /^https?:\/\/(?:www\.)?instagram\.com\/(?:reel|p)\/([A-Za-z0-9-_]+)/i;

interface DownloadProgress {
  status: 'idle' | 'downloading' | 'processing' | 'complete' | 'error';
  progress: number;
  message?: string;
}

const DownloaderForm: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAd, setShowAd] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState<DownloadProgress>({
    status: 'idle',
    progress: 0
  });
  const [error, setError] = useState<string | null>(null);

  const validateUrl = (url: string): boolean => {
    if (!url) {
      message.error('Please enter an Instagram reel URL');
      return false;
    }
    if (!INSTAGRAM_URL_REGEX.test(url)) {
      message.error('Please enter a valid Instagram reel URL');
      return false;
    }
    return true;
  };

  const updateProgress = (status: DownloadProgress['status'], progress: number, msg?: string) => {
    setDownloadProgress({
      status,
      progress,
      message: msg
    });
  };

  const startDownload = async () => {
    try {
      setError(null);
      setLoading(true);
      setDownloadProgress({
        status: 'downloading',
        progress: 0
      });

      const response = await fetch(`${API_URL}/api/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = 'Error downloading reel';
        
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          errorMessage = errorText || errorMessage;
        }

        if (response.status === 507) {
          errorMessage = 'Insufficient storage space. Please free up some disk space and try again.';
        }

        throw new Error(errorMessage);
      }

      const data = await response.json();

      // Create a temporary link to trigger download
      updateProgress('processing', 50, 'Processing video...');
      const link = document.createElement('a');
      link.href = data.downloadUrl;
      link.download = 'instagram_reel.mp4';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      updateProgress('complete', 100, 'Download complete!');
      message.success('Download completed successfully!');
      setUrl('');
      setLoading(false);

      // Reset progress after 3 seconds
      setTimeout(() => {
        updateProgress('idle', 0);
      }, 3000);

    } catch (error) {
      console.error('Error downloading reel:', error);
      setError(error instanceof Error ? error.message : 'Failed to download reel');
      setLoading(false);
      setDownloadProgress({
        status: 'error',
        progress: 0
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateUrl(url)) {
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
      <div className="max-w-xl mx-auto p-4 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Paste Instagram reel URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            size="large"
            className="w-full"
            status={url && !INSTAGRAM_URL_REGEX.test(url) ? 'error' : ''}
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

        {downloadProgress.status !== 'idle' && (
          <div className="space-y-2">
            <Progress
              percent={downloadProgress.progress}
              status={downloadProgress.status === 'error' ? 'exception' : 
                     downloadProgress.status === 'complete' ? 'success' : 'active'}
            />
            {downloadProgress.message && (
              <p className="text-sm text-gray-600 text-center">
                {downloadProgress.message}
              </p>
            )}
          </div>
        )}
      </div>

      {showAd && <AdModal onClose={handleAdClose} />}
    </>
  );
};

export default DownloaderForm; 