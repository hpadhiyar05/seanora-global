import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';

// Lazy loaded pages
const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const Services = lazy(() => import('../pages/Services/Services'));
const Careers = lazy(() => import('../pages/Careers/Careers'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const JobDetail = lazy(() => import('../pages/Careers/JobDetail'));
const PrivacyPolicy = lazy(() => import('../pages/Legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('../pages/Legal/TermsOfService'));

// Branded loading fallback used for route-level lazy chunks
const PageLoader = () => (
  <div className="min-h-screen w-full flex items-center justify-center bg-[#F9FAF8] relative overflow-hidden">
    <div className="absolute left-0 top-1/2 w-[520px] h-[520px] bg-[#Eef7fb] rounded-full blur-[100px] opacity-90 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute right-0 bottom-0 w-[520px] h-[520px] bg-[#Fdfae8] rounded-full blur-[100px] opacity-90 translate-x-1/3 translate-y-1/4"></div>

    <div className="relative z-10 flex flex-col items-center gap-6">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-black/10"></div>
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#1B1D1E] border-r-[#4F46E5] animate-spin"></div>
        <div className="absolute inset-[10px] rounded-full bg-white/80 backdrop-blur-sm border border-black/5"></div>
      </div>

      <div className="text-center">
        <p className="text-[12px] tracking-[0.24em] uppercase text-[#1B1D1E]/45 font-semibold">
          Loading Experience
        </p>
        <p className="mt-2 text-[15px] text-[#1B1D1E]/70 font-medium">
          Preparing your next page
        </p>
      </div>

      <div className="flex items-center gap-2" aria-hidden="true">
        <span className="w-2 h-2 rounded-full bg-[#1B1D1E]/60 animate-bounce [animation-delay:-0.2s]"></span>
        <span className="w-2 h-2 rounded-full bg-[#1B1D1E]/40 animate-bounce [animation-delay:-0.1s]"></span>
        <span className="w-2 h-2 rounded-full bg-[#1B1D1E]/60 animate-bounce"></span>
      </div>
    </div>
  </div>
);

const AppRouter = () => {
  return (
    <BrowserRouter>
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
};

export default AppRouter;
