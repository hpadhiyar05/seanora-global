// import React, { useCallback, useEffect, useRef, useState } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import { Star } from 'lucide-react';
// import { motion } from 'framer-motion';

// import img1 from '../../../assets/images/testimonial-image -1.webp';
// import img2 from '../../../assets/images/testimonial-image -2.webp';
// import img3 from '../../../assets/images/testimonial-image -3.webp';
// import img4 from '../../../assets/images/testimonial-image -4.webp';

// const testimonials = [
//   { id: 1, name: "Sarah Jenkins",    role: "CEO, TechFlow",          text: "This service completely transformed how we handle our regional data. The speed and accuracy are practically unmatched.",                                img: img1 },
//   { id: 2, name: "Marcus Chen",      role: "Operations Director",     text: "A truly powerful platform. We've seen a 40% increase in workflow efficiency within the first two months.",                                              img: img2 },
//   { id: 3, name: "Elena Rodriguez",  role: "Product Manager",         text: "The onboarding was seamless, and the insights we're getting now are absolute game-changers for our strategy.",                                          img: img3 },
//   { id: 4, name: "David Kim",        role: "Founder, DataSync",       text: "Incredible attention to detail and customer support. It feels like they are an extension of our own team.",                                             img: img4 },
//   { id: 5, name: "Emily Watson",     role: "VP of Engineering",       text: "We migrated our entire system over a weekend without a single glitch. The architecture is incredibly robust.",                                          img: img1 },
//   { id: 6, name: "James Anderson",   role: "Head of Marketing",       text: "The analytics dashboard gives us exactly what we need to see at a glance. Highly recommend their enterprise plan.",                                     img: img2 },
//   { id: 7, name: "Sophia Martinez",  role: "CTO, Innovate Inc.",      text: "Security and compliance were our top priorities, and they exceeded our expectations on every single front.",                                            img: img3 },
//   { id: 8, name: "Michael Taylor",   role: "Lead Developer",          text: "The API is a joy to work with. Clean documentation and predictable responses make integration a breeze.",                                              img: img4 },
// ];

// /* ── Stars ─────────────────────────────────────────────── */
// const Stars = ({ count = 5, filled = 4, size = 'sm' }) => {
//   const sz = size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';
//   return (
//     <div className="flex items-center gap-1">
//       {Array.from({ length: count }).map((_, i) => (
//         <Star
//           key={i}
//           className={`${sz} ${i < filled ? 'fill-[#111827] text-[#111827]' : 'fill-[#D1D5DB] text-[#D1D5DB]'}`}
//           strokeWidth={0}
//         />
//       ))}
//     </div>
//   );
// };

// /* ── Card ──────────────────────────────────────────────── */
// const TestimonialCard = ({ t, isCenter }) => (
//   <div
//     className={`h-full flex flex-col justify-between p-8 lg:p-10 rounded-2xl border transition-all duration-300 ${
//       isCenter
//         ? 'bg-white border-[#E5E7EB] shadow-[0_2px_24px_rgba(0,0,0,0.07)]'
//         : 'bg-white border-[#F3F4F6]'
//     }`}
//   >
//     {/* Stars */}
//     <div className="mb-5">
//       <Stars filled={4} />
//     </div>

//     {/* Quote */}
//     <p className="text-[#111827] text-[16px] leading-[1.65] font-normal flex-1 mb-8">
//       &ldquo;{t.text}&rdquo;
//     </p>

//     {/* Divider */}
//     <div className="h-px bg-[#F3F4F6] mb-6" />

//     {/* Author */}
//     <div className="flex items-center gap-3">
//       <img
//         src={t.img}
//         alt={t.name}
//         className="w-10 h-10 rounded-full object-cover shrink-0"
//         loading="lazy"
//         decoding="async"
//       />
//       <div>
//         <p className="text-[14px] font-semibold text-[#111827] leading-tight">{t.name}</p>
//         <p className="text-[12.5px] text-[#6B7280] font-normal mt-0.5">{t.role}</p>
//       </div>
//     </div>
//   </div>
// );

// /* ══════════════════════════════════════════════════════════ */
// const Testimonials = () => {
//   const autoplayRef = useRef(
//     Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
//   );

//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, align: 'center', skipSnaps: false },
//     [autoplayRef.current]
//   );

//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on('select', onSelect);
//     emblaApi.on('reInit', onSelect);
//   }, [emblaApi, onSelect]);

//   return (
//     <section className="py-20 md:py-28 bg-[#F5F5F5] overflow-hidden">

//       {/* ── Header ─────────────────────────────────────── */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: '-80px' }}
//         transition={{ duration: 0.65, ease: 'easeOut' }}
//         className="text-center px-6 mb-14"
//       >
//         {/* Rating row */}
//         <div className="flex items-center justify-center gap-3 mb-5">
//           <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shadow-sm">
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//               <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#111827"/>
//               <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#111827" opacity="0.3"/>
//               <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#111827" opacity="0.3"/>
//               <rect x="13" y="13" width="8" height="8" rx="1.5" fill="#111827"/>
//             </svg>
//           </div>
//           <div className="flex items-center gap-2">
//             <Stars filled={4} size="lg" />
//             <span className="text-[14px] font-medium text-[#374151]">4.6 Rate by 16,000+ Reviews</span>
//           </div>
//         </div>

//         {/* Main heading */}
//         <h2 className="text-[2.5rem] md:text-[4rem] font-medium text-[#111827] tracking-tight leading-[1.08] mb-4">
//           What our clients say
//         </h2>

//         {/* Sub */}
//         <p className="text-[15px] text-[#6B7280] font-normal max-w-[380px] mx-auto leading-relaxed">
//           Trusted by teams and businesses worldwide, here's what people love about working with us.
//         </p>
//       </motion.div>

//       {/* ── Carousel ───────────────────────────────────── */}
//       <div
//         className="overflow-hidden cursor-grab active:cursor-grabbing"
//         ref={emblaRef}
//       >
//         <div className="flex gap-4 px-4">
//           {testimonials.map((t, i) => {
//             const isCenter = i === selectedIndex;
//             return (
//               <div
//                 key={t.id}
//                 className={`flex-[0_0_88%] min-w-0 sm:flex-[0_0_48%] lg:flex-[0_0_32%] transition-all duration-400 ${
//                   isCenter ? 'opacity-100' : 'opacity-50'
//                 }`}
//               >
//                 <TestimonialCard t={t} isCenter={isCenter} />
//               </div>
//             );
//           })}
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Testimonials;

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

import img1 from '../../../assets/images/testimonial-image -1.webp';
import img2 from '../../../assets/images/testimonial-image -2.webp';
import img3 from '../../../assets/images/testimonial-image -3.webp';
import img4 from '../../../assets/images/testimonial-image -4.webp';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        role: 'CEO, TechFlow',
        text: 'This service completely transformed how we handle our regional data. The speed and accuracy are practically unmatched.',
        img: img1,
    },
    {
        id: 2,
        name: 'Marcus Chen',
        role: 'Operations Director',
        text: "A truly powerful platform. We've seen a 40% increase in workflow efficiency within the first two months.",
        img: img2,
    },
    {
        id: 3,
        name: 'Elena Rodriguez',
        role: 'Product Manager',
        text: "The onboarding was seamless, and the insights we're getting now are absolute game-changers for our strategy.",
        img: img3,
    },
    {
        id: 4,
        name: 'David Kim',
        role: 'Founder, DataSync',
        text: 'Incredible attention to detail and customer support. It feels like they are an extension of our own team.',
        img: img4,
    },
    {
        id: 5,
        name: 'Emily Watson',
        role: 'VP of Engineering',
        text: 'We migrated our entire system over a weekend without a single glitch. The architecture is incredibly robust.',
        img: img1,
    },
    {
        id: 6,
        name: 'James Anderson',
        role: 'Head of Marketing',
        text: 'The analytics dashboard gives us exactly what we need to see at a glance. Highly recommend their enterprise plan.',
        img: img2,
    },
    {
        id: 7,
        name: 'Sophia Martinez',
        role: 'CTO, Innovate Inc.',
        text: 'Security and compliance were our top priorities, and they exceeded our expectations on every single front.',
        img: img3,
    },
    {
        id: 8,
        name: 'Michael Taylor',
        role: 'Lead Developer',
        text: 'The API is a joy to work with. Clean documentation and predictable responses make integration a breeze.',
        img: img4,
    },
];

/* ── Inline star SVG — zero imports ────────────────────── */
const StarIcon = ({ filled }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0 }}>
        <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={filled ? '#F59E0B' : '#E5E7EB'}
            stroke="none"
        />
    </svg>
);

const Stars = ({ filled = 4, count = 5, size = 'sm' }) => {
    const px = size === 'lg' ? 20 : 16;
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} width={px} height={px} viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        fill={i < filled ? '#F59E0B' : '#E5E7EB'}
                        stroke="none"
                    />
                </svg>
            ))}
        </div>
    );
};

/* ── Card ──────────────────────────────────────────────── */
const TestimonialCard = React.memo(({ t, isCenter }) => (
    <div
        style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem 2.5rem',
            borderRadius: '1rem',
            border: `1px solid ${isCenter ? '#E5E7EB' : '#F3F4F6'}`,
            background: '#fff',
            boxShadow: isCenter ? '0 2px 24px rgba(0,0,0,0.07)' : 'none',
            transition: 'box-shadow 0.3s, border-color 0.3s',
        }}
    >
        <div style={{ marginBottom: '1.25rem' }}>
            <Stars filled={4} />
        </div>

        <p style={{ color: '#111827', fontSize: 16, lineHeight: 1.65, fontWeight: 400, flex: 1, marginBottom: '2rem' }}>
            &ldquo;{t.text}&rdquo;
        </p>

        <div style={{ height: 1, background: '#F3F4F6', marginBottom: '1.5rem' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img
                src={t.img}
                alt={t.name}
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
                style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            />
            <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#111827', lineHeight: 1.2, margin: 0 }}>{t.name}</p>
                <p style={{ fontSize: 12.5, color: '#6B7280', fontWeight: 400, margin: '2px 0 0' }}>{t.role}</p>
            </div>
        </div>
    </div>
));

TestimonialCard.displayName = 'TestimonialCard';

/* ── CSS injected once ─────────────────────────────────── */
const STYLES = `
@keyframes tmMarquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.tm-carousel {
  overflow: hidden;
}
.tm-track {
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: tmMarquee 45s linear infinite;
}
.tm-track:hover {
  animation-play-state: paused;
}
.tm-slide {
  flex: 0 0 300px;
  min-width: 0;
}
@media (min-width: 640px) {
  .tm-slide { flex: 0 0 360px; }
}
@media (min-width: 1024px) {
  .tm-slide { flex: 0 0 380px; }
}
`;

let stylesInjected = false;
function injectStyles() {
    if (stylesInjected || typeof document === 'undefined') return;
    const el = document.createElement('style');
    el.textContent = STYLES;
    document.head.appendChild(el);
    stylesInjected = true;
}

/* ══════════════════════════════════════════════════════════
   Main component
   ══════════════════════════════════════════════════════════ */
const Testimonials = () => {
    injectStyles();

    const duplicated = [...testimonials, ...testimonials];

    return (
        <section style={{ padding: '5rem 0 7rem', background: '#F5F5F5', overflow: 'hidden' }}>
            {/* ── Header ─────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                style={{ textAlign: 'center', padding: '0 1.5rem', marginBottom: '3.5rem' }}
            >
                {/* Rating row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
                    <div
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 12,
                            background: '#fff',
                            border: '1px solid #E5E7EB',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#111827" />
                            <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#111827" opacity="0.3" />
                            <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#111827" opacity="0.3" />
                            <rect x="13" y="13" width="8" height="8" rx="1.5" fill="#111827" />
                        </svg>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Stars filled={4} size="lg" />
                        <span style={{ fontSize: 14, fontWeight: 500, color: '#374151' }}>4.6 Rate by 16,000+ Reviews</span>
                    </div>
                </div>

                <AnimatedHeading className="text-[2.5rem] md:text-[4rem] font-medium text-[#111827] tracking-tight leading-[1.08] mb-4">
                    <AnimatedText text="What our clients say" />
                </AnimatedHeading>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                    style={{ fontSize: 15, color: '#6B7280', maxWidth: 380, margin: '0 auto', lineHeight: 1.6 }}
                >
                    Trusted by teams and businesses worldwide, here&rsquo;s what people love about working with us.
                </motion.p>
            </motion.div>

            {/* ── Carousel ───────────────────────────────────── */}
            <div className="tm-carousel">
                <div className="tm-track">
                    {duplicated.map((t, i) => (
                        <div key={`${t.id}-${i}`} className="tm-slide">
                            <TestimonialCard t={t} isCenter={false} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
