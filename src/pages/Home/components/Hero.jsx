import React, { useCallback, useEffect, useState } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import heroVideo from '../../../assets/videos/6038007_Christmas_Laptop_3840x2160.mp4';

const slides = [
  {
    id: 1,
    subhead: "Welcome to Seanora Global",
    title: "Empower Your Growth\nwith Innovative IT Services",
    description: "Innovative, Reliable, and Comprehensive IT Services",
    buttonText: "Contact Us",
    buttonLink: "/contact"
  },
  {
    id: 2,
    subhead: "Welcome to Seanora Global",
    title: "Your One-Stop\nIT Solution Provider",
    description: "Innovative, Reliable, and Comprehensive IT Services",
    buttonText: "Get Free Quote",
    buttonLink: "/contact"
  },
  {
    id: 3,
    subhead: "Welcome to Seanora Global",
    title: "Your Trusted Partner\nfor IT Excellence",
    description: "Innovative, Reliable, and Comprehensive IT Services",
    buttonText: "Our Services",
    buttonLink: "/services"
  }
];

const Hero = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const scrollNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 6000); // 6 seconds per text slide
    return () => clearInterval(interval);
  }, [scrollNext]);

  const handleScrollDown = () => {
    // Find the hero section, then find its next sibling (e.g., Services section)
    const heroSection = document.getElementById('hero-main');
    if (heroSection && heroSection.nextElementSibling) {
      heroSection.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-main" className="relative w-full h-screen min-h-screen bg-[var(--hero-bg-start)] text-[var(--hero-text)] overflow-hidden flex items-center justify-center snap-start snap-always">
      
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Dark overlay backdrop over the video */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/30 w-full h-full" />
      </div>

      {/* Static Text Overlay & Buttons */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-10 pointer-events-none z-20">
        <div className="max-w-4xl mx-auto relative h-[300px] w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${selectedIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8 md:space-y-10 absolute w-full"
            >
              <p className="uppercase tracking-widest text-sm text-[var(--hero-text)] opacity-80 drop-shadow-md">
                {slides[selectedIndex].subhead}
              </p>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-[1.2] drop-shadow-2xl text-[var(--hero-text)] whitespace-pre-line">
                {slides[selectedIndex].title}
              </h1>
              
              <p className="text-base md:text-lg text-[var(--hero-text)]/80 font-light leading-relaxed drop-shadow-md">
                {slides[selectedIndex].description}
              </p>

              <div className="flex gap-4 justify-center pointer-events-auto pt-4 w-full">
                <Link 
                  to="/contact"
                  className="bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:bg-[var(--btn-hover)] transition duration-200 font-semibold text-sm tracking-wide"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/services"
                  className="border border-white/50 bg-black/20 text-white hover:bg-white/10 hover:border-white hover:shadow-xl px-8 py-3.5 rounded-full transition-all duration-300 font-semibold text-sm tracking-wide backdrop-blur-md shadow-lg"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 translate-y-1/2 w-full px-4 md:px-8 pointer-events-none flex justify-between z-10 opacity-0 md:opacity-100 transition-opacity">
        <button 
          onClick={scrollPrev}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-black/30 backdrop-blur-sm text-white/70 hover:text-white border border-transparent hover:border-white/30 transition-all duration-300 pointer-events-auto shadow-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2} />
        </button>
        <button 
          onClick={scrollNext}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-black/30 backdrop-blur-sm text-white/70 hover:text-white border border-transparent hover:border-white/30 transition-all duration-300 pointer-events-auto shadow-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>

      {/* Bottom Scroll Indicator */}
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-md z-30 pointer-events-auto"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-4 h-4" />
      </button>
    </section>
  );
};

export default Hero;
