import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

import img1 from '../../../assets/images/testimonial-image (1).jpg';
import img2 from '../../../assets/images/testimonial-image (2).jpg';
import img3 from '../../../assets/images/testimonial-image (3).jpg';
import img4 from '../../../assets/images/testimonial-image (4).jpg';

const testimonials = [
  { id: 1, name: "Sarah Jenkins", role: "CEO, TechFlow", text: "This service completely transformed how we handle our regional data. The speed and accuracy are practically unmatched.", img: img1 },
  { id: 2, name: "Marcus Chen", role: "Operations Director", text: "A truly powerful platform. We've seen a 40% increase in workflow efficiency within the first two months.", img: img2 },
  { id: 3, name: "Elena Rodriguez", role: "Product Manager", text: "The onboarding was seamless, and the insights we're getting now are absolute game-changers for our strategy.", img: img3 },
  { id: 4, name: "David Kim", role: "Founder, DataSync", text: "Incredible attention to detail and customer support. It feels like they are an extension of our own team.", img: img4 },
  { id: 5, name: "Emily Watson", role: "VP of Engineering", text: "We migrated our entire system over a weekend without a single glitch. The architecture is incredibly robust.", img: img1 },
  { id: 6, name: "James Anderson", role: "Head of Marketing", text: "The analytics dashboard gives us exactly what we need to see at a glance. Highly recommend their enterprise plan.", img: img2 },
  { id: 7, name: "Sophia Martinez", role: "CTO, Innovate Inc.", text: "Security and compliance were our top priorities, and they exceeded our expectations on every single front.", img: img3 },
  { id: 8, name: "Michael Taylor", role: "Lead Developer", text: "The API is a joy to work with. Clean documentation and predictable responses make integration a breeze.", img: img4 }
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    dragFree: true
  });
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 overflow-hidden bg-[var(--color-surface)] text-left relative">
      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-sans tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-text)] mb-6 font-light leading-tight">
              Loved by <span className="italic text-[var(--color-text-muted)]">forward-thinking</span> teams
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] font-light max-w-xl">
              See how our platform is helping companies transform their regional data into actionable insights and scalable growth.
            </p>
          </motion.div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="w-14 h-14 flex items-center justify-center rounded-full border border-[var(--color-border)] bg-transparent text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors duration-500 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={1} />
            </button>
            <button 
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="w-14 h-14 flex items-center justify-center rounded-full border border-[var(--color-border)] bg-transparent text-[var(--color-text)] hover:border-[var(--color-text)] transition-colors duration-500 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={1} />
            </button>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-12 -ml-6" ref={emblaRef}>
          <div className="flex pl-6">
            {testimonials.map((t) => {
              return (
                <motion.div 
                  key={t.id} 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ duration: 0.7 }}
                  className="flex-[0_0_100%] min-w-0 pr-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  {/* Custom Testimonial Card */}
                  <div className={`h-full bg-white p-10 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-text-subtle)] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group`}>
                    <div className="flex gap-1 mb-8 text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-[var(--color-text)] text-lg mb-10 flex-grow font-serif italic leading-relaxed">
                      "{t.text}"
                    </p>
                    
                    <div className="w-8 h-[1px] bg-[var(--color-border)] mb-8"></div>

                    <div className="flex items-center gap-4 mt-auto">
                      <img 
                        src={t.img} 
                        alt={t.name} 
                        className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div>
                        <h4 className="font-semibold text-sm tracking-wide text-[var(--color-text)] uppercase">{t.name}</h4>
                        <p className="text-xs text-[var(--color-text-muted)] mt-1 font-light tracking-wider">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
