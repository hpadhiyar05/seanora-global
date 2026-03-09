import SEO from '../../components/seo/SEO';
import WhoWeAre from './components/WhoWeAre';
import WhyChooseUs from './components/WhyChooseUs';
import OurCommitment from './components/OurCommitment';
import FAQ from './components/FAQ';

const About = () => {
  return (
    <>
      <SEO title="About Us" description="Learn more about our company, journey, and our commitment to transformative IT solutions." />
      <div className="pt-24 pb-0">
        <WhoWeAre />
        <WhyChooseUs />
        <OurCommitment />
        <FAQ />
      </div>
    </>
  );
};

export default About;
