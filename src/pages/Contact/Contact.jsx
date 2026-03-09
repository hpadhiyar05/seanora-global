import SEO from '../../components/seo/SEO';
import ContactSection from './components/ContactSection';

const Contact = () => {
  return (
    <>
      <SEO title="Contact Us" description="Get in touch with Alenotech Solutions for any inquiries, support, or consultation." />
      <div className="pt-24 pb-0">
        <ContactSection />
      </div>
    </>
  );
};

export default Contact;
