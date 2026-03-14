import { Suspense, lazy } from 'react';
import SEO from '../../components/seo/SEO';
import WhoWeAre from './components/WhoWeAre';

// Lazy load off-screen components
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const OurCommitment = lazy(() => import('./components/OurCommitment'));
const FAQ = lazy(() => import('./components/FAQ'));

const About = () => {
  const aboutSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Seanora Global',
      description:
        'Learn about Seanora Global, our mission, vision, and commitment to delivering transformative IT solutions.',
    },
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Seanora Global’s mission, vision, and journey in delivering transformative IT solutions for modern businesses."
        path="/about"
        keywords={['about us', 'IT company', 'technology partner', 'digital transformation']}
        jsonLd={aboutSchema}
      />
      <div className="pb-0">
        <WhoWeAre />
        <Suspense fallback={<div className="h-64 flex items-center justify-center"><div className="w-6 h-6 rounded-full border-2 border-black/10 border-t-[#1B1D1E] animate-spin"></div></div>}>
          <WhyChooseUs />
          <OurCommitment />
          <FAQ />
        </Suspense>
      </div>
    </>
  );
};

export default About;
