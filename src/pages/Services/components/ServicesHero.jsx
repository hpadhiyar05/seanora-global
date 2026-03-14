import { motion } from 'framer-motion';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';
import Breadcrumb from '../../../components/ui/Breadcrumb';

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white relative overflow-hidden">
      
      {/* Background Gradients matching Hero section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-[800px] h-[800px] bg-[#Eef7fb] rounded-full blur-[100px] opacity-90 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-[#Fdfae8] rounded-full blur-[100px] opacity-90 translate-x-1/3 translate-y-1/4"></div>
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <Breadcrumb crumbs={[{ label: 'Services' }]} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-xs font-sans tracking-[0.2em] text-[#6B6B6B] uppercase mb-6 block font-medium">
            Our Services
          </span>
          <AnimatedHeading as="h1" className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1B1D1E] leading-tight mb-8 font-light tracking-tight">
            <AnimatedText text="Empowering Your Business with " />
            <AnimatedText text="Dynamic" className="italic text-[#1B1D1E]/80 mt-2" />
            <AnimatedText text=" IT Solutions" />
          </AnimatedHeading>
          <p className="text-lg md:text-xl text-[#6B6B6B] leading-relaxed font-light">
            At Seanora Global, we offer a diverse range of IT solutions designed to meet the unique needs of your business. Our services are crafted to enhance efficiency, security, and innovation, ensuring your business thrives in the digital age. Explore our offerings below and discover how we can empower your success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
