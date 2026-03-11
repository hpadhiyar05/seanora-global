import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Address',
      detail: '30 N Gould St Ste R Sheridan, WY 82801',
    },
    {
      icon: Mail,
      title: 'Our Mailbox',
      detail: 'info@alenotechsolutions.com',
    },
    {
      icon: Phone,
      title: 'Our Phone',
      detail: '+1 201 733 1688',
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-4 lg:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
          
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <span className="text-xs font-sans tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-6 block">
              Contact Us
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-[var(--color-text)] font-light leading-tight mb-8">
              Get in <span className="italic text-[var(--color-text-muted)]">touch</span>
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] font-light leading-relaxed mb-12">
              Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
            </p>

            <div className="space-y-10">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-white text-[var(--color-text)] flex items-center justify-center border border-[var(--color-border)] group-hover:border-[var(--color-text-subtle)] transition-colors duration-500 mt-1 flex-shrink-0">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div className="ml-6 flex flex-col justify-center min-h-[52px]">
                      <h4 className="text-lg font-serif text-[var(--color-text)] mb-1">
                        {info.title}
                      </h4>
                      <p className="text-[var(--color-text-muted)] font-light">
                        {info.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-[var(--color-surface)] p-8 md:p-12 lg:p-14 rounded-2xl border border-[var(--color-border)] relative z-20">
              <h3 className="text-3xl font-serif text-[var(--color-text)] mb-8 font-light">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-0 py-3 border-b border-[var(--color-border)] bg-transparent focus:outline-none focus:border-[var(--color-text)] transition-colors duration-300 font-light placeholder:text-[var(--color-border)]/60"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-0 py-3 border-b border-[var(--color-border)] bg-transparent focus:outline-none focus:border-[var(--color-text)] transition-colors duration-300 font-light placeholder:text-[var(--color-border)]/60"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    rows="5"
                    className="w-full px-0 py-3 border-b border-[var(--color-border)] bg-transparent focus:outline-none focus:border-[var(--color-text)] transition-colors duration-300 resize-none font-light placeholder:text-[var(--color-border)]/60"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto pl-8 pr-2 py-2 bg-[var(--color-text)] text-white hover:bg-[var(--color-text-muted)] transition-all duration-500 rounded-full flex items-center justify-between disabled:opacity-70 disabled:cursor-not-allowed group border border-transparent shadow-md"
                >
                  {isSubmitting ? (
                    <span className="flex items-center pr-6">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span className="font-semibold text-sm tracking-wide mr-6">Send Message</span>
                      <span className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-black flex items-center justify-center shadow-inner overflow-hidden relative">
                        {/* Visible icon that slides out */}
                        <Send className="w-5 h-5 ml-1 absolute transition-transform duration-500 group-hover:translate-x-8 group-hover:-translate-y-8" strokeWidth={2} />
                        
                        {/* Hidden icon that slides in */}
                        <Send className="w-5 h-5 ml-1 absolute -translate-x-8 translate-y-8 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" strokeWidth={2} />
                      </span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
