import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logos/logo_1.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const headerClasses = scrolled 
    ? 'bg-white/95 backdrop-blur-md py-0 shadow-lg border-b border-[var(--color-border)]' 
    : 'bg-white/90 backdrop-blur-sm py-0 border-b border-transparent shadow-sm';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${headerClasses}`}>
      <div className="px-6 md:px-12 lg:px-24 w-full mx-auto">
        <div className="flex items-center justify-between w-full h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group h-full py-2">
            <img src={logo} alt="Seanora Global" className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`text-sm font-bold tracking-wide transition-colors duration-500 ease-in-out relative group drop-shadow-sm ${
                    isActive ? 'text-[#f97316]' : 'text-[#0f172a]'
                  } hover:text-[#f97316]`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 right-0 h-[2px] bg-[#f97316] transition-all duration-500 ease-in-out origin-right ${
                    isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                  }`}></span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
