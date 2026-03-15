import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight, ChevronDown, Briefcase, Mail } from 'lucide-react';
import { AnimatedHeading, AnimatedText } from '../../../components/ui/AnimatedHeading';
import { CATEGORIES, JOB_TYPES, LOCATIONS } from '../data/jobs';
import Breadcrumb from '../../../components/ui/Breadcrumb';
import { sanityClient } from '../../../lib/sanityClient';
import heroImg from '../../../assets/images/career-hero.svg';

/* ─── Filter Dropdown ──────────────────────────────────────────── */
const FilterDropdown = ({ value, defaultValue, options, open, onToggle, onSelect, onClose }) => {
    const isActive = value !== defaultValue;
    return (
        <>
            {open && <div className="fixed inset-0 z-10" onClick={onClose} aria-hidden="true" />}
            <div className="relative z-20">
                <button
                    type="button"
                    onClick={onToggle}
                    className={`flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
                        isActive
                            ? 'bg-[#1E5AA5] text-white shadow-md shadow-[#1E5AA5]/20'
                            : 'bg-transparent text-[#6B6B6B] border border-black/10 hover:border-black/20 hover:text-[#1B1D1E]'
                    }`}
                >
                    {value}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} strokeWidth={2.5} />
                </button>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -6, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-2 bg-white border border-black/8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.11)] py-1.5 min-w-[170px] overflow-hidden"
                        >
                            {options.map((option) => (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => {
                                        onSelect(option);
                                        onClose();
                                    }}
                                    className={`w-full text-left px-4 py-2.5 text-[13px] transition-colors duration-150 hover:bg-[#EFF6FF] flex items-center justify-between gap-3 ${
                                        value === option ? 'text-[#1E5AA5] font-semibold' : 'text-[#6B6B6B]'
                                    }`}
                                >
                                    {option}
                                    {value === option && <span className="w-1.5 h-1.5 rounded-full bg-[#1E5AA5] shrink-0" />}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

/* ─── Empty State ──────────────────────────────────────────────── */
const EmptyState = ({ hasFilters, onClear }) => (
    <motion.div
        key="empty"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.5 }}
        className="py-24 flex flex-col items-center text-center"
    >
        {/* Icon */}
        <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-20 h-20 rounded-3xl bg-[#EFF6FF] border border-[#1E5AA5]/10 flex items-center justify-center mb-7 shadow-[0_4px_16px_rgba(30,90,165,0.06)]"
        >
            <Briefcase className="w-8 h-8 text-[#1B1D1E]/25" strokeWidth={1.5} />
        </motion.div>

        {/* Heading */}
        <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl font-serif text-[#1B1D1E] mb-3 font-light"
        >
            {hasFilters ? 'No matching positions' : 'No open positions right now'}
        </motion.h3>

        {/* Description */}
        <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[15px] text-[#6B6B6B] font-light max-w-[360px] leading-relaxed mb-8"
        >
            {hasFilters
                ? "We don't have any roles matching your current filters. Try broadening your search or check back soon."
                : "We're not actively hiring right now, but we're always open to exceptional talent. Reach out and introduce yourself."}
        </motion.p>

        {/* Actions */}
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center gap-4"
        >
            {hasFilters && (
                <button
                    type="button"
                    onClick={onClear}
                    className="px-6 py-2.5 rounded-full text-[13px] font-medium bg-[#1E5AA5] text-white hover:bg-[#0B1F3B] transition-colors duration-300"
                >
                    Clear all filters
                </button>
            )}
            <a
                href="mailto:info@seanoraglobal.com"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-medium border border-black/10 text-[#1B1D1E] hover:border-black/25 transition-colors duration-300"
            >
                <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                Send us your resume
            </a>
        </motion.div>

        {/* Footnote */}
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-[12px] text-[#6B6B6B]/60 mt-8"
        >
            New roles are posted regularly — check back soon.
        </motion.p>
    </motion.div>
);

/* ═══════════════════════════════════════════════════════════════ */
const CareersBoard = () => {
    const [activeCategory, setActiveCategory] = useState('View all');
    const [activeType, setActiveType] = useState('All Types');
    const [activeLocation, setActiveLocation] = useState('All Locations');
    const [typeOpen, setTypeOpen] = useState(false);
    const [locationOpen, setLocationOpen] = useState(false);

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const query = `*[_type == "jobs" && isActive == true] | order(_createdAt desc) {
          _id,
          title,
          department,
          type,
          location,
          experience,
          salary,
          description
        }`;
                const data = await sanityClient.fetch(query);
                setJobs(data.map((job) => ({ ...job, id: job._id })));
            } catch (err) {
                console.error('Failed to fetch jobs:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    const filteredJobs = jobs.filter((job) => {
        const matchCategory = activeCategory === 'View all' || job.department === activeCategory;
        const matchType = activeType === 'All Types' || job.type === activeType;
        const matchLocation = activeLocation === 'All Locations' || job.location.toLowerCase().includes(activeLocation.toLowerCase());
        return matchCategory && matchType && matchLocation;
    });

    const hasActiveFilters = activeCategory !== 'View all' || activeType !== 'All Types' || activeLocation !== 'All Locations';

    const clearFilters = () => {
        setActiveCategory('View all');
        setActiveType('All Types');
        setActiveLocation('All Locations');
    };

    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white min-h-screen relative overflow-hidden">


            <div className="container mx-auto px-4 lg:px-12 max-w-5xl relative z-10">
                <Breadcrumb crumbs={[{ label: 'Careers' }]} />

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16"
                >
                    {/* Left: text */}
                    <div className="flex-1">
                        <span className="text-xs font-sans tracking-[0.2em] text-[#6B6B6B] font-medium uppercase mb-6 block">
                            Join Our Team
                        </span>
                        <AnimatedHeading
                            as="h1"
                            className="text-[3rem] md:text-[5rem] font-medium text-[#111827] mb-8 leading-tight tracking-tight"
                        >
                            <AnimatedText text="Be part of our " />
                            <AnimatedText text="mission" className="text-[#1B1D1E]/80" />
                        </AnimatedHeading>
                        <p className="text-lg md:text-xl text-[#6B6B6B] font-light leading-relaxed max-w-lg">
                            We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and
                            full ownership and responsibility.
                        </p>
                    </div>

                    {/* Right: illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 flex justify-center lg:justify-end"
                    >
                        <img
                            src={heroImg}
                            alt="Careers at Seanora Global"
                            className="w-full max-w-[380px] lg:max-w-[420px] object-contain"
                        />
                    </motion.div>
                </motion.div>

                {/* ── Filters ────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-3 mb-6"
                >
                    {/* Category pills */}
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            type="button"
                            className={`px-6 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
                                activeCategory === category
                                    ? 'bg-[#1E5AA5] text-white shadow-md shadow-[#1E5AA5]/20'
                                    : 'bg-transparent text-[#6B6B6B] border border-black/10 hover:border-black/20 hover:text-[#1B1D1E]'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Job Type + Location dropdowns */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.18 }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    <FilterDropdown
                        value={activeType}
                        defaultValue="All Types"
                        options={JOB_TYPES}
                        open={typeOpen}
                        onToggle={() => {
                            setTypeOpen((p) => !p);
                            setLocationOpen(false);
                        }}
                        onSelect={setActiveType}
                        onClose={() => setTypeOpen(false)}
                    />
                    <FilterDropdown
                        value={activeLocation}
                        defaultValue="All Locations"
                        options={LOCATIONS}
                        open={locationOpen}
                        onToggle={() => {
                            setLocationOpen((p) => !p);
                            setTypeOpen(false);
                        }}
                        onSelect={setActiveLocation}
                        onClose={() => setLocationOpen(false)}
                    />

                    {/* Clear pill — only when filters are active */}
                    <AnimatePresence>
                        {hasActiveFilters && (
                            <motion.button
                                key="clear"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                type="button"
                                onClick={clearFilters}
                                className="px-5 py-2 rounded-full text-[13px] font-medium text-[#6B6B6B] border border-black/10 hover:border-black/20 hover:text-[#1B1D1E] transition-all duration-300"
                            >
                                Clear all
                            </motion.button>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Divider */}
                <div className="w-full h-px bg-black/5 mb-4" />

                {/* Results count */}
                <AnimatePresence mode="wait">
                    {filteredJobs.length > 0 && (
                        <motion.p
                            key={filteredJobs.length}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-[12px] text-[#6B6B6B]/60 uppercase tracking-[0.15em] font-medium mb-2 px-1"
                        >
                            {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'} found
                        </motion.p>
                    )}
                </AnimatePresence>

                {/* ── Job List / Empty State ─────────────────────────────── */}
                <div className="flex flex-col">
                    <AnimatePresence mode="popLayout">
                        {loading ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="py-24 flex justify-center items-center"
                            >
                                <div className="w-8 h-8 rounded-full border-2 border-black/10 border-t-[#1E5AA5] animate-spin"></div>
                            </motion.div>
                        ) : error ? (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="py-24 text-center text-red-500 font-medium"
                            >
                                Failed to load positions: {error}
                            </motion.div>
                        ) : filteredJobs.length > 0 ? (
                            filteredJobs.map((job) => (
                                <motion.div
                                    key={job.id}
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="group block py-4 relative px-6 -mx-6 rounded-[24px]"
                                >
                                    <div className="group bg-white border border-black/8 hover:border-[#1E5AA5]/20 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(30,90,165,0.08)] relative overflow-hidden">
                                        {/* Bottom hover accent */}
                                        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#EFF6FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-b-2xl" />
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                                    <span className="text-[11px] uppercase tracking-[0.12em] font-semibold text-white bg-[#1E5AA5] px-3 py-1 rounded-full">
                                                        {job.department}
                                                    </span>
                                                    {job.salary && (
                                                        <span className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[#6B6B6B] bg-black/5 px-3 py-1 rounded-full">
                                                            {job.salary}
                                                        </span>
                                                    )}
                                                </div>

                                                <h3 className="text-[1.75rem] font-medium text-[#111827] mb-3 group-hover:text-[#111827]/80 transition-colors duration-300">
                                                    {job.title}
                                                </h3>

                                                <p className="text-[#6B6B6B] mb-5 text-[15px] font-light leading-relaxed max-w-xl">
                                                    {job.description}
                                                </p>

                                                <div className="flex flex-wrap items-center gap-4">
                                                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] font-semibold text-[#6B6B6B]">
                                                        <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                                                        {job.location}
                                                    </div>
                                                    <div className="w-1 h-1 rounded-full bg-black/15" />
                                                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] font-semibold text-[#6B6B6B]">
                                                        <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                                                        {job.type}
                                                    </div>
                                                    {job.experience && (
                                                        <>
                                                            <div className="w-1 h-1 rounded-full bg-black/15" />
                                                            <div className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[#6B6B6B]">
                                                                {job.experience} exp.
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            <Link
                                                to={`/careers/${job.id}`}
                                                className="group/btn relative flex items-center justify-between bg-gradient-to-r from-[#1E5AA5] to-[#29A8E0] text-white p-1 rounded-full overflow-hidden shrink-0 w-[172px] mt-4 md:mt-0 shadow-[0_4px_14px_rgba(30,90,165,0.35)]"
                                                aria-label={`View details for ${job.title}`}
                                            >
                                                <span className="text-[14px] font-semibold pl-4 pr-2 whitespace-nowrap transition-transform duration-[400ms] ease-out group-hover/btn:translate-x-[36px]">
                                                    More Details
                                                </span>
                                                <div className="w-9 h-9 rounded-full bg-white text-[#1E5AA5] flex items-center justify-center shrink-0 transition-transform duration-[400ms] ease-out group-hover/btn:-translate-x-[128px]">
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <EmptyState hasFilters={hasActiveFilters} onClear={clearFilters} />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default CareersBoard;