import { MonitorSmartphone, Server, Briefcase, GraduationCap, Headset, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    <section className="relative overflow-hidden flex flex-col">
      
      {/* Header Area with White Background */}
      <div className="bg-[var(--bg-section)] pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-xs font-sans tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-text)] leading-tight font-light">
              We Offer a <span className="italic text-[var(--color-text-muted)] mt-2 inline-block">Wide</span> <br />
              Variety of IT Services
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Cards Area with Matching Background */}
      <div className="bg-[var(--bg-soft)] py-8 pb-12">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 px-2 mt-10 text-center items-stretch relative z-20">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            
            // Define sliding motion based on the column index (0 = left, 1 = middle, 2 = right)
            // Assuming a 3-column layout on desktop
            const columnIndex = index % 3;
            
            let initialProps = { opacity: 0 };
            
            if (columnIndex === 0) {
              // Left cards: Slide from the left
              initialProps.x = -100;
              initialProps.y = 0;
            } else if (columnIndex === 2) {
              // Right cards: Slide from the right
              initialProps.x = 100;
              initialProps.y = 0;
            } else {
              // Middle cards: Slide from below
              initialProps.x = 0;
              initialProps.y = 100;
            }

            // On mobile view (1 column), they often just stack. 
            // Framer motion uses standard window sizes to adapt, but adding 
            // a custom viewport trigger handles different scroll points well.

            return (
              <motion.div 
                key={index}
                initial={initialProps}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ y: -5, scale: 1.03 }}
                viewport={{ once: false, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.5, ease: "linear" }}
                style={{ transitionProperty: "border-color, box-shadow, background-color, color", transitionDuration: "300ms", transitionTimingFunction: "ease-in-out" }}
                className="group p-10 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-xl overflow-hidden flex flex-col h-full items-center text-center relative"
              >
                <div className="flex flex-col items-center space-y-6">
                  {/* Icon Container */}
                  <div className="p-4 rounded-full bg-[var(--color-bg)] text-[var(--color-text)] group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:border-[var(--color-primary)] border border-gray-100 transition-all duration-300">
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold leading-snug text-[var(--color-text)] transition-colors duration-300 whitespace-pre-line">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                    {service.description.replace(/\n|,/g, ' ')}
                  </p>
                </div>

                <div className="mt-auto pt-6">
                  <Link to="/services" className="text-blue-600 font-medium hover:underline text-sm transition-all duration-300">
                    Learn more &rarr;
                  </Link>
                </div>
              </motion.div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
