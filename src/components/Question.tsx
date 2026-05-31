import { ArrowDownSvg } from "@/assets/svg";
import { FaqItem } from "@/types/faq";
import { useState } from "react";

const Question = ({ question, answer }: FaqItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex relative z-10 items-center w-full 
                    min-h-15 px-4 py-2 text-sm font-semibold
                    text-white cursor-pointer ${
                      isOpen
                        ? "bg-[#5591C4] rounded-t-2xl"
                        : "bg-[#395374] hover:brightness-110 rounded-2xl"
                    }`}
      >
        <span className="flex-1">{question}</span>
        <div
          className={`w-10 h-10 mt-2 mx-auto text-white transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <ArrowDownSvg />
        </div>
      </button>

      {isOpen && (
        <div className=" bg-border border-[#5591c4] border-2 -mt-2 p-5 sm:p-6 text-white shadow-xl backdrop-blur-sm rounded-b-2xl">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Question;
