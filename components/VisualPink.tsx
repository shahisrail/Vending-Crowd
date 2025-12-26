"use client";

import CTAButton from "./CTAButton";
import { VISUAL_PINK_HIGHLIGHTS } from "@/lib/siteData";

type VisualPinkProps = {
  onJoinAcademy: () => void;
};

const VisualPink = ({ onJoinAcademy }: VisualPinkProps) => (
  <div className="bg-[#F561A4] ">
    <section
      aria-labelledby="visual-pink-heading"
      className=" px-6 md:px-16 py-20 flex flex-col lg:flex-row items-center justify-between gap-16 rounded-3xl overflow-hidden"
    >
      {/* Left Content */}
      <div className="  text-black">
        <h2
          id="visual-pink-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
        >
          Vending Crowd Academy, We <br /> Help Vending Beginners
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-5 mb-10">
          {VISUAL_PINK_HIGHLIGHTS.map(({ title, icon }) => {
            const iconSrc = icon.startsWith("/") ? icon : `/${icon}`;
            return (
              <li
                key={title}
                className="flex items-center gap-3 text-sm md:text-base"
              >
                <img src={iconSrc} alt="" className="w-9 h-9" />
                <span className="  text-xl" >{title}</span>
              </li>
            );
          })}
        </ul>

    
        <button className="w-fit bg-gradient-to-r from-[#6D66C7] to-[#8A85E6] text-white px-7 py-3 rounded-full font-medium hover:opacity-90 transition">
              Join Academy →
            </button>
      </div>

      {/* Right Image */}
      <div className="relative">
        <img
          src="/images/background/visual-pink-bg.png"
          alt="Operators using the VendingCrowd dashboard"
          className="w-[320px] sm:w-[420px] md:w-[720px] rounded-2xl object-cover"
        />
      </div>
    </section>
  </div>
);

export default VisualPink;
