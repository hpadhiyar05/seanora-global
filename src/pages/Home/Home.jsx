import { Suspense, lazy } from 'react';
import SEO, { buildOrganizationSchema, buildWebsiteSchema } from '../../components/seo/SEO';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';

// Lazy load heavy/below-the-fold components
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ContactCTA = lazy(() => import('./components/ContactCTA'));

const Home = () => {
  const homeSchemas = [
    buildOrganizationSchema(),
    buildWebsiteSchema(),
  ];

  return (
    <>
      <SEO
        title="Home"
        description="Seanora Global delivers IT consulting, cloud solutions, system integration, and custom development to help businesses grow with confidence."
        path="/"
        jsonLd={homeSchemas}
      />
      <Hero />
      <Clients />
      <Services />
      
      <Suspense fallback={<div className="h-64 flex items-center justify-center"><div className="w-6 h-6 rounded-full border-2 border-black/10 border-t-[#1B1D1E] animate-spin"></div></div>}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<div className="h-64 flex items-center justify-center"><div className="w-6 h-6 rounded-full border-2 border-black/10 border-t-[#1B1D1E] animate-spin"></div></div>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="w-6 h-6 rounded-full border-2 border-black/10 border-t-[#1B1D1E] animate-spin"></div></div>}>
        <ContactCTA />
      </Suspense>
    </>
  );
};

export default Home;
