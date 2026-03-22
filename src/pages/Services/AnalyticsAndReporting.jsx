import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, PieChart, TrendingUp, Database, ArrowUpRight, ChevronRight } from 'lucide-react';
import { AnimatedHeading, AnimatedText } from '../../components/ui/AnimatedHeading';
import SEO, { buildBreadcrumbSchema, buildServiceSchema } from '../../components/seo/SEO';
import analyticsBanner from '../../assets/services/analyticsBanner.webp';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const capabilities = [
    {
        icon: BarChart3,
        title: 'Real-time data visualization',
        detail: 'Live dashboards that surface trends and anomalies the moment they happen. Every stakeholder sees the same truth — instantly.',
    },
    {
        icon: PieChart,
        title: 'Custom business dashboards',
        detail: 'Bespoke reporting views tailored to your KPIs and team workflows. Built around how your business actually works.',
    },
    {
        icon: TrendingUp,
        title: 'Predictive analytics solutions',
        detail: 'Analytical models for forecasting outcomes and anticipating customer demand. Stop reacting — start predicting.',
    },
    {
        icon: Database,
        title: 'Multi-source data correlation',
        detail: 'Combine data from disparate sources into unified, actionable insights. We find the patterns your siloed data was hiding.',
    },
];

const platforms = [
    'Tableau',
    'Power BI',
    'Zoho Analytics',
    'ThoughtSpot',
    'Spotfire',
    'Octoboard',
    'Whatagraph',
    'Hive',
    'Wrike',
    'ProWorkflow',
    'Reportei',
];

const domains = [
    { name: 'Human Resources', desc: 'Workforce analytics, headcount trends, and HR reporting.' },
    { name: 'Financial Forecasting', desc: 'Revenue modelling, budget variance, and cash-flow prediction.' },
    { name: 'Digital Marketing', desc: 'Campaign performance, attribution, and conversion analytics.' },
    { name: 'Project Management', desc: 'Timeline adherence, resource utilisation, and delivery tracking.' },
    { name: 'Business Intelligence', desc: 'Cross-functional BI views that unify your entire operation.' },
    { name: 'Recruitment Analytics', desc: 'Pipeline velocity, cost-per-hire, and sourcing effectiveness.' },
];

const AnalyticsAndReporting = () => (
    <>
        <SEO
            title="Analytics and Reporting"
            description="Build real-time dashboards, custom reporting, and predictive analytics with Seanora Global. Turn multi-source data into decisions."
            path="/services/analytics-and-reporting"
            jsonLd={[
                buildServiceSchema({
                    name: 'Analytics and Reporting',
                    description:
                        'Build real-time dashboards, custom reporting, and predictive analytics with Seanora Global. Turn multi-source data into decisions.',
                    path: '/services/analytics-and-reporting',
                    serviceType: 'Analytics and Reporting Services',
                }),
                buildBreadcrumbSchema([
                    { name: 'Home', item: 'https://seanoraglobal.com/' },
                    { name: 'Services', item: 'https://seanoraglobal.com/services' },
                    {
                        name: 'Analytics and Reporting',
                        item: 'https://seanoraglobal.com/services/analytics-and-reporting',
                    },
                ]),
            ]}
        />
        <main className="bg-white overflow-hidden">
            {/* Hero */}
            <section className="bg-[#0F1114] relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-0 top-1/3 w-[700px] h-[700px] bg-[#1E5AA5] rounded-full blur-[200px] opacity-[0.07] -translate-x-1/2" />
                    <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#413DF2] rounded-full blur-[150px] opacity-[0.06] translate-x-1/3" />
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
                            <span className="text-[0.875rem] text-white/40">Analytics and Reporting</span>
                        </div>
                        <span className="inline-block text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#93C5FD] mb-5">
                            Analytics
                        </span>
                        <AnimatedHeading
                            as="h1"
                            className="text-[3.5rem] md:text-[5rem] font-medium text-white leading-[1.04] tracking-[-0.02em] mb-6 max-w-3xl"
                        >
                            <AnimatedText text="Analytics and Reporting" />
                        </AnimatedHeading>
                        <p className="text-[1.25rem] text-[#FFFFFFB3] font-light leading-[1.8] max-w-2xl">
                            Analytics has been one of our core competencies — spanning HR, financial forecasting, digital marketing, project
                            management, and business intelligence.
                        </p>
                    </m.div>
                </div>
            </section>

            {/* Image placeholder */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                    src={analyticsBanner}
                    alt="Analytics and Reporting Banner"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    decoding="async"
                    width={1920}
                    height={800}
                />
            </div>

            {/* Intro */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <m.div {...fadeUp(0)}>
                            <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#1E5AA5] mb-4 block">
                                Our Expertise
                            </span>
                            <h2 className="text-[3rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em] mb-6">
                                Data that <span className="text-[#00000080]">drives decisions</span>
                            </h2>
                            <p className="text-[1.25rem] text-[#888888] font-light leading-[1.8]">
                                Our data management and reporting services are expertly crafted and rationally planned. Our extensive
                                knowledge with data mining has been put to good use in the development of analytical models for businesses.
                            </p>
                        </m.div>
                        <m.div {...fadeUp(0.1)}>
                            <p className="text-[1.25rem] text-[#888888] font-light leading-[1.8] mb-6">
                                We have the most significant competitive edge in combining data from different sources with analytics tools
                                — delivering data correlation and insight to discover growth trends and ever-changing client requests.
                            </p>
                            <p className="text-[1.25rem] text-[#888888] font-light leading-[1.8]">
                                Many businesses have used our analytical reporting to gauge consumer confidence in real time and make
                                faster, smarter decisions.
                            </p>
                        </m.div>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-20 md:py-28 bg-[#F6F6F6]">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <m.div {...fadeUp(0)} className="mb-14">
                        <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#1E5AA5] mb-4 block">
                            Capabilities
                        </span>
                        <h2 className="text-[3rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em]">
                            What we <span className="text-[#00000080]">deliver</span>
                        </h2>
                    </m.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {capabilities.map((c, i) => {
                            const Icon = c.icon;
                            return (
                                <m.div
                                    key={i}
                                    {...fadeUp(i * 0.08)}
                                    className="group flex gap-6 p-8 rounded-2xl bg-white border border-[#E7E7E7] hover:border-[#1E5AA5]/20 hover:bg-[#F3F5FF] transition-all duration-500 cursor-default"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#EDF3FF] text-[#1E5AA5] flex items-center justify-center shrink-0 transition-all duration-400 group-hover:bg-[#1E5AA5] group-hover:text-white group-hover:scale-105">
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h5 className="text-[1.25rem] font-semibold text-[#070707] mb-3 leading-snug">{c.title}</h5>
                                        <p className="text-[1rem] text-[#888888] leading-[1.75] font-light">{c.detail}</p>
                                    </div>
                                </m.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Domains */}
            <section className="py-20 md:py-28 bg-[#0F1114] relative overflow-hidden">
                <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#1E5AA5] rounded-full blur-[160px] opacity-[0.06] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px] relative z-10">
                    <m.div {...fadeUp(0)} className="mb-14">
                        <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#93C5FD] mb-4 block">Domains</span>
                        <h2 className="text-[3rem] md:text-[4rem] font-medium text-white leading-[1.08] tracking-[-0.02em]">
                            Areas of <span className="text-[#FFFFFF80]">specialisation</span>
                        </h2>
                    </m.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {domains.map((d, i) => (
                            <m.div
                                key={i}
                                {...fadeUp(i * 0.07)}
                                className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300 cursor-default"
                            >
                                <h5 className="text-[1.25rem] font-medium text-white/80 mb-2">{d.name}</h5>
                                <p className="text-[1rem] text-white/35 font-light leading-relaxed">{d.desc}</p>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <m.div {...fadeUp(0)} className="mb-10">
                        <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#1E5AA5] mb-4 block">
                            Technology
                        </span>
                        <h2 className="text-[3rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em]">
                            Platforms we <span className="text-[#00000080]">work with</span>
                        </h2>
                    </m.div>
                    <div className="flex flex-wrap gap-3">
                        {platforms.map((p, i) => (
                            <span
                                key={i}
                                className="text-[1rem] font-medium px-5 py-3 rounded-full border border-[#E7E7E7] bg-[#F6F6F6] text-[#4F4F4F] hover:border-[#1E5AA5]/30 hover:bg-[#EDF3FF] hover:text-[#1E5AA5] transition-all duration-300 cursor-default"
                            >
                                {p}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#F6F6F6] border-t border-[#E7E7E7]">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <m.div {...fadeUp(0)} className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h4 className="text-[2rem] font-medium text-[#070707] mb-2">Ready to unlock your data's potential?</h4>
                            <p className="text-[1rem] text-[#888888] font-light">Let's build dashboards that actually drive decisions.</p>
                        </div>
                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-3 bg-[#1E5AA5] text-white px-7 py-4 rounded-full text-[0.875rem] font-semibold hover:bg-[#174F94] transition-colors duration-300 shrink-0"
                        >
                            Start a Project{' '}
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

export default AnalyticsAndReporting;
