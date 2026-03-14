import { motion } from 'framer-motion';
import awsLogo from '../../../assets/clients/aws.png';

const Clients = () => {
  const baseLogos = Array(6).fill(awsLogo);
  const logos = [...baseLogos, ...baseLogos];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex items-center justify-center gap-4 mb-14 md:mb-16"
        >
          <div className="h-px flex-1 bg-black/10" />
          <h3 className="text-[13px] text-[#6B6B6B] text-center font-medium whitespace-nowrap">
            Loved by 1000+ big and small brands around the world
          </h3>
          <div className="h-px flex-1 bg-black/10" />
        </motion.div>
        
        {/* Marquee Container wrapper */}
        <div className="relative w-full overflow-hidden flex items-center">
          
          {/* Animated Track */}
          <div className="flex items-center gap-[64px] whitespace-nowrap animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused] w-max">
            {/* First Set */}
            {logos.map((logo, index) => (
              <img 
                key={`logo-1-${index}`}
                src={logo} 
                alt="AWS client logo"
                className="h-[28px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
            ))}
            {/* Cloned Set for Seamless Loop */}
            {logos.map((logo, index) => (
              <img 
                key={`logo-2-${index}`}
                src={logo} 
                alt="AWS client logo"
                className="h-[28px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Clients;
