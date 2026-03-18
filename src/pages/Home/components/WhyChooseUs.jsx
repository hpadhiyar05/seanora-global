// import { useRef, useEffect, useState } from 'react';
// import { Lightbulb, Award, Clock, PenTool, CheckCircle2 } from 'lucide-react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

// import img1 from '../../../assets/images/home-service-1.webp';
// import img2 from '../../../assets/images/home-service-2.webp';
// import img3 from '../../../assets/images/home-service-3.webp';
// import img4 from '../../../assets/images/home-service-4.webp';
// import img5 from '../../../assets/images/home-service-5.webp';
// import img6 from '../../../assets/images/home-service-6.webp';

// /* ── Layout constants ───────────────────────────────────────────── */
// const CARD_W = 360; // px — slightly wider cards
// const CARD_GAP = 80; // px — more breathing room between columns
// const N = 6;

// /* ── Use viewport-relative left padding so heading + cards align ── */
// const getLeftPad = (vw) => Math.max(48, Math.round(vw * 0.06)); // 6vw, min 48px
// const getRightPad = (vw) => Math.max(120, Math.round(vw * 0.1)); // 10vw end buffer

// const items = [
//     {
//         index: '01',
//         icon: Lightbulb,
//         title: 'Best-in-Class Solutions',
//         description:
//             'We guarantee the lowest industry rates without compromising quality, delivering enterprise-grade solutions that are cost-effective and built to scale.',
//         bullets: ['40% avg. cost reduction', 'Enterprise-grade quality', 'Scalable architecture', 'Cost-effective delivery'],
//         image: img1,
//     },
//     {
//         index: '02',
//         icon: Award,
//         title: 'Deep Domain Experience',
//         description:
//             'Our certified specialists bring 10+ years of cross-industry experience, pairing technical depth with domain knowledge to solve your most complex IT challenges.',
//         bullets: ['10+ years in the field', 'Certified specialists', 'Cross-industry depth', 'Complex IT solutions'],
//         image: img2,
//     },
//     {
//         index: '03',
//         icon: Clock,
//         title: '24 / 7 Rapid Response',
//         description:
//             'Every client is assigned a dedicated service executive available around the clock. We treat your uptime as our uptime — because downtime is never acceptable.',
//         bullets: ['< 2 hr average response', 'Dedicated executive', 'Round-the-clock support', 'Zero downtime goal'],
//         image: img3,
//     },
//     {
//         index: '04',
//         icon: PenTool,
//         title: 'Tailored Innovation',
//         description:
//             'We craft bespoke IT solutions aligned to your exact business context, helping you move fast on bold ideas while reducing implementation risk at every phase.',
//         bullets: ['500+ custom solutions', 'Bespoke architecture', 'Risk-reduced delivery', 'Bold idea execution'],
//         image: img4,
//     },
//     {
//         index: '05',
//         icon: Award,
//         title: 'Certified Delivery Standards',
//         description:
//             'We follow clear delivery governance—security reviews, documentation, and quality checks—so projects ship reliably and are easy to operate, hand over, and scale.',
//         bullets: ['Quality checkpoints', 'Security-first delivery', 'Clear documentation', 'Operational readiness'],
//         image: img5,
//     },
//     {
//         index: '06',
//         icon: Clock,
//         title: 'Proactive Monitoring & Care',
//         description:
//             'Beyond support, we proactively monitor and improve your systems—catching issues early, reducing incidents, and keeping performance steady as demand grows.',
//         bullets: ['Proactive monitoring', 'Preventive maintenance', 'Performance tuning', 'Incident reduction'],
//         image: img6,
//     },
// ];

// /* ══════════════════════════════════════════════════════════════════
//    Mobile card — vertical stack fallback (< 1024px)
// ══════════════════════════════════════════════════════════════════ */
// const MobileCard = ({ item }) => (
//     <div className="flex flex-col gap-3">
//         <div className="overflow-hidden rounded-xl h-[200px]">
//             <img
//                 src={item.image}
//                 alt={item.title}
//                 loading="lazy"
//                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
//                 width={600}
//                 height={400}
//             />
//         </div>
//         <span className="text-[11px] font-semibold text-[#6B7280] tabular-nums">{item.index}</span>
//         <h3 className="text-[17px] font-semibold text-[#111827] tracking-tight leading-snug">{item.title}</h3>
//         <p className="text-[13px] text-[#6B7280] font-light leading-relaxed">{item.description}</p>
//         <ul className="flex flex-col gap-1.5">
//             {item.bullets.map((b) => (
//                 <li key={b} className="flex items-center gap-2 text-[12px] font-medium text-[#374151]">
//                     <CheckCircle2 className="w-3.5 h-3.5 text-[#1E5AA5] shrink-0" strokeWidth={2} />
//                     {b}
//                 </li>
//             ))}
//         </ul>
//     </div>
// );

// /* ══════════════════════════════════════════════════════════════════
//    Desktop horizontal scroll (≥ 1024px)
// ══════════════════════════════════════════════════════════════════ */
// const DesktopScroll = () => {
//     const targetRef = useRef(null);
//     const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);
//     const [vh, setVh] = useState(typeof window !== 'undefined' ? window.innerHeight : 900);

//     const LEFT_PAD = getLeftPad(vw);
//     const RIGHT_PAD = getRightPad(vw);
//     const trackWidth = LEFT_PAD + N * CARD_W + (N - 1) * CARD_GAP + RIGHT_PAD;
//     const scrollDistance = Math.max(0, trackWidth - vw);
//     const sectionHeight = vh + scrollDistance;

//     useEffect(() => {
//         const onResize = () => {
//             setVw(window.innerWidth);
//             setVh(window.innerHeight);
//         };
//         window.addEventListener('resize', onResize, { passive: true });
//         return () => window.removeEventListener('resize', onResize);
//     }, []);

//     const { scrollYProgress } = useScroll({
//         target: targetRef,
//         offset: ['start start', 'end end'],
//     });

//     const rawX = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
//     const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.6 });
//     const barWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

//     return (
//         <section ref={targetRef} className="relative bg-[#F8FAFC] w-full" style={{ height: `${sectionHeight}px` }}>
//             <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
//                 {/* ── Heading — left edge aligned to LEFT_PAD ───── */}
//                 <div
//                     className="shrink-0 pt-14 pb-8 flex items-end justify-between gap-4"
//                     style={{ paddingLeft: `${LEFT_PAD}px`, paddingRight: `${LEFT_PAD}px` }}
//                 >
//                     <div>
//                         <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9CA3AF] mb-3 block">
//                             Why Choose Us
//                         </span>
//                         <AnimatedHeading className="text-[2.5rem] xl:text-[4rem] font-medium text-[#111827] tracking-tight leading-[1.1]">
//                             <AnimatedText text="Expertise and dedication" className="block" />
//                             <AnimatedText text="to exceed expectations" className="block text-[#9CA3AF] font-light italic font-serif" />
//                         </AnimatedHeading>
//                     </div>
//                     <p className="text-[14px] text-[#6B7280] font-light leading-relaxed max-w-[280px] pb-1 shrink-0">
//                         Discovery to delivery, we follow a proven framework that ensures clarity, precision, and growth.
//                     </p>
//                 </div>

//                 {/* ── Scrolling track ───────────────────────────── */}
//                 <div className="flex-1 flex flex-col justify-center overflow-hidden">
//                     <motion.div style={{ x, width: `${trackWidth}px` }} className="flex flex-col">
//                         {/* ROW 1 — Images */}
//                         <div
//                             className="flex items-end"
//                             style={{
//                                 gap: `${CARD_GAP}px`,
//                                 paddingLeft: `${LEFT_PAD}px`,
//                                 paddingRight: `${RIGHT_PAD}px`,
//                             }}
//                         >
//                             {items.map((item, i) => (
//                                 <div
//                                     key={`img-${i}`}
//                                     className="shrink-0 overflow-hidden rounded-2xl"
//                                     style={{
//                                         width: `${CARD_W}px`,
//                                         height: i % 2 === 0 ? '200px' : '150px',
//                                     }}
//                                 >
//                                     <img
//                                         src={item.image}
//                                         alt={item.title}
//                                         loading="lazy"
//                                         className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-[1.02] hover:scale-100"
//                                         width={600}
//                                         height={400}
//                                     />
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Progress bar */}
//                         <div
//                             className="relative h-[6px] bg-black/[0.07] my-8 rounded-full"
//                             style={{
//                                 marginLeft: `${LEFT_PAD}px`,
//                                 marginRight: `${RIGHT_PAD}px`,
//                             }}
//                         >
//                             {items.map((_, i) => (
//                                 <div
//                                     key={i}
//                                     className="absolute top-1/2 w-[7px] h-[7px] rounded-full bg-[#D1D5DB] border-[1.5px] border-white z-10"
//                                     style={{
//                                         left: `${(i / (N - 1)) * 100}%`,
//                                         transform: 'translate(-50%, -50%)',
//                                     }}
//                                 />
//                             ))}
//                             <motion.div className="absolute left-0 top-0 h-full bg-[#1E5AA5] rounded-full" style={{ width: barWidth }} />
//                         </div>

//                         {/* ROW 2 — Text */}
//                         <div
//                             className="flex items-start"
//                             style={{
//                                 gap: `${CARD_GAP}px`,
//                                 paddingLeft: `${LEFT_PAD}px`,
//                                 paddingRight: `${RIGHT_PAD}px`,
//                             }}
//                         >
//                             {items.map((item, i) => {
//                                 const Icon = item.icon;
//                                 return (
//                                     <div key={`text-${i}`} className="shrink-0" style={{ width: `${CARD_W}px` }}>
//                                         <span className="text-[11px] font-semibold text-[#9CA3AF] tabular-nums block mb-2">
//                                             {item.index}
//                                         </span>
//                                         <h3 className="text-[19px] font-semibold text-[#111827] tracking-tight leading-snug mb-2">
//                                             {item.title}
//                                         </h3>
//                                         <p className="text-[13.5px] text-[#6B7280] font-light leading-[1.7] mb-4">{item.description}</p>
//                                         <ul className="flex flex-col gap-2">
//                                             {item.bullets.map((b) => (
//                                                 <li key={b} className="flex items-center gap-2 text-[12.5px] font-medium text-[#374151]">
//                                                     <CheckCircle2 className="w-3.5 h-3.5 text-[#1E5AA5] shrink-0" strokeWidth={2} />
//                                                     {b}
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// /* ══════════════════════════════════════════════════════════════════
//    Main export — switches between mobile stack and desktop scroll
// ══════════════════════════════════════════════════════════════════ */
// const WhyChooseUs = () => {
//     const [isDesktop, setIsDesktop] = useState(() => {
//         if (typeof window === 'undefined') return true;
//         return window.matchMedia('(min-width: 1024px)').matches;
//     });

//     useEffect(() => {
//         if (typeof window === 'undefined') return;
//         const mq = window.matchMedia('(min-width: 1024px)');
//         const handler = (e) => setIsDesktop(e.matches);
//         mq.addEventListener('change', handler);
//         return () => mq.removeEventListener('change', handler);
//     }, []);

//     if (!isDesktop) {
//         return (
//             <section className="bg-[#F8FAFC] py-20 px-6">
//                 {/* Heading */}
//                 <div className="mb-10">
//                         <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6B7280] mb-3 block">Why Choose Us</span>
//                     <h2 className="text-[2rem] font-medium text-[#111827] tracking-tight leading-[1.1] mb-4">
//                         Expertise and dedication{' '}
//                         <span className="block text-[#6B7280] font-light italic font-serif">to exceed expectations</span>
//                     </h2>
//                     <p className="text-[14px] text-[#6B7280] font-light leading-relaxed max-w-[340px]">
//                         Discovery to delivery, we follow a proven framework that ensures clarity, precision, and growth.
//                     </p>
//                 </div>

//                 {/* Cards — 2 column on tablet, 1 on mobile */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                     {items.map((item) => (
//                         <MobileCard key={item.index} item={item} />
//                     ))}
//                 </div>
//             </section>
//         );
//     }

//     return <DesktopScroll />;
// };

// export default WhyChooseUs;
// import { useRef, useEffect, useState } from 'react';
// import { Lightbulb, Award, Clock, PenTool, CheckCircle2 } from 'lucide-react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

// import img1 from '../../../assets/images/home-service-1.webp';
// import img2 from '../../../assets/images/home-service-2.webp';
// import img3 from '../../../assets/images/home-service-3.webp';
// import img4 from '../../../assets/images/home-service-4.webp';
// import img5 from '../../../assets/images/home-service-5.webp';
// import img6 from '../../../assets/images/home-service-6.webp';

// /* ── Layout constants ───────────────────────────────────────────── */
// const CARD_W = 360; // px — slightly wider cards
// const CARD_GAP = 80; // px — more breathing room between columns
// const N = 6;

// /* ── Use viewport-relative left padding so heading + cards align ── */
// const getLeftPad = (vw) => Math.max(48, Math.round(vw * 0.06)); // 6vw, min 48px
// const getRightPad = (vw) => Math.max(120, Math.round(vw * 0.1)); // 10vw end buffer

// const items = [
//     {
//         index: '01',
//         icon: Lightbulb,
//         title: 'Best-in-Class Solutions',
//         description:
//             'We guarantee the lowest industry rates without compromising quality, delivering enterprise-grade solutions that are cost-effective and built to scale.',
//         bullets: ['40% avg. cost reduction', 'Enterprise-grade quality', 'Scalable architecture', 'Cost-effective delivery'],
//         image: img1,
//     },
//     {
//         index: '02',
//         icon: Award,
//         title: 'Deep Domain Experience',
//         description:
//             'Our certified specialists bring 10+ years of cross-industry experience, pairing technical depth with domain knowledge to solve your most complex IT challenges.',
//         bullets: ['10+ years in the field', 'Certified specialists', 'Cross-industry depth', 'Complex IT solutions'],
//         image: img2,
//     },
//     {
//         index: '03',
//         icon: Clock,
//         title: '24 / 7 Rapid Response',
//         description:
//             'Every client is assigned a dedicated service executive available around the clock. We treat your uptime as our uptime — because downtime is never acceptable.',
//         bullets: ['< 2 hr average response', 'Dedicated executive', 'Round-the-clock support', 'Zero downtime goal'],
//         image: img3,
//     },
//     {
//         index: '04',
//         icon: PenTool,
//         title: 'Tailored Innovation',
//         description:
//             'We craft bespoke IT solutions aligned to your exact business context, helping you move fast on bold ideas while reducing implementation risk at every phase.',
//         bullets: ['500+ custom solutions', 'Bespoke architecture', 'Risk-reduced delivery', 'Bold idea execution'],
//         image: img4,
//     },
//     {
//         index: '05',
//         icon: Award,
//         title: 'Certified Delivery Standards',
//         description:
//             'We follow clear delivery governance—security reviews, documentation, and quality checks—so projects ship reliably and are easy to operate, hand over, and scale.',
//         bullets: ['Quality checkpoints', 'Security-first delivery', 'Clear documentation', 'Operational readiness'],
//         image: img5,
//     },
//     {
//         index: '06',
//         icon: Clock,
//         title: 'Proactive Monitoring & Care',
//         description:
//             'Beyond support, we proactively monitor and improve your systems—catching issues early, reducing incidents, and keeping performance steady as demand grows.',
//         bullets: ['Proactive monitoring', 'Preventive maintenance', 'Performance tuning', 'Incident reduction'],
//         image: img6,
//     },
// ];

// /* ══════════════════════════════════════════════════════════════════
//    Mobile card — vertical stack fallback (< 1024px)
// ══════════════════════════════════════════════════════════════════ */
// const MobileCard = ({ item }) => (
//     <div className="flex flex-col gap-3">
//         <div className="overflow-hidden rounded-xl h-[200px]">
//             <img
//                 src={item.image}
//                 alt={item.title}
//                 loading="lazy"
//                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
//                 width={600}
//                 height={400}
//             />
//         </div>
//         <span className="text-[11px] font-semibold text-[#6B7280] tabular-nums">{item.index}</span>
//         <h3 className="text-[17px] font-semibold text-[#111827] tracking-tight leading-snug">{item.title}</h3>
//         <p className="text-[13px] text-[#6B7280] font-light leading-relaxed">{item.description}</p>
//         <ul className="flex flex-col gap-1.5">
//             {item.bullets.map((b) => (
//                 <li key={b} className="flex items-center gap-2 text-[12px] font-medium text-[#374151]">
//                     <CheckCircle2 className="w-3.5 h-3.5 text-[#1E5AA5] shrink-0" strokeWidth={2} />
//                     {b}
//                 </li>
//             ))}
//         </ul>
//     </div>
// );

// /* ══════════════════════════════════════════════════════════════════
//    Desktop horizontal scroll (≥ 1024px)
// ══════════════════════════════════════════════════════════════════ */
// const DesktopScroll = () => {
//     const targetRef = useRef(null);
//     const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);
//     const [vh, setVh] = useState(typeof window !== 'undefined' ? window.innerHeight : 900);

//     const LEFT_PAD = getLeftPad(vw);
//     const RIGHT_PAD = getRightPad(vw);
//     const trackWidth = LEFT_PAD + N * CARD_W + (N - 1) * CARD_GAP + RIGHT_PAD;
//     const scrollDistance = Math.max(0, trackWidth - vw);
//     const sectionHeight = vh + scrollDistance;

//     useEffect(() => {
//         const onResize = () => {
//             setVw(window.innerWidth);
//             setVh(window.innerHeight);
//         };
//         window.addEventListener('resize', onResize, { passive: true });
//         return () => window.removeEventListener('resize', onResize);
//     }, []);

//     const { scrollYProgress } = useScroll({
//         target: targetRef,
//         offset: ['start start', 'end end'],
//     });

//     const rawX = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
//     const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.6 });
//     const barWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

//     return (
//         <section ref={targetRef} className="relative bg-[#F8FAFC] w-full" style={{ height: `${sectionHeight}px` }}>
//             <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
//                 {/* ── Heading — left edge aligned to LEFT_PAD ───── */}
//                 <div
//                     className="shrink-0 pt-14 pb-8 flex items-end justify-between gap-4"
//                     style={{ paddingLeft: `${LEFT_PAD}px`, paddingRight: `${LEFT_PAD}px` }}
//                 >
//                     <div>
//                         <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9CA3AF] mb-3 block">
//                             Why Choose Us
//                         </span>
//                         <AnimatedHeading className="text-[2.5rem] xl:text-[4rem] font-medium text-[#111827] tracking-tight leading-[1.1]">
//                             <AnimatedText text="Expertise and dedication" className="block" />
//                             <AnimatedText text="to exceed expectations" className="block text-[#9CA3AF] font-light italic font-serif" />
//                         </AnimatedHeading>
//                     </div>
//                     <p className="text-[14px] text-[#6B7280] font-light leading-relaxed max-w-[280px] pb-1 shrink-0">
//                         Discovery to delivery, we follow a proven framework that ensures clarity, precision, and growth.
//                     </p>
//                 </div>

//                 {/* ── Scrolling track ───────────────────────────── */}
//                 <div className="flex-1 flex flex-col justify-center overflow-hidden">
//                     <motion.div style={{ x, width: `${trackWidth}px` }} className="flex flex-col">
//                         {/* ROW 1 — Images */}
//                         <div
//                             className="flex items-end"
//                             style={{
//                                 gap: `${CARD_GAP}px`,
//                                 paddingLeft: `${LEFT_PAD}px`,
//                                 paddingRight: `${RIGHT_PAD}px`,
//                             }}
//                         >
//                             {items.map((item, i) => (
//                                 <div
//                                     key={`img-${i}`}
//                                     className="shrink-0 overflow-hidden rounded-2xl"
//                                     style={{
//                                         width: `${CARD_W}px`,
//                                         height: i % 2 === 0 ? '200px' : '150px',
//                                     }}
//                                 >
//                                     <img
//                                         src={item.image}
//                                         alt={item.title}
//                                         loading="lazy"
//                                         className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-[1.02] hover:scale-100"
//                                         width={600}
//                                         height={400}
//                                     />
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Progress bar */}
//                         <div
//                             className="relative h-[6px] bg-black/[0.07] my-8 rounded-full"
//                             style={{
//                                 marginLeft: `${LEFT_PAD}px`,
//                                 marginRight: `${RIGHT_PAD}px`,
//                             }}
//                         >
//                             {items.map((_, i) => (
//                                 <div
//                                     key={i}
//                                     className="absolute top-1/2 w-[7px] h-[7px] rounded-full bg-[#D1D5DB] border-[1.5px] border-white z-10"
//                                     style={{
//                                         left: `${(i / (N - 1)) * 100}%`,
//                                         transform: 'translate(-50%, -50%)',
//                                     }}
//                                 />
//                             ))}
//                             <motion.div className="absolute left-0 top-0 h-full bg-[#1E5AA5] rounded-full" style={{ width: barWidth }} />
//                         </div>

//                         {/* ROW 2 — Text */}
//                         <div
//                             className="flex items-start"
//                             style={{
//                                 gap: `${CARD_GAP}px`,
//                                 paddingLeft: `${LEFT_PAD}px`,
//                                 paddingRight: `${RIGHT_PAD}px`,
//                             }}
//                         >
//                             {items.map((item, i) => {
//                                 const Icon = item.icon;
//                                 return (
//                                     <div key={`text-${i}`} className="shrink-0" style={{ width: `${CARD_W}px` }}>
//                                         <span className="text-[11px] font-semibold text-[#9CA3AF] tabular-nums block mb-2">
//                                             {item.index}
//                                         </span>
//                                         <h3 className="text-[19px] font-semibold text-[#111827] tracking-tight leading-snug mb-2">
//                                             {item.title}
//                                         </h3>
//                                         <p className="text-[13.5px] text-[#6B7280] font-light leading-[1.7] mb-4">{item.description}</p>
//                                         <ul className="flex flex-col gap-2">
//                                             {item.bullets.map((b) => (
//                                                 <li key={b} className="flex items-center gap-2 text-[12.5px] font-medium text-[#374151]">
//                                                     <CheckCircle2 className="w-3.5 h-3.5 text-[#1E5AA5] shrink-0" strokeWidth={2} />
//                                                     {b}
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// /* ══════════════════════════════════════════════════════════════════
//    Main export — switches between mobile stack and desktop scroll
// ══════════════════════════════════════════════════════════════════ */
// const WhyChooseUs = () => {
//     const [isDesktop, setIsDesktop] = useState(() => {
//         if (typeof window === 'undefined') return true;
//         return window.matchMedia('(min-width: 1024px)').matches;
//     });

//     useEffect(() => {
//         if (typeof window === 'undefined') return;
//         const mq = window.matchMedia('(min-width: 1024px)');
//         const handler = (e) => setIsDesktop(e.matches);
//         mq.addEventListener('change', handler);
//         return () => mq.removeEventListener('change', handler);
//     }, []);

//     if (!isDesktop) {
//         return (
//             <section className="bg-[#F8FAFC] py-20 px-6">
//                 {/* Heading */}
//                 <div className="mb-10">
//                         <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6B7280] mb-3 block">Why Choose Us</span>
//                     <h2 className="text-[2rem] font-medium text-[#111827] tracking-tight leading-[1.1] mb-4">
//                         Expertise and dedication{' '}
//                         <span className="block text-[#6B7280] font-light italic font-serif">to exceed expectations</span>
//                     </h2>
//                     <p className="text-[14px] text-[#6B7280] font-light leading-relaxed max-w-[340px]">
//                         Discovery to delivery, we follow a proven framework that ensures clarity, precision, and growth.
//                     </p>
//                 </div>

//                 {/* Cards — 2 column on tablet, 1 on mobile */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                     {items.map((item) => (
//                         <MobileCard key={item.index} item={item} />
//                     ))}
//                 </div>
//             </section>
//         );
//     }

//     return <DesktopScroll />;
// };

// export default WhyChooseUs;

// import { useRef, useEffect, useState } from 'react';
// import { Lightbulb, Award, Clock, PenTool, CheckCircle2 } from 'lucide-react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

// import img1 from '../../../assets/images/home-service-1.webp';
// import img2 from '../../../assets/images/home-service-2.webp';
// import img3 from '../../../assets/images/home-service-3.webp';
// import img4 from '../../../assets/images/home-service-4.webp';
// import img5 from '../../../assets/images/home-service-5.webp';
// import img6 from '../../../assets/images/home-service-6.webp';

// /* ── Layout constants ───────────────────────────────────────────── */
// const CARD_W = 360; // px — slightly wider cards
// const CARD_GAP = 80; // px — more breathing room between columns
// const N = 6;

// /* ── Use viewport-relative left padding so heading + cards align ── */
// const getLeftPad = (vw) => Math.max(48, Math.round(vw * 0.06)); // 6vw, min 48px
// const getRightPad = (vw) => Math.max(120, Math.round(vw * 0.1)); // 10vw end buffer

// const items = [
//     {
//         index: '01',
//         icon: Lightbulb,
//         title: 'Best-in-Class Solutions',
//         description:
//             'We guarantee the lowest industry rates without compromising quality, delivering enterprise-grade solutions that are cost-effective and built to scale.',
//         bullets: ['40% avg. cost reduction', 'Enterprise-grade quality', 'Scalable architecture', 'Cost-effective delivery'],
//         image: img1,
//     },
//     {
//         index: '02',
//         icon: Award,
//         title: 'Deep Domain Experience',
//         description:
//             'Our certified specialists bring 10+ years of cross-industry experience, pairing technical depth with domain knowledge to solve your most complex IT challenges.',
//         bullets: ['10+ years in the field', 'Certified specialists', 'Cross-industry depth', 'Complex IT solutions'],
//         image: img2,
//     },
//     {
//         index: '03',
//         icon: Clock,
//         title: '24 / 7 Rapid Response',
//         description:
//             'Every client is assigned a dedicated service executive available around the clock. We treat your uptime as our uptime — because downtime is never acceptable.',
//         bullets: ['< 2 hr average response', 'Dedicated executive', 'Round-the-clock support', 'Zero downtime goal'],
//         image: img3,
//     },
//     {
//         index: '04',
//         icon: PenTool,
//         title: 'Tailored Innovation',
//         description:
//             'We craft bespoke IT solutions aligned to your exact business context, helping you move fast on bold ideas while reducing implementation risk at every phase.',
//         bullets: ['500+ custom solutions', 'Bespoke architecture', 'Risk-reduced delivery', 'Bold idea execution'],
//         image: img4,
//     },
//     {
//         index: '05',
//         icon: Award,
//         title: 'Certified Delivery Standards',
//         description:
//             'We follow clear delivery governance—security reviews, documentation, and quality checks—so projects ship reliably and are easy to operate, hand over, and scale.',
//         bullets: ['Quality checkpoints', 'Security-first delivery', 'Clear documentation', 'Operational readiness'],
//         image: img5,
//     },
//     {
//         index: '06',
//         icon: Clock,
//         title: 'Proactive Monitoring & Care',
//         description:
//             'Beyond support, we proactively monitor and improve your systems—catching issues early, reducing incidents, and keeping performance steady as demand grows.',
//         bullets: ['Proactive monitoring', 'Preventive maintenance', 'Performance tuning', 'Incident reduction'],
//         image: img6,
//     },
// ];

// /* ══════════════════════════════════════════════════════════════════
//    Mobile card — vertical stack fallback (< 1024px)
// ══════════════════════════════════════════════════════════════════ */
// const MobileCard = ({ item }) => (
//     <div className="flex flex-col gap-3">
//         <div className="overflow-hidden rounded-xl h-[200px]">
//             <img
//                 src={item.image}
//                 alt={item.title}
//                 loading="lazy"
//                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
//                 width={600}
//                 height={400}
//             />
//         </div>
//         <span className="text-[11px] font-semibold text-[#6B7280] tabular-nums">{item.index}</span>
//         <h3 className="text-[17px] font-semibold text-[#111827] tracking-tight leading-snug">{item.title}</h3>
//         <p className="text-[13px] text-[#6B7280] font-light leading-relaxed">{item.description}</p>
//         <ul className="flex flex-col gap-1.5">
//             {item.bullets.map((b) => (
//                 <li key={b} className="flex items-center gap-2 text-[12px] font-medium text-[#374151]">
//                     <CheckCircle2 className="w-3.5 h-3.5 text-[#1E5AA5] shrink-0" strokeWidth={2} />
//                     {b}
//                 </li>
//             ))}
//         </ul>
//     </div>
// );

// /* ══════════════════════════════════════════════════════════════════
//    Desktop horizontal scroll (≥ 1024px)
// ══════════════════════════════════════════════════════════════════ */
// const DesktopScroll = () => {
//     const targetRef = useRef(null);
//     const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);
//     const [vh, setVh] = useState(typeof window !== 'undefined' ? window.innerHeight : 900);

//     const LEFT_PAD = getLeftPad(vw);
//     const RIGHT_PAD = getRightPad(vw);
//     const trackWidth = LEFT_PAD + N * CARD_W + (N - 1) * CARD_GAP + RIGHT_PAD;
//     const scrollDistance = Math.max(0, trackWidth - vw);
//     const sectionHeight = vh + scrollDistance;

//     useEffect(() => {
//         const onResize = () => {
//             setVw(window.innerWidth);
//             setVh(window.innerHeight);
//         };
//         window.addEventListener('resize', onResize, { passive: true });
//         return () => window.removeEventListener('resize', onResize);
//     }, []);

//     const { scrollYProgress } = useScroll({
//         target: targetRef,
//         offset: ['start start', 'end end'],
//     });

//     const rawX = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
//     const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.6 });
//     const barWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

//     return (
//         <section ref={targetRef} className="relative bg-[#F8FAFC] w-full" style={{ height: `${sectionHeight}px` }}>
//             <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
//                 {/* ── Heading — left edge aligned to LEFT_PAD ───── */}
//                 <div
//                     className="shrink-0 pt-14 pb-8 flex items-end justify-between gap-4"
//                     style={{ paddingLeft: `${LEFT_PAD}px`, paddingRight: `${LEFT_PAD}px` }}
//                 >
//                     <div>
//                         <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9CA3AF] mb-3 block">
//                             Why Choose Us
//                         </span>
//                         <AnimatedHeading className="text-[2.5rem] xl:text-[4rem] font-medium text-[#111827] tracking-tight leading-[1.1]">
//                             <AnimatedText text="Expertise and dedication" className="block" />
//                             <AnimatedText text="to exceed expectations" className="block text-[#9CA3AF] font-light italic font-serif" />
//                         </AnimatedHeading>
//                     </div>
//                     <p className="text-[14px] text-[#6B7280] font-light leading-relaxed max-w-[280px] pb-1 shrink-0">
//                         Discovery to delivery, we follow a proven framework that ensures clarity, precision, and growth.
//                     </p>
//                 </div>

//                 {/* ── Scrolling track ───────────────────────────── */}
//                 <div className="flex-1 flex flex-col justify-center overflow-hidden">
//                     <motion.div style={{ x, width: `${trackWidth}px` }} className="flex flex-col">
//                         {/* ROW 1 — Images */}
//                         <div
//                             className="flex items-end"
//                             style={{
//                                 gap: `${CARD_GAP}px`,
//                                 paddingLeft: `${LEFT_PAD}px`,
//                                 paddingRight: `${RIGHT_PAD}px`,
//                             }}
//                         >
//                             {items.map((item, i) => (
//                                 <div
//                                     key={`img-${i}`}
//                                     className="shrink-0 overflow-hidden rounded-2xl"
//                                     style={{
//                                         width: `${CARD_W}px`,
//                                         height: i % 2 === 0 ? '200px' : '150px',
//                                     }}
//                                 >
//                                     <img
//                                         src={item.image}
//                                         alt={item.title}
//                                         loading="lazy"
//                                         className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-[1.02] hover:scale-100"
//                                         width={600}
//                                         height={400}
//                                     />
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Progress bar */}
//                         <div
//                             className="relative h-[6px] bg-black/[0.07] my-8 rounded-full"
//                             style={{
//                                 marginLeft: `${LEFT_PAD}px`,
//                                 marginRight: `${RIGHT_PAD}px`,
//                             }}
//                         >
//                             {items.map((_, i) => (
//                                 <div
//                                     key={i}
//                                     className="absolute top-1/2 w-[7px] h-[7px] rounded-full bg-[#D1D5DB] border-[1.5px] border-white z-10"
//                                     style={{
//                                         left: `${(i / (N - 1)) * 100}%`,
//                                         transform: 'translate(-50%, -50%)',
//                                     }}
//                                 />
//                             ))}
//                             <motion.div className="absolute left-0 top-0 h-full bg-[#1E5AA5] rounded-full" style={{ width: barWidth }} />
//                         </div>

//                         {/* ROW 2 — Text */}
//                         <div
//                             className="flex items-start"
//                             style={{
//                                 gap: `${CARD_GAP}px`,
//                                 paddingLeft: `${LEFT_PAD}px`,
//                                 paddingRight: `${RIGHT_PAD}px`,
//                             }}
//                         >
//                             {items.map((item, i) => {
//                                 const Icon = item.icon;
//                                 return (
//                                     <div key={`text-${i}`} className="shrink-0" style={{ width: `${CARD_W}px` }}>
//                                         <span className="text-[11px] font-semibold text-[#9CA3AF] tabular-nums block mb-2">
//                                             {item.index}
//                                         </span>
//                                         <h3 className="text-[19px] font-semibold text-[#111827] tracking-tight leading-snug mb-2">
//                                             {item.title}
//                                         </h3>
//                                         <p className="text-[13.5px] text-[#6B7280] font-light leading-[1.7] mb-4">{item.description}</p>
//                                         <ul className="flex flex-col gap-2">
//                                             {item.bullets.map((b) => (
//                                                 <li key={b} className="flex items-center gap-2 text-[12.5px] font-medium text-[#374151]">
//                                                     <CheckCircle2 className="w-3.5 h-3.5 text-[#1E5AA5] shrink-0" strokeWidth={2} />
//                                                     {b}
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// /* ══════════════════════════════════════════════════════════════════
//    Main export — switches between mobile stack and desktop scroll
// ══════════════════════════════════════════════════════════════════ */
// const WhyChooseUs = () => {
//     const [isDesktop, setIsDesktop] = useState(() => {
//         if (typeof window === 'undefined') return true;
//         return window.matchMedia('(min-width: 1024px)').matches;
//     });

//     useEffect(() => {
//         if (typeof window === 'undefined') return;
//         const mq = window.matchMedia('(min-width: 1024px)');
//         const handler = (e) => setIsDesktop(e.matches);
//         mq.addEventListener('change', handler);
//         return () => mq.removeEventListener('change', handler);
//     }, []);

//     if (!isDesktop) {
//         return (
//             <section className="bg-[#F8FAFC] py-20 px-6">
//                 {/* Heading */}
//                 <div className="mb-10">
//                         <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6B7280] mb-3 block">Why Choose Us</span>
//                     <h2 className="text-[2rem] font-medium text-[#111827] tracking-tight leading-[1.1] mb-4">
//                         Expertise and dedication{' '}
//                         <span className="block text-[#6B7280] font-light italic font-serif">to exceed expectations</span>
//                     </h2>
//                     <p className="text-[14px] text-[#6B7280] font-light leading-relaxed max-w-[340px]">
//                         Discovery to delivery, we follow a proven framework that ensures clarity, precision, and growth.
//                     </p>
//                 </div>

//                 {/* Cards — 2 column on tablet, 1 on mobile */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                     {items.map((item) => (
//                         <MobileCard key={item.index} item={item} />
//                     ))}
//                 </div>
//             </section>
//         );
//     }

//     return <DesktopScroll />;
// };

// export default WhyChooseUs;

// import { useRef, useEffect, useState } from 'react';
// import { Lightbulb, Award, Clock, PenTool, CheckCircle2 } from 'lucide-react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

// import img1 from '../../../assets/images/home-service-1.webp';
// import img2 from '../../../assets/images/home-service-2.webp';
// import img3 from '../../../assets/images/home-service-3.webp';
// import img4 from '../../../assets/images/home-service-4.webp';
// import img5 from '../../../assets/images/home-service-5.webp';
// import img6 from '../../../assets/images/home-service-6.webp';

// /* ── Layout constants ───────────────────────────────────────────── */
// const CARD_W = 360; // px — slightly wider cards
// const CARD_GAP = 80; // px — more breathing room between columns
// const N = 6;

// /* ── Use viewport-relative left padding so heading + cards align ── */
// const getLeftPad = (vw) => Math.max(48, Math.round(vw * 0.06)); // 6vw, min 48px
// const getRightPad = (vw) => Math.max(120, Math.round(vw * 0.1)); // 10vw end buffer

// const items = [
//     {
//         index: '01',
//         icon: Lightbulb,
//         title: 'Best-in-Class Solutions',
//         description:
//             'We guarantee the lowest industry rates without compromising quality, delivering enterprise-grade solutions that are cost-effective and built to scale.',
//         bullets: ['40% avg. cost reduction', 'Enterprise-grade quality', 'Scalable architecture', 'Cost-effective delivery'],
//         image: img1,
//     },
//     {
//         index: '02',
//         icon: Award,
//         title: 'Deep Domain Experience',
//         description:
//             'Our certified specialists bring 10+ years of cross-industry experience, pairing technical depth with domain knowledge to solve your most complex IT challenges.',
//         bullets: ['10+ years in the field', 'Certified specialists', 'Cross-industry depth', 'Complex IT solutions'],
//         image: img2,
//     },
//     {
//         index: '03',
//         icon: Clock,
//         title: '24 / 7 Rapid Response',
//         description:
//             'Every client is assigned a dedicated service executive available around the clock. We treat your uptime as our uptime — because downtime is never acceptable.',
//         bullets: ['< 2 hr average response', 'Dedicated executive', 'Round-the-clock support', 'Zero downtime goal'],
//         image: img3,
//     },
//     {
//         index: '04',
//         icon: PenTool,
//         title: 'Tailored Innovation',
//         description:
//             'We craft bespoke IT solutions aligned to your exact business context, helping you move fast on bold ideas while reducing implementation risk at every phase.',
//         bullets: ['500+ custom solutions', 'Bespoke architecture', 'Risk-reduced delivery', 'Bold idea execution'],
//         image: img4,
//     },
//     {
//         index: '05',
//         icon: Award,
//         title: 'Certified Delivery Standards',
//         description:
//             'We follow clear delivery governance—security reviews, documentation, and quality checks—so projects ship reliably and are easy to operate, hand over, and scale.',
//         bullets: ['Quality checkpoints', 'Security-first delivery', 'Clear documentation', 'Operational readiness'],
//         image: img5,
//     },
//     {
//         index: '06',
//         icon: Clock,
//         title: 'Proactive Monitoring & Care',
//         description:
//             'Beyond support, we proactively monitor and improve your systems—catching issues early, reducing incidents, and keeping performance steady as demand grows.',
//         bullets: ['Proactive monitoring', 'Preventive maintenance', 'Performance tuning', 'Incident reduction'],
//         image: img6,
//     },
// ];

// /* ══════════════════════════════════════════════════════════════════
//    Mobile card — vertical stack fallback (< 1024px)
// ══════════════════════════════════════════════════════════════════ */
// const MobileCard = ({ item }) => (
//     <div className="flex flex-col gap-3">
//         <div className="overflow-hidden rounded-xl h-[200px]">
//             <img
//                 src={item.image}
//                 alt={item.title}
//                 loading="lazy"
//                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
//                 width={600}
//                 height={400}
//             />
//         </div>
//         <span className="text-[11px] font-semibold text-[#6B7280] tabular-nums">{item.index}</span>
//         <h3 className="text-[17px] font-semibold text-[#111827] tracking-tight leading-snug">{item.title}</h3>
//         <p className="text-[13px] text-[#6B7280] font-light leading-relaxed">{item.description}</p>
//         <ul className="flex flex-col gap-1.5">
//             {item.bullets.map((b) => (
//                 <li key={b} className="flex items-center gap-2 text-[12px] font-medium text-[#374151]">
//                     <CheckCircle2 className="w-3.5 h-3.5 text-[#1E5AA5] shrink-0" strokeWidth={2} />
//                     {b}
//                 </li>
//             ))}
//         </ul>
//     </div>
// );

// /* ══════════════════════════════════════════════════════════════════
//    Desktop horizontal scroll (≥ 1024px)
// ══════════════════════════════════════════════════════════════════ */
// const DesktopScroll = () => {
//     const targetRef = useRef(null);
//     const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);
//     const [vh, setVh] = useState(typeof window !== 'undefined' ? window.innerHeight : 900);

//     const LEFT_PAD = getLeftPad(vw);
//     const RIGHT_PAD = getRightPad(vw);
//     const trackWidth = LEFT_PAD + N * CARD_W + (N - 1) * CARD_GAP + RIGHT_PAD;
//     const scrollDistance = Math.max(0, trackWidth - vw);
//     const sectionHeight = vh + scrollDistance;

//     useEffect(() => {
//         const onResize = () => {
//             setVw(window.innerWidth);
//             setVh(window.innerHeight);
//         };
//         window.addEventListener('resize', onResize, { passive: true });
//         return () => window.removeEventListener('resize', onResize);
//     }, []);

//     const { scrollYProgress } = useScroll({
//         target: targetRef,
//         offset: ['start start', 'end end'],
//     });

//     const rawX = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
//     const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.6 });
//     const barWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

//     return (
//         <section ref={targetRef} className="relative bg-[#F8FAFC] w-full" style={{ height: `${sectionHeight}px` }}>
//             <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
//                 {/* ── Heading — left edge aligned to LEFT_PAD ───── */}
//                 <div
//                     className="shrink-0 pt-14 pb-8 flex items-end justify-between gap-4"
//                     style={{ paddingLeft: `${LEFT_PAD}px`, paddingRight: `${LEFT_PAD}px` }}
//                 >
//                     <div>
//                         <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9CA3AF] mb-3 block">
//                             Why Choose Us
//                         </span>
//                         <AnimatedHeading className="text-[2.5rem] xl:text-[4rem] font-medium text-[#111827] tracking-tight leading-[1.1]">
//                             <AnimatedText text="Expertise and dedication" className="block" />
//                             <AnimatedText text="to exceed expectations" className="block text-[#9CA3AF] font-light italic font-serif" />
//                         </AnimatedHeading>
//                     </div>
//                     <p className="text-[14px] text-[#6B7280] font-light leading-relaxed max-w-[280px] pb-1 shrink-0">
//                         Discovery to delivery, we follow a proven framework that ensures clarity, precision, and growth.
//                     </p>
//                 </div>

//                 {/* ── Scrolling track ───────────────────────────── */}
//                 <div className="flex-1 flex flex-col justify-center overflow-hidden">
//                     <motion.div style={{ x, width: `${trackWidth}px` }} className="flex flex-col">
//                         {/* ROW 1 — Images */}
//                         <div
//                             className="flex items-end"
//                             style={{
//                                 gap: `${CARD_GAP}px`,
//                                 paddingLeft: `${LEFT_PAD}px`,
//                                 paddingRight: `${RIGHT_PAD}px`,
//                             }}
//                         >
//                             {items.map((item, i) => (
//                                 <div
//                                     key={`img-${i}`}
//                                     className="shrink-0 overflow-hidden rounded-2xl"
//                                     style={{
//                                         width: `${CARD_W}px`,
//                                         height: i % 2 === 0 ? '200px' : '150px',
//                                     }}
//                                 >
//                                     <img
//                                         src={item.image}
//                                         alt={item.title}
//                                         loading="lazy"
//                                         className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-[1.02] hover:scale-100"
//                                         width={600}
//                                         height={400}
//                                     />
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Progress bar */}
//                         <div
//                             className="relative h-[6px] bg-black/[0.07] my-8 rounded-full"
//                             style={{
//                                 marginLeft: `${LEFT_PAD}px`,
//                                 marginRight: `${RIGHT_PAD}px`,
//                             }}
//                         >
//                             {items.map((_, i) => (
//                                 <div
//                                     key={i}
//                                     className="absolute top-1/2 w-[7px] h-[7px] rounded-full bg-[#D1D5DB] border-[1.5px] border-white z-10"
//                                     style={{
//                                         left: `${(i / (N - 1)) * 100}%`,
//                                         transform: 'translate(-50%, -50%)',
//                                     }}
//                                 />
//                             ))}
//                             <motion.div className="absolute left-0 top-0 h-full bg-[#1E5AA5] rounded-full" style={{ width: barWidth }} />
//                         </div>

//                         {/* ROW 2 — Text */}
//                         <div
//                             className="flex items-start"
//                             style={{
//                                 gap: `${CARD_GAP}px`,
//                                 paddingLeft: `${LEFT_PAD}px`,
//                                 paddingRight: `${RIGHT_PAD}px`,
//                             }}
//                         >
//                             {items.map((item, i) => {
//                                 const Icon = item.icon;
//                                 return (
//                                     <div key={`text-${i}`} className="shrink-0" style={{ width: `${CARD_W}px` }}>
//                                         <span className="text-[11px] font-semibold text-[#9CA3AF] tabular-nums block mb-2">
//                                             {item.index}
//                                         </span>
//                                         <h3 className="text-[19px] font-semibold text-[#111827] tracking-tight leading-snug mb-2">
//                                             {item.title}
//                                         </h3>
//                                         <p className="text-[13.5px] text-[#6B7280] font-light leading-[1.7] mb-4">{item.description}</p>
//                                         <ul className="flex flex-col gap-2">
//                                             {item.bullets.map((b) => (
//                                                 <li key={b} className="flex items-center gap-2 text-[12.5px] font-medium text-[#374151]">
//                                                     <CheckCircle2 className="w-3.5 h-3.5 text-[#1E5AA5] shrink-0" strokeWidth={2} />
//                                                     {b}
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// /* ══════════════════════════════════════════════════════════════════
//    Main export — switches between mobile stack and desktop scroll
// ══════════════════════════════════════════════════════════════════ */
// const WhyChooseUs = () => {
//     const [isDesktop, setIsDesktop] = useState(() => {
//         if (typeof window === 'undefined') return true;
//         return window.matchMedia('(min-width: 1024px)').matches;
//     });

//     useEffect(() => {
//         if (typeof window === 'undefined') return;
//         const mq = window.matchMedia('(min-width: 1024px)');
//         const handler = (e) => setIsDesktop(e.matches);
//         mq.addEventListener('change', handler);
//         return () => mq.removeEventListener('change', handler);
//     }, []);

//     if (!isDesktop) {
//         return (
//             <section className="bg-[#F8FAFC] py-20 px-6">
//                 {/* Heading */}
//                 <div className="mb-10">
//                         <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6B7280] mb-3 block">Why Choose Us</span>
//                     <h2 className="text-[2rem] font-medium text-[#111827] tracking-tight leading-[1.1] mb-4">
//                         Expertise and dedication{' '}
//                         <span className="block text-[#6B7280] font-light italic font-serif">to exceed expectations</span>
//                     </h2>
//                     <p className="text-[14px] text-[#6B7280] font-light leading-relaxed max-w-[340px]">
//                         Discovery to delivery, we follow a proven framework that ensures clarity, precision, and growth.
//                     </p>
//                 </div>

//                 {/* Cards — 2 column on tablet, 1 on mobile */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                     {items.map((item) => (
//                         <MobileCard key={item.index} item={item} />
//                     ))}
//                 </div>
//             </section>
//         );
//     }

//     return <DesktopScroll />;
// };

// export default WhyChooseUs;

import { useRef, useEffect, useState } from 'react';
import { Lightbulb, Award, Clock, PenTool, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

import img1 from '../../../assets/images/home-service-1.webp';
import img2 from '../../../assets/images/home-service-2.webp';
import img3 from '../../../assets/images/home-service-3.webp';
import img4 from '../../../assets/images/home-service-4.webp';
import img5 from '../../../assets/images/home-service-5.webp';
import img6 from '../../../assets/images/home-service-6.webp';

const items = [
    {
        index: '01',
        icon: Lightbulb,
        title: 'Best-in-Class Solutions',
        description:
            'We guarantee the lowest industry rates without compromising quality, delivering enterprise-grade solutions that are cost-effective and built to scale.',
        bullets: ['40% avg. cost reduction', 'Enterprise-grade quality', 'Scalable architecture', 'Cost-effective delivery'],
        image: img1,
    },
    {
        index: '02',
        icon: Award,
        title: 'Deep Domain Experience',
        description:
            'Our certified specialists bring 10+ years of cross-industry experience, pairing technical depth with domain knowledge to solve your most complex IT challenges.',
        bullets: ['10+ years in the field', 'Certified specialists', 'Cross-industry depth', 'Complex IT solutions'],
        image: img2,
    },
    {
        index: '03',
        icon: Clock,
        title: '24 / 7 Rapid Response',
        description:
            'Every client is assigned a dedicated service executive available around the clock. We treat your uptime as our uptime — because downtime is never acceptable.',
        bullets: ['< 2 hr average response', 'Dedicated executive', 'Round-the-clock support', 'Zero downtime goal'],
        image: img3,
    },
    {
        index: '04',
        icon: PenTool,
        title: 'Tailored Innovation',
        description:
            'We craft bespoke IT solutions aligned to your exact business context, helping you move fast on bold ideas while reducing implementation risk at every phase.',
        bullets: ['500+ custom solutions', 'Bespoke architecture', 'Risk-reduced delivery', 'Bold idea execution'],
        image: img4,
    },
    {
        index: '05',
        icon: Award,
        title: 'Certified Delivery Standards',
        description:
            'We follow clear delivery governance—security reviews, documentation, and quality checks—so projects ship reliably and are easy to operate, hand over, and scale.',
        bullets: ['Quality checkpoints', 'Security-first delivery', 'Clear documentation', 'Operational readiness'],
        image: img5,
    },
    {
        index: '06',
        icon: Clock,
        title: 'Proactive Monitoring & Care',
        description:
            'Beyond support, we proactively monitor and improve your systems—catching issues early, reducing incidents, and keeping performance steady as demand grows.',
        bullets: ['Proactive monitoring', 'Preventive maintenance', 'Performance tuning', 'Incident reduction'],
        image: img6,
    },
];

const N = items.length;
/* Each step gets this much vertical scroll distance */
const STEP_HEIGHT = 100; // vh units — one full viewport per step
const TOTAL_HEIGHT = N * STEP_HEIGHT;

/* ── Mobile card ────────────────────────────────────────────────── */
const MobileCard = ({ item }) => (
    <div className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-3xl h-[220px] shadow-[0_20px_55px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/5 bg-white">
            <img src={item.image} alt={item.title} loading="eager" className="w-full h-full object-cover" width={600} height={400} />
        </div>
        <span className="text-[0.875rem] font-mono text-[#888888] tabular-nums">{item.index}</span>
        <h3 className="text-[1.25rem] font-semibold text-[#070707] tracking-[-0.02em] leading-snug">{item.title}</h3>
        <p className="text-[1rem] text-[#888888] font-light leading-[1.8]">{item.description}</p>
        <ul className="flex flex-col gap-2">
            {item.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-[0.875rem] font-medium text-[#3D3D3D]">
                    <CheckCircle2 className="w-4 h-4 text-[#2A27AC] shrink-0" strokeWidth={2} />
                    {b}
                </li>
            ))}
        </ul>
    </div>
);

/* ── Desktop vertical sticky scroll ────────────────────────────── */
const DesktopScroll = () => {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    /* Convert scroll progress to active step index */
    useEffect(() => {
        const unsub = scrollYProgress.on('change', (v) => {
            const raw = v * N;
            const idx = Math.min(Math.floor(raw), N - 1);
            setActiveIndex(idx);
        });
        return unsub;
    }, [scrollYProgress]);

    /* Progress bar fill */
    const barHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const smoothBar = useSpring(barHeight, { stiffness: 80, damping: 20 });

    const currentItem = items[activeIndex];
    const panelSize = 'clamp(300px, 36vw, 500px)';

    return (
        <section ref={sectionRef} className="relative bg-[#F6F6F6] w-full" style={{ height: `${TOTAL_HEIGHT}vh` }}>
            {/* ── Sticky viewport ─────────────────────────────────── */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col bg-[#F6F6F6]">
                {/* ── Section header ──────────────────────────────── */}
                <div className="shrink-0 pt-10 pb-6 px-[6vw] flex items-end justify-between gap-8 border-b border-[#E7E7E7]">
                    <div className="flex items-center gap-4 min-w-0">
                        <div className="h-px w-8 bg-[#2A27AC]/50 shrink-0" />
                        <div>
                            <span className="text-[0.875rem] font-semibold uppercase tracking-[0.22em] text-[#2A27AC] block mb-1">
                                Why Choose Us
                            </span>
                            <h2 className="text-[1.75rem] md:text-[2.25rem] xl:text-[2.75rem] font-medium text-[#070707] tracking-[-0.025em] leading-[1.08]">
                                Expertise and dedication <span className="text-[#00000066]">to exceed expectations</span>
                            </h2>
                        </div>
                    </div>
                    <p className="text-[1rem] text-[#888888] font-light leading-[1.8] max-w-[320px] shrink-0 hidden xl:block pb-1">
                        Discovery to delivery — a proven framework that ensures clarity, precision, and growth.
                    </p>
                </div>

                {/* ── Main content area ───────────────────────────── */}
                <div className="flex-1 flex items-center px-[6vw] gap-12 xl:gap-16 min-h-0 py-8">
                    {/* LEFT — sticky image with crossfade */}
                    <div
                        className="relative rounded-3xl overflow-hidden shrink-0 shadow-[0_24px_70px_-20px_rgba(0,0,0,0.22)] ring-1 ring-black/[0.06] bg-white"
                        style={{ width: panelSize, height: panelSize }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeIndex}
                                src={currentItem.image}
                                alt={currentItem.title}
                                loading="eager"
                                initial={{ opacity: 0, scale: 1.04 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute inset-0 w-full h-full object-cover"
                                width={960}
                                height={840}
                            />
                        </AnimatePresence>

                        {/* Step counter overlay */}
                        <div className="absolute bottom-4 left-4 bg-black/55 backdrop-blur-md text-white text-[0.875rem] font-semibold px-3 py-1.5 rounded-full tabular-nums">
                            {String(activeIndex + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
                        </div>
                    </div>

                    {/* RIGHT — vertical timeline */}
                    <div className="flex gap-6 xl:gap-8 overflow-hidden min-w-0 flex-1" style={{ height: panelSize }}>
                        {/* Vertical progress line + dots */}
                        <div className="relative flex flex-col items-center shrink-0 w-[16px]">
                            {/* Track */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-[#E7E7E7] rounded-full" />
                            {/* Filled bar */}
                            <motion.div
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] bg-[#2A27AC] origin-top rounded-full"
                                style={{ height: smoothBar }}
                            />
                            {/* Dots */}
                            {items.map((_, i) => (
                                <div
                                    key={items[i].index}
                                    className="absolute left-1/2 -translate-x-1/2 z-10"
                                    style={{ top: `${(i / (N - 1)) * 100}%`, transform: 'translate(-50%, -50%)' }}
                                >
                                    <motion.div
                                        animate={() => {
                                            const isDotActive = i === activeIndex;
                                            const isDotPast = i < activeIndex;
                                            const dotSize = isDotActive ? 12 : 8;
                                            const dotBg = i <= activeIndex ? '#2A27AC' : '#E7E7E7';
                                            let dotBorder = '#D1D1D1';
                                            if (isDotActive || isDotPast) dotBorder = '#2A27AC';
                                            return {
                                                width: dotSize,
                                                height: dotSize,
                                                backgroundColor: dotBg,
                                                borderColor: dotBorder,
                                            };
                                        }}
                                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                        className="rounded-full border-2 border-white shadow-sm"
                                        style={{ backgroundColor: '#E7E7E7' }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Steps list */}
                        <div className="flex flex-col justify-between flex-1 h-full py-1 overflow-hidden min-w-0">
                            {items.map((item, i) => {
                                const Icon = item.icon;
                                const isActive = i === activeIndex;
                                const isPast = i < activeIndex;
                                let stepOpacity = 0.28;
                                if (isActive) stepOpacity = 1;
                                else if (isPast) stepOpacity = 0.42;

                                let iconTone = 'bg-white border-[#E7E7E7] text-[#888888]';
                                if (isActive) iconTone = 'bg-[#2A27AC]/10 border-[#2A27AC]/20 text-[#2A27AC]';
                                else if (isPast) iconTone = 'bg-[#2A27AC]/5 border-[#2A27AC]/10 text-[#2A27AC]/60';

                                return (
                                    <motion.div
                                        key={item.index}
                                        animate={{ opacity: stepOpacity }}
                                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                        className="flex flex-col gap-0.5 min-w-0"
                                    >
                                        <div className="flex items-center gap-3 min-w-0">
                                            <span
                                                className={`grid place-items-center w-8 h-8 rounded-full border transition-colors duration-300 shrink-0 ${iconTone}`}
                                            >
                                                <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                                            </span>
                                            <motion.h3
                                                animate={{
                                                    fontSize: isActive ? '1.2rem' : '0.975rem',
                                                    color: isActive ? '#070707' : '#888888',
                                                    fontWeight: isActive ? 600 : 500,
                                                    lineHeight: 1.25,
                                                }}
                                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                                className="tracking-[-0.018em] min-w-0"
                                            >
                                                {item.title}
                                            </motion.h3>
                                        </div>

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                                    className="overflow-hidden pl-11"
                                                >
                                                    <p className="text-[1rem] text-[#888888] font-light leading-[1.8] mt-2 mb-3 pr-4">
                                                        {item.description}
                                                    </p>
                                                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                                                        {item.bullets.map((b) => (
                                                            <li
                                                                key={b}
                                                                className="flex items-center gap-2 text-[0.875rem] font-medium text-[#3D3D3D] min-w-0"
                                                            >
                                                                <CheckCircle2
                                                                    className="w-3.5 h-3.5 text-[#2A27AC] shrink-0"
                                                                    strokeWidth={2}
                                                                />
                                                                <span>{b}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ── Main export ────────────────────────────────────────────────── */
const WhyChooseUs = () => {
    const [isDesktop, setIsDesktop] = useState(() => {
        if (globalThis.window === undefined) return true;
        return globalThis.window.matchMedia('(min-width: 1024px)').matches;
    });

    useEffect(() => {
        if (globalThis.window === undefined) return;
        const mq = globalThis.window.matchMedia('(min-width: 1024px)');
        const handler = (e) => setIsDesktop(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    if (!isDesktop) {
        return (
            <section className="bg-[#F6F6F6] py-20 px-6">
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-7 bg-[#2A27AC]/50" />
                        <span className="text-[0.875rem] font-semibold uppercase tracking-[0.22em] text-[#2A27AC]">Why Choose Us</span>
                    </div>
                    <h2 className="text-[2rem] font-medium text-[#070707] tracking-[-0.02em] leading-[1.08] mb-4">
                        Expertise and dedication <span className="block text-[#00000066]">to exceed expectations</span>
                    </h2>
                    <p className="text-[1rem] text-[#888888] font-light leading-[1.8] max-w-[340px]">
                        Discovery to delivery, we follow a proven framework that ensures clarity, precision, and growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {items.map((item) => (
                        <MobileCard key={item.index} item={item} />
                    ))}
                </div>
            </section>
        );
    }

    return <DesktopScroll />;
};

export default WhyChooseUs;
