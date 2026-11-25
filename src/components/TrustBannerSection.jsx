import { React, useState } from "react";

import GetStartedModal from "./GetStartedModal";

function TrustBannerSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="bg-[#0E121D]  text-white  py-10 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold  leading-tight">
            Why trust Commerio for your Amazon private label management?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Because we don't just manage, we elevate. Our experts ensure your
            private label journey is a success, offering unmatched insights,
            personalized strategies, and unwavering support.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-8 py-3.5 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all text-center text-sm sm:text-base cursor-pointer"
        >
          Get Started Now
        </button>
      </div>

      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

export default TrustBannerSection;
