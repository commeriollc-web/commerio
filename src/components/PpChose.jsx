import React from "react";
import { Link } from "react-router-dom";


function Whychoose() {
  return (
    <section className="pt-10 bg-[#fefefe]  px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32">
      <div className="max-w-3xl space-y-4">
        <span className="text-orange-600 font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-widest rounded-full mb-6">
        Effortless growth with Commerio PPC management
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-gray-900 leading-tight">
          Why choose us?
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        In the realm of PPC, Commerio stands out as more than just a service provider. We're your growth partner, committed to keeping your bids at the forefront of innovation. Our transparent reporting keeps you informed, and our risk-free trial showcases our dedication to your success.
        </p>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        Choose Commerio, and let's elevate your PPC game together.
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
