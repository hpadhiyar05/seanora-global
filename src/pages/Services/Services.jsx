import SEO from '../../components/seo/SEO';
import ServicesHero from './components/ServicesHero';
import ServiceDetails from './components/ServiceDetails';
import WhyChooseAlenotech from './components/WhyChooseAlenotech';

const Services = () => {
  return (
    <>
      <SEO title="Services" description="Explore the wide range of transformative IT services we offer at Alenotech Solutions." />
      <div className="flex flex-col">
        <ServicesHero />
        <ServiceDetails />
        <WhyChooseAlenotech />
      </div>
    </>
  );
};

export default Services;
