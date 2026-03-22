import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { AnimatedHeading, AnimatedText } from '../../components/ui/AnimatedHeading';
import SEO, { buildBreadcrumbSchema, buildServiceSchema } from '../../components/seo/SEO';
import cloudBanner from '../../assets/services/cloudBanner.webp';
import cloudSideImage from '../../assets/services/cloudSideImage.webp';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const providers = [
    {
        name: 'Amazon Web Services',
        tag: 'AWS',
        tagColor: '#FF9900',
        tagBg: '#FF990018',
        desc: 'World-class, scalable infrastructure as your one-stop cloud solution for any application technology.',
        services: [
            'Integration & analytics',
            'Cloud migration',
            'Storage & databases',
            'Hosting, backup & auto-scaling',
            'Performance monitoring',
        ],
    },
    {
        name: 'Google Cloud',
        tag: 'GCP',
        tagColor: '#4285F4',
        tagBg: '#4285F418',
        desc: 'Best-in-class infrastructure optimized for running high-performance applications efficiently.',
        services: [
            'Advanced storage solutions',
            'Seamless integration',
            'Robust database services',
            'Performance monitoring',
            'BigQuery analytics',
        ],
    },
    {
        name: 'Microsoft Azure',
        tag: 'Azure',
        tagColor: '#0078D4',
        tagBg: '#0078D418',
        desc: 'Enterprise-grade tools supporting open-source and proprietary technologies seamlessly.',
        services: [
            'Expert cloud migration',
            'Minimal downtime transitions',
            'Enterprise security',
            'Hybrid cloud support',
            'Active Directory integration',
        ],
    },
];

const securityFeatures = [
    { title: 'Robust Network Security', desc: 'Multi-layer firewall, intrusion detection, and real-time threat monitoring.' },
    { title: 'Data Backup & Disaster Recovery', desc: 'Automated backups and tested recovery plans to protect your critical data.' },
    { title: 'Compliance & Risk Management', desc: 'HIPAA, SOC 2, GDPR-ready frameworks built into every deployment.' },
    { title: 'Zero Trust Architecture', desc: 'Identity-first security that verifies every user, device, and connection.' },
];

const CloudInfrastructure = () => (
    <>
        <SEO
            title="Cloud Infrastructure & Security"
            description="Migrate, modernize, and secure your cloud infrastructure with Seanora Global. AWS, Azure, and Google Cloud solutions with enterprise-grade security."
            path="/services/cloud-infrastructure"
            jsonLd={[
                buildServiceSchema({
                    name: 'Cloud Infrastructure & Security',
                    description:
                        'Migrate, modernize, and secure your cloud infrastructure with Seanora Global. AWS, Azure, and Google Cloud solutions with enterprise-grade security.',
                    path: '/services/cloud-infrastructure',
                    serviceType: 'Cloud Infrastructure and Security Services',
                }),
                buildBreadcrumbSchema([
                    { name: 'Home', item: 'https://seanoraglobal.com/' },
                    { name: 'Services', item: 'https://seanoraglobal.com/services' },
                    {
                        name: 'Cloud Infrastructure & Security',
                        item: 'https://seanoraglobal.com/services/cloud-infrastructure',
                    },
                ]),
            ]}
        />
        <main className="bg-white overflow-hidden">
            {/* Hero */}
            <section className="bg-[#0F1114] relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-0 center w-[800px] h-[800px] bg-[#1E5AA5] rounded-full blur-[200px] opacity-[0.07] -translate-x-1/2 top-1/2 -translate-y-1/2" />
                </div>
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px] relative z-10">
                    <m.div {...fadeUp(0)}>
                        <div className="flex items-center gap-2 mb-6">
                            <Link
                                to="/services"
                                className="text-[0.875rem] font-medium text-[#FFFFFF80] hover:text-white transition-colors"
                            >
                                Services
                            </Link>
                            <ChevronRight size={12} className="text-white/20" />
                            <span className="text-[0.875rem] text-white/40">Cloud Infrastructure &amp; Security</span>
                        </div>
                        <span className="inline-block text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#93C5FD] mb-5">
                            Cloud & Security
                        </span>
                        <AnimatedHeading
                            as="h1"
                            className="text-[3.5rem] md:text-[5rem] font-medium text-white leading-[1.04] tracking-[-0.02em] mb-6 max-w-3xl"
                        >
                            <AnimatedText text="Cloud Infrastructure & Security" />
                        </AnimatedHeading>
                        <p className="text-[1.25rem] text-[#FFFFFFB3] font-light leading-[1.8] max-w-2xl">
                            Scalable, secure cloud platforms powering modern businesses with seamless performance and reliability across
                            AWS, Google Cloud, and Microsoft Azure.
                        </p>
                    </m.div>
                </div>
            </section>

            {/* Image placeholder */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                    src={cloudBanner}
                    alt="Cloud Infrastructure Banner"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    decoding="async"
                    width={1920}
                    height={800}
                />
            </div>
            {/* Cloud Providers */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <m.div {...fadeUp(0)} className="mb-14">
                        <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#1E5AA5] mb-4 block">
                            Cloud Partners
                        </span>
                        <h2 className="text-[3rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em]">
                            Three cloud platforms. <span className="text-[#00000080]">One team.</span>
                        </h2>
                    </m.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {providers.map((p, i) => (
                            <m.div
                                key={i}
                                {...fadeUp(i * 0.1)}
                                className="group p-8 rounded-2xl border border-[#E7E7E7] hover:border-[#D1D1D1] hover:shadow-lg transition-all duration-500 cursor-default"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <span
                                        className="text-[0.875rem] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-lg"
                                        style={{ color: p.tagColor, backgroundColor: p.tagBg }}
                                    >
                                        {p.tag}
                                    </span>
                                </div>
                                <h4 className="text-[1.75rem] font-semibold text-[#070707] mb-3 leading-snug">{p.name}</h4>
                                <p className="text-[1rem] text-[#888888] font-light leading-[1.75] mb-6">{p.desc}</p>
                                <div className="h-px bg-[#E7E7E7] mb-5" />
                                <ul className="space-y-2.5">
                                    {p.services.map((s, j) => (
                                        <li key={j} className="flex items-center gap-3 text-[1rem] text-[#4F4F4F] font-light">
                                            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: p.tagColor }} />
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security */}
            <section className="py-20 md:py-28 bg-[#0F1114] relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#1E5AA5] rounded-full blur-[160px] opacity-[0.07] translate-x-1/3 translate-y-1/3 pointer-events-none" />
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px] relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <m.div {...fadeUp(0)}>
                            <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#93C5FD] mb-4 block">
                                Security First
                            </span>
                            <h2 className="text-[3rem] md:text-[4rem] font-medium text-white leading-[1.08] tracking-[-0.02em] mb-6">
                                Security built <span className="text-[#FFFFFF80]">into every layer</span>
                            </h2>
                            <p className="text-[1.25rem] text-[#FFFFFFB3] font-light leading-[1.8]">
                                We don't bolt on security after the fact. Every cloud solution we architect is designed with security,
                                compliance, and resilience as core requirements — not afterthoughts.
                            </p>
                        </m.div>
                        <div className="grid grid-cols-1 gap-4">
                            {securityFeatures.map((f, i) => (
                                <m.div
                                    key={i}
                                    {...fadeUp(i * 0.08)}
                                    className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300 cursor-default"
                                >
                                    <h5 className="text-[1.25rem] font-semibold text-white/80 mb-2">{f.title}</h5>
                                    <p className="text-[1rem] text-white/40 font-light leading-relaxed">{f.desc}</p>
                                </m.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Migration section */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <m.div {...fadeUp(0.12)} className="rounded-3xl h-[420px] overflow-hidden">
                            <img
                                src={cloudSideImage}
                                alt="Cloud Migration Image"
                                className="w-full h-full object-cover object-center"
                                loading="lazy"
                                decoding="async"
                                width={900}
                                height={700}
                            />
                        </m.div>
                        <m.div {...fadeUp(0)} className="order-1 lg:order-2">
                            <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#1E5AA5] mb-4 block">
                                Cloud Migration
                            </span>
                            <h2 className="text-[3rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em] mb-6">
                                Smooth migrations, <span className="text-[#00000080]">zero downtime</span>
                            </h2>
                            <p className="text-[1.25rem] text-[#888888] font-light leading-[1.8] mb-6">
                                Expert cloud migration services ensuring smooth transitions with minimal disruption. We handle the
                                complexity so your team stays focused on business.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Lift-and-shift migrations',
                                    'Re-architecture for cloud-native performance',
                                    'Hybrid and multi-cloud strategies',
                                    'Post-migration optimization and monitoring',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[1rem] text-[#4F4F4F] font-light">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E5AA5] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </m.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#F6F6F6] border-t border-[#E7E7E7]">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <m.div {...fadeUp(0)} className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h4 className="text-[2rem] font-medium text-[#070707] mb-2">Ready to move to the cloud?</h4>
                            <p className="text-[1rem] text-[#888888] font-light">Let's architect a solution built for your scale.</p>
                        </div>
                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-3 bg-[#1E5AA5] text-white px-7 py-4 rounded-full text-[0.875rem] font-semibold hover:bg-[#174F94] transition-colors duration-300 shrink-0"
                        >
                            Talk to an Architect{' '}
                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link>
                    </m.div>
                </div>
            </section>
        </main>
    </>
);

export default CloudInfrastructure;
