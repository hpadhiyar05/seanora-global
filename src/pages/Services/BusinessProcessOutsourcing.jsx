import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    DollarSign,
    Zap,
    UserCog,
    TrendingUp,
    Headphones,
    FileText,
    Code2,
    Clock,
    Star,
    ShieldCheck,
    PieChart,
    Globe,
    ArrowUpRight,
    ChevronRight,
} from 'lucide-react';
import { AnimatedHeading, AnimatedText } from '../../components/ui/AnimatedHeading';
import SEO from '../../components/seo/SEO';
import bpoBanner from '../../assets/services/bpoBanner.webp';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const highlights = [
    {
        icon: DollarSign,
        title: 'Save Operational Costs',
        desc: 'Reduce overhead by minimizing in-house infrastructure and hiring expenses.',
    },
    { icon: Zap, title: 'Boost Efficiency', desc: 'Streamline workflows with dedicated teams focused on core processes.' },
    { icon: UserCog, title: 'Access Expert Talent', desc: 'Immediate access to skilled professionals without training delays.' },
    { icon: TrendingUp, title: 'Scale Faster', desc: 'Ramp service capacity up or down instantly based on business demand.' },
];

const solutions = [
    {
        icon: Headphones,
        title: 'Customer Support Outsourcing',
        intro: 'We help businesses deliver consistent and professional customer experiences through:',
        items: ['Voice, email, and chat support', '24/7 customer assistance', 'Order tracking, queries, and issue resolution'],
        note: 'Our trained support teams ensure fast response times and improved customer satisfaction.',
    },
    {
        icon: FileText,
        title: 'Back Office Support Services',
        intro: 'Our back-office outsourcing helps you manage routine tasks accurately and efficiently:',
        items: ['Data entry and data processing', 'Document management', 'Reporting and administrative support'],
        note: 'This ensures smooth operations while reducing internal workload.',
    },
    {
        icon: DollarSign,
        title: 'Finance & Accounting Support',
        intro: 'We assist businesses with essential financial processes such as:',
        items: ['Invoice processing', 'Payroll support', 'Accounts payable and receivable', 'Financial data management'],
        note: 'Our approach helps improve accuracy and compliance while lowering costs.',
    },
    {
        icon: UserCog,
        title: 'Human Resource Process Outsourcing',
        intro: 'We handle HR-related tasks so your internal teams can focus on people and performance:',
        items: ['Recruitment coordination', 'Employee onboarding support', 'HR documentation and compliance assistance'],
        note: null,
    },
    {
        icon: Code2,
        title: 'Technical & IT Support Outsourcing',
        intro: 'Our skilled teams provide technical assistance for:',
        items: ['Software and application support', 'Basic IT troubleshooting', 'Customer technical queries'],
        note: 'This ensures smooth service delivery and better user experiences.',
    },
];

const advantages = [
    { icon: Clock, label: 'Faster Turnaround' },
    { icon: Star, label: 'Improved Quality' },
    { icon: ShieldCheck, label: 'Reduced Risks' },
    { icon: PieChart, label: 'Revenue Focus' },
    { icon: Globe, label: 'Global Scaling' },
];

const industries = [
    'IT & Software Companies',
    'Financial Services',
    'E-commerce Businesses',
    'Telecom & Service Companies',
    'Healthcare Providers',
    'Startups and SMEs',
];

const BusinessProcessOutsourcing = () => (
    <>
        <SEO
            title="Business Process Outsourcing (BPO)"
            description="Scale operations with Seanora Global BPO—customer support, back office, finance & accounting, and more. Reduce costs and improve efficiency."
            path="/services/bpo"
            keywords={[
                'business process outsourcing',
                'BPO',
                'customer support outsourcing',
                'back office outsourcing',
                'finance and accounting outsourcing',
            ]}
        />
        <main className="bg-white overflow-hidden">
            {/* Hero */}
            <section className="bg-[#0F1114] relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-[#0284C7] rounded-full blur-[180px] opacity-[0.08] translate-x-1/2" />
                    <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[#1E5AA5] rounded-full blur-[150px] opacity-[0.06] -translate-x-1/3" />
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
                            <span className="text-[0.875rem] text-white/40">Business Process Outsourcing</span>
                        </div>
                        <span className="inline-block text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#38BDF8] mb-5">
                            Outsourcing
                        </span>
                        <AnimatedHeading
                            as="h1"
                            className="text-[3.5rem] md:text-[5rem] font-medium text-white leading-[1.04] tracking-[-0.02em] mb-6 max-w-3xl"
                        >
                            <AnimatedText text="Business Process Outsourcing" />
                        </AnimatedHeading>
                        <p className="text-[1.25rem] text-[#FFFFFFB3] font-light leading-[1.8] max-w-2xl">
                            Smart outsourcing solutions to help your business grow faster. At Seanora Global, we work as an extension of
                            your team — managing time-consuming processes so you can focus on strategy, innovation, and customers.
                        </p>
                    </m.div>
                </div>
            </section>

            {/* What is BPO */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <m.div {...fadeUp(0)}>
                            <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#0284C7] mb-4 block">
                                About BPO
                            </span>
                            <h2 className="text-[3rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em] mb-6">
                                What is Business <span className="text-[#00000080]">Process Outsourcing?</span>
                            </h2>
                            <p className="text-[1.25rem] text-[#888888] font-light leading-[1.8] mb-5">
                                Business Process Outsourcing (BPO) means assigning non-core business activities to a trusted external
                                partner. These activities may include customer support, data handling, back-office operations, finance
                                tasks, or technical assistance.
                            </p>
                            <p className="text-[1.25rem] text-[#888888] font-light leading-[1.8]">
                                Instead of investing heavily in in-house teams and infrastructure, businesses choose BPO services to gain
                                strategic advantages and redirect resources toward core growth initiatives.
                            </p>
                        </m.div>
                        <div className="grid grid-cols-1 gap-4">
                            {highlights.map((h, i) => {
                                const Icon = h.icon;
                                return (
                                    <m.div
                                        key={i}
                                        {...fadeUp(i * 0.07)}
                                        className="group flex gap-5 p-5 rounded-2xl border border-[#E7E7E7] hover:border-[#0284C7]/20 hover:bg-[#F0F9FF] transition-all duration-400 cursor-default"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 transition-all duration-400 group-hover:bg-[#0284C7] group-hover:text-white">
                                            <Icon size={18} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h6 className="text-[1.25rem] font-semibold text-[#070707] mb-1">{h.title}</h6>
                                            <p className="text-[1rem] text-[#888888] font-light leading-relaxed">{h.desc}</p>
                                        </div>
                                    </m.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Image placeholder */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                    src={bpoBanner}
                    alt="descriptive alt text"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    decoding="async"
                    width={1920}
                    height={800}
                />
            </div>

            {/* Solutions */}
            <section className="py-20 md:py-28 bg-[#F6F6F6]">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <m.div {...fadeUp(0)} className="mb-14">
                        <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#0284C7] mb-4 block">
                            Our BPO Service Solutions
                        </span>
                        <h2 className="text-[3rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em]">
                            Five ways we <span className="text-[#00000080]">support your business</span>
                        </h2>
                    </m.div>
                    <div className="flex flex-wrap justify-center gap-5">
                        {solutions.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <m.div
                                    key={i}
                                    {...fadeUp(i * 0.07)}
                                    className="group p-7 rounded-2xl bg-white border border-[#E7E7E7] hover:border-[#0284C7]/20 hover:bg-[#F0F9FF] transition-all duration-500 cursor-default w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-5 transition-all duration-400 group-hover:bg-[#0284C7] group-hover:text-white group-hover:scale-105">
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <h5 className="text-[1.25rem] font-semibold text-[#070707] mb-3 leading-snug">{s.title}</h5>
                                    <p className="text-[1rem] text-[#888888] font-light leading-relaxed mb-3">{s.intro}</p>
                                    <ul className="space-y-2 mb-3">
                                        {s.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2.5 text-[1rem] text-[#4F4F4F] font-light">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0284C7] shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    {s.note && <p className="text-[0.875rem] text-[#888888] font-light italic">{s.note}</p>}
                                </m.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Competitive advantages */}
            <section className="py-20 md:py-28 bg-[#0F1114] relative overflow-hidden">
                <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-[#0284C7] rounded-full blur-[160px] opacity-[0.06] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px] relative z-10">
                    <m.div {...fadeUp(0)} className="text-center mb-14">
                        <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#38BDF8] mb-4 block">
                            Competitive Edge
                        </span>
                        <h2 className="text-[3rem] md:text-[4rem] font-medium text-white leading-[1.08] tracking-[-0.02em] mb-4">
                            How BPO helps your business <span className="text-[#FFFFFF80]">stay competitive</span>
                        </h2>
                        <p className="text-[1.25rem] text-white/40 font-light">Strategic advantages that drive growth</p>
                    </m.div>

                    <div className="flex flex-wrap justify-center gap-6 mb-14">
                        {advantages.map((a, i) => {
                            const Icon = a.icon;
                            return (
                                <m.div key={i} {...fadeUp(i * 0.08)} className="flex flex-col items-center gap-3 min-w-[120px]">
                                    <div className="w-16 h-16 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center">
                                        <Icon size={24} className="text-[#38BDF8]" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[1rem] text-white/60 font-light text-center">{a.label}</span>
                                </m.div>
                            );
                        })}
                    </div>

                    <m.div {...fadeUp(0.1)} className="text-center mb-12">
                        <p className="text-[1.25rem] italic text-white/25 font-light">
                            "Outsourcing is not just about saving money — it's about working smarter."
                        </p>
                    </m.div>

                    {/* Industries */}
                    <m.div {...fadeUp(0.1)} className="border-t border-white/[0.07] pt-10">
                        <p className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-white/25 mb-5 text-center">
                            Industries We Support
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {industries.map((ind, i) => (
                                <span
                                    key={i}
                                    className="text-[1rem] text-white/50 font-light px-4 py-2 rounded-full border border-white/[0.08] hover:border-white/20 hover:text-white/70 transition-all duration-300 cursor-default"
                                >
                                    {ind}
                                </span>
                            ))}
                        </div>
                    </m.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#F6F6F6] border-t border-[#E7E7E7]">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <m.div {...fadeUp(0)} className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h4 className="text-[2rem] font-medium text-[#070707] mb-2">Ready to grow faster with BPO?</h4>
                            <p className="text-[1rem] text-[#888888] font-light">Let us handle the processes — you focus on growth.</p>
                        </div>
                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-3 bg-[#0284C7] text-white px-7 py-4 rounded-full text-[0.875rem] font-semibold hover:bg-[#0369A1] transition-colors duration-300 shrink-0"
                        >
                            Get Started{' '}
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

export default BusinessProcessOutsourcing;
