import { motion } from 'framer-motion';
import awsLogo from '../../../assets/clients/aws.png';
import adminLogo from '../../../assets/clients/admin.webp';
import chromeLogo from '../../../assets/clients/chrome.webp';
import jacquardLogo from '../../../assets/clients/jacquard.webp';
import mandiantLogo from '../../../assets/clients/mandiant.webp';
import perspectiveLogo from '../../../assets/clients/perspective.webp';
import sprayscapeLogo from '../../../assets/clients/sprayscape.webp';
import widevineLogo from '../../../assets/clients/widevine.webp';

const Clients = () => {
    const baseLogos = [
        { src: awsLogo, alt: 'AWS' },
        { src: adminLogo, alt: 'Admin' },
        { src: chromeLogo, alt: 'Chrome' },
        { src: jacquardLogo, alt: 'Jacquard' },
        { src: mandiantLogo, alt: 'Mandiant' },
        { src: perspectiveLogo, alt: 'Perspective' },
        { src: sprayscapeLogo, alt: 'Sprayscape' },
        { src: widevineLogo, alt: 'Widevine' },
    ];
    const logos = [...baseLogos, ...baseLogos];

    return (
        <section className="pt-8 pb-12 bg-white overflow-hidden border-t border-black/[0.07]">
            {/* Label */}
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C4C9D4] mb-8"
            >
                Loved by 1,000+ brands around the world
            </motion.p>

            {/* Marquee */}
            <div className="relative w-full overflow-hidden">
                {/* Left fade */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
                />
                {/* Right fade */}
                <div
                    className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
                />

                <div className="flex items-center gap-16 whitespace-nowrap animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] w-max">
                    {logos.map((logo, i) => (
                        <img
                            key={`logo-${i}`}
                            src={logo.src}
                            alt={`${logo.alt} logo`}
                            className="h-8 object-contain opacity-50 hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
                            loading="lazy"
                            decoding="async"
                            width={120}
                            height={40}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
