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
    className="relative bg-[#FFF7E8]  xl:h-screen overflow-hidden
               px-4 sm:px-8 lg:px-12 xl:px-20
               pt-20 pb-24 lg:pb-32"
  >
    {/* Grid background */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

    <div
      className="relative  xl:min-w-[1280px] mx-auto  
                 flex flex-col xl:flex-row
                 items-center gap-16"
    >
      {/* ================= Left Content ================= */}
      <div className="w-full xl:w-1/2 z-10 text-center xl:text-left">
        <p className="flex items-center justify-center xl:justify-start gap-2 text-sm font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          {HERO_BADGE}
        </p>

        <h1
          id="hero-heading"
          className="text-[32px] sm:text-[40px] md:text-[48px]
                     lg:text-[56px] xl:text-[64px] 2xl:text-[72px]
                     font-semibold leading-[1.1] mb-6 text-black"
        >
          {HERO_TITLE}
        </h1>

        <p
          className="text-black/70 mb-8 leading-relaxed
                      max-w-xl mx-auto xl:mx-0
                      text-sm sm:text-base md:text-lg"
        >
          {HERO_DESCRIPTION}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-10 justify-center xl:justify-start">
          {/* Primary Gradient */}
          <CTAButton
            iconSrc="/icons/right-arrow.svg"
            onClick={onJoinAcademy}
            className="
            px-7 py-3
            text-sm font-semibold text-white
            bg-gradient-to-b from-[#6A65C3] to-[#4F4ACB]
            shadow-md shadow-indigo-500/30
            hover:opacity-90
          "
          >
            Schedule A Demo
          </CTAButton>

          {/* Outline Button */}
          <CTAButton
            onClick={() =>
              window.scrollTo({
                top: document.body.clientHeight * 0.5,
                behavior: "smooth",
              })
            }
            className="
            px-7 py-3
            text-sm font-semibold text-black
            bg-transparent border-2 border-black
            hover:bg-black hover:text-white
          "
          >
            Learn More
          </CTAButton>
        </div>

        <div className="flex flex-wrap gap-6 justify-center xl:justify-start">
          {HERO_HIGHLIGHTS.map(({ logo, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 text-sm text-black"
            >
              <img src={logo} alt="" className="w-6 h-6" />
              <span className="text-base">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Right Image ================= */}
      <div className="w-full xl:w-1/2 flex justify-center xl:justify-end">
        <img
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          className="
            w-[260px] sm:w-[340px] md:w-[420px]
            lg:w-[480px] xl:w-[600px] 2xl:w-[720px]
            h-auto drop-shadow-2xl
          "
        />
      </div>
    </div>
  </section>
);

export default Hero;
