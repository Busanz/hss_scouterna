import { ArrowDownSvg } from '@/assets/svg';
import { FaqItem } from '@/types/faq';
import { useState } from 'react';

const Question = ({ question, answer }: FaqItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex relative z-10 items-center w-full 
                    min-h-15 px-4 py-2 text-lg font-light
                    text-text-primary text-center transition-all 
                    duration-200 shadow-md cursor-pointer ${
                      isOpen
                        ? 'bg-[#5591C4] rounded-t-sm'
                        : 'bg-[#395374] hover:brightness-110 rounded-sm'
                    }`}
      >
        <span className="flex-1 text-left min-h-14">{question}</span>
        <div
          className={`flex justify-center items-center w-10 h-10 mx-auto text-text-secondary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <ArrowDownSvg />
        </div>
      </button>

      {isOpen && (
        <div className=" bg-border border-text-secondary border -mt-2 p-5 sm:p-6 text-text-secondary shadow-xl backdrop-blur-sm rounded-b-sm">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Question;
