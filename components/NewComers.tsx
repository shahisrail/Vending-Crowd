"use client";

import Image from "next/image";
import CTAButton from "./CTAButton";
import { NEW_COMER_AVATARS, NEW_COMER_FEATURES } from "@/lib/siteData";

export default function NewComers() {
  return (
    <section className="bg-black  text-white py-10 px-10">
      <div className="  mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-between ">
        {/* Left Content */}
        <div>
          <p className="text-yellow-400 text-sm font-semibold mb-3 uppercase tracking-wide">
            How We Help
          </p>

          <h3 className="text-2xl   font-semibold mb-6 text-gray-200 leading-tight">
            We help vending operators and newcomers grow and scale their
            business.
          </h3>

          {/* Avatars */}
          <div className="flex items-center -space-x-3 mt-6">
            {NEW_COMER_AVATARS.map((avatar, i) => (
              <Image
                key={i}
                src={avatar}
                alt="User avatar"
                width={44}
                height={44}
                className="rounded-full border-2 border-black"
              />
            ))}
          </div>
        </div>

        {/* Right Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {NEW_COMER_FEATURES.map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-pink-600/10">
                <Image src={icon} alt="" width={28} height={28} />
              </div>
              <p className="text-lg text-gray-100">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
