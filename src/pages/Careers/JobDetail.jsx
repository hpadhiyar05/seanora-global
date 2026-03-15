import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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

}, [id, sanityClient]);

  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    coverLetter: '',
    resume: null,
  });
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

  /* ── form handlers ── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (file) => {
    if (!file) return;
    setForm((prev) => ({ ...prev, resume: file }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

    console.log('--- Job Application Submission Started ---');
    console.log('FormData being sent (Note: Files cannot be stringified):');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      console.log('Executing fetch request to http://localhost:8000/send-mail.php...');
      const response = await fetch('http://localhost:8000/send-mail.php', {
        method: 'POST',
        // Note: Do NOT set 'Content-Type' manually when sending FormData.
        // The browser automatically sets it to 'multipart/form-data' along with the boundary.
        body: formData,
      });

      console.log('Raw response received:', response);
      
      const data = await response.json();

      if (data.success === true) {
        console.log('Submission successful. Rendering success view.');
        setSubmitted(true);
      } else {
        console.warn('Submission failed with success=false. Error from API:', data.message);
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
        setSubmitted(false);
      }
    } catch (error) {
      console.error('--- Job Application Submission Error Caught ---');
      console.error('Error details:', error);
      setErrorMsg('Failed to connect to the server. Please check your connection and try again.');
      setSubmitted(false);
    } finally {
      console.log('--- Job Application Submission Completed ---');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title={`${job.title} | Careers at Seanora Global`}
        description={job.description}
        path={`/careers/${job.id}`}
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
          <motion.div
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
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 xl:gap-16 items-start">

            {/* ── LEFT: Job Details ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* About */}
              <DetailSection title="About the Role">
                <p className="text-[16px] text-[#4A4A4A] leading-relaxed font-light">
                  {job.about}
                </p>
              </DetailSection>

              {/* Responsibilities */}
              <DetailSection title="Key Responsibilities">
                <ul className="list-none p-0 m-0">
                  {job.responsibilities.map((item, i) => (
                    <BulletItem key={i} text={item} accent />
                  ))}
                </ul>
              </DetailSection>

              {/* Requirements */}
              <DetailSection title="Requirements">
                <ul className="list-none p-0 m-0">
                  {job.requirements.map((item, i) => (
                    <BulletItem key={i} text={item} />
                  ))}
                </ul>
              </DetailSection>

              {/* Nice to have */}
              {job.niceToHave?.length > 0 && (
                <DetailSection title="Nice to Have">
                  <ul className="list-none p-0 m-0">
                    {job.niceToHave.map((item, i) => (
                      <BulletItem key={i} text={item} />
                    ))}
                  </ul>
                </DetailSection>
              )}

              {/* Benefits */}
              {job.benefits?.length > 0 && (
                <DetailSection title="What We Offer">
                  <ul className="list-none p-0 m-0">
                    {job.benefits.map((item, i) => (
                      <BulletItem key={i} text={item} accent />
                    ))}
                  </ul>
                </DetailSection>
              )}
            </motion.div>

            {/* ── RIGHT: Application Form ── */}
            <motion.div
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

                      <Field label="Full Name" required>
                        <input
                          type="text"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                          placeholder="Jane Smith"
                          className={inputCls}
                        />
                      </Field>

                      <Field label="Email Address" required>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          placeholder="jane@example.com"
                          className={inputCls}
                        />
                      </Field>

                      <Field label="Phone Number">
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                          placeholder="+1 (555) 000-0000"
                          className={inputCls}
                        />
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
                      </Field>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group mt-2 relative flex items-center justify-between bg-gradient-to-r from-[#1E5AA5] to-[#29A8E0] text-white p-1 rounded-full overflow-hidden w-full disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_4px_14px_rgba(30,90,165,0.35)]"
                      >
                        <span className="text-[14px] font-semibold pl-5 pr-2 whitespace-nowrap transition-transform duration-[400ms] ease-out group-hover:translate-x-[36px] group-disabled:translate-x-0">
                          {isSubmitting ? 'Sending Application…' : 'Submit Application'}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-white text-[#1E5AA5] flex items-center justify-center shrink-0 transition-transform duration-[400ms] ease-out group-hover:-translate-x-[500px] group-disabled:translate-x-0">
                          <Send className="w-4 h-4" />
                        </div>
                      </button>

                    </form>
                  </>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
