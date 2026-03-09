import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import img1 from '../../../assets/hero-section/download.png';
import img2 from '../../../assets/hero-section/download (1).png';
import img3 from '../../../assets/hero-section/download (2).png';

const slides = [
  {
    id: 1,
    subhead: "Welcome to Seanora Global",
    title: "Empower Your Growth\nwith Innovative IT Services",
    description: "Innovative, Reliable, and Comprehensive IT Services",
    buttonText: "Contact Us",
    buttonLink: "/contact",
    image: img1
  },
  {
    id: 2,
    subhead: "Welcome to Seanora Global",
    title: "Your One-Stop\nIT Solution Provider",
    description: "Innovative, Reliable, and Comprehensive IT Services",
    buttonText: "Get Free Quote",
    buttonLink: "/contact",
    image: img2
  },
  {
    id: 3,
    subhead: "Welcome to Seanora Global",
    title: "Your Trusted Partner\nfor IT Excellence",
    description: "Innovative, Reliable, and Comprehensive IT Services",
    buttonText: "Our Services",
    buttonLink: "/services",
    image: img3
  }
];

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // 6 seconds per slide
    return () => clearInterval(interval);
  }, [emblaApi]);

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] bg-black text-white overflow-hidden">
      {/* Background Image Carousel (Only images slide) */}
      <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full touches-pan-y">
          {slides.map((slide, index) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-full">
              <div 
                className={`absolute inset-0 transition-transform duration-[8000ms] ease-out ${
                  index === selectedIndex ? 'scale-105' : 'scale-100'
                }`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover opacity-70 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Static Text Overlay (Text transitions in place) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pb-32 pointer-events-none">
        <div className="max-w-4xl">
          <motion.div
            key={`text-${selectedIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="flex flex-col items-center justify-center text-4xl md:text-5xl lg:text-[4.2rem] font-semibold leading-[1.1] mb-6 drop-shadow-2xl text-white">
              <span className="font-sans tracking-tight">{slides[selectedIndex].title.split('\n')[0]}</span>
              {slides[selectedIndex].title.split('\n').length > 1 && (
                <span className="font-serif italic font-light mt-2">{slides[selectedIndex].title.split('\n').slice(1).join(' ')}</span>
              )}
            </h1>
            
            <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto font-light leading-relaxed drop-shadow-md">
              {slides[selectedIndex].description}. {slides[selectedIndex].subhead}.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Static Buttons (Outside Carousel so they don't slide) */}
      <div className="absolute bottom-24 md:bottom-32 left-0 w-full pointer-events-none flex flex-col items-center justify-center z-20">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto">
          <Link 
            to="/contact"
            className="bg-white text-black px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-gray-200 transition-colors duration-300 shadow-xl"
          >
            Contact Us
          </Link>
          <Link 
            to="/services"
            className="border border-white/60 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-colors duration-300 flex items-center shadow-xl backdrop-blur-sm"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 translate-y-1/2 w-full px-4 md:px-8 pointer-events-none flex justify-between z-10 opacity-0 md:opacity-100 transition-opacity">
        <button 
          onClick={scrollPrev}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-white/10 backdrop-blur-sm text-white/70 hover:text-white border border-transparent transition-colors duration-300 pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2} />
        </button>
        <button 
          onClick={scrollNext}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-white/10 backdrop-blur-sm text-white/70 hover:text-white border border-transparent transition-colors duration-300 pointer-events-auto"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 w-full flex justify-center z-10 pointer-events-auto">
        <button 
          onClick={handleScrollDown}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-md"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
