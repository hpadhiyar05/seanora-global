import { useState, useEffect, useRef } from 'react';
import { MapPin, Mail, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';
import { API_ENDPOINTS } from '../../../config/api';

/* ─── Data ─────────────────────────────────────────────────────── */
const contactInfo = [
    { Icon: MapPin, label: 'Our Address', value: '30 N Gould St Ste R, Sheridan, WY 82801, USA', href: null },
    { Icon: Mail, label: 'Email Us', value: 'info@seanoraglobal.com', href: 'mailto:info@seanoraglobal.com' },
    { Icon: Phone, label: 'Call Us', value: '+1 325-667-0125', href: 'tel:+13256670125' },
];

const serviceOptions = [
    { value: 'web-mobile', label: 'Web & Mobile Development' },
    { value: 'consulting', label: 'IT Consulting' },
    { value: 'cloud', label: 'Cloud Computing & Security' },
    { value: 'integration', label: 'System Integration' },
    { value: 'training', label: 'IT Training' },
    { value: 'marketing', label: 'Digital Marketing' },
    { value: 'other', label: 'Something Else' },
];

const budgetOptions = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 – $15,000' },
    { value: '15k-50k', label: '$15,000 – $50,000' },
    { value: '50k-plus', label: '$50,000+' },
    { value: 'discuss', label: "Let's discuss" },
];

/* ─── Shared input / label classes ─────────────────────────────── */
const inputCls =
    'w-full px-0 py-3.5 border-0 border-b border-[#D1D5DB] bg-transparent text-[15px] text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#111827] focus:ring-0 transition-colors duration-200 font-normal';

const selectCls =
    'w-full pl-0 pr-8 py-3.5 border-0 border-b border-[#D1D5DB] bg-transparent text-[15px] text-[#111827] focus:outline-none focus:border-[#111827] transition-colors duration-200 appearance-none cursor-pointer font-normal';

const labelCls = 'text-[13.5px] font-medium text-[#111827] mb-1.5 block';

/* ─── ChevronDown for selects ──────────────────────────────────── */
const ChevronIcon = () => (
    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#9CA3AF]"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    </div>
);

/* ─── CSS injected once — replaces all framer-motion ───────────── */
const CSS = `
@keyframes cs-fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes cs-fadeUpSm {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes cs-scaleX {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
@keyframes cs-wordUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes cs-popIn {
  0%   { opacity: 0; transform: scale(0.7); }
  60%  { transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
}

/* Left column items */
.cs-left-overline {
  opacity: 0;
  animation: cs-fadeUpSm 0.5s ease-out forwards;
}
.cs-left-heading {
  opacity: 0;
  animation: cs-fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards 0.06s;
}
.cs-left-desc {
  opacity: 0;
  animation: cs-fadeUpSm 0.6s ease-out forwards 0.15s;
}
.cs-left-divider {
  transform: scaleX(0);
  transform-origin: left;
  animation: cs-scaleX 0.6s ease-out forwards 0.2s;
}
.cs-left-contacts {
  opacity: 0;
  animation: cs-fadeUp 0.7s ease-out forwards 0.25s;
}

/* Right column */
.cs-right-col {
  opacity: 0;
  animation: cs-fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards 0.1s;
}

/* Map section — scroll triggered via IntersectionObserver */
.cs-map-wrap {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.cs-map-wrap.cs-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Success icon pop */
.cs-success-icon {
  animation: cs-popIn 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards;
}

/* Word-by-word heading */
.cs-word {
  display: inline-block;
  opacity: 0;
  animation: cs-wordUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
}

/* CTA pills */
.cs-maps-pill {
  position: relative;
  overflow: hidden;
}
.cs-maps-pill-text {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 400ms ease-out, opacity 400ms ease-out;
  white-space: nowrap;
}
.cs-maps-pill-icon {
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 400ms ease-out;
}
/* On hover: text slides right out, icon slides left to center */
.cs-maps-pill:hover .cs-maps-pill-text { transform: translateY(-50%) translateX(120px); }
.cs-maps-pill:hover .cs-maps-pill-icon { transform: translateY(-50%) translateX(-110px); }
`;

let cssInjected = false;
function injectCSS() {
    if (cssInjected || typeof document === 'undefined') return;
    const el = document.createElement('style');
    el.textContent = CSS;
    document.head.appendChild(el);
    cssInjected = true;
}

/* ─── Animated heading — word by word ──────────────────────────── */
const AnimatedLine = ({ text, className = '', baseDelay = 0 }) => (
    <span className={className} style={{ display: 'block', overflow: 'hidden' }}>
        {text.split(' ').map((word, i) => (
            <span key={i} className="cs-word" style={{ animationDelay: `${baseDelay + i * 0.08}s`, marginRight: '0.28em' }}>
                {word}
            </span>
        ))}
    </span>
);

/* ─── useInView hook — scroll trigger ──────────────────────────── */
function useInView(ref, options = {}) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('cs-visible');
                    obs.disconnect();
                }
            },
            { rootMargin: '-60px', ...options },
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [ref]);
}

/* ═══════════════════════════════════════════════════════════════ */
const ContactSection = () => {
    injectCSS();

    const mapRef = useRef(null);
    useInView(mapRef);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'web-mobile',
        budget: '',
        message: '',
        resume: null,
        company: '', // honeypot (bots tend to fill hidden fields)
    });
    const fileInputRef = useRef(null);
    const [touched, setTouched] = useState({});
    const [fieldErrors, setFieldErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setFieldErrors((prev) => {
            if (!prev[name]) return prev;
            const next = { ...prev };
            delete next[name];
            return next;
        });
    };

    const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
    const normalizeDigits = (value) => String(value ?? '').replace(/[^\d]/g, '');
    const validatePhone = (value) => {
        const digits = normalizeDigits(value);
        return digits.length >= 7 && digits.length <= 15;
    };
    const validateResume = (file) => {
        if (!file) return 'Resume / CV is required.';
        const maxBytes = 10 * 1024 * 1024; // 10MB
        if (file.size > maxBytes) return 'Resume must be 10 MB or less.';
        const allowed = new Set([
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ]);
        if (file.type && !allowed.has(file.type)) return 'Resume must be a PDF, DOC, or DOCX file.';
        const name = (file.name || '').toLowerCase();
        if (!/\.(pdf|doc|docx)$/.test(name)) return 'Resume must be a PDF, DOC, or DOCX file.';
        return '';
    };

    const validateForm = (next = formData) => {
        const nextErrors = {};
        const name = String(next.name ?? '').trim();
        const email = String(next.email ?? '').trim();
        const phone = String(next.phone ?? '').trim();

        if (!name) nextErrors.name = 'Full name is required.';
        else if (name.length < 2) nextErrors.name = 'Full name must be at least 2 characters.';

        if (!email) nextErrors.email = 'Email is required.';
        else if (!validateEmail(email)) nextErrors.email = 'Enter a valid email address (e.g., name@domain.com).';

        if (!phone) nextErrors.phone = 'Mobile number is required.';
        else if (!validatePhone(phone)) nextErrors.phone = 'Enter a valid mobile number (7–15 digits).';

        const resumeError = validateResume(next.resume);
        if (resumeError) nextErrors.resume = resumeError;

        return nextErrors;
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        const nextErrors = validateForm(formData);
        setFieldErrors((prev) => ({ ...prev, ...nextErrors }));
    };

    const handleFile = (file) => {
        if (!file) return;
        setFormData((prev) => ({ ...prev, resume: file }));
        setFieldErrors((prev) => {
            const next = { ...prev };
            delete next.resume;
            return next;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Honeypot: if filled, likely a bot — silently succeed.
        if (String(formData.company || '').trim()) {
            setSubmitted(true);
            return;
        }
        const submitTouched = { name: true, email: true, phone: true, resume: true };
        setTouched((prev) => ({ ...prev, ...submitTouched }));
        const nextErrors = validateForm(formData);
        setFieldErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) {
            setErrorMsg('Please fix the highlighted fields and try again.');
            return;
        }

        setIsSubmitting(true);
        setErrorMsg('');

        const payload = new FormData();
        payload.append('name', formData.name);
        payload.append('email', formData.email);
        payload.append('phone', formData.phone);
        payload.append('subject', formData.subject);
        payload.append('budget', formData.budget);
        payload.append('message', formData.message);
        if (formData.resume) payload.append('resume', formData.resume);

        try {
            const response = await fetch(API_ENDPOINTS.sendMail, {
                method: 'POST',
                body: payload,
            });

            const data = await response.json();

            if (data.success === true) {
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', subject: 'web-mobile', budget: '', message: '', resume: null });
                setTouched({});
                setFieldErrors({});
            } else {
                setErrorMsg(data.message || 'Something went wrong. Please try again.');
                setSubmitted(false);
            }
        } catch (error) {
            setErrorMsg('Failed to connect to the server. Please check your connection and try again.');
            setSubmitted(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative overflow-hidden bg-white">
            {/* ── Two-column layout ─────────────────────────────────── */}
            <div className="pt-36 md:pt-44 pb-16 md:pb-24 relative z-10">
                <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-16 xl:gap-24 items-start">
                        {/* ── LEFT col ─────────────────────────────────────── */}
                        <div className="lg:sticky lg:top-32">
                            <p className="cs-left-overline text-[13px] font-medium text-[#1E5AA5] mb-5 tracking-wide">
                                Contact Seanora Global
                            </p>

                            <AnimatedHeading
                                as="h1"
                                className="text-[2.5rem] md:text-[4rem] font-medium text-[#111827] leading-[1.08] tracking-tight mb-5"
                            >
                                <AnimatedText text="We'd love to" className="block" />
                                <AnimatedText text="hear from you." className="block text-[#9CA3AF]" />
                            </AnimatedHeading>

                            <p className="cs-left-desc text-[15px] text-[#6B7280] font-normal leading-relaxed mb-10 max-w-sm">
                                Have a question or want to explore how Seanora Global can help your business? Our team is always here to
                                guide you.
                            </p>

                            {/* Divider — scaleX reveal */}
                            <div className="cs-left-divider w-12 h-px bg-[#E5E7EB] mb-10" />

                            {/* Contact info */}
                            <div className="cs-left-contacts flex flex-col gap-7">
                                {contactInfo.map(({ Icon, label, value, href }) => (
                                    <div key={label} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white border border-black/8 shadow-sm flex items-center justify-center shrink-0">
                                            <Icon className="w-4 h-4 text-[#1E5AA5]" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#9CA3AF] mb-0.5 block">
                                                {label}
                                            </span>
                                            {href ? (
                                                <a
                                                    href={href}
                                                    className="text-[15px] text-[#111827] font-medium leading-snug hover:text-[#1E5AA5] transition-colors duration-200"
                                                >
                                                    {value}
                                                </a>
                                            ) : (
                                                <p className="text-[15px] text-[#111827] font-medium leading-snug">{value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── RIGHT col — form ─────────────────────────────── */}
                        <div className="cs-right-col">
                            <div className="bg-white">
                                <div className="p-0">
                                    {submitted ? (
                                        /* ── Success state ── */
                                        <div className="text-center py-12">
                                            <div className="cs-success-icon w-16 h-16 rounded-2xl bg-[#EFF6FF] flex items-center justify-center mx-auto mb-5">
                                                <CheckCircle2 className="w-8 h-8 text-[#1E5AA5]" strokeWidth={1.5} />
                                            </div>
                                            <h3 className="text-[22px] font-serif font-light text-[#1B1D1E] mb-2">Message Received</h3>
                                            <p className="text-[14px] text-[#6B7280] font-light leading-relaxed max-w-xs mx-auto mb-8">
                                                Thank you for reaching out. We'll get back to you within one business day.
                                            </p>
                                            <button
                                                type="button"
                                                onClick={() => setSubmitted(false)}
                                                className="text-[13px] font-semibold text-[#6B7280] hover:text-[#1B1D1E] underline underline-offset-4 transition-colors duration-200"
                                            >
                                                Send another message
                                            </button>
                                        </div>
                                    ) : (
                                        /* ── Form ── */
                                        <>
                                            <div className="mb-10 text-center">
                                                <h2 className="text-[1.75rem] md:text-[2.5rem] font-medium text-[#111827] tracking-tight mb-2">
                                                    Send a Message
                                                </h2>
                                                <p className="text-[14px] text-[#6B7280] font-normal">
                                                    Our support team is available 24/7 to assist with any issues.
                                                </p>
                                            </div>

                                            {errorMsg && (
                                                <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-100 flex items-start gap-3">
                                                    <svg
                                                        className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                    <p className="text-[13px] text-red-600 font-medium leading-relaxed">{errorMsg}</p>
                                                </div>
                                            )}

                                            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                                                {/* Honeypot field (hidden from humans) */}
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    tabIndex={-1}
                                                    autoComplete="off"
                                                    aria-hidden="true"
                                                    className="hidden"
                                                />
                                                {/* Name + Email */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                                    <div>
                                                        <label htmlFor="name" className={labelCls}>
                                                            Full Name*
                                                        </label>
                                                        <input
                                                            id="name"
                                                            name="name"
                                                            type="text"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            required
                                                            autoComplete="name"
                                                            placeholder="Enter your full name"
                                                            aria-invalid={Boolean(touched.name && fieldErrors.name)}
                                                            className={`${inputCls} ${touched.name && fieldErrors.name ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : ''}`}
                                                        />
                                                        {touched.name && fieldErrors.name && (
                                                            <p className="mt-2 text-[12.5px] text-red-600 font-medium leading-snug">{fieldErrors.name}</p>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <label htmlFor="email" className={labelCls}>
                                                            Email Address*
                                                        </label>
                                                        <input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            required
                                                            autoComplete="email"
                                                            placeholder="your@email.com"
                                                            aria-invalid={Boolean(touched.email && fieldErrors.email)}
                                                            className={`${inputCls} ${touched.email && fieldErrors.email ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : ''}`}
                                                        />
                                                        {touched.email && fieldErrors.email && (
                                                            <p className="mt-2 text-[12.5px] text-red-600 font-medium leading-snug">{fieldErrors.email}</p>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Mobile + Resume */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                                    <div>
                                                        <label htmlFor="phone" className={labelCls}>
                                                            Mobile Number*
                                                        </label>
                                                        <input
                                                            id="phone"
                                                            name="phone"
                                                            type="tel"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            required
                                                            autoComplete="tel"
                                                            placeholder="+1 (555) 000-0000"
                                                            aria-invalid={Boolean(touched.phone && fieldErrors.phone)}
                                                            className={`${inputCls} ${touched.phone && fieldErrors.phone ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : ''}`}
                                                        />
                                                        {touched.phone && fieldErrors.phone && (
                                                            <p className="mt-2 text-[12.5px] text-red-600 font-medium leading-snug">{fieldErrors.phone}</p>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <label htmlFor="resume" className={labelCls}>
                                                            Resume / CV*
                                                        </label>
                                                        <input
                                                            ref={fileInputRef}
                                                            id="resume"
                                                            name="resume"
                                                            type="file"
                                                            accept=".pdf,.doc,.docx"
                                                            onChange={(e) => handleFile(e.target.files[0])}
                                                            required={!formData.resume}
                                                            aria-invalid={Boolean(touched.resume && fieldErrors.resume)}
                                                            className={`${inputCls} py-2.5 ${touched.resume && fieldErrors.resume ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : ''}`}
                                                        />
                                                        <p className="mt-2 text-[12px] text-[#6B7280] font-light">PDF, DOC, DOCX — max 10 MB</p>
                                                        {touched.resume && fieldErrors.resume && (
                                                            <p className="mt-2 text-[12.5px] text-red-600 font-medium leading-snug">{fieldErrors.resume}</p>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Service + Budget */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                                    <div>
                                                        <label htmlFor="subject" className={labelCls}>
                                                            Services*
                                                        </label>
                                                        <div className="relative">
                                                            <select
                                                                id="subject"
                                                                name="subject"
                                                                value={formData.subject}
                                                                onChange={handleChange}
                                                                className={selectCls}
                                                            >
                                                                {serviceOptions.map(({ value, label }) => (
                                                                    <option key={value} value={value}>
                                                                        {label}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            <ChevronIcon />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="budget" className={labelCls}>
                                                            How did you hear about us?
                                                        </label>
                                                        <div className="relative">
                                                            <select
                                                                id="budget"
                                                                name="budget"
                                                                value={formData.budget}
                                                                onChange={handleChange}
                                                                className={selectCls}
                                                            >
                                                                <option value="" disabled>
                                                                    Select one…
                                                                </option>
                                                                {budgetOptions.map(({ value, label }) => (
                                                                    <option key={value} value={value}>
                                                                        {label}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            <ChevronIcon />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Message */}
                                                <div>
                                                    <label htmlFor="message" className={labelCls}>
                                                        Message
                                                    </label>
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                        rows={4}
                                                        placeholder="tell us what you need and we'll get back quickly"
                                                        className={`${inputCls} resize-none`}
                                                    />
                                                </div>

                                                {/* Submit */}
                                                <div className="pt-2">
                                                    <button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="group relative flex items-center justify-between bg-gradient-to-r from-[#1E5AA5] to-[#29A8E0] text-white p-1 rounded-full overflow-hidden w-[190px] h-[46px] disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_4px_14px_rgba(30,90,165,0.35)]"
                                                    >
                                                        <span className="text-[14px] font-semibold pl-5 pr-2 whitespace-nowrap transition-transform duration-[400ms] ease-out group-hover:translate-x-[36px] group-disabled:translate-x-0">
                                                            {isSubmitting ? '…' : "Let's Collaborate"}
                                                        </span>
                                                        <div className="w-9 h-9 rounded-full bg-white text-[#1E5AA5] flex items-center justify-center shrink-0 transition-transform duration-[400ms] ease-out group-hover:-translate-x-[144px] group-disabled:translate-x-0">
                                                            <ArrowUpRight className="w-4 h-4" />
                                                        </div>
                                                    </button>
                                                </div>
                                            </form>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Full-width map — scroll triggered ─────────────────── */}
            <div ref={mapRef} className="cs-map-wrap relative z-10">
                <div className="bg-[#f4f4f4] px-4 lg:px-12 pt-10 pb-14 md:pt-12 md:pb-20 relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-px bg-black/8" />

                    <div className="max-w-6xl mx-auto relative z-10">
                        {/* Header row */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] border border-[#1E5AA5]/20 flex items-center justify-center shrink-0">
                                    <MapPin className="w-4 h-4 text-[#1E5AA5]" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#1E5AA5]/70 block mb-0.5">
                                        Our Location
                                    </span>
                                    <span className="text-[13.5px] text-[#1B1D1E] font-medium">
                                        30 N Gould St Ste R, Sheridan, WY 82801, USA
                                    </span>
                                </div>
                            </div>

                            {/* Open in Maps pill */}
                            <a
                                href="https://maps.google.com/?q=30+N+Gould+St+Ste+R,+Sheridan,+WY+82801"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cs-maps-pill bg-[#1E5AA5] hover:bg-[#0B1F3B] rounded-full w-[156px] h-[46px] transition-colors duration-[400ms] self-start sm:self-auto shadow-[0_4px_14px_rgba(30,90,165,0.25)]"
                            >
                                <span className="cs-maps-pill-text text-[13px] font-medium text-white">Open in Maps</span>
                                <div className="cs-maps-pill-icon w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                                    <ArrowUpRight className="w-4 h-4 text-white" />
                                </div>
                            </a>
                        </div>

                        {/* Map frame */}
                        <div className="rounded-[20px] overflow-hidden h-[380px] md:h-[480px] border border-black/8 shadow-[0_8px_30px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.321351656599!2d-106.95751052310817!3d44.79795157107088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabe8182314f%3A0x16eb18eacf1e0aff!2s30%20N%20Gould%20St%20ste%20r%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e1!3m2!1sen!2sin!4v1773398445217!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                title="Map showing Seanora Global location"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
