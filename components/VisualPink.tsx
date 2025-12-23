"use client";

import CTAButton from "./CTAButton";
import { VISUAL_PINK_HIGHLIGHTS } from "@/lib/siteData";

type VisualPinkProps = {
  onJoinAcademy: () => void;
};

const VisualPink = ({ onJoinAcademy }: VisualPinkProps) => (
<div className="bg-[#f86aa9] ">
    <section
      aria-labelledby="visual-pink-heading"
      className=" px-6 md:px-16 py-20 flex flex-col lg:flex-row items-center justify-between gap-16 rounded-3xl overflow-hidden"
    >
      {/* Left Content */}
      <div className="  text-black">
        <p className="inline-block bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          VendingCrowd Academy
        </p>

        <h2
          id="visual-pink-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
        >
          Vending Crowd Academy, We Help Vending Beginners
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
          {VISUAL_PINK_HIGHLIGHTS.map(({ title, icon }) => {
            const iconSrc = icon.startsWith("/") ? icon : `/${icon}`;
            return (
              <li
                key={title}
                className="flex items-center gap-3 text-sm md:text-base"
              >
                <img src={iconSrc} alt="" className="w-5 h-5" />
                <span>{title}</span>
              </li>
            );
          })}
        </ul>

        <CTAButton iconSrc="/icons/right-arrow.svg" onClick={onJoinAcademy}>
          Join Academy
        </CTAButton>
      </div>

      {/* Right Image */}
      <div className="relative">
        <img
          src="/images/background/visual-pink-bg.png"
          alt="Operators using the VendingCrowd dashboard"
          className="w-[320px] sm:w-[420px] md:w-[520px] rounded-2xl object-cover"
        />
      </div>
    </section>
  </div>
);

export default VisualPink;
