// import { motion } from 'framer-motion';
// import { Heart, Zap, Award, Headset, ArrowUpRight } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

// const reasons = [
//   {
//     Icon: Heart,
//     title: 'Customer-Centric',
//     description:
//       "We prioritise our clients' needs and work tirelessly to ensure their satisfaction at every stage.",
//   },
//   {
//     Icon: Zap,
//     title: 'Innovative Solutions',
//     description:
//       'We stay ahead of the technological curve, providing the latest and most effective IT solutions.',
//   },
//   {
//     Icon: Award,
//     title: 'Proven Track Record',
//     description:
//       'A history of successful projects and satisfied clients has established us as a trusted IT partner.',
//   },
//   {
//     Icon: Headset,
//     title: '24 / 7 Support',
//     description:
//       'Our dedicated support team is always on standby to ensure your IT systems run without interruption.',
//   },
// ];

// const gridVariants = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.1 } },
// };

// const gridItem = {
//   hidden: (i = 0) => {
//     const offsets = [
//       { x: -35, y: -35 }, // top-left
//       { x: 35, y: -35 },  // top-right
//       { x: -35, y: 35 },  // bottom-left
//       { x: 35, y: 35 },   // bottom-right
//     ];

//     const { x, y } = offsets[i] || { x: 0, y: 0 };

//     return {
//       opacity: 0,
//       x,
//       y,
//       scale: 0.96,
//     };
//   },
//   show: {
//     opacity: 1,
//     x: 0,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.65,
//       ease: 'easeOut',
//     },
//   },
// };

// const WhyChooseUs = () => {
//   return (
//     <section className="py-16 md:py-24 bg-[#F5F5F5] relative overflow-hidden">

//       <div className="container mx-auto px-4 lg:px-12 max-w-6xl relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 xl:gap-20 items-start">

//           {/* Left: sticky heading block */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: '-80px' }}
//             transition={{ duration: 0.65, ease: 'easeOut' }}
//             className="lg:sticky lg:top-32"
//           >
//             <span className="text-xs font-sans tracking-[0.22em] text-[#6B6B6B] font-medium uppercase mb-5 block">
//               Why Choose Us
//             </span>

//             <AnimatedHeading className="text-[2.5rem] md:text-[4rem] font-medium text-[#111827] leading-tight tracking-tight mb-6">
//               <AnimatedText text="Partnering" className="block" />
//               <AnimatedText text="for " />
//               <AnimatedText text="Success" className="text-[#1B1D1E]/65" />
//             </AnimatedHeading>

//             <p className="text-[16px] text-[#6B6B6B] font-light leading-relaxed mb-8 max-w-sm">
//               We combine deep technical expertise with a genuinely people-first approach —
//               so your goals always drive our work.
//             </p>

//             <Link
//               to="/services"
//               className="group inline-flex items-center gap-3 text-[13px] font-semibold text-[#1B1D1E] tracking-wide uppercase"
//             >
//               <span className="transition-all duration-300 group-hover:underline underline-offset-4">
//                 Explore Our Services
//               </span>
//               <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#1E5AA5] group-hover:text-white group-hover:border-[#1E5AA5]">
//                 <ArrowUpRight className="w-3.5 h-3.5" />
//               </div>
//             </Link>
//           </motion.div>

//           {/* Right: card grid */}
//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 gap-5"
//             variants={gridVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: '-60px' }}
//           >
//             {reasons.map(({ Icon, title, description }, index) => (
//               <motion.div
//                 key={title}
//                 custom={index}
//                 variants={gridItem}
//                 className="
//                 group p-7 rounded-[20px] bg-white border border-black/[0.06]
//                 hover:bg-[#132A4D] hover:border-[#132A4D]
//                 transition-all duration-500 ease-out
//                 hover:-translate-y-1.5 hover:scale-[1.03]
//                 cursor-default flex flex-col
//                 "
//               >

//                 {/* Icon */}
//                 <div
//                   className="
//                   w-11 h-11 rounded-xl bg-[#EFF6FF] text-[#1E5AA5]
//                   flex items-center justify-center mb-6 shrink-0
//                   transition-all duration-500
//                   group-hover:bg-white/10 group-hover:text-white
//                   group-hover:scale-110
//                   "
//                 >
//                   <Icon className="w-5 h-5" strokeWidth={1.5} />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-[1.75rem] font-medium text-[#111827] mb-3 leading-snug transition-colors duration-400 group-hover:text-white">
//                   {title}
//                 </h3>

//                 {/* Animated rule */}
//                 <div className="w-6 h-px bg-black/10 mb-4 scale-x-50 origin-left transition-all duration-500 group-hover:bg-white/40 group-hover:scale-x-100" />

//                 {/* Description */}
//                 <p className="text-[14px] text-[#6B6B6B] leading-relaxed font-light flex-grow transition-colors duration-400 group-hover:text-white/80">
//                   {description}
//                 </p>

//               </motion.div>
//             ))}
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import { useState } from 'react';
import { m } from 'framer-motion';
import { Users, Layers, GraduationCap, BarChart2, HeartPulse, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

const reasons = [
    {
        Icon: Users,
        index: '01',
        title: 'Expert IT Staffing',
        description:
            'Unparalleled network of skilled IT professionals and tailored staffing solutions that match the right talent to your exact needs — fast.',
    },
    {
        Icon: Layers,
        index: '02',
        title: 'Full-Spectrum IT Services',
        description:
            'High-quality IT consulting, software development, and cloud infrastructure — all under one roof for seamless, end-to-end delivery.',
    },
    {
        Icon: GraduationCap,
        index: '03',
        title: 'Talent & Career Growth',
        description:
            'IT staffing, bootcamps, and career acceleration programmes designed to fast-track fresh graduates into industry-ready professionals.',
    },
    {
        Icon: BarChart2,
        index: '04',
        title: 'Cross-Industry Expertise',
        description:
            'Proven track record across healthcare, finance, e-commerce, and telecom — delivering measurable results where it matters most.',
    },
    {
        Icon: HeartPulse,
        index: '05',
        title: 'BPO & Revenue Cycle',
        description:
            'End-to-end BPO, technical support, and healthcare revenue cycle optimization that keeps your operations efficient and compliant.',
    },
];

const EASE = [0.25, 0.1, 0.25, 1];
const DUR = 0.65;

const rowVariants = {
    rest: {
        backgroundColor: 'rgba(255,255,255,0)',
        borderColor: 'rgba(0,0,0,0)',
        boxShadow: '0 0 0 rgba(0,0,0,0)',
        scale: 1,
        transition: { duration: DUR, ease: EASE },
    },
    hover: {
        backgroundColor: 'rgba(255,255,255,0.92)',
        borderColor: 'rgba(42,39,172,0.22)',
        boxShadow: '0 18px 55px rgba(30,90,165,0.16)',
        scale: 1.012,
        transition: { duration: DUR, ease: EASE },
    },
};

const iconVariants = {
    rest: { backgroundColor: '#EDF3FF', color: '#2A27AC', scale: 1, transition: { duration: DUR, ease: EASE } },
    hover: { backgroundColor: '#EDF3FF', color: '#2A27AC', scale: 1.08, transition: { duration: DUR, ease: EASE } },
};

const indexVariants = {
    rest: { color: '#D1D1D1', transition: { duration: DUR, ease: EASE } },
    hover: { color: '#9CA3AF', transition: { duration: DUR, ease: EASE } },
};

const titleVariants = {
    rest: { color: '#070707', transition: { duration: DUR, ease: EASE } },
    hover: { color: '#070707', transition: { duration: DUR, ease: EASE } },
};

const descVariants = {
    rest: { color: '#888888', transition: { duration: DUR, ease: EASE } },
    hover: { color: '#4B5563', transition: { duration: DUR, ease: EASE } },
};

const accentVariants = {
    rest: { scaleY: 0, transition: { duration: DUR, ease: EASE } },
    hover: { scaleY: 1, transition: { duration: DUR, ease: EASE } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
    }),
};

const WhyChooseUs = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="py-20 md:py-28 bg-[#F6F6F6] relative overflow-hidden">
            {/* Decorative rings */}
            <div
                aria-hidden
                className="absolute -right-32 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-black/[0.04] pointer-events-none"
            />
            <div
                aria-hidden
                className="absolute -right-16 top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-black/[0.05] pointer-events-none"
            />

            <div className="container mx-auto px-8 md:px-12 lg:px-16 max-w-[1140px] relative z-10">
                {/* ── Header ── */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16 md:mb-20">
                    <m.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Eyebrow — matches service pages */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-px w-7 bg-[#2A27AC]/50" />
                            <span className="text-[0.875rem] font-semibold tracking-[0.22em] text-[#2A27AC] uppercase">Why Choose Us</span>
                        </div>

                        <AnimatedHeading className="text-[2.8rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em]">
                            <AnimatedText text="Partnering" className="block" />
                            <AnimatedText text="for " />
                            <AnimatedText text="Success" className="text-[#00000066]" />
                        </AnimatedHeading>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                        className="lg:max-w-[400px]"
                    >
                        <p className="text-[1rem] text-[#888888] font-light leading-[1.85] mb-7">
                            Seanora Global is more than a service provider — we're your strategic ally in navigating IT challenges, talent
                            acquisition, and career growth with confidence, clarity, and lasting success.
                        </p>
                        <Link
                            to="/services"
                            className="group inline-flex items-center gap-3 text-[0.875rem] font-semibold text-[#070707] tracking-[0.18em] uppercase"
                        >
                            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#2A27AC] after:transition-all after:duration-300 group-hover:after:w-full">
                                Explore Our Services
                            </span>
                            <div className="w-9 h-9 rounded-full border border-[#00000033] flex items-center justify-center transition-all duration-300 group-hover:bg-[#2A27AC] group-hover:text-white group-hover:border-[#2A27AC] group-hover:scale-105">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </Link>
                    </m.div>
                </div>

                {/* Top rule */}
                <m.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="origin-left h-px bg-[#00000033]"
                />

                {/* ── List rows ── */}
                <div>
                    {reasons.map(({ Icon, index, title, description }, i) => (
                        <m.div
                            key={title}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-40px' }}
                        >
                            <m.div
                                variants={rowVariants}
                                initial="rest"
                                animate={hoveredIndex === i ? 'hover' : 'rest'}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="relative rounded-2xl -mx-3 px-3 cursor-default border border-transparent"
                                style={{ zIndex: hoveredIndex === i ? 10 : 1 }}
                            >
                                {/* Soft brand-tint glow on hover */}
                                <m.div
                                    aria-hidden
                                    initial={false}
                                    animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                                    transition={{ duration: DUR, ease: EASE }}
                                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1E5AA5]/10 via-white/70 to-[#29A8E0]/10 pointer-events-none"
                                />

                                {/* Divider — fades on hover */}
                                <m.div
                                    animate={{ opacity: hoveredIndex === i ? 0 : 1 }}
                                    transition={{ duration: DUR, ease: EASE }}
                                    className="absolute bottom-0 left-3 right-3 h-px bg-[#00000033]"
                                />

                                {/* Left accent bar */}
                                <m.div
                                    variants={accentVariants}
                                    className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full bg-[#2A27AC] origin-top"
                                />

                                <div
                                    className="
                                    grid
                                    grid-cols-[2.5rem_1fr]
                                    md:grid-cols-[3rem_3.5rem_minmax(0,240px)_1fr]
                                    items-center
                                    gap-x-6 md:gap-x-9
                                    py-8 md:py-9
                                    relative z-10
                                "
                                >
                                    {/* Index */}
                                    <span className="text-[0.875rem] font-mono tracking-[0.22em] font-bold uppercase tabular-nums self-start pt-1 md:self-auto md:pt-0">
                                        {index}
                                    </span>

                                    {/* Icon — desktop */}
                                    <m.div
                                        variants={iconVariants}
                                        className="hidden md:flex w-[52px] h-[52px] rounded-xl items-center justify-center shrink-0"
                                    >
                                        <Icon className="w-6 h-6" strokeWidth={1.4} />
                                    </m.div>

                                    {/* Title + mobile icon */}
                                    <div className="flex items-center gap-4 md:gap-0">
                                        <m.div
                                            variants={iconVariants}
                                            className="flex md:hidden w-11 h-11 rounded-xl items-center justify-center shrink-0"
                                        >
                                            <Icon className="w-5 h-5" strokeWidth={1.4} />
                                        </m.div>
                                        <h3 className="text-[1.25rem] md:text-[1.5rem] font-semibold leading-snug tracking-[-0.015em]">
                                            {title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p
                                        className="
                                            col-start-2 col-span-1 md:col-start-auto md:col-span-1
                                            mt-2.5 md:mt-0
                                            text-[1rem] leading-[1.8] font-light
                                        "
                                    >
                                        {description}
                                    </p>
                                </div>
                            </m.div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
