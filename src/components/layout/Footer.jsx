import { Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/logos/logo_1.webp';

const Footer = () => {
  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com', Icon: Facebook },
    { label: 'Twitter', href: 'https://x.com', Icon: Twitter },
    { label: 'Instagram', href: 'https://www.instagram.com', Icon: Instagram },
    { label: 'LinkedIn', href: 'https://www.linkedin.com', Icon: Linkedin },
  ];

  return (
    <footer className="bg-white border-t border-black/5 pt-20 pb-10 mt-auto relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-12 relative z-10 w-full flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24"
        >
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2 group mb-6 justify-self-start" aria-label="Seanora Global home">
              <img
                src={logo}
                alt="Seanora Global logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-[#1B1D1E]/40 font-medium leading-relaxed mb-2 text-[13px] max-w-[280px] italic">
              A Legacy of Trust, A Future of Excellence
            </p>
            <p className="text-[#1B1D1E]/40 font-medium leading-relaxed mb-8 text-[14px] max-w-[280px]">
              Empowering businesses with transformative IT solutions, robust cloud systems, and cutting-edge software development.
            </p>
            <div className="flex gap-4" aria-label="Social media links">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${label}`}
                  className="flex items-center justify-center text-[#1B1D1E]/40 hover:text-[#1E5AA5] transition-colors duration-300"
                >
                  <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[13px] font-sans mb-6 text-[#1B1D1E]/60 inline-block font-medium">Quick Links</h4>
            <ul className="space-y-4 font-medium text-[13px]">
              <li>
                <Link to="/" className="text-[#1B1D1E]/40 hover:text-[#1E5AA5] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#1B1D1E]/40 hover:text-[#1E5AA5] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#1B1D1E]/40 hover:text-[#1E5AA5] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-[#1B1D1E]/40 hover:text-[#1E5AA5] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div className="lg:col-span-2">
            <h4 className="text-[13px] font-sans mb-6 text-[#1B1D1E]/60 inline-block font-medium">Services</h4>
            <ul className="space-y-4 font-medium text-[13px]">
              <li>
                <Link to="/services" className="text-[#1B1D1E]/40 hover:text-[#1E5AA5] transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-[#1B1D1E]/40 hover:text-[#1E5AA5] transition-colors">Cloud Computing</Link>
              </li>
              <li>
                <Link to="/services" className="text-[#1B1D1E]/40 hover:text-[#1E5AA5] transition-colors">IT Consulting</Link>
              </li>
              <li>
                <Link to="/services" className="text-[#1B1D1E]/40 hover:text-[#1E5AA5] transition-colors">System Integration</Link>
              </li>
              <li>
                <Link to="/services" className="text-[#1B1D1E]/40 hover:text-[#1E5AA5] transition-colors">Cybersecurity</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-sans mb-6 text-[#1B1D1E]/60 inline-block font-medium">Contact Info</h4>
            <ul className="space-y-5 font-medium text-[13px]">
              <li className="flex items-start">
                <span className="text-[#1B1D1E]/40 leading-[1.6]">
                  30 N Gould St Ste R<br />
                  Sheridan, WY 82801, USA
                </span>
              </li>
              <li className="flex items-center">
                <a href="mailto:info@seanoraglobal.com" className="text-[#1B1D1E]/40 hover:text-[#1E5AA5] transition-colors">
                  info@seanoraglobal.com
                </a>
              </li>
              <li className="flex items-center">
                <a href="tel:+13256670125" className="text-[#1B1D1E]/40 hover:text-[#1E5AA5] transition-colors">
                  +1 325-667-0125
                </a>
              </li>
            </ul>
          </div>

        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-3 w-full"
        >
          <p className="text-[#1B1D1E]/40 font-medium text-[13px] text-center sm:text-left">
            &copy;{new Date().getFullYear()} Seanora Global. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-[#1B1D1E]/40 font-medium text-[13px] hover:text-[#1E5AA5] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[#1B1D1E]/40 font-medium text-[13px] hover:text-[#1E5AA5] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
