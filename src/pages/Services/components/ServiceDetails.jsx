import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MonitorSmartphone, GraduationCap, Server, Users, Briefcase, Cloud, Plus, Minus } from 'lucide-react';

const services = [
    {
        icon: MonitorSmartphone,
        index: '01',
        category: 'Design & Dev',
        title: 'Mobile & Website Design and Development',
        description:
            'Create engaging digital experiences with intuitive mobile apps and websites that resonate with your audience and drive measurable business growth.',
        bullets: [
            'Custom mobile app development',
            'Responsive website design',
            'User experience (UX) optimization',
            'E-commerce solutions',
        ],
        accentStrong: '#1E5AA5',
        accentLight: '#93C5FD',
    },
    {
        icon: GraduationCap,
        index: '02',
        category: 'Training',
        title: 'IT Training',
        description:
            'Equip your team with the knowledge and skills to leverage the latest technologies. Practical, interactive sessions tailored to your specific business needs.',
        bullets: ['Software and application training', 'Cybersecurity awareness', 'Cloud technology training', 'Custom IT workshops'],
        accentStrong: '#0284C7',
        accentLight: '#38BDF8',
    },
    {
        icon: Server,
        index: '03',
        category: 'Integration',
        title: 'System Integration & IT Reseller',
        description:
            'Achieve seamless operations with expert system integration and high-quality IT products. All your systems working harmoniously to maximize productivity.',
        bullets: [
            'System integration services',
            'Hardware and software procurement',
            'Network setup and management',
            'IT infrastructure solutions',
        ],
        accentStrong: '#1E5AA5',
        accentLight: '#93C5FD',
    },
    {
        icon: Users,
        index: '04',
        category: 'Consulting',
        title: 'IT Services and IT Consulting',
        description:
            'Optimize technology investments with hands-on IT support and strategic consulting that drives informed decisions and sustainable business growth.',
        bullets: [
            'Technical support and troubleshooting',
            'IT strategy development',
            'Technology assessment and planning',
            'Business process optimization',
        ],
        accentStrong: '#1E5AA5',
        accentLight: '#93C5FD',
    },
    {
        icon: Briefcase,
        index: '05',
        category: 'Professional',
        title: 'Technical Professional Services',
        description:
            'Expert consulting, implementation, and maintenance delivered by certified technical professionals dedicated to the long-term success of your IT projects.',
        bullets: [
            'IT project management',
            'System implementation and migration',
            'Maintenance and support services',
            'Custom IT solutions',
        ],
        accentStrong: '#0284C7',
        accentLight: '#38BDF8',
    },
    {
        icon: Cloud,
        index: '06',
        category: 'Cloud & Security',
        title: 'Cloud Computing & Security',
        description:
            'Secure, scalable cloud solutions that protect your data and infrastructure — leveraging the full power of the cloud with robust security at every layer.',
        bullets: [
            'Cloud migration and management',
            'Data backup and disaster recovery',
            'Network and data security',
            'Compliance and risk management',
        ],
        accentStrong: '#1E5AA5',
        accentLight: '#93C5FD',
    },
];

const ServiceDetails = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="bg-[#0F1114] relative overflow-hidden">
            {/* Subtle glow blobs */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute left-0 top-1/3 w-[600px] h-[600px] bg-[#1E5AA5] rounded-full blur-[160px] opacity-[0.07] -translate-x-1/2" />
                <div className="absolute right-0 bottom-1/4 w-[500px] h-[500px] bg-[#0284C7] rounded-full blur-[140px] opacity-[0.06] translate-x-1/3" />
            </div>

            <div className="container mx-auto px-4 lg:px-12 max-w-6xl relative z-10">
                {/* ── Section header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.75 }}
                    className="py-16 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-white/[0.07]"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-7 h-px bg-[#93C5FD]/60" />
                            <span className="text-[11px] font-sans tracking-[0.26em] text-[#93C5FD] font-semibold uppercase">
                                What We Offer
                            </span>
                        </div>
                        <h2 className="text-[2.5rem] md:text-[4rem] font-medium text-white leading-[1.08] tracking-tight">
                            Six pillars of <span className="text-white/40">IT excellence</span>
                        </h2>
                    </div>
                    <p className="text-[14.5px] text-white/40 font-light leading-relaxed max-w-xs md:text-right">
                        Every service is built to integrate seamlessly across your entire technology ecosystem.
                    </p>
                </motion.div>

                {/* ── Accordion rows ── */}
                <div className="divide-y divide-white/[0.06] pb-16 md:pb-20">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        const isOpen = openIndex === i;

                        return (
                            <motion.div
                                key={service.index}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-20px' }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                            >
                                {/* ── Clickable header row ── */}
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full group flex items-center gap-5 md:gap-8 py-6 md:py-7 text-left"
                                >
                                    {/* Index */}
                                    <span className="text-[11px] font-mono tracking-[0.16em] text-white/20 shrink-0 w-7 hidden sm:block">
                                        {service.index}
                                    </span>

                                    {/* Icon box */}
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                                        style={{
                                            backgroundColor: isOpen ? service.accentStrong : 'rgba(255,255,255,0.06)',
                                        }}
                                    >
                                        <Icon size={17} strokeWidth={1.5} style={{ color: isOpen ? '#fff' : 'rgba(255,255,255,0.40)' }} />
                                    </div>

                                    {/* Title + category */}
                                    <div className="flex-grow min-w-0 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                                        <h3
                                            className="text-[1.25rem] font-medium leading-snug tracking-tight transition-colors duration-300"
                                            style={{ color: isOpen ? '#ffffff' : 'rgba(255,255,255,0.65)' }}
                                        >
                                            {service.title}
                                        </h3>
                                        <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-white/20 shrink-0">
                                            {service.category}
                                        </span>
                                    </div>

                                    {/* Toggle */}
                                    <div
                                        className="w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300"
                                        style={{
                                            borderColor: isOpen ? service.accentStrong : 'rgba(255,255,255,0.12)',
                                            backgroundColor: isOpen ? `${service.accentStrong}30` : 'transparent',
                                        }}
                                    >
                                        {isOpen ? (
                                            <Minus size={12} strokeWidth={2} style={{ color: service.accentLight }} />
                                        ) : (
                                            <Plus size={12} strokeWidth={2} className="text-white/30" />
                                        )}
                                    </div>
                                </button>

                                {/* ── Expanded panel ── */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="body"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            {/* Inner wrapper — NOT overflow-hidden, padding handles spacing */}
                                            <div className="pb-8 sm:pl-[calc(1.75rem+2.5rem+1.25rem)] md:pl-[calc(1.75rem+2.5rem+2rem)]">
                                                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16">
                                                    {/* Description */}
                                                    <p className="text-[14.5px] md:text-[15px] text-white/50 leading-[1.9] font-light">
                                                        {service.description}
                                                    </p>

                                                    {/* Bullets */}
                                                    <ul className="space-y-3 md:min-w-[220px]">
                                                        {service.bullets.map((bullet, idx) => (
                                                            <motion.li
                                                                key={idx}
                                                                initial={{ opacity: 0, x: 10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ duration: 0.3, delay: 0.05 + idx * 0.055 }}
                                                                className="flex items-center gap-3 text-[13px] text-white/45 font-light"
                                                            >
                                                                <span
                                                                    className="w-1 h-1 rounded-full shrink-0"
                                                                    style={{ backgroundColor: service.accentLight }}
                                                                />
                                                                {bullet}
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
