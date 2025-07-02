import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import WhyChooseSection from '../components/WhyChooseSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingContactButtons from '../components/FloatingContactButtons';

const Index = () => {
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="portfolio">
          <PortfolioSection />
        </div>
        <div id="why-choose">
          <WhyChooseSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="team">
          <TeamSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
        <FloatingContactButtons />
      </div>
    </div>
  );
};

export default Index;
