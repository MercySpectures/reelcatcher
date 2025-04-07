import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">About Reel Catcher</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At Reel Catcher, we're dedicated to providing the most reliable and user-friendly Instagram reel downloading experience. 
              Our mission is to make content saving accessible to everyone while maintaining the highest standards of security and privacy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Why Choose Reel Catcher?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">Fast & Reliable</h3>
                <p className="text-gray-600">
                  Download Instagram reels in seconds with our high-speed servers and optimized processing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
                <p className="text-gray-600">
                  We don't store your downloads or personal information. Your privacy is our priority.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">High Quality</h3>
                <p className="text-gray-600">
                  Download reels in the highest available quality without compromising on speed.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">Free to Use</h3>
                <p className="text-gray-600">
                  No registration required. No hidden fees. Just paste the URL and download.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-insta-purple text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold">Copy URL</h3>
                  <p className="text-gray-600">Find the Instagram reel you want to download and copy its URL.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-insta-purple text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold">Paste & Download</h3>
                  <p className="text-gray-600">Paste the URL into Reel Catcher and click the download button.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-insta-purple text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold">Save Your Reel</h3>
                  <p className="text-gray-600">Your reel will be processed and ready to download in seconds.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Our Commitment</h2>
            <p className="text-gray-600">
              We're committed to providing the best possible service while respecting content creators' rights. 
              We encourage users to only download content they have permission to use and to respect Instagram's terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600">
              Have questions or suggestions? We'd love to hear from you!{' '}
              <Link to="/contact" className="text-insta-purple hover:text-insta-purple/80">
                Contact our team
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About; 