import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';
import ctaBg from '../../../assets/images/CTA.webp';

const ContactCTA = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 lg:px-12 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-7xl mx-auto rounded-[32px] overflow-hidden relative min-h-[480px] md:min-h-[520px]"
      >
        {/* Background image */}
        <img
          src={ctaBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          width={800}
          height={500}
        />

        {/* Dark gradient overlay — heavier on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

        <div className="relative z-10 py-14 md:py-20 px-8 md:px-14 lg:px-20 flex flex-col justify-between h-full">

          {/* Top row — label + contact info */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 md:mb-14"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#29A8E0] animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.24em] text-white/50 uppercase">
                Let's Talk
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-[13px] text-white/50 font-semibold">
              <a href="mailto:info@seanoraglobal.com" className="flex items-center gap-2 hover:text-white/70 transition-colors">
                <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                info@seanoraglobal.com
              </a>
              <span className="hidden md:block w-px h-3 bg-white/15" />
              <a href="tel:+13256670125" className="flex items-center gap-2 hover:text-white/70 transition-colors">
                <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                +1 325-667-0125
              </a>
            </div>
          </motion.div>

          {/* Main content — text left, button right on lg */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="max-w-2xl">
              <AnimatedHeading className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-semibold text-white tracking-tight leading-[1.04] mb-6">
                <AnimatedText text="Have a project" className="block" />
                <span className="block">
                  <AnimatedText text="in " />
                  <AnimatedText text="mind?" className="text-[#29A8E0]" />
                  <AnimatedText text=" Let's build" />
                </span>
                <AnimatedText text="it together." className="block text-white/50" />
              </AnimatedHeading>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                className="text-[15px] text-white/50 leading-relaxed max-w-lg font-normal"
              >
                Whether you need cloud infrastructure, custom software, or IT consulting —
                our team is ready to turn your vision into reality.
              </motion.p>
            </div>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
              className="shrink-0"
            >
              <Link
                to="/contact"
                className="group relative flex items-center justify-between bg-white text-[#0B1F3B] p-1 rounded-full overflow-hidden w-[190px] shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
              >
                <span className="text-[14px] font-semibold pl-5 pr-2 whitespace-nowrap transition-transform duration-[400ms] ease-out group-hover:translate-x-[36px]">
                  Get in Touch
                </span>
                <div className="w-9 h-9 rounded-full bg-[#1E5AA5] text-white flex items-center justify-center shrink-0 transition-transform duration-[400ms] ease-out group-hover:-translate-x-[144px]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
