import { motion } from 'framer-motion';
import { Route, Target, Rocket } from 'lucide-react';

const cards = [
  {
    icon: Route,
    title: 'Our Journey',
    description: 'Established with a passion for technology and a vision for change, Seanora Global has grown from a small team to a powerhouse in the IT industry. Throughout our journey, we have remained steadfast in our commitment to delivering value-driven solutions that make a difference.',
  },
  {
    icon: Target,
    title: 'Our Vision',
    description: 'Our vision is to be a leading global provider of transformative IT solutions, recognized for our commitment to excellence, innovation, and customer satisfaction.',
  },
  {
    icon: Rocket,
    title: 'Our Mission',
    description: 'At Seanora Global, our mission is to deliver exceptional IT services that drive success for our clients. We strive to exceed expectations through our dedication to quality, reliability, and innovation in every project we undertake.',
  },
];

const WhoWeAre = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-xs font-sans tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-4 block">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-text)] font-light leading-tight mb-8">
            Transforming Technology, <span className="italic text-[var(--color-text-muted)]">Innovating</span> the Future
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] font-light leading-relaxed max-w-2xl mx-auto">
            Welcome to Seanora Global, your trusted partner in innovative IT solutions. We specialize in delivering cutting-edge technology services that empower businesses to thrive in today's digital landscape.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group p-10 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-text-subtle)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col items-center text-center h-full"
              >
                <div className="w-14 h-14 mb-8 rounded-full bg-white text-[var(--color-text)] flex items-center justify-center border border-[var(--color-border)] group-hover:border-[var(--color-text-subtle)] group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-6 h-6" strokeWidth={1} />
                </div>
                
                <h3 className="text-2xl font-serif text-[var(--color-text)] mb-4 transition-colors duration-300">
                  {card.title}
                </h3>
                
                <div className="w-8 h-[1px] bg-[var(--color-text-subtle)] mb-6 scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm font-light flex-grow">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
