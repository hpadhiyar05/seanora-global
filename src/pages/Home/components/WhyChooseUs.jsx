import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  Lightbulb, Award, Clock, PenTool,
  ShieldCheck, Cloud, Globe2, Users,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

const features = [
  {
    icon: Lightbulb,
    category: 'Strategy',
    title: 'Best-in-Class Solutions',
    description:
      'We guarantee the lowest industry rates without compromising quality, delivering enterprise-grade solutions that are cost-effective and built to scale with your business over the long term.',
    stat: '40% avg. cost reduction',
    accent: '#DDF5FE',
  },
  {
    icon: Award,
    category: 'Expertise',
    title: 'Deep Domain Experience',
    description:
      'Our certified specialists bring 10+ years of cross-industry experience, pairing technical depth with domain knowledge to confidently solve your most complex IT challenges.',
    stat: '10+ years in the field',
    accent: '#FFF1CD',
  },
  {
    icon: Clock,
    category: 'Support',
    title: '24 / 7 Rapid Response',
    description:
      'Every client is assigned a dedicated service executive available around the clock. We treat your uptime as our uptime — because downtime is never acceptable, regardless of the hour.',
    stat: '< 2 hr average response',
    accent: '#EAF4EF',
  },
  {
    icon: PenTool,
    category: 'Innovation',
    title: 'Tailored Innovation',
    description:
      'We craft bespoke IT solutions aligned to your exact business context, helping you move fast on bold ideas while reducing implementation risk throughout every phase of delivery.',
    stat: '500+ custom solutions built',
    accent: '#DDF5FE',
  },
  // {
  //   icon: ShieldCheck,
  //   category: 'Security',
  //   title: 'Enterprise-Grade Security',
  //   description:
  //     'Security is woven into every layer of what we build — from infrastructure architecture to application code — so your data, systems, and reputation remain protected at all times.',
  //   stat: 'Zero breach track record',
  //   accent: '#FFF1CD',
  // },
  // {
  //   icon: Cloud,
  //   category: 'Cloud',
  //   title: 'Cloud Mastery',
  //   description:
  //     'Our certified cloud specialists across AWS, Azure, and GCP help you architect, migrate, and continuously optimise cloud environments for maximum performance and cost efficiency at scale.',
  //   stat: 'AWS · Azure · GCP certified',
  //   accent: '#EAF4EF',
  // },
  // {
  //   icon: Globe2,
  //   category: 'Reach',
  //   title: 'Global Delivery Network',
  //   description:
  //     'With a presence spanning 15+ countries, we deliver consistent, high-quality IT services across borders and time zones — with the agility of a local team and the muscle of a global firm.',
  //   stat: '200+ clients · 15 countries',
  //   accent: '#DDF5FE',
  // },
  // {
  //   icon: Users,
  //   category: 'Partnership',
  //   title: 'Transparent Partnership',
  //   description:
  //     'Great outcomes begin with honest communication. You get full visibility into every milestone, decision, and delivery — no surprises, no hidden costs, no exceptions, ever.',
  //   stat: '98% client retention rate',
  //   accent: '#FFF1CD',
  // },
];

const WhyChooseUs = () => {
  const targetRef = useRef(null);
  const trackRef  = useRef(null);
  const [range, setRange] = useState([0, 0]);

  const computeRange = useCallback(() => {
    if (!trackRef.current) return;

    const vw = window.innerWidth;
    const trackWidth = trackRef.current.scrollWidth;

    // Start at normal position (0) instead of off-screen right
    const startX = 0;
    
    // Scroll left until the end of the track aligns with the right edge
    const endX = vw >= trackWidth ? 0 : -(trackWidth - vw);

    setRange([startX, endX]);
  }, []);

  useEffect(() => {
    const t = setTimeout(computeRange, 60);
    window.addEventListener('resize', computeRange);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', computeRange);
    };
  }, [computeRange]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], range);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white w-full">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16 px-4 w-full">
          <AnimatedHeading className="text-[36px] md:text-[44px] lg:text-[52px] font-medium text-[#1B1D1E] tracking-tight leading-[1.1]">
            <AnimatedText text="Expertise and dedication" className="block" />
            <AnimatedText
              text="to exceed expectations"
              className="font-serif italic font-light text-[#1B1D1E]/80 block"
            />
          </AnimatedHeading>
        </div>

        {/* Horizontal scroll track — py-4 gives cards room to translate up on hover */}
        <div className="w-full overflow-hidden flex items-center py-4">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 md:gap-8 pl-6 pr-12 lg:pl-12 lg:pr-24 w-max items-stretch"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              const accentDot = { '#EAF4EF': '#6AAE8B', '#DDF5FE': '#6BAED6', '#FFF1CD': '#D4A847' };
              const dotColor = accentDot[feature.accent] ?? '#D4A847';
              return (
                <div
                  key={feature.title}
                  className="w-[290px] md:w-[330px] lg:w-[370px] shrink-0 rounded-[28px] p-7 lg:p-8 flex flex-col justify-between bg-white border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.11)] transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute inset-x-0 top-0 h-[3px] rounded-t-[28px] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, ${feature.accent}, transparent)`,
                    }}
                  />

                  <div className="flex flex-col gap-5">
                    {/* Category + Icon row */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#6B6B6B]">
                        {feature.category}
                      </span>
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundColor: feature.accent }}
                      >
                        <Icon className="w-[18px] h-[18px] text-[#1B1D1E]" strokeWidth={1.6} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[19px] lg:text-[21px] font-serif font-medium tracking-tight text-[#1B1D1E] leading-[1.25]">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] lg:text-[13.5px] leading-[1.75] text-[#6B6B6B] font-light">
                      {feature.description}
                    </p>
                  </div>

                  {/* Stat row */}
                  <div className="pt-5 mt-3 border-t border-black/[0.05] flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: dotColor }}
                    />
                    <span className="text-[11.5px] font-medium text-[#1B1D1E]/45 tracking-wide">
                      {feature.stat}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
