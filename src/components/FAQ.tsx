
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <div className="py-16 container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium py-4">How to download Instagram Reels videos?</AccordionTrigger>
            <AccordionContent className="pb-4 text-gray-600">
              <ol className="list-decimal list-inside space-y-2">
                <li>Open Instagram and find the Reel you want to download</li>
                <li>Tap the share button (three dots) and select "Copy Link"</li>
                <li>Return to SaveClip and paste the link into the input field</li>
                <li>Click the "Download" button</li>
                <li>Once processed, click "Download Video" to save to your device</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium py-4">Is SaveClip free to use?</AccordionTrigger>
            <AccordionContent className="pb-4 text-gray-600">
              Yes, SaveClip is completely free to use. You can download Instagram Reels videos without paying anything. There are no hidden fees or subscription costs.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium py-4">Do I need to create an account?</AccordionTrigger>
            <AccordionContent className="pb-4 text-gray-600">
              No, SaveClip doesn't require any registration or account creation. You can start downloading Instagram Reels videos right away without signing up.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium py-4">What quality are the downloaded videos?</AccordionTrigger>
            <AccordionContent className="pb-4 text-gray-600">
              SaveClip downloads Instagram Reels videos in the highest available quality. The quality of the downloaded video will match the original quality of the Reel.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium py-4">Is it legal to download Instagram Reels?</AccordionTrigger>
            <AccordionContent className="pb-4 text-gray-600">
              SaveClip is designed for personal use only. Please respect copyright laws and the content creator's rights. Do not distribute or use downloaded content commercially without permission from the owner.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left font-medium py-4">Which devices does SaveClip support?</AccordionTrigger>
            <AccordionContent className="pb-4 text-gray-600">
              SaveClip works on all devices including smartphones (Android, iPhone), tablets, and computers (Windows, Mac, Linux). No app installation is required - just use your web browser.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
