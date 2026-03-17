import { Suspense, lazy } from 'react';
import SEO from '../../components/seo/SEO';
import PageLoader from '../../components/ui/PageLoader';

const ContactSection = lazy(() => import('./components/ContactSection'));

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
        <Suspense fallback={<PageLoader />}>
          <ContactSection />
        </Suspense>
      </div>
    </>
  );
};

export default Contact;
