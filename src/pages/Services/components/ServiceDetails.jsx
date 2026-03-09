import { motion } from 'framer-motion';
import { MonitorSmartphone, GraduationCap, Server, Users, Briefcase, Cloud } from 'lucide-react';

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Mobile & Website Design and Development',
    description: 'Create engaging and user-friendly digital experiences with our mobile and website design and development services. Our team of skilled designers and developers works closely with you to build intuitive mobile apps and websites that resonate with your audience and drive business growth.',
    bullets: [
      'Custom mobile app development',
      'Responsive website design',
      'User experience (UX) optimization',
      'E-commerce solutions'
    ]
  },
  {
    icon: GraduationCap,
    title: 'IT Training',
    description: 'Stay ahead of the curve with Seanora’s comprehensive IT training programs. We provide your team with the knowledge and skills needed to leverage the latest technologies and best practices. Our training sessions are designed to be practical, interactive, and tailored to your specific business needs.',
    bullets: [
      'Software and application training',
      'Cybersecurity awareness',
      'Cloud technology training',
      'Custom IT workshops'
    ]
  },
  {
    icon: Server,
    title: 'System Integration & IT Reseller',
    description: 'Achieve seamless operations with our system integration services and high-quality IT products. We ensure that all your systems work together harmoniously, enhancing productivity and efficiency. As a trusted IT reseller, we offer a wide range of reliable IT products to meet your business requirements.',
    bullets: [
      'System integration services',
      'Hardware and software procurement',
      'Network setup and management',
      'IT infrastructure solutions'
    ]
  },
  {
    icon: Users,
    title: 'IT Services and IT Consulting',
    description: 'Optimize your technology investments with our IT services and consulting. Our IT services provide you with the technical support needed to maintain smooth operations, while our IT consulting offers strategic guidance to help you make informed decisions and drive business growth.',
    bullets: [
      'Technical support and troubleshooting',
      'IT strategy development',
      'Technology assessment and planning',
      'Business process optimization'
    ]
  },
  {
    icon: Briefcase,
    title: 'Technical Professional Services',
    description: 'Benefit from our expert consulting, implementation, and maintenance services. Our technical professionals are dedicated to delivering high-quality services that meet your specific needs and ensure the long-term success of your IT projects.',
    bullets: [
      'IT project management',
      'System implementation and migration',
      'Maintenance and support services',
      'Custom IT solutions'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Computing & Security',
    description: 'Secure and scalable, our cloud computing and security solutions are designed to protect your data and IT infrastructure. We help you leverage the power of the cloud while ensuring robust security measures are in place to safeguard your business.',
    bullets: [
      'Cloud migration and management',
      'Data backup and disaster recovery',
      'Network and data security',
      'Compliance and risk management'
    ]
  }
];

const ServiceDetails = () => {
  return (
    <section className="py-24 bg-[var(--color-bg)] text-left">
      <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isDark = index === 1;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`group flex flex-col p-10 rounded-2xl border transition-all duration-500 hover:-translate-y-1 relative overflow-hidden ${
                  isDark 
                  ? 'bg-[#050505] border-[#1a1a1a] shadow-2xl hover:border-[var(--color-primary)]/50' 
                  : 'bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-text-subtle)] shadow-sm hover:shadow-xl'
                }`}
              >
                
                <div className={`w-14 h-14 mb-8 rounded-full flex items-center justify-center border transition-all duration-500 relative z-10 group-hover:scale-110 ${
                  isDark
                  ? 'bg-white/5 text-white border-white/10 group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)]'
                  : 'bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)] group-hover:border-[var(--color-text-subtle)]'
                }`}>
                  <Icon className="w-6 h-6" strokeWidth={1} />
                </div>
                
                <h3 className={`text-2xl font-serif mb-6 transition-colors duration-300 relative z-10 ${
                  isDark ? 'text-white' : 'text-[var(--color-text)]'
                }`}>
                  {service.title}
                </h3>
                
                <div className={`w-8 h-[1px] mb-6 scale-x-75 group-hover:scale-x-150 transition-transform duration-500 origin-left ${
                  isDark ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-text-subtle)]'
                }`}></div>
                
                <p className={`leading-relaxed mb-8 relative z-10 font-light flex-grow ${
                  isDark ? 'text-white/70' : 'text-[var(--color-text-muted)]'
                }`}>
                  {service.description}
                </p>

                <div className="mt-auto relative z-10">
                  <ul className={`space-y-4 pt-6 border-t ${
                    isDark ? 'border-white/10' : 'border-[var(--color-border)]'
                  }`}>
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className={`flex items-start text-sm font-light ${
                        isDark ? 'text-white/60' : 'text-[var(--color-text-muted)]'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0 ${
                          isDark ? 'bg-[var(--color-primary)] opacity-80' : 'bg-[var(--color-text-subtle)] opacity-50'
                        }`}></span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
