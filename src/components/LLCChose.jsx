import React from "react";
import { Link } from "react-router-dom";


function Whychoose() {
  return (
    <section className="pt-10 bg-[#fefefe]  px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32">
      <div className="max-w-3xl space-y-4">
        <span className="text-orange-600 font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-widest rounded-full mb-6">
        CORPORATE EXCELLENCE
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-gray-900 leading-tight">
          Why choose us?
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        Commerio provides transparent, end-to-end legal entity creation with zero hidden fees. We ensure smooth account verification on major global marketplaces like Amazon, TikTok, and Walmart, protecting your liability every step of the way.
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
  );
}

export default Whychoose;
