import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

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
  
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  
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
    <section className="py-16 md:py-24 overflow-hidden text-left relative bg-[#F8F3EC]">

      {/* Warm sand gradient — distinct from the blue-cream sections above & below */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5EFE4] via-[#F9F4EE] to-[#FCF8F2] z-0" />

      <div className="container relative z-10 mx-auto px-4 lg:px-12 max-w-[1400px]">

        {/* Header Region */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Eyebrow — matches Contact page label style */}
            <span className="text-xs font-sans tracking-[0.22em] text-[#6B6B6B] font-medium uppercase mb-5 block">
              Testimonials
            </span>

            <AnimatedHeading className="text-[40px] md:text-[48px] lg:text-[56px] font-serif font-light text-[#1B1D1E] mb-6 leading-[1.08] tracking-tight">
              <AnimatedText text="Loved by " />
              <AnimatedText text=" forward-thinking" className="italic text-[#1B1D1E]/65" />
              <AnimatedText text=" teams" />
            </AnimatedHeading>

            <p className="text-[16px] md:text-[17px] text-[#6B6B6B] max-w-xl font-light leading-relaxed">
              See how our platform is helping companies transform their technology
              into actionable insights and scalable growth.
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-3"
          >
            <button
              type="button"
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-black/8 text-[#1B1D1E] shadow-sm hover:bg-[#1B1D1E] hover:text-white hover:border-[#1B1D1E] transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-300" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-black/8 text-[#1B1D1E] shadow-sm hover:bg-[#1B1D1E] hover:text-white hover:border-[#1B1D1E] transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={2} />
            </button>
          </motion.div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-4 -ml-6" ref={emblaRef}>
          <div className="flex pl-6">
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{ duration: 0.65 }}
                className="flex-[0_0_100%] min-w-0 pr-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                {/* Card — same treatment as Contact page form card */}
                <div className="h-full bg-white p-8 lg:p-10 rounded-[28px] border border-black/[0.04] shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)] transition-all duration-500 flex flex-col group hover:-translate-y-2 relative overflow-hidden">

                  {/* Decorative quote watermark */}
                  <div className="absolute top-6 right-7 text-[72px] leading-none text-black/[0.03] font-serif select-none pointer-events-none group-hover:text-black/[0.055] transition-colors duration-500">
                    "
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-7 z-10">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-[15px] h-[15px] fill-[#F5A623] text-[#F5A623]" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-[#1B1D1E]/75 text-[17px] mb-10 grow font-serif italic leading-[1.65] z-10 relative">
                    "{t.text}"
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-black/[0.05] mb-7" />

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto z-10">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-black/8 shadow-sm shrink-0">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[14px] tracking-tight text-[#1B1D1E]">
                        {t.name}
                      </h4>
                      <p className="text-[12px] text-[#6B6B6B] mt-0.5 font-medium">
                        {t.role}
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
