import { Suspense, lazy } from 'react';
import SEO from '../../components/seo/SEO';
import ServicesHero from './components/ServicesHero';

// Lazy load off-screen components
const ServiceDetails = lazy(() => import('./components/ServiceDetails'));
const WhyChooseAlenotech = lazy(() => import('./components/WhyChooseAlenotech'));

const SectionLoader = () => (
  <div className="h-64 flex items-center justify-center">
    <div className="w-6 h-6 rounded-full border-2 border-black/10 border-t-[#1B1D1E] animate-spin"></div>
  </div>
);

const Services = () => {
  const servicesSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'IT Services and Consulting',
      provider: {
        '@type': 'Organization',
        name: 'Seanora Global',
      },
      areaServed: 'Global',
    },
  ];

  return (
    <>
      <SEO
        title="IT Services"
        description="Explore Seanora Global services including cloud computing, system integration, IT consulting, technical services, and digital product development."
        path="/services"
        keywords={[
          'IT services',
          'cloud computing',
          'IT consulting',
          'system integration',
          'technical services',
        ]}
        jsonLd={servicesSchema}
      />
      <div className="flex flex-col">
        <ServicesHero />
        <Suspense fallback={<SectionLoader />}>
          <ServiceDetails />
          <WhyChooseAlenotech />
        </Suspense>
      </div>
    </>
  );
};

export default Services;
