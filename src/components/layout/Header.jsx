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

  const isHome = location.pathname === '/';
  
  const headerClasses = (scrolled || !isHome)
    ? 'bg-white shadow-sm border-b border-gray-200 fixed' 
    : 'bg-transparent border-b border-transparent shadow-none absolute';

  return (
    <header className={`top-0 left-0 w-full z-50 transition-all duration-700 ${headerClasses}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="flex items-center justify-between w-full h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group py-4">
            <img src={logo} alt="Seanora Global" className="h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`text-sm transition-colors duration-200 ${
                    (scrolled || !isHome)
                      ? (isActive ? 'text-[#1E5AA5] font-medium' : 'text-gray-700 hover:text-[#1E5AA5]')
                      : (isActive ? 'text-white font-medium' : 'text-white hover:text-blue-300')
                  }`}
                >
                  {link.name}
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
