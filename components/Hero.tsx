"use client";

import CTAButton from "./CTAButton";
import {
  HERO_BADGE,
  HERO_DESCRIPTION,
  HERO_HIGHLIGHTS,
  HERO_IMAGE,
  HERO_TITLE,
} from "@/lib/siteData";

type HeroProps = {
  onJoinAcademy: () => void;
};

const Hero = ({ onJoinAcademy }: HeroProps) => (
  <section
    aria-labelledby="hero-heading"
    className="relative bg-[#fff7e8] pt-24 pb-32 overflow-hidden"
  >
    {/* Grid background */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:90px_90px] pointer-events-none" />

    <div className="relative     mx-auto px-20 min-h-[700px] flex items-center">
      {/* Left content */}
      <div className="max-w-2xl z-10">
        <p className="flex items-center gap-2 text-sm font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          {HERO_BADGE}
        </p>

        <h1
          id="hero-heading"
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8"
        >
          {HERO_TITLE}
        </h1>

        <p className="text-black/70 mb-10 leading-relaxed max-w-lg">
          {HERO_DESCRIPTION}
        </p>

        {/* Buttons */}
        <div className="flex gap-5 mb-10">
          <CTAButton
            iconSrc="/icons/right-arrow.svg"
            onClick={onJoinAcademy}
            className="bg-gradient-to-r from-[#6b63ff] to-[#8a5cff] text-white rounded-full px-10 py-4 text-sm font-semibold shadow-md"
          >
            Schedule A Demo
          </CTAButton>

          <CTAButton
            iconSrc="/icons/play.svg"
            onClick={() =>
              window.scrollTo({
                top: document.body.clientHeight * 0.5,
                behavior: "smooth",
              })
            }
            className="bg-transparent border border-black rounded-full px-10 py-4 text-sm font-semibold"
          >
            Learn More
          </CTAButton>
        </div>

        {/* Highlights */}
        <div className="flex gap-8 flex-wrap">
          {HERO_HIGHLIGHTS.map(({ logo, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm">
              <img src={logo} alt="" className="w-5 h-5" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right big image – absolutely positioned */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
        <img
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          className="w-[620px] xl:w-[680px] 2xl:w-[720px] object-contain drop-shadow-xl"
        />
      </div>
    </div>

    {/* Mobile image */}
    <div className="mt-16 flex justify-center lg:hidden">
      <img
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        className="w-[360px] sm:w-[420px] object-contain drop-shadow-xl"
      />
    </div>
  </section>
);

export default Hero;
