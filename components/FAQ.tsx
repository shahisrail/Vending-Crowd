"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/siteData";

const FAQ = () => {
  const [activeId, setActiveId] = useState<string | null>(
    FAQ_ITEMS[0]?.id ?? null
  );

  return (
    <section className="relative w-full overflow-hidden">
      {/* Pink top strip */}
      <div className="h-12 sm:h-16 bg-[#f86aa9] w-full" />

      {/* Blue body */}
      <div className="relative bg-[#46b9ec] flex flex-col lg:flex-row">
        {/* Left curved image */}
        <div className="relative w-full h-[260px] sm:h-[340px] hidden sm:block lg:w-[680px] lg:h-auto">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/background/faq-bg.png"
              alt="Person using vending machine"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 px-5 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-20 text-black flex flex-col">
          <div className="max-w-2xl w-full flex flex-col h-full mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">
              Frequently Ask Questions
            </h2>
            <p className="mb-6 sm:mb-10 text-black/80 text-sm sm:text-base">
              Answers to the questions operators ask before they switch to
              VendingCrowd.
            </p>

            {/* FAQ list scroll area */}
            <div className="flex-1 overflow-y-auto pr-2 sm:pr-4 space-y-5 sm:space-y-6">
              {FAQ_ITEMS.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <div
                    key={item.id}
                    className="border-b border-black/30 pb-4 sm:pb-6"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveId(isActive ? null : item.id)
                      }
                      className="w-full flex items-center justify-between text-left gap-4 sm:gap-6"
                    >
                      <h3 className="text-base sm:text-lg font-semibold">
                        {item.question}
                      </h3>

                      <span
                        className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full transition ${
                          isActive ? "bg-white" : "bg-white/40"
                        }`}
                      >
                        <img
                          src={
                            isActive
                              ? "/icons/mines.svg"
                              : "/icons/plus.svg"
                          }
                          alt={isActive ? "Collapse" : "Expand"}
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        />
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isActive
                          ? "grid-rows-[1fr] mt-3 sm:mt-4"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* end scroll */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
