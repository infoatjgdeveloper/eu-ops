
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import Regions from './components/Regions';
import EngagementCenter from './components/EngagementCenter';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIChatOverlay from './components/AIChatOverlay';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <Hero />
        <Partners />
        <EngagementCenter />
        <Services />
        <Regions />
        <ContactForm />
      </main>

      <Footer />
      <AIChatOverlay />
    </div>
  );
};

export default App;
