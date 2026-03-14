import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

const ContactCTA = () => {
  return (
    <section className="w-full py-12 md:py-16 px-4 lg:px-12 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="max-w-6xl mx-auto rounded-[24px] overflow-hidden relative border border-black/5"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#DDF5FE] via-[#F4F6F2] to-[#FFF1CD] opacity-90" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between py-12 px-8 lg:px-16 w-full gap-8">

          {/* Left content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl">
            <span className="text-xs font-sans tracking-[0.22em] text-[#6B6B6B] uppercase mb-4 block font-medium">
              Let's Talk
            </span>

            <AnimatedHeading className="text-[32px] md:text-[40px] lg:text-[48px] font-serif font-light text-[#1B1D1E] tracking-tight leading-[1.08] mb-4">
              <AnimatedText text="Start a project " />
              <AnimatedText text="with" className="italic text-[#1B1D1E]/65" />
              <AnimatedText text=" us." />
            </AnimatedHeading>

            <p className="text-[15px] text-[#6B6B6B] leading-relaxed max-w-md font-light">
              Contact us today to discuss your project needs and receive a customised
              solution that drives real business results.
            </p>
          </div>

          {/* CTA button */}
          <div className="shrink-0 mt-2 lg:mt-0">
            <Link
              to="/contact"
              className="group relative flex items-center justify-between bg-[#1B1D1E] text-white p-1 rounded-full overflow-hidden w-[172px]"
            >
              <span className="text-[14px] font-medium pl-4 pr-2 whitespace-nowrap transition-transform duration-[400ms] ease-out group-hover:translate-x-[36px]">
                Let's Connect
              </span>
              <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shrink-0 transition-transform duration-[400ms] ease-out group-hover:-translate-x-[128px]">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
