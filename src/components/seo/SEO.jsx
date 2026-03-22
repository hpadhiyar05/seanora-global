/* eslint-disable react-refresh/only-export-components */
import { useLocation } from 'react-router-dom';

export const SITE_NAME = 'Seanora Global';
export const SITE_URL = 'https://seanoraglobal.com';
export const DEFAULT_OG_IMAGE_PATH = '/og-image.svg';
export const ORGANIZATION = {
    name: SITE_NAME,
    legalName: 'Seanora Global',
    url: SITE_URL,
    email: 'info@seanoraglobal.com',
    telephone: '+1-325-667-0125',
    logo: `${SITE_URL}/logo_1.webp`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE_PATH}`,
    sameAs: ['https://www.linkedin.com/company/seanora-global/'],
    address: {
        '@type': 'PostalAddress',
        streetAddress: '30 N Gould St Ste R',
        addressLocality: 'Sheridan',
        addressRegion: 'WY',
        postalCode: '82801',
        addressCountry: 'US',
    },
    contactPoint: [
        {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'info@seanoraglobal.com',
            telephone: '+1-325-667-0125',
            areaServed: 'US',
            availableLanguage: ['en'],
        },
        {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: 'info@seanoraglobal.com',
            telephone: '+1-325-667-0125',
            areaServed: 'Global',
            availableLanguage: ['en'],
        },
    ],
};

const DEFAULT_TITLE = 'A Legacy of Trust, A Future of Excellence';
const DEFAULT_DESCRIPTION =
    'Seanora Global — A Legacy of Trust, A Future of Excellence. We help businesses scale with IT consulting, cloud solutions, system integration, and custom software development.';

export const getSiteUrl = () => {
    const envSiteUrl = import.meta.env.VITE_SITE_URL;
    if (envSiteUrl) return envSiteUrl.replace(/\/+$/, '');

    if (typeof window !== 'undefined' && window.location?.origin) {
        return window.location.origin.replace(/\/+$/, '');
    }

    return SITE_URL;
};

export const toAbsoluteUrl = (siteUrl, inputPath = '/') => {
    const normalizedPath = inputPath.startsWith('/') ? inputPath : `/${inputPath}`;
    return new URL(normalizedPath, siteUrl).toString();
};

export const buildOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    ...ORGANIZATION,
});

export const buildWebsiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
    },
});

export const buildBreadcrumbSchema = (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.item,
    })),
});

export const buildServiceSchema = ({
    name,
    description,
    path,
    serviceType,
    areaServed = 'Global',
}) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType,
    areaServed,
    provider: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
    },
});

const SEO = ({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    path,
    image = DEFAULT_OG_IMAGE_PATH,
    type = 'website',
    robots = 'index,follow',
    jsonLd = [],
}) => {
    const location = useLocation();
    const siteUrl = getSiteUrl();
    const pagePath = path || location.pathname || '/';
    const canonicalUrl = toAbsoluteUrl(siteUrl, pagePath);
    const imageUrl = image.startsWith('http') ? image : toAbsoluteUrl(siteUrl, image);
    const pageTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    return (
        <>
            <title>{pageTitle}</title>
            <meta name="description" content={description} />
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
        </>
    );
};

export default SEO;
