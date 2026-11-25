import {React, useState} from "react";

import { Link } from "react-router-dom";
import GetStartedModal from "./GetStartedModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      id="home"
      className="bg-[#0E121D] text-white pt-8 sm:pt-12 pb-32 sm:pb-36 lg:pb-28 relative "
    >
      <div className=" px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left z-10 max-w-2xl mx-auto lg:mx-0">
          <h1 className="font-serif  text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold leading-tight block">
            Amazon Private
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Label
            </span>
            <br />
            Management
          </h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg 2xl:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
            In the competitive world of ecommerce, our Amazon private label
            management service crafts your brand journey from inception to
            prominence.
          </p>



          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
             <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-8 py-3.5 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all text-center text-sm sm:text-base cursor-pointer"
            >
              Get Started Now
            </button>
          </div>

         
        </div>

        {/* Right Dashboard Mockup */}
        <div className="relative flex justify-center  w-full mt-6 lg:mt-0">
          <div className="relative w-full max-w-lg   rounded-full lg:max-w-none  overflow-hidden">
            <img
              src="/AmazonPrivate.jpeg"
              alt="Amazon Seller Dashboard Mockup"
              className="h-auto w-full  object-cover"
            />
          </div>
        </div>
      </div>



      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />



    </section>
  );
}
