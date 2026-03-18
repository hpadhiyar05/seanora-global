// import { motion } from 'framer-motion';
// import { Award, Lightbulb, Heart, ShieldCheck, ArrowUpRight } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

// const reasons = [
//   {
//     icon: Award,
//     index: '01',
//     title: 'Expertise',
//     stat: '10+',
//     statLabel: 'Years experience',
//     description:
//       'Our certified professionals bring deep cross-industry knowledge — pairing technical depth with strategic insight to solve your most complex IT challenges.',
//     borderColor: '#1E5AA5',
//     hoverBg: '#EFF6FF',
//   },
//   {
//     icon: Lightbulb,
//     index: '02',
//     title: 'Innovation',
//     stat: '500+',
//     statLabel: 'Solutions delivered',
//     description:
//       'We continuously invest in emerging technologies, ensuring every solution we build is future-ready and keeps your business ahead of the curve.',
//     borderColor: '#0284C7',
//     hoverBg: '#F0F9FF',
//   },
//   {
//     icon: Heart,
//     index: '03',
//     title: 'Customer Focus',
//     stat: '1,000+',
//     statLabel: 'Clients served',
//     description:
//       'Every engagement starts with listening. We align ourselves with your goals and measure our success by the tangible outcomes we deliver for your business.',
//     borderColor: '#1E5AA5',
//     hoverBg: '#EFF6FF',
//   },
//   {
//     icon: ShieldCheck,
//     index: '04',
//     title: 'Reliability',
//     stat: '99.9%',
//     statLabel: 'Uptime SLA',
//     description:
//       'Count on consistent, dependable service backed by structured SLAs, dedicated support executives, and a team that treats your uptime as our uptime.',
//     borderColor: '#0284C7',
//     hoverBg: '#F0F9FF',
//   },
// ];

// export default function WhyChooseSeanora() {
//   return (
//     <section className="bg-white relative overflow-hidden py-20 md:py-28">
//       <div className="absolute inset-0 pointer-events-none z-0">
//         <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-[#DBEAFE] rounded-full blur-[130px] opacity-30 -translate-x-1/3 translate-y-1/3" />
//         <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#E0F2FE] rounded-full blur-[110px] opacity-25 translate-x-1/3 -translate-y-1/3" />
//       </div>

//       <div className="container mx-auto px-4 lg:px-12 max-w-6xl relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-80px' }}
//           transition={{ duration: 0.8 }}
//           className="mb-14 md:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
//         >
//           <div>
//             <div className="flex items-center gap-3 mb-5">
//               <div className="w-7 h-px bg-[#1E5AA5]/40" />
//               <span className="text-[11px] font-sans tracking-[0.26em] text-[#1E5AA5] font-semibold uppercase">
//                 Why Choose Seanora Global
//               </span>
//             </div>
//             <AnimatedHeading className="text-[2.5rem] md:text-[4rem] font-medium text-[#111827] leading-[1.07] tracking-tight">
//               <AnimatedText text="Four reasons businesses" className="block" />
//               <span className="block">
//                 <AnimatedText text="partner with " className="inline" />
//                 <AnimatedText text="us." className="inline text-[#1B1D1E]/45" />
//               </span>
//             </AnimatedHeading>
//           </div>

//           <p className="text-[15px] text-[#6B6B6B] font-light leading-relaxed max-w-xs lg:text-right lg:mb-1">
//             Trusted by 1,000+ clients across 15 countries — here's what sets us apart.
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 gap-5"
//           variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: '-50px' }}
//         >
//           {reasons.map((reason) => {
//             const Icon = reason.icon;
//             return (
//               <motion.div
//                 key={reason.index}
//                 variants={{
//                   hidden: { opacity: 0, y: 28 },
//                   show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
//                 }}
//                 className="group relative flex gap-6 p-7 lg:p-8 rounded-[20px] border border-black/[0.06] bg-white cursor-default transition-all duration-400 overflow-hidden"
//                 style={{
//                   '--hover-bg': reason.hoverBg,
//                 }}
//               >
//                 <div
//                   className="absolute left-0 inset-y-0 w-[3px] group-hover:w-[4px] rounded-l-[20px] transition-all duration-300"
//                   style={{ backgroundColor: reason.borderColor }}
//                 />

//                 <div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-[20px]"
//                   style={{ backgroundColor: reason.hoverBg }}
//                 />

//                 <span className="absolute bottom-4 right-6 text-[64px] font-serif font-light leading-none select-none pointer-events-none text-black/[0.03] group-hover:text-black/[0.06] transition-colors duration-400">
//                   {reason.index}
//                 </span>

//                 <div className="relative z-10 shrink-0 pt-0.5">
//                   <div
//                     className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-400 group-hover:scale-105"
//                     style={{ backgroundColor: `${reason.borderColor}15` }}
//                   >
//                     <Icon size={20} strokeWidth={1.5} style={{ color: reason.borderColor }} />
//                   </div>
//                 </div>

//                 <div className="relative z-10 flex-grow min-w-0">
//                   <div className="float-right text-right ml-4 mb-1">
//                     <div
//                       className="text-[1.5rem] font-medium leading-none tracking-tight tabular-nums transition-colors duration-400"
//                       style={{ color: `${reason.borderColor}55` }}
//                     >
//                       {reason.stat}
//                     </div>
//                     <div className="text-[9.5px] uppercase tracking-[0.14em] font-semibold text-[#6B6B6B]/60 mt-0.5">
//                       {reason.statLabel}
//                     </div>
//                   </div>

//                   <h3 className="text-[1.75rem] font-medium text-[#111827] leading-snug tracking-tight mb-3 group-hover:text-[#1B1D1E] transition-colors duration-300">
//                     {reason.title}
//                   </h3>

//                   <div
//                     className="h-px w-8 mb-4 group-hover:w-14 transition-all duration-500"
//                     style={{ backgroundColor: `${reason.borderColor}40` }}
//                   />

//                   <p className="text-[13.5px] text-[#6B6B6B] leading-[1.8] font-light group-hover:text-[#4B4B4B] transition-colors duration-400">
//                     {reason.description}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-40px' }}
//           transition={{ duration: 0.7, delay: 0.15 }}
//           className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 md:px-10 py-8 rounded-[20px] border border-black/[0.06] bg-[#F8FAFE]"
//         >
//           <div>
//             <p className="text-[1.25rem] font-medium text-[#111827] leading-snug mb-1">
//               Ready to transform your IT infrastructure?
//             </p>
//             <p className="text-[13px] text-[#6B7280] font-light">
//               Talk to one of our specialists — no obligation, just clarity.
//             </p>
//           </div>

//           <Link
//             to="/contact"
//             className="group relative flex items-center justify-between bg-gradient-to-r from-[#1E5AA5] to-[#29A8E0] text-white p-1 rounded-full overflow-hidden shrink-0 w-[172px] shadow-[0_4px_14px_rgba(30,90,165,0.35)]"
//           >
//             <span className="text-[14px] font-semibold pl-4 pr-2 whitespace-nowrap transition-transform duration-[400ms] ease-out group-hover:translate-x-[36px]">
//               Get in touch
//             </span>
//             <div className="w-9 h-9 rounded-full bg-white text-[#1E5AA5] flex items-center justify-center shrink-0 transition-transform duration-[400ms] ease-out group-hover:-translate-x-[128px]">
//               <ArrowUpRight className="w-4 h-4" />
//             </div>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from 'framer-motion';
import { Award, Lightbulb, Heart, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

const reasons = [
    {
        icon: Award,
        index: '01',
        title: 'Expertise',
        stat: '10+',
        statLabel: 'Years experience',
        description:
            'Our certified professionals bring deep cross-industry knowledge — pairing technical depth with strategic insight to solve your most complex IT challenges across healthcare, finance, telecom, and more.',
        borderColor: '#1E5AA5',
        hoverBg: '#EFF6FF',
    },
    {
        icon: Lightbulb,
        index: '02',
        title: 'Innovation',
        stat: '500+',
        statLabel: 'Solutions delivered',
        description:
            'We continuously invest in emerging technologies — from cloud-native architectures and big data platforms to AI-driven analytics — ensuring every solution we build is future-ready.',
        borderColor: '#0284C7',
        hoverBg: '#F0F9FF',
    },
    {
        icon: Heart,
        index: '03',
        title: 'Customer Focus',
        stat: '1,000+',
        statLabel: 'Clients served',
        description:
            "Every engagement starts with listening. We align ourselves with your goals — whether that's accelerating a career through our bootcamps or transforming your IT infrastructure — and measure success by the outcomes we deliver.",
        borderColor: '#1E5AA5',
        hoverBg: '#EFF6FF',
    },
    {
        icon: ShieldCheck,
        index: '04',
        title: 'Reliability',
        stat: '99.9%',
        statLabel: 'Uptime SLA',
        description:
            'Count on consistent, dependable service backed by structured SLAs, dedicated support executives, and a team spread across 15+ countries that treats your uptime as our uptime.',
        borderColor: '#0284C7',
        hoverBg: '#F0F9FF',
    },
];

export default function WhyChooseSeanora() {
    return (
        <section className="bg-white relative overflow-hidden py-20 md:py-28">
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-[#DBEAFE] rounded-full blur-[130px] opacity-30 -translate-x-1/3 translate-y-1/3" />
                <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#E0F2FE] rounded-full blur-[110px] opacity-25 translate-x-1/3 -translate-y-1/3" />
            </div>

            <div className="container mx-auto px-4 lg:px-12 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8 }}
                    className="mb-14 md:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-7 h-px bg-[#1E5AA5]/40" />
                            <span className="text-[11px] font-sans tracking-[0.26em] text-[#1E5AA5] font-semibold uppercase">
                                Why Choose Seanora Global
                            </span>
                        </div>
                        <AnimatedHeading className="text-[2.5rem] md:text-[4rem] font-medium text-[#111827] leading-[1.07] tracking-tight">
                            <AnimatedText text="Four reasons businesses" className="block" />
                            <span className="block">
                                <AnimatedText text="partner with " className="inline" />
                                <AnimatedText text="us." className="inline text-[#1B1D1E]/45" />
                            </span>
                        </AnimatedHeading>
                    </div>

                    <p className="text-[15px] text-[#6B6B6B] font-light leading-relaxed max-w-xs lg:text-right lg:mb-1">
                        Trusted by 1,000+ clients across 15 countries — here's what sets us apart.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {reasons.map((reason) => {
                        const Icon = reason.icon;
                        return (
                            <motion.div
                                key={reason.index}
                                variants={{
                                    hidden: { opacity: 0, y: 28 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
                                }}
                                className="group relative flex gap-6 p-7 lg:p-8 rounded-[20px] border border-black/[0.06] bg-white cursor-default transition-all duration-400 overflow-hidden"
                            >
                                <div
                                    className="absolute left-0 inset-y-0 w-[3px] group-hover:w-[4px] rounded-l-[20px] transition-all duration-300"
                                    style={{ backgroundColor: reason.borderColor }}
                                />

                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-[20px]"
                                    style={{ backgroundColor: reason.hoverBg }}
                                />

                                <span className="absolute bottom-4 right-6 text-[64px] font-serif font-light leading-none select-none pointer-events-none text-black/[0.03] group-hover:text-black/[0.06] transition-colors duration-400">
                                    {reason.index}
                                </span>

                                <div className="relative z-10 shrink-0 pt-0.5">
                                    <div
                                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-400 group-hover:scale-105"
                                        style={{ backgroundColor: `${reason.borderColor}15` }}
                                    >
                                        <Icon size={20} strokeWidth={1.5} style={{ color: reason.borderColor }} />
                                    </div>
                                </div>

                                <div className="relative z-10 flex-grow min-w-0">
                                    <div className="float-right text-right ml-4 mb-1">
                                        <div
                                            className="text-[1.5rem] font-medium leading-none tracking-tight tabular-nums transition-colors duration-400"
                                            style={{ color: `${reason.borderColor}55` }}
                                        >
                                            {reason.stat}
                                        </div>
                                        <div className="text-[9.5px] uppercase tracking-[0.14em] font-semibold text-[#6B6B6B]/60 mt-0.5">
                                            {reason.statLabel}
                                        </div>
                                    </div>

                                    <h3 className="text-[1.75rem] font-medium text-[#111827] leading-snug tracking-tight mb-3 group-hover:text-[#1B1D1E] transition-colors duration-300">
                                        {reason.title}
                                    </h3>

                                    <div
                                        className="h-px w-8 mb-4 group-hover:w-14 transition-all duration-500"
                                        style={{ backgroundColor: `${reason.borderColor}40` }}
                                    />

                                    <p className="text-[13.5px] text-[#6B6B6B] leading-[1.8] font-light group-hover:text-[#4B4B4B] transition-colors duration-400">
                                        {reason.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 md:px-10 py-8 rounded-[20px] border border-black/[0.06] bg-[#F8FAFE]"
                >
                    <div>
                        <p className="text-[1.25rem] font-medium text-[#111827] leading-snug mb-1">
                            Ready to transform your IT infrastructure?
                        </p>
                        <p className="text-[13px] text-[#6B7280] font-light">
                            Talk to one of our specialists — no obligation, just clarity.
                        </p>
                    </div>

                    <Link
                        to="/contact"
                        className="group relative flex items-center justify-between bg-gradient-to-r from-[#1E5AA5] to-[#29A8E0] text-white p-1 rounded-full overflow-hidden shrink-0 w-[172px] shadow-[0_4px_14px_rgba(30,90,165,0.35)]"
                    >
                        <span className="text-[14px] font-semibold pl-4 pr-2 whitespace-nowrap transition-transform duration-[400ms] ease-out group-hover:translate-x-[36px]">
                            Get in touch
                        </span>
                        <div className="w-9 h-9 rounded-full bg-white text-[#1E5AA5] flex items-center justify-center shrink-0 transition-transform duration-[400ms] ease-out group-hover:-translate-x-[128px]">
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
