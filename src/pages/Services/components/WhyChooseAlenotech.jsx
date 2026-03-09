import { motion } from 'framer-motion';
import { Award, Lightbulb, Heart, ShieldCheck } from 'lucide-react';

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
    <section className="py-24 bg-[var(--color-bg)] text-[var(--color-text)] relative overflow-hidden">
      
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-sans tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-4 block">
            Why Choose Seanora Global?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8 font-light">
            Partnering for <span className="italic text-[var(--color-text-muted)]">Success</span>
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] font-light leading-relaxed">
            At Seanora Global, we are committed to delivering exceptional IT services that drive business success. Here's why businesses choose us as their trusted IT partner:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group p-8 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-text-subtle)] hover:shadow-lg transition-all duration-500 hover:-translate-y-1 flex flex-col items-center text-center cursor-pointer"
              >
                <div className="w-12 h-12 mb-8 rounded-full bg-white text-[var(--color-text)] flex items-center justify-center border border-[var(--color-border)] group-hover:border-[var(--color-text-subtle)] transition-colors duration-500">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-serif text-[var(--color-text)] mb-4 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <div className="w-8 h-[1px] bg-[var(--color-text-subtle)] mb-4 scale-x-50 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <p className="text-[var(--color-text-muted)] leading-relaxed font-light">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAlenotech;
