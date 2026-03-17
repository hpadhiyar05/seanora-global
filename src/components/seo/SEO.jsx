import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Seanora Global';
const DEFAULT_TITLE = 'A Legacy of Trust, A Future of Excellence';
const DEFAULT_DESCRIPTION =
    'Seanora Global — A Legacy of Trust, A Future of Excellence. We help businesses scale with IT consulting, cloud solutions, system integration, and custom software development.';
const DEFAULT_OG_IMAGE_PATH = '/og-image.jpg';

const getSiteUrl = () => {
    const envSiteUrl = import.meta.env.VITE_SITE_URL;
    if (envSiteUrl) return envSiteUrl.replace(/\/+$/, '');

    if (typeof window !== 'undefined' && window.location?.origin) {
        return window.location.origin.replace(/\/+$/, '');
    }

    return 'https://seanoraglobal.com';
};

const toAbsoluteUrl = (siteUrl, inputPath = '/') => {
    const normalizedPath = inputPath.startsWith('/') ? inputPath : `/${inputPath}`;
    return new URL(normalizedPath, siteUrl).toString();
};

const SEO = ({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    path,
    image = DEFAULT_OG_IMAGE_PATH,
    type = 'website',
    robots = 'index,follow',
    keywords = [],
    jsonLd = [],
}) => {
    const location = useLocation();
    const siteUrl = getSiteUrl();
    const pagePath = path || location.pathname || '/';
    const canonicalUrl = toAbsoluteUrl(siteUrl, pagePath);
    const imageUrl = image.startsWith('http') ? image : toAbsoluteUrl(siteUrl, image);
    const pageTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const keywordsContent = Array.isArray(keywords) ? keywords.filter(Boolean).join(', ') : keywords;

    return (
        <Helmet>
            <html lang="en" />
            <title>{pageTitle}</title>
            <meta name="description" content={description} />
            {keywordsContent ? <meta name="keywords" content={keywordsContent} /> : null}
            <meta name="robots" content={robots} />
            <meta name="googlebot" content={robots} />
            <meta name="theme-color" content="#ffffff" />
            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={imageUrl} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {jsonLd.map((schema, index) => (
                <script key={`jsonld-${index}`} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
