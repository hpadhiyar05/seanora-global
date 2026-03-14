import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Route, Target, Rocket } from 'lucide-react';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';
import Breadcrumb from '../../../components/ui/Breadcrumb';

const stats = [
  { end: 10,  suffix: '+', label: 'Years of Experience' },
  { end: 200, suffix: '+', label: 'Clients Served' },
  { end: 500, suffix: '+', label: 'Projects Delivered' },
  { end: 15,  suffix: '+', label: 'Countries Reached' },
];

/* ── Animated counter ──────────────────────────────────────────── */
const CountUp = ({ end, suffix = '', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const rafRef = useRef(null);

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(end);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const cards = [
  {
    number: '01',
    Icon: Route,
    label: 'Our Journey',
    title: 'Built on passion,\ndriven by purpose.',
    description:
      'Established with a passion for technology and a vision for change, Seanora Global has grown from a small team to a powerhouse in the IT industry. Throughout our journey, we have remained steadfast in our commitment to delivering value-driven solutions that make a difference.',
  },
  {
    number: '02',
    Icon: Target,
    label: 'Our Vision',
    title: 'A global leader\nin transformative IT.',
    description:
      'Our vision is to be a leading global provider of transformative IT solutions, recognized for our commitment to excellence, innovation, and customer satisfaction.',
  },
  {
    number: '03',
    Icon: Rocket,
    label: 'Our Mission',
    title: 'Exceptional services,\nunmatched outcomes.',
    description:
      'At Seanora Global, our mission is to deliver exceptional IT services that drive success for our clients. We strive to exceed expectations through our dedication to quality, reliability, and innovation in every project we undertake.',
  },
];

const cardVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 44 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const WhoWeAre = () => {
  return (
    <section className="bg-white relative overflow-hidden">

      {/* Gradient blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-[900px] h-[900px] bg-[#Eef7fb] rounded-full blur-[120px] opacity-80 -translate-x-1/3 -translate-y-1/2" />
        <div className="absolute right-0 top-1/2 w-[650px] h-[650px] bg-[#Fdfae8] rounded-full blur-[100px] opacity-70 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white via-white/80 to-transparent" />
      </div>

      {/* ── Hero heading ── */}
      <div className="pt-32 md:pt-40 pb-14 md:pb-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
          <Breadcrumb crumbs={[{ label: 'About Us' }]} />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-sans tracking-[0.22em] text-[#6B6B6B] font-medium uppercase mb-6 block"
            >
              Who We Are
            </motion.span>

            <AnimatedHeading
              as="h1"
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1B1D1E] font-light leading-[1.08] tracking-tight mb-8"
            >
              <AnimatedText text="Transforming Technology," />
              <br className="hidden md:block" />
              <span className="inline-flex flex-wrap gap-x-4">
                <AnimatedText text="Innovating" />
                <AnimatedText text="the Future" className="italic text-[#1B1D1E]/65" />
              </span>
            </AnimatedHeading>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-[17px] md:text-lg text-[#6B6B6B] font-light leading-relaxed max-w-2xl"
            >
              Welcome to Seanora Global, your trusted partner in innovative IT solutions.
              We specialise in delivering cutting-edge technology services that empower
              businesses to thrive in today's digital landscape.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="border-y border-black/[0.06] relative z-10">
        <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-black/[0.06]"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 px-6 text-center">
                <div className="text-4xl font-light md:text-4xl font-sans text-[#1B1D1E] mb-1 tracking-tight tabular-nums">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6B6B6B]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {cards.map(({ number, Icon, label, title, description }) => (
              <motion.div
                key={label}
                variants={cardItem}
                className="group relative p-9 lg:p-10 bg-white border border-black/[0.06] rounded-[24px] flex flex-col h-full text-left overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.07)] hover:border-transparent cursor-default"
              >
                {/* Background number watermark */}
                <span className="absolute top-6 right-7 text-[72px] font-serif font-light text-black/[0.04] group-hover:text-black/[0.07] transition-colors duration-500 leading-none select-none pointer-events-none">
                  {number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#F3F3F3] text-[#1B1D1E] flex items-center justify-center mb-7 shrink-0 transition-all duration-500 group-hover:bg-[#1B1D1E] group-hover:text-white group-hover:scale-110">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>

                {/* Label */}
                <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#6B6B6B] mb-3 block">
                  {label}
                </span>

                {/* Snappy title */}
                <h3 className="text-[21px] leading-snug font-serif text-[#1B1D1E] font-light mb-5 whitespace-pre-line">
                  {title}
                </h3>

                {/* Animated divider */}
                <div className="w-8 h-px bg-black/10 mb-5 scale-x-50 origin-left group-hover:scale-x-100 transition-transform duration-500" />

                {/* Description */}
                <p className="text-[15px] text-[#6B6B6B] leading-relaxed font-light flex-grow">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default WhoWeAre;
