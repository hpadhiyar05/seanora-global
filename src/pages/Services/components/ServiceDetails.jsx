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

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ServiceDetails = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F9FAF8] text-left">
      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariant}
                className="group flex flex-col p-10 rounded-[24px] bg-white border border-black/5 hover:border-black/10 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                
                <div className="w-14 h-14 mb-8 rounded-full flex items-center justify-center bg-[#F3F3F3] text-[#1B1D1E] transition-all duration-500 relative z-10 group-hover:scale-110 group-hover:bg-[#1B1D1E] group-hover:text-white">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-serif mb-5 text-[#1B1D1E] transition-colors duration-300 relative z-10 leading-snug">
                  {service.title}
                </h3>
                
                <p className="leading-relaxed mb-8 relative z-10 font-light text-[#6B6B6B] flex-grow">
                  {service.description}
                </p>

                <div className="mt-auto relative z-10">
                  <ul className="space-y-4 pt-6 border-t border-black/5 relative">
                    <div className="absolute top-0 left-0 w-8 h-[1px] bg-black/10 transition-all duration-500 group-hover:w-full"></div>
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start text-[14.5px] font-light text-[#6B6B6B]">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0 bg-[#1B1D1E]/20 group-hover:bg-[#1B1D1E]/40 transition-colors duration-500"></span>
                        <span className="leading-relaxed group-hover:text-[#1B1D1E]/80 transition-colors duration-500">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;
