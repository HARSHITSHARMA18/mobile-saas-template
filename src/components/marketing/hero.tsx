import React from "react";
import TriplePhoneHero from "./triple-phone";

export function Hero() {
  return (
    <section className="relative w-full pt-8 md:pt-12 flex flex-col items-center overflow-hidden">
      {/* Announcement Chip */}
      <div className="flex w-fit items-center gap-2 border border-black/10 backdrop-blur-sm p-1 text-xs md:text-sm font-medium transition-colors hover:bg-white/20 cursor-pointer">
        <span className="bg-black text-white px-3 py-1 text-[10px] md:text-xs">Hiring</span>
        <span className="text-black/70 pr-2">Apply for Design Engineer &rarr;</span>
      </div>

      {/* Hero Content */}
      <div className="mt-6 px-4 text-center max-w-4xl mx-auto flex flex-col items-center">
        <h1
          className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] [text-shadow:0px_4px_4px_rgba(0,0,0,0.09)]"
        >
          Make Any Song<br />You Can Imagine
        </h1>
        <p className="mt-4 text-white/90 text-base md:text-md max-w-xl mx-auto">
          Create stunning original music for free in seconds using AI. Make your own masterpieces, share with friends, and discover music from artists worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <button className="px-6 py-2.5 bg-black text-white font-medium text-base hover:bg-black/90 transition-colors w-full sm:w-auto">
            Install Now
          </button>
          <button className="px-6 py-2.5 border border-white text-white font-medium text-base hover:bg-white/10 transition-colors w-full sm:w-auto">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Dashed Div Divider */}
      <div className="w-full h-10 border-y border-white dark:border-white opacity-30 bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] my-5 text-white"></div>

      {/* Triple Phones */}
      <div className="w-full flex justify-center -mt-4 relative z-10 -mb-4">
        <TriplePhoneHero
          imageLeftSrc="https://res.cloudinary.com/harshitproject/image/upload/v1746774677/suno-left.png"
          imageCenterSrc="https://res.cloudinary.com/harshitproject/image/upload/v1746774677/suno-center.png"
          imageRightSrc="https://res.cloudinary.com/harshitproject/image/upload/v1746774678/suno-right.png"
        />
      </div>


      <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-white to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}
