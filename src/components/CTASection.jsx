import  React, { useState } from 'react';
import { Rocket, ArrowRight } from 'lucide-react';
import GetStartedModal from "./GetStartedModal";


export default function CTASection() {


  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="cta" className="py-10 sm:py-14 md:py-16 2xl:py-24 bg-white w-full">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32">
        <div className="bg-gradient-to-r from-[#212328] via-[#3a2c26] to-[#c85a17] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 2xl:p-16 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden gap-6 md:gap-8">
          
          {/* Content & Rocket Icon */}
          <div className="text-center md:text-left z-10 flex flex-col sm:flex-row items-center sm:items-start md:items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-full text-[#F78910] shrink-0 shadow-md">
              <Rocket size={32} className="w-6 h-6 sm:w-8 sm:h-8 2xl:w-10 2xl:h-10" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-black leading-tight">
                Ready to Grow Your Amazon Business?
              </h2>
              <p className="text-orange-100 text-xs sm:text-sm 2xl:text-base mt-1.5 sm:mt-2">
                Let Commerio handle the hard work while you enjoy the profits.
              </p>
            </div>
          </div>

          {/* CTA Action Button */}
          <div className="z-10 w-full sm:w-auto shrink-0 mt-2 sm:mt-0">



          


            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex justify-center items-center bg-white text-black font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-zinc-900 hover:text-white transition-colors shadow-lg text-xs sm:text-sm 2xl:text-base w-full sm:w-auto group"
            >
              <span>Get Started Now</span>
              <ArrowRight className="text-[#F78910] ml-3 sm:ml-4 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />

            </button>



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



