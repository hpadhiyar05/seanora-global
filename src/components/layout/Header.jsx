

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import logo from '../../assets/logos/logo_1.webp';

const Header = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    const isHome = location.pathname === '/';
    const isDarkHero = location.pathname === '/' && !isScrolled;

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    const menuVariants = {
        closed: { opacity: 0, y: '-100%', transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
        open: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    };
    const linkContainerVariants = {
        closed: { opacity: 0 },
        open: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.18 } },
    };
    const linkVariants = {
        closed: { opacity: 0, y: 16 },
        open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    };

    return (
        <>
            {/* ══════════════════════════════════════════════════
          HEADER BAR
      ══════════════════════════════════════════════════ */}
            <header
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/96 backdrop-blur-md border-b border-black/[0.08] shadow-[0_1px_16px_rgba(0,0,0,0.07)]'
                        : isDarkHero
                            ? 'bg-transparent border-b border-transparent'
                            : 'bg-white border-b border-black/[0.06]'
                }`}
            >
                <div className="max-w-[1180px] mx-auto px-6 lg:px-10 h-[74px] flex items-center justify-between gap-8">
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Seanora Global home"
                        className="flex items-center gap-2 shrink-0 group"
                    >
                        <img
                            src={logo}
                            alt="Seanora Global"
                            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                            loading="eager"
                            decoding="async"
                        />
                    </Link>

                    {/* ── Desktop Nav ── */}
                    <nav className="hidden lg:flex items-center" aria-label="Primary navigation" onMouseLeave={() => setHoveredLink(null)}>
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            const isHovered = hoveredLink === link.name;

                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onMouseEnter={() => setHoveredLink(link.name)}
                                    className="relative px-4 py-2 text-[15px] font-medium select-none transition-colors duration-150"
                                    style={{
                                        color: isActive
                                            ? (isDarkHero ? 'rgba(255,255,255,1)' : '#111827')
                                            : isHovered
                                                ? (isDarkHero ? 'rgba(255,255,255,1)' : '#111827')
                                                : (isDarkHero ? 'rgba(255,255,255,0.70)' : '#6B7280'),
                                    }}
                                >
                                    {/* Hover background */}
                                    <AnimatePresence>
                                        {isHovered && (
                                            <motion.span
                                                layoutId="hov-bg"
                                                initial={{ opacity: 0, scale: 0.92 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.92 }}
                                                transition={{ duration: 0.14, ease: 'easeOut' }}
                                                className={`absolute inset-0 rounded-lg z-0 ${isDarkHero ? 'bg-white/10' : 'bg-[#F3F4F6]'}`}
                                            />
                                        )}
                                    </AnimatePresence>

                                    {/* Active underline */}
                                    {isActive && (
                                        <motion.span
                                            layoutId="active-line"
                                            className="absolute bottom-[3px] left-3 right-3 h-[2px] rounded-full bg-[#1E5AA5] z-0"
                                            transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                                        />
                                    )}

                                    <span className="relative z-10">{link.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* ── Right: CTA + hamburger ── */}
                    <div className="flex items-center gap-3 shrink-0">
                        {/* CTA button — desktop, outlined pill */}
                        <Link
                            to="/contact"
                            className={`hidden lg:inline-flex items-center gap-2 px-5 py-[9px] rounded-full border text-[13.5px] font-semibold transition-all duration-200 group ${
                                isDarkHero
                                    ? 'border-white/40 text-white bg-transparent hover:bg-white/10'
                                    : 'border-[#1E5AA5] text-[#1E5AA5] bg-transparent hover:bg-[#1E5AA5] hover:text-white'
                            }`}
                        >
                            Get in touch
                            <ArrowRight
                                className="w-[14px] h-[14px] transition-transform duration-200 group-hover:translate-x-0.5"
                                strokeWidth={2.5}
                            />
                        </Link>

                        {/* Hamburger — mobile */}
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-[#F3F4F6] hover:bg-[#E9EAEC] transition-colors duration-200"
                        >
                            <div className="w-[15px] h-[11px] relative flex flex-col justify-between">
                                <span
                                    className={`block h-[1.5px] w-full bg-[#111827] rounded-full origin-center transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[4.75px]' : ''}`}
                                />
                                <span
                                    className={`block h-[1.5px] w-full bg-[#111827] rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`}
                                />
                                <span
                                    className={`block h-[1.5px] w-full bg-[#111827] rounded-full origin-center transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[4.75px]' : ''}`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* ══════════════════════════════════════════════════
          MOBILE MENU
      ══════════════════════════════════════════════════ */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 z-40 bg-white flex flex-col pt-[74px] lg:hidden"
                    >
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EFF6FF]/50 rounded-full blur-[130px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full max-w-[440px] mx-auto w-full px-6 pt-6 pb-10">
                            <motion.nav variants={linkContainerVariants} className="flex flex-col" aria-label="Mobile navigation">
                                {navLinks.map((link, i) => {
                                    const isActive = location.pathname === link.path;
                                    return (
                                        <motion.div key={link.name} variants={linkVariants}>
                                            <Link
                                                to={link.path}
                                                className="group flex items-center justify-between py-4 border-b border-[#F3F4F6]"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[11px] font-semibold text-[#D1D5DB] tabular-nums w-5 shrink-0">
                                                        0{i + 1}
                                                    </span>
                                                    <span
                                                        className={`text-[26px] font-serif font-light tracking-tight transition-colors duration-200 ${
                                                            isActive ? 'text-[#111827]' : 'text-[#9CA3AF] group-hover:text-[#111827]'
                                                        }`}
                                                    >
                                                        {link.name}
                                                    </span>
                                                </div>
                                                <div
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                                                        isActive
                                                            ? 'bg-[#1E5AA5] text-white'
                                                            : 'bg-[#F3F4F6] text-[#9CA3AF] group-hover:bg-[#111827] group-hover:text-white'
                                                    }`}
                                                >
                                                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                                                </div>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </motion.nav>

                            {/* Footer */}
                            <motion.div variants={linkVariants} className="mt-auto pt-8 flex items-end justify-between">
                                <div>
                                    <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#9CA3AF] mb-1.5">
                                        Get in touch
                                    </p>
                                    <a
                                        href="mailto:info@seanoraglobal.com"
                                        className="text-[14px] font-medium text-[#111827] hover:text-[#1E5AA5] transition-colors duration-200"
                                    >
                                        info@seanoraglobal.com
                                    </a>
                                </div>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1E5AA5] text-white text-[13px] font-semibold hover:bg-[#174F94] transition-colors duration-200 shrink-0"
                                >
                                    Contact
                                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
