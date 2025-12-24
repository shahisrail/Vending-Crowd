"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const DEMO_VIDEO = "https://www.youtube.com/embed/RgKAFK5djSk?autoplay=1&rel=0";
const THUMBNAIL = "/images/background/visual-blue-bg.jpg";

export default function AcademyHero() {
  const [open, setOpen] = useState(false);

  // Disable background scroll when modal open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full bg-[#42B8EC] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
          {/* LEFT */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-14 text-black">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Vending Crowd Academy, We Help Vending Beginners
            </h1>

            <ul className="space-y-3 mb-8 text-base sm:text-lg max-w-md list-disc list-inside">
              <li>Move at your own pace</li>
              <li>Perfect for beginners</li>
              <li>We help you find your first location</li>
              <li>Learn the fundamentals about vending</li>
              <li>Access to one-on-one help from experts</li>
            </ul>

            <button className="w-fit bg-gradient-to-r from-[#6D66C7] to-[#8A85E6] text-white px-7 py-3 rounded-full font-medium hover:opacity-90 transition">
              Join Academy →
            </button>
          </div>

          {/* RIGHT THUMBNAIL */}
          <div
            className="relative w-full h-[320px] sm:h-[420px] lg:h-full cursor-pointer group"
            onClick={() => setOpen(true)}
          >
            <Image
              src={THUMBNAIL}
              alt="Academy Preview"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center
                group-hover:scale-110 transition shadow-2xl"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:opacity-80"
          >
            ✕
          </button>

          {/* Video Container */}
          <div className="w-[90%] max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src={DEMO_VIDEO}
              title="Vending Crowd Video"
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
