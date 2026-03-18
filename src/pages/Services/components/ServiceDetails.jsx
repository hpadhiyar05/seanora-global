// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MonitorSmartphone, GraduationCap, Server, Users, Briefcase, Cloud, Plus, Minus } from 'lucide-react';

// const services = [
//     {
//         icon: GraduationCap,
//         index: '01',
//         category: 'Education',
//         title: 'IT Bootcamps',
//         description:
//             'Intensive, hands-on training programs designed to bridge the gap between academic knowledge and industry demands. Master the latest technologies and launch your career in IT.',
//         bullets: [
//             'Full-stack development bootcamps',
//             'Data Science & AI training',
//             'Cybersecurity intensive courses',
//             'Career coaching and placement support',
//         ],
//         accentStrong: '#1E5AA5',
//         accentLight: '#93C5FD',
//     },
//     {
//         icon: Briefcase,
//         index: '02',
//         category: 'Solutions',
//         title: 'Smart IT Solutions & Professional Consulting',
//         description:
//             'Strategic IT consulting and tailored solutions to optimize your business processes. We provide the expertise you need to navigate the complex digital landscape.',
//         bullets: [
//             'Strategic technology roadmap',
//             'Business process automation',
//             'IT infrastructure design',
//             'Managed professional services',
//         ],
//         accentStrong: '#0284C7',
//         accentLight: '#38BDF8',
//     },
//     {
//         icon: MonitorSmartphone,
//         index: '03',
//         category: 'Analytics',
//         title: 'Analytics and Reporting',
//         description:
//             'Transform your raw data into actionable insights. Our analytics and reporting solutions help you make informed decisions and drive business growth.',
//         bullets: [
//             'Real-time data visualization',
//             'Custom business dashboards',
//             'Predictive analytics solutions',
//             'Performance tracking and reporting',
//         ],
//         accentStrong: '#1E5AA5',
//         accentLight: '#93C5FD',
//     },
//     {
//         icon: Cloud,
//         index: '04',
//         category: 'Cloud & Security',
//         title: 'Cloud Infrastructure & Security',
//         description:
//             'Secure, scalable cloud solutions that protect your data and infrastructure. Leverage the full power of the cloud with robust security at every layer.',
//         bullets: [
//             'Cloud migration and management',
//             'Robust network security',
//             'Data backup and disaster recovery',
//             'Compliance and risk management',
//         ],
//         accentStrong: '#1E5AA5',
//         accentLight: '#93C5FD',
//     },
//     {
//         icon: Users,
//         index: '05',
//         category: 'Outsourcing',
//         title: 'Business Process Outsourcing',
//         description:
//             'Streamline your operations by outsourcing non-core business processes. Focus on your core competencies while we handle the rest with efficiency and precision.',
//         bullets: [
//             'IT help desk and support',
//             'Data entry and management',
//             'Customer support services',
//             'Back-office operations',
//         ],
//         accentStrong: '#0284C7',
//         accentLight: '#38BDF8',
//     },
//     {
//         icon: Server,
//         index: '06',
//         category: 'Big Data',
//         title: 'Big Data',
//         description:
//             'Harness the power of massive datasets. Our big data solutions enable you to store, process, and analyze complex information to uncover hidden patterns and trends.',
//         bullets: [
//             'Data lake implementation',
//             'Real-time stream processing',
//             'Big data architecture design',
//             'Scalable data processing frameworks',
//         ],
//         accentStrong: '#1E5AA5',
//         accentLight: '#93C5FD',
//     },
//     {
//         icon: Server,
//         index: '07',
//         category: 'Data Warehousing',
//         title: 'Data Warehousing',
//         description:
//             'Centralize your data for efficient reporting and analysis. Our data warehousing solutions provide a unified view of your business information for better decision-making.',
//         bullets: [
//             'Enterprise data warehouse design',
//             'ETL process development',
//             'Data integration and cleaning',
//             'Optimized query performance',
//         ],
//         accentStrong: '#0284C7',
//         accentLight: '#38BDF8',
//     },
// ];

// const ServiceDetails = () => {
//     const [openIndex, setOpenIndex] = useState(null);

//     return (
//         <section className="bg-[#0F1114] relative overflow-hidden">
//             {/* Subtle glow blobs */}
//             <div className="absolute inset-0 pointer-events-none z-0">
//                 <div className="absolute left-0 top-1/3 w-[600px] h-[600px] bg-[#1E5AA5] rounded-full blur-[160px] opacity-[0.07] -translate-x-1/2" />
//                 <div className="absolute right-0 bottom-1/4 w-[500px] h-[500px] bg-[#0284C7] rounded-full blur-[140px] opacity-[0.06] translate-x-1/3" />
//             </div>

//             <div className="container mx-auto px-4 lg:px-12 max-w-6xl relative z-10">
//                 {/* ── Section header ── */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 24 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, margin: '-60px' }}
//                     transition={{ duration: 0.75 }}
//                     className="py-16 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-white/[0.07]"
//                 >
//                     <div>
//                         <div className="flex items-center gap-3 mb-5">
//                             <div className="w-7 h-px bg-[#93C5FD]/60" />
//                             <span className="text-[11px] font-sans tracking-[0.26em] text-[#93C5FD] font-semibold uppercase">
//                                 What We Offer
//                             </span>
//                         </div>
//                         <h2 className="text-[2.5rem] md:text-[4rem] font-medium text-white leading-[1.08] tracking-tight">
//                             Six pillars of <span className="text-white/40">IT excellence</span>
//                         </h2>
//                     </div>
//                     <p className="text-[14.5px] text-white/40 font-light leading-relaxed max-w-xs md:text-right">
//                         Every service is built to integrate seamlessly across your entire technology ecosystem.
//                     </p>
//                 </motion.div>

//                 {/* ── Accordion rows ── */}
//                 <div className="divide-y divide-white/[0.06] pb-16 md:pb-20">
//                     {services.map((service, i) => {
//                         const Icon = service.icon;
//                         const isOpen = openIndex === i;

//                         return (
//                             <motion.div
//                                 key={service.index}
//                                 initial={{ opacity: 0, y: 16 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true, margin: '-20px' }}
//                                 transition={{ duration: 0.5, delay: i * 0.05 }}
//                             >
//                                 {/* ── Clickable header row ── */}
//                                 <button
//                                     onClick={() => setOpenIndex(isOpen ? null : i)}
//                                     className="w-full group flex items-center gap-5 md:gap-8 py-6 md:py-7 text-left"
//                                 >
//                                     {/* Index */}
//                                     <span className="text-[11px] font-mono tracking-[0.16em] text-white/20 shrink-0 w-7 hidden sm:block">
//                                         {service.index}
//                                     </span>

//                                     {/* Icon box */}
//                                     <div
//                                         className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
//                                         style={{
//                                             backgroundColor: isOpen ? service.accentStrong : 'rgba(255,255,255,0.06)',
//                                         }}
//                                     >
//                                         <Icon size={17} strokeWidth={1.5} style={{ color: isOpen ? '#fff' : 'rgba(255,255,255,0.40)' }} />
//                                     </div>

//                                     {/* Title + category */}
//                                     <div className="flex-grow min-w-0 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
//                                         <h3
//                                             className="text-[1.25rem] font-medium leading-snug tracking-tight transition-colors duration-300"
//                                             style={{ color: isOpen ? '#ffffff' : 'rgba(255,255,255,0.65)' }}
//                                         >
//                                             {service.title}
//                                         </h3>
//                                         <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-white/20 shrink-0">
//                                             {service.category}
//                                         </span>
//                                     </div>

//                                     {/* Toggle */}
//                                     <div
//                                         className="w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300"
//                                         style={{
//                                             borderColor: isOpen ? service.accentStrong : 'rgba(255,255,255,0.12)',
//                                             backgroundColor: isOpen ? `${service.accentStrong}30` : 'transparent',
//                                         }}
//                                     >
//                                         {isOpen ? (
//                                             <Minus size={12} strokeWidth={2} style={{ color: service.accentLight }} />
//                                         ) : (
//                                             <Plus size={12} strokeWidth={2} className="text-white/30" />
//                                         )}
//                                     </div>
//                                 </button>

//                                 {/* ── Expanded panel ── */}
//                                 <AnimatePresence initial={false}>
//                                     {isOpen && (
//                                         <motion.div
//                                             key="body"
//                                             initial={{ opacity: 0, height: 0 }}
//                                             animate={{ opacity: 1, height: 'auto' }}
//                                             exit={{ opacity: 0, height: 0 }}
//                                             transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
//                                             style={{ overflow: 'hidden' }}
//                                         >
//                                             {/* Inner wrapper — NOT overflow-hidden, padding handles spacing */}
//                                             <div className="pb-8 sm:pl-[calc(1.75rem+2.5rem+1.25rem)] md:pl-[calc(1.75rem+2.5rem+2rem)]">
//                                                 <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16">
//                                                     {/* Description */}
//                                                     <p className="text-[14.5px] md:text-[15px] text-white/50 leading-[1.9] font-light">
//                                                         {service.description}
//                                                     </p>

//                                                     {/* Bullets */}
//                                                     <ul className="space-y-3 md:min-w-[220px]">
//                                                         {service.bullets.map((bullet, idx) => (
//                                                             <motion.li
//                                                                 key={idx}
//                                                                 initial={{ opacity: 0, x: 10 }}
//                                                                 animate={{ opacity: 1, x: 0 }}
//                                                                 transition={{ duration: 0.3, delay: 0.05 + idx * 0.055 }}
//                                                                 className="flex items-center gap-3 text-[13px] text-white/45 font-light"
//                                                             >
//                                                                 <span
//                                                                     className="w-1 h-1 rounded-full shrink-0"
//                                                                     style={{ backgroundColor: service.accentLight }}
//                                                                 />
//                                                                 {bullet}
//                                                             </motion.li>
//                                                         ))}
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ServiceDetails;




import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    MonitorSmartphone, GraduationCap, Server, Users, Briefcase, Cloud,
    ArrowUpRight, Database, BarChart3, CheckCircle2, Layers,
    Headphones, FileText, DollarSign, UserCog, Code2,
    Clock, Star, ShieldCheck, PieChart, Globe,
    Cpu, HardDrive, Zap, TrendingUp,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   SERVICE DATA
───────────────────────────────────────────── */
const services = [
    {
        icon: GraduationCap,
        index: '01',
        path: '/services/it-bootcamps',
        category: 'Education',
        title: 'IT Bootcamps',
        accentStrong: '#1E5AA5',
        accentLight: '#93C5FD',
        description: 'Real-world projects led by seasoned IT professionals to build practical skills fast — structured for students and professionals targeting global IT careers.',
        bullets: [
            { icon: Zap,         text: 'Hands-On Learning with Expert Guidance',    detail: 'Real-world projects led by seasoned IT professionals to build practical skills fast.' },
            { icon: Cpu,         text: 'Master In-Demand Tech Stacks',               detail: 'Training on AWS, Python, DevOps and the tools powering top global companies.' },
            { icon: TrendingUp,  text: 'Structured Path from Basics to Advanced',    detail: 'Progressive curriculum covering fundamentals through expert-level concepts.' },
            { icon: CheckCircle2,text: 'Full Career Support Package',                detail: 'Live mentoring, interview coaching, resume building, and job placement assistance.' },
            { icon: Clock,       text: 'Flexible Schedules for Real Life',           detail: 'Online, weekend, or accelerated formats designed around your work and goals.' },
            { icon: Globe,       text: 'Built for Global Career Success',            detail: 'Tailored for students targeting H1B, Green Card, and international IT roles.' },
        ],
    },
    {
        icon: Briefcase,
        index: '02',
        path: '/services/smart-it-solutions',
        category: 'Consulting',
        title: 'Smart IT Solutions & Professional Consulting',
        accentStrong: '#0284C7',
        accentLight: '#38BDF8',
        description: 'We assist clients in developing end-to-end software solutions that help them organize and realize the full potential of every phase of project and product development.',
        bullets: [
            { icon: Headphones,   text: 'Technical Support & Troubleshooting',   detail: 'Rapid issue resolution and proactive IT maintenance to keep your systems running smoothly 24/7.' },
            { icon: TrendingUp,   text: 'IT Strategy Development',               detail: 'Custom roadmaps that align technology with your business vision for scalable growth.' },
            { icon: CheckCircle2, text: 'Technology Assessment & Planning',      detail: 'In-depth audits and future-proof planning to select the right tools and infrastructure.' },
            { icon: Zap,          text: 'Business Process Optimization',         detail: 'Streamlined workflows through automation and IT integration, boosting efficiency and cutting costs.' },
        ],
    },
    {
        icon: MonitorSmartphone,
        index: '03',
        path: '/services/analytics-and-reporting',
        category: 'Analytics',
        title: 'Analytics and Reporting',
        accentStrong: '#1E5AA5',
        accentLight: '#93C5FD',
        description: 'Analytics has been one of our core competencies — spanning HR, financial forecasting, digital marketing, project management, and business intelligence.',
        platforms: ['Tableau', 'Power BI', 'Zoho Analytics', 'ThoughtSpot', 'Spotfire', 'Octoboard', 'Whatagraph', 'Hive', 'Wrike', 'ProWorkflow', 'Reportei'],
        bullets: [
            { icon: BarChart3,    text: 'Real-time data visualization',          detail: 'Live dashboards that surface trends and anomalies the moment they happen.' },
            { icon: PieChart,     text: 'Custom business dashboards',             detail: 'Bespoke reporting views tailored to your KPIs and team workflows.' },
            { icon: TrendingUp,   text: 'Predictive analytics solutions',         detail: 'Analytical models for forecasting outcomes and anticipating customer demand.' },
            { icon: Database,     text: 'Multi-source data correlation',          detail: 'Combine data from disparate sources into unified, actionable insights.' },
        ],
    },
    {
        icon: Cloud,
        index: '04',
        path: '/services/cloud-infrastructure',
        category: 'Cloud & Security',
        title: 'Cloud Infrastructure & Security',
        accentStrong: '#1E5AA5',
        accentLight: '#93C5FD',
        description: 'Scalable, secure cloud platforms powering modern businesses with seamless performance and reliability across AWS, Google Cloud, and Microsoft Azure.',
        cloudProviders: [
            {
                name: 'Amazon Web Services',
                tag: 'AWS',
                desc: 'World-class, scalable infrastructure as your one-stop cloud solution for any application technology.',
                services: ['Integration & analytics', 'Cloud migration', 'Storage & databases', 'Hosting, backup & auto-scaling'],
                color: '#FF9900',
            },
            {
                name: 'Google Cloud',
                tag: 'GCP',
                desc: 'Best-in-class infrastructure optimized for running high-performance applications efficiently.',
                services: ['Advanced storage solutions', 'Seamless integration', 'Robust database services', 'Performance monitoring'],
                color: '#4285F4',
            },
            {
                name: 'Microsoft Azure',
                tag: 'Azure',
                desc: 'Enterprise-grade tools supporting open-source and proprietary technologies seamlessly.',
                services: ['Expert cloud migration', 'Minimal downtime transitions', 'Enterprise security', 'Hybrid cloud support'],
                color: '#0078D4',
            },
        ],
    },
    {
        icon: Users,
        index: '05',
        path: '/services/bpo',
        category: 'Outsourcing',
        title: 'Business Process Outsourcing',
        accentStrong: '#0284C7',
        accentLight: '#38BDF8',
        description: 'At Seanora Global, we provide reliable BPO services designed to reduce operational load, improve efficiency, and support long-term business growth.',
        bpoHighlights: [
            { icon: DollarSign,  title: 'Save Operational Costs',    desc: 'Reduce overhead by minimizing in-house infrastructure and hiring expenses.' },
            { icon: Zap,         title: 'Boost Efficiency',           desc: 'Streamline workflows with dedicated teams focused on core processes.' },
            { icon: UserCog,     title: 'Access Expert Talent',       desc: 'Immediate access to skilled professionals without training delays.' },
            { icon: TrendingUp,  title: 'Scale Faster',               desc: 'Ramp service capacity up or down instantly based on business demand.' },
        ],
        bpoSolutions: [
            {
                icon: Headphones,
                title: 'Customer Support Outsourcing',
                items: ['Voice, email, and chat support', '24/7 customer assistance', 'Order tracking, queries, and issue resolution'],
            },
            {
                icon: FileText,
                title: 'Back Office Support Services',
                items: ['Data entry and data processing', 'Document management', 'Reporting and administrative support'],
            },
            {
                icon: DollarSign,
                title: 'Finance & Accounting Support',
                items: ['Invoice processing', 'Payroll support', 'Accounts payable and receivable', 'Financial data management'],
            },
            {
                icon: UserCog,
                title: 'Human Resource Process Outsourcing',
                items: ['Recruitment coordination', 'Employee onboarding support', 'HR documentation and compliance'],
            },
            {
                icon: Code2,
                title: 'Technical & IT Support Outsourcing',
                items: ['Software and application support', 'Basic IT troubleshooting', 'Customer technical queries'],
            },
        ],
        industries: ['IT & Software Companies', 'Financial Services', 'E-commerce Businesses', 'Telecom & Service Companies', 'Healthcare Providers', 'Startups and SMEs'],
        advantages: [
            { icon: Clock,        label: 'Faster Turnaround' },
            { icon: Star,         label: 'Improved Quality' },
            { icon: ShieldCheck,  label: 'Reduced Risks' },
            { icon: PieChart,     label: 'Revenue Focus' },
            { icon: Globe,        label: 'Global Scaling' },
        ],
    },
    {
        icon: Server,
        index: '06',
        path: '/services/big-data',
        category: 'Big Data',
        title: 'Big Data',
        accentStrong: '#1E5AA5',
        accentLight: '#93C5FD',
        description: 'Big data analytics is the use of advanced analytic techniques applied to very large, heterogeneous data sets — helping you make better, faster decisions and forecast future outcomes.',
        bigDataPlatforms: [
            {
                name: 'Cassandra',
                color: '#1E5AA5',
                desc: 'Cassandra makes your enormous information vision a reality. With Cassandra\'s help, we\'re moving client applications from batch to real-time mode — ideal for businesses that have outgrown typical RDBMS.',
            },
            {
                name: 'Hadoop',
                color: '#0284C7',
                desc: 'The most popular Big Data processing platform — Hadoop provides unrivalled performance and scalability thanks to its robust distributed storage and compute mechanisms, supported by Microsoft, Google, and Amazon.',
            },
        ],
        bullets: [
            { icon: Database,     text: 'Data lake implementation',              detail: 'Centralise structured and unstructured data at any scale.' },
            { icon: Zap,          text: 'Real-time stream processing',           detail: 'Process and react to data the moment it\'s generated.' },
            { icon: Layers,       text: 'Big data architecture design',          detail: 'Scalable architectures tailored to your data volume and use case.' },
            { icon: HardDrive,    text: 'Scalable data processing frameworks',   detail: 'From terabytes to zettabytes — we engineer for growth.' },
        ],
    },
    {
        icon: HardDrive,
        index: '07',
        path: '/services/data-warehousing',
        category: 'Data Warehousing',
        title: 'Data Warehousing',
        accentStrong: '#0284C7',
        accentLight: '#38BDF8',
        description: 'Data warehousing is used for storing and retrieving historical data to get useful insights into an organization\'s operations. Centralized data hubs powering analytics, reporting, and real-time business intelligence.',
        bullets: [
            { icon: Layers,       text: 'Unified Data Integration',          detail: 'Seamlessly consolidate data from multiple sources into one secure, scalable repository.' },
            { icon: BarChart3,    text: 'Advanced Analytics Enablement',     detail: 'Transform raw data into actionable insights with optimized querying and BI tools.' },
            { icon: TrendingUp,   text: 'Scalable Performance Architecture', detail: 'Handle growing data volumes with cloud-native warehousing that grows with your business.' },
            { icon: Zap,          text: 'Real-Time Decision Support',        detail: 'Instant access to clean, structured data for faster reporting and strategic decisions.' },
            { icon: DollarSign,   text: 'Cost-Effective Storage Solutions',  detail: 'Minimize expenses through intelligent compression, partitioning, and tiered storage.' },
        ],
    },
];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS FOR RICH PANELS
───────────────────────────────────────────── */

const BulletList = ({ bullets, accentLight }) => (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
        {bullets.map((b, idx) => {
            const Icon = b.icon;
            return (
                <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 + idx * 0.05 }}
                    className="flex gap-3"
                >
                    <div className="mt-0.5 shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${accentLight}18` }}>
                        <Icon size={13} style={{ color: accentLight }} strokeWidth={1.8} />
                    </div>
                    <div>
                        <p className="text-[15px] font-medium text-white/75 leading-snug">{b.text}</p>
                        {b.detail && <p className="text-[14px] text-white/35 leading-relaxed mt-0.5 font-light">{b.detail}</p>}
                    </div>
                </motion.li>
            );
        })}
    </ul>
);

const CloudPanel = ({ providers, accentLight }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {providers.map((p, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-5"
            >
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[12px] font-bold tracking-[0.18em] uppercase px-2 py-0.5 rounded-md"
                        style={{ backgroundColor: `${p.color}25`, color: p.color }}>
                        {p.tag}
                    </span>
                </div>
                <h4 className="text-[15.5px] font-semibold text-white/80 mb-2">{p.name}</h4>
                <p className="text-[14px] text-white/40 font-light leading-relaxed mb-3">{p.desc}</p>
                <ul className="space-y-1.5">
                    {p.services.map((s, j) => (
                        <li key={j} className="flex items-center gap-2 text-[13.5px] text-white/35 font-light">
                            <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: accentLight }} />
                            {s}
                        </li>
                    ))}
                </ul>
            </motion.div>
        ))}
    </div>
);

const BpoPanel = ({ service }) => (
    <div className="space-y-8">
        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {service.bpoHighlights.map((h, i) => {
                const Icon = h.icon;
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.06 }}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4"
                    >
                        <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center"
                            style={{ backgroundColor: `${service.accentLight}18` }}>
                            <Icon size={15} style={{ color: service.accentLight }} strokeWidth={1.6} />
                        </div>
                        <p className="text-[14.5px] font-semibold text-white/70 leading-snug mb-1">{h.title}</p>
                        <p className="text-[13.5px] text-white/35 font-light leading-relaxed">{h.desc}</p>
                    </motion.div>
                );
            })}
        </div>

        {/* BPO Solutions grid */}
        <div>
            <p className="text-[12px] uppercase tracking-[0.22em] font-semibold text-white/25 mb-4">Our BPO Service Solutions</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {service.bpoSolutions.map((sol, i) => {
                    const Icon = sol.icon;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                            className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4"
                        >
                            <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center"
                                style={{ backgroundColor: `${service.accentLight}18` }}>
                                <Icon size={14} style={{ color: service.accentLight }} strokeWidth={1.6} />
                            </div>
                            <h4 className="text-[14.5px] font-semibold text-white/70 mb-2 leading-snug">{sol.title}</h4>
                            <ul className="space-y-1">
                                {sol.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-2 text-[13.5px] text-white/35 font-light">
                                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: service.accentLight }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>
        </div>

        {/* Advantages strip */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-5">
            <p className="text-[12px] uppercase tracking-[0.22em] font-semibold text-white/25 mb-4 text-center">
                How BPO Helps Your Business Stay Competitive
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-5">
                {service.advantages.map((adv, i) => {
                    const Icon = adv.icon;
                    return (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center"
                                style={{ backgroundColor: `${service.accentLight}12` }}>
                                <Icon size={16} style={{ color: service.accentLight }} strokeWidth={1.5} />
                            </div>
                            <span className="text-[13px] text-white/45 font-light text-center">{adv.label}</span>
                        </div>
                    );
                })}
            </div>
            <p className="text-center text-[13.5px] italic text-white/25 font-light mb-4">
                "Outsourcing is not just about saving money — it's about working smarter."
            </p>
            <div className="border-t border-white/[0.06] pt-4">
                <p className="text-[12px] uppercase tracking-[0.22em] font-semibold text-white/20 mb-3">Industries We Support</p>
                <div className="flex flex-wrap gap-2">
                    {service.industries.map((ind, i) => (
                        <span key={i} className="text-[13px] text-white/40 font-light px-3 py-1 rounded-full border border-white/[0.07]">
                            {ind}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const BigDataPanel = ({ service }) => (
    <div className="space-y-6">
        <BulletList bullets={service.bullets} accentLight={service.accentLight} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.bigDataPlatforms.map((p, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-5"
                >
                    <h4 className="text-[16px] font-semibold mb-2" style={{ color: p.color }}>{p.name}</h4>
                    <p className="text-[14.5px] text-white/40 font-light leading-relaxed">{p.desc}</p>
                </motion.div>
            ))}
        </div>
    </div>
);

const AnalyticsPanel = ({ service }) => (
    <div className="space-y-6">
        <BulletList bullets={service.bullets} accentLight={service.accentLight} />
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
            <p className="text-[12px] uppercase tracking-[0.22em] font-semibold text-white/25 mb-3">
                Platforms We Work With
            </p>
            <div className="flex flex-wrap gap-2">
                {service.platforms.map((p, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25, delay: i * 0.04 }}
                        className="text-[14px] font-medium px-3 py-1.5 rounded-lg border border-white/[0.08]"
                        style={{ color: service.accentLight, backgroundColor: `${service.accentLight}10` }}
                    >
                        {p}
                    </motion.span>
                ))}
            </div>
        </div>
    </div>
);

/* ─────────────────────────────────────────────
   EXPANDED PANEL ROUTER
───────────────────────────────────────────── */
const ExpandedPanel = ({ service }) => {
    if (service.index === '03') {
        return (
            <div className="pb-8 sm:pl-[calc(1.75rem+2.5rem+1.25rem)] md:pl-[calc(1.75rem+2.5rem+2rem)]">
                <p className="text-[16.5px] text-white/45 leading-[1.9] font-light mb-6">{service.description}</p>
                <AnalyticsPanel service={service} />
            </div>
        );
    }
    if (service.index === '04') {
        return (
            <div className="pb-8 sm:pl-[calc(1.75rem+2.5rem+1.25rem)] md:pl-[calc(1.75rem+2.5rem+2rem)]">
                <p className="text-[16.5px] text-white/45 leading-[1.9] font-light mb-6">{service.description}</p>
                <CloudPanel providers={service.cloudProviders} accentLight={service.accentLight} />
            </div>
        );
    }
    if (service.index === '05') {
        return (
            <div className="pb-8 sm:pl-[calc(1.75rem+2.5rem+1.25rem)] md:pl-[calc(1.75rem+2.5rem+2rem)]">
                <p className="text-[16.5px] text-white/45 leading-[1.9] font-light mb-6">{service.description}</p>
                <BpoPanel service={service} />
            </div>
        );
    }
    if (service.index === '06') {
        return (
            <div className="pb-8 sm:pl-[calc(1.75rem+2.5rem+1.25rem)] md:pl-[calc(1.75rem+2.5rem+2rem)]">
                <p className="text-[16.5px] text-white/45 leading-[1.9] font-light mb-6">{service.description}</p>
                <BigDataPanel service={service} />
            </div>
        );
    }

    // default: description + bullets
    return (
        <div className="pb-8 sm:pl-[calc(1.75rem+2.5rem+1.25rem)] md:pl-[calc(1.75rem+2.5rem+2rem)]">
            <p className="text-[16.5px] text-white/45 leading-[1.9] font-light mb-6">{service.description}</p>
            <BulletList bullets={service.bullets} accentLight={service.accentLight} />
        </div>
    );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const ServiceDetails = () => {
    return (
        <section className="bg-[#0F1114] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute left-0 top-1/3 w-[600px] h-[600px] bg-[#1E5AA5] rounded-full blur-[160px] opacity-[0.07] -translate-x-1/2" />
                <div className="absolute right-0 bottom-1/4 w-[500px] h-[500px] bg-[#0284C7] rounded-full blur-[140px] opacity-[0.06] translate-x-1/3" />
            </div>

            <div className="container mx-auto px-4 lg:px-12 max-w-6xl relative z-10">
                {/* Header */}
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
                            Seven pillars of <span className="text-white/40">IT excellence</span>
                        </h2>
                    </div>
                    <p className="text-[14.5px] text-white/40 font-light leading-relaxed max-w-xs md:text-right">
                        Every service is built to integrate seamlessly across your entire technology ecosystem.
                    </p>
                </motion.div>

                {/* Accordion */}
                <div className="divide-y divide-white/[0.06] pb-16 md:pb-20">
                    {services.map((service, i) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.index}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-20px' }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                            >
                                <Link
                                    to={service.path}
                                    className="w-full group flex items-center gap-5 md:gap-8 py-6 md:py-7 text-left rounded-xl px-2 -mx-2 hover:bg-white/[0.03] transition-colors duration-300"
                                >
                                    <span className="text-[11px] font-mono tracking-[0.16em] text-white/20 shrink-0 w-7 hidden sm:block">
                                        {service.index}
                                    </span>

                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 bg-white/[0.06] group-hover:bg-white/[0.12]">
                                        <Icon size={17} strokeWidth={1.5} className="text-white/40 group-hover:text-white/75 transition-colors duration-300" />
                                    </div>

                                    <div className="flex-grow min-w-0 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                                        <h3 className="text-[1.25rem] font-medium leading-snug tracking-tight text-white/65 group-hover:text-white transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-white/20 shrink-0">
                                            {service.category}
                                        </span>
                                    </div>

                                    <div className="w-7 h-7 rounded-full border border-white/[0.12] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[#93C5FD]/35 group-hover:bg-[#93C5FD]/10">
                                        <ArrowUpRight size={12} strokeWidth={2} className="text-[#93C5FD] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
