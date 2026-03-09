import { Helmet } from 'react-helmet-async';

const SITE_NAME = "Senora Global";

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{`${title} | ${SITE_NAME}`}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEO;
