import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

/* Shared entrance: staggered children from Hero wrapper */
const heroVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const heroItem = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut', delay } },
});

const Hero = () => {
  return (
    <section
      id="hero-main"
      className="relative w-full min-h-screen flex items-center justify-center pt-0 pb-16 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-white z-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-[800px] h-[800px] bg-[#Eef7fb] rounded-full blur-[100px] opacity-90 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-[#Fdfae8] rounded-full blur-[100px] opacity-90 translate-x-1/3 translate-y-1/4" />
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white via-white/80 to-transparent" />
      </div>

      <motion.div
        className="container relative z-10 flex flex-col items-center justify-center text-center max-w-[1000px] px-4 w-full"
        variants={heroVariants}
        initial="hidden"
        animate="show"
      >
        {/* Heading */}
        <motion.div variants={heroItem(0)} className="mt-16">
          <AnimatedHeading
            as="h1"
            className="text-[64px] md:text-h1 text-primary-black font-medium tracking-tight mb-6 leading-tight"
          >
            <AnimatedText className="not-italic block" text="Building bold brands" />
            <AnimatedText className="italic block font-serif" text="with thoughtful design" />
          </AnimatedHeading>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={heroItem(0.05)}
          className="text-body text-black-60 max-w-[640px] mx-auto mb-10"
        >
          At Awake, we help small startups tackle the world's biggest challenges with tailored
          solutions, guiding you from strategy to success in a competitive market.
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={heroItem(0.1)}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          {/* Button */}
          <Link
            to="/contact"
            className="group relative flex items-center justify-between bg-[#1B1D1E] text-white px-1.5 h-[44px] rounded-full overflow-hidden shrink-0 w-[154px]"
          >
            <span className="text-[14px] font-medium px-4 whitespace-nowrap transition-transform duration-[400ms] ease-out group-hover:translate-x-[36px]">
              Get Started
            </span>
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0 transition-transform duration-[400ms] ease-out group-hover:-translate-x-[108px]">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Trust / Avatars */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 object-cover relative z-40" src="https://i.pravatar.cc/100?img=11" alt="" aria-hidden="true" loading="eager" decoding="async" />
              <img className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 object-cover relative z-30" src="https://i.pravatar.cc/100?img=33" alt="" aria-hidden="true" loading="eager" decoding="async" />
              <img className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 object-cover relative z-20" src="https://i.pravatar.cc/100?img=68" alt="" aria-hidden="true" loading="eager" decoding="async" />
              <img className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 object-cover relative z-10" src="https://i.pravatar.cc/100?img=59" alt="" aria-hidden="true" loading="eager" decoding="async" />
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
                <Star className="w-3.5 h-3.5 text-[#F59E0B] opacity-40 fill-transparent stroke-[2]" />
              </div>
              <span className="text-xs font-medium text-black-60">Trusted by 1000+ clients</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
