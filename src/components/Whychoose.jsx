import React from "react";
import { Link } from "react-router-dom";


function Whychoose() {
  return (
    <section className="py-10 bg-[#fefefe]  px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32">
      <div className="max-w-3xl space-y-4">
        <span className="text-orange-600 font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-widest rounded-full mb-6">
          Effortless growth with Commerio Amazon PL management
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-gray-900 leading-tight">
          Why choose us?
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          At Commerio, we bridge the gap between aspirations and achievements in
          the ecommerce realm. Our dedication goes beyond managing private
          labels. It's about sculpting success stories, with a keen eye on
          market dynamics, meticulous product precision, and a passion for brand
          building.
        </p>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Ensure your brand doesn't just exist on Amazon, it thrives. Choose
          Commerio for a journey where every click, every purchase, and every
          satisfied customer is a testament to the success we carve together.
          Your brand's triumph on Amazon begins with us.
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
