import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';
import Breadcrumb from '../../../components/ui/Breadcrumb';

/* ─── Data ─────────────────────────────────────────────────────── */
const contactInfo = [
  {
    Icon: MapPin,
    label: 'Our Address',
    value: '30 N Gould St Ste R, Sheridan, WY 82801, USA',
    href: null,
  },
  {
    Icon: Mail,
    label: 'Email Us',
    value: 'info@seanoraglobal.com',
    href: 'mailto:info@seanoraglobal.com',
  },
  {
    Icon: Phone,
    label: 'Call Us',
    value: '+1 325-667-0125',
    href: 'tel:+13256670125',
  },
];

const serviceOptions = [
  { value: 'web-mobile',    label: 'Web & Mobile Development' },
  { value: 'consulting',   label: 'IT Consulting' },
  { value: 'cloud',        label: 'Cloud Computing & Security' },
  { value: 'integration',  label: 'System Integration' },
  { value: 'training',     label: 'IT Training' },
  { value: 'marketing',    label: 'Digital Marketing' },
  { value: 'other',        label: 'Something Else' },
];

const budgetOptions = [
  { value: 'under-5k',    label: 'Under $5,000' },
  { value: '5k-15k',      label: '$5,000 – $15,000' },
  { value: '15k-50k',     label: '$15,000 – $50,000' },
  { value: '50k-plus',    label: '$50,000+' },
  { value: 'discuss',     label: 'Let\'s discuss' },
];

/* ─── Shared input / label classes ─────────────────────────────── */
const inputCls =
  'w-full px-4 py-3.5 rounded-xl border border-black/10 bg-[#F9FAF8] text-[14px] text-[#1B1D1E] placeholder:text-black/25 focus:outline-none focus:border-[#1B1D1E]/25 focus:ring-2 focus:ring-[#1B1D1E]/5 focus:bg-white transition-all duration-200';

const selectCls =
  'w-full pl-4 pr-12 py-3.5 rounded-xl border border-black/10 bg-white text-[14px] text-[#1B1D1E] focus:outline-none focus:border-[#1B1D1E]/30 focus:ring-2 focus:ring-[#1B1D1E]/6 transition-all duration-200 appearance-none cursor-pointer';

const labelCls =
  'text-[11px] font-bold uppercase tracking-[0.14em] text-[#1B1D1E]/50 mb-1.5 block';

/* ─── ChevronDown for selects ──────────────────────────────────── */
const ChevronIcon = () => (
  <div className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
    <div className="flex items-center h-full pr-1">
      <div className="w-px h-5 bg-black/10 mr-2" />
      <div className="w-8 h-8 rounded-lg bg-[#F2F1EE] flex items-center justify-center mr-0.5">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#1B1D1E]/50">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════ */
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'web-mobile',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    console.log('--- Form Submission Started ---');
    console.log('Payload being sent:', payload);

    try {
      console.log('Executing fetch request to http://localhost:8000/send-mail.php...');
      const response = await fetch('http://localhost:8000/send-mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('Raw response received:', response);
      
      const data = await response.json();
      console.log('Parsed JSON response data:', data);

      if (data.success === true) {
        console.log('Submission successful. Resetting form.');
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: 'web-mobile', budget: '', message: '' });
      } else {
        console.warn('Submission failed with success=false. Error from API:', data.message);
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
        setSubmitted(false);
      }
    } catch (error) {
      console.error('--- Form Submission Error Caught ---');
      console.error('Error details:', error);
      setErrorMsg('Failed to connect to the server. Please check your connection and try again.');
      setSubmitted(false);
    } finally {
      console.log('--- Form Submission Completed ---');
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white">

      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white via-white/80 to-transparent z-[1] pointer-events-none" />

      {/* ── Hero + form ─────────────────────────────────────────── */}
      <div className="pt-32 md:pt-40 pb-16 md:pb-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-12 xl:gap-20 items-start">

            {/* ── LEFT: heading + contact info ── */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
            <Breadcrumb crumbs={[{ label: 'Contact' }]} />

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-sans tracking-[0.22em] text-[#6B6B6B] font-medium uppercase mb-5 block"
            >
              Get in Touch
            </motion.span>

              <AnimatedHeading
                as="h1"
                className="text-5xl md:text-6xl lg:text-[62px] font-serif text-[#1B1D1E] font-light leading-[1.08] tracking-tight mb-6"
              >
                <AnimatedText text="Love to hear" className="block" />
                <span className="inline-flex gap-x-3 flex-wrap">
                  <AnimatedText text="from" />
                  <AnimatedText text="you." className="italic text-[#1B1D1E]/60" />
                </span>
              </AnimatedHeading>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[16px] text-[#6B6B6B] font-light leading-relaxed max-w-sm mb-10"
              >
                Whether you have a project in mind or simply want to explore how
                we can help — we'd love to start a conversation.
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-full h-px bg-black/8 mb-10 origin-left"
              />

              {/* Contact info list */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="flex flex-col gap-7"
              >
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-black/8 flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-4 h-4 text-[#1B1D1E]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#6B6B6B] mb-0.5 block">
                        {label}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          className="text-[15px] text-[#1B1D1E] font-medium leading-snug hover:text-[#5BAACC] transition-colors duration-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-[15px] text-[#1B1D1E] font-medium leading-snug">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT: form card ── */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="bg-white rounded-[28px] p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.07)] border border-black/[0.04]">

                {submitted ? (
                  /* ── Success state ── */
                  <div className="text-center py-10">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                      className="w-16 h-16 rounded-full bg-[#Eef7fb] flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 className="w-8 h-8 text-[#5BAACC]" strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-2xl font-serif text-[#1B1D1E] mb-3">Message Received</h3>
                    <p className="text-[15px] text-[#6B6B6B] font-light leading-relaxed max-w-xs mx-auto mb-8">
                      Thank you for reaching out. We'll get back to you within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-[13px] font-semibold text-[#6B6B6B] hover:text-[#1B1D1E] underline underline-offset-4 transition-colors duration-200"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  /* ── Form ── */
                  <>
                    <div className="mb-8">
                      <h2 className="text-xl font-serif text-[#1B1D1E] mb-1">Send us a message</h2>
                      <p className="text-[13px] text-[#6B6B6B] font-light">
                        We typically respond within one business day.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3">
                        <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-[13.5px] text-red-600 font-medium leading-relaxed">
                          {errorMsg}
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className={labelCls}>Your Name *</label>
                          <input
                            id="name" name="name" type="text"
                            value={formData.name} onChange={handleChange}
                            required autoComplete="name"
                            placeholder="Jane Smith"
                            className={inputCls}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className={labelCls}>Email Address *</label>
                          <input
                            id="email" name="email" type="email"
                            value={formData.email} onChange={handleChange}
                            required autoComplete="email"
                            placeholder="jane@example.com"
                            className={inputCls}
                          />
                        </div>
                      </div>

                      {/* Service + Budget */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="subject" className={labelCls}>Service Interest</label>
                          <div className="relative">
                            <select
                              id="subject" name="subject"
                              value={formData.subject} onChange={handleChange}
                              className={selectCls}
                            >
                              {serviceOptions.map(({ value, label }) => (
                                <option key={value} value={value}>{label}</option>
                              ))}
                            </select>
                            <ChevronIcon />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="budget" className={labelCls}>Project Budget</label>
                          <div className="relative">
                            <select
                              id="budget" name="budget"
                              value={formData.budget} onChange={handleChange}
                              className={selectCls}
                            >
                              <option value="" disabled>Select a range…</option>
                              {budgetOptions.map(({ value, label }) => (
                                <option key={value} value={value}>{label}</option>
                              ))}
                            </select>
                            <ChevronIcon />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className={labelCls}>Your Message *</label>
                        <textarea
                          id="message" name="message"
                          value={formData.message} onChange={handleChange}
                          required rows={4}
                          placeholder="Tell us about your project, goals, or any questions you have…"
                          className={`${inputCls} resize-none`}
                        />
                      </div>

                      {/* Submit */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative flex items-center justify-between bg-[#1B1D1E] text-white p-1 rounded-full overflow-hidden w-[190px] disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          <span className="text-[14px] font-medium pl-5 pr-2 whitespace-nowrap transition-transform duration-[400ms] ease-out group-hover:translate-x-[36px] group-disabled:translate-x-0">
                            {isSubmitting ? 'Sending…' : "Let's Collaborate"}
                          </span>
                          <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shrink-0 transition-transform duration-[400ms] ease-out group-hover:-translate-x-[146px] group-disabled:translate-x-0">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </button>
                      </div>

                    </form>
                  </>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Full-width map ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Light warm-neutral panel */}
        <div className="bg-[#f4f4f4] px-4 lg:px-12 pt-10 pb-14 md:pt-12 md:pb-20 relative overflow-hidden">

          {/* Thin top accent line */}
          <div className="absolute inset-x-0 top-0 h-px bg-black/8" />

          <div className="max-w-6xl mx-auto relative z-10">

            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#6B5A47]/10 border border-[#6B5A47]/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#6B5A47]" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#8B7455] block mb-0.5">
                    Our Location
                  </span>
                  <span className="text-[13.5px] text-[#2E2620] font-medium">
                    30 N Gould St Ste R, Sheridan, WY 82801, USA
                  </span>
                </div>
              </div>

              {/* "Open in Maps" animated button */}
              <a
                href="https://maps.google.com/?q=30+N+Gould+St+Ste+R,+Sheridan,+WY+82801"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between bg-[#2E2620] hover:bg-[#6B5A47] p-1 rounded-full overflow-hidden w-[156px] transition-colors duration-[400ms] self-start sm:self-auto"
              >
                <span className="text-[13px] font-medium pl-4 pr-2 whitespace-nowrap text-white transition-transform duration-[400ms] ease-out group-hover:translate-x-[36px]">
                  Open in Maps
                </span>
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0 transition-transform duration-[400ms] ease-out group-hover:-translate-x-[108px]">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </a>
            </div>

            {/* Map frame — warm toned border + layered shadow */}
            <div className="rounded-[20px] overflow-hidden h-[380px] md:h-[480px] border-2 border-[#C8B89A]/45 shadow-[0_0_0_6px_rgba(200,184,154,0.15),0_20px_56px_rgba(60,40,20,0.13)]">
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
      </motion.div>

    </section>
  );
};

export default ContactSection;
