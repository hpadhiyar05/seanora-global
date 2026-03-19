import { useState, useEffect } from 'react';
import { MonitorSmartphone, Server, Briefcase, GraduationCap, Headset, ShieldCheck } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

import img1 from '../../../assets/images/home-service- (6).webp';
import img2 from '../../../assets/images/home-service- (4).webp';
import img3 from '../../../assets/images/home-service- (3).webp';
import img4 from '../../../assets/images/home-service- (7).webp';
import img5 from '../../../assets/images/home-service- (5).webp';
import img6 from '../../../assets/images/home-service- (2).webp';
import img7 from '../../../assets/images/home-service- (1).webp';

const servicesList = [
    {
        icon: GraduationCap,
        title: 'IT Bootcamps',
        description: 'Accelerate your career with intensive IT training.',
        tags: ['Full-stack', 'AI/ML', 'Cybersecurity', 'Placement'],
        image: img1,
    },
    {
        icon: Briefcase,
        title: 'Smart IT Solutions & Professional Consulting',
        description: 'Strategic consulting for business optimization.',
        tags: ['IT Strategy', 'Automation', 'Infrastructure', 'Consulting'],
        image: img2,
    },
    {
        icon: MonitorSmartphone,
        title: 'Analytics and Reporting',
        description: 'Dynamic data visualization and business insights.',
        tags: ['Dashboards', 'BI Tools', 'Data Visuals', 'Reporting'],
        image: img3,
    },
    {
        icon: ShieldCheck,
        title: 'Cloud Infrastructure & Security',
        description: 'Secure and scalable cloud management.',
        tags: ['Cloud Migration', 'Security', 'Disaster Recovery', 'Scalability'],
        image: img4,
    },
    {
        icon: Headset,
        title: 'Business Process Outsourcing',
        description: 'Efficient outsourcing of core business processes.',
        tags: ['IT Support', 'Data Entry', 'Customer Service', 'Operations'],
        image: img5,
    },
    {
        icon: Server,
        title: 'Big Data',
        description: 'Advanced processing of massive datasets.',
        tags: ['Data Lakes', 'Stream Processing', 'Big Data Architecture', 'Hadoop'],
        image: img7,
    },
    {
        icon: Server,
        title: 'Data Warehousing',
        description: 'Unified storage for precise business analysis.',
        tags: ['ETL', 'Integration', 'Query Optimization', 'Data Integrity'],
        image: img6, // Reusing img6 as a placeholder for the 7th item
    },
];

/* ── Single accordion row ───────────────────────────────── */
const ServiceRow = ({ service, isActive, onHover, onLeave, isMobile }) => {
    const Icon = service.icon;

    return (
        <m.div
            onMouseEnter={isMobile ? undefined : onHover}
            onMouseLeave={isMobile ? undefined : onLeave}
            className="group relative border-b border-black/[0.08] last:border-b-0 cursor-default"
        >
            <div className="flex items-start justify-between gap-8 py-10 md:py-12">
                {/* ── Left: text content ── */}
                <div className="flex-1 min-w-0">
                    {/* Index + title row */}
                    <div className="flex items-start gap-5 mb-0">

                        <div className="flex-1">
                            {/* Title */}
                            <div className="flex items-center gap-3 mb-1">
                                <Icon
                                    className={`w-5 h-5 shrink-0 transition-colors duration-300 ${isActive ? 'text-[#1E5AA5]' : 'text-[#6B7280]'}`}
                                    strokeWidth={1.75}
                                />
                                <h3
                                    className={`text-[1.75rem] font-medium tracking-tight transition-colors duration-300 leading-snug ${isActive ? 'text-[#111827]' : 'text-[#374151]'}`}
                                >
                                    {service.title}
                                </h3>
                            </div>

                            {/* Description — always visible */}
                            <p className="text-[14.5px] text-[#6B7280] font-light leading-relaxed pl-8 mb-0">{service.description}</p>

                            {/* Expanded content */}
                            <AnimatePresence initial={false}>
                                {isActive && (
                                    <m.div
                                        key="expanded"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden"
                                    >
                                        {/* Tag pills */}
                                        <div className="flex flex-wrap gap-2 pl-8 pt-4">
                                            {service.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1.5 rounded-full bg-[#F3F4F6] text-[12px] font-medium text-[#374151] border border-[#E5E7EB]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Learn more */}
                                        <div className="pl-8 pt-4">
                                            <Link
                                                to="/services"
                                                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1E5AA5] hover:text-[#174F94] transition-colors duration-200"
                                            >
                                                Learn more about our IT services
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14" />
                                                    <path d="m12 5 7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </m.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* ── Right: image thumbnail (hidden on mobile) ── */}
                {!isMobile && (
                <div
                    className="shrink-0 overflow-hidden rounded-xl"
                    style={{
                        transition: 'width 0.4s cubic-bezier(0.22,1,0.36,1), height 0.4s cubic-bezier(0.22,1,0.36,1)',
                        width: isActive ? '260px' : '96px',
                        height: isActive ? '180px' : '68px',
                    }}
                >
                    <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-all duration-500"
                        style={{
                            filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)',
                            transform: isActive ? 'scale(1)' : 'scale(1.04)',
                            transition: 'filter 0.5s ease, transform 0.5s ease',
                        }}
                        width={600}
                        height={400}
                    />
                </div>
                )}
            </div>
        </m.div>
    );
};

/* ── Main section ───────────────────────────────────────── */
const Services = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 767px)');
        const handler = (e) => {
            setIsMobile(e.matches);
            if (e.matches) setActiveIndex(null);
            else setActiveIndex(0);
        };
        handler(mq);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="w-[80%] mx-auto relative z-10">
                {/* ── Section header — two column like reference ── */}
                <m.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.65, ease: 'easeOut' }}
                    className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
                >
                    {/* Left: heading */}
                    <div>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6B7280] mb-4 block">
                            Our Services
                        </span>
                        <AnimatedHeading className="text-[2.5rem] md:text-[4rem] text-[#111827] tracking-tight leading-[1.08]">
                            <AnimatedText text="We Offer a Wide" className="block font-medium" />
                            <span className="block font-medium">
                                <AnimatedText text="Variety of " />
                                <AnimatedText text="IT Services" className="text-black/50" />
                            </span>
                        </AnimatedHeading>
                    </div>

                    {/* Right: sub-copy + CTA */}
                    <div className="lg:max-w-[320px] lg:pb-1">
                        <p className="text-[14.5px] text-[#6B7280] font-light leading-relaxed mb-5">
                            Explore solutions to help your business scale smarter, operate efficiently, and stay ahead of change.
                        </p>
                        <Link
                            to="/services"
                            className="group relative flex items-center justify-between bg-gradient-to-r from-[#1E5AA5] to-[#29A8E0] text-white p-1 h-[44px] rounded-full overflow-hidden shrink-0 w-[190px] shadow-[0_4px_14px_rgba(30,90,165,0.35)]"
                        >
                            <span className="text-[14px] font-medium pl-4 pr-2 whitespace-nowrap transition-transform duration-[400ms] ease-out group-hover:translate-x-[36px]">
                                Explore Services
                            </span>
                            <div className="w-9 h-9 rounded-full bg-white text-[#1E5AA5] flex items-center justify-center shrink-0 transition-transform duration-[400ms] ease-out group-hover:-translate-x-[144px]">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </div>
                        </Link>
                    </div>
                </m.div>

                {/* ── Accordion list ── */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="border-t border-black/[0.08]"
                >
                    {servicesList.map((service, index) => (
                        <ServiceRow
                            key={index}
                            service={service}
                            index={index}
                            isActive={activeIndex === index}
                            onHover={() => setActiveIndex(index)}
                            onLeave={() => {}}
                            isMobile={isMobile}
                        />
                    ))}
                </m.div>
            </div>
        </section>
    );
};

export default Services;
