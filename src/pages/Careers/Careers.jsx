import { Suspense, lazy } from 'react';
import SEO, { buildBreadcrumbSchema } from '../../components/seo/SEO';
import PageLoader from '../../components/ui/PageLoader';

const CareersBoard = lazy(() => import('./components/CareersBoard'));

const Careers = () => {
  const careersSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Careers at Seanora Global',
      description: 'Explore open positions at Seanora Global and grow your career with an innovation-driven team.',
      url: 'https://seanoraglobal.com/careers',
    },
    buildBreadcrumbSchema([
      { name: 'Home', item: 'https://seanoraglobal.com/' },
      { name: 'Careers', item: 'https://seanoraglobal.com/careers' },
    ]),
  ];

  return (
    <>
      <SEO
        title="Careers | Be Part of Our Mission"
        description="Join Seanora Global and help build impactful technology solutions. Browse current opportunities across teams."
        path="/careers"
        jsonLd={careersSchema}
      />
      <Suspense fallback={<PageLoader />}>
        <CareersBoard />
      </Suspense>
    </>
  );
};

export default Careers;
