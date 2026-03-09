import React from 'react';
import { motion } from 'framer-motion';
import awsLogo from '../../../assets/clients/aws.png';

const Clients = () => {
  // Creating an array of 6 items to render the placeholder logos
  const logos = Array(6).fill(awsLogo);

  return (
    <section className="py-24 bg-[var(--color-bg)] border-y border-[var(--color-border)] relative overflow-hidden">
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
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 hover:opacity-100 transition-opacity duration-700">
          {logos.map((logo, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
            >
              <img 
                src={logo} 
                alt={`Client Logo ${index + 1}`} 
                className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
