"use client";

import Image from "next/image";
import { HOW_IT_WORKS_STEPS } from "@/lib/siteData";
import { useRef, useState } from "react";

export default function HowItWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const scrollEl = scrollRef.current;
    const stepsEl = stepsRef.current;
    if (!scrollEl || !stepsEl) return;

    const scrollTop = scrollEl.scrollTop;
    const viewportHeight = scrollEl.clientHeight;
    const stepsHeight = stepsEl.scrollHeight;

    const maxScroll = stepsHeight - viewportHeight;
    const percent = (scrollTop / maxScroll) * 100;

    setProgress(Math.min(100, Math.max(0, percent)));
  };

  return (
    <section className="bg-[#FFC425] h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col px-6 py-16">
        {/* HEADER */}
        <div className="pb-10 shrink-0 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="max-w-3xl mx-auto text-black/80">
            VendingCrowd&apos;s order request system is completely self-managed
            and allows operators to dispatch workers to restock, fix, or collect
            cash deposits.
          </p>
        </div>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="relative flex-1 overflow-y-auto
          [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        >
          {/* STEPS WRAPPER */}
          <div ref={stepsRef} className="relative py-24 space-y-40">
            {/* CENTER LINE */}
            <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full">
              <div
                className="
    relative h-full
    w-[8px]        /* mobile */
    sm:w-[10px]   /* small */
    md:w-[14px]   /* desktop */
  "
              >
                {/* BACK LINE */}
                <div className="absolute inset-0 bg-[#FFD966] rounded-full" />

                {/* FILL (ENDS FLAT) */}
                <div
                  className="
        absolute top-0 left-0 w-full
        bg-gradient-to-b from-pink-500 to-pink-400
        rounded-t-full
        transition-[height] duration-300 ease-out
      "
                  style={{ height: `${progress}%` }}
                />

                {/* FINAL ROUND END (THIS makes it গোল) */}
                <div
                  className="
        absolute bottom-0 left-1/2 -translate-x-1/2
        w-7 h-7 bg-pink-400
        rounded-full
      "
                />
              </div>
            </div>

            {/* STEPS */}
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const isOdd = (index + 1) % 2 !== 0;

              return (
                <div
                  key={step.title}
                  className="relative flex items-center justify-between"
                >
                  {/* LEFT SIDE */}
                  <div className="w-[45%] flex justify-end ">
                    {isOdd ? (
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 semi-sm:w-40 semi-sm:h-40 md:w-60 md:h-60 lg:w-125 lg:h-125 rounded-3xl overflow-hidden shadow-xl">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="max-w-md md:pl-20 lg:pl-0">
                        <p className="text-base font-semibold mb-2 bg-white w-10 h-10 rounded-full flex items-center justify-center">
                          {index + 1}
                        </p>
                        <h3 className=" md:text-xl lg:text-3xl font-bold ">
                          {step.title}
                        </h3>
                      </div>
                    )}
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="w-[45%]">
                    {isOdd ? (
                      <div className="max-w-md md:pr-20 lg:pr-0">
                        <p className="text-base font-semibold mb-2 bg-white w-10 h-10 rounded-full flex items-center justify-center">
                          {index + 1}
                        </p>
                        <h3 className=" md:text-xl lg:text-3xl font-bold">
                          {step.title}
                        </h3>
                      </div>
                    ) : (
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 semi-sm:w-40 semi-sm:h-40 md:w-60 md:h-60 lg:w-125 lg:h-125 rounded-3xl overflow-hidden shadow-xl">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
