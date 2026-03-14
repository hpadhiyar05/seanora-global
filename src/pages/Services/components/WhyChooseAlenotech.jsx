import { motion } from 'framer-motion';
import { Award, Lightbulb, Heart, ShieldCheck } from 'lucide-react';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

const reasons = [
  {
    icon: Award,
    title: 'Expertise',
    description: 'Our team of professionals brings years of experience and industry knowledge.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We leverage the latest technologies to provide cutting-edge solutions.',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'We prioritize your needs and strive to exceed your expectations.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliability',
    description: 'Count on us for consistent, dependable service and support.',
  },
];

const WhyChooseAlenotech = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-[#1B1D1E] relative overflow-hidden">
      
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-xs font-sans tracking-[0.2em] text-[#6B6B6B] font-medium uppercase mb-4 block">
            Why Choose Seanora Global?
          </span>
          <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8 font-light tracking-tight">
            <AnimatedText text="Partnering for " />
            <AnimatedText text="Success" className="italic text-[#1B1D1E]/80" />
          </AnimatedHeading>
          <p className="text-lg text-[#6B6B6B] font-light leading-relaxed">
            At Seanora Global, we are committed to delivering exceptional IT services that drive business success. Here's why businesses choose us as their trusted IT partner:
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                }}
                className="group p-8 rounded-[24px] bg-white border border-black/5 hover:border-black/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 flex flex-col items-center text-center cursor-default"
              >
                <div className="w-14 h-14 mb-8 rounded-full bg-[#F3F3F3] text-[#1B1D1E] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[#1B1D1E] group-hover:text-white">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-serif text-[#1B1D1E] mb-4 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <div className="w-8 h-[1px] bg-black/10 mb-5 scale-x-50 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                
                <p className="text-[#6B6B6B] leading-relaxed font-light text-[15px]">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseAlenotech;
