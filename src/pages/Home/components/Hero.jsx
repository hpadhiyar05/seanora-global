import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';
import heroBg from '../../../assets/hero-section/hero.webp';

const heroVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.11 } },
};
const heroItem = (delay = 0) => ({
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } },
});

const Hero = () => {
    return (
        <section id="hero-main" className="relative w-full min-h-screen flex items-end overflow-hidden">
            {/* Background photo */}
            <motion.div
                initial={{ scale: 1.04 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={heroBg}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    decoding="async"
                />
            </motion.div>

            {/* Overlay system */}
            <div className="absolute inset-0 z-10 bg-[#0A0D14]/50" />
            <div
                className="absolute inset-0 z-10"
                style={{
                    background:
                        'linear-gradient(to right, rgba(8,11,20,0.78) 0%, rgba(8,11,20,0.42) 45%, rgba(8,11,20,0.08) 75%, rgba(8,11,20,0) 100%)',
                }}
            />
            {/* Bottom dark fade — natural photo end */}
            <div
                className="absolute inset-x-0 bottom-0 z-10"
                style={{
                    height: '160px',
                    background: 'linear-gradient(to top, rgba(8,11,20,0.85) 0%, rgba(8,11,20,0) 100%)',
                }}
            />
            {/* Top fade — navbar area */}
            <div
                className="absolute inset-x-0 top-0 h-40 z-10"
                style={{
                    background: 'linear-gradient(to bottom, rgba(8,11,20,0.55) 0%, rgba(8,11,20,0) 100%)',
                }}
            />

            {/* Content */}
            <motion.div
                className="relative z-20 w-full max-w-[1180px] mx-auto px-6 lg:px-12 pb-24 md:pb-28"
                variants={heroVariants}
                initial="hidden"
                animate="show"
            >
                {/* Overline tag */}
                <motion.div variants={heroItem(0)} className="mb-6">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#29A8E0]" />
                        IT Solutions &amp; Global Consulting
                    </span>
                </motion.div>

                {/* FIX 1 — max-w tightened so italic stays on 2 lines, not 3 */}
                <motion.div variants={heroItem(0.06)} className="mb-6 max-w-[600px]">
                    <AnimatedHeading as="h1" className="text-display-1 tracking-tight text-left">
                        <AnimatedText className="block text-white" text="Building bold brands" />
                        <AnimatedText className="block text-white/55" text="with thoughtful design" />
                    </AnimatedHeading>
                </motion.div>

                {/* FIX 5 — max-w widened slightly for better paragraph shape */}
                <motion.p variants={heroItem(0.12)} className="text-[16px] text-white/60 font-light leading-[1.78] max-w-[520px] mb-10">
                    At Seanora Global, we help businesses tackle the world's biggest challenges with tailored IT solutions — guiding you
                    from strategy to success in a competitive market.
                </motion.p>

                {/* CTA row */}
                <motion.div variants={heroItem(0.18)} className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-12">
                    {/* Primary button — unchanged */}
                    <Link
                        to="/contact"
                        className="group relative flex items-center justify-between bg-gradient-to-r from-[#1E5AA5] to-[#29A8E0] text-white px-1.5 h-[44px] rounded-full overflow-hidden shrink-0 w-[154px] shadow-[0_4px_14px_rgba(30,90,165,0.45)]"
                    >
                        <span className="text-[14px] font-medium px-4 whitespace-nowrap transition-transform duration-[400ms] ease-out group-hover:translate-x-[36px]">
                            Get Started
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white text-[#1E5AA5] flex items-center justify-center shrink-0 transition-transform duration-[400ms] ease-out group-hover:-translate-x-[108px]">
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </Link>

                    {/* Secondary link */}
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-[14px] font-medium text-white/60 hover:text-white transition-colors duration-200 group"
                    >
                        <span>Explore services</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </motion.div>

                {/* FIX 4 — removed border-t, using mt spacing only */}
                <motion.div variants={heroItem(0.24)} className="flex items-center gap-5">
                    <div className="flex -space-x-2.5">
                        {[11, 33, 68, 59].map((img, i) => (
                            <img
                                key={img}
                                className="w-9 h-9 rounded-full border-2 border-white/20 bg-gray-600 object-cover"
                                style={{ zIndex: 4 - i }}
                                src={`https://i.pravatar.cc/100?img=${img}`}
                                alt=""
                                aria-hidden="true"
                                loading="eager"
                                decoding="async"
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-1">
                            {[...Array(4)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                            ))}
                            <Star className="w-3 h-3 text-[#F59E0B] opacity-40 fill-transparent" />
                        </div>
                        <span className="text-[12px] font-medium text-white/45">
                            Trusted by <span className="text-white/80 font-semibold">1,000+</span> clients worldwide
                        </span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
