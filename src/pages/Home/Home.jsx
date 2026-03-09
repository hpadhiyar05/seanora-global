import SEO from '../../components/seo/SEO';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';

const Home = () => {
  return (
    <>
      <SEO title="Home" description="Welcome to Seanora Global." />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Clients />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default Home;
