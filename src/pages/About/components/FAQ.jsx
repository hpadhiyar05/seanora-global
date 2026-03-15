import { motion } from 'framer-motion';
import Accordion from '../../../components/ui/Accordion';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

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
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      


      <div className="container mx-auto px-4 lg:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-16 max-w-3xl mx-auto"
        >
          <span className="text-xs font-sans tracking-[0.2em] text-[#6B6B6B] font-medium uppercase mb-4 block">
            Read More
          </span>
          <AnimatedHeading className="text-[2.5rem] md:text-[4rem] font-medium text-[#111827] leading-tight mb-8 tracking-tight">
            <AnimatedText text="Frequently Asked " />
            <AnimatedText text="Questions" className="text-[#1B1D1E]/65" />
          </AnimatedHeading>
          <p className="text-lg text-[#6B6B6B] font-light leading-relaxed">
            Find answers to the most commonly asked questions about our services, methodologies, and expertise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
        >
          <Accordion
            items={faqItems}
            className="w-full max-w-3xl mx-auto flex flex-col gap-3"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
