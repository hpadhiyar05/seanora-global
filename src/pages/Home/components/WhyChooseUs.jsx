import { useRef, useEffect, useState, useCallback } from "react";
import { Lightbulb, Award, Clock, PenTool, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { AnimatedHeading, AnimatedText } from "../../../components/ui/AnimatedHeading";

import img1 from "../../../assets/images/home-service-1.webp";
import img2 from "../../../assets/images/home-service-2.webp";
import img3 from "../../../assets/images/home-service-3.webp";
import img4 from "../../../assets/images/home-service-4.webp";
import img5 from "../../../assets/images/home-service-5.webp";
import img6 from "../../../assets/images/home-service-6.webp";

const CARD_W   = 340;   // px — width of each card column
const CARD_GAP = 40;    // px — gap between columns
const N        = 6;     // number of items

const items = [
    {
        index: "01",
        icon: Lightbulb,
        title: "Best-in-Class Solutions",
        description:
            "We guarantee the lowest industry rates without compromising quality, delivering enterprise-grade solutions that are cost-effective and built to scale.",
        bullets: ["40% avg. cost reduction", "Enterprise-grade quality", "Scalable architecture", "Cost-effective delivery"],
        image: img1,
    },
    {
        index: "02",
        icon: Award,
        title: "Deep Domain Experience",
        description:
            "Our certified specialists bring 10+ years of cross-industry experience, pairing technical depth with domain knowledge to solve your most complex IT challenges.",
        bullets: ["10+ years in the field", "Certified specialists", "Cross-industry depth", "Complex IT solutions"],
        image: img2,
    },
    {
        index: "03",
        icon: Clock,
        title: "24 / 7 Rapid Response",
        description:
            "Every client is assigned a dedicated service executive available around the clock. We treat your uptime as our uptime — because downtime is never acceptable.",
        bullets: ["< 2 hr average response", "Dedicated executive", "Round-the-clock support", "Zero downtime goal"],
        image: img3,
    },
    {
        index: "04",
        icon: PenTool,
        title: "Tailored Innovation",
        description:
            "We craft bespoke IT solutions aligned to your exact business context, helping you move fast on bold ideas while reducing implementation risk at every phase.",
        bullets: ["500+ custom solutions", "Bespoke architecture", "Risk-reduced delivery", "Bold idea execution"],
        image: img4,
    },
    {
        index: "05",
        icon: Award,
        title: "Certified & Trusted",
        description:
            "Our certified specialists bring 10+ years of cross-industry experience, pairing technical depth with domain knowledge to confidently solve your challenges.",
        bullets: ["Industry certifications", "Trusted by 200+ clients", "15+ countries served", "Proven track record"],
        image: img5,
    },
    {
        index: "06",
        icon: Clock,
        title: "Continuous Support",
        description:
            "Every client is assigned a dedicated service executive available around the clock. We treat your uptime as our uptime — downtime is never acceptable.",
        bullets: ["24/7 availability", "Proactive monitoring", "SLA guarantees", "Rapid escalation path"],
        image: img6,
    },
];

const WhyChooseUs = () => {
    const targetRef = useRef(null);
    const [vw, setVw]                   = useState(typeof window !== "undefined" ? window.innerWidth : 1440);
    const [vh, setVh]                   = useState(typeof window !== "undefined" ? window.innerHeight : 900);

    // Total track width: N cards + gaps + left padding + right padding
    const LEFT_PAD  = 64;
    const RIGHT_PAD = 160;
    const trackWidth = LEFT_PAD + N * CARD_W + (N - 1) * CARD_GAP + RIGHT_PAD;

    // How far the track needs to travel = trackWidth - viewport width
    const scrollDistance = Math.max(0, trackWidth - vw);

    // Section height = sticky viewport + scroll travel
    // Multiply by 1.0 so scroll ends exactly when last card is visible
    const sectionHeight = vh + scrollDistance;

    useEffect(() => {
        const onResize = () => {
            setVw(window.innerWidth);
            setVh(window.innerHeight);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // Translate cards horizontally based on scroll
    const rawX = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

    // Smooth spring — slower, more cinematic feel matching the video
    const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.6 });

    // Progress bar width
    const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            ref={targetRef}
            className="relative bg-[#F8FAFC] w-full"
            style={{ height: `${sectionHeight}px` }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">

                {/* ── Heading ─────────────────────────────────────── */}
                <div className="shrink-0 w-[80%] mx-auto pt-14 pb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                    <div>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9CA3AF] mb-3 block">
                            Why Choose Us
                        </span>
                        <AnimatedHeading className="text-[2.5rem] md:text-[4rem] font-medium text-[#111827] tracking-tight leading-[1.1]">
                            <AnimatedText text="Expertise and dedication" className="block" />
                            <AnimatedText
                                text="to exceed expectations"
                                className="block text-[#9CA3AF] font-light italic font-serif"
                            />
                        </AnimatedHeading>
                    </div>
                    <p className="text-[14px] text-[#6B7280] font-light leading-relaxed max-w-[300px] lg:pb-1">
                        Discovery to delivery, we follow a proven framework that ensures clarity, precision, and growth.
                    </p>
                </div>

                {/* ── Scrolling track ─────────────────────────────── */}
                <div className="flex-1 flex flex-col justify-center overflow-hidden">
                    <motion.div
                        style={{ x, width: `${trackWidth}px` }}
                        className="flex flex-col"
                    >

                        {/* ROW 1 — Images */}
                        <div
                            className="flex items-end mb-0"
                            style={{ gap: `${CARD_GAP}px`, paddingLeft: `${LEFT_PAD}px`, paddingRight: `${RIGHT_PAD}px` }}
                        >
                            {items.map((item, i) => (
                                <div
                                    key={`img-${i}`}
                                    className="shrink-0 overflow-hidden rounded-2xl"
                                    style={{
                                        width:  `${CARD_W}px`,
                                        height: i % 2 === 0 ? '195px' : '145px',
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-[1.02] hover:scale-100"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Progress bar */}
                        <div
                            className="relative h-[2px] bg-black/[0.07] my-4"
                            style={{ marginLeft: `${LEFT_PAD}px`, marginRight: `${RIGHT_PAD}px` }}
                        >
                            {/* Dot markers */}
                            {items.map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute top-1/2 w-[7px] h-[7px] rounded-full bg-[#D1D5DB] border-[1.5px] border-white z-10"
                                    style={{
                                        left:      `${(i / (N - 1)) * 100}%`,
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                />
                            ))}
                            <motion.div
                                className="absolute left-0 top-0 h-full bg-[#1E5AA5] rounded-full"
                                style={{ width: barWidth }}
                            />
                        </div>

                        {/* ROW 2 — Text */}
                        <div
                            className="flex items-start"
                            style={{ gap: `${CARD_GAP}px`, paddingLeft: `${LEFT_PAD}px`, paddingRight: `${RIGHT_PAD}px` }}
                        >
                            {items.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={`text-${i}`}
                                        className="shrink-0"
                                        style={{ width: `${CARD_W}px` }}
                                    >
                                        <span className="text-[11px] font-semibold text-[#9CA3AF] tabular-nums block mb-2">
                                            {item.index}
                                        </span>

                                        <h3 className="text-[19px] font-semibold text-[#111827] tracking-tight leading-snug mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-[13.5px] text-[#6B7280] font-light leading-[1.7] mb-4">
                                            {item.description}
                                        </p>

                                        <ul className="flex flex-col gap-2">
                                            {item.bullets.map((b) => (
                                                <li key={b} className="flex items-center gap-2 text-[12.5px] font-medium text-[#374151]">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1E5AA5] shrink-0" strokeWidth={2} />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;