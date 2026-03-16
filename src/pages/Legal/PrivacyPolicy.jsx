import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/ui/Breadcrumb';
import { AnimatedHeading, AnimatedText } from '../../components/ui/AnimatedHeading';

const sectionFade = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.08 },
    }),
};

const PrivacyPolicy = () => {
    const sections = [
        {
            title: '1. Information We Collect',
            body: 'When you use our contact form, we collect your name, email address, and message content. We may also collect standard server log information such as your IP address and browser type.',
        },
        {
            title: '2. How We Use Your Information',
            body: 'We use the information you provide solely to respond to your inquiries, provide our services, and improve our website. We do not sell, rent, or share your personal information with third parties for marketing purposes.',
        },
        {
            title: '3. Data Security',
            body: 'We implement reasonable technical and organisational measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction.',
        },
        {
            title: '4. Cookies',
            body: 'Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality.',
        },
        {
            title: '5. Contact Us',
            body: null,
        },
    ];

    return (
        <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-white">
            <div className="container mx-auto px-4 lg:px-12 max-w-3xl">
                <Breadcrumb crumbs={[{ label: 'Privacy Policy' }]} />

                {/* Overline */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[13px] font-medium text-[#1E5AA5] mt-6 mb-5 tracking-wide"
                >
                    Legal
                </motion.p>

                {/* Heading */}
                <AnimatedHeading
                    as="h1"
                    className="text-[2.6rem] md:text-[4rem] font-medium text-[#111827] leading-[1.08] tracking-tight mb-5"
                >
                    <AnimatedText text="Privacy" className="block" />
                    <AnimatedText text="Policy." className="block text-[#9CA3AF]" />
                </AnimatedHeading>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-12 h-px bg-[#E5E7EB] mb-6 origin-left"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="text-[13px] text-[#9CA3AF] mb-10 font-normal"
                >
                    Last updated: March 2025
                </motion.p>

                <div className="space-y-10 text-[15px] text-[#6B7280] leading-relaxed font-normal">
                    {sections.map((s, i) => (
                        <motion.section
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-40px' }}
                            variants={sectionFade}
                        >
                            <h2 className="text-[17px] font-semibold text-[#111827] mb-3 tracking-tight">{s.title}</h2>
                            {s.body ? (
                                <p>{s.body}</p>
                            ) : (
                                <p>
                                    If you have any questions about this Privacy Policy, please contact us at{' '}
                                    <a href="mailto:info@seanoraglobal.com" className="text-[#1E5AA5] hover:underline">
                                        info@seanoraglobal.com
                                    </a>
                                    .
                                </p>
                            )}
                        </motion.section>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-14 pt-8 border-t border-black/5"
                >
                    <Link to="/" className="text-[13px] font-medium text-[#6B6B6B] hover:text-[#1E5AA5] transition-colors">
                        ← Back to Home
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
