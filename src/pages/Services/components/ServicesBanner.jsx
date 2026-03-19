// import { motion } from 'framer-motion';
// import servicesBanner from '../../../assets/images/services-banner.webp';

// const ServicesBanner = () => {
//   return (
//     <div className="relative w-full overflow-hidden" style={{ height: '480px' }}>

//       {/* ── Photo ── */}
//       <img
//         src={servicesBanner}
//         alt=""
//         loading="lazy"
//         className="absolute inset-0 w-full h-full object-cover object-center lg:object-[center_40%]"
//         style={{ opacity: 0.92 }}
//         width={1280}
//         height={600}
//       />

//       {/*
//         Top fade: white → transparent
//         Blends seamlessly with ServicesHero white background above.
//         Covers ~30% so the bulbs and ceiling remain visible below it.
//       */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: `linear-gradient(
//             to bottom,
//             rgba(255,255,255,1.00)  0%,
//             rgba(255,255,255,0.60) 12%,
//             rgba(255,255,255,0.00) 32%,
//             rgba(255,255,255,0.00) 68%,
//             rgba(255,255,255,0.60) 88%,
//             rgba(255,255,255,1.00) 100%
//           )`,
//         }}
//       />

//       {/*
//         Subtle center vignette: keeps text readable without
//         flattening the photo. Very light — just takes the edge
//         off the bright ceiling area where text sits.
//       */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: `radial-gradient(
//             ellipse 70% 50% at 50% 30%,
//             rgba(255,255,255,0.30) 0%,
//             transparent            100%
//           )`,
//         }}
//       />

//       {/* ── Text — sits in the upper zone above the monitors ── */}
//       <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 md:pt-20 px-4 z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-80px' }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           className="text-center max-w-3xl"
//         >
//           <span className="text-[11px] font-sans tracking-[0.22em] text-[#6B6B6B] font-semibold uppercase mb-4 block">
//             End-to-End IT Excellence
//           </span>
//           <h2 className="text-[2.5rem] md:text-[4rem] font-medium text-[#111827] leading-[1.15] tracking-tight">
//             Comprehensive solutions for{' '}
//             <span className="text-[#1B1D1E]/65">every stage</span>
//             <br className="hidden md:block" />
//             {' '}of your business journey.
//           </h2>
//         </motion.div>
//       </div>

//     </div>
//   );
// };

// export default ServicesBanner;

import { m } from 'framer-motion';
import servicesBanner from '../../../assets/images/services-banner.webp';

const ServicesBanner = () => {
    return (
        <div className="relative w-full overflow-hidden" style={{ height: '480px' }}>
            <img
                src={servicesBanner}
                alt=""
                loading="eager"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center lg:object-[center_40%]"
                style={{ opacity: 0.92 }}
                width={1280}
                height={600}
            />

            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(
            to bottom,
            rgba(255,255,255,1.00)  0%,
            rgba(255,255,255,0.60) 12%,
            rgba(255,255,255,0.00) 32%,
            rgba(255,255,255,0.00) 68%,
            rgba(255,255,255,0.60) 88%,
            rgba(255,255,255,1.00) 100%
          )`,
                }}
            />

            <div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(
            ellipse 70% 50% at 50% 30%,
            rgba(255,255,255,0.30) 0%,
            transparent            100%
          )`,
                }}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 md:pt-20 px-4 z-10">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center max-w-3xl"
                >
                    <span className="text-[11px] font-sans tracking-[0.22em] text-[#6B6B6B] font-semibold uppercase mb-4 block">
                        End-to-End IT Excellence
                    </span>
                    <h2 className="text-[2.5rem] md:text-[4rem] font-medium text-[#111827] leading-[1.15] tracking-tight">
                        Comprehensive solutions for <span className="text-[#1B1D1E]/65">every stage</span>
                        <br className="hidden md:block" /> of your business journey.
                    </h2>
                </m.div>
            </div>
        </div>
    );
};

export default ServicesBanner;
