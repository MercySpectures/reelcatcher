
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Clipboard, Download, Loader2, Instagram, AlertTriangle, FolderOpen } from 'lucide-react';
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
  const [customName, setCustomName] = useState('');
  const isMobile = useIsMobile();

  // Function to validate and format Instagram URL
  const formatInstagramUrl = (inputUrl: string): string => {
    // Clean up URL (remove query parameters, etc.)
    let cleanUrl = inputUrl.trim().split('?')[0];
    
    // Make sure URL has https:// prefix
    if (!cleanUrl.startsWith('http')) {
      cleanUrl = 'https://' + cleanUrl;
    }
    
    return cleanUrl;
  };

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
    
    // Format the Instagram URL properly before sending to API
    const formattedUrl = formatInstagramUrl(url);
    console.log("Sending formatted URL to API:", formattedUrl);
    
    try {
      // Call the backend API
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: formattedUrl }),
      });
      
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      
      const data: DownloadResponse = await response.json();
      console.log("API Response:", data);
      
      if (data.error) {
        setError(data.error);
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive"
        });
      } else if (data.downloadLink) {
        setDownloadUrl(data.downloadLink);
        setVideoTitle(customName ? `${customName}` : "Instagram Reel Video");
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
    
    try {
      console.log("Starting download for URL:", downloadUrl);
      
      // Direct download approach with improved file naming
      const fileName = customName ? `${customName}.mp4` : `instagram_reel_${Date.now()}.mp4`;
      
      // Create a download link and force the download
      const tempLink = document.createElement('a');
      tempLink.href = downloadUrl;
      tempLink.setAttribute('download', fileName);
      document.body.appendChild(tempLink);
      tempLink.click();
      
      // Create a backup approach for browsers that don't support the download attribute
      setTimeout(() => {
        // If the link is still in the document, remove it
        if (document.body.contains(tempLink)) {
          document.body.removeChild(tempLink);
          
          // As a fallback, try to fetch the video using a Blob
          fetch(downloadUrl)
            .then(response => response.blob())
            .then(blob => {
              const blobUrl = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = blobUrl;
              link.download = fileName;
              link.click();
              URL.revokeObjectURL(blobUrl);
            })
            .catch(err => {
              console.error('Fallback download failed:', err);
              // Final fallback: open in new tab
              window.open(downloadUrl, '_blank');
            });
        }
      }, 1000);
      
      toast({
        title: "Download Started",
        description: "Your video download has started. Check your downloads folder.",
      });
    } catch (err) {
      console.error('Download failed:', err);
      toast({
        title: "Download Failed",
        description: "Could not download the video. Try opening the link directly.",
        variant: "destructive"
      });
    }
  };

  const handleClear = () => {
    setUrl('');
    setDownloadUrl('');
    setVideoTitle('');
    setError('');
    setCustomName('');
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

      {/* Optional custom filename input */}
      {!downloadUrl && !error && (
        <div className="mt-4">
          <Input
            type="text"
            placeholder="Custom filename (optional)"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            className="w-full py-3 text-sm"
          />
        </div>
      )}

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
