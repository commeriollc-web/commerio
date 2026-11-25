import React from "react";

const ContactHero = () => {
  return (
    <section className="relative w-full bg-[#0E121D] text-white h-screen overflow-hidden px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 2xl:px-32 flex items-center justify-center">
      <div className="w-full  grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 xl:gap-12 items-center">
        
        {/* Left Column - Text Content */}
        <div className="lg:col-span-6  space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center lg:text-left z-10">
          
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-extrabold leading-tight block font-serif tracking-wide text-gray-200">
            Have Questions?
          </p>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-[1.15] block tracking-tight">
            Let’s{" "}
            <span className="text-[#FF7A00]">Talk about</span>
            <br />{" "}
            <span>Your Growth</span>
          </h1>

          <p className="text-gray-400 text-xs xs:text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 pt-1 sm:pt-2">
            We Help You Build A Profitable Amazon Reseller Business
          </p>

        </div>

        {/* Right Column - Geometric Diamond Illustration */}
        <div className="lg:col-span-6  relative flex justify-center items-center w-full mt-4 lg:mt-0">
          {/* Main Diamond Container */}
          <div className="relative w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[500px] xl:max-w-[560px] 2xl:max-w-[640px] aspect-square flex justify-center items-center">
            <img
              src="/contect_section_image.png"
              alt="Contact Section Growth Illustration"
              className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactHero;