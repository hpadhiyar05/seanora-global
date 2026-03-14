import { Suspense, lazy } from 'react';
import SEO from '../../components/seo/SEO';

const CareersBoard = lazy(() => import('./components/CareersBoard'));

const SectionLoader = () => (
  <div className="h-64 flex items-center justify-center">
    <div className="w-6 h-6 rounded-full border-2 border-black/10 border-t-[#1B1D1E] animate-spin"></div>
  </div>
);

const Careers = () => {
  const careersSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Careers at Seanora Global',
      description: 'Explore open positions at Seanora Global and grow your career with an innovation-driven team.',
    },
  ];

  return (
    <>
      <SEO
        title="Careers | Be Part of Our Mission"
        description="Join Seanora Global and help build impactful technology solutions. Browse current opportunities across teams."
        path="/careers"
        keywords={['IT jobs', 'tech careers', 'remote jobs', 'career opportunities']}
        jsonLd={careersSchema}
      />
      <Suspense fallback={<SectionLoader />}>
        <CareersBoard />
      </Suspense>
    </>
  );
};

export default Careers;
