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
      [clip-path:path('M0_0H65%C85%_0_100%_20%_100%_50%V100%H0Z')]
    "
          />

          {/* Image */}
          <img
            src="/images/background/faq-bg.png"
            alt="Person using vending machine"
            className="relative z-10 w-full h-[260px] sm:h-[340px] lg:h-full object-cover
      [clip-path:path('M0_0H65%C85%_0_100%_20%_100%_50%V100%H0Z')]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 px-5 sm:px-10 lg:px-20 py-6 sm:py-8 text-black flex flex-col justify-center">
          <div className="max-w-4xl w-full flex flex-col mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2">
              Frequently Ask Questions
            </h2>

            <p className="mb-4 text-black/80 text-sm sm:text-base">
              Answers to the questions operators ask before they switch to
              VendingCrowd.
            </p>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <div key={item.id} className="border-b border-black/30 pb-4">
                    <button
                      onClick={() => setActiveId(isActive ? null : item.id)}
                      className="w-full flex justify-between items-center text-left"
                    >
                      <h3 className="text-base sm:text-lg font-semibold">
                        {item.question}
                      </h3>

                      <span
                        className={`w-8 h-8 flex items-center justify-center rounded-full ${
                          isActive ? "bg-white" : "bg-white/40"
                        }`}
                      >
                        <img
                          src={
                            isActive ? "/icons/mines.svg" : "/icons/plus.svg"
                          }
                          className="w-3.5 h-3.5"
                        />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isActive ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-black/80 text-sm">{item.answer}</p>
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
