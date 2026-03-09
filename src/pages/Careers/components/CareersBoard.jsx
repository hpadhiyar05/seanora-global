import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';

// Mock data anticipating an API response
const MOCK_JOBS = [
  {
    id: 1,
    title: "Product Designer",
    description: "We're looking for a mid-level product designer to join our team.",
    type: "Full-time",
    location: "100% remote",
    department: "Design",
    applyLink: "#"
  },
  {
    id: 2,
    title: "Engineering Manager",
    description: "We're looking for an experienced engineering manager to join our team.",
    type: "Full-time",
    location: "100% remote",
    department: "Development",
    applyLink: "#"
  },
  {
    id: 3,
    title: "Customer Success Manager",
    description: "We're looking for a customer success manager to join our team.",
    type: "Full-time",
    location: "100% remote",
    department: "Customer Service",
    applyLink: "#"
  }
];

const CATEGORIES = [
  "View all", 
  "Development", 
  "Design", 
  "Marketing", 
  "Customer Service", 
  "Operations", 
  "Finance", 
  "Management"
];

const CareersBoard = () => {
  const [activeCategory, setActiveCategory] = useState("View all");

  // Filter jobs based on selected category
  const filteredJobs = activeCategory === "View all" 
    ? MOCK_JOBS 
    : MOCK_JOBS.filter(job => job.department === activeCategory);

  return (
    <section className="pt-32 pb-24 bg-[var(--color-bg)] min-h-screen relative overflow-hidden">
      
      <div className="container mx-auto px-4 lg:px-12 max-w-5xl relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-sans tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-6 block">
            Join Our Team
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[var(--color-text)] mb-8 font-light leading-tight">
            Be part of our <span className="italic text-[var(--color-text-muted)]">mission</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto font-light leading-relaxed">
            We're looking for passionate people to join us on our mission. We value 
            flat hierarchies, clear communication, and full ownership and responsibility.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 border border-[var(--color-border)] ${
                activeCategory === category
                  ? "bg-[var(--color-text)] text-[var(--color-bg)] border-[var(--color-text)] shadow-md"
                  : "bg-white text-[var(--color-text-muted)] hover:border-[var(--color-text-subtle)] hover:text-[var(--color-text)]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Top Divider */}
        <div className="w-full h-[1px] bg-[var(--color-border)] mb-4"></div>

        {/* Job List */}
        <div className="flex flex-col">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="group block border-b border-[var(--color-border)] last:border-b-0 py-10 relative hover:bg-white/50 transition-colors duration-500 px-4 -mx-4 rounded-2xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div>
                      <h3 className="text-2xl font-serif text-[var(--color-text)] mb-4 group-hover:text-[var(--color-text-muted)] transition-colors duration-300">
                        {job.title}
                      </h3>
                      <p className="text-[var(--color-text-muted)] mb-6 text-base font-light">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">
                          <MapPin className="w-4 h-4" strokeWidth={1.5} />
                          {job.location}
                        </div>
                        <div className="w-1 h-1 rounded-full bg-[var(--color-border)]"></div>
                        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">
                          <Clock className="w-4 h-4" strokeWidth={1.5} />
                          {job.type}
                        </div>
                      </div>
                    </div>

                    <a 
                      href={job.applyLink}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[var(--color-border)] text-[var(--color-text)] group-hover:bg-[var(--color-text)] group-hover:text-white group-hover:border-[var(--color-text)] transition-all duration-500 mt-2 md:mt-0 shadow-sm"
                      aria-label={`Apply for ${job.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={1.5} />
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-16 text-center text-[var(--color-text-muted)] font-light"
              >
                No open positions found in this department. Check back later!
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default CareersBoard;
