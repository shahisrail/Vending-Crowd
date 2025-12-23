"use client";

import { useState } from "react";
import Image from "next/image";

const DEMO_VIDEO = "https://www.youtube.com/embed/kbZQ5ayUtxc";
const THUMBNAIL = "/images/background/visual-blue-bg.jpg";

export default function AcademyHero() {
  const [play, setPlay] = useState(false);

  return (
    <section className="w-full bg-[#42B8EC] px-4 sm:px-6 lg:px-10">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[520px] max-w-7xl">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-black text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Vending Crowd Academy, We Help Vending Beginners
          </h1>

          <ul className="space-y-3 mb-8 text-base sm:text-lg mx-auto lg:mx-0 max-w-md">
            <li>• Move at your own pace</li>
            <li>• Perfect for beginners</li>
            <li>• We help you find your first location</li>
            <li>• Learn the fundamentals about vending</li>
            <li>• Access to one-on-one help from experts</li>
          </ul>

          <button className="w-fit mx-auto lg:mx-0 bg-[#706BC8] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
            Join Academy →
          </button>
        </div>

        {/* Right: Image / Video */}
        <div className="relative w-full h-[260px] sm:h-[320px] lg:h-full">
          {!play ? (
            <div
              className="relative w-full h-full cursor-pointer group"
              onClick={() => setPlay(true)}
            >
              <Image
                src={THUMBNAIL}
                alt="Academy Preview"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  ▶️
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src={`${DEMO_VIDEO}?autoplay=1`}
              title="Vending Crowd Demo"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
