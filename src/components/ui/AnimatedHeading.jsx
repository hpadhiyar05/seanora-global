import React from 'react';
import { motion } from 'framer-motion';

const wordAnimation = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const AnimatedHeading = ({ children, className, as = 'h2' }) => {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08 }
        }
      }}
    >
      {children}
    </MotionTag>
  );
};

export const AnimatedText = ({ text, className }) => {
  if (!text) return null;
  
  const words = text.split(" ").filter(word => word.length > 0);
  
  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span 
          key={index} 
          variants={wordAnimation}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};
