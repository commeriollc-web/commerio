import React from "react";
import { Link } from "react-router-dom";

const WholesaleWhyChoose = () => {
  return (
    <>
      <section className="py-10 bg-[#fefefe] px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32">
        <div className="max-w-3xl space-y-4">
          <span className="text-orange-600 font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-widest rounded-full mb-6">
            Growth with Commerio for TikTok
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-gray-900 leading-tight">
            Why choose us?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            In the fast-paced world of social commerce, Commerio stands out not 
            just as a service provider, but as your dedicated TikTok Shop growth partner. 
            We combine viral content strategies, high-converting creator affiliate 
            networks, and data-driven ad management to keep your store ahead of the curve. 
            With transparent real-time reporting and dedicated account managers, we ensure 
            your brand scales smoothly and profitably. Choose Commerio and let’s elevate 
            your TikTok Shop revenue together.
          </p>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-7 py-3 rounded-xl transition-all shadow-lg shadow-orange-500/25"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WholesaleWhyChoose;