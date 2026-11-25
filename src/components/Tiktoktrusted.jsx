

import React from "react";
import { Link } from "react-router-dom";

const WholesaleBannerCTA = () => {
  return (
    <>
      <section className="bg-[#0E121D]  text-white  py-10 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold  leading-tight">
            Why trust Commerio for your TikTok Shop management?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            At Commerio, we aren’t just a regular PPC agency. Our team lives by driving exceptional results through data-driven decisions and meticulous optimization. We are pioneers and specialists on emerging platforms like TikTok Shop, using proven frameworks to generate massive sales while maintaining healthy profit margins.{" "}
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#F97316] hover:bg-orange-600 text-white font-medium text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-orange-500/25 whitespace-nowrap"
          >
            Click here to be a part of this journey
          </Link>
        </div>
      </section>

   
    </>
  );
};

export default WholesaleBannerCTA;
