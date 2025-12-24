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
        {/* LEFT IMAGE */}
        <div className="relative hidden sm:block lg:w-[680px] overflow-hidden">
          {/* White curved overlay */}
          <div
            className="
              absolute inset-0 bg-white
              [clip-path:path('M0_0H76%Q100%_0_100%_28%V100%H0Z')]
            "
          />

          {/* Image */}
          <img
            src="/images/background/faq-bg.png"
            alt="Person using vending machine"
            className="relative z-10 w-full h-[260px] sm:h-[340px] lg:h-full object-cover
              [clip-path:path('M0_0H76%Q100%_0_100%_28%V100%H0Z')]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 px-5 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-20 text-black flex flex-col">
          <div className="max-w-4xl w-full flex flex-col h-full mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
              Frequently Ask Questions
            </h2>
            <p className="mb-6 sm:mb-10 text-black/80 text-sm sm:text-base">
              Answers to the questions operators ask before they switch to
              VendingCrowd.
            </p>

            <div className="flex-1 overflow-y-auto pr-4 space-y-6">
              {FAQ_ITEMS.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <div key={item.id} className="border-b border-black/30 pb-6">
                    <button
                      onClick={() => setActiveId(isActive ? null : item.id)}
                      className="w-full flex justify-between items-center text-left"
                    >
                      <h3 className="text-lg font-semibold">{item.question}</h3>

                      <span
                        className={`w-9 h-9 flex items-center justify-center rounded-full ${
                          isActive ? "bg-white" : "bg-white/40"
                        }`}
                      >
                        <img
                          src={
                            isActive ? "/icons/mines.svg" : "/icons/plus.svg"
                          }
                          className="w-4 h-4"
                        />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isActive ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-black/80">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
