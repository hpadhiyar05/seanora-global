import { useState, useEffect, useRef } from 'react';
import { MapPin, Mail, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';
import { API_ENDPOINTS } from '../../../config/api';

/* ─── Data ─────────────────────────────────────────────────────── */
const contactInfo = [
    { Icon: MapPin, label: 'Our Address', value: '30 N Gould St Ste R, Sheridan, WY 82801, USA', href: null },
    { Icon: Mail,   label: 'Email Us',    value: 'info@seanoraglobal.com',                        href: 'mailto:info@seanoraglobal.com' },
    { Icon: Phone,  label: 'Call Us',     value: '+1 325-667-0125',                               href: 'tel:+13256670125' },
];

const serviceOptions = [
    { value: 'it-bootcamps',    label: 'IT Bootcamps' },
    { value: 'consulting',      label: 'Smart IT Solutions & Professional Consulting' },
    { value: 'analytics',       label: 'Analytics and Reporting' },
    { value: 'cloud',           label: 'Cloud Infrastructure & Security' },
    { value: 'bpo',             label: 'Business Process Outsourcing' },
    { value: 'big-data',        label: 'Big Data' },
    { value: 'data-warehousing',label: 'Data Warehousing' },
    { value: 'other',           label: 'Something Else' },
];

const hearAboutOptions = [
    { value: 'google',       label: 'Google Search' },
    { value: 'linkedin',     label: 'LinkedIn' },
    { value: 'facebook',     label: 'Facebook' },
    { value: 'instagram',    label: 'Instagram' },
    { value: 'youtube',      label: 'YouTube' },
    { value: 'referral',     label: 'Referral (Friend/Colleague)' },
    { value: 'existing',     label: 'Existing Client' },
    { value: 'event',        label: 'Event / Conference' },
    { value: 'advertisement',label: 'Advertisement' },
    { value: 'other',        label: 'Other' },
];

/* ─── Shared input / label classes ─────────────────────────────── */
const inputCls =
    'w-full px-4 py-3.5 rounded-xl border border-[#E7E7E7] bg-[#F6F6F6] text-[1rem] text-[#070707] placeholder:text-[#888888] focus:outline-none focus:border-[#2A27AC] focus:bg-white focus:ring-2 focus:ring-[#2A27AC]/10 transition-all duration-200 font-light';

const selectCls =
    'w-full pl-4 pr-10 py-3.5 rounded-xl border border-[#E7E7E7] bg-[#F6F6F6] text-[1rem] text-[#070707] focus:outline-none focus:border-[#2A27AC] focus:bg-white focus:ring-2 focus:ring-[#2A27AC]/10 transition-all duration-200 appearance-none cursor-pointer font-light';

const labelCls = 'text-[0.875rem] font-semibold text-[#3D3D3D] mb-2 block tracking-[0.01em]';

/* ─── ChevronDown for selects ──────────────────────────────────── */
const ChevronIcon = () => (
    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#888888]">
            <path d="m6 9 6 6 6-6" />
        </svg>
    </div>
);

/* ─── CSS injected once ─────────────────────────────────────────── */
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

.cs-left-overline { opacity: 0; animation: cs-fadeUpSm 0.5s ease-out forwards; }
.cs-left-heading  { opacity: 0; animation: cs-fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards 0.06s; }
.cs-left-desc     { opacity: 0; animation: cs-fadeUpSm 0.6s ease-out forwards 0.15s; }
.cs-left-divider  { transform: scaleX(0); transform-origin: left; animation: cs-scaleX 0.6s ease-out forwards 0.2s; }
.cs-left-contacts { opacity: 0; animation: cs-fadeUp 0.7s ease-out forwards 0.25s; }
.cs-right-col     { opacity: 0; animation: cs-fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards 0.1s; }

.cs-map-wrap {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.cs-map-wrap.cs-visible { opacity: 1; transform: translateY(0); }

.cs-success-icon { animation: cs-popIn 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards; }

.cs-word {
  display: inline-block;
  opacity: 0;
  animation: cs-wordUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
}

`;

let cssInjected = false;
function injectCSS() {
    if (cssInjected || typeof document === 'undefined') return;
    const el = document.createElement('style');
    el.textContent = CSS;
    document.head.appendChild(el);
    cssInjected = true;
}

/* ─── useInView hook ────────────────────────────────────────────── */
function useInView(ref, options = {}) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.classList.add('cs-visible'); obs.disconnect(); } },
            { rootMargin: '-60px', ...options },
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [ref, options]);
}

/* ═══════════════════════════════════════════════════════════════ */
const ContactSection = () => {
    injectCSS();

    const mapRef = useRef(null);
    useInView(mapRef);

    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', subject: 'it-bootcamps',
        budget: '', message: '', company: '',
    });
    const [touched, setTouched] = useState({});
    const [fieldErrors, setFieldErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setFieldErrors((prev) => { if (!prev[name]) return prev; const next = { ...prev }; delete next[name]; return next; });
    };

    const validateEmail  = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());
    const normalizeDigits = (v) => String(v ?? '').replace(/[^\d]/g, '');
    const validatePhone  = (v) => { const d = normalizeDigits(v); return d.length >= 7 && d.length <= 15; };

    const validateForm = (next = formData) => {
        const errs = {};
        const name  = String(next.name  ?? '').trim();
        const email = String(next.email ?? '').trim();
        const phone = String(next.phone ?? '').trim();
        if (!name)                      errs.name  = 'Full name is required.';
        else if (name.length < 2)       errs.name  = 'Full name must be at least 2 characters.';
        if (!email)                     errs.email = 'Email is required.';
        else if (!validateEmail(email)) errs.email = 'Enter a valid email address (e.g., name@domain.com).';
        if (!phone)                     errs.phone = 'Mobile number is required.';
        else if (!validatePhone(phone)) errs.phone = 'Enter a valid mobile number (7–15 digits).';
        return errs;
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setFieldErrors((prev) => ({ ...prev, ...validateForm(formData) }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (String(formData.company || '').trim()) { setSubmitted(true); return; }
        const submitTouched = { name: true, email: true, phone: true };
        setTouched((prev) => ({ ...prev, ...submitTouched }));
        const nextErrors = validateForm(formData);
        setFieldErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) { setErrorMsg('Please fix the highlighted fields and try again.'); return; }
        setIsSubmitting(true);
        setErrorMsg('');
        const payload = new FormData();
        payload.append('fullName', formData.name);
        payload.append('email',   formData.email);
        payload.append('phone',   formData.phone);
        payload.append('subject', formData.subject);
        payload.append('budget',  formData.budget);
        payload.append('message', formData.message);
        try {
            const response = await fetch(API_ENDPOINTS.sendMail, { method: 'POST', body: payload });
            const data = await response.json();
            if (data.success === true) {
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', subject: 'it-bootcamps', budget: '', message: '', company: '' });
                setTouched({}); setFieldErrors({});
            } else { setErrorMsg(data.message || 'Something went wrong. Please try again.'); setSubmitted(false); }
        } catch { setErrorMsg('Failed to connect to the server. Please check your connection and try again.'); setSubmitted(false); }
        finally { setIsSubmitting(false); }
    };

    return (
        <section className="relative overflow-hidden bg-white">

            {/* Decorative rings — matching WhyChooseUs */}
            <div aria-hidden className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-black/[0.04] pointer-events-none" />
            <div aria-hidden className="absolute -right-16 top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-black/[0.05] pointer-events-none" />

            {/* ── Two-column layout ─────────────────────────────────── */}
            <div className="pt-36 md:pt-44 pb-16 md:pb-24 relative z-10">
                <div className="container mx-auto px-8 md:px-12 lg:px-16 max-w-[1140px]">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-16 xl:gap-24 items-start">

                        {/* ── LEFT col ─────────────────────────────────────── */}
                        <div className="lg:sticky lg:top-32">

                            {/* Eyebrow — matches design system */}
                            <div className="cs-left-overline flex items-center gap-3 mb-6">
                                <div className="h-px w-7 bg-[#2A27AC]/50" />
                                <span className="text-[0.875rem] font-semibold tracking-[0.22em] text-[#2A27AC] uppercase">
                                    Contact Seanora Global
                                </span>
                            </div>

                            <AnimatedHeading
                                as="h1"
                                className="text-[2.8rem] md:text-[4rem] font-medium text-[#070707] leading-[1.08] tracking-[-0.02em] mb-6"
                            >
                                <AnimatedText text="We'd love to" className="block" />
                                <AnimatedText text="hear from" className="block" />
                                <AnimatedText text="you." className="block text-[#00000066]" />
                            </AnimatedHeading>

                            <p className="cs-left-desc text-[1rem] text-[#888888] font-light leading-[1.85] mb-10 max-w-sm">
                                Have a question or want to explore how Seanora Global can help your business? Our team is always here to guide you.
                            </p>

                            {/* Divider */}
                            <div className="cs-left-divider w-10 h-px bg-[#2A27AC]/30 mb-10" />

                            {/* Contact info cards */}
                            <div className="cs-left-contacts flex flex-col gap-4">
                                {contactInfo.map(({ Icon, label, value, href }) => (
                                    <div key={label} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E7E7E7] hover:border-[#D1D1D1] transition-colors duration-300">
                                        <div className="w-11 h-11 rounded-xl bg-[#EDF3FF] flex items-center justify-center shrink-0">
                                            <Icon className="w-4.5 h-4.5 text-[#2A27AC]" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <span className="text-[0.875rem] uppercase tracking-[0.14em] font-semibold text-[#888888] mb-0.5 block">
                                                {label}
                                            </span>
                                            {href ? (
                                                <a
                                                    href={href}
                                                    className="text-[1rem] text-[#2A27AC] font-medium leading-snug cursor-pointer underline decoration-[#2A27AC]/20 underline-offset-4 hover:text-[#1E5AA5] hover:decoration-[#1E5AA5]/40 transition-colors duration-200 focus:outline-none focus-visible:decoration-[#2A27AC]/60 focus-visible:text-[#2A27AC]"
                                                >
                                                    {value}
                                                </a>
                                            ) : (
                                                <p className="text-[1rem] text-[#070707] font-medium leading-snug">{value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── RIGHT col — form ─────────────────────────────── */}
                        <div className="cs-right-col">
                            <div className="bg-white rounded-3xl border border-[#E7E7E7] p-8 md:p-10">

                                {submitted ? (
                                    /* ── Success state ── */
                                    <div className="text-center py-12">
                                        <div className="cs-success-icon w-16 h-16 rounded-2xl bg-[#EDF3FF] flex items-center justify-center mx-auto mb-5">
                                            <CheckCircle2 className="w-8 h-8 text-[#2A27AC]" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-[1.75rem] font-medium text-[#070707] mb-2 tracking-[-0.01em]">Message Received</h3>
                                        <p className="text-[1rem] text-[#888888] font-light leading-relaxed max-w-xs mx-auto mb-8">
                                            Thank you for reaching out. We'll get back to you within one business day.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => setSubmitted(false)}
                                            className="text-[0.875rem] font-semibold text-[#888888] hover:text-[#070707] underline underline-offset-4 transition-colors duration-200"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    /* ── Form ── */
                                    <>
                                        {/* Form header */}
                                        <div className="mb-8">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="h-px w-7 bg-[#2A27AC]/40" />
                                                <span className="text-[0.875rem] font-semibold tracking-[0.22em] text-[#2A27AC] uppercase">Get in Touch</span>
                                            </div>
                                            <h2 className="text-[2rem] md:text-[2.5rem] font-medium text-[#070707] tracking-[-0.02em] mb-2">
                                                Send a Message
                                            </h2>
                                            <p className="text-[1rem] text-[#888888] font-light">
                                                Our support team is available 24/7 to assist with any issues.
                                            </p>
                                        </div>

                                        {errorMsg && (
                                            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3">
                                                <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <p className="text-[0.875rem] text-red-600 font-medium leading-relaxed">{errorMsg}</p>
                                            </div>
                                        )}

                                        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                            {/* Honeypot */}
                                            <input type="text" name="company" value={formData.company} onChange={handleChange} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                                            {/* Name + Email */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label htmlFor="name" className={labelCls}>Full Name*</label>
                                                    <input
                                                        id="name" name="name" type="text"
                                                        value={formData.name} onChange={handleChange} onBlur={handleBlur}
                                                        required autoComplete="name" placeholder="Enter your full name"
                                                        aria-invalid={Boolean(touched.name && fieldErrors.name)}
                                                        className={`${inputCls} ${touched.name && fieldErrors.name ? '!border-red-300 focus:!border-red-400 focus:!ring-red-100' : ''}`}
                                                    />
                                                    {touched.name && fieldErrors.name && <p className="mt-1.5 text-[0.875rem] text-red-500 font-medium">{fieldErrors.name}</p>}
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className={labelCls}>Email Address*</label>
                                                    <input
                                                        id="email" name="email" type="email"
                                                        value={formData.email} onChange={handleChange} onBlur={handleBlur}
                                                        required autoComplete="email" placeholder="your@email.com"
                                                        aria-invalid={Boolean(touched.email && fieldErrors.email)}
                                                        className={`${inputCls} ${touched.email && fieldErrors.email ? '!border-red-300 focus:!border-red-400 focus:!ring-red-100' : ''}`}
                                                    />
                                                    {touched.email && fieldErrors.email && <p className="mt-1.5 text-[0.875rem] text-red-500 font-medium">{fieldErrors.email}</p>}
                                                </div>
                                            </div>

                                            {/* Mobile */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label htmlFor="phone" className={labelCls}>Mobile Number*</label>
                                                    <input
                                                        id="phone" name="phone" type="tel"
                                                        value={formData.phone} onChange={handleChange} onBlur={handleBlur}
                                                        required autoComplete="tel" placeholder="+1 (555) 000-0000"
                                                        aria-invalid={Boolean(touched.phone && fieldErrors.phone)}
                                                        className={`${inputCls} ${touched.phone && fieldErrors.phone ? '!border-red-300 focus:!border-red-400 focus:!ring-red-100' : ''}`}
                                                    />
                                                    {touched.phone && fieldErrors.phone && <p className="mt-1.5 text-[0.875rem] text-red-500 font-medium">{fieldErrors.phone}</p>}
                                                </div>
                                            </div>

                                            {/* Service + How did you hear */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label htmlFor="subject" className={labelCls}>Services*</label>
                                                    <div className="relative">
                                                        <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className={selectCls}>
                                                            {serviceOptions.map(({ value, label }) => (
                                                                <option key={value} value={value}>{label}</option>
                                                            ))}
                                                        </select>
                                                        <ChevronIcon />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="budget" className={labelCls}>How did you hear about us?</label>
                                                    <div className="relative">
                                                        <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={selectCls}>
                                                            <option value="" disabled>Select one…</option>
                                                            {hearAboutOptions.map(({ value, label }) => (
                                                                <option key={value} value={value}>{label}</option>
                                                            ))}
                                                        </select>
                                                        <ChevronIcon />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div>
                                                <label htmlFor="message" className={labelCls}>Message</label>
                                                <textarea
                                                    id="message" name="message"
                                                    value={formData.message} onChange={handleChange} onBlur={handleBlur}
                                                    required rows={4}
                                                    placeholder="Tell us what you need and we'll get back quickly"
                                                    className={`${inputCls} resize-none`}
                                                />
                                            </div>

                                            {/* Submit */}
                                            <div className="pt-2">
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="group relative flex items-center justify-between bg-[#070707] hover:bg-[#2A27AC] text-white p-1 rounded-full overflow-hidden w-[200px] h-[50px] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                                                >
                                                    <span className="text-[0.875rem] font-semibold pl-5 pr-2 whitespace-nowrap transition-transform duration-[400ms] ease-out group-hover:translate-x-[36px] group-disabled:translate-x-0">
                                                        {isSubmitting ? '…' : "Let's Collaborate"}
                                                    </span>
                                                    <div className="w-10 h-10 rounded-full bg-white text-[#070707] flex items-center justify-center shrink-0 transition-all duration-[400ms] ease-out group-hover:-translate-x-[152px] group-disabled:translate-x-0">
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

            {/* ── Full-width map — scroll triggered ─────────────────── */}
            <div ref={mapRef} className="cs-map-wrap relative z-10">
                <div className="bg-[#E7E7E7] px-8 md:px-12 lg:px-16 pt-12 pb-16 md:pt-14 md:pb-20 relative overflow-hidden">

                    <div className="max-w-[1140px] mx-auto relative z-10">
                        {/* Header row */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white border border-[#D1D1D1] flex items-center justify-center shrink-0">
                                    <MapPin className="w-4 h-4 text-[#3D3D3D]" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <span className="text-[0.875rem] uppercase tracking-[0.18em] font-semibold text-[#888888] block mb-0.5">
                                        Our Location
                                    </span>
                                    <span className="text-[1rem] text-[#070707] font-medium">
                                        30 N Gould St Ste R, Sheridan, WY 82801, USA
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* Map frame */}
                        <div className="rounded-2xl overflow-hidden h-[380px] md:h-[480px] border border-[#D1D1D1]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.321351656599!2d-106.95751052310817!3d44.79795157107088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabe8182314f%3A0x16eb18eacf1e0aff!2s30%20N%20Gould%20St%20ste%20r%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e1!3m2!1sen!2sin!4v1773398445217!5m2!1sen!2sin"
                                width="100%" height="100%"
                                title="Map showing Seanora Global location"
                                style={{ border: 0 }}
                                allowFullScreen="" loading="lazy"
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