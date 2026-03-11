import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="bg-[var(--color-bg)] w-full">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col lg:flex-row items-center justify-between bg-[var(--cta-bg)] border-y border-[var(--color-border)] py-12 px-8 lg:py-16 lg:px-24 relative overflow-hidden group gap-8"
      >
        {/* Subtle hover background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--color-border)] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
        
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-4xl z-10 w-full">
          <span className="text-xs font-sans tracking-[0.2em] text-[var(--cta-text)]/70 uppercase mb-3 block">
            Let's Talk
          </span>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-[var(--cta-text)] mb-4 leading-tight">
            Start a project <span className="italic text-[var(--cta-text)]/80">with</span> us.
          </h2>
          
          <p className="text-[var(--cta-text)]/80 text-sm md:text-base max-w-2xl font-light">
            Contact us today to discuss your project needs and receive a customized solution that drives actual business results.
          </p>
        </div>
        
        <div className="z-10 flex-shrink-0 mt-6 lg:mt-0 flex justify-start">
          <Link 
            to="/contact" 
            className="group/btn relative flex items-start justify-start w-[180px] lg:w-[200px]"
          >
            <div className="inline-flex items-center justify-start p-2 bg-[var(--cta-button)] text-white rounded-full group-hover/btn:brightness-110 transition-all duration-500 shadow-xl border border-transparent overflow-hidden">
              <span className="font-semibold text-sm tracking-wide overflow-hidden whitespace-nowrap transition-all duration-500 max-w-[150px] opacity-100 group-hover/btn:max-w-0 group-hover/btn:opacity-0 ml-5 group-hover/btn:ml-0 mr-5 group-hover/btn:mr-0">
                Lets Connect
              </span>
              <span className="w-12 h-12 rounded-full bg-white text-[var(--cta-button)] flex items-center justify-center shadow-inner overflow-hidden relative flex-shrink-0 transition-transform duration-500">
                {/* Visible icon that slides out */}
                <Phone className="w-5 h-5 absolute transition-transform duration-500 group-hover/btn:translate-x-8 group-hover/btn:-translate-y-8" strokeWidth={2} />
                
                {/* Hidden icon that slides in */}
                <Phone className="w-5 h-5 absolute -translate-x-8 translate-y-8 transition-transform duration-500 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0" strokeWidth={2} />
              </span>
            </div>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
