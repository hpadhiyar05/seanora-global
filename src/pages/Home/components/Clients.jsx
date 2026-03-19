import { useRef } from 'react';
import { useInView } from 'framer-motion';
import awsLogo from '../../../assets/clients/aws.jpg';
import tcsLogo from '../../../assets/clients/tcs.webp';
import metaLogo from '../../../assets/clients/meta.webp';
import amazonLogo from '../../../assets/clients/amazon.webp';
import microsoftLogo from '../../../assets/clients/microsoft.png';
import hpLogo from '../../../assets/clients/hp.webp';
import deloitteLogo from '../../../assets/clients/deloitte.webp';
import bankOfAmericaLogo from '../../../assets/clients/bank-of-america.webp';
import capgeminiLogo from '../../../assets/clients/Capgemini.svg';
import OracleLogo from '../../../assets/clients/Oracle.webp';
import ibmLogo from '../../../assets/clients/ibm.webp';

const Clients = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        margin: '-20% 0px -20% 0px',
        amount: 0.2,
    });

    const baseLogos = [
        { src: awsLogo, alt: 'AWS' },
        { src: tcsLogo, alt: 'TCS' },
        { src: metaLogo, alt: 'Meta' },
        { src: amazonLogo, alt: 'Amazon' },
        { src: microsoftLogo, alt: 'Microsoft' },
        { src: hpLogo, alt: 'HP' },
        { src: deloitteLogo, alt: 'Deloitte' },
        { src: bankOfAmericaLogo, alt: 'Bank of America' },
        { src: capgeminiLogo, alt: 'Capgemini' },
        { src: OracleLogo, alt: 'Oracle' },
        { src: ibmLogo, alt: 'IBM' },
    ];
    const logos = [...baseLogos, ...baseLogos];

    return (
        <section
            ref={sectionRef}
            className="pt-8 pb-12 bg-white overflow-hidden border-t border-black/[0.07]"
        >
            {/* Label */}
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C4C9D4] mb-8">
                Trusted by Brands Worldwide
            </p>

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

                <div
                    className={`flex items-center gap-16 whitespace-nowrap w-max ${
                        isInView ? 'animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]' : ''
                    }`}
                >
                    {logos.map((logo, i) => (
                        <img
                            key={`logo-${i}`}
                            src={logo.src}
                            alt={`${logo.alt} logo`}
                            className="h-8 object-contain opacity-50 hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
                            loading="lazy"
                            decoding="async"
                            width={140}
                            height={50}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
