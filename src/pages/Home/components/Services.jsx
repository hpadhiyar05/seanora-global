import { MonitorSmartphone, Server, Briefcase, GraduationCap, Headset, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesList = [
  {
    icon: MonitorSmartphone,
    title: 'Mobile & Website Design\nand Development',
    description: 'Creating user-friendly mobile apps\nand websites.',
  },
  {
    icon: Server,
    title: 'System Integration & IT\nReseller',
    description: 'Seamless system integration and\nquality IT products.',
  },
  {
    icon: Briefcase,
    title: 'Technical Professional\nServices',
    description: 'Expert consulting, implementation,\nand maintenance.',
  },
  {
    icon: GraduationCap,
    title: 'IT Training',
    description: 'Delivering comprehensive IT training\nprograms to keep your team updated\nwith the latest technologies and best\npractices.',
  },
  {
    icon: Headset,
    title: 'IT Services and IT\nConsulting',
    description: 'IT services provide technical support,\nwhile IT consulting offers strategic\nguidance for optimizing technology.',
  },
  {
    icon: ShieldCheck,
    title: 'Cloud Computing &\nSecurity',
    description: 'Offering scalable cloud solutions and\nrobust security measures to protect\nyour data and IT infrastructure.',
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-[var(--color-bg)] relative overflow-hidden">
      
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
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-text)] leading-tight font-light">
            We Offer a <span className="italic text-[var(--color-text-muted)] mt-2 inline-block">Wide</span> <br />
            Variety of IT Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group p-10 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl hover:border-[var(--color-text-subtle)] hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col items-center text-center backdrop-blur-sm -translate-y-0 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="mb-8 p-4 rounded-full bg-[var(--color-bg)] text-[var(--color-text)] group-hover:scale-110 transition-transform duration-500 border border-[var(--color-border)] group-hover:border-[var(--color-text-subtle)]">
                  <Icon className="w-8 h-8" strokeWidth={1} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-serif text-[var(--color-text)] mb-4 transition-colors duration-300 whitespace-pre-line tracking-wide">
                  {service.title}
                </h3>
                
                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm whitespace-pre-line font-light">
                  {service.description}
                </p>
                
                {/* Decorative underline */}
                <div className="w-8 h-[1px] bg-[var(--color-text-subtle)] mt-8 scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
