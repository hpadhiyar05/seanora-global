import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border-b border-[var(--color-border)] overflow-hidden bg-transparent transition-colors duration-500 h-fit group ${isOpen ? 'border-[var(--color-text-subtle)]' : ''}`}>
      <button
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className={`text-lg font-serif transition-colors duration-500 ${isOpen ? 'text-[var(--color-text)]' : 'text-[var(--color-text)] group-hover:text-[var(--color-text-muted)]'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 border border-[var(--color-border)] ${isOpen ? 'bg-[var(--color-text)] text-white border-[var(--color-text)]' : 'bg-transparent text-[var(--color-text)] group-hover:border-[var(--color-text-subtle)]'}`}>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="pb-8 pt-0 text-[var(--color-text-muted)] leading-relaxed font-light">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = ({ items, allowMultiple = false, className = "w-full flex flex-col gap-4" }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleItemClick = (index) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className={className}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndexes.includes(index)}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
