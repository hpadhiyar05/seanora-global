import { motion } from 'framer-motion';
import { Heart, Zap, Award, Headset, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

const reasons = [
  {
    Icon: Heart,
    title: 'Customer-Centric',
    description:
      "We prioritise our clients' needs and work tirelessly to ensure their satisfaction at every stage.",
  },
  {
    Icon: Zap,
    title: 'Innovative Solutions',
    description:
      'We stay ahead of the technological curve, providing the latest and most effective IT solutions.',
  },
  {
    Icon: Award,
    title: 'Proven Track Record',
    description:
      'A history of successful projects and satisfied clients has established us as a trusted IT partner.',
  },
  {
    Icon: Headset,
    title: '24 / 7 Support',
    description:
      'Our dedicated support team is always on standby to ensure your IT systems run without interruption.',
  },
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const gridItem = {
  hidden: (i = 0) => {
    const offsets = [
      { x: -35, y: -35 }, // top-left
      { x: 35, y: -35 },  // top-right
      { x: -35, y: 35 },  // bottom-left
      { x: 35, y: 35 },   // bottom-right
    ];

    const { x, y } = offsets[i] || { x: 0, y: 0 };

    return {
      opacity: 0,
      x,
      y,
      scale: 0.96,
    };
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F5F5F5] relative overflow-hidden">



      <div className="container mx-auto px-4 lg:px-12 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 xl:gap-20 items-start">

          {/* Left: sticky heading block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-xs font-sans tracking-[0.22em] text-[#6B6B6B] font-medium uppercase mb-5 block">
              Why Choose Us
            </span>

            <AnimatedHeading className="text-[2.5rem] md:text-[4rem] font-medium text-[#111827] leading-tight tracking-tight mb-6">
              <AnimatedText text="Partnering" className="block" />
              <AnimatedText text="for " />
              <AnimatedText text="Success" className="text-[#1B1D1E]/65" />
            </AnimatedHeading>

            <p className="text-[16px] text-[#6B6B6B] font-light leading-relaxed mb-8 max-w-sm">
              We combine deep technical expertise with a genuinely people-first approach —
              so your goals always drive our work.
            </p>

            <Link
              to="/services"
              className="group inline-flex items-center gap-3 text-[13px] font-semibold text-[#1B1D1E] tracking-wide uppercase"
            >
              <span className="transition-all duration-300 group-hover:underline underline-offset-4">
                Explore Our Services
              </span>
              <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#1E5AA5] group-hover:text-white group-hover:border-[#1E5AA5]">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </motion.div>

          {/* Right: card grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {reasons.map(({ Icon, title, description }, index) => (
              <motion.div
                key={title}
                custom={index}
                variants={gridItem}
                className="
                group p-7 rounded-[20px] bg-white border border-black/[0.06]
                hover:bg-[#132A4D] hover:border-[#132A4D]
                transition-all duration-500 ease-out
                hover:-translate-y-1.5 hover:scale-[1.03]
                cursor-default flex flex-col
                "
              >

                {/* Icon */}
                <div
                  className="
                  w-11 h-11 rounded-xl bg-[#EFF6FF] text-[#1E5AA5]
                  flex items-center justify-center mb-6 shrink-0
                  transition-all duration-500
                  group-hover:bg-white/10 group-hover:text-white
                  group-hover:scale-110
                  "
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-[1.75rem] font-medium text-[#111827] mb-3 leading-snug transition-colors duration-400 group-hover:text-white">
                  {title}
                </h3>

                {/* Animated rule */}
                <div className="w-6 h-px bg-black/10 mb-4 scale-x-50 origin-left transition-all duration-500 group-hover:bg-white/40 group-hover:scale-x-100" />

                {/* Description */}
                <p className="text-[14px] text-[#6B6B6B] leading-relaxed font-light flex-grow transition-colors duration-400 group-hover:text-white/80">
                  {description}
                </p>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;