import { useRef, useEffect, useState } from 'react';
import { Lightbulb, Award, Clock, PenTool, CheckCircle2 } from 'lucide-react';
import { m, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

const IllustrationSolutions = () => (
    <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="500" fill="#E6F1FB" />
        {/* Background grid lines */}
        {[100, 200, 300, 400].map((x) => (
            <line key={`vg-${x}`} x1={x} y1="0" x2={x} y2="500" stroke="#B5D4F4" strokeWidth="0.5" opacity="0.5" />
        ))}
        {[100, 200, 300, 400].map((y) => (
            <line key={`hg-${y}`} x1="0" y1={y} x2="500" y2={y} stroke="#B5D4F4" strokeWidth="0.5" opacity="0.5" />
        ))}
        {/* Document card */}
        <rect x="80" y="80" width="200" height="260" rx="16" fill="#fff" opacity="0.85" />
        <rect x="104" y="108" width="152" height="14" rx="4" fill="#2A27AC" opacity="0.2" />
        <rect x="104" y="130" width="120" height="8" rx="3" fill="#378ADD" opacity="0.25" />
        <rect x="104" y="146" width="140" height="8" rx="3" fill="#378ADD" opacity="0.18" />
        <rect x="104" y="162" width="100" height="8" rx="3" fill="#378ADD" opacity="0.15" />
        {/* Stat badge */}
        <rect x="104" y="186" width="152" height="52" rx="10" fill="#2A27AC" opacity="0.1" />
        <text x="180" y="206" fontSize="13" fill="#0C447C" fontFamily="sans-serif" fontWeight="700" textAnchor="middle">
            40%
        </text>
        <text x="180" y="224" fontSize="11" fill="#185FA5" fontFamily="sans-serif" textAnchor="middle">
            avg. cost reduction
        </text>
        {/* Checkmarks */}
        <rect x="104" y="252" width="152" height="28" rx="6" fill="#E6F1FB" />
        <path d="M116 266 L122 272 L134 258" fill="none" stroke="#2A27AC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="142" y="260" width="106" height="8" rx="3" fill="#185FA5" opacity="0.3" />
        <rect x="104" y="288" width="152" height="28" rx="6" fill="#E6F1FB" />
        <path d="M116 302 L122 308 L134 294" fill="none" stroke="#2A27AC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="142" y="296" width="88" height="8" rx="3" fill="#185FA5" opacity="0.25" />
        {/* Floating accent card */}
        <rect x="240" y="200" width="180" height="140" rx="16" fill="#2A27AC" opacity="0.08" />
        <rect x="258" y="220" width="144" height="14" rx="4" fill="#2A27AC" opacity="0.2" />
        <rect x="258" y="242" width="100" height="8" rx="3" fill="#378ADD" opacity="0.3" />
        <rect x="258" y="256" width="120" height="8" rx="3" fill="#378ADD" opacity="0.2" />
        <rect x="258" y="278" width="80" height="30" rx="8" fill="#2A27AC" opacity="0.15" />
        <text x="298" y="298" fontSize="12" fill="#0C447C" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
            Enterprise
        </text>
        {/* Corner accent circles */}
        <circle cx="420" cy="80" r="60" fill="#B5D4F4" opacity="0.2" />
        <circle cx="420" cy="80" r="35" fill="#85B7EB" opacity="0.2" />
        <circle cx="80" cy="420" r="50" fill="#B5D4F4" opacity="0.15" />
    </svg>
);

const IllustrationExperience = () => (
    <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="500" fill="#EEEDFE" />
        {/* Outer rings */}
        <circle cx="250" cy="250" r="190" fill="none" stroke="#CECBF6" strokeWidth="1" opacity="0.6" />
        <circle cx="250" cy="250" r="140" fill="none" stroke="#AFA9EC" strokeWidth="0.8" opacity="0.5" />
        <circle cx="250" cy="250" r="90" fill="#CECBF6" opacity="0.25" />
        <circle cx="250" cy="250" r="52" fill="#534AB7" opacity="0.15" />
        <circle cx="250" cy="250" r="24" fill="#534AB7" opacity="0.35" />
        {/* Tick marks on outer ring */}
        {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
            const r1 = 182,
                r2 = 196;
            return (
                <line
                    key={i}
                    x1={250 + r1 * Math.cos(angle)}
                    y1={250 + r1 * Math.sin(angle)}
                    x2={250 + r2 * Math.cos(angle)}
                    y2={250 + r2 * Math.sin(angle)}
                    stroke="#534AB7"
                    strokeWidth={i % 3 === 0 ? 2 : 1}
                    opacity={i % 3 === 0 ? 0.5 : 0.25}
                />
            );
        })}
        {/* Radial spokes */}
        {[0, 60, 120, 180, 240, 300].map((deg) => {
            const angle = (deg * Math.PI) / 180;
            return (
                <line
                    key={deg}
                    x1={250 + 52 * Math.cos(angle)}
                    y1={250 + 52 * Math.sin(angle)}
                    x2={250 + 138 * Math.cos(angle)}
                    y2={250 + 138 * Math.sin(angle)}
                    stroke="#7F77DD"
                    strokeWidth="1"
                    opacity="0.3"
                />
            );
        })}
        {/* Badges at compass points */}
        {[
            { angle: -90, label: '10+', sub: 'years' },
            { angle: 30, label: 'cert', sub: 'specialists' },
            { angle: 150, label: 'cross', sub: 'industry' },
        ].map(({ angle, label, sub }) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 250 + 162 * Math.cos(rad);
            const cy = 250 + 162 * Math.sin(rad);
            return (
                <g key={angle}>
                    <rect x={cx - 36} y={cy - 22} width="72" height="44" rx="10" fill="#fff" opacity="0.8" />
                    <text x={cx} y={cy - 4} fontSize="13" fill="#3C3489" fontFamily="sans-serif" fontWeight="700" textAnchor="middle">
                        {label}
                    </text>
                    <text x={cx} y={cy + 12} fontSize="10" fill="#534AB7" fontFamily="sans-serif" textAnchor="middle">
                        {sub}
                    </text>
                </g>
            );
        })}
        {/* Center label */}
        <text x="250" y="245" fontSize="12" fill="#26215C" fontFamily="sans-serif" fontWeight="700" textAnchor="middle">
            deep
        </text>
        <text x="250" y="261" fontSize="12" fill="#26215C" fontFamily="sans-serif" fontWeight="700" textAnchor="middle">
            domain
        </text>
    </svg>
);

const IllustrationResponse = () => (
    <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="500" fill="#E1F5EE" />
        {/* Clock face */}
        <circle cx="250" cy="230" r="160" fill="#9FE1CB" opacity="0.3" />
        <circle cx="250" cy="230" r="130" fill="#fff" opacity="0.55" />
        <circle cx="250" cy="230" r="110" fill="none" stroke="#1D9E75" strokeWidth="1" opacity="0.2" />
        {/* Hour ticks */}
        {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
            const r1 = 100,
                r2 = i % 3 === 0 ? 113 : 107;
            return (
                <line
                    key={i}
                    x1={250 + r1 * Math.cos(angle)}
                    y1={230 + r1 * Math.sin(angle)}
                    x2={250 + r2 * Math.cos(angle)}
                    y2={230 + r2 * Math.sin(angle)}
                    stroke="#0F6E56"
                    strokeWidth={i % 3 === 0 ? 2.5 : 1.5}
                    opacity="0.5"
                />
            );
        })}
        {/* Clock hands — pointing to ~2:00 (response time) */}
        <line x1="250" y1="230" x2="250" y2="148" stroke="#085041" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="250" y1="230" x2="308" y2="200" stroke="#1D9E75" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="250" y1="230" x2="246" y2="278" stroke="#D85A30" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <circle cx="250" cy="230" r="6" fill="#085041" />
        <circle cx="250" cy="230" r="3" fill="#fff" />
        {/* Response badge */}
        <rect x="152" y="378" width="196" height="58" rx="14" fill="#1D9E75" opacity="0.15" />
        <text x="250" y="400" fontSize="13" fill="#085041" fontFamily="sans-serif" fontWeight="700" textAnchor="middle">
            response &lt; 2 hrs
        </text>
        <text x="250" y="420" fontSize="11" fill="#0F6E56" fontFamily="sans-serif" textAnchor="middle">
            dedicated executive 24/7
        </text>
        {/* Corner accents */}
        <circle cx="60" cy="60" r="40" fill="#9FE1CB" opacity="0.3" />
        <circle cx="440" cy="440" r="55" fill="#5DCAA5" opacity="0.15" />
        {/* Small uptime pill */}
        <rect x="338" y="90" width="120" height="36" rx="10" fill="#fff" opacity="0.75" />
        <circle cx="356" cy="108" r="6" fill="#1D9E75" opacity="0.6" />
        <text x="374" y="112" fontSize="12" fill="#085041" fontFamily="sans-serif" fontWeight="600">
            zero downtime
        </text>
    </svg>
);

const IllustrationInnovation = () => (
    <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="500" fill="#FAEEDA" />
        {/* Graph paper background lines */}
        {[80, 160, 240, 320, 400].map((v) => (
            <line key={`v-${v}`} x1={v} y1="40" x2={v} y2="460" stroke="#EF9F27" strokeWidth="0.4" opacity="0.3" />
        ))}
        {[80, 160, 240, 320, 400].map((v) => (
            <line key={`h-${v}`} x1="40" y1={v} x2="460" y2={v} stroke="#EF9F27" strokeWidth="0.4" opacity="0.3" />
        ))}
        {/* Chart axes */}
        <line x1="80" y1="380" x2="440" y2="380" stroke="#854F0B" strokeWidth="1.5" opacity="0.4" />
        <line x1="80" y1="100" x2="80" y2="380" stroke="#854F0B" strokeWidth="1.5" opacity="0.4" />
        {/* Rising chart line */}
        <polyline
            points="100,340 160,300 220,310 280,240 340,210 400,150 440,120"
            fill="none"
            stroke="#BA7517"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        {/* Area fill under line */}
        <polygon points="100,340 160,300 220,310 280,240 340,210 400,150 440,120 440,380 100,380" fill="#EF9F27" opacity="0.08" />
        {/* Data points */}
        {[
            [280, 240],
            [400, 150],
            [440, 120],
        ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" fill="#EF9F27" stroke="#fff" strokeWidth="2" />
        ))}
        {/* Highlight peak */}
        <circle cx="440" cy="120" r="10" fill="#BA7517" opacity="0.2" />
        <circle cx="440" cy="120" r="6" fill="#BA7517" />
        {/* Stat callout */}
        <rect x="290" y="60" width="160" height="60" rx="12" fill="#fff" opacity="0.8" />
        <text x="370" y="84" fontSize="22" fill="#633806" fontFamily="sans-serif" fontWeight="800" textAnchor="middle">
            500+
        </text>
        <text x="370" y="104" fontSize="11" fill="#854F0B" fontFamily="sans-serif" textAnchor="middle">
            custom solutions
        </text>
        {/* Floating tag */}
        <rect x="60" y="130" width="130" height="36" rx="8" fill="#FAC775" opacity="0.6" />
        <text x="125" y="153" fontSize="12" fill="#412402" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
            bespoke build
        </text>
    </svg>
);

const IllustrationDelivery = () => (
    <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="500" fill="#EAF3DE" />
        {/* Clipboard/checklist */}
        <rect x="120" y="60" width="260" height="380" rx="20" fill="#C0DD97" opacity="0.35" />
        <rect x="136" y="76" width="228" height="352" rx="14" fill="#fff" opacity="0.7" />
        {/* Clipboard top clip */}
        <rect x="200" y="50" width="100" height="32" rx="10" fill="#3B6D11" opacity="0.2" />
        <rect x="220" y="56" width="60" height="20" rx="6" fill="#3B6D11" opacity="0.15" />
        {/* Checklist rows */}
        {[
            { y: 118, label: 'security review', done: true },
            { y: 166, label: 'documentation', done: true },
            { y: 214, label: 'quality checks', done: true },
            { y: 262, label: 'operational ready', done: true },
            { y: 310, label: 'client sign-off', done: false },
        ].map(({ y, label, done }) => (
            <g key={y}>
                <rect x="152" y={y} width="212" height="38" rx="8" fill={done ? '#EAF3DE' : '#F1EFE8'} />
                <rect
                    x="164"
                    y={y + 9}
                    width="20"
                    height="20"
                    rx="5"
                    fill={done ? '#639922' : 'none'}
                    stroke={done ? 'none' : '#B4B2A9'}
                    strokeWidth="1.5"
                />
                {done && (
                    <path
                        d={`M168 ${y + 19} L173 ${y + 24} L183 ${y + 14}`}
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                )}
                <rect
                    x="194"
                    y={y + 14}
                    width={done ? 130 : 100}
                    height="10"
                    rx="3"
                    fill={done ? '#3B6D11' : '#B4B2A9'}
                    opacity={done ? 0.4 : 0.3}
                />
            </g>
        ))}
        {/* Seal / badge */}
        <circle cx="390" cy="390" r="70" fill="#639922" opacity="0.12" />
        <circle cx="390" cy="390" r="50" fill="#3B6D11" opacity="0.12" />
        <path d="M368 390 L381 403 L414 372" fill="none" stroke="#3B6D11" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        {/* Top left accent */}
        <circle cx="90" cy="90" r="45" fill="#97C459" opacity="0.15" />
    </svg>
);

const IllustrationMonitoring = () => (
    <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="500" fill="#E6F1FB" />
        {/* Monitor frame */}
        <rect x="60" y="80" width="380" height="260" rx="16" fill="#B5D4F4" opacity="0.3" />
        <rect x="76" y="96" width="348" height="228" rx="10" fill="#fff" opacity="0.65" />
        {/* Screen content — monitoring graph */}
        <polyline
            points="96,290 140,240 184,255 228,195 272,210 316,160 360,178 404,148"
            fill="none"
            stroke="#185FA5"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <polygon points="96,290 140,240 184,255 228,195 272,210 316,160 360,178 404,148 404,310 96,310" fill="#2A27AC" opacity="0.06" />
        {/* Grid lines on screen */}
        {[190, 230, 270].map((y) => (
            <line key={y} x1="96" y1={y} x2="404" y2={y} stroke="#B5D4F4" strokeWidth="0.5" opacity="0.6" />
        ))}
        {/* Anomaly spike + callout */}
        <circle cx="228" cy="195" r="8" fill="#2A27AC" opacity="0.15" />
        <circle cx="228" cy="195" r="5" fill="#2A27AC" />
        <line x1="228" y1="187" x2="228" y2="152" stroke="#2A27AC" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
        <rect x="148" y="118" width="160" height="36" rx="8" fill="#2A27AC" opacity="0.1" />
        <text x="228" y="132" fontSize="11" fill="#0C447C" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
            incident detected
        </text>
        <text x="228" y="147" fontSize="10" fill="#185FA5" fontFamily="sans-serif" textAnchor="middle">
            auto-resolved in 4 min
        </text>
        {/* Monitor stand */}
        <rect x="210" y="340" width="80" height="12" rx="4" fill="#85B7EB" opacity="0.5" />
        <rect x="168" y="352" width="164" height="10" rx="4" fill="#B5D4F4" opacity="0.5" />
        {/* Status pills */}
        {[
            { x: 60, label: 'monitoring', color: '#185FA5' },
            { x: 196, label: 'prevention', color: '#1D9E75' },
            { x: 332, label: 'performance', color: '#BA7517' },
        ].map(({ x, label, color }) => (
            <g key={x}>
                <rect x={x} y="390" width="108" height="32" rx="8" fill={color} opacity="0.12" />
                <circle cx={x + 16} cy="406" r="5" fill={color} opacity="0.5" />
                <text x={x + 28} y="410" fontSize="11" fill={color} fontFamily="sans-serif" fontWeight="600">
                    {label}
                </text>
            </g>
        ))}
        {/* Corner decoration */}
        <circle cx="440" cy="60" r="50" fill="#85B7EB" opacity="0.15" />
    </svg>
);

/* Map index → illustration component */
const illustrations = [
    IllustrationSolutions,
    IllustrationExperience,
    IllustrationResponse,
    IllustrationInnovation,
    IllustrationDelivery,
    IllustrationMonitoring,
];

/* ══════════════════════════════════════════════════════════════════
   Items — image field removed, illustration resolved by index
══════════════════════════════════════════════════════════════════ */
const items = [
    {
        index: '01',
        icon: Lightbulb,
        title: 'Best-in-Class Solutions',
        description:
            'We guarantee the lowest industry rates without compromising quality, delivering enterprise-grade solutions that are cost-effective and built to scale.',
        bullets: ['40% avg. cost reduction', 'Enterprise-grade quality', 'Scalable architecture', 'Cost-effective delivery'],
    },
    {
        index: '02',
        icon: Award,
        title: 'Deep Domain Experience',
        description:
            'Our certified specialists bring 10+ years of cross-industry experience, pairing technical depth with domain knowledge to solve your most complex IT challenges.',
        bullets: ['10+ years in the field', 'Certified specialists', 'Cross-industry depth', 'Complex IT solutions'],
    },
    {
        index: '03',
        icon: Clock,
        title: '24 / 7 Rapid Response',
        description:
            'Every client is assigned a dedicated service executive available around the clock. We treat your uptime as our uptime — because downtime is never acceptable.',
        bullets: ['< 2 hr average response', 'Dedicated executive', 'Round-the-clock support', 'Zero downtime goal'],
    },
    {
        index: '04',
        icon: PenTool,
        title: 'Tailored Innovation',
        description:
            'We craft bespoke IT solutions aligned to your exact business context, helping you move fast on bold ideas while reducing implementation risk at every phase.',
        bullets: ['500+ custom solutions', 'Bespoke architecture', 'Risk-reduced delivery', 'Bold idea execution'],
    },
    {
        index: '05',
        icon: Award,
        title: 'Certified Delivery Standards',
        description:
            'We follow clear delivery governance—security reviews, documentation, and quality checks—so projects ship reliably and are easy to operate, hand over, and scale.',
        bullets: ['Quality checkpoints', 'Security-first delivery', 'Clear documentation', 'Operational readiness'],
    },
    {
        index: '06',
        icon: Clock,
        title: 'Proactive Monitoring & Care',
        description:
            'Beyond support, we proactively monitor and improve your systems—catching issues early, reducing incidents, and keeping performance steady as demand grows.',
        bullets: ['Proactive monitoring', 'Preventive maintenance', 'Performance tuning', 'Incident reduction'],
    },
];

const N = items.length;
const STEP_HEIGHT = 100;
const TOTAL_HEIGHT = N * STEP_HEIGHT;

/* ── Mobile card ────────────────────────────────────────────────── */
const MobileCard = ({ item, index }) => {
    const Illustration = illustrations[index];
    return (
        <div className="flex flex-col gap-3">
            <div className="overflow-hidden rounded-3xl h-[280px] sm:h-[220px] shadow-[0_20px_55px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/5 bg-white">
                <Illustration />
            </div>
            <span className="text-[0.875rem] font-mono text-[#888888] tabular-nums">{item.index}</span>
            <h3 className="text-[1.25rem] font-semibold text-[#070707] tracking-[-0.02em] leading-snug">{item.title}</h3>
            <p className="text-[1rem] text-[#888888] font-light leading-[1.8]">{item.description}</p>
            <ul className="flex flex-col gap-2">
                {item.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-[0.875rem] font-medium text-[#3D3D3D]">
                        <CheckCircle2 className="w-4 h-4 text-[#2A27AC] shrink-0" strokeWidth={2} />
                        {b}
                    </li>
                ))}
            </ul>
        </div>
    );
};

/* ── Desktop vertical sticky scroll ────────────────────────────── */
const DesktopScroll = () => {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    useEffect(() => {
        const unsub = scrollYProgress.on('change', (v) => {
            const raw = v * N;
            const idx = Math.min(Math.floor(raw), N - 1);
            setActiveIndex(idx);
        });
        return unsub;
    }, [scrollYProgress]);

    const barHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const smoothBar = useSpring(barHeight, { stiffness: 80, damping: 20 });

    const ActiveIllustration = illustrations[activeIndex];
    const panelSize = 'clamp(300px, 36vw, 500px)';

    return (
        <section ref={sectionRef} className="relative bg-white w-full" style={{ height: `${TOTAL_HEIGHT}vh` }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col bg-white">
                {/* ── Section header ──────────────────────────────── */}
                <div className="shrink-0 pt-10 pb-6 px-[6vw] flex items-end justify-between gap-8 border-b border-[#E7E7E7]">
                    <div className="flex items-center gap-4 min-w-0">
                        <div className="h-px w-8 bg-[#2A27AC]/50 shrink-0" />
                        <div>
                            <span className="text-[0.875rem] font-semibold uppercase tracking-[0.22em] text-[#2A27AC] block mb-1">
                                Why Choose Us
                            </span>
                            <h2 className="text-[1.75rem] md:text-[2.25rem] xl:text-[2.75rem] font-medium text-[#070707] tracking-[-0.025em] leading-[1.08]">
                                Expertise and dedication <span className="text-[#00000066]">to exceed expectations</span>
                            </h2>
                        </div>
                    </div>
                    <p className="text-[1rem] text-[#888888] font-light leading-[1.8] max-w-[320px] shrink-0 hidden xl:block pb-1">
                        Discovery to delivery — a proven framework that ensures clarity, precision, and growth.
                    </p>
                </div>

                {/* ── Main content area ───────────────────────────── */}
                <div className="flex-1 flex items-center px-[6vw] gap-12 xl:gap-16 min-h-0 py-8">
                    {/* LEFT — illustration panel with crossfade */}
                    <div
                        className="relative rounded-3xl overflow-hidden shrink-0 shadow-[0_24px_70px_-20px_rgba(0,0,0,0.18)] ring-1 ring-black/6"
                        style={{ width: panelSize, height: panelSize }}
                    >
                        <AnimatePresence mode="wait">
                            <m.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 1.04 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <ActiveIllustration />
                            </m.div>
                        </AnimatePresence>

                        {/* Step counter overlay */}
                        <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md text-white text-[0.875rem] font-semibold px-3 py-1.5 rounded-full tabular-nums">
                            {String(activeIndex + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
                        </div>
                    </div>

                    {/* RIGHT — vertical timeline */}
                    <div className="flex gap-6 xl:gap-8 overflow-hidden min-w-0 flex-1" style={{ height: panelSize }}>
                        {/* Vertical progress line + dots */}
                        <div className="relative flex flex-col items-center shrink-0 w-[16px]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-[#E7E7E7] rounded-full" />
                            <m.div
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] bg-[#2A27AC] origin-top rounded-full"
                                style={{ height: smoothBar }}
                            />
                            {items.map((_, i) => (
                                <div
                                    key={items[i].index}
                                    className="absolute left-1/2 -translate-x-1/2 z-10"
                                    style={{ top: `${(i / (N - 1)) * 100}%`, transform: 'translate(-50%, -50%)' }}
                                >
                                    <m.div
                                        animate={() => {
                                            const isDotActive = i === activeIndex;
                                            const isDotPast = i < activeIndex;
                                            const dotSize = isDotActive ? 12 : 8;
                                            const dotBg = i <= activeIndex ? '#2A27AC' : '#E7E7E7';
                                            let dotBorder = '#D1D1D1';
                                            if (isDotActive || isDotPast) dotBorder = '#2A27AC';
                                            return { width: dotSize, height: dotSize, backgroundColor: dotBg, borderColor: dotBorder };
                                        }}
                                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                        className="rounded-full border-2 border-white shadow-sm"
                                        style={{ backgroundColor: '#E7E7E7' }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Steps list */}
                        <div className="flex flex-col justify-between flex-1 h-full py-1 overflow-hidden min-w-0">
                            {items.map((item, i) => {
                                const Icon = item.icon;
                                const isActive = i === activeIndex;
                                const isPast = i < activeIndex;
                                let stepOpacity = 0.28;
                                if (isActive) stepOpacity = 1;
                                else if (isPast) stepOpacity = 0.42;

                                let iconTone = 'bg-white border-[#E7E7E7] text-[#888888]';
                                if (isActive) iconTone = 'bg-[#2A27AC]/10 border-[#2A27AC]/20 text-[#2A27AC]';
                                else if (isPast) iconTone = 'bg-[#2A27AC]/5 border-[#2A27AC]/10 text-[#2A27AC]/60';

                                return (
                                    <m.div
                                        key={item.index}
                                        animate={{ opacity: stepOpacity }}
                                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                        className="flex flex-col gap-0.5 min-w-0"
                                    >
                                        <div className="flex items-center gap-3 min-w-0">
                                            <span
                                                className={`grid place-items-center w-8 h-8 rounded-full border transition-colors duration-300 shrink-0 ${iconTone}`}
                                            >
                                                <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                                            </span>
                                            <h3
                                                className="tracking-[-0.018em] min-w-0"
                                                style={{
                                                    fontSize: isActive ? '1.2rem' : '0.975rem',
                                                    color: isActive ? '#070707' : '#888888',
                                                    fontWeight: isActive ? 600 : 500,
                                                    lineHeight: 1.25,
                                                }}
                                            >
                                                {item.title}
                                            </h3>
                                        </div>

                                        <AnimatePresence>
                                            {isActive && (
                                                <m.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                                    className="overflow-hidden pl-11"
                                                >
                                                    <p className="text-[1rem] text-[#888888] font-light leading-[1.8] mt-2 mb-3 pr-4">
                                                        {item.description}
                                                    </p>
                                                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                                                        {item.bullets.map((b) => (
                                                            <li
                                                                key={b}
                                                                className="flex items-center gap-2 text-[0.875rem] font-medium text-[#3D3D3D] min-w-0"
                                                            >
                                                                <CheckCircle2
                                                                    className="w-3.5 h-3.5 text-[#2A27AC] shrink-0"
                                                                    strokeWidth={2}
                                                                />
                                                                <span>{b}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </m.div>
                                            )}
                                        </AnimatePresence>
                                    </m.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ── Main export ────────────────────────────────────────────────── */
const WhyChooseUs = () => {
    const [isDesktop, setIsDesktop] = useState(() => {
        if (globalThis.window === undefined) return true;
        return globalThis.window.matchMedia('(min-width: 1024px)').matches;
    });

    useEffect(() => {
        if (globalThis.window === undefined) return;
        const mq = globalThis.window.matchMedia('(min-width: 1024px)');
        const handler = (e) => setIsDesktop(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    if (!isDesktop) {
        return (
            <section className="bg-white py-20 px-6">
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-7 bg-[#2A27AC]/50" />
                        <span className="text-[0.875rem] font-semibold uppercase tracking-[0.22em] text-[#2A27AC]">Why Choose Us</span>
                    </div>
                    <h2 className="text-[2rem] font-medium text-[#070707] tracking-[-0.02em] leading-[1.08] mb-4">
                        Expertise and dedication <span className="block text-[#00000066]">to exceed expectations</span>
                    </h2>
                    <p className="text-[1rem] text-[#888888] font-light leading-[1.8] max-w-[340px]">
                        Discovery to delivery, we follow a proven framework that ensures clarity, precision, and growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {items.map((item, i) => (
                        <MobileCard key={item.index} item={item} index={i} />
                    ))}
                </div>
            </section>
        );
    }

    return <DesktopScroll />;
};

export default WhyChooseUs;
