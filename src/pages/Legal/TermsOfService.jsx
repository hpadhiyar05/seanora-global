import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/ui/Breadcrumb';
import { AnimatedHeading, AnimatedText } from '../../components/ui/AnimatedHeading';

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.08 },
  }),
};

const TermsOfService = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      body: 'By accessing or using the Seanora Global website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.',
    },
    {
      title: '2. Use of the Website',
      body: 'You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not misuse our website by knowingly introducing viruses or other technically harmful material.',
    },
    {
      title: '3. Intellectual Property',
      body: 'All content on this website, including text, graphics, logos, and images, is the property of Seanora Global and is protected by applicable intellectual property laws. You may not reproduce or redistribute our content without express written permission.',
    },
    {
      title: '4. Limitation of Liability',
      body: 'Seanora Global shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.',
    },
    {
      title: '5. Changes to Terms',
      body: 'We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of the website constitutes acceptance of the revised terms.',
    },
    {
      title: '6. Contact Us',
      body: null,
    },
  ];

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-white">
      <div className="container mx-auto px-4 lg:px-12 max-w-3xl">
        <Breadcrumb crumbs={[{ label: 'Terms of Service' }]} />

        <AnimatedHeading as="h1" className="text-display-1 mt-6 mb-4">
          <AnimatedText text="Terms of Service" />
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[13px] text-[#6B6B6B] mb-10"
        >
          Last updated: March 2025
        </motion.p>

        <div className="prose prose-neutral max-w-none space-y-8 text-[15px] text-[#1B1D1E]/75 leading-relaxed font-light">
          {sections.map((s, i) => (
            <motion.section
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={sectionFade}
            >
              <h2 className="text-[20px] font-sans font-semibold text-[#1B1D1E] mb-3">
                {s.title}
              </h2>
              {s.body ? (
                <p>{s.body}</p>
              ) : (
                <p>
                  For questions regarding these terms, please contact us at{' '}
                  <a href="mailto:info@seanoraglobal.com" className="text-[#1E5AA5] hover:underline">
                    info@seanoraglobal.com
                  </a>.
                </p>
              )}
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-black/5"
        >
          <Link to="/" className="text-[13px] font-medium text-[#6B6B6B] hover:text-[#1E5AA5] transition-colors">
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;
