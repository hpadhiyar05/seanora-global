import React from 'react';
import { motion } from 'framer-motion';
import awsLogo from '../../../assets/clients/aws.png';

const Clients = () => {
  // Creating a doubled array to allow for a seamless infinite marquee scroll
  const baseLogos = Array(6).fill(awsLogo);
  const logos = [...baseLogos, ...baseLogos];

  return (
    <section className="py-24 bg-slate-200 border-y border-[var(--color-border)] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 text-center relative z-10">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-xs font-sans tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-12"
        >
          Trusted by industry leaders
        </motion.h3>
        
        {/* Marquee Container wrapper */}
        <div className="relative w-full overflow-hidden flex select-none group py-6">
          
          {/* Animated Track */}
          <div className="flex flex-shrink-0 animate-marquee items-center gap-16 md:gap-24 opacity-60 group-hover:opacity-100 transition-opacity duration-700 pr-16 md:pr-24">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110 flex-shrink-0"
              >
                <img 
                  src={logo} 
                  alt={`Client Logo ${index + 1}`} 
                  className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Clients;
