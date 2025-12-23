"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/siteData";

const FAQ = () => {
  const [activeId, setActiveId] = useState<string | null>(
    FAQ_ITEMS[0]?.id ?? null
  );

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative bg-[#46b9ec]  overflow-hidden"
    >
      <div className="   flex flex-col lg:flex-row items-center gap-16">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative aspect-square   overflow-hidden">
            <img
              src="/images/background/faq-bg.png"
              alt="Person using vending machine"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-[450px]  text-black">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-extrabold mb-3"
          >
            Frequently Ask Questions
          </h2>
          <p className="mb-8 text-black/80">
            Answers to the questions operators ask before they switch to
            VendingCrowd.
          </p>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => {
              const isActive = activeId === item.id;

              return (
                <div key={item.id} className="border-b border-black/20 pb-4">
                  <button
                    type="button"
                    onClick={() => setActiveId(isActive ? null : item.id)}
                    className="w-full flex items-center justify-between text-left gap-4"
                  >
                    <h3 className="text-base md:text-lg font-medium">
                      {item.question}
                    </h3>

                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full transition ${
                        isActive ? "bg-white" : "bg-white/40"
                      }`}
                    >
                      <img
                        src={isActive ? "/icons/mines.svg" : "/icons/plus.svg"}
                        alt={isActive ? "Collapse" : "Expand"}
                        className="w-4 h-4"
                      />
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isActive ? "max-h-40 mt-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm md:text-base text-black/80">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
