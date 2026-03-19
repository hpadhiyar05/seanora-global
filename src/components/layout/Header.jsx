// import { useState, useEffect, useRef, useCallback } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import logo from '../../assets/logos/logo_1.png';

// /* ── Inline ArrowRight — removes lucide-react dependency ── */
// const ArrowRight = ({ size = 14, strokeWidth = 2.5, className = '' }) => (
//     <svg
//         width={size}
//         height={size}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={strokeWidth}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className={className}
//         aria-hidden="true"
//     >
//         <path d="M5 12h14M12 5l7 7-7 7" />
//     </svg>
// );

// /* ── Inline ChevronDown for Services dropdown ── */
// const ChevronDown = ({ size = 14, className = '' }) => (
//     <svg
//         width={size}
//         height={size}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={2.5}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className={className}
//         aria-hidden="true"
//     >
//         <path d="M6 9l6 6 6-6" />
//     </svg>
// );

// /* ── Service options for navbar dropdown (match ServiceDetails) ── */
// const serviceOptions = [
//     { title: 'IT Bootcamps', path: '/services/it-bootcamps' },
//     { title: 'Smart IT Solutions & Professional Consulting', path: '/services/smart-it-solutions' },
//     { title: 'Analytics and Reporting', path: '/services/analytics-and-reporting' },
//     { title: 'Cloud Infrastructure & Security', path: '/services/cloud-infrastructure' },
//     { title: 'Business Process Outsourcing', path: '/services/bpo' },
//     { title: 'Big Data', path: '/services/big-data' },
//     { title: 'Data Warehousing', path: '/services/data-warehousing' },
// ];

// /* ── Styles injected once ──────────────────────────────── */
// const CSS = `
// /* Mobile menu slide */
// @keyframes hdr-slideDown {
//   from { opacity: 0; transform: translateY(-100%); }
//   to   { opacity: 1; transform: translateY(0); }
// }
// @keyframes hdr-slideUp {
//   from { opacity: 1; transform: translateY(0); }
//   to   { opacity: 0; transform: translateY(-100%); }
// }
// .hdr-menu-enter { animation: hdr-slideDown 0.45s cubic-bezier(0.22,1,0.36,1) forwards; }
// .hdr-menu-exit  { animation: hdr-slideUp  0.45s cubic-bezier(0.22,1,0.36,1) forwards; }

// /* Staggered mobile links */
// @keyframes hdr-fadeUp {
//   from { opacity: 0; transform: translateY(16px); }
//   to   { opacity: 1; transform: translateY(0); }
// }
// .hdr-link-stagger > * {
//   opacity: 0;
//   animation: hdr-fadeUp 0.4s ease-out forwards;
// }
// .hdr-link-stagger > *:nth-child(1) { animation-delay: 0.18s; }
// .hdr-link-stagger > *:nth-child(2) { animation-delay: 0.25s; }
// .hdr-link-stagger > *:nth-child(3) { animation-delay: 0.32s; }
// .hdr-link-stagger > *:nth-child(4) { animation-delay: 0.39s; }
// .hdr-link-stagger > *:nth-child(5) { animation-delay: 0.46s; }

// /* Desktop nav hover pill */
// .hdr-nav-link {
//   position: relative;
//   padding: 8px 16px;
//   font-size: 15px;
//   font-weight: 500;
//   border-radius: 8px;
//   text-decoration: none;
//   transition: color 0.15s;
//   select: none;
// }
// .hdr-nav-link::before {
//   content: '';
//   position: absolute;
//   inset: 0;
//   border-radius: 8px;
//   opacity: 0;
//   transition: opacity 0.14s ease-out, transform 0.14s ease-out;
//   transform: scale(0.92);
//   pointer-events: none;
// }
// .hdr-nav-link:hover::before {
//   opacity: 1;
//   transform: scale(1);
// }
// .hdr-nav-pill::before  { background: #F3F4F6; }
// .hdr-nav-dark::before  { background: rgba(255,255,255,0.10); }

// /* Active underline — CSS transition instead of layoutId spring */
// .hdr-nav-link::after {
//   content: '';
//   position: absolute;
//   bottom: 3px;
//   left: 12px;
//   right: 12px;
//   height: 2px;
//   border-radius: 999px;
//   background: #1E5AA5;
//   transform: scaleX(0);
//   transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
//   transform-origin: center;
// }
// .hdr-nav-link.hdr-active::after { transform: scaleX(1); }

// /* CTA hover arrow nudge */
// .hdr-cta-arrow { transition: transform 0.2s; }
// .hdr-cta:hover .hdr-cta-arrow { transform: translateX(2px); }

// /* Mobile link arrow */
// .hdr-mob-link:hover .hdr-mob-circle { background: #111827; color: #fff; }

// /* Services dropdown */
// .hdr-services-trigger:hover .hdr-chevron,
// .hdr-services-open .hdr-chevron { transform: rotate(180deg); }
// .hdr-services-dropdown {
//   opacity: 0;
//   visibility: hidden;
//   transform: translateY(-6px);
//   transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
// }
// .hdr-services-wrap:hover .hdr-services-dropdown,
// .hdr-services-wrap:focus-within .hdr-services-dropdown {
//   opacity: 1;
//   visibility: visible;
//   transform: translateY(0);
// }
// /* Keep dropdown closed after navigation until next hover */
// .hdr-services-wrap.hdr-services-closed .hdr-services-dropdown,
// .hdr-services-wrap.hdr-services-closed:hover .hdr-services-dropdown {
//   opacity: 0;
//   visibility: hidden;
//   transform: translateY(-6px);
// }
// .hdr-dropdown-item {
//   transition: background-color 0.15s, color 0.15s;
// }
// `;

// let injected = false;
// function injectCSS() {
//     if (injected || typeof document === 'undefined') return;
//     const el = document.createElement('style');
//     el.textContent = CSS;
//     document.head.appendChild(el);
//     injected = true;
// }

// /* ══════════════════════════════════════════════════════════ */
// const Header = () => {
//     injectCSS();

//     const location = useLocation();
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMobileMenuOpen, setMobileMenu] = useState(false);
//     const [menuExiting, setMenuExiting] = useState(false);
//     const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//     const [dropdownClosedByNav, setDropdownClosedByNav] = useState(false);
//     const exitTimerRef = useRef(null);
//     const isMobileMenuOpenRef = useRef(isMobileMenuOpen);

//     useEffect(() => {
//         isMobileMenuOpenRef.current = isMobileMenuOpen;
//     }, [isMobileMenuOpen]);

//     const isDarkHero = location.pathname === '/' && !isScrolled;

//     /* ── Animated close (stable) ────────────────────────────── */
//     const closeMenu = useCallback(() => {
//         // Guard using ref so this callback stays stable
//         // (prevents the "open then instantly close" race).
//         if (!isMobileMenuOpenRef.current) return;
//         setMenuExiting(true);
//         clearTimeout(exitTimerRef.current);
//         exitTimerRef.current = setTimeout(() => {
//             setMobileMenu(false);
//             setMenuExiting(false);
//         }, 420);
//     }, []);

//     /* ── Scroll listener ───────────────────────────────────── */
//     useEffect(() => {
//         const onScroll = () => setIsScrolled(window.scrollY > 10);
//         window.addEventListener('scroll', onScroll, { passive: true });
//         return () => window.removeEventListener('scroll', onScroll);
//     }, []);

//     /* ── Lock body scroll when menu open ──────────────────── */
//     useEffect(() => {
//         document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
//         return () => {
//             document.body.style.overflow = '';
//         };
//     }, [isMobileMenuOpen]);

//     /* ── Close menu on route change ───────────────────────── */
//     useEffect(() => {
//         // Run on next tick to avoid "setState synchronously within an effect" warnings
//         const t = setTimeout(() => {
//             closeMenu();
//             setMobileServicesOpen(false);
//             setDropdownClosedByNav(true);
//         }, 0);
//         return () => clearTimeout(t);
//     }, [location.pathname, closeMenu]);

//     const toggleMenu = () => {
//         if (isMobileMenuOpen) closeMenu();
//         else setMobileMenu(true);
//     };

//     useEffect(() => () => clearTimeout(exitTimerRef.current), []);

//     const navLinks = [
//         { name: 'Home', path: '/' },
//         { name: 'About', path: '/about' },
//         { name: 'Services', path: '/services' },
//         { name: 'Careers', path: '/careers' },
//         { name: 'Contact', path: '/contact' },
//     ];

//     /* ── Header bg classes ─────────────────────────────────── */
//     const headerBg = isScrolled
//         ? 'bg-white/96 backdrop-blur-md border-b border-black/[0.08] shadow-[0_1px_16px_rgba(0,0,0,0.07)]'
//         : isDarkHero
//           ? 'bg-transparent border-b border-transparent'
//           : 'bg-white border-b border-black/[0.06]';

//     return (
//         <>
//             {/* ── Header bar ───────────────────────────────────── */}
//             <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${headerBg}`}>
//                 <div className="max-w-[1180px] mx-auto px-6 lg:px-10 h-[84px] flex items-center justify-between gap-8">
//                     {/* Logo */}
//                     <Link
//                         to="/"
//                         onClick={() => {
//                             if (location.pathname === '/') {
//                                 window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//                             }
//                             closeMenu();
//                         }}
//                         aria-label="Seanora Global home"
//                         className="flex items-center gap-2 shrink-0 group"
//                     >
//                         <img
//                             src={logo}
//                             alt="Seanora Global"
//                             className="h-28 w-auto max-h-[84px] object-contain object-left transition-transform duration-300 group-hover:scale-[1.04]"
//                             loading="eager"
//                             decoding="async"
//                             width={300}
//                             height={80}
//                         />
//                     </Link>

//                     {/* ── Desktop nav ──────────────────────────────── */}
//                     <nav className="hidden lg:flex items-center" aria-label="Primary navigation">
//                         {navLinks.map((link) => {
//                             const isActive = location.pathname === link.path;
//                             if (link.name === 'Services') {
//                                 return (
//                                     <div
//                                         key={link.name}
//                                         className={`hdr-services-wrap relative ${dropdownClosedByNav ? 'hdr-services-closed' : ''}`}
//                                         onMouseEnter={() => setDropdownClosedByNav(false)}
//                                     >
//                                         <Link
//                                             to="/services"
//                                             className={`hdr-nav-link hdr-services-trigger flex items-center gap-1 ${isDarkHero ? 'hdr-nav-dark' : 'hdr-nav-pill'} ${isActive ? 'hdr-active' : ''}`}
//                                             style={{
//                                                 color: isActive
//                                                     ? isDarkHero
//                                                         ? '#fff'
//                                                         : '#111827'
//                                                     : isDarkHero
//                                                       ? 'rgba(255,255,255,0.70)'
//                                                       : '#6B7280',
//                                             }}
//                                         >
//                                             <span style={{ position: 'relative', zIndex: 1 }}>Services</span>
//                                             <span
//                                                 className="hdr-chevron transition-transform duration-200"
//                                                 style={{ position: 'relative', zIndex: 1 }}
//                                             >
//                                                 <ChevronDown size={14} />
//                                             </span>
//                                         </Link>
//                                         <div
//                                             className="hdr-services-dropdown absolute left-1/2 top-full pt-2 -translate-x-1/2 min-w-[300px] z-[60]"
//                                             aria-hidden="true"
//                                         >
//                                             <div
//                                                 className={`rounded-xl border shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden ${
//                                                     isDarkHero
//                                                         ? 'bg-white/95 backdrop-blur-xl border-white/20'
//                                                         : 'bg-white border-black/[0.08]'
//                                                 }`}
//                                             >
//                                                 <div className="px-4 pt-3 pb-1">
//                                                     <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9CA3AF]">
//                                                         Our services
//                                                     </p>
//                                                 </div>
//                                                 <div className="py-1.5">
//                                                     {serviceOptions.map((opt, i) => (
//                                                         <Link
//                                                             key={i}
//                                                             to={opt.path}
//                                                             className={`hdr-dropdown-item block px-4 py-2.5 text-[14px] font-medium truncate ${
//                                                                 isDarkHero
//                                                                     ? 'text-[#111827] hover:bg-black/5'
//                                                                     : 'text-[#374151] hover:bg-[#F3F4F6] hover:text-[#111827]'
//                                                             }`}
//                                                         >
//                                                             {opt.title}
//                                                         </Link>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 );
//                             }
//                             return (
//                                 <Link
//                                     key={link.name}
//                                     to={link.path}
//                                     className={`hdr-nav-link ${isDarkHero ? 'hdr-nav-dark' : 'hdr-nav-pill'} ${isActive ? 'hdr-active' : ''}`}
//                                     style={{
//                                         color: isActive
//                                             ? isDarkHero
//                                                 ? '#fff'
//                                                 : '#111827'
//                                             : isDarkHero
//                                               ? 'rgba(255,255,255,0.70)'
//                                               : '#6B7280',
//                                     }}
//                                 >
//                                     <span style={{ position: 'relative', zIndex: 1 }}>{link.name}</span>
//                                 </Link>
//                             );
//                         })}
//                     </nav>

//                     {/* ── Right: CTA + hamburger ───────────────────── */}
//                     <div className="flex items-center gap-3 shrink-0">
//                         {/* CTA — desktop */}
//                         <Link
//                             to="/contact"
//                             className={`hdr-cta hidden lg:inline-flex items-center gap-2 px-5 py-[9px] rounded-full border text-[13.5px] font-semibold transition-all duration-200 ${
//                                 isDarkHero
//                                     ? 'border-white/40 text-white bg-transparent hover:bg-white/10'
//                                     : 'border-[#1E5AA5] text-[#1E5AA5] bg-transparent hover:bg-[#1E5AA5] hover:text-white'
//                             }`}
//                         >
//                             Get in touch
//                             <ArrowRight size={14} strokeWidth={2.5} className="hdr-cta-arrow" />
//                         </Link>

//                         {/* Hamburger — mobile */}
//                         <button
//                             type="button"
//                             onClick={toggleMenu}
//                             aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
//                             aria-expanded={isMobileMenuOpen}
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

//             {/* ── Mobile menu ──────────────────────────────────── */}
//             {(isMobileMenuOpen || menuExiting) && (
//                 <div
//                     className={`fixed inset-0 z-40 bg-white flex flex-col pt-[74px] lg:hidden ${
//                         menuExiting ? 'hdr-menu-exit' : 'hdr-menu-enter'
//                     }`}
//                 >
//                     {/* Decorative blur orb — CSS only, no framer */}
//                     <div
//                         aria-hidden="true"
//                         style={{
//                             position: 'absolute',
//                             top: 0,
//                             right: 0,
//                             width: 500,
//                             height: 500,
//                             background: 'rgba(239,246,255,0.5)',
//                             borderRadius: '50%',
//                             filter: 'blur(130px)',
//                             transform: 'translate(25%, -33%)',
//                             pointerEvents: 'none',
//                         }}
//                     />

//                     <div className="relative z-10 flex flex-col h-full max-w-[440px] mx-auto w-full px-6 pt-6 pb-10">
//                         {/* Nav links — staggered via CSS */}
//                         <nav className="hdr-link-stagger flex flex-col" aria-label="Mobile navigation">
//                             {navLinks.map((link, i) => {
//                                 const isActive = location.pathname === link.path;
//                                 if (link.name === 'Services') {
//                                     return (
//                                         <div key={link.name} className="border-b border-[#F3F4F6]">
//                                             <div className="flex items-center gap-4 py-4">
//                                                 <span className="text-[11px] font-semibold text-[#D1D5DB] tabular-nums w-5 shrink-0">
//                                                     0{i + 1}
//                                                 </span>
//                                                 <button
//                                                     type="button"
//                                                     onClick={() => setMobileServicesOpen((v) => !v)}
//                                                     className="flex-1 flex items-center justify-between text-left"
//                                                     aria-expanded={mobileServicesOpen}
//                                                 >
//                                                     <span className="text-[26px] font-serif font-light tracking-tight text-[#111827]">
//                                                         Services
//                                                     </span>
//                                                     <span
//                                                         className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
//                                                             mobileServicesOpen
//                                                                 ? 'rotate-180 bg-[#1E5AA5] text-white'
//                                                                 : 'bg-[#F3F4F6] text-[#9CA3AF]'
//                                                         }`}
//                                                     >
//                                                         <ChevronDown size={18} />
//                                                     </span>
//                                                 </button>
//                                             </div>
//                                             <div
//                                                 className={`grid transition-[grid-template-rows] duration-300 ease-out ${
//                                                     mobileServicesOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
//                                                 }`}
//                                             >
//                                                 <div className="overflow-hidden">
//                                                     <div className="pb-3 pl-9 space-y-0">
//                                                         <Link
//                                                             to="/services"
//                                                             onClick={closeMenu}
//                                                             className="block py-2.5 text-[15px] font-medium text-[#6B7280] hover:text-[#1E5AA5] transition-colors"
//                                                         >
//                                                             View all services
//                                                         </Link>
//                                                         {serviceOptions.map((opt, j) => (
//                                                             <Link
//                                                                 key={j}
//                                                                 to={opt.path}
//                                                                 onClick={closeMenu}
//                                                                 className="block py-2.5 text-[15px] text-[#6B7280] hover:text-[#1E5AA5] transition-colors border-l-2 border-[#E5E7EB] pl-4 ml-2"
//                                                             >
//                                                                 {opt.title}
//                                                             </Link>
//                                                         ))}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     );
//                                 }
//                                 return (
//                                     <Link
//                                         key={link.name}
//                                         to={link.path}
//                                         className="hdr-mob-link group flex items-center justify-between py-4 border-b border-[#F3F4F6]"
//                                     >
//                                         <div className="flex items-center gap-4">
//                                             <span className="text-[11px] font-semibold text-[#D1D5DB] tabular-nums w-5 shrink-0">
//                                                 0{i + 1}
//                                             </span>
//                                             <span
//                                                 className={`text-[26px] font-serif font-light tracking-tight transition-colors duration-200 ${
//                                                     isActive ? 'text-[#111827]' : 'text-[#9CA3AF] group-hover:text-[#111827]'
//                                                 }`}
//                                             >
//                                                 {link.name}
//                                             </span>
//                                         </div>
//                                         <div
//                                             className={`hdr-mob-circle w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
//                                                 isActive ? 'bg-[#1E5AA5] text-white' : 'bg-[#F3F4F6] text-[#9CA3AF]'
//                                             }`}
//                                         >
//                                             <ArrowRight size={14} strokeWidth={2.5} />
//                                         </div>
//                                     </Link>
//                                 );
//                             })}
//                         </nav>

//                         {/* Footer row */}
//                         <div className="mt-auto pt-8 flex items-end justify-between">
//                             <div>
//                                 <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#9CA3AF] mb-1.5">Get in touch</p>
//                                 <a
//                                     href="mailto:info@seanoraglobal.com"
//                                     className="text-[14px] font-medium text-[#111827] hover:text-[#1E5AA5] transition-colors duration-200"
//                                 >
//                                     info@seanoraglobal.com
//                                 </a>
//                             </div>
//                             <Link
//                                 to="/contact"
//                                 className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1E5AA5] text-white text-[13px] font-semibold hover:bg-[#174F94] transition-colors duration-200 shrink-0"
//                             >
//                                 Contact
//                                 <ArrowRight size={14} strokeWidth={2.5} />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Header;

import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logos/Seanora Global.png';

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

/* ── Inline ChevronDown for Services dropdown ── */
const ChevronDown = ({ size = 14, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M6 9l6 6 6-6" />
    </svg>
);

/* ── Service options for navbar dropdown (match ServiceDetails) ── */
const serviceOptions = [
    { title: 'IT Bootcamps', path: '/services/it-bootcamps' },
    { title: 'Smart IT Solutions & Professional Consulting', path: '/services/smart-it-solutions' },
    { title: 'Analytics and Reporting', path: '/services/analytics-and-reporting' },
    { title: 'Cloud Infrastructure & Security', path: '/services/cloud-infrastructure' },
    { title: 'Business Process Outsourcing', path: '/services/bpo' },
    { title: 'Big Data', path: '/services/big-data' },
    { title: 'Data Warehousing', path: '/services/data-warehousing' },
];

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
  font-size: 16px;
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

/* Services dropdown */
.hdr-services-trigger:hover .hdr-chevron,
.hdr-services-open .hdr-chevron { transform: rotate(180deg); }
.hdr-services-dropdown {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
}
.hdr-services-wrap:hover .hdr-services-dropdown,
.hdr-services-wrap:focus-within .hdr-services-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
/* Keep dropdown closed after navigation until next hover */
.hdr-services-wrap.hdr-services-closed .hdr-services-dropdown,
.hdr-services-wrap.hdr-services-closed:hover .hdr-services-dropdown {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px);
}
.hdr-dropdown-item {
  transition: background-color 0.15s, color 0.15s;
}
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
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [dropdownClosedByNav, setDropdownClosedByNav] = useState(false);
    const exitTimerRef = useRef(null);
    const isMobileMenuOpenRef = useRef(isMobileMenuOpen);

    useEffect(() => {
        isMobileMenuOpenRef.current = isMobileMenuOpen;
    }, [isMobileMenuOpen]);

    const isDarkHero = location.pathname === '/' && !isScrolled;

    /* ── Animated close (stable) ────────────────────────────── */
    const closeMenu = useCallback(() => {
        // Guard using ref so this callback stays stable
        // (prevents the "open then instantly close" race).
        if (!isMobileMenuOpenRef.current) return;
        setMenuExiting(true);
        clearTimeout(exitTimerRef.current);
        exitTimerRef.current = setTimeout(() => {
            setMobileMenu(false);
            setMenuExiting(false);
        }, 420);
    }, []);

    /* ── Scroll listener ───────────────────────────────────── */
    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 10);
                    ticking = false;
                });
                ticking = true;
            }
        };
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
        // Run on next tick to avoid "setState synchronously within an effect" warnings
        const t = setTimeout(() => {
            closeMenu();
            setMobileServicesOpen(false);
            setDropdownClosedByNav(true);
        }, 0);
        return () => clearTimeout(t);
    }, [location.pathname, closeMenu]);

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
        ? 'bg-white/96 border-b border-black/[0.08] shadow-[0_1px_16px_rgba(0,0,0,0.07)]'
        : isDarkHero
          ? 'bg-transparent border-b border-transparent'
          : 'bg-white border-b border-black/[0.06]';

    return (
        <>
            {/* ── Header bar ───────────────────────────────────── */}
            <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${headerBg}`}>
                <div className="max-w-[1180px] mx-auto px-6 lg:px-10 h-[90px] flex items-center justify-between gap-8">
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={() => {
                            if (location.pathname === '/') {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }
                            closeMenu();
                        }}
                        aria-label="Seanora Global home"
                        className="flex items-center gap-2 shrink-0 group"
                    >
                        <img
                            src={logo}
                            alt="Seanora Global"
                            className="h-12 w-auto max-h-[48px] object-contain object-left transition-transform duration-300 group-hover:scale-[1.04]"
                            style={
                                isDarkHero
                                    ? {
                                          filter: 'drop-shadow(0 0 20px rgba(255,255,255,1)) drop-shadow(0 0 30px rgba(255,255,255,0.8)) drop-shadow(0 0 80px rgba(255,255,255,0.7))',
                                      }
                                    : undefined
                            }
                            loading="eager"
                            decoding="async"
                            width={300}
                            height={80}
                        />
                    </Link>

                    {/* ── Desktop nav ──────────────────────────────── */}
                    <nav className="hidden lg:flex items-center" aria-label="Primary navigation">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            if (link.name === 'Services') {
                                return (
                                    <div
                                        key={link.name}
                                        className={`hdr-services-wrap relative ${dropdownClosedByNav ? 'hdr-services-closed' : ''}`}
                                        onMouseEnter={() => setDropdownClosedByNav(false)}
                                    >
                                        <Link
                                            to="/services"
                                            className={`hdr-nav-link hdr-services-trigger flex items-center gap-1 ${isDarkHero ? 'hdr-nav-dark' : 'hdr-nav-pill'} ${isActive ? 'hdr-active' : ''}`}
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
                                            <span style={{ position: 'relative', zIndex: 1 }}>Services</span>
                                            <span
                                                className="hdr-chevron transition-transform duration-200"
                                                style={{ position: 'relative', zIndex: 1 }}
                                            >
                                                <ChevronDown size={14} />
                                            </span>
                                        </Link>
                                        <div
                                            className="hdr-services-dropdown absolute left-1/2 top-full pt-2 -translate-x-1/2 min-w-[300px] z-[60]"
                                            aria-hidden="true"
                                        >
                                            <div
                                                className={`rounded-xl border shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden ${
                                                    isDarkHero
                                                        ? 'bg-white/95 backdrop-blur-xl border-white/20'
                                                        : 'bg-white border-black/[0.08]'
                                                }`}
                                            >
                                                <div className="px-4 pt-3 pb-1">
                                                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9CA3AF]">
                                                        Our services
                                                    </p>
                                                </div>
                                                <div className="py-1.5">
                                                    {serviceOptions.map((opt, i) => (
                                                        <Link
                                                            key={i}
                                                            to={opt.path}
                                                            className={`hdr-dropdown-item block px-4 py-2.5 text-[15px] font-medium truncate ${
                                                                isDarkHero
                                                                    ? 'text-[#111827] hover:bg-black/5'
                                                                    : 'text-[#374151] hover:bg-[#F3F4F6] hover:text-[#111827]'
                                                            }`}
                                                        >
                                                            {opt.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
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
                            className={`hdr-cta hidden lg:inline-flex items-center gap-2 px-6 py-[10px] rounded-full border text-[14.5px] font-semibold transition-all duration-200 ${
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
                            width: 280,
                            height: 280,
                            background: 'rgba(239,246,255,0.5)',
                            borderRadius: '50%',
                            filter: 'blur(40px)',
                            transform: 'translate(25%, -33%)',
                            pointerEvents: 'none',
                        }}
                    />

                    <div className="relative z-10 flex flex-col h-full max-w-[440px] mx-auto w-full px-6 pt-6 pb-10">
                        {/* Nav links — staggered via CSS */}
                        <nav className="hdr-link-stagger flex flex-col" aria-label="Mobile navigation">
                            {navLinks.map((link, i) => {
                                const isActive = location.pathname === link.path;
                                if (link.name === 'Services') {
                                    return (
                                        <div key={link.name} className="border-b border-[#F3F4F6]">
                                            <div className="flex items-center gap-4 py-4">
                                                <span className="text-[11px] font-semibold text-[#D1D5DB] tabular-nums w-5 shrink-0">
                                                    0{i + 1}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => setMobileServicesOpen((v) => !v)}
                                                    className="flex-1 flex items-center justify-between text-left"
                                                    aria-expanded={mobileServicesOpen}
                                                >
                                                    <span className="text-[26px] font-serif font-light tracking-tight text-[#111827]">
                                                        Services
                                                    </span>
                                                    <span
                                                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                                                            mobileServicesOpen
                                                                ? 'rotate-180 bg-[#1E5AA5] text-white'
                                                                : 'bg-[#F3F4F6] text-[#9CA3AF]'
                                                        }`}
                                                    >
                                                        <ChevronDown size={18} />
                                                    </span>
                                                </button>
                                            </div>
                                            <div
                                                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                                                    mobileServicesOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                                }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="pb-3 pl-9 space-y-0">
                                                        <Link
                                                            to="/services"
                                                            onClick={closeMenu}
                                                            className="block py-2.5 text-[15px] font-medium text-[#6B7280] hover:text-[#1E5AA5] transition-colors"
                                                        >
                                                            View all services
                                                        </Link>
                                                        {serviceOptions.map((opt, j) => (
                                                            <Link
                                                                key={j}
                                                                to={opt.path}
                                                                onClick={closeMenu}
                                                                className="block py-2.5 text-[15px] text-[#6B7280] hover:text-[#1E5AA5] transition-colors border-l-2 border-[#E5E7EB] pl-4 ml-2"
                                                            >
                                                                {opt.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
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
