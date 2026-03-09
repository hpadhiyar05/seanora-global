import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const OurCommitment = () => {
  return (
    <section className="py-24 bg-[var(--color-surface)] overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-black/5 blur-[100px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 lg:px-12 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center p-12 md:p-20 bg-white rounded-3xl border border-[var(--color-border)] relative overflow-hidden group"
        >
          {/* Subtle decorative accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-text-subtle)] to-transparent opacity-20 group-hover:opacity-50 transition-opacity duration-700"></div>
          
          <Quote className="w-12 h-12 mx-auto text-[var(--color-text-subtle)] opacity-30 mb-8 transform -scale-x-100" strokeWidth={1} />
          
          <span className="text-xs font-sans tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-6 block">
            Our Commitment to You
          </span>
          <p className="text-xl md:text-3xl font-serif text-[var(--color-text)] leading-relaxed md:leading-snug font-light max-w-4xl mx-auto">
            At Seanora Global, we believe in building long-lasting relationships with our clients. 
            Our success is measured by your success, and we are committed to helping you achieve 
            your business objectives through reliable and <span className="italic">innovative</span> IT solutions. We strive to be 
            more than just a service provider; we aim to be a trusted partner in your journey 
            towards a seamless and efficient digital future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurCommitment;
