import { Suspense, lazy } from 'react';
import SEO from '../../components/seo/SEO';

const ContactSection = lazy(() => import('./components/ContactSection'));

const SectionLoader = () => (
  <div className="h-64 flex items-center justify-center">
    <div className="w-6 h-6 rounded-full border-2 border-black/10 border-t-[#1B1D1E] animate-spin"></div>
  </div>
);

const Contact = () => {
  const contactSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Seanora Global',
      description: 'Contact Seanora Global for IT consulting, cloud services, and custom technology solutions.',
    },
  ];

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Seanora Global for inquiries, support, or a consultation on your next technology initiative."
        path="/contact"
        keywords={['contact IT company', 'technology consultation', 'IT support', 'business inquiry']}
        jsonLd={contactSchema}
      />
      <div className="pb-0">
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </div>
    </>
  );
};

export default Contact;
