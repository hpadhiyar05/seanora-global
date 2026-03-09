import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-24 bg-[var(--color-bg)]">
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center bg-[var(--color-surface)] border border-[var(--color-border)] p-16 md:p-24 rounded-3xl relative overflow-hidden group"
        >
          {/* Subtle hover background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--color-border)] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
          
          <span className="text-xs font-sans tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-6 block z-10">
            Let's Talk
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light text-[var(--color-text)] mb-8 leading-tight z-10 max-w-3xl">
            Start a project <span className="italic text-[var(--color-text-muted)]">with</span> us.
          </h2>
          
          <p className="text-[var(--color-text-muted)] text-base md:text-lg max-w-xl mx-auto font-light mb-12 z-10">
            Contact us today to discuss your project needs and receive a customized solution that drives actual business results.
          </p>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-between pl-8 pr-2 py-2 bg-[var(--color-text)] text-[var(--color-bg)] rounded-full hover:bg-[var(--color-text-muted)] transition-all duration-300 z-10 shadow-xl group border border-[var(--color-text-muted)]"
          >
            <span className="font-semibold text-sm tracking-wide mr-6">Lets Connect</span>
            <span className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-black flex items-center justify-center group-hover:-rotate-12 transition-transform duration-300 shadow-inner">
              <Phone className="w-5 h-5" strokeWidth={2} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
