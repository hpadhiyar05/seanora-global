import { Suspense, lazy } from 'react';
import SEO, { ORGANIZATION, buildBreadcrumbSchema, buildOrganizationSchema } from '../../components/seo/SEO';
import PageLoader from '../../components/ui/PageLoader';

const ContactSection = lazy(() => import('./components/ContactSection'));

const Contact = () => {
  const contactSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Seanora Global',
      description: 'Contact Seanora Global for IT consulting, cloud services, and custom technology solutions.',
      url: 'https://seanoraglobal.com/contact',
    },
    buildOrganizationSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: ORGANIZATION.email,
      telephone: ORGANIZATION.telephone,
      areaServed: 'Global',
      availableLanguage: ['en'],
    },
    buildBreadcrumbSchema([
      { name: 'Home', item: 'https://seanoraglobal.com/' },
      { name: 'Contact', item: 'https://seanoraglobal.com/contact' },
    ]),
  ];

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Seanora Global for inquiries, support, or a consultation on your next technology initiative."
        path="/contact"
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
