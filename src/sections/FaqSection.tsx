"use client";
import { useMemo, useState } from "react";
import { Category, FaqItem } from "@/types/faq";
import { faqData } from "@/data/faq";

const categories: Category[] = ["Allt", "Policy", "Allmänt", "Övrigt"];

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("Allt");
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  // just for performance, so we don't filter on every render
  const filtered = useMemo(() => {
    return activeCategory === "Allt"
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const selectedItem = filtered.find(
    (item) => item.question === selectedQuestion,
  );

  const handleSelectCategory = (category: Category) => {
    setActiveCategory(category);
    setSelectedQuestion(null);
  };

  const handleQuestionClick = (item: FaqItem) => {
    setSelectedQuestion((prev) =>
      prev === item.question ? null : item.question,
    );
  };

  return (
    <div className="min-h-screen w-full bg-[#003660]">
      <div className="border-image-top">
        <img src="/img/card-border-top.svg" alt="FAQ top" className="w-full" />
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

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleSelectCategory(cat)}
              className={`min-w-32.5 sm:min-w-40 px-4 h-12.5 rounded-2xl text-white text-sm font-semibold cursor-pointer transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#395374] shadow-lg"
                  : "bg-[#001f3f] hover:bg-[#17395f]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="max-w-4xl mx-auto h-px bg-white/15 mb-4" />

        <p className="text-center text-white/40 text-sm mb-6 tracking-wide">
          {activeCategory}
        </p>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-rows-8 lg:grid-rows-5 gap-0 sm:divide-x divide-gray-200">
          {filtered.map((item, index) => {
            const isActive = item.question === selectedQuestion;
            // const renderDivider = index % 5 === 0 && index !== 0;

            return (
              <div key={index} className="grid-item sm:px-5 py-2">
                <button
                  key={item.question}
                  onClick={() => handleQuestionClick(item)}
                  className={`w-full min-h-15 rounded-2xl px-4 py-3 text-sm font-semibold text-white text-center transition-all duration-200 shadow-md ${
                    isActive
                      ? "bg-[#5591C4]"
                      : "bg-[#395374] hover:brightness-110"
                  }`}
                >
                  {item.question}
                </button>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          {selectedItem && (
            <div className="rounded-3xl bg- border border-white/10 p-5 sm:p-6 text-white shadow-xl backdrop-blur-sm">
              <p className="text-lg sm:text-xl font-semibold mb-3">
                {selectedItem.question}
              </p>

              <p className="text-sm sm:text-base leading-7 text-white/80">
                {selectedItem.answer}
              </p>
            </div>
          )}
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
          src="/img/card-border-bottom.svg"
          alt="FAQ bottom"
          className="w-full"
        />
      </div>
    </div>
  );
}
