import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { m } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
  CheckCircle2,
  Upload,
  Send,
} from 'lucide-react';
import Breadcrumb from '../../components/ui/Breadcrumb';
import { AnimatedHeading, AnimatedText } from '../../components/ui/AnimatedHeading';
import SEO from '../../components/seo/SEO';
import { sanityClient } from '../../lib/sanityClient';
import { API_ENDPOINTS } from '../../config/api';

/* ─── Field wrapper ──────────────────────────────────────────────── */
const Field = ({ label, required, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[13px] font-semibold text-[#1B1D1E]/70 tracking-wide">
      {label}
      {required && <span className="text-red-400 ml-1">*</span>}
    </label>
    {children}
  </div>
);

const FieldError = ({ children }) => (
  <p className="text-[12.5px] text-red-600 font-medium leading-snug mt-1">{children}</p>
);

const inputCls =
  'w-full border border-black/10 rounded-xl px-4 py-3 text-[15px] text-[#1B1D1E] placeholder-[#1B1D1E]/30 bg-white focus:outline-none focus:border-[#1E5AA5]/30 focus:ring-2 focus:ring-[#1E5AA5]/10 transition-all duration-200';

/* ─── Section block on the left ──────────────────────────────────── */
const DetailSection = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#6B6B6B] mb-5 pb-3 border-b border-black/5">
      {title}
    </h2>
    {children}
  </div>
);

/* ─── Bullet list item ───────────────────────────────────────────── */
const BulletItem = ({ text, accent = false }) => (
  <li className="flex items-start gap-3 mb-3">
    <CheckCircle2
      className={`w-4 h-4 mt-0.5 shrink-0 ${accent ? 'text-[#1E5AA5]' : 'text-[#1B1D1E]/25'}`}
      strokeWidth={2}
    />
    <span className={`text-[15px] leading-relaxed ${accent ? 'text-[#1B1D1E]' : 'text-[#4A4A4A]'}`}>
      {text}
    </span>
  </li>
);

/* ─── Meta badge ─────────────────────────────────────────────────── */
const MetaBadge = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2.5 bg-[#F4F6F5] px-4 py-2.5 rounded-xl">
    <Icon className="w-4 h-4 text-[#6B6B6B] shrink-0" strokeWidth={1.5} />
    <span className="text-[13px] font-medium text-[#1B1D1E]/80">{label}</span>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════ */

const JobDetail = () => {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  let cancelled = false;

  const fetchJob = async () => {
    setLoading(true);
    setError(null);

    try {
      const query = `
        *[_type == "jobs" && _id == $id && isActive == true][0]{
          _id,
          title,
          department,
          type,
          location,
          experience,
          salary,
          description,
          about,
          responsibilities,
          requirements,
          niceToHave,
          benefits
        }
      `;

      const result = await sanityClient.fetch(query, { id });

      if (cancelled) return;

      if (!result) {
        setError("Position not found. It may have been filled or the link is incorrect.");
        setJob(null);
        return;
      }

      setJob(result);

    } catch (err) {
      if (cancelled) return;

      console.error("Failed to fetch job:", err);
      setError("An error occurred while loading the position details.");
      setJob(null);

    } finally {
      if (!cancelled) {
        setLoading(false);
      }
    }
  };

  if (id) {
    fetchJob();
  } else {
    setLoading(false);
    setError("Invalid job ID.");
  }

  return () => {
    cancelled = true;
  };

}, [id]);

  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    coverLetter: '',
    resume: null,
    company: '', // honeypot (bots tend to fill hidden fields)
  });
  const [touched, setTouched] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="w-10 h-10 rounded-full border-2 border-black/10 border-t-[#1B1D1E] animate-spin"></div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
        <p className="text-4xl font-serif text-[#1B1D1E] mb-4">Position not found</p>
        <p className="text-[#6B6B6B] mb-8 font-light">{error || "This role may have been filled or the link is incorrect."}</p>
        <Link to="/careers" className="inline-flex items-center gap-2 text-[14px] font-medium text-[#1B1D1E] underline underline-offset-4">
          <ArrowLeft className="w-4 h-4" /> Back to Careers
        </Link>
      </div>
    );
  }

  const aboutText = String(job.about ?? '').trim();
  const responsibilitiesList = (job.responsibilities ?? []).map((v) => String(v ?? '').trim()).filter(Boolean);
  const requirementsList = (job.requirements ?? []).map((v) => String(v ?? '').trim()).filter(Boolean);
  const niceToHaveList = (job.niceToHave ?? []).map((v) => String(v ?? '').trim()).filter(Boolean);
  const benefitsList = (job.benefits ?? []).map((v) => String(v ?? '').trim()).filter(Boolean);

  /* ── form handlers ── */
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

  const validateForm = (nextForm = form) => {
    const nextErrors = {};
    const fullName = String(nextForm.fullName ?? '').trim();
    const email = String(nextForm.email ?? '').trim();
    const phone = String(nextForm.phone ?? '').trim();

    if (!fullName) nextErrors.fullName = 'Full name is required.';
    else if (fullName.length < 2) nextErrors.fullName = 'Full name must be at least 2 characters.';

    if (!email) nextErrors.email = 'Email is required.';
    else if (!validateEmail(email)) nextErrors.email = 'Enter a valid email address (e.g., name@domain.com).';

    if (!phone) nextErrors.phone = 'Mobile number is required.';
    else if (!validatePhone(phone)) nextErrors.phone = 'Enter a valid mobile number (7–15 digits).';

    const resumeError = validateResume(nextForm.resume);
    if (resumeError) nextErrors.resume = resumeError;

    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleFile = (file) => {
    if (!file) return;
    setForm((prev) => ({ ...prev, resume: file }));
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next.resume;
      return next;
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const nextErrors = validateForm(form);
    setFieldErrors((prev) => ({ ...prev, ...nextErrors }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Honeypot: if filled, likely a bot — silently succeed.
    if (String(form.company || '').trim()) {
      setSubmitted(true);
      return;
    }
    const submitTouched = {
      fullName: true,
      email: true,
      phone: true,
      resume: true,
    };
    setTouched((prev) => ({ ...prev, ...submitTouched }));
    const nextErrors = validateForm(form);
    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitting(false);
      setErrorMsg('Please fix the highlighted fields and try again.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Because we are uploading a file (resume), we CANNOT use JSON.
    // We must use FormData instead.
    const formData = new FormData();
    formData.append('fullName', form.fullName);
    formData.append('email', form.email);
    formData.append('phone', form.phone);
    formData.append('linkedin', form.linkedin);
    formData.append('coverLetter', form.coverLetter);
    formData.append('position', job.title);
    formData.append('department', job.department);
    
    if (form.resume) {
      formData.append('resume', form.resume); // The actual File object
    }

    try {
      const response = await fetch(API_ENDPOINTS.sendMail, {
        method: 'POST',
        body: formData,
      });

      
      const data = await response.json();

      if (data.success === true) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
        setSubmitted(false);
      }
    } catch (_error) {
      setErrorMsg('Failed to connect to the server. Please check your connection and try again.');
      setSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title={`${job.title} | Careers at Seanora Global`}
        description={job.description}
        path={`/careers/${id}`}
        robots="noindex,nofollow"
      />

      <div className="min-h-screen bg-white relative overflow-hidden">

        {/* Subtle gradient blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute left-0 top-0 w-[700px] h-[700px] bg-[#EFF6FF] rounded-full blur-[100px] opacity-50 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#E8EEF5] rounded-full blur-[100px] opacity-40 translate-x-1/3 translate-y-1/4" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-12 max-w-6xl pt-32 pb-20 md:pt-40">

          {/* Breadcrumb */}
          <Breadcrumb
            crumbs={[
              { label: 'Careers', to: '/careers' },
              { label: job.title },
            ]}
          />

          {/* Job Hero */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[11px] uppercase tracking-[0.12em] font-bold text-white bg-[#1E5AA5] px-3 py-1 rounded-full">
                {job.department}
              </span>
              <span className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[#6B6B6B] bg-black/5 px-3 py-1 rounded-full">
                {job.type}
              </span>
            </div>

            <AnimatedHeading as="h1" className="text-[3rem] md:text-[5rem] font-medium text-[#111827] leading-tight tracking-tight mb-6">
              <AnimatedText text={job.title} />
            </AnimatedHeading>

            <div className="flex flex-wrap gap-3">
              <MetaBadge icon={MapPin} label={job.location} />
              <MetaBadge icon={Clock} label={job.type} />
              {job.experience && <MetaBadge icon={Briefcase} label={`${job.experience} experience`} />}
              {job.salary && <MetaBadge icon={DollarSign} label={job.salary} />}
            </div>
          </m.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 xl:gap-16 items-start">

            {/* ── LEFT: Job Details ── */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* About */}
              {aboutText && (
                <DetailSection title="About the Role">
                  <p className="text-[16px] text-[#4A4A4A] leading-relaxed font-light">
                    {aboutText}
                  </p>
                </DetailSection>
              )}

              {/* Responsibilities */}
              {responsibilitiesList.length > 0 && (
                <DetailSection title="Key Responsibilities">
                  <ul className="list-none p-0 m-0">
                    {responsibilitiesList.map((item, i) => (
                      <BulletItem key={i} text={item} accent />
                    ))}
                  </ul>
                </DetailSection>
              )}

              {/* Requirements */}
              {requirementsList.length > 0 && (
                <DetailSection title="Requirements">
                  <ul className="list-none p-0 m-0">
                    {requirementsList.map((item, i) => (
                      <BulletItem key={i} text={item} />
                    ))}
                  </ul>
                </DetailSection>
              )}

              {/* Nice to have */}
              {niceToHaveList.length > 0 && (
                <DetailSection title="Nice to Have">
                  <ul className="list-none p-0 m-0">
                    {niceToHaveList.map((item, i) => (
                      <BulletItem key={i} text={item} />
                    ))}
                  </ul>
                </DetailSection>
              )}

              {/* Benefits */}
              {benefitsList.length > 0 && (
                <DetailSection title="What We Offer">
                  <ul className="list-none p-0 m-0">
                    {benefitsList.map((item, i) => (
                      <BulletItem key={i} text={item} accent />
                    ))}
                  </ul>
                </DetailSection>
              )}
            </m.div>

            {/* ── RIGHT: Application Form ── */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:sticky lg:top-28"
            >
              <div className="bg-white border border-black/8 rounded-2xl p-6 md:p-8 shadow-sm shadow-black/5">

                {submitted ? (
                  /* ── Success state ── */
                  <div className="text-center py-8">
                    <div className="w-14 h-14 rounded-full bg-[#DBEAFE] flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-7 h-7 text-[#1E5AA5]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-serif text-[#1B1D1E] mb-3">Application Received</h3>
                    <p className="text-[14px] text-[#6B6B6B] font-light leading-relaxed mb-6">
                      Thank you for applying for <strong className="font-semibold text-[#1B1D1E]">{job.title}</strong>.
                      Our team will review your application and get back to you within 5–7 business days.
                    </p>
                    <Link
                      to="/careers"
                      className="inline-flex items-center gap-2 text-[13px] font-medium text-[#6B6B6B] hover:text-[#1B1D1E] transition-colors duration-200"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Back to all openings
                    </Link>
                  </div>
                ) : (
                  /* ── Form ── */
                  <>
                    <div className="mb-6">
                      <h2 className="text-xl font-serif text-[#1B1D1E] mb-1">Apply for this position</h2>
                      <p className="text-[13px] text-[#6B6B6B] font-light">
                        All fields marked <span className="text-red-400">*</span> are required.
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

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                      {/* Honeypot field (hidden from humans) */}
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="hidden"
                      />

                      <Field label="Full Name" required>
                        <input
                          type="text"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          autoComplete="name"
                          placeholder="Jane Smith"
                          aria-invalid={Boolean(touched.fullName && fieldErrors.fullName)}
                          className={`${inputCls} ${touched.fullName && fieldErrors.fullName ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : ''}`}
                        />
                        {touched.fullName && fieldErrors.fullName && <FieldError>{fieldErrors.fullName}</FieldError>}
                      </Field>

                      <Field label="Email Address" required>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          autoComplete="email"
                          placeholder="jane@example.com"
                          aria-invalid={Boolean(touched.email && fieldErrors.email)}
                          className={`${inputCls} ${touched.email && fieldErrors.email ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : ''}`}
                        />
                        {touched.email && fieldErrors.email && <FieldError>{fieldErrors.email}</FieldError>}
                      </Field>

                      <Field label="Mobile Number" required>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          autoComplete="tel"
                          placeholder="+1 (555) 000-0000"
                          aria-invalid={Boolean(touched.phone && fieldErrors.phone)}
                          className={`${inputCls} ${touched.phone && fieldErrors.phone ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : ''}`}
                        />
                        {touched.phone && fieldErrors.phone && <FieldError>{fieldErrors.phone}</FieldError>}
                      </Field>

                      <Field label="LinkedIn / Portfolio URL">
                        <input
                          type="url"
                          name="linkedin"
                          value={form.linkedin}
                          onChange={handleChange}
                          placeholder="https://linkedin.com/in/yourname"
                          className={inputCls}
                        />
                      </Field>

                      <Field label="Cover Letter">
                        <textarea
                          name="coverLetter"
                          value={form.coverLetter}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Tell us why you're excited about this role and what makes you a great fit…"
                          className={`${inputCls} resize-none`}
                        />
                      </Field>

                      {/* Resume upload */}
                      <Field label="Resume / CV" required>
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => fileInputRef.current?.click()}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click(); }}
                          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                          onDragLeave={() => setDragOver(false)}
                          onDrop={handleDrop}
                          className={`relative flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-xl px-4 py-6 cursor-pointer transition-all duration-200 text-center ${
                            dragOver
                              ? 'border-[#1E5AA5] bg-[#EFF6FF]/60'
                              : form.resume
                              ? 'border-[#1E5AA5]/30 bg-[#EFF6FF]/40'
                              : touched.resume && fieldErrors.resume
                              ? 'border-red-300 bg-red-50/40'
                              : 'border-black/10 hover:border-[#1E5AA5]/30 hover:bg-[#F9FAF8]'
                          }`}
                        >
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => handleFile(e.target.files[0])}
                            className="sr-only"
                            required={!form.resume}
                            aria-label="Upload resume"
                          />
                          <Upload
                            className={`w-5 h-5 ${form.resume ? 'text-[#1E5AA5]' : 'text-[#6B6B6B]'}`}
                            strokeWidth={1.5}
                          />
                          {form.resume ? (
                            <>
                              <span className="text-[13px] font-semibold text-[#1B1D1E]">
                                {form.resume.name}
                              </span>
                              <span className="text-[12px] text-[#6B6B6B]">
                                Click to replace
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="text-[13px] font-medium text-[#1B1D1E]/70">
                                Drag & drop or <span className="underline underline-offset-2">browse file</span>
                              </span>
                              <span className="text-[12px] text-[#6B6B6B]">
                                PDF, DOC, DOCX — max 10 MB
                              </span>
                            </>
                          )}
                        </div>
                        {touched.resume && fieldErrors.resume && <FieldError>{fieldErrors.resume}</FieldError>}
                      </Field>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group mt-2 relative flex items-center justify-between bg-gradient-to-r from-[#1E5AA5] to-[#29A8E0] text-white p-1 rounded-full overflow-hidden w-[200px] h-[46px] disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_4px_14px_rgba(30,90,165,0.35)]"
                      >
                        <span className="text-[13px] font-semibold pl-4 pr-1 whitespace-nowrap transition-transform duration-400 ease-out group-hover:translate-x-[32px] group-disabled:translate-x-0">
                          {isSubmitting ? 'Sending Application…' : 'Submit Application'}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white text-[#1E5AA5] flex items-center justify-center shrink-0 transition-transform duration-400 ease-out group-hover:-translate-x-[152px] group-disabled:translate-x-0">
                          <Send className="w-3.5 h-3.5" />
                        </div>
                      </button>

                    </form>
                  </>
                )}
              </div>
            </m.div>

          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
