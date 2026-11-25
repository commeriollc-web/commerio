import React from "react";

function GridSection() {
  return (
    <section className="py-10 bg-[#fefefe] lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32 ">
      <div className="text-center space-y-2 mb-10">
        <p className="text-orange-600 font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-widest rounded-full mb-6 ">
          Boost with us
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-gray-900 leading-tight">
          Revamp your PPC, reap the rewards
        </h2>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">
        Ready for PPC that propels your profits forward? At Commerio, we
        transform your ad spend into impressive ROI, not just today but every
        day. With a focus on strategic bids and continuous market adaptation,
        your PPC strategy evolves to keep you ahead. Experience transparent
        reporting and proactive optimization that turns your PPC efforts into
        measurable success.
      </p>
    </section>
  );
}

export default GridSection;
