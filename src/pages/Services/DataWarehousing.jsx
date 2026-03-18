import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layers, BarChart3, TrendingUp, Zap, DollarSign, ArrowUpRight, ChevronRight } from 'lucide-react';
import { AnimatedHeading, AnimatedText } from '../../components/ui/AnimatedHeading';
import SEO from '../../components/seo/SEO';
import dataBanner from '../../assets/services/dataBanner.webp';
import dataSideImage from '../../assets/services/dataSideImage.webp';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const features = [
    {
        icon: Layers,
        title: 'Unified Data Integration',
        detail: 'Seamlessly consolidate data from multiple sources into one secure, scalable repository. Eliminate data silos and give every team access to a single version of truth.',
    },
    {
        icon: BarChart3,
        title: 'Advanced Analytics Enablement',
        detail: 'Transform raw data into actionable insights with optimized querying and BI tools. Every query returns faster, and every insight lands closer to real time.',
    },
    {
        icon: TrendingUp,
        title: 'Scalable Performance Architecture',
        detail: 'Handle growing data volumes with cloud-native warehousing that grows with your business. No more re-architecting when your data doubles — or doubles again.',
    },
    {
        icon: Zap,
        title: 'Real-Time Decision Support',
        detail: 'Instant access to clean, structured data for faster reporting and strategic decisions. Remove the lag between data creation and business action.',
    },
    {
        icon: DollarSign,
        title: 'Cost-Effective Storage Solutions',
        detail: 'Minimize expenses through intelligent compression, partitioning, and tiered storage options. Pay only for what you use — and always know exactly what that is.',
    },
];

const process = [
    { step: '01', title: 'Data Discovery', desc: 'Audit all existing data sources, formats, and quality to build a complete picture.' },
    {
        step: '02',
        title: 'Architecture Design',
        desc: 'Design a cloud-native warehouse schema optimized for your query patterns and growth.',
    },
    {
        step: '03',
        title: 'ETL Development',
        desc: 'Build robust Extract, Transform, Load pipelines that keep your warehouse fresh and reliable.',
    },
    { step: '04', title: 'BI Integration', desc: 'Connect your BI tools and dashboards for immediate self-service analytics access.' },
    {
        step: '05',
        title: 'Optimize & Monitor',
        desc: 'Continuously tune performance, storage costs, and query efficiency as your needs evolve.',
    },
];

const DataWarehousing = () => (
    <>
        <SEO
            title="Data Warehousing"
            description="Unify and modernize your data warehouse with Seanora Global—cloud-native architecture, ETL pipelines, BI integration, and performance optimization."
            path="/services/data-warehousing"
            keywords={['data warehousing', 'ETL', 'BI integration', 'data architecture', 'analytics enablement']}
        />
        <main className="bg-white overflow-hidden">
            {/* Hero */}
            <section className="bg-[#0F1114] relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-[#0284C7] rounded-full blur-[180px] opacity-[0.08] translate-x-1/2" />
                    <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[#413DF2] rounded-full blur-[150px] opacity-[0.05] -translate-x-1/3" />
                </div>
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px] relative z-10">
                    <motion.div {...fadeUp(0)}>
                        <div className="flex items-center gap-2 mb-6">
                            <Link
                                to="/services"
                                className="text-[0.875rem] font-medium text-[#FFFFFF80] hover:text-white transition-colors"
                            >
                                Services
                            </Link>
                            <ChevronRight size={12} className="text-white/20" />
                            <span className="text-[0.875rem] text-white/40">Data Warehousing</span>
                        </div>
                        <span className="inline-block text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#38BDF8] mb-5">
                            Data Warehousing
                        </span>
                        <AnimatedHeading
                            as="h1"
                            className="text-[3.5rem] md:text-[5rem] font-medium text-white leading-[1.04] tracking-[-0.02em] mb-6 max-w-3xl"
                        >
                            <AnimatedText text="Data Warehousing" />
                        </AnimatedHeading>
                        <p className="text-[1.25rem] text-[#FFFFFFB3] font-light leading-[1.8] max-w-2xl">
                            Data warehousing is used for storing and retrieving historical data to get useful insights into an
                            organization's operations. Centralized data hubs powering analytics, reporting, and real-time business
                            intelligence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <motion.div {...fadeUp(0)}>
                            <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#0284C7] mb-4 block">
                                Overview
                            </span>
                            <h2 className="text-[3rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em] mb-6">
                                Your data, <span className="text-[#00000080]">centralized</span>
                            </h2>
                            <p className="text-[1.25rem] text-[#888888] font-light leading-[1.8]">
                                Every business has a plethora of data strewn across several business structures. The depth of information
                                gathered is the most essential factor for precise inspection in determining how accurate an analysis is.
                            </p>
                        </motion.div>
                        <motion.div {...fadeUp(0.1)}>
                            <p className="text-[1.25rem] text-[#888888] font-light leading-[1.8] mb-6">
                                Customers can achieve this with the help of our DW and BI practice. We have the expertise and resources to
                                meet client needs and complete projects on time.
                            </p>
                            <p className="text-[1.25rem] text-[#888888] font-light leading-[1.8]">
                                We build centralized data hubs that power your analytics, reporting, and real-time business intelligence —
                                giving every team faster access to the insights that matter most.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Image placeholder */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                    src={dataBanner}
                    alt="data warehousing banner"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    width={1920}
                    height={800}
                />
            </div>

            {/* Features */}
            <section className="py-20 md:py-28 bg-[#F6F6F6]">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <motion.div {...fadeUp(0)} className="mb-14">
                        <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#0284C7] mb-4 block">
                            Capabilities
                        </span>
                        <h2 className="text-[3rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em]">
                            Five pillars of <span className="text-[#00000080]">data warehousing</span>
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {features.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <motion.div
                                    key={i}
                                    {...fadeUp(i * 0.07)}
                                    className={`group flex gap-5 p-7 rounded-2xl bg-white border border-[#E7E7E7] hover:border-[#0284C7]/20 hover:bg-[#F0F9FF] transition-all duration-500 cursor-default ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 transition-all duration-400 group-hover:bg-[#0284C7] group-hover:text-white group-hover:scale-105">
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h5 className="text-[1.25rem] font-semibold text-[#070707] mb-2 leading-snug">{f.title}</h5>
                                        <p className="text-[1rem] text-[#888888] leading-[1.75] font-light">{f.detail}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 md:py-28 bg-[#0F1114] relative overflow-hidden">
                <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[#0284C7] rounded-full blur-[160px] opacity-[0.06] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px] relative z-10">
                    <motion.div {...fadeUp(0)} className="mb-14">
                        <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#38BDF8] mb-4 block">
                            Our Process
                        </span>
                        <h2 className="text-[3rem] md:text-[4rem] font-medium text-white leading-[1.08] tracking-[-0.02em]">
                            How we <span className="text-[#FFFFFF80]">build your warehouse</span>
                        </h2>
                    </motion.div>
                    <div className="divide-y divide-white/[0.06]">
                        {process.map((p, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp(i * 0.07)}
                                className="group grid grid-cols-[3rem_1fr_2fr] items-start gap-8 py-7 hover:bg-white/[0.02] -mx-4 px-4 rounded-xl transition-colors duration-300 cursor-default"
                            >
                                <span className="text-[0.875rem] font-mono tracking-[0.14em] text-white/20 pt-1">{p.step}</span>
                                <h5 className="text-[1.5rem] font-medium text-white/75 group-hover:text-white transition-colors duration-300 leading-snug">
                                    {p.title}
                                </h5>
                                <p className="text-[1rem] text-white/40 font-light leading-[1.8]">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image + text */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp(0)}>
                            <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#0284C7] mb-4 block">
                                Why It Matters
                            </span>
                            <h2 className="text-[3rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em] mb-6">
                                Insights without <span className="text-[#00000080]">the wait</span>
                            </h2>
                            <p className="text-[1.25rem] text-[#888888] font-light leading-[1.8] mb-6">
                                Modern business moves fast. A well-architected data warehouse means your analysts spend time on insights —
                                not wrangling data. Your executives get answers in seconds, not days.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Sub-second query performance',
                                    'Automated data freshness guarantees',
                                    'Self-service BI for every team',
                                    'Governed, auditable data lineage',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[1rem] text-[#4F4F4F] font-light">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div {...fadeUp(0.12)} className="rounded-3xl h-[420px] overflow-hidden">
                            <img
                                src={dataSideImage}
                                alt="data warehousing side image"
                                className="w-full h-full object-cover object-center"
                                loading="lazy"
                                width={900}
                                height={700}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#F6F6F6] border-t border-[#E7E7E7]">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <motion.div {...fadeUp(0)} className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h4 className="text-[2rem] font-medium text-[#070707] mb-2">Ready to centralise your data?</h4>
                            <p className="text-[1rem] text-[#888888] font-light">
                                Let's build a warehouse that powers your entire business.
                            </p>
                        </div>
                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-3 bg-[#0284C7] text-white px-7 py-4 rounded-full text-[0.875rem] font-semibold hover:bg-[#0369A1] transition-colors duration-300 shrink-0"
                        >
                            Start the Conversation{' '}
                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    </>
);

export default DataWarehousing;
