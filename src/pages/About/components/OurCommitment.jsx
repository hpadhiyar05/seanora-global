import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const OurCommitment = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1B1D1E] relative overflow-hidden">

      {/* Subtle inner-glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 w-[700px] h-[700px] bg-[#4F46E5]/10 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#5BAACC]/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 lg:px-12 max-w-5xl relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <Quote
            className="w-10 h-10 mx-auto mb-8 -scale-x-100"
            strokeWidth={1}
            style={{ color: 'rgba(255,255,255,0.12)' }}
          />

          <span className="text-[11px] font-sans tracking-[0.24em] text-white/40 font-semibold uppercase mb-8 block">
            Our Commitment to You
          </span>
        </motion.div>

        {/* Quote text — single clean fade-up */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="text-2xl md:text-3xl lg:text-[34px] font-serif text-white font-light leading-[1.6] max-w-4xl mx-auto"
        >
          At Seanora Global, we believe in building long-lasting relationships
          with our clients. Our success is measured by yours, and we are
          committed to helping you achieve your business objectives through
          reliable and{' '}
          <em className="italic text-white/60">innovative</em> IT solutions.
        </motion.p>

        {/* Divider + attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.2 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <div className="w-16 h-px bg-white/10" />
          <span className="text-[11px] uppercase tracking-[0.22em] text-white/30 font-semibold">
            Seanora Global
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default OurCommitment;
