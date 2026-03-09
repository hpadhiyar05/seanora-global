import { motion } from 'framer-motion';
import { Heart, Zap, Award, Headset } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: 'Customer-Centric Approach',
    description: "We prioritize our clients' needs and work tirelessly to ensure their satisfaction.",
  },
  {
    icon: Zap,
    title: 'Innovative Solutions',
    description: 'We stay ahead of the technological curve, providing the latest and most effective IT solutions.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'With a history of successful projects and satisfied clients, we have established ourselves as a trusted IT partner.',
  },
  {
    icon: Headset,
    title: '24/7 Support',
    description: 'Our dedicated support team is always available to assist you, ensuring your IT systems run smoothly at all times.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[var(--color-surface)] relative overflow-hidden">
      
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-sans tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif text-[var(--color-text)] font-light leading-tight">
            Partnering for <span className="italic text-[var(--color-text-muted)]">Success</span>
          </h2>
        </motion.div>

        {/* Grid Section */}
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
                className="group p-8 rounded-2xl bg-white border border-[var(--color-border)] hover:border-[var(--color-text-subtle)] hover:shadow-lg transition-all duration-500 hover:-translate-y-1 flex flex-col items-start text-left h-full"
              >
                <div className="w-12 h-12 mb-8 rounded-full bg-[var(--color-bg)] text-[var(--color-text)] flex items-center justify-center border border-[var(--color-border)] group-hover:border-[var(--color-text-subtle)] transition-colors duration-500">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-serif text-[var(--color-text)] mb-4 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <div className="w-8 h-[1px] bg-[var(--color-text-subtle)] mb-4 scale-x-50 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm flex-grow font-light">
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

export default WhyChooseUs;
