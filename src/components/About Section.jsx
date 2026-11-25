import React from "react";
import { ArrowRight } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function AboutSection() {
  const points = [
    "Expert Product Sourcing",
    "Account Management & Optimization",
    "Inventory & Order Management",
    "A-to-Z Seller Support",
    "Repricing & Profit Optimization",
  ];

  // 1. Sales Growth ke liye Custom Bar Chart Graphic
  const SalesBarChart = () => (
    <div className="flex items-end gap-[3px] h-8 pb-0.5 shrink-0">
      <div className="w-[3px] bg-amber-500 opacity-40 h-[15%]" />
      <div className="w-[3px] bg-amber-500 opacity-40 h-[25%]" />
      <div className="w-[3px] bg-amber-500 opacity-40 h-[35%]" />
      <div className="w-[3px] bg-amber-500 opacity-55 h-[50%]" />
      <div className="w-[3px] bg-amber-500 opacity-70 h-[65%]" />
      <div className="w-[3px] bg-amber-500 opacity-85 h-[80%]" />
      <div className="w-[3px] bg-amber-500 opacity-95 h-[90%]" />
      <div className="w-[3px] bg-amber-500 h-[100%]" />
    </div>
  );

  // 2. Orders ke liye Exact Shopping Cart SVG Icon
  const ShoppingCartIcon = () => (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-600" viewBox="0 0 24 24">
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  );

  // 3. Revenue ke liye Exact Hand + Coin SVG Icon
  const HandCoinIcon = () => (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-600" viewBox="0 0 24 24">
      <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-7 8.5c0-.83.67-1.5 1.5-1.5h4.2c.42 0 .82.17 1.11.47l1.77 1.77c.23.23.54.36.86.36h3.56c.83 0 1.5.67 1.5 1.5S18.83 21 18 21H9.83c-.8 0-1.57-.32-2.14-.88l-2.12-2.12c-.36-.36-.57-.85-.57-1.5z" />
    </svg>
  );

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 2xl:py-28 bg-[#FEFEFE] w-full">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-16 items-center">
        
        {/* Left Side Graphic Container */}
        <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
            <img
              src="/aboutSection.jpeg"
              alt="Amazon Growth Partner"
              className="w-full h-auto object-cover max-h-[550px] 2xl:max-h-[650px]"
            />
          </div>

          {/* Floating Cards (Responsive positioning & stacking on mobile) */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 sm:mt-0 gap-3 sm:gap-0">
            
            {/* 1. Sales Growth Card */}
            <div className="flex items-center space-x-4 sm:space-x-8 lg:space-x-12 sm:absolute sm:-left-2 md:left-2 lg:-left-4 top-4 sm:top-8 justify-between p-3 sm:p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 z-10">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-900">Sales Growth</p>
                <h3 className="text-lg sm:text-xl font-extrabold text-black">+178%</h3>
              </div>
              <SalesBarChart />
            </div>

            {/* 2. Orders Card */}
            <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 sm:absolute sm:-left-2 md:left-2 lg:-left-4 top-1/2 sm:-translate-y-1/2 justify-between p-3 sm:p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 z-10">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-900">Orders</p>
                <h3 className="text-lg sm:text-xl font-extrabold text-black">3,300+</h3>
                <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium">
                  Per Month
                </span>
              </div>
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-amber-100/70 rounded-full flex items-center justify-center shrink-0">
                <ShoppingCartIcon />
              </div>
            </div>

            {/* 3. Revenue Card */}
            <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 sm:absolute sm:left-2 md:left-6 lg:left-2 bottom-4 sm:bottom-8 justify-between p-3 sm:p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 z-10">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-900">Revenue</p>
                <h3 className="text-lg sm:text-xl font-extrabold text-black">
                  $42,940+
                </h3>
                <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium">
                  Per Month
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-100/70 rounded-full flex items-center justify-center shrink-0">
                <HandCoinIcon />
              </div>
            </div>

          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-5 sm:space-y-6 2xl:space-y-8">
          <span className="text-orange-600 font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-widest rounded-full">
            About Commerio
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-gray-900 leading-tight">
            Your Dedicated Amazon Reseller Growth Partner
          </h2>
          
          <p className="text-gray-600 text-xs sm:text-sm md:text-base 2xl:text-lg leading-relaxed">
            We manage the hard work so you can focus on scaling your business.
            From product research to order fulfillment, we handle it all to
            maximize your profits on Amazon.
          </p>

          <ul className="space-y-2.5 sm:space-y-3 pt-2">
            {points.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center space-x-3 text-xs sm:text-sm md:text-base 2xl:text-lg text-gray-700 font-medium"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0">
                  ✓
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 sm:pt-4">
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-orange-500 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-orange-600 transition-colors shadow-md text-xs sm:text-sm 2xl:text-base"
            >
              <span>Learn More About Us</span>
              <ArrowRight size={16} className="2xl:w-5 2xl:h-5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}