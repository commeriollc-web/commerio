import React, { useState } from "react";
import {
  ChevronRight,
  UserCheck,
  TrendingUp,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import GetStartedModal from "./GetStartedModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Link click handle karne aur page/section scroll ke liye function
  const handleScrollToServices = (e) => {
    e.preventDefault(); // Default route navigation rokne ke liye
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="bg-[#0E121D] text-white pt-8 sm:pt-12 pb-32 sm:pb-36 lg:pb-28 relative"
    >
      <div className="px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left z-10 max-w-2xl mx-auto lg:mx-0">
          <h1 className="font-serif">
            <span className="text-base sm:text-xl lg:text-2xl 2xl:text-3xl font-extrabold leading-tight block">
              We Help You Build A
            </span>

            <span className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold leading-tight block">
              Profitable Amazon
            </span>
            <span className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold leading-tight block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                Reseller
              </span>{" "}
              Business
            </span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg 2xl:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
            Commerio empowers resellers, online arbitrageurs, and wholesalers to
            scale on Amazon with proven strategies, expert management, and
            reliable support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-8 py-3.5 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all text-center text-sm sm:text-base cursor-pointer"
            >
              Get Started Now
            </button>

            {/* Pure <Link> component with smooth scroll handler */}
            <Link
              to="#services"
              onClick={handleScrollToServices}
              className="w-full sm:w-auto border border-gray-700 hover:border-gray-500 text-white font-semibold px-6 py-3.5 rounded-xl flex items-center justify-center space-x-6 transition-all group text-sm sm:text-base cursor-pointer"
            >
              <span>Our Services</span>
              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                <ChevronRight
                  size={20}
                  strokeWidth={2.5}
                  className=" text-black transition-transform"
                />
              </span>
            </Link>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-4 pt-6 border-t border-gray-800">
            <div className="flex -space-x-2 shrink-0">
              <img
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-black object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="user"
              />
              <img
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-black object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="user"
              />
              <img
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-black object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                alt="user"
              />
            </div>
            <div className="text-xs sm:text-sm text-gray-400">
              <span className="font-semibold text-white">Trusted by 500+</span>{" "}
              Resellers Worldwide
            </div>
          </div>
        </div>

        {/* Right Dashboard Mockup */}
        <div className="relative flex justify-center w-full mt-6 lg:mt-0">
          <div className="relative w-full max-w-lg lg:max-w-none rounded-md overflow-hidden">
            <img
              src="/herosection.png"
              alt="Amazon Seller Dashboard Mockup"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32 max-w-[1920px] absolute -bottom-16 sm:-bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 sm:p-3 bg-orange-500/10 text-orange-500 rounded-xl shrink-0">
              <UserCheck size={24} />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">
                Amazon Experts
              </h4>
              <p className="text-xs text-gray-400">5+ Years Exp</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-2.5 sm:p-3 bg-orange-500/10 text-orange-500 rounded-xl shrink-0">
              <TrendingUp size={24} />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">
                Proven Results
              </h4>
              <p className="text-xs text-gray-400">Grow Profits</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-2.5 sm:p-3 bg-orange-500/10 text-orange-500 rounded-xl shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">100% Secure</h4>
              <p className="text-xs text-gray-400">Policy Compliant</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-2.5 sm:p-3 bg-orange-500/10 text-orange-500 rounded-xl shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">24/7 Support</h4>
              <p className="text-xs text-gray-400">Always Active</p>
            </div>
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




