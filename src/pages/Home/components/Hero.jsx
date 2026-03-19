import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';
import heroBg from '../../../assets/hero-section/hero.webp';
import heroBg2 from '../../../assets/hero-section/hero-2.webp';
import heroBg3 from '../../../assets/hero-section/hero-3.webp';

/* ── Carousel data: 3 images × 5 titles (images repeat) ── */
const heroSlides = [
    { image: heroBg, title: 'Reliably Guiding Your IT Consulting Needs' },
    { image: heroBg2, title: 'Providing Top IT Talent to Support Your Business' },
    { image: heroBg3, title: 'Developing Scalable Solutions for Your Business' },
    { image: heroBg, title: 'Turning ambition into opportunity worldwide' },
    { image: heroBg2, title: 'Guiding global talent with smart solutions' },
];

/* ── Inline SVGs — zero imports ────────────────────────── */
const ArrowUpRight = ({ size = 16, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M7 17L17 7M7 7h10v10" />
    </svg>
);

const StarFilled = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
        <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="#F59E0B"
            stroke="none"
        />
    </svg>
);

const StarEmpty = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
        <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="1.5"
            opacity="0.4"
        />
    </svg>
);

/* ── Carousel arrows ────────────────────────────────────── */
const ChevronLeft = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M15 18l-6-6 6-6" />
    </svg>
);
const ChevronRight = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M9 18l6-6-6-6" />
    </svg>
);

/* ── Styles injected once ──────────────────────────────── */
const CSS = `
/* Carousel background crossfade */
.hero-carousel-bg {
  transition: opacity 0.9s ease-in-out;
}
.hero-carousel-bg.hero-carousel-bg-active {
  opacity: 1;
  pointer-events: auto;
}
.hero-carousel-bg:not(.hero-carousel-bg-active) {
  opacity: 0;
  pointer-events: none;
}

/* Carousel title — white + gray (override global h1) */
.hero-carousel-title .hero-title-main { color: #fff; }
.hero-carousel-title .hero-title-sub { color: rgba(255,255,255,0.5); }

/* Carousel title crossfade */
.hero-carousel-title {
  transition: opacity 0.5s ease-out;
}
.hero-carousel-title.hero-carousel-title-active {
  position: relative;
  opacity: 1;
}
.hero-carousel-title:not(.hero-carousel-title-active) {
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  pointer-events: none;
}

/* Carousel arrow buttons */
.hero-carousel-arrow {
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
}
.hero-carousel-arrow:hover {
  background: rgba(255,255,255,0.15);
  border-color: rgba(255,255,255,0.4);
  color: #fff;
}

/* Background subtle zoom-in on load */
@keyframes hero-zoom {
  from { transform: scale(1.04); }
  to   { transform: scale(1); }
}
.hero-bg-img {
  animation: hero-zoom 2.2s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
}

/* Staggered content fade-up */
@keyframes hero-fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-item {
  opacity: 0;
  animation: hero-fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
}
.hero-item-1 { animation-delay: 0.00s; }
.hero-item-2 { animation-delay: 0.11s; }
.hero-item-3 { animation-delay: 0.23s; }
.hero-item-4 { animation-delay: 0.35s; }
.hero-item-5 { animation-delay: 0.47s; }

/* CTA pill slide animation */
.hero-cta-primary span   { transition: transform 400ms ease-out; }
.hero-cta-primary div    { transition: transform 400ms ease-out; }
.hero-cta-primary:hover span { transform: translateX(36px); }
.hero-cta-primary:hover div  { transform: translateX(-108px); }

/* Secondary link arrow nudge */
.hero-cta-secondary .hero-arrow {
  transition: transform 0.2s;
}
.hero-cta-secondary:hover .hero-arrow {
  transform: translate(2px, -2px);
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
const Hero = () => {
    injectCSS();
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = heroSlides.length;

    useEffect(() => {
        const t = setInterval(() => {
            setActiveIndex((i) => (i + 1) % totalSlides);
        }, 5000);
        return () => clearInterval(t);
    }, [totalSlides]);

    const goPrev = () => setActiveIndex((i) => (i - 1 + totalSlides) % totalSlides);
    const goNext = () => setActiveIndex((i) => (i + 1) % totalSlides);

    const activeTitle = heroSlides[activeIndex]?.title ?? '';
    const titleWords = activeTitle.split(' ').filter(Boolean);
    const titleMid = Math.ceil(titleWords.length / 2);
    const titleFirst = titleWords.slice(0, titleMid).join(' ');
    const titleSecond = titleWords.slice(titleMid).join(' ');

    return (
        <section
            id="hero-main"
            className="relative w-full overflow-hidden"
            style={{
                minHeight: '100svh',
                display: 'flex',
                alignItems: 'flex-end',
            }}
        >
            {/* ── Carousel backgrounds (crossfade) ───────────────── */}
            <div className="absolute inset-0 z-0">
                {heroSlides.map((slide, i) => (
                    <div
                        key={i}
                        className={`hero-carousel-bg absolute inset-0 ${i === activeIndex ? 'hero-carousel-bg-active' : ''}`}
                        aria-hidden={i !== activeIndex}
                    >
                        <img
                            src={slide.image}
                            alt=""
                            aria-hidden="true"
                            className="hero-bg-img w-full h-full object-cover object-center"
                            loading="eager"
                            decoding="async"
                            fetchPriority={i === 0 ? 'high' : undefined}
                            width={1280}
                            height={720}
                        />
                    </div>
                ))}
            </div>

            {/* ── Overlay system ─────────────────────────────── */}
            <div className="absolute inset-0 z-10 bg-[#0A0D14]/50" />
            <div
                className="absolute inset-0 z-10"
                style={{
                    background:
                        'linear-gradient(to right, rgba(8,11,20,0.78) 0%, rgba(8,11,20,0.42) 45%, rgba(8,11,20,0.08) 75%, rgba(8,11,20,0) 100%)',
                }}
            />
            <div
                className="absolute inset-x-0 bottom-0 z-10"
                style={{
                    height: 160,
                    background: 'linear-gradient(to top, rgba(8,11,20,0.85) 0%, rgba(8,11,20,0) 100%)',
                }}
            />
            <div
                className="absolute inset-x-0 top-0 z-10"
                style={{
                    height: 160,
                    background: 'linear-gradient(to bottom, rgba(8,11,20,0.55) 0%, rgba(8,11,20,0) 100%)',
                }}
            />

            {/* ── Carousel arrows (left / right) ───────────────── */}
            <div className="absolute left-0 bottom-6 z-50 flex items-center pl-4 lg:pl-6 pointer-events-none lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2">
                <div className="pointer-events-auto">
                    <button
                        type="button"
                        onClick={goPrev}
                        aria-label="Previous slide"
                        className="hero-carousel-arrow w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-white/25 bg-white/5 text-white/80 flex items-center justify-center"
                    >
                        <ChevronLeft size={20} />
                    </button>
                </div>
            </div>
            <div className="absolute right-0 bottom-6 z-50 flex items-center pr-4 lg:pr-6 pointer-events-none lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2">
                <div className="pointer-events-auto">
                    <button
                        type="button"
                        onClick={goNext}
                        aria-label="Next slide"
                        className="hero-carousel-arrow w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-white/25 bg-white/5 text-white/80 flex items-center justify-center"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* ── Content ────────────────────────────────────── */}
            <div
                className="relative z-20 w-full max-w-[1180px] mx-auto px-6 lg:px-12 pb-24 md:pb-28"
                style={{
                    /*
                     * Fix: pad top by navbar height (74px) + breathing room (32px)
                     * so on short viewports the badge never slides under the nav.
                     * On tall screens flex-end handles positioning naturally.
                     */
                    paddingTop: 'calc(74px + 2rem)',
                }}
            >
                {/* 1 — Badge */}
                <div className="hero-item hero-item-1 mb-6">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#29A8E0] shrink-0" />
                        IT Solutions &amp; Global Consulting
                    </span>
                </div>

                {/* 2 — Carousel heading (first half white, second half text-white/50) */}
                <div className="mb-6 max-w-[600px] relative" style={{ minHeight: '2.2em' }}>
                    <div key={activeIndex} className="hero-carousel-title hero-carousel-title-active">
                        <AnimatedHeading as="h1" className="text-display-1 font-normal tracking-tight text-left leading-[1.08]">
                            <span className="hero-title-main block">
                                <AnimatedText text={titleFirst} className="inline text-white" />
                                {titleSecond ? <AnimatedText text={titleSecond} className="inline text-white/50" /> : null}
                            </span>
                        </AnimatedHeading>
                    </div>
                </div>

                {/* 3 — Body copy */}
                <p className="hero-item hero-item-3 text-[16px] text-white/60 font-light leading-[1.78] max-w-[520px] mb-10">
                    At Seanora Global, we help businesses tackle the world&rsquo;s biggest challenges with tailored IT solutions — guiding
                    you from strategy to success in a competitive market.
                </p>

                {/* 4 — CTA row */}
                <div className="hero-item hero-item-4 flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-12">
                    {/* Primary pill */}
                    <Link
                        to="/contact"
                        className="hero-cta-primary group relative flex items-center justify-between bg-gradient-to-r from-[#1E5AA5] to-[#29A8E0] text-white px-1.5 h-[44px] rounded-full overflow-hidden shrink-0 w-[154px] shadow-[0_4px_14px_rgba(30,90,165,0.45)]"
                    >
                        <span className="text-[14px] font-medium px-4 whitespace-nowrap">Get Started</span>
                        <div className="w-8 h-8 rounded-full bg-white text-[#1E5AA5] flex items-center justify-center shrink-0">
                            <ArrowUpRight size={16} />
                        </div>
                    </Link>

                    {/* Secondary link */}
                    <Link
                        to="/services"
                        className="hero-cta-secondary inline-flex items-center gap-2 text-[14px] font-medium text-white/60 hover:text-white transition-colors duration-200"
                    >
                        <span>Explore services</span>
                        <ArrowUpRight size={14} className="hero-arrow" />
                    </Link>
                </div>

                {/* 5 — Social proof */}
                <div className="hero-item hero-item-5 flex items-center gap-5">
                    {/* Avatar stack */}
                    <div className="flex -space-x-2.5">
                        {[11, 33, 68, 59].map((img, i) => (
                            <img
                                key={img}
                                className="w-9 h-9 rounded-full border-2 border-white/20 bg-gray-600 object-cover"
                                style={{ zIndex: 4 - i }}
                                src={`https://i.pravatar.cc/100?img=${img}`}
                                alt=""
                                aria-hidden="true"
                                loading="lazy"
                                decoding="async"
                                width={36}
                                height={36}
                            />
                        ))}
                    </div>

                    {/* Stars + text */}
                    <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-1">
                            {[...Array(4)].map((_, i) => (
                                <StarFilled key={i} />
                            ))}
                            <StarEmpty />
                        </div>
                        <span className="text-[12px] font-medium text-white/45">
                            A trusted partner for global clients
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
