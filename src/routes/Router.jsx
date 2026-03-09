import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Careers from '../pages/Careers/Careers';
import Contact from '../pages/Contact/Contact';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
