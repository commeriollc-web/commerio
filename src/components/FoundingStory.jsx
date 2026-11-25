import React from "react";

const FoundingStory = () => {
  return (
    <section className="bg-[#fefefe] py-10 md:py-16">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32 text-center">
        {/* Subtitle / Category Label */}
        <span className="text-orange-600 font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-widest">
          Our Founding Story
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl  lg:text-5xl mt-6 font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
          Our Founding Story 
          From Vision to Reality
        </h2>

        {/* Text Content Paragraphs */}
        <div className="space-y-6 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed text-justify sm:text-center max-w-4xl mx-auto">
          <p>
            Commerio was created as a company to turn vision into reality. We
            identified a core need in the Amazon reseller space—where sellers
            required dedicated account management, reliable product sourcing,
            and data-driven growth strategies to navigate the complexities of
            online commerce.
          </p>
          <p>
            Our team came together with a shared mission: to build scalable
            operations, streamline inventory workflows, and empower businesses
            to reach their highest potential on the Amazon marketplace. Through
            continuous innovation, hands-on support, and transparent processes,
            we help brands transition from initial launches to sustainable,
            long-term success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundingStory;
