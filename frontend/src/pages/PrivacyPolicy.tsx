import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">Information Collection and Use</h2>
            <p className="text-gray-600">
              We only collect the Instagram reel URLs that you provide to our service for the purpose of downloading videos. 
              We do not store these URLs or any downloaded content on our servers permanently.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Log Data</h2>
            <p className="text-gray-600">
              We collect standard log data for service improvement and debugging purposes. This may include your IP address, 
              browser type, and access timestamps. This data is automatically deleted after 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Cookies</h2>
            <p className="text-gray-600">
              We use essential cookies to ensure the proper functioning of our service. These cookies do not collect any 
              personal information and are deleted when you close your browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-gray-600">
              Our service interacts with Instagram's platform to download reels. We do not share any user data with third parties 
              except as necessary to provide our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, 
              or destruction of your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us through our contact page.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 