
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Clipboard, Download, Loader2, Instagram, AlertTriangle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Backend API URL - Replace with your actual backend URL when deployed
const API_URL = "http://localhost:3001/api/download";

// Define response type interface
interface DownloadResponse {
  downloadLink?: string;
  error?: string;
}

const DownloaderForm = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [error, setError] = useState('');
  const isMobile = useIsMobile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setError('');
    setDownloadUrl('');
    
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Please enter an Instagram Reel URL",
        variant: "destructive"
      });
      return;
    }
    
    if (!url.includes('instagram.com')) {
      toast({
        title: "Error",
        description: "Please enter a valid Instagram URL",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Call the backend API
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      
      const data: DownloadResponse = await response.json();
      
      if (data.error) {
        setError(data.error);
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive"
        });
      } else if (data.downloadLink) {
        setDownloadUrl(data.downloadLink);
        setVideoTitle("Instagram Reel Video");
        toast({
          title: "Success!",
          description: "Video is ready to download",
        });
      }
      
      setIsLoading(false);
    } catch (error) {
      console.error('Error processing Instagram URL:', error);
      setError('Failed to process the Instagram URL. Please try again.');
      toast({
        title: "Error",
        description: "Failed to process the Instagram URL. Please try again.",
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };

  const handlePaste = () => {
    navigator.clipboard.readText()
      .then(text => {
        setUrl(text);
      })
      .catch(err => {
        console.error('Failed to read clipboard contents: ', err);
        toast({
          title: "Error",
          description: "Failed to read from clipboard. Please paste the URL manually.",
          variant: "destructive"
        });
      });
  };

  const handleDownload = () => {
    if (!downloadUrl) return;
    
    // Create a hidden iframe to start the download
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = downloadUrl;
    document.body.appendChild(iframe);
    
    // Create a direct download link as backup
    const tempLink = document.createElement('a');
    tempLink.href = downloadUrl;
    tempLink.setAttribute('download', 'instagram-reel.mp4');
    tempLink.setAttribute('target', '_blank');
    document.body.appendChild(tempLink);
    tempLink.click();
    
    // Clean up DOM
    setTimeout(() => {
      document.body.removeChild(tempLink);
      document.body.removeChild(iframe);
    }, 1000);
    
    toast({
      title: "Download Started",
      description: "Your video download has started. Check your downloads folder.",
    });
  };

  const handleClear = () => {
    setUrl('');
    setDownloadUrl('');
    setVideoTitle('');
    setError('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Paste Instagram Reel URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full py-6 pr-12 text-base rounded-l-md"
          />
          <Button 
            type="button" 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={handlePaste}
            aria-label="Paste from clipboard"
          >
            <Clipboard className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
        <Button 
          type="submit" 
          className="bg-insta-blue hover:bg-insta-blue/90 text-white font-medium py-6 px-8 rounded-r-md transition-all duration-200"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Processing...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              <span>Download</span>
            </div>
          )}
        </Button>
      </form>

      {error && (
        <Alert variant="destructive" className="mt-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {downloadUrl && !error && (
        <div className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Instagram className="h-6 w-6 text-insta-purple" />
            <h3 className="text-lg font-semibold">{videoTitle}</h3>
          </div>
          
          <div className="mb-4 aspect-video bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20"></div>
            <div className="text-center z-10">
              <Instagram className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Your video is ready to download</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleDownload}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Video
            </Button>
            
            <Button 
              onClick={handleClear}
              variant="outline"
              className="flex-1"
            >
              Clear
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloaderForm;
