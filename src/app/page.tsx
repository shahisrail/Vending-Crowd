"use client";

import AcademyHero from "@/components/AcademyHero";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import NewComers from "@/components/NewComers";
import SavingsCalculator from "@/components/SavingsCalculator";
import TopNav from "@/components/TopNav";
import VisualPink from "@/components/VisualPink";

export default function Home() {
  const handleOpenAcademy = () => {
    console.log("Join Academy clicked");
  };

  return (
    <div className=" xl:min-w-[1620px] mx-auto">
      <TopNav />
      <Hero onJoinAcademy={handleOpenAcademy} />
      <AcademyHero />
      <NewComers />
      <Features />
      <HowItWorks />
      <SavingsCalculator/>
      <VisualPink onJoinAcademy={handleOpenAcademy} />
      <FAQ/>
    </div>
  );
}
