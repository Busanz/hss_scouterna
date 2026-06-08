'use client';

import { ArrowDownSvg } from '@/assets/svg';
import { FaqItemType } from '@/types/types';
import { AnimatePresence, motion } from 'motion/react';

type QuectionProps = FaqItemType & { isOpen: boolean; onToggle: () => void };

const Question = ({
  isOpen = false,
  onToggle,
  question,
  answer,
}: QuectionProps) => {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className={`flex relative z-10 items-center w-full 
                    min-h-15 px-4 py-2 text-lg font-normal cursor-pointer ${
                      isOpen
                        ? 'bg-[#5591C4] text-text-primary transition duration-450 rounded-t-sm'
                        : 'bg-background text-text-secondary hover:brightness-110 rounded-sm'
                    }`}
      >
        <span className="flex-1 text-start inline-block pl-4">{question}</span>
        <div
          className={`w-10 h-10 mt-2 mx-auto text-white transition-transform duration-400 ${isOpen ? 'rotate-180' : ''}`}
        >
          <ArrowDownSvg />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-lg border-[#5591c4] border -mt-1 p-5 sm:p-6 text-text-secondary bg-background backdrop-blur-sm rounded-b-sm"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Question;
