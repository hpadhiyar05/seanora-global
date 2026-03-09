import { motion } from 'framer-motion';
import Accordion from '../../../components/ui/Accordion';

const faqItems = [
  {
    question: 'What platforms do you develop mobile apps for?',
    answer: 'We develop mobile apps for both iOS and Android platforms.',
  },
  {
    question: 'Are your training programs suitable for beginners?',
    answer: 'Yes, we have training programs designed for all skill levels, from beginners to advanced professionals.',
  },
  {
    question: 'Can you redesign an existing website?',
    answer: 'Yes, we offer comprehensive redesign services to enhance the look, functionality, and user experience of your existing website.',
  },
  {
    question: 'What types of IT training programs do you offer?',
    answer: 'We offer a range of training programs covering topics such as cybersecurity, cloud computing, software development, and IT project management.',
  },
  {
    question: 'What types of systems do you integrate?',
    answer: 'We integrate a variety of systems, including CRM, ERP, and other enterprise software solutions to ensure seamless operation.',
  },
  {
    question: 'What recruitment services do you provide?',
    answer: 'We offer Recruitment Process Outsourcing (RPO), Business Process Outsourcing (BPO), and staffing services to help you find the right talent for your business needs.',
  },
  {
    question: 'Which IT products do you resell?',
    answer: 'We resell a wide range of IT products, including hardware, software, and networking equipment from leading brands.',
  },
  {
    question: 'How can outsourcing benefit my business?',
    answer: 'Outsourcing can help reduce costs, increase efficiency, and allow you to focus on core business operations by leveraging specialized expertise and resources.',
  },
  {
    question: 'What technical professional services do you offer?',
    answer: 'Our services include IT consulting, network setup and maintenance, technical support, and managed IT services.',
  },
  {
    question: 'What cloud computing services do you offer?',
    answer: 'We provide cloud migration, infrastructure management, and SaaS (Software as a Service) solutions tailored to your business needs.',
  },
  {
    question: 'How can your technical services benefit my business?',
    answer: 'Our technical services ensure your IT infrastructure is robust, secure, and optimized for performance, allowing you to focus on your core business activities.',
  },
  {
    question: 'How do you ensure data security in the cloud?',
    answer: 'We implement advanced security measures, including encryption, access controls, and regular security audits, to protect your data in the cloud.',
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-[var(--color-bg)] relative overflow-hidden">
      
      <div className="container mx-auto px-4 lg:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="text-xs font-sans tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-4 block">
            Read More
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-text)] font-light leading-tight mb-8">
            Frequently Asked <br className="hidden md:block" />
            Questions <span className="relative inline-block font-semibold">
              <span className="relative z-10 italic">(FAQ)</span>
              <span className="absolute bottom-2 md:bottom-3 left-0 w-full h-[40%] bg-[var(--color-primary)]/80 -z-10 rounded-sm"></span>
            </span>
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] font-light leading-relaxed">
            Find answers to the most commonly asked questions about our services, methodologies, and expertise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <Accordion 
            items={faqItems} 
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-start relative z-10" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
