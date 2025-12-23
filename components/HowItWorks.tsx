"use client";

import Image from "next/image";
import { HOW_IT_WORKS_STEPS } from "@/lib/siteData";
import { useRef, useState } from "react";

export default function HowItWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setProgress((el.scrollTop / max) * 100);
  };

  return (
    <section className="bg-[#FFC425] h-screen overflow-hidden">
      <div className="max-w-screen-xl mx-auto h-full flex flex-col px-6">
        {/* Header */}
        <div className="pt-14 pb-6 shrink-0">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-3">
            How It Works
          </h2>
          <p className="max-w-3xl mx-auto text-center text-black/80">
            VendingCrowd&apos;s order request system allows operators to
            dispatch workers to restock, fix, or collect cash deposits.
          </p>
        </div>

        {/* Scroll Area */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="relative flex-1 overflow-y-auto scroll-smooth
                     [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        >
          {/* Center Timeline */}
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-10 flex justify-center">
            {/* Track */}
            <div className="absolute h-full w-1 bg-yellow-600/40 rounded-full" />
            {/* Progress */}
            <div
              className="absolute top-0 w-1 bg-gradient-to-b from-pink-500 to-yellow-400 rounded-full"
              style={{ height: `${progress}%` }}
            />
            {/* Knob */}
            <div
              className="absolute w-5 h-5 rounded-full bg-pink-500 shadow-md"
              style={{ top: `calc(${progress}% - 10px)` }}
            />
          </div>

          {/* Steps */}
          <div className="relative space-y-40 py-24">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Step Number */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div
                    className={`bg-white rounded-3xl shadow-xl p-6 md:p-8 max-w-md w-full ${
                      isLeft ? "mr-auto pr-16" : "ml-auto pl-16"
                    }`}
                  >
                    <div className="relative w-full h-56 mb-5 rounded-2xl overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">
                      Step {index + 1}
                    </h3>
                    <p className="text-black/80">{step.title}</p>
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
