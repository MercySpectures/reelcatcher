import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using Reel Catcher, you accept and agree to be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Service Description</h2>
            <p className="text-gray-600">
              Reel Catcher provides a service that allows users to download Instagram reels for personal use only. 
              We do not store or host any videos on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>You must only download content that you have the right to access</li>
              <li>You must not use our service for any illegal purposes</li>
              <li>You must respect Instagram's terms of service</li>
              <li>You must not abuse, harm, or exploit our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600">
              Users are responsible for ensuring they have the necessary rights to download and use any content 
              obtained through our service. Reel Catcher does not claim ownership of any downloaded content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Limitations of Liability</h2>
            <p className="text-gray-600">
              Reel Catcher provides the service "as is" and makes no warranties, expressed or implied. We are not 
              responsible for any damages arising from the use of our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Service Modifications</h2>
            <p className="text-gray-600">
              We reserve the right to modify or discontinue our service at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Governing Law</h2>
            <p className="text-gray-600">
              These terms shall be governed by and construed in accordance with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Contact Information</h2>
            <p className="text-gray-600">
              For any questions regarding these terms, please contact us through our contact page.
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500">Last updated: March 20, 2024</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms; 