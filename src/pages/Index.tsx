import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowToUse from '@/components/HowToUse';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowToUse />
        <Features />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
