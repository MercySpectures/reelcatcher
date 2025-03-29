
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Clipboard, Download } from 'lucide-react';

const DownloaderForm = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
      // In a real app, this would make an API call to a backend service
      // that would handle the actual Instagram video processing
      // For this demo, we'll simulate a successful response after a delay
      
      setTimeout(() => {
        // This is just a simulation - in a real app, you would get the actual download URL from your backend
        setDownloadUrl(`${url}`);
        toast({
          title: "Success!",
          description: "Video is ready to download",
        });
        setIsLoading(false);
      }, 2000);
      
    } catch (error) {
      console.error('Error processing Instagram URL:', error);
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
    // In a real app, this would trigger the actual download
    // For this demo, we'll just show a success message
    toast({
      title: "Download Started",
      description: "Your video is downloading now. It will be saved to your device.",
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Paste URL | Instagram"
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
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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

      {downloadUrl && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800 mb-2 font-medium">Your video is ready to download!</p>
          <Button 
            onClick={handleDownload}
            className="bg-green-600 hover:bg-green-700 text-white w-full"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Video
          </Button>
        </div>
      )}
    </div>
  );
};

export default DownloaderForm;
