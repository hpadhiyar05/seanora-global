import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Cpu, TrendingUp, CheckCircle2, Clock, Globe, ArrowUpRight, ChevronRight } from 'lucide-react';
import { AnimatedHeading, AnimatedText } from '../../components/ui/AnimatedHeading';
import SEO from '../../components/seo/SEO';
import itBootcampBanner from '../../assets/services/itBootcampsBanner.webp';
import itBootcampSideImage from '../../assets/services/itBootcampsSideImage.webp';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const features = [
    {
        icon: Zap,
        title: 'Hands-On Learning with Expert Guidance',
        detail: 'Real-world projects led by seasoned IT professionals to build practical skills fast. Every module is designed around actual workplace scenarios, not textbook theory.',
    },
    {
        icon: Cpu,
        title: 'Master In-Demand Tech Stacks',
        detail: 'Training on AWS, Python, DevOps and the tools powering top global companies. Stay ahead of the curve with technologies employers are actively hiring for.',
    },
    {
        icon: TrendingUp,
        title: 'Structured Path from Basics to Advanced',
        detail: "Progressive curriculum covering fundamentals through expert-level concepts. Whether you're a beginner or upskilling, our path adapts to your level.",
    },
    {
        icon: CheckCircle2,
        title: 'Full Career Support Package',
        detail: 'Live mentoring, interview coaching, resume building, and job placement assistance. We stay with you through the entire journey — not just the classroom.',
    },
    {
        icon: Clock,
        title: 'Flexible Schedules for Real Life',
        detail: 'Online, weekend, or accelerated formats designed around your work and goals. Learn at your own pace without putting your life on hold.',
    },
    {
        icon: Globe,
        title: 'Built for Global Career Success',
        detail: 'Tailored for students and professionals targeting H1B, Green Card, and international IT roles. Our curriculum aligns with global hiring standards.',
    },
];

const tracks = [
    { name: 'Full-Stack Development', level: 'Beginner → Advanced', duration: '16 weeks' },
    { name: 'Data Science & AI', level: 'Intermediate → Advanced', duration: '12 weeks' },
    { name: 'Cybersecurity', level: 'Beginner → Advanced', duration: '14 weeks' },
    { name: 'Cloud & DevOps (AWS)', level: 'Intermediate → Expert', duration: '10 weeks' },
    { name: 'Python Programming', level: 'Beginner → Advanced', duration: '8 weeks' },
    { name: 'Business Intelligence', level: 'Beginner → Advanced', duration: '10 weeks' },
];

const ITBootcamps = () => (
    <>
        <SEO
            title="IT Bootcamps"
            description="Hands-on IT bootcamps by Seanora Global—career-focused training in cloud, DevOps, cybersecurity, data science, and full-stack development."
            path="/services/it-bootcamps"
            keywords={[
                'IT bootcamps',
                'cloud and DevOps',
                'AWS training',
                'cybersecurity training',
                'full-stack development',
                'data science',
            ]}
        />
        <main className="bg-white overflow-hidden">
            {/* Hero */}
            <section className="bg-[#0F1114] relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-0 top-1/3 w-[600px] h-[600px] bg-[#1E5AA5] rounded-full blur-[180px] opacity-[0.08] -translate-x-1/2" />
                    <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#413DF2] rounded-full blur-[150px] opacity-[0.06] translate-x-1/3" />
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
                            <span className="text-[0.875rem] text-white/40">IT Bootcamps</span>
                        </div>
                        <span className="inline-block text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#93C5FD] mb-5">
                            Education & Training
                        </span>
                        <AnimatedHeading
                            as="h1"
                            className="text-[3.5rem] md:text-[5rem] font-medium text-white leading-[1.04] tracking-[-0.02em] mb-6 max-w-3xl"
                        >
                            <AnimatedText text="IT Bootcamps" />
                        </AnimatedHeading>
                        <p className="text-[1.25rem] text-[#FFFFFFB3] font-light leading-[1.8] max-w-2xl">
                            Real-world projects led by seasoned IT professionals to build practical skills fast — structured for students
                            and professionals targeting global IT careers.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Image placeholder */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                    src={itBootcampBanner}
                    alt="IT Bootcamp Banner"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                    width={1920}
                    height={800}
                />
            </div>

            {/* Features */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <motion.div {...fadeUp(0)} className="mb-14">
                        <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#1E5AA5] mb-4 block">
                            What You'll Learn
                        </span>
                        <h2 className="text-[3rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em] max-w-2xl">
                            Six pillars of <span className="text-[#00000080]">bootcamp excellence</span>
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {features.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <motion.div
                                    key={i}
                                    {...fadeUp(i * 0.07)}
                                    className="group p-7 rounded-2xl border border-[#E7E7E7] hover:border-[#1E5AA5]/20 hover:bg-[#F3F5FF] transition-all duration-500 cursor-default"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#EDF3FF] text-[#1E5AA5] flex items-center justify-center mb-5 transition-all duration-400 group-hover:bg-[#1E5AA5] group-hover:text-white group-hover:scale-105">
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <h5 className="text-[1.25rem] font-semibold text-[#070707] mb-3 leading-snug">{f.title}</h5>
                                    <p className="text-[1rem] text-[#888888] leading-[1.75] font-light">{f.detail}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Tracks */}
            <section className="py-20 md:py-28 bg-[#0F1114] relative overflow-hidden">
                <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#413DF2] rounded-full blur-[160px] opacity-[0.05] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px] relative z-10">
                    <motion.div {...fadeUp(0)} className="mb-14">
                        <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#93C5FD] mb-4 block">
                            Training Tracks
                        </span>
                        <h2 className="text-[3rem] md:text-[4rem] font-medium text-white leading-[1.08] tracking-[-0.02em]">
                            Choose your <span className="text-[#FFFFFF80]">learning path</span>
                        </h2>
                    </motion.div>
                    <div className="divide-y divide-white/[0.06]">
                        {tracks.map((t, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp(i * 0.06)}
                                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 hover:bg-white/[0.03] -mx-4 px-4 rounded-xl transition-colors duration-300 cursor-default"
                            >
                                <div className="flex items-center gap-5">
                                    <span className="text-[0.875rem] font-mono tracking-[0.14em] text-white/20 w-7 shrink-0">0{i + 1}</span>
                                    <h5 className="text-[1.5rem] font-medium text-white/75 group-hover:text-white transition-colors duration-300">
                                        {t.name}
                                    </h5>
                                </div>
                                <div className="flex items-center gap-4 pl-12 sm:pl-0 shrink-0">
                                    <span className="text-[0.875rem] text-white/35 font-light">{t.level}</span>
                                    <span className="text-[0.875rem] font-semibold text-[#93C5FD] px-3 py-1 rounded-full border border-[#93C5FD]/20 bg-[#93C5FD]/5">
                                        {t.duration}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Career Support */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6 lg:px-16 max-w-[1140px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp(0)}>
                            <span className="text-[0.875rem] font-semibold tracking-[0.22em] uppercase text-[#1E5AA5] mb-4 block">
                                Career Support
                            </span>
                            <h2 className="text-[3rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em] mb-6">
                                Built for global <span className="text-[#00000080]">career success</span>
                            </h2>
                            <p className="text-[1.25rem] text-[#888888] font-light leading-[1.8] mb-8">
                                Our bootcamps are tailored for students and professionals targeting H1B, Green Card, and international IT
                                roles. We go beyond the curriculum to ensure you land the role you want.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Live 1-on-1 mentoring sessions',
                                    'Interview prep and mock interviews',
                                    'Resume and LinkedIn optimization',
                                    'Direct employer connections',
                                    'Job placement assistance',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[1rem] text-[#4F4F4F] font-light">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E5AA5] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div {...fadeUp(0.12)} className="rounded-3xl h-[420px] overflow-hidden">
                            <img
                                src={itBootcampSideImage}
                                alt="IT Bootcamp Side Image"
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
                            <h4 className="text-[2rem] font-medium text-[#070707] mb-2">Ready to launch your IT career?</h4>
                            <p className="text-[1rem] text-[#888888] font-light">Join the next cohort — limited seats available.</p>
                        </div>
                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-3 bg-[#1E5AA5] text-white px-7 py-4 rounded-full text-[0.875rem] font-semibold hover:bg-[#174F94] transition-colors duration-300 shrink-0"
                        >
                            Get in Touch{' '}
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

export default ITBootcamps;
