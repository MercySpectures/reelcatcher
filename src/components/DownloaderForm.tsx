
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Clipboard, Download, Loader2, Instagram, AlertTriangle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Backend API URL - you would need to replace this with your actual backend URL
const API_URL = "https://your-backend-url.com/api/download";

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
      // Make actual API call to the backend service
      // Note: In production, replace the API_URL with your actual backend URL
      // For demo purposes, we'll use a mock response
      
      // If you have the backend running:
      /*
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      
      const data = await response.json();
      
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
      */
      
      // For demo without backend:
      setTimeout(() => {
        const mockData = {
          downloadLink: url,
          // Uncomment to test error scenario
          // error: "Could not extract video URL. Try a different reel."
        };
        
        if (mockData.error) {
          setError(mockData.error);
          toast({
            title: "Error",
            description: mockData.error,
            variant: "destructive"
          });
        } else {
          setDownloadUrl(mockData.downloadLink);
          setVideoTitle("Instagram Reel Video");
          toast({
            title: "Success!",
            description: "Video is ready to download",
          });
        }
        setIsLoading(false);
      }, 2000);
      
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
    // Create an anchor element to download the video
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = "instagram-reel.mp4";
    a.target = "_blank"; // Open in new tab
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    toast({
      title: "Download Started",
      description: "Your video is downloading now. It will be saved to your device.",
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
