import { Suspense, lazy } from 'react';
import SEO, { buildBreadcrumbSchema, buildServiceSchema } from '../../components/seo/SEO';
import ServicesHero from './components/ServicesHero';
import ServicesBanner from './components/ServicesBanner'

// Lazy load off-screen components
const ServiceDetails = lazy(() => import('./components/ServiceDetails'));
const WhyChooseSeanora = lazy(() => import('./components/WhyChooseSeanora'));

const SectionLoader = () => (
  <div className="h-64 flex items-center justify-center">
    <div className="w-6 h-6 rounded-full border-2 border-black/10 border-t-[#1B1D1E] animate-spin"></div>
  </div>
);

const Services = () => {
  const servicesSchema = [
    buildServiceSchema({
      name: 'IT Services',
      description:
        'Explore Seanora Global services including cloud computing, system integration, IT consulting, technical services, and digital product development.',
      path: '/services',
      serviceType: 'IT Services and Consulting',
    }),
    buildBreadcrumbSchema([
      { name: 'Home', item: 'https://seanoraglobal.com/' },
      { name: 'Services', item: 'https://seanoraglobal.com/services' },
    ]),
  ];

  return (
    <>
      <SEO
        title="IT Services"
        description="Explore Seanora Global services including cloud computing, system integration, IT consulting, technical services, and digital product development."
        path="/services"
        jsonLd={servicesSchema}
      />
      <div className="flex flex-col">
        <ServicesHero />
        <ServicesBanner /> 
        <Suspense fallback={<SectionLoader />}>
          <ServiceDetails />
          <WhyChooseSeanora />
        </Suspense>
      </div>
    </>
  );
};

export default Services;
