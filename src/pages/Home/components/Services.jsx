import { MonitorSmartphone, Server, Briefcase, GraduationCap, Headset, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

const servicesList = [
  {
    icon: MonitorSmartphone,
    title: 'Mobile & Website Design\nand Development',
    description: 'Creating user-friendly mobile apps\nand websites.',
  },
  {
    icon: Server,
    title: 'System Integration & IT\nReseller',
    description: 'Seamless system integration and\nquality IT products.',
  },
  {
    icon: Briefcase,
    title: 'Technical Professional\nServices',
    description: 'Expert consulting, implementation,\nand maintenance.',
  },
  {
    icon: GraduationCap,
    title: 'IT Training',
    description: 'Delivering comprehensive IT training\nprograms to keep your team updated\nwith the latest technologies and best\npractices.',
  },
  {
    icon: Headset,
    title: 'IT Services and IT\nConsulting',
    description: 'IT services provide technical support,\nwhile IT consulting offers strategic\nguidance for optimizing technology.',
  },
  {
    icon: ShieldCheck,
    title: 'Cloud Computing &\nSecurity',
    description: 'Offering scalable cloud solutions and\nrobust security measures to protect\nyour data and IT infrastructure.',
  },
];

/* Stagger variants — consistent system-wide pattern */
const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 lg:px-12 relative z-10">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="text-xs font-sans tracking-[0.22em] text-[#6B6B6B] uppercase mb-4 block font-medium">
            Our Services
          </span>
          <AnimatedHeading className="text-[40px] md:text-[48px] text-[#1B1D1E] tracking-tight leading-[1.1]">
            <AnimatedText text="We Offer a Wide" className="block font-medium" />
            <span className="block font-medium">
              <AnimatedText text="Variety of" />{' '}
              <AnimatedText text="IT Services" className="font-serif italic font-light text-black/70" />
            </span>
          </AnimatedHeading>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariant}
                className="group p-10 bg-white border border-black/[0.06] rounded-[20px] flex flex-col h-full text-left relative transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(0,0,0,0.07)] hover:border-transparent"
              >
                {/* Icon */}
                <div className="text-[#1B1D1E] mb-10 transition-transform duration-300 group-hover:scale-105 origin-left">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>

                {/* Label */}
                <h3 className="text-[13px] text-black/40 mb-3 font-medium whitespace-pre-line tracking-wide">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[20px] leading-[1.4] text-[#1B1D1E] font-medium transition-colors duration-300 group-hover:text-[#4F46E5] tracking-tight whitespace-pre-line flex-grow">
                  {service.description}
                </p>

                {/* Footer link */}
                <div className="mt-auto pt-10">
                  <Link
                    to="/services"
                    className="text-[13px] font-medium text-black/30 group-hover:text-black/60 transition-colors duration-300"
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
