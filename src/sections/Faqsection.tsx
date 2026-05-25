"use client";
import { useMemo, useState } from "react";
import { Category, FaqItem } from "@/types/faq";
import { faqData } from "@/data/faq";
import Question from "@/components/Question";

const categories: Category[] = ["Allt", "Policy", "Allmänt", "Övrigt"];

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("Allt");
  const [questions, setQuestions] = useState<FaqItem[]>(faqData);

  const divideInto3Cols = (arr: FaqItem[]) => {
    const size = Math.ceil(arr.length / 3);
    return [arr.slice(0, size), arr.slice(size, size * 2), arr.slice(size * 2)];
  };

  const columns = useMemo(() => {
    return divideInto3Cols(questions);
  }, [questions]);

  const handleSelectCategory = (category: Category) => {
    setActiveCategory(category);
    setQuestions(
      category === "Allt"
        ? faqData
        : faqData.filter((item) => item.category === category),
    );
  };

  return (
    <div className="min-h-screen w-full mt-10 bg-primary">
      <div className="border-image-top">
        <img
          src="/img/faq/card-border-top.svg"
          alt="FAQ top"
          className="w-full"
        />
      </div>
      <div className="w-full min-h-screen px-4 py-8 sm:px-6 lg:px-8 ">
        <div className="text-center mt-6 sm:mt-8 mb-8">
          <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-widest mb-3">
            FAQ
          </h1>

          <p className="font-semibold text-lg sm:text-2xl text-[#76CFF4]">
            Här har vi samlat de mest ställda frågorna
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleSelectCategory(category)}
              className={`min-w-32.5 sm:min-w-40 px-4 h-12.5 rounded-2xl text-white text-sm font-semibold cursor-pointer transition-all duration-200 ${
                activeCategory === category
                  ? "bg-[#395374] shadow-lg rounded-xl"
                  : "bg-[#001f3f] hover:bg-[#17395f]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto h-px bg-[#76CFF4] mb-4" />

        <p className="text-center text-white text-[25px] mb-6 tracking-wide">
          {activeCategory}
        </p>

        <div className="min-h-full p-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:divide-x md:divide-[#76CFF4]">
            {columns.map((colItems, colIndex) => (
              <div
                key={colIndex}
                className="flex-1 flex flex-col py-6 md:py-0 px-0 md:px-6 first:md:pl-0 last:md:pr-0 border-b border-[#76CFF4] md:border-b-0 last:border-b-0"
              >
                {colItems.map((question, qIndex) => (
                  <Question
                    key={qIndex}
                    question={question.question}
                    answer={question.answer}
                    category={question.category}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-white text-sm">
            Behöver du svar på något annat?{" "}
            <a
              href="#"
              className="font-semibold underline underline-offset-2 text-white hover:text-white transition-colors duration-200"
            >
              Kontakta oss
            </a>
          </p>
        </div>
      </div>
      <div className="border-image-bottom">
        <img
          src="/img/faq/card-border-bottom.svg"
          alt="FAQ bottom"
          className="w-full"
        />
      </div>
    </div>
  );
}
