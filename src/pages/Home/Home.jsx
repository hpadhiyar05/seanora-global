import { Suspense, lazy } from 'react';
import SEO from '../../components/seo/SEO';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';

// Lazy load heavy/below-the-fold components
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ContactCTA = lazy(() => import('./components/ContactCTA'));

const Home = () => {
  const homeSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Seanora Global',
      email: 'info@seanoraglobal.com',
      telephone: '+1-325-667-0125',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '30 N Gould St Ste R',
        addressLocality: 'Sheridan',
        addressRegion: 'WY',
        postalCode: '82801',
        addressCountry: 'US',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Seanora Global',
    },
  ];

  return (
    <>
      <SEO
        title="Home"
        description="Seanora Global delivers IT consulting, cloud solutions, system integration, and custom development to help businesses grow with confidence."
        path="/"
        keywords={[
          'IT solutions',
          'IT consulting',
          'cloud services',
          'software development',
          'system integration',
        ]}
        jsonLd={homeSchemas}
      />
      <Hero />
      <Clients />
      <Services />
      
      <Suspense fallback={<div className="h-64 flex items-center justify-center"><div className="w-6 h-6 rounded-full border-2 border-black/10 border-t-[#1B1D1E] animate-spin"></div></div>}>
        <WhyChooseUs />
        <Testimonials />
        <ContactCTA />
      </Suspense>
    </>
  );
};

export default Home;
