import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`rounded-xl border overflow-hidden transition-colors duration-300 ${
        isOpen
          ? 'border-[#413DF2] bg-white'
          : 'border-black/10 bg-white hover:border-black/20'
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none"
      >
        <span className={`text-base font-medium leading-snug transition-colors duration-300 ${
          isOpen ? 'text-[#413DF2]' : 'text-[#1B1D1E]'
        }`}>
          {question}
        </span>

        {/* + / × icon — matches the screenshot exactly */}
        <span
          className={`shrink-0 mt-0.5 text-[18px] leading-none select-none transition-colors duration-300 ${
            isOpen ? 'text-[#413DF2]' : 'text-[#1E5AA5]'
          }`}
          aria-hidden="true"
        >
          {isOpen ? '×' : '+'}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="px-5 pb-4 text-sm text-[#6B6B6B] leading-relaxed font-normal pr-10">
              {answer}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = ({ items, allowMultiple = false, className = 'w-full flex flex-col gap-3' }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleItemClick = (index) => {
    if (allowMultiple) {
      setOpenIndexes(
        openIndexes.includes(index)
          ? openIndexes.filter((i) => i !== index)
          : [...openIndexes, index]
      );
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
