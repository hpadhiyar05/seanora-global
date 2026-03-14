import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import notfoundImg from '../../assets/images/notfound.png';
import SEO from '../../components/seo/SEO';

const NotFound = () => {
  // Scroll to top on mount
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
      <section className="relative w-full min-h-screen flex items-center justify-center py-16 md:py-24 overflow-hidden bg-white">
        {/* Background Gradients matching Hero/Reference image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Soft blue gradient on left */}
          <div className="absolute left-0 top-1/2 w-[800px] h-[800px] bg-[#Eef7fb] rounded-full blur-[120px] opacity-90 -translate-x-1/2 -translate-y-1/2"></div>
          {/* Soft yellow gradient on right */}
          <div className="absolute right-0 bottom-0 w-[800px] h-[1000px] bg-[#Fdfae8] rounded-full blur-[120px] opacity-90 translate-x-1/3 translate-y-1/4"></div>
        </div>

        <div className="container relative z-10 flex flex-col items-center justify-center text-center max-w-[800px] px-4 w-full mt-10">
          
          {/* 404 Image */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="mb-8 w-full max-w-[400px] md:max-w-[500px]"
          >
            <img
              src={notfoundImg}
              alt="Illustration representing a missing page"
              className="w-full h-auto object-contain"
              loading="eager"
              decoding="async"
            />
          </motion.div>

        {/* Heading Text */}
        <motion.h1
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           className="text-[32px] md:text-[40px] text-[#1B1D1E] font-medium tracking-tight leading-[1.1] mb-10"
        >
          <span className="block">Oops! The page you are</span>
          <span className="block">looking for <span className="font-serif italic font-light text-[#1B1D1E]/90">doesn't exist</span></span>
        </motion.h1>

        {/* Back to Home Button */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link 
            to="/"
            className="group relative flex items-center justify-between bg-[#1B1D1E] text-white p-1 rounded-full overflow-hidden shrink-0 w-[164px]"
          >
            <span className="text-[14px] font-medium pl-4 pr-2 whitespace-nowrap transition-transform duration-[400ms] ease-out group-hover:translate-x-[26px]">
              Back to home
            </span>
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0 transition-transform duration-[400ms] ease-out group-hover:-translate-x-[116px]">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </motion.div>

        </div>
      </section>
    </>
  );
};

export default NotFound;
