// import { motion } from 'framer-motion';
// import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';
// import Breadcrumb from '../../../components/ui/Breadcrumb';
// import { MonitorSmartphone, GraduationCap, Server, Users, Briefcase, Cloud, CheckCircle2 } from 'lucide-react';

// const highlights = [
//     { icon: MonitorSmartphone, label: 'Mobile & Web Development', tag: 'Design & Dev' },
//     { icon: GraduationCap, label: 'IT Training Programs', tag: 'Training' },
//     { icon: Server, label: 'System Integration', tag: 'Integration' },
//     { icon: Users, label: 'IT Consulting', tag: 'Strategy' },
//     { icon: Briefcase, label: 'Professional Services', tag: 'Delivery' },
//     { icon: Cloud, label: 'Cloud & Security', tag: 'Infrastructure' },
// ];

// const stats = [
//     { value: '6', label: 'Core services' },
//     { value: '1,000+', label: 'Clients served' },
//     { value: '15+', label: 'Countries' },
//     { value: '10+', label: 'Years experience' },
// ];

// const ServicesHero = () => {
//     return (
//         <section className="pt-32 pb-0 md:pt-40 bg-white relative overflow-hidden">

//             <div className="container mx-auto px-4 lg:px-12 max-w-6xl relative z-10">
//                 <Breadcrumb crumbs={[{ label: 'Services' }]} />

//                 {/* ── Two-column grid ── */}
//                 <div className="mt-10 mb-14 md:mb-20 grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-10 xl:gap-16 items-start">
//                     {/* ══════════════════════════════
//               LEFT COLUMN
//           ══════════════════════════════ */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 28 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.85 }}
//                         className="flex flex-col justify-between"
//                     >
//                         {/* Eyebrow */}
//                         <motion.div
//                             initial={{ opacity: 0, x: -14 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.55 }}
//                             className="flex items-center gap-3 mb-8"
//                         >
//                             <div className="w-7 h-px bg-[#1E5AA5]/50" />
//                             <span className="text-[11px] font-sans tracking-[0.26em] text-[#1E5AA5] font-semibold uppercase">
//                                 Our Services
//                             </span>
//                         </motion.div>

//                         {/* Heading — fixed line breaks, "dynamic IT" stays together */}
//                         <AnimatedHeading
//                             as="h1"
//                             className="text-[3rem] md:text-[5rem] font-medium text-[#111827] leading-[1.04] tracking-tight mb-7"
//                         >
//                             <AnimatedText text="Empowering" className="block" />
//                             <AnimatedText text="your business" className="block" />
//                             <span className="block">
//                                 <AnimatedText text="with " className="inline" />
//                                 <AnimatedText text="dynamic IT" className="inline text-[#1B1D1E]/50" />
//                             </span>
//                             <AnimatedText text="solutions." className="block" />
//                         </AnimatedHeading>

//                         {/* Body */}
//                         <motion.p
//                             initial={{ opacity: 0, y: 12 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.65, delay: 0.28 }}
//                             className="text-[16px] text-[#6B6B6B] leading-[1.8] font-light max-w-md mb-10"
//                         >
//                             A diverse range of IT solutions crafted to enhance efficiency, security, and innovation — ensuring your business
//                             thrives in the digital age.
//                         </motion.p>

//                         {/* Stats row */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 12 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.65, delay: 0.42 }}
//                             className="grid grid-cols-4 gap-0 pt-8 border-t border-black/[0.07]"
//                         >
//                             {stats.map((s, i) => (
//                                 <div key={i} className={`pr-6 ${i > 0 ? 'pl-6 border-l border-black/[0.07]' : ''}`}>
//                                     <div className="text-[1.5rem] font-medium text-[#111827] leading-none tracking-tight tabular-nums">
//                                         {s.value}
//                                     </div>
//                                     <div className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#6B6B6B] mt-1.5 leading-tight">
//                                         {s.label}
//                                     </div>
//                                 </div>
//                             ))}
//                         </motion.div>
//                     </motion.div>

//                     {/* ══════════════════════════════
//               RIGHT COLUMN — service card
//           ══════════════════════════════ */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 28 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.9, delay: 0.18, ease: 'easeOut' }}
//                         className="relative lg:mt-2"
//                     >
//                         {/* Offset accent border behind card */}
//                         <div className="absolute -bottom-2.5 -right-2.5 w-full h-full rounded-[26px] border border-[#93C5FD]/55 z-0 pointer-events-none" />

//                         {/* Main card */}
//                         <div className="relative z-10 rounded-[22px] bg-white border border-black/[0.07] shadow-[0_8px_40px_rgba(0,0,0,0.07)] overflow-hidden">
//                             {/* ── Card header ── */}
//                             <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-black/[0.05] bg-[#FAFCFF]">
//                                 <div>
//                                     <p className="text-[10.5px] uppercase tracking-[0.22em] font-semibold text-[#6B6B6B]">What we cover</p>
//                                 </div>
//                                 <div className="flex items-center gap-1.5">
//                                     <div className="w-2 h-2 rounded-full bg-[#DBEAFE]" />
//                                     <div className="w-2 h-2 rounded-full bg-[#93C5FD]" />
//                                     <div className="w-2 h-2 rounded-full bg-[#1E5AA5]/40" />
//                                 </div>
//                             </div>

//                             {/* ── Service rows ── */}
//                             <div className="px-3 py-3">
//                                 {highlights.map(({ icon: Icon, label, tag }, i) => (
//                                     <motion.div
//                                         key={i}
//                                         initial={{ opacity: 0, x: 14 }}
//                                         animate={{ opacity: 1, x: 0 }}
//                                         transition={{ duration: 0.45, delay: 0.3 + i * 0.06 }}
//                                         className="group flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-[#F0F7FF] transition-all duration-250 cursor-default"
//                                     >
//                                         {/* Icon */}
//                                         <div className="w-8 h-8 rounded-xl bg-[#EFF6FF] group-hover:bg-[#DBEAFE] flex items-center justify-center shrink-0 transition-colors duration-250">
//                                             <Icon className="w-3.5 h-3.5 text-[#1E5AA5]" strokeWidth={1.6} />
//                                         </div>

//                                         {/* Label */}
//                                         <span className="text-[13.5px] font-light text-[#1B1D1E]/75 group-hover:text-[#1B1D1E] transition-colors duration-250 flex-grow leading-none">
//                                             {label}
//                                         </span>

//                                         {/* Tag pill — visible on hover */}
//                                         <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#1E5AA5]/0 group-hover:text-[#1E5AA5]/70 bg-transparent group-hover:bg-[#DBEAFE] px-2 py-1 rounded-md transition-all duration-250 whitespace-nowrap">
//                                             {tag}
//                                         </span>
//                                     </motion.div>
//                                 ))}
//                             </div>

//                             {/* ── Card footer ── */}
//                             <div className="mx-3 mb-3 px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#1E5AA5] to-[#2563EB] flex items-center justify-between">
//                                 <div className="flex items-center gap-2.5">
//                                     <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0" strokeWidth={1.5} />
//                                     <span className="text-[12.5px] font-light text-white/90 leading-none">
//                                         End-to-end IT coverage across all industries
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>

//                 {/* ── Bottom divider ── */}
//                 <motion.div
//                     initial={{ scaleX: 0 }}
//                     animate={{ scaleX: 1 }}
//                     transition={{ duration: 1.1, delay: 0.55, ease: 'easeOut' }}
//                     className="h-px bg-gradient-to-r from-[#1E5AA5]/25 via-[#DBEAFE] to-transparent origin-left"
//                 />
//             </div>
//         </section>
//     );
// };

// export default ServicesHero;

import { m } from 'framer-motion';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';
import Breadcrumb from '../../../components/ui/Breadcrumb';
import { MonitorSmartphone, GraduationCap, Server, Users, Briefcase, Cloud, CheckCircle2, HardDrive, Database } from 'lucide-react';

const highlights = [
    { icon: GraduationCap, label: 'IT Bootcamps & Career Acceleration', tag: 'Education' },
    { icon: Briefcase, label: 'Smart IT Solutions & Professional Consulting', tag: 'Consulting' },
    { icon: MonitorSmartphone, label: 'Analytics and Reporting', tag: 'Analytics' },
    { icon: Cloud, label: 'Cloud Infrastructure & Security', tag: 'Cloud' },
    { icon: Users, label: 'Business Process Outsourcing', tag: 'BPO' },
    { icon: Server, label: 'Big Data', tag: 'Big Data' },
    { icon: HardDrive, label: 'Data Warehousing', tag: 'Data' },
];

const stats = [
    { value: '7', label: 'Core services' },
    { value: '1,000+', label: 'Clients served' },
    { value: '15+', label: 'Countries' },
    { value: '6+', label: 'Years experience' },
];

const ServicesHero = () => {
    return (
        <section className="pt-32 pb-0 md:pt-40 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-12 max-w-6xl relative z-10">
                <Breadcrumb crumbs={[{ label: 'Services' }]} />

                <div className="mt-10 mb-14 md:mb-20 grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-10 xl:gap-16 items-start">
                    {/* LEFT */}
                    <m.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85 }}
                        className="flex flex-col justify-between"
                    >
                        <m.div
                            initial={{ opacity: 0, x: -14 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.55 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="w-7 h-px bg-[#1E5AA5]/50" />
                            <span className="text-[11px] font-sans tracking-[0.26em] text-[#1E5AA5] font-semibold uppercase">
                                Our Services
                            </span>
                        </m.div>

                        <AnimatedHeading
                            as="h1"
                            className="text-[3rem] md:text-[5rem] font-medium text-[#111827] leading-[1.04] tracking-tight mb-7"
                        >
                            <AnimatedText text="Empowering" className="block" />
                            <AnimatedText text="your business" className="block" />
                            <span className="block">
                                <AnimatedText text="with " className="inline" />
                                <AnimatedText text="dynamic IT" className="inline text-[#1B1D1E]/50" />
                            </span>
                            <AnimatedText text="solutions." className="block" />
                        </AnimatedHeading>

                        <p className="text-[16px] text-[#6B6B6B] leading-[1.8] font-light max-w-md mb-10">
                            From IT bootcamps and cloud infrastructure to BPO and big data — a full spectrum of services crafted to enhance
                            efficiency, security, and innovation at every stage of your business.
                        </p>

                        <m.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.42 }}
                            className="grid grid-cols-4 gap-0 pt-8 border-t border-black/[0.07]"
                        >
                            {stats.map((s, i) => (
                                <div key={i} className={`pr-6 ${i > 0 ? 'pl-6 border-l border-black/[0.07]' : ''}`}>
                                    <div className="text-[1.5rem] font-medium text-[#111827] leading-none tracking-tight tabular-nums">
                                        {s.value}
                                    </div>
                                    <div className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#6B6B6B] mt-1.5 leading-tight">
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </m.div>
                    </m.div>

                    {/* RIGHT — card */}
                    <m.div
                        initial={{ opacity: 0, x: 28 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.18, ease: 'easeOut' }}
                        className="relative lg:mt-2"
                    >
                        <div className="absolute -bottom-2.5 -right-2.5 w-full h-full rounded-[26px] border border-[#93C5FD]/55 z-0 pointer-events-none" />

                        <div className="relative z-10 rounded-[22px] bg-white border border-black/[0.07] shadow-[0_8px_40px_rgba(0,0,0,0.07)] overflow-hidden">
                            <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-black/[0.05] bg-[#FAFCFF]">
                                <p className="text-[10.5px] uppercase tracking-[0.22em] font-semibold text-[#6B6B6B]">What we cover</p>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-[#DBEAFE]" />
                                    <div className="w-2 h-2 rounded-full bg-[#93C5FD]" />
                                    <div className="w-2 h-2 rounded-full bg-[#1E5AA5]/40" />
                                </div>
                            </div>

                            <div className="px-3 py-3">
                                {highlights.map(({ icon: Icon, label, tag }, i) => (
                                    <m.div
                                        key={i}
                                        initial={{ opacity: 0, x: 14 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.45, delay: 0.3 + i * 0.06 }}
                                        className="group flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-[#F0F7FF] transition-all duration-250 cursor-default"
                                    >
                                        <div className="w-8 h-8 rounded-xl bg-[#EFF6FF] group-hover:bg-[#DBEAFE] flex items-center justify-center shrink-0 transition-colors duration-250">
                                            <Icon className="w-3.5 h-3.5 text-[#1E5AA5]" strokeWidth={1.6} />
                                        </div>
                                        <span className="text-[13.5px] font-light text-[#1B1D1E]/75 group-hover:text-[#1B1D1E] transition-colors duration-250 flex-grow leading-none">
                                            {label}
                                        </span>
                                        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#1E5AA5]/0 group-hover:text-[#1E5AA5]/70 bg-transparent group-hover:bg-[#DBEAFE] px-2 py-1 rounded-md transition-all duration-250 whitespace-nowrap">
                                            {tag}
                                        </span>
                                    </m.div>
                                ))}
                            </div>

                            <div className="mx-3 mb-3 px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#1E5AA5] to-[#2563EB] flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0" strokeWidth={1.5} />
                                    <span className="text-[12.5px] font-light text-white/90 leading-none">
                                        End-to-end IT coverage across all industries
                                    </span>
                                </div>
                            </div>
                        </div>
                    </m.div>
                </div>

                <m.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.1, delay: 0.55, ease: 'easeOut' }}
                    className="h-px bg-gradient-to-r from-[#1E5AA5]/25 via-[#DBEAFE] to-transparent origin-left"
                />
            </div>
        </section>
    );
};

export default ServicesHero;
