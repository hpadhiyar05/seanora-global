// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import logo from '../../assets/logos/logo_1.webp';

// const Header = () => {
//     const location = useLocation();
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [hoveredLink, setHoveredLink] = useState(null);

//     const isHome = location.pathname === '/';
//     const isDarkHero = location.pathname === '/' && !isScrolled;

//     useEffect(() => {
//         const onScroll = () => setIsScrolled(window.scrollY > 10);
//         window.addEventListener('scroll', onScroll, { passive: true });
//         return () => window.removeEventListener('scroll', onScroll);
//     }, []);

//     useEffect(() => {
//         document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
//         return () => {
//             document.body.style.overflow = 'unset';
//         };
//     }, [isMobileMenuOpen]);

//     useEffect(() => {
//         setIsMobileMenuOpen(false);
//     }, [location.pathname]);

//     const navLinks = [
//         { name: 'Home', path: '/' },
//         { name: 'About', path: '/about' },
//         { name: 'Services', path: '/services' },
//         { name: 'Careers', path: '/careers' },
//         { name: 'Contact', path: '/contact' },
//     ];

//     const menuVariants = {
//         closed: { opacity: 0, y: '-100%', transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
//         open: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
//     };
//     const linkContainerVariants = {
//         closed: { opacity: 0 },
//         open: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.18 } },
//     };
//     const linkVariants = {
//         closed: { opacity: 0, y: 16 },
//         open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
//     };

//     return (
//         <>
//             {/* ══════════════════════════════════════════════════
//           HEADER BAR
//       ══════════════════════════════════════════════════ */}
//             <header
//                 className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
//                     isScrolled
//                         ? 'bg-white/96 backdrop-blur-md border-b border-black/[0.08] shadow-[0_1px_16px_rgba(0,0,0,0.07)]'
//                         : isDarkHero
//                             ? 'bg-transparent border-b border-transparent'
//                             : 'bg-white border-b border-black/[0.06]'
//                 }`}
//             >
//                 <div className="max-w-[1180px] mx-auto px-6 lg:px-10 h-[74px] flex items-center justify-between gap-8">
//                     {/* Logo */}
//                     <Link
//                         to="/"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                         aria-label="Seanora Global home"
//                         className="flex items-center gap-2 shrink-0 group"
//                     >
//                         <img
//                             src={logo}
//                             alt="Seanora Global"
//                             className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]"
//                             loading="eager"
//                             decoding="async"
//                         />
//                     </Link>

//                     {/* ── Desktop Nav ── */}
//                     <nav className="hidden lg:flex items-center" aria-label="Primary navigation" onMouseLeave={() => setHoveredLink(null)}>
//                         {navLinks.map((link) => {
//                             const isActive = location.pathname === link.path;
//                             const isHovered = hoveredLink === link.name;

//                             return (
//                                 <Link
//                                     key={link.name}
//                                     to={link.path}
//                                     onMouseEnter={() => setHoveredLink(link.name)}
//                                     className="relative px-4 py-2 text-[15px] font-medium select-none transition-colors duration-150"
//                                     style={{
//                                         color: isActive
//                                             ? (isDarkHero ? 'rgba(255,255,255,1)' : '#111827')
//                                             : isHovered
//                                                 ? (isDarkHero ? 'rgba(255,255,255,1)' : '#111827')
//                                                 : (isDarkHero ? 'rgba(255,255,255,0.70)' : '#6B7280'),
//                                     }}
//                                 >
//                                     {/* Hover background */}
//                                     <AnimatePresence>
//                                         {isHovered && (
//                                             <motion.span
//                                                 layoutId="hov-bg"
//                                                 initial={{ opacity: 0, scale: 0.92 }}
//                                                 animate={{ opacity: 1, scale: 1 }}
//                                                 exit={{ opacity: 0, scale: 0.92 }}
//                                                 transition={{ duration: 0.14, ease: 'easeOut' }}
//                                                 className={`absolute inset-0 rounded-lg z-0 ${isDarkHero ? 'bg-white/10' : 'bg-[#F3F4F6]'}`}
//                                             />
//                                         )}
//                                     </AnimatePresence>

//                                     {/* Active underline */}
//                                     {isActive && (
//                                         <motion.span
//                                             layoutId="active-line"
//                                             className="absolute bottom-[3px] left-3 right-3 h-[2px] rounded-full bg-[#1E5AA5] z-0"
//                                             transition={{ type: 'spring', stiffness: 420, damping: 32 }}
//                                         />
//                                     )}

//                                     <span className="relative z-10">{link.name}</span>
//                                 </Link>
//                             );
//                         })}
//                     </nav>

//                     {/* ── Right: CTA + hamburger ── */}
//                     <div className="flex items-center gap-3 shrink-0">
//                         {/* CTA button — desktop, outlined pill */}
//                         <Link
//                             to="/contact"
//                             className={`hidden lg:inline-flex items-center gap-2 px-5 py-[9px] rounded-full border text-[13.5px] font-semibold transition-all duration-200 group ${
//                                 isDarkHero
//                                     ? 'border-white/40 text-white bg-transparent hover:bg-white/10'
//                                     : 'border-[#1E5AA5] text-[#1E5AA5] bg-transparent hover:bg-[#1E5AA5] hover:text-white'
//                             }`}
//                         >
//                             Get in touch
//                             <ArrowRight
//                                 className="w-[14px] h-[14px] transition-transform duration-200 group-hover:translate-x-0.5"
//                                 strokeWidth={2.5}
//                             />
//                         </Link>

//                         {/* Hamburger — mobile */}
//                         <button
//                             type="button"
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             aria-label="Toggle menu"
//                             className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-[#F3F4F6] hover:bg-[#E9EAEC] transition-colors duration-200"
//                         >
//                             <div className="w-[15px] h-[11px] relative flex flex-col justify-between">
//                                 <span
//                                     className={`block h-[1.5px] w-full bg-[#111827] rounded-full origin-center transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[4.75px]' : ''}`}
//                                 />
//                                 <span
//                                     className={`block h-[1.5px] w-full bg-[#111827] rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`}
//                                 />
//                                 <span
//                                     className={`block h-[1.5px] w-full bg-[#111827] rounded-full origin-center transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[4.75px]' : ''}`}
//                                 />
//                             </div>
//                         </button>
//                     </div>
//                 </div>
//             </header>

//             {/* ══════════════════════════════════════════════════
//           MOBILE MENU
//       ══════════════════════════════════════════════════ */}
//             <AnimatePresence>
//                 {isMobileMenuOpen && (
//                     <motion.div
//                         initial="closed"
//                         animate="open"
//                         exit="closed"
//                         variants={menuVariants}
//                         className="fixed inset-0 z-40 bg-white flex flex-col pt-[74px] lg:hidden"
//                     >
//                         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EFF6FF]/50 rounded-full blur-[130px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />

//                         <div className="relative z-10 flex flex-col h-full max-w-[440px] mx-auto w-full px-6 pt-6 pb-10">
//                             <motion.nav variants={linkContainerVariants} className="flex flex-col" aria-label="Mobile navigation">
//                                 {navLinks.map((link, i) => {
//                                     const isActive = location.pathname === link.path;
//                                     return (
//                                         <motion.div key={link.name} variants={linkVariants}>
//                                             <Link
//                                                 to={link.path}
//                                                 className="group flex items-center justify-between py-4 border-b border-[#F3F4F6]"
//                                             >
//                                                 <div className="flex items-center gap-4">
//                                                     <span className="text-[11px] font-semibold text-[#D1D5DB] tabular-nums w-5 shrink-0">
//                                                         0{i + 1}
//                                                     </span>
//                                                     <span
//                                                         className={`text-[26px] font-serif font-light tracking-tight transition-colors duration-200 ${
//                                                             isActive ? 'text-[#111827]' : 'text-[#9CA3AF] group-hover:text-[#111827]'
//                                                         }`}
//                                                     >
//                                                         {link.name}
//                                                     </span>
//                                                 </div>
//                                                 <div
//                                                     className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
//                                                         isActive
//                                                             ? 'bg-[#1E5AA5] text-white'
//                                                             : 'bg-[#F3F4F6] text-[#9CA3AF] group-hover:bg-[#111827] group-hover:text-white'
//                                                     }`}
//                                                 >
//                                                     <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
//                                                 </div>
//                                             </Link>
//                                         </motion.div>
//                                     );
//                                 })}
//                             </motion.nav>

//                             {/* Footer */}
//                             <motion.div variants={linkVariants} className="mt-auto pt-8 flex items-end justify-between">
//                                 <div>
//                                     <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#9CA3AF] mb-1.5">
//                                         Get in touch
//                                     </p>
//                                     <a
//                                         href="mailto:info@seanoraglobal.com"
//                                         className="text-[14px] font-medium text-[#111827] hover:text-[#1E5AA5] transition-colors duration-200"
//                                     >
//                                         info@seanoraglobal.com
//                                     </a>
//                                 </div>
//                                 <Link
//                                     to="/contact"
//                                     className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1E5AA5] text-white text-[13px] font-semibold hover:bg-[#174F94] transition-colors duration-200 shrink-0"
//                                 >
//                                     Contact
//                                     <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
//                                 </Link>
//                             </motion.div>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </>
//     );
// };

// export default Header;

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logos/logo_1.webp';

/* ── Inline ArrowRight — removes lucide-react dependency ── */
const ArrowRight = ({ size = 14, strokeWidth = 2.5, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

/* ── Styles injected once ──────────────────────────────── */
const CSS = `
/* Mobile menu slide */
@keyframes hdr-slideDown {
  from { opacity: 0; transform: translateY(-100%); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes hdr-slideUp {
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-100%); }
}
.hdr-menu-enter { animation: hdr-slideDown 0.45s cubic-bezier(0.22,1,0.36,1) forwards; }
.hdr-menu-exit  { animation: hdr-slideUp  0.45s cubic-bezier(0.22,1,0.36,1) forwards; }

/* Staggered mobile links */
@keyframes hdr-fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hdr-link-stagger > * {
  opacity: 0;
  animation: hdr-fadeUp 0.4s ease-out forwards;
}
.hdr-link-stagger > *:nth-child(1) { animation-delay: 0.18s; }
.hdr-link-stagger > *:nth-child(2) { animation-delay: 0.25s; }
.hdr-link-stagger > *:nth-child(3) { animation-delay: 0.32s; }
.hdr-link-stagger > *:nth-child(4) { animation-delay: 0.39s; }
.hdr-link-stagger > *:nth-child(5) { animation-delay: 0.46s; }

/* Desktop nav hover pill */
.hdr-nav-link {
  position: relative;
  padding: 8px 16px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  transition: color 0.15s;
  select: none;
}
.hdr-nav-link::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.14s ease-out, transform 0.14s ease-out;
  transform: scale(0.92);
  pointer-events: none;
}
.hdr-nav-link:hover::before {
  opacity: 1;
  transform: scale(1);
}
.hdr-nav-pill::before  { background: #F3F4F6; }
.hdr-nav-dark::before  { background: rgba(255,255,255,0.10); }

/* Active underline — CSS transition instead of layoutId spring */
.hdr-nav-link::after {
  content: '';
  position: absolute;
  bottom: 3px;
  left: 12px;
  right: 12px;
  height: 2px;
  border-radius: 999px;
  background: #1E5AA5;
  transform: scaleX(0);
  transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
  transform-origin: center;
}
.hdr-nav-link.hdr-active::after { transform: scaleX(1); }

/* CTA hover arrow nudge */
.hdr-cta-arrow { transition: transform 0.2s; }
.hdr-cta:hover .hdr-cta-arrow { transform: translateX(2px); }

/* Mobile link arrow */
.hdr-mob-link:hover .hdr-mob-circle { background: #111827; color: #fff; }
`;

let injected = false;
function injectCSS() {
    if (injected || typeof document === 'undefined') return;
    const el = document.createElement('style');
    el.textContent = CSS;
    document.head.appendChild(el);
    injected = true;
}

/* ══════════════════════════════════════════════════════════ */
const Header = () => {
    injectCSS();

    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setMobileMenu] = useState(false);
    const [menuExiting, setMenuExiting] = useState(false);
    const exitTimerRef = useRef(null);

    const isDarkHero = location.pathname === '/' && !isScrolled;

    /* ── Scroll listener ───────────────────────────────────── */
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* ── Lock body scroll when menu open ──────────────────── */
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    /* ── Close menu on route change ───────────────────────── */
    useEffect(() => {
        closeMenu();
    }, [location.pathname]);

    /* ── Animated close ────────────────────────────────────── */
    const closeMenu = () => {
        if (!isMobileMenuOpen) return;
        setMenuExiting(true);
        clearTimeout(exitTimerRef.current);
        exitTimerRef.current = setTimeout(() => {
            setMobileMenu(false);
            setMenuExiting(false);
        }, 420);
    };

    const toggleMenu = () => {
        if (isMobileMenuOpen) closeMenu();
        else setMobileMenu(true);
    };

    useEffect(() => () => clearTimeout(exitTimerRef.current), []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    /* ── Header bg classes ─────────────────────────────────── */
    const headerBg = isScrolled
        ? 'bg-white/96 backdrop-blur-md border-b border-black/[0.08] shadow-[0_1px_16px_rgba(0,0,0,0.07)]'
        : isDarkHero
          ? 'bg-transparent border-b border-transparent'
          : 'bg-white border-b border-black/[0.06]';

    return (
        <>
            {/* ── Header bar ───────────────────────────────────── */}
            <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${headerBg}`}>
                <div className="max-w-[1180px] mx-auto px-6 lg:px-10 h-[74px] flex items-center justify-between gap-8">
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={() => closeMenu()}
                        aria-label="Seanora Global home"
                        className="flex items-center gap-2 shrink-0 group"
                    >
                        <img
                            src={logo}
                            alt="Seanora Global"
                            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                            loading="eager"
                            decoding="async"
                            width={160}
                            height={40}
                        />
                    </Link>

                    {/* ── Desktop nav ──────────────────────────────── */}
                    <nav className="hidden lg:flex items-center" aria-label="Primary navigation">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`hdr-nav-link ${isDarkHero ? 'hdr-nav-dark' : 'hdr-nav-pill'} ${isActive ? 'hdr-active' : ''}`}
                                    style={{
                                        color: isActive
                                            ? isDarkHero
                                                ? '#fff'
                                                : '#111827'
                                            : isDarkHero
                                              ? 'rgba(255,255,255,0.70)'
                                              : '#6B7280',
                                    }}
                                >
                                    <span style={{ position: 'relative', zIndex: 1 }}>{link.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* ── Right: CTA + hamburger ───────────────────── */}
                    <div className="flex items-center gap-3 shrink-0">
                        {/* CTA — desktop */}
                        <Link
                            to="/contact"
                            className={`hdr-cta hidden lg:inline-flex items-center gap-2 px-5 py-[9px] rounded-full border text-[13.5px] font-semibold transition-all duration-200 ${
                                isDarkHero
                                    ? 'border-white/40 text-white bg-transparent hover:bg-white/10'
                                    : 'border-[#1E5AA5] text-[#1E5AA5] bg-transparent hover:bg-[#1E5AA5] hover:text-white'
                            }`}
                        >
                            Get in touch
                            <ArrowRight size={14} strokeWidth={2.5} className="hdr-cta-arrow" />
                        </Link>

                        {/* Hamburger — mobile */}
                        <button
                            type="button"
                            onClick={toggleMenu}
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMobileMenuOpen}
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

            {/* ── Mobile menu ──────────────────────────────────── */}
            {(isMobileMenuOpen || menuExiting) && (
                <div
                    className={`fixed inset-0 z-40 bg-white flex flex-col pt-[74px] lg:hidden ${
                        menuExiting ? 'hdr-menu-exit' : 'hdr-menu-enter'
                    }`}
                >
                    {/* Decorative blur orb — CSS only, no framer */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: 500,
                            height: 500,
                            background: 'rgba(239,246,255,0.5)',
                            borderRadius: '50%',
                            filter: 'blur(130px)',
                            transform: 'translate(25%, -33%)',
                            pointerEvents: 'none',
                        }}
                    />

                    <div className="relative z-10 flex flex-col h-full max-w-[440px] mx-auto w-full px-6 pt-6 pb-10">
                        {/* Nav links — staggered via CSS */}
                        <nav className="hdr-link-stagger flex flex-col" aria-label="Mobile navigation">
                            {navLinks.map((link, i) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="hdr-mob-link group flex items-center justify-between py-4 border-b border-[#F3F4F6]"
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
                                            className={`hdr-mob-circle w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                                                isActive ? 'bg-[#1E5AA5] text-white' : 'bg-[#F3F4F6] text-[#9CA3AF]'
                                            }`}
                                        >
                                            <ArrowRight size={14} strokeWidth={2.5} />
                                        </div>
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Footer row */}
                        <div className="mt-auto pt-8 flex items-end justify-between">
                            <div>
                                <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#9CA3AF] mb-1.5">Get in touch</p>
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
                                <ArrowRight size={14} strokeWidth={2.5} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
