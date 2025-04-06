import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Clipboard, Download, Loader2, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Backend API URL - Replace with your actual backend URL when deployed
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api/download";

interface DownloadResponse {
  downloadUrl?: string;
  error?: string;
  message?: string;
}

const DownloaderForm = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateInstagramUrl = (url: string): boolean => {
    const pattern = /^https?:\/\/(?:www\.)?instagram\.com\/(?:reel|p)\/([A-Za-z0-9-_]+)/i;
    return pattern.test(url);
  };

  const formatInstagramUrl = (inputUrl: string): string => {
    let cleanUrl = inputUrl.trim().split('?')[0];
    if (!cleanUrl.startsWith('http')) {
      cleanUrl = 'https://' + cleanUrl;
    }
    return cleanUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Please enter an Instagram Reel URL",
        variant: "destructive"
      });
      return;
    }
    
    const formattedUrl = formatInstagramUrl(url);
    
    if (!validateInstagramUrl(formattedUrl)) {
      setError('Please enter a valid Instagram Reel URL');
      toast({
        title: "Error",
        description: "Please enter a valid Instagram Reel URL",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: formattedUrl }),
      });
      
      const data: DownloadResponse = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to download video');
      }
      
      if (data.error) {
        setError(data.error);
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive"
        });
      } else if (data.downloadUrl) {
        // Create a temporary link and trigger download
        const link = document.createElement('a');
        link.href = data.downloadUrl;
        link.setAttribute('download', `instagram_reel_${Date.now()}.mp4`);
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        toast({
          title: "Success!",
          description: "Your download has started. Please wait a moment.",
        });
        
        // Clear the form
        setUrl('');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to download the Instagram Reel';
      console.error('Error downloading reel:', error);
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const formattedUrl = formatInstagramUrl(text);
      setUrl(formattedUrl);
      
      if (!validateInstagramUrl(formattedUrl)) {
        toast({
          title: "Warning",
          description: "The pasted text doesn't appear to be a valid Instagram Reel URL",
          variant: "destructive"
        });
      }
    } catch (err) {
      console.error('Failed to read clipboard contents:', err);
      toast({
        title: "Error",
        description: "Failed to read from clipboard. Please paste the URL manually.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Paste Instagram Reel URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full py-6 pr-12 text-base rounded-l-md"
            disabled={isLoading}
          />
          <Button 
            type="button" 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={handlePaste}
            disabled={isLoading}
            aria-label="Paste from clipboard"
          >
            <Clipboard className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
        <Button 
          type="submit" 
          className="bg-insta-blue hover:bg-insta-blue/90 text-white font-medium py-6 px-8 rounded-r-md transition-all duration-200 min-w-[140px]"
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
        <Alert variant="destructive" className="mt-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default DownloaderForm;
