import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, Zap, Layers, HardDrive, ArrowUpRight, ChevronRight } from 'lucide-react';
import { AnimatedHeading, AnimatedText } from '../../components/ui/AnimatedHeading';
import SEO from '../../components/seo/SEO';
import bigDataBanner from '../../assets/services/bigDataBanner.webp';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const capabilities = [
    {
        icon: Database,
        title: 'Data Lake Implementation',
        detail: 'Centralise structured and unstructured data at any scale. Build a single source of truth that every team can query confidently.',
    },
    {
        icon: Zap,
        title: 'Real-Time Stream Processing',
        detail: "Process and react to data the moment it's generated. Enable instant decisions with sub-second latency pipelines.",
    },
    {
        icon: Layers,
        title: 'Big Data Architecture Design',
        detail: 'Scalable architectures tailored to your data volume and use case. Future-proof systems designed for terabytes to zettabytes.',
    },
    {
        icon: HardDrive,
        title: 'Scalable Data Processing Frameworks',
        detail: 'From terabytes to zettabytes — we engineer for growth. Distributed compute frameworks that never become a bottleneck.',
    },
];

const platforms = [
    {
        name: 'Cassandra',
        color: '#1E5AA5',
        bg: '#1E5AA512',
        desc: 'In recent years, the size of databases has surpassed the capability of typical RDBMS utilised in businesses. Because of fast-paced market developments, businesses are depending more on likelihood than potential.',
        detail: "Cassandra makes your enormous information vision a reality. Seanora Global assists clients from a variety of industries in realising their big data vision. With Cassandra's help, we're moving our clients' applications from batch to real-time mode.",
    },
    {
        name: 'Hadoop',
        color: '#0284C7',
        bg: '#0284C712',
        desc: 'Hadoop has established itself as the most popular Big Data processing platform and is becoming the preferred choice for constructing Big Data systems, with support from all major cloud hosting providers such as Microsoft, Google, and Amazon.',
        detail: "Hadoop provides unrivalled performance and scalability thanks to its robust distributed storage and compute mechanisms. Hadoop is the greatest way to handle all types of data, whether it's structured, semi-structured, or unstructured.",
    },
];

const BigData = () => (
    <>
        <SEO
            title="Big Data"
            description="Design scalable big data architectures, real-time pipelines, and data lakes with Seanora Global—built for performance from terabytes to zettabytes."
            path="/services/big-data"
            keywords={['big data', 'data lake', 'stream processing', 'data architecture', 'Hadoop', 'Cassandra']}
        />
        <main className="bg-white overflow-hidden">
            {/* Hero */}
            <section className="bg-[#0F1114] relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-0 top-1/3 w-[700px] h-[700px] bg-[#1E5AA5] rounded-full blur-[200px] opacity-[0.07] -translate-x-1/2" />
                    <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#413DF2] rounded-full blur-[180px] opacity-[0.05] translate-x-1/3" />
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
                            <span className="text-[0.875rem] text-white/40">Big Data</span>
                        </div>
                        <span className="inline-block text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#93C5FD] mb-5">
                            Big Data
                        </span>
                        <AnimatedHeading
                            as="h1"
                            className="text-[3.5rem] md:text-[5rem] font-medium text-white leading-[1.04] tracking-[-0.02em] mb-6 max-w-3xl"
                        >
                            <AnimatedText text="Big Data" />
                        </AnimatedHeading>
                        <p className="text-[1.25rem] text-[#FFFFFFB3] font-light leading-[1.8] max-w-2xl">
                            Big data analytics is the use of advanced analytic techniques applied to very large, heterogeneous data sets —
                            helping you make better, faster decisions and forecast future outcomes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <motion.div {...fadeUp(0)}>
                            <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#1E5AA5] mb-4 block">
                                Overview
                            </span>
                            <h2 className="text-[3rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em] mb-6">
                                Data at <span className="text-[#00000080]">any scale</span>
                            </h2>
                            <p className="text-[1.25rem] text-[#888888] font-light leading-[1.8]">
                                Big data analytics is the use of advanced analytic techniques applied to very large, heterogeneous big data
                                sets — which can contain structured, semi-structured, and unstructured data, as well as data from many
                                sources and sizes ranging from terabytes to zettabytes.
                            </p>
                        </motion.div>
                        <motion.div {...fadeUp(0.1)}>
                            <p className="text-[1.25rem] text-[#888888] font-light leading-[1.8]">
                                Big data analytics helps you make better and faster decisions, model and forecast future outcomes, and
                                enhance business intelligence across your entire organization — giving every team the insights they need to
                                perform at their best.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Image placeholder */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                    src={bigDataBanner}
                    alt="Big Data Banner"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    width={1920}
                    height={800}
                />
            </div>

            {/* Capabilities */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <motion.div {...fadeUp(0)} className="mb-14">
                        <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#1E5AA5] mb-4 block">
                            Capabilities
                        </span>
                        <h2 className="text-[3rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em]">
                            What we <span className="text-[#00000080]">engineer</span>
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {capabilities.map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <motion.div
                                    key={i}
                                    {...fadeUp(i * 0.08)}
                                    className="group flex gap-6 p-8 rounded-2xl border border-[#E7E7E7] hover:border-[#1E5AA5]/20 hover:bg-[#F3F5FF] transition-all duration-500 cursor-default"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#EDF3FF] text-[#1E5AA5] flex items-center justify-center shrink-0 transition-all duration-400 group-hover:bg-[#1E5AA5] group-hover:text-white group-hover:scale-105">
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h5 className="text-[1.25rem] font-semibold text-[#070707] mb-3 leading-snug">{c.title}</h5>
                                        <p className="text-[1rem] text-[#888888] leading-[1.75] font-light">{c.detail}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Platforms */}
            <section className="py-20 md:py-28 bg-[#0F1114] relative overflow-hidden">
                <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-[#1E5AA5] rounded-full blur-[180px] opacity-[0.06] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px] relative z-10">
                    <motion.div {...fadeUp(0)} className="mb-14">
                        <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#93C5FD] mb-4 block">
                            Platforms
                        </span>
                        <h2 className="text-[3rem] md:text-[4rem] font-medium text-white leading-[1.08] tracking-[-0.02em]">
                            Powered by <span className="text-[#FFFFFF80]">industry leaders</span>
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {platforms.map((p, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp(i * 0.1)}
                                className="p-8 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300 cursor-default"
                            >
                                <h4 className="text-[2rem] font-semibold mb-4" style={{ color: p.color }}>
                                    {p.name}
                                </h4>
                                <p className="text-[1rem] text-white/50 font-light leading-[1.8] mb-4">{p.desc}</p>
                                <p className="text-[1rem] text-white/35 font-light leading-[1.8]">{p.detail}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#F6F6F6] border-t border-[#E7E7E7]">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <motion.div {...fadeUp(0)} className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h4 className="text-[2rem] font-medium text-[#070707] mb-2">Ready to harness your big data?</h4>
                            <p className="text-[1rem] text-[#888888] font-light">Let's architect a data solution that scales with you.</p>
                        </div>
                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-3 bg-[#1E5AA5] text-white px-7 py-4 rounded-full text-[0.875rem] font-semibold hover:bg-[#174F94] transition-colors duration-300 shrink-0"
                        >
                            Talk to an Expert{' '}
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

export default BigData;
