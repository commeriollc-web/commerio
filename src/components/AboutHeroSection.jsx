import React from "react";
import { TrendingUp, ShieldCheck } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative bg-[#0E121D] text-white py-10 lg:py-24 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Area */}
          <div className="lg:col-span-6   text-left ">
            {/* Main Heading */}
            <p className="text-base sm:text-xl lg:text-2xl 2xl:text-3xl font-extrabold leading-tight block font-serif">
              We Are Your 
            </p>
            <h1 className=" text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold leading-tight block">Dedicated Amazon
              <br/>
            <span className=" text-[#FF7A00] "> Reseller Growth </span>
            <br/>
            <span className="">Partner</span>
            <br/>
            <span className="text-xl sm:text-2xl font-serif font-bold text-gray-100">
              Real People Delivering Real Results.
            </span>
            </h1>

            {/* Paragraph Text */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mt-4">
              Commerio empowers resellers, online arbitragers, and wholesalers
              to scale on Amazon with proven strategies, expert management, and
              reliable support.
            </p>

            {/* Feature Highlights / Bullet Points */}
            <div className="space-y-4 mt-4">
      {/* Feature 1: Expert Sourcing */}
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-[#FF7A00]/10 text-[#FF7A00] shrink-0 mt-1 flex items-center justify-center">
          {/* Custom Frame + Growth Chart Icon */}
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2.5" />
            <path d="M5 5v14h14" />
            <path d="M7 15l3.5-3.5 2.5 2.5 5-5" />
            <polyline points="14 9 18 9 18 13" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-white text-sm sm:text-base">
            Expert Sourcing
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Account Management & Optimization
          </p>
        </div>
      </div>

      {/* Feature 2: Adviser Support */}
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-[#FF7A00]/10 text-[#FF7A00] shrink-0 mt-1 flex items-center justify-center">
          {/* Custom Coins + Gear Overlay Icon */}
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Top Coin */}
            <ellipse cx="9.5" cy="5.5" rx="5.5" ry="2.2" />
            {/* Middle Coin */}
            <path d="M4 5.5v3c0 1.2 2.46 2.2 5.5 2.2 1.05 0 2.03-.12 2.87-.34" />
            {/* Bottom Coins Stack */}
            <path d="M4 8.5v3c0 1.2 2.46 2.2 5.5 2.2.8 0 1.56-.07 2.25-.2" />
            <path d="M4 11.5v3c0 1.2 2.46 2.2 5.5 2.2.5 0 1-.03 1.48-.09" />
            {/* Coin Grooves */}
            <path d="M6.5 7.2v2" />
            <path d="M6.5 10.2v2" />
            <path d="M6.5 13.2v2" />

            {/* Gear Outline */}
            <circle cx="16.5" cy="15.5" r="1.5" />
            <path d="M18.8 15.8l.6-1-.1-.1-1.1-.7-.6 1c-.3-.1-.7-.2-1.1-.3v-1.2h-.2h-1v1.2c-.4.1-.8.2-1.1.3l-.6-1-1.1.7.6 1c-.2.3-.4.7-.5 1.1h-1.2v1.2h1.2c.1.4.3.8.5 1.1l-.6 1 1.1.7.6-1c.3.1.7.2 1.1.3v1.2h1.2v-1.2c.4-.1.8-.2 1.1-.3l.6 1 1.1-.7-.6-1c.2-.3.4-.7.5-1.1h1.2v-1.2h-1.2c-.1-.4-.3-.8-.5-1.1z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-white text-sm sm:text-base">
            Adviser Support
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Action & Profit Boost Analytics
          </p>
        </div>
      </div>
    </div>
          </div>

          {/* Right Visual / Graphic Area */}
          <div className="lg:col-span-6  flex justify-center lg:justify-end items-center">
            <div className="relative   overflow-hidden ">
              <img
                src="/AboutHeroSection.jpeg"
                alt="Team Hands Together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
