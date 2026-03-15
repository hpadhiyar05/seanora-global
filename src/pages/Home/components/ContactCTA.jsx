import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';

const ContactCTA = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 lg:px-12 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-6xl mx-auto rounded-[32px] overflow-hidden relative"
      >
        {/* Deep navy → blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3B] via-[#132D54] to-[#1E5AA5]" />

        {/* Decorative accent circles */}
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] border border-white/[0.06] rounded-full pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-[200px] h-[200px] border border-white/[0.04] rounded-full pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-[250px] h-[250px] bg-[#29A8E0]/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Grain texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

        <div className="relative z-10 py-14 md:py-20 px-8 md:px-14 lg:px-20">

          {/* Top row — label + contact info */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 md:mb-14">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#29A8E0] animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.24em] text-white/50 uppercase">
                Let's Talk
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-[13px] text-white/40 font-medium">
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
          </div>

          {/* Main heading */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <AnimatedHeading className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-medium text-white tracking-tight leading-[1.06] mb-6">
                <AnimatedText text="Have a project" className="block" />
                <span className="block">
                  <AnimatedText text="in " />
                  <AnimatedText text="mind?" className="text-[#29A8E0]" />
                  <AnimatedText text=" Let's build" />
                </span>
                <AnimatedText text="it together." className="block text-white/50" />
              </AnimatedHeading>

              <p className="text-[15px] text-white/40 leading-relaxed max-w-lg font-light">
                Whether you need cloud infrastructure, custom software, or IT consulting —
                our team is ready to turn your vision into reality.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 shrink-0 lg:pb-2">
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

              <div className="flex items-center gap-2 pl-2 text-[12px] text-white/30 font-medium">
                <MapPin className="w-3 h-3" strokeWidth={1.5} />
                <span>Sheridan, WY · USA</span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
