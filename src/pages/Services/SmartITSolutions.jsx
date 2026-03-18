import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Headphones, TrendingUp, CheckCircle2, Zap, ArrowUpRight, ChevronRight } from 'lucide-react';
import { AnimatedHeading, AnimatedText } from '../../components/ui/AnimatedHeading';
import SEO from '../../components/seo/SEO';
import itSolutionBanner from '../../assets/services/itSolutionsBanner.webp';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const pillars = [
    {
        icon: Headphones,
        title: 'Technical Support & Troubleshooting',
        detail: 'Rapid issue resolution and proactive IT maintenance to keep your systems running smoothly 24/7. Our teams act fast so your operations never skip a beat.',
    },
    {
        icon: TrendingUp,
        title: 'IT Strategy Development',
        detail: 'Custom roadmaps that align technology with your business vision for scalable growth and innovation. We map technology to your outcomes — not the other way around.',
    },
    {
        icon: CheckCircle2,
        title: 'Technology Assessment & Planning',
        detail: 'In-depth audits and future-proof planning to select the right tools and infrastructure for your goals. Avoid costly mistakes with expert evaluation before you invest.',
    },
    {
        icon: Zap,
        title: 'Business Process Optimization',
        detail: 'Streamlined workflows through automation and IT integration, boosting efficiency and cutting costs. We find the friction in your operations and remove it permanently.',
    },
];

const outcomes = [
    { value: '40%', label: 'Average cost reduction' },
    { value: '3×', label: 'Faster project delivery' },
    { value: '99.9%', label: 'System uptime SLA' },
    { value: '24/7', label: 'Support coverage' },
];

const SmartITSolutions = () => (
    <>
        <SEO
            title="Smart IT Solutions & Professional Consulting"
            description="Strategy, assessment, support, and optimization—Seanora Global helps you align IT with business outcomes and deliver scalable improvements."
            path="/services/smart-it-solutions"
            keywords={['IT consulting', 'IT strategy', 'technology assessment', 'technical support', 'business process optimization']}
        />
        <main className="bg-white overflow-hidden">
            {/* Hero */}
            <section className="bg-[#0F1114] relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-[#0284C7] rounded-full blur-[180px] opacity-[0.08] translate-x-1/2" />
                    <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[#1E5AA5] rounded-full blur-[150px] opacity-[0.06] -translate-x-1/3" />
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
                            <span className="text-[0.875rem] text-white/40">Smart IT Solutions &amp; Professional Consulting</span>
                        </div>
                        <span className="inline-block text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#38BDF8] mb-5">
                            Consulting
                        </span>
                        <AnimatedHeading
                            as="h1"
                            className="text-[3.5rem] md:text-[5rem] font-medium text-white leading-[1.04] tracking-[-0.02em] mb-6 max-w-3xl"
                        >
                            <AnimatedText text="Smart IT Solutions & Professional Consulting" />
                        </AnimatedHeading>
                        <p className="text-[1.25rem] text-[#FFFFFFB3] font-light leading-[1.8] max-w-2xl">
                            We assist clients in developing end-to-end software solutions and tools that help them organize and realize the
                            full potential of every phase of project and product development.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats strip */}
            <section className="bg-[#1E5AA5] py-10">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/20">
                        {outcomes.map((o, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.08)} className="px-8 py-2 text-center">
                                <div className="text-[3rem] font-medium text-white leading-none tracking-[-0.02em] mb-1">{o.value}</div>
                                <div className="text-[0.875rem] text-white/60 font-light tracking-wide">{o.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image placeholder */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                    src={itSolutionBanner}
                    alt="descriptive alt text"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    width={1920}
                    height={800}
                />
            </div>

            {/* About */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <motion.div {...fadeUp(0)}>
                            <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#0284C7] mb-4 block">
                                About Our Consulting
                            </span>
                            <h2 className="text-[3rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em] mb-6">
                                End-to-end IT <span className="text-[#00000080]">excellence</span>
                            </h2>
                            <p className="text-[1.25rem] text-[#888888] font-light leading-[1.8]">
                                With our effective consulting services, any industry or organization can rest confident that strategic plans
                                will be created and the firm will be driven to attain its objectives in a well-organized and smart manner.
                            </p>
                        </motion.div>
                        <motion.div {...fadeUp(0.1)}>
                            <p className="text-[1.25rem] text-[#888888] font-light leading-[1.8] mb-6">
                                Our analytics services also enable enterprises to make a paradigm change in order to meet their needs and
                                expedite the development process in a cost-efficient way.
                            </p>
                            <p className="text-[1.25rem] text-[#888888] font-light leading-[1.8]">
                                Our various testing solutions produce flawless results, resulting in an efficient business outcome —
                                regardless of industry or organizational complexity.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Four pillars */}
            <section className="py-20 md:py-28 bg-[#F6F6F6]">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <motion.div {...fadeUp(0)} className="mb-14">
                        <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#0284C7] mb-4 block">
                            Our Approach
                        </span>
                        <h2 className="text-[3rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em]">
                            Four pillars of <span className="text-[#00000080]">smart consulting</span>
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {pillars.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <motion.div
                                    key={i}
                                    {...fadeUp(i * 0.08)}
                                    className="group flex gap-6 p-8 rounded-2xl bg-white border border-[#E7E7E7] hover:border-[#0284C7]/20 hover:bg-[#F0F9FF] transition-all duration-500 cursor-default"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 transition-all duration-400 group-hover:bg-[#0284C7] group-hover:text-white group-hover:scale-105">
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h5 className="text-[1.25rem] font-semibold text-[#070707] mb-3 leading-snug">{p.title}</h5>
                                        <p className="text-[1rem] text-[#888888] leading-[1.75] font-light">{p.detail}</p>
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
                            How We Work
                        </span>
                        <h2 className="text-[3rem] md:text-[4rem] font-medium text-white leading-[1.08] tracking-[-0.02em]">
                            Our consulting <span className="text-[#FFFFFF80]">process</span>
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                        {['Discover & Audit', 'Strategize', 'Implement', 'Optimize'].map((step, i) => (
                            <motion.div key={i} {...fadeUp(i * 0.1)} className="relative p-8 border-l border-white/[0.07] first:border-l-0">
                                <div className="text-[3rem] font-light text-white/[0.06] leading-none mb-4 tabular-nums">0{i + 1}</div>
                                <h5 className="text-[1.25rem] font-medium text-white/80 mb-3">{step}</h5>
                                <p className="text-[0.875rem] text-white/35 font-light leading-relaxed">
                                    {
                                        [
                                            'Deep-dive into your current IT landscape to identify gaps and opportunities.',
                                            'Build a tailored technology roadmap aligned to your business objectives.',
                                            'Deploy solutions with precision, minimising disruption to your operations.',
                                            'Continuously monitor, measure, and refine for maximum ROI.',
                                        ][i]
                                    }
                                </p>
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
                            <h4 className="text-[2rem] font-medium text-[#070707] mb-2">Ready to transform your IT strategy?</h4>
                            <p className="text-[1rem] text-[#888888] font-light">Talk to a consultant — no obligation, just clarity.</p>
                        </div>
                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-3 bg-[#0284C7] text-white px-7 py-4 rounded-full text-[0.875rem] font-semibold hover:bg-[#0369A1] transition-colors duration-300 shrink-0"
                        >
                            Book a Consultation{' '}
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

export default SmartITSolutions;
