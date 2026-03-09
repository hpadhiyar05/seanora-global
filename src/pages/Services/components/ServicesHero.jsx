import { motion } from 'framer-motion';

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-16 bg-[var(--color-bg)] relative overflow-hidden">
      
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-xs font-sans tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-6 block">
            Our Services
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[var(--color-text)] leading-tight mb-8 font-light">
            Empowering Your Business with <span className="italic text-[var(--color-text-muted)] mt-2 inline-block">Dynamic</span> IT Solutions
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed font-light">
            At Seanora Global, we offer a diverse range of IT solutions designed to meet the unique needs of your business. Our services are crafted to enhance efficiency, security, and innovation, ensuring your business thrives in the digital age. Explore our offerings below and discover how we can empower your success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
