import { Globe, Mail, Phone, Linkedin, Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[var(--footer-bg)] border-t border-[var(--color-border)] pt-20 pb-10 mt-auto relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--primary)]/10 blur-[100px] rounded-full pointer-events-none translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-full border border-[var(--footer-text)]/20 flex items-center justify-center text-[var(--footer-text)] font-serif italic text-xl group-hover:border-[var(--footer-link-hover)] transition-colors duration-500">
                S
              </div>
              <span className="font-serif text-xl tracking-wide text-[var(--footer-text)] uppercase text-xs">
                Seanora Global
              </span>
            </Link>
            <p className="text-[var(--footer-text)]/70 font-light leading-relaxed mb-8 text-sm">
              Empowering businesses with transformative IT solutions, robust cloud systems, and cutting-edge software development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--footer-text)]/20 flex items-center justify-center text-[var(--footer-text)]/70 hover:border-[var(--footer-link-hover)] hover:text-[var(--footer-link-hover)] transition-all duration-300">
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--footer-text)]/20 flex items-center justify-center text-[var(--footer-text)]/70 hover:border-[var(--footer-link-hover)] hover:text-[var(--footer-link-hover)] transition-all duration-300">
                <Twitter className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--footer-text)]/20 flex items-center justify-center text-[var(--footer-text)]/70 hover:border-[var(--footer-link-hover)] hover:text-[var(--footer-link-hover)] transition-all duration-300">
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--footer-text)]/20 flex items-center justify-center text-[var(--footer-text)]/70 hover:border-[var(--footer-link-hover)] hover:text-[var(--footer-link-hover)] transition-all duration-300">
                <Linkedin className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-[0.1em] font-sans uppercase mb-6 text-[var(--footer-text)] pb-2 border-b border-[var(--footer-text)]/20 inline-block">Quick Links</h4>
            <ul className="space-y-4 font-light text-sm">
              <li>
                <Link to="/" className="text-[var(--footer-text)]/70 hover:text-[var(--footer-link-hover)] transition-colors flex items-center group">
                  <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 inline-block mr-0 group-hover:mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[var(--footer-text)]/70 hover:text-[var(--footer-link-hover)] transition-colors flex items-center group">
                  <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 inline-block mr-0 group-hover:mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[var(--footer-text)]/70 hover:text-[var(--footer-link-hover)] transition-colors flex items-center group">
                  <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 inline-block mr-0 group-hover:mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-[var(--footer-text)]/70 hover:text-[var(--footer-link-hover)] transition-colors flex items-center group">
                  <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 inline-block mr-0 group-hover:mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <span>Careers</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-sm tracking-[0.1em] font-sans uppercase mb-6 text-[var(--footer-text)] pb-2 border-b border-[var(--footer-text)]/20 inline-block">Services</h4>
            <ul className="space-y-4 font-light text-sm">
              <li className="text-[var(--footer-text)]/70 hover:text-[var(--footer-link-hover)] cursor-pointer transition-colors">Web Development</li>
              <li className="text-[var(--footer-text)]/70 hover:text-[var(--footer-link-hover)] cursor-pointer transition-colors">Cloud Computing</li>
              <li className="text-[var(--footer-text)]/70 hover:text-[var(--footer-link-hover)] cursor-pointer transition-colors">IT Consulting</li>
              <li className="text-[var(--footer-text)]/70 hover:text-[var(--footer-link-hover)] cursor-pointer transition-colors">System Integration</li>
              <li className="text-[var(--footer-text)]/70 hover:text-[var(--footer-link-hover)] cursor-pointer transition-colors">Cybersecurity</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm tracking-[0.1em] font-sans uppercase mb-6 text-[var(--footer-text)] pb-2 border-b border-[var(--footer-text)]/20 inline-block">Contact Info</h4>
            <ul className="space-y-5 font-light text-sm">
              <li className="flex items-start">
                <Globe className="w-4 h-4 text-[var(--footer-text)]/50 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-[var(--footer-text)]/70 leading-relaxed">
                  30 N Gould St Ste R<br />
                  Sheridan, WY 82801
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-[var(--footer-text)]/50 mr-3 flex-shrink-0" />
                <a href="tel:+12017331688" className="text-[var(--footer-text)]/70 hover:text-[var(--footer-link-hover)] transition-colors">
                  +1 201 733 1688
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-[var(--footer-text)]/50 mr-3 flex-shrink-0" />
                <a href="mailto:info@alenotechsolutions.com" className="text-[var(--footer-text)]/70 hover:text-[var(--footer-link-hover)] transition-colors">
                  info@alenotechsolutions.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--footer-text)]/50 font-light text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Seanora Global. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[var(--footer-text)]/50 font-light">
            <a href="#" className="hover:text-[var(--footer-text)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--footer-text)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
