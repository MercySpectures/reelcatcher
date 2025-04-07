import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      // Here you would implement your email sending logic
      console.log('Form data:', data);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <Helmet>
          <title>Contact Us - Reel Catcher</title>
          <meta name="description" content="Contact Reel Catcher team for support, feedback, or business inquiries about our Instagram reel downloader service." />
        </Helmet>

        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-600">
                Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Support</h3>
                <p className="text-gray-600">
                  For general inquiries and support, use the contact form or visit our{' '}
                  <a href="#faq" className="text-insta-purple hover:text-insta-purple/80">FAQ section</a>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Business</h3>
                <p className="text-gray-600">
                  For business inquiries and partnerships, please include "Business" in your message subject.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Legal</h3>
                <p className="text-gray-600">
                  For legal matters, please refer to our{' '}
                  <a href="/terms" className="text-insta-purple hover:text-insta-purple/80">Terms of Service</a>{' '}
                  and{' '}
                  <a href="/privacy-policy" className="text-insta-purple hover:text-insta-purple/80">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Message subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact; 