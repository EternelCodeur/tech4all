
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingContactButtons from '../components/FloatingContactButtons';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
      <FloatingContactButtons />
    </div>
  );
};

export default Index;
