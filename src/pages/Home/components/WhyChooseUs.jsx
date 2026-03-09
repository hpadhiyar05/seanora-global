import { Lightbulb, Award, Clock, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Lightbulb,
    title: 'Best Solutions',
    description: 'Guaranteed lowest industry rates for all offered services.',
  },
  {
    icon: Award,
    title: 'Experience',
    description: 'Get top tier talent with required skills and certifications.',
  },
  {
    icon: Clock,
    title: 'Quick Support',
    description: 'Personally assigned service executive with 24x7 support.',
  },
  {
    icon: PenTool,
    title: 'Unique Design',
    description: "We'll help you test bold new ideas while sharing yours.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[var(--color-bg)] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-sans tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-text)] leading-tight font-light">
            Expertise and <br className="hidden md:block" />
            <span className="relative inline-block font-semibold">
              <span className="relative z-10 italic">dedication</span>
              <span className="absolute bottom-2 md:bottom-3 left-0 w-full h-[40%] bg-[var(--color-primary)]/80 -z-10 rounded-sm"></span>
            </span> <br className="hidden md:block" />
            to exceed expectations.
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-text-subtle)] hover:shadow-lg transition-all duration-500 hover:-translate-y-1 flex flex-col items-start text-left cursor-pointer"
              >
                <div className="w-12 h-12 mb-8 rounded-full bg-[var(--color-bg)] text-[var(--color-text)] flex items-center justify-center border border-[var(--color-border)] group-hover:border-[var(--color-text-subtle)] transition-colors duration-500">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-serif text-[var(--color-text)] mb-4 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Thin divider */}
                <div className="w-8 h-[1px] bg-[var(--color-text-subtle)] mb-4 scale-x-50 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm font-light">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
