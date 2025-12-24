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
    className="relative bg-[#FFF7E8] overflow-hidden
               px-6 sm:px-10 lg:pl-10 lg:pr-40 pb-24 lg:pb-40"
  >
    {/* Grid background */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

    <div
      className="relative mx-auto px-4 sm:px-8 lg:px-12
                 min-h-[600px] lg:min-h-[720px]
                 flex items-center
                 max-w-7xl lg:max-w-none lg:min-w-[1620px]"
    >
      {/* Left content */}
      <div className="max-w-xl sm:max-w-2xl z-10 text-center lg:text-left">
        {/* Badge */}
        <p className="flex items-center justify-center lg:justify-start gap-2 text-sm font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          {HERO_BADGE}
        </p>

        {/* Title */}
        <h1
          id="hero-heading"
          className="text-[36px] sm:text-[44px] md:text-[52px]
                     lg:text-[64px] xl:text-[72px]
                     font-semibold leading-[1.1] mb-6 lg:mb-8 text-black"
        >
          {HERO_TITLE}
        </h1>

        {/* Description */}
        <p className="text-black/70 mb-8 lg:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">
          {HERO_DESCRIPTION}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-10 lg:mb-12 justify-center lg:justify-start">
          <CTAButton
            iconSrc="/icons/right-arrow.svg"
            onClick={onJoinAcademy}
            className="bg-[#6A65C3] text-white rounded-full px-8 py-4 text-sm font-semibold shadow-md flex items-center justify-center gap-3 hover:opacity-90 transition"
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
            className="bg-transparent border border-black rounded-full px-8 py-4 text-sm font-semibold flex items-center justify-center gap-3 hover:bg-black hover:text-white transition"
          >
            Learn More
          </CTAButton>
        </div>

        {/* Highlights */}
        <div className="flex gap-6 sm:gap-8 flex-wrap justify-center lg:justify-start">
          {HERO_HIGHLIGHTS.map(({ logo, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 text-sm text-black"
            >
              <img src={logo} alt="" className="w-6 h-6 sm:w-7 sm:h-7" />
              <span className="text-base sm:text-[18px]">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right image (unchanged for lg+) */}
      <div className="hidden lg:block absolute -right-20 top-[400px] -translate-y-1/2">
        <img
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          className="w-[850px]  h-[750px]  drop-shadow-2xl"
        />
      </div>
    </div>

    {/* Mobile image */}
    <div className="mt-16 flex justify-center lg:hidden">
      <img
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        className="w-[280px] sm:w-[360px] md:w-[420px] object-contain drop-shadow-xl"
      />
    </div>
  </section>
);

export default Hero;
