import React, { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

import img1 from '../../../assets/images/testimonial-image -1.webp';
import img2 from '../../../assets/images/testimonial-image -2.webp';
import img3 from '../../../assets/images/testimonial-image -3.webp';
import img4 from '../../../assets/images/testimonial-image -4.webp';

const testimonials = [
  { id: 1, name: "Sarah Jenkins",    role: "CEO, TechFlow",          text: "This service completely transformed how we handle our regional data. The speed and accuracy are practically unmatched.",                                img: img1 },
  { id: 2, name: "Marcus Chen",      role: "Operations Director",     text: "A truly powerful platform. We've seen a 40% increase in workflow efficiency within the first two months.",                                              img: img2 },
  { id: 3, name: "Elena Rodriguez",  role: "Product Manager",         text: "The onboarding was seamless, and the insights we're getting now are absolute game-changers for our strategy.",                                          img: img3 },
  { id: 4, name: "David Kim",        role: "Founder, DataSync",       text: "Incredible attention to detail and customer support. It feels like they are an extension of our own team.",                                             img: img4 },
  { id: 5, name: "Emily Watson",     role: "VP of Engineering",       text: "We migrated our entire system over a weekend without a single glitch. The architecture is incredibly robust.",                                          img: img1 },
  { id: 6, name: "James Anderson",   role: "Head of Marketing",       text: "The analytics dashboard gives us exactly what we need to see at a glance. Highly recommend their enterprise plan.",                                     img: img2 },
  { id: 7, name: "Sophia Martinez",  role: "CTO, Innovate Inc.",      text: "Security and compliance were our top priorities, and they exceeded our expectations on every single front.",                                            img: img3 },
  { id: 8, name: "Michael Taylor",   role: "Lead Developer",          text: "The API is a joy to work with. Clean documentation and predictable responses make integration a breeze.",                                              img: img4 },
];

/* ── Stars ─────────────────────────────────────────────── */
const Stars = ({ count = 5, filled = 4, size = 'sm' }) => {
  const sz = size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className={`${sz} ${i < filled ? 'fill-[#111827] text-[#111827]' : 'fill-[#D1D5DB] text-[#D1D5DB]'}`}
          strokeWidth={0}
        />
      ))}
    </div>
  );
};

/* ── Card ──────────────────────────────────────────────── */
const TestimonialCard = ({ t, isCenter }) => (
  <div
    className={`h-full flex flex-col justify-between p-8 lg:p-10 rounded-2xl border transition-all duration-300 ${
      isCenter
        ? 'bg-white border-[#E5E7EB] shadow-[0_2px_24px_rgba(0,0,0,0.07)]'
        : 'bg-white border-[#F3F4F6]'
    }`}
  >
    {/* Stars */}
    <div className="mb-5">
      <Stars filled={4} />
    </div>

    {/* Quote */}
    <p className="text-[#111827] text-[16px] leading-[1.65] font-normal flex-1 mb-8">
      &ldquo;{t.text}&rdquo;
    </p>

    {/* Divider */}
    <div className="h-px bg-[#F3F4F6] mb-6" />

    {/* Author */}
    <div className="flex items-center gap-3">
      <img
        src={t.img}
        alt={t.name}
        className="w-10 h-10 rounded-full object-cover shrink-0"
        loading="lazy"
        decoding="async"
      />
      <div>
        <p className="text-[14px] font-semibold text-[#111827] leading-tight">{t.name}</p>
        <p className="text-[12.5px] text-[#6B7280] font-normal mt-0.5">{t.role}</p>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════ */
const Testimonials = () => {
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [autoplayRef.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 md:py-28 bg-[#F5F5F5] overflow-hidden">

      {/* ── Header ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="text-center px-6 mb-14"
      >
        {/* Rating row */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#111827"/>
              <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#111827" opacity="0.3"/>
              <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#111827" opacity="0.3"/>
              <rect x="13" y="13" width="8" height="8" rx="1.5" fill="#111827"/>
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <Stars filled={4} size="lg" />
            <span className="text-[14px] font-medium text-[#374151]">4.6 Rate by 16,000+ Reviews</span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-[2.5rem] md:text-[4rem] font-medium text-[#111827] tracking-tight leading-[1.08] mb-4">
          What our clients say
        </h2>

        {/* Sub */}
        <p className="text-[15px] text-[#6B7280] font-normal max-w-[380px] mx-auto leading-relaxed">
          Trusted by teams and businesses worldwide, here's what people love about working with us.
        </p>
      </motion.div>

      {/* ── Carousel ───────────────────────────────────── */}
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex gap-4 px-4">
          {testimonials.map((t, i) => {
            const isCenter = i === selectedIndex;
            return (
              <div
                key={t.id}
                className={`flex-[0_0_88%] min-w-0 sm:flex-[0_0_48%] lg:flex-[0_0_32%] transition-all duration-400 ${
                  isCenter ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <TestimonialCard t={t} isCenter={isCenter} />
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;