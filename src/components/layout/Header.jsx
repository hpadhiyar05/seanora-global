import { useState, useEffect } from 'react';
import { Moon, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logos/logo_1.png';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  // Mobile Menu Animation Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] // Custom refined ease curve
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const linkContainerVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 w-full z-50 py-2 lg:py-3 pointer-events-none flex justify-center px-4">
        <div 
          className={`pointer-events-auto flex items-center justify-between rounded-full px-4 lg:px-6 py-1.5 w-full max-w-[1000px] transition-all duration-300 ease-out relative z-50 ${
            isScrolled || isMobileMenuOpen
              ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-black/5' 
              : 'bg-transparent border border-transparent'
          }`}
        >
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group shrink-0"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Seanora Global home"
          >
            <img
              src={logo}
              alt="Seanora Global logo"
              className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              loading="eager"
              decoding="async"
            />
          </Link>
          
          {/* Main Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center bg-[#F3F3F3] rounded-full p-1 gap-1" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-white text-[#1B1D1E] shadow-sm' 
                      : 'text-[#6B6B6B] bg-transparent hover:text-[#1B1D1E]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions & Hamburger */}
          <div className="flex items-center shrink-0 gap-2">
            <button
              className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full transition-colors bg-[#F3F3F3] hover:bg-black/5"
              aria-label="Toggle color mode"
              type="button"
            >
              <Moon className="w-4 h-4 text-[#1B1D1E]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full transition-colors bg-[#F3F3F3] hover:bg-black/5 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              type="button"
            >
              <div className="w-4 h-4 relative flex items-center justify-center">
                <span className={`absolute h-[1.5px] w-full bg-[#1B1D1E] rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
                <span className={`absolute h-[1.5px] w-full bg-[#1B1D1E] rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute h-[1.5px] w-full bg-[#1B1D1E] rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-[#F9FAF8] flex flex-col pt-32 px-6 lg:hidden"
          >
            {/* Background Decorative Blur */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#Eef7fb] rounded-full blur-[100px] opacity-70 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

            <div className="container mx-auto h-full flex flex-col relative z-10">
              <motion.nav 
                variants={linkContainerVariants}
                className="flex flex-col gap-6"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div key={link.name} variants={linkVariants}>
                      <Link 
                        to={link.path}
                        className="group flex flex-col"
                      >
                        <div className="flex items-center justify-between pb-4 border-b border-black/5">
                          <span className={`text-[32px] md:text-[40px] tracking-tight transition-colors duration-300 ${
                            isActive ? 'text-[#1B1D1E] font-medium' : 'text-[#1B1D1E]/60 font-light group-hover:text-[#1B1D1E]'
                          }`}>
                            {link.name}
                          </span>
                          {/* Animated Arrow */}
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isActive ? 'bg-[#1B1D1E] text-white' : 'bg-transparent text-[#1B1D1E]/30 group-hover:bg-[#1B1D1E]/5 group-hover:text-[#1B1D1E]'
                          }`}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isActive ? '' : '-rotate-45 transition-transform duration-300 group-hover:rotate-0'}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* Mobile Menu Footer */}
              <motion.div 
                variants={linkVariants}
                className="mt-auto pb-12 pt-8 flex items-center justify-between border-t border-black/10"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] uppercase tracking-wider text-[#1B1D1E]/40 font-medium">Get in touch</span>
                  <a href="mailto:info@seanoraglobal.com" className="text-[15px] text-[#1B1D1E] font-medium hover:text-[#4F46E5] transition-colors">
                    info@seanoraglobal.com
                  </a>
                </div>
                
                <button
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-black/10 transition-colors bg-white hover:bg-[#F3F3F3]"
                  aria-label="Toggle color mode"
                  type="button"
                >
                  <Moon className="w-5 h-5 text-[#1B1D1E]" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
