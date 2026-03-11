import React, { useRef, useEffect } from 'react';
import { Lightbulb, Award, Clock, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  // ... (features remain the same)
  {
    icon: Lightbulb,
    title: 'Best Solutions',
    description: 'Guaranteed lowest industry rates for all offered services.',
  },
  {
    icon: Award,
    title: 'Experience',
    description: 'Get top tier talent with required skills and certifications.',
  },
  {
    icon: Clock,
    title: 'Quick Support',
    description: 'Personally assigned service executive with 24x7 support.',
  },
  {
    icon: PenTool,
    title: 'Unique Design',
    description: "We'll help you test bold new ideas while sharing yours.",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e) => {
      // Only lock scroll on desktop sizes where the split layout exists
      if (window.innerWidth >= 1024) {
        const track = trackRef.current;
        if (!track) return;

        const isAtTop = track.scrollTop === 0;
        const isAtBottom = Math.abs(track.scrollHeight - track.clientHeight - track.scrollTop) < 1;

        // If scrolling UP and already at TOP, let page scroll normally
        if (e.deltaY < 0 && isAtTop) {
          return;
        }
        
        // If scrolling DOWN and already at BOTTOM, let page scroll normally
        if (e.deltaY > 0 && isAtBottom) {
          return;
        }

        // Otherwise, WE have control. Prevent the page from scrolling,
        // and manually push the delta into our scroll track.
        e.preventDefault();
        track.scrollTop += e.deltaY;
      }
    };

    // We must use a native listener to use { passive: false } which allows preventDefault()
    section.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      section.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative bg-[var(--color-bg)] w-full">
      <div className="max-w-6xl mx-auto px-6 relative w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-24 items-start lg:h-[600px] relative">
          
          {/* Left: Static Title */}
          <div className="w-full relative h-auto flex items-center lg:h-full z-20 pointer-events-none">
            <div className="flex items-center w-full z-20 pointer-events-auto">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-xl"
              >
                <span className="text-xs font-sans tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-4 block">
                  Why Choose Us
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-text)] leading-tight font-light">
                  Expertise and <br className="hidden md:block" />
                  <span className="font-semibold text-[var(--color-primary)]">
                    dedication
                  </span> <br className="hidden md:block" />
                  to exceed expectations.
                </h2>
              </motion.div>
            </div>
          </div>

          {/* Right: Snap Scrolling Features */}
          <div 
            ref={trackRef}
            className="flex flex-col w-full h-[60vh] lg:h-full max-w-lg mx-auto lg:mx-0 lg:ml-auto overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar relative pr-4 lg:py-24 z-40"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 h-full snap-center flex flex-col justify-center transition-all duration-500"
                  style={{ scrollSnapStop: 'always' }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-[1rem] bg-white shadow-sm border border-[var(--color-border)] mb-6">
                    <Icon className="w-6 h-6 text-[var(--color-text)]" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-[var(--color-text)]">
                    {feature.title}
                  </h3>
                  
                  <p className="text-base text-[var(--color-text-muted)] leading-relaxed mt-3 max-w-md">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
      
      {/* Hide scrollbar injected CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default WhyChooseUs;
