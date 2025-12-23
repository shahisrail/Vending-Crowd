"use client";

import { useState } from "react";
import Image from "next/image";

const DEMO_VIDEO = "https://www.youtube.com/embed/kbZQ5ayUtxc";
const THUMBNAIL = "/images/background/visual-blue-bg.jpg"; // 👈 your image

export default function AcademyHero() {
  const [play, setPlay] = useState(false);

  return (
    <section className="w-full bg-[#4BB7E5] px-10">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-8 py-16 text-black">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Vending Crowd Academy, We Help Vending Beginners
          </h1>

          <ul className="space-y-3 mb-8 text-lg">
            <li>• Move at your own pace</li>
            <li>• Perfect for beginners</li>
            <li>• We help you find your first location</li>
            <li>• Learn the fundamentals about vending</li>
            <li>• Access to one-on-one help from experts</li>
          </ul>

          <button className="w-fit bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
            Join Academy →
          </button>
        </div>

        {/* Right: Image / Video */}
        <div className="relative w-full h-[320px] lg:h-full">
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
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition">
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
