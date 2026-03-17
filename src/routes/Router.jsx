import { Suspense, lazy, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PageLoader from '../components/ui/PageLoader';

const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const Services = lazy(() => import('../pages/Services/Services'));
const Careers = lazy(() => import('../pages/Careers/Careers'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const JobDetail = lazy(() => import('../pages/Careers/JobDetail'));
const PrivacyPolicy = lazy(() => import('../pages/Legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('../pages/Legal/TermsOfService'));

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const AppRouter = () => (
    <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="careers" element={<Careers />} />
                    <Route path="careers/:id" element={<JobDetail />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="privacy" element={<PrivacyPolicy />} />
                    <Route path="terms" element={<TermsOfService />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Suspense>
    </BrowserRouter>
);

export default AppRouter;
