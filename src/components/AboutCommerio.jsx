import React from "react";
import { CheckCircle2 } from "lucide-react";

const AboutCommerio = () => {
  return (
    <section className="bg-[#fefefe] py-10 md:py-16 ">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight ">
            About Commerio
          </h2>
        </div>

        {/* 3-Column Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Our Value */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
            <div>
              <span className="text-orange-600 font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-widest rounded-full">
                Our Value
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2 mb-4">
                Committed to Excellence
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Commerio delivers dedicated and tailored solutions for online
                sellers, helping them scale on Amazon with expert management and
                strategy.
              </p>
            </div>

            {/* List Items with Orange Check Icons */}
            <div className="space-y-4 pt-4 ">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600  shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-semibold text-gray-900">
                    Location Solutions:
                  </h4>
                  <p className="text-sm text-gray-500">
                    Account Management & Optimization
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600  shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-semibold text-gray-900">
                    Affiliate Support:
                  </h4>
                  <p className="text-sm text-gray-500">
                    Risk & Profit Boost strategies
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Card 2: Our Vision (Tall Central Card) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 flex flex-col justify-start hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              To empower e-commerce brands and resellers worldwide with
              data-driven strategies, seamless automation, and scalable
              operations that maximize profitability and long-term success.
            </p>
          </div>

          {/* Card 3: Stacked Cards (Vision & Mission) */}
          <div className="flex flex-col gap-6 justify-between">
            {/* Top Sub-Card: Our Vision */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 flex-1 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                One of the leading reseller partners, dedicated to delivering
                measurable growth, operational clarity, and outstanding service
                to all our clients.
              </p>
            </div>

            {/* Bottom Sub-Card: Our Mission */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 flex-1 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our mission is to simplify Amazon marketplace operations and
                maximize profits so business owners can focus on growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCommerio;
