import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Route, Target, Rocket } from 'lucide-react';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';
import Breadcrumb from '../../../components/ui/Breadcrumb';
import aboutusHero from '../../../assets/images/aboutus-hero.webp';

const FOUNDED_YEAR = 2020;
const YEARS_IN_BUSINESS = Math.max(1, new Date().getFullYear() - FOUNDED_YEAR);

const stats = [
    { end: YEARS_IN_BUSINESS, suffix: '+', label: 'Years in Business' },
    { end: 1000, suffix: '+', label: 'Clients Served' },
    { end: 500, suffix: '+', label: 'Projects Delivered' },
    { end: 15, suffix: '+', label: 'Countries Reached' },
];

/* ── Animated counter ──────────────────────────────────────────── */
const CountUp = ({ end, suffix = '', duration = 1800 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    const rafRef = useRef(null);

    useEffect(() => {
        if (!inView) return;
        const startTime = performance.now();
        const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            setCount(Math.floor(eased * end));
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(tick);
            } else {
                setCount(end);
            }
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, [inView, end, duration]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
};

const cards = [
    {
        number: '01',
        Icon: Target,
        label: 'Our Vision',
        title: 'Global leaders in transformative IT solutions.',
        description:
            'Seanora Global strives to be the cornerstone of success for businesses, professionals, and healthcare providers worldwide. Equip fresh graduates with elite skills through hands-on internships, then secure them dream roles at top organizations. We connect exceptional talent to ideal opportunities, accelerate progress through innovative technology, and optimize healthcare operations—shaping a future of unparalleled service, transformative solutions, and enduring partnerships.',
    },
    {
        number: '02',
        Icon: Route,
        label: 'Our Journey',
        title: 'Built on passion,\ndriven by purpose.',
        description:
            'Established with a passion for technology and a vision for change, Seanora Global has grown from a small team to a powerhouse in the IT industry. Throughout our journey, we have remained steadfast in our commitment to delivering value-driven solutions that make a difference.',
    },
    {
        number: '03',
        Icon: Rocket,
        label: 'Our Mission',
        title: 'Exceptional IT services, unmatched outcomes.',
        description:
            'Seanora Global is dedicated to delivering transformative IT solutions that drive client success through quality, reliability, and relentless innovation. With a passion for technology, we empower organizations to optimize processes, modernize applications, and upgrade infrastructure using cutting-edge tools—helping businesses and professionals operate more effectively in a competitive digital world.',
    },
];

const cardVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14 } },
};

const cardItem = {
    hidden: { opacity: 0, y: 44 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const WhoWeAre = () => {
    return (
        <section className="bg-white relative overflow-hidden">
            <div className="pt-32 md:pt-40 pb-0 relative z-10">
                <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* ── Left: text ── */}
                        <div>
                            <Breadcrumb crumbs={[{ label: 'About Us' }]} />

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.85 }}
                                className="mt-6"
                            >
                                <motion.span
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-xs font-sans tracking-[0.22em] text-[#6B6B6B] font-medium uppercase mb-6 block"
                                >
                                    ABOUT SEANORA GLOBAL
                                </motion.span>

                                <AnimatedHeading
                                    as="h1"
                                    className="text-[3rem] md:text-[5rem] font-medium text-[#111827] leading-[1.08] tracking-tight mb-8"
                                >
                                    <AnimatedText text="Wyoming’s" />
                                    <br />
                                    <AnimatedText text="IT & Talent" />
                                    <br />
                                    <span className="inline-flex flex-wrap gap-x-3">
                                        <AnimatedText text="Solutions" />
                                        <AnimatedText text="Partner" className="text-[#1B1D1E]/60" />
                                    </span>
                                </AnimatedHeading>

                                <motion.p
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.25 }}
                                    className="text-[16px] md:text-[17px] text-[#6B6B6B] font-light leading-relaxed max-w-lg"
                                >
                                    Founded in 2020 at our Sheridan, WY. Seanora Global connects exceptional talent with meaningful
                                    opportunities. From specialized IT development and consulting roots, we've grown into your trusted
                                    global partner for cutting-edge digital solutions, workforce management, and strategic
                                    transformation—leveraging Wyoming's business-friendly policies to deliver world-class services
                                    nationwide and beyond.
                                </motion.p>
                            </motion.div>
                        </div>

                        {/* ── Right: image ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                            className="relative lg:mt-10"
                        >
                            {/* Offset accent border — slightly stronger so the depth reads */}
                            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-[28px] border-2 border-[#93C5FD]/60 z-0" />

                            {/* Small decorative dot grid — top-left corner */}
                            <div
                                className="absolute -top-4 -left-4 w-24 h-24 z-0 opacity-40"
                                style={{
                                    backgroundImage: 'radial-gradient(circle, #93C5FD 1px, transparent 1px)',
                                    backgroundSize: '10px 10px',
                                }}
                            />

                            {/* Image container */}
                            <div className="relative z-10 rounded-[24px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.13)]">
                                <img
                                    src={aboutusHero}
                                    alt="Seanora Global team collaborating"
                                    loading="eager"
                                    className="w-full h-[340px] md:h-[420px] lg:h-[460px] object-cover object-center"
                                    width={1280}
                                    height={720}
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: `linear-gradient(
                      135deg,
                      rgba(255,255,255,0.08) 0%,
                      transparent           40%,
                      transparent           55%,
                      rgba(0,0,0,0.28)      100%
                    )`,
                                    }}
                                />

                                {/* Floating badge — bottom left */}
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                                >
                                    <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#6B6B6B] leading-none mb-1">
                                        Trusted Since
                                    </p>
                                    <p className="text-[1.25rem] font-medium text-[#111827] leading-none">2020</p>
                                </motion.div>

                                {/* Floating badge — top right */}
                                <motion.div
                                    initial={{ opacity: 0, y: -12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.85 }}
                                    className="absolute top-5 right-5 bg-[#1E5AA5]/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(30,90,165,0.3)]"
                                >
                                    <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-white/70 leading-none mb-1">
                                        Global Reach
                                    </p>
                                    <p className="text-[1.25rem] font-medium text-white leading-none">15+ Countries</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ════════════════════════════════════════
          STATS STRIP
      ════════════════════════════════════════ */}
            <div className="mt-16 md:mt-20 relative z-10 bg-[#1A1C1E]">
                <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.07]"
                    >
                        {stats.map((stat) => (
                            <div key={stat.label} className="py-9 px-6 text-center">
                                <div className="text-4xl font-bold font-sans text-white mb-1.5 tracking-tight tabular-nums">
                                    <CountUp end={stat.end} suffix={stat.suffix} />
                                </div>
                                <div className="text-[11px] uppercase tracking-[0.16em] font-semibold text-white/45">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* ════════════════════════════════════════
          CARDS
      ════════════════════════════════════════ */}
            <div className="py-16 md:py-24 relative z-10">
                <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        {cards.map(({ number, Icon, label, title, description }) => (
                            <motion.div
                                key={label}
                                variants={cardItem}
                                className="group relative p-9 lg:p-10 bg-white border border-black/[0.06] rounded-[24px] flex flex-col h-full text-left overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.07)] hover:border-transparent cursor-default"
                            >
                                {/* Background number watermark */}
                                <span className="absolute top-6 right-7 text-[72px] font-light text-black/[0.04] group-hover:text-black/[0.07] transition-colors duration-500 leading-none select-none pointer-events-none">
                                    {number}
                                </span>

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] text-[#1E5AA5] flex items-center justify-center mb-7 shrink-0 transition-all duration-500 group-hover:bg-[#1E5AA5] group-hover:text-white group-hover:scale-110">
                                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                                </div>

                                {/* Label */}
                                <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#6B6B6B] mb-3 block">{label}</span>

                                {/* Title */}
                                <h3 className="text-[1.75rem] leading-snug font-medium text-[#111827] mb-5 whitespace-pre-line">{title}</h3>

                                {/* Animated divider */}
                                <div className="w-8 h-px bg-black/10 mb-5 scale-x-50 origin-left group-hover:scale-x-100 transition-transform duration-500" />

                                {/* Description */}
                                <p className="text-[15px] text-[#6B6B6B] leading-relaxed font-light flex-grow">{description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
