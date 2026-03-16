import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Home } from 'lucide-react';
import SEO from '../../components/seo/SEO';
import { AnimatedHeading, AnimatedText } from '../../components/ui/AnimatedHeading';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="404 Page Not Found"
        description="The page you are looking for does not exist."
        path="/404"
        robots="noindex,nofollow"
      />

      <section className="relative w-full min-h-screen flex items-center justify-center py-20 md:py-28 overflow-hidden bg-white">

        {/* Background decorative blurs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute left-1/4 top-1/3 w-[500px] h-[500px] bg-[#DBEAFE] rounded-full blur-[120px] opacity-30" />
          <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] bg-[#E0F2FE] rounded-full blur-[100px] opacity-25" />
        </div>

        <div className="container relative z-10 flex flex-col items-center justify-center text-center max-w-3xl px-4 w-full">

          {/* Large 404 number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative mb-6"
          >
            {/* Background watermark */}
            <span className="text-[180px] md:text-[260px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#1E5AA5]/10 to-[#1E5AA5]/3 select-none pointer-events-none">
              404
            </span>
          </motion.div>

          {/* Heading */}
          <AnimatedHeading
            as="h1"
            className="text-[3rem] md:text-[5rem] font-medium text-[#111827] leading-tight tracking-tight mb-6"
          >
            <AnimatedText text="The page you are" className="block" />
            <AnimatedText text="looking for is unavailable" className="block text-[#1B1D1E]/45" />
          </AnimatedHeading>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[15px] text-[#6B7280] font-normal leading-relaxed mb-10 max-w-lg"
          >
            The page you're looking for has taken a detour. Let's get you back to exploring.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Primary — Back to Home */}
            <Link
              to="/"
              className="group relative flex items-center justify-between bg-gradient-to-r from-[#1E5AA5] to-[#29A8E0] text-white p-1 rounded-full overflow-hidden w-[190px] shadow-[0_4px_14px_rgba(30,90,165,0.35)]"
            >
              <span className="text-[14px] font-semibold pl-5 pr-2 whitespace-nowrap transition-transform duration-[400ms] ease-out group-hover:translate-x-[36px]">
                Back to Home
              </span>
              <div className="w-9 h-9 rounded-full bg-white text-[#1E5AA5] flex items-center justify-center shrink-0 transition-transform duration-[400ms] ease-out group-hover:-translate-x-[144px]">
                <Home className="w-4 h-4" />
              </div>
            </Link>

            {/* Secondary — Contact */}
            <Link
              to="/contact"
              className="group flex items-center gap-2 text-[14px] font-medium text-[#6B7280] hover:text-[#1E5AA5] transition-colors duration-300 px-5 py-3 rounded-full border border-black/8 hover:border-[#1E5AA5]/20"
            >
              Contact Support
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6 text-[13px] text-[#9CA3AF] font-medium"
          >
            <span className="text-[11px] uppercase tracking-[0.15em]">Quick Links</span>
            <Link to="/services" className="hover:text-[#1E5AA5] transition-colors">Services</Link>
            <Link to="/about" className="hover:text-[#1E5AA5] transition-colors">About Us</Link>
            <Link to="/careers" className="hover:text-[#1E5AA5] transition-colors">Careers</Link>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default NotFound;
