import React, { useRef } from "react";
import SliderComponent from "react-slick";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Vite CommonJS ES-Module interop fix
const Slider = SliderComponent.default || SliderComponent;

export default function TestimonialsSection() {
  const sliderRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "James T.",
      role: "Online Arbitrage Reseller",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      text: "Commerio changed my Amazon business completely. My sales and profits have never been better!",
    },
    {
      id: 2,
      name: "Sarah L.",
      role: "Wholesale Seller",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      text: "The team is professional, responsive, and knows exactly what they're doing. Highly recommended!",
    },
    {
      id: 3,
      name: "David M.",
      role: "Private Label Seller",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      text: "Best decision for my Amazon business. They handle everything while I enjoy consistent profits.",
    },
    {
      id: 4,
      name: "Michael R.",
      role: "FBA Brand Owner",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
      text: "Outstanding service and unmatched scaling tools. My revenue doubled in just 3 months!",
    },
    {
      id: 5,
      name: "Emily K.",
      role: "E-commerce Entrepreneur",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      text: "Seamless onboarding and super fast support. They truly care about seller growth.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-12 sm:py-10 md:py-16 2xl:py-28 bg-[#fefefe] w-full overflow-hidden">
      <div className=" px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32">
        <div className="flex flex-col lg:flex-row gap-2 items-start justify-between">
          
          {/* Header Section */}
          <div className="w-full lg:max-w-xs  shrink-0 text-center lg:text-left">
            <div>
              <span className="text-orange-600 font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-widest rounded-full">
                Trusted By Resellers
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl mt-3 sm:mt-4 font-extrabold text-gray-900 leading-tight">
                Real Results from Real Resellers
              </h2>
            </div>
            
            <div className="hidden lg:flex items-center space-x-3 mt-8">
              <button 
                onClick={() => sliderRef.current?.slickPrev()}
                aria-label="Previous Slide"
                className="p-2.5 2xl:p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white transition-colors shadow-sm active:scale-95"
              >
                <ChevronLeft size={20} className="2xl:w-6 2xl:h-6" />
              </button>
              <button 
                onClick={() => sliderRef.current?.slickNext()}
                aria-label="Next Slide"
                className="p-2.5 2xl:p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white transition-colors shadow-sm active:scale-95"
              >
                <ChevronRight size={20} className="2xl:w-6 2xl:h-6" />
              </button>
            </div>
          </div>

          {/* Cards Slick Slider */}
          <div className="w-full flex-1 overflow-hidden">
            <Slider ref={sliderRef} {...settings}>
              {reviews.map((t) => (
                <div key={t.id} className="px-2 sm:px-3">
                  <div className="bg-white p-5 sm:p-6 2xl:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-[280px] sm:h-[300px]">
                    <div>
                      <div className="flex text-amber-400 space-x-1 mb-3 sm:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="2xl:w-5 2xl:h-5" fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm 2xl:text-base italic leading-relaxed mb-6">
                        "{t.text}"
                      </p>
                    </div>

                    <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full object-cover shrink-0"
                      />
                      <div>
                        <p className="font-bold text-gray-900 text-sm 2xl:text-base">
                          {t.name}
                        </p>
                        <p className="text-xs 2xl:text-sm text-gray-400">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center justify-center space-x-3 mt-6 sm:mt-8">
              <button 
                onClick={() => sliderRef.current?.slickPrev()}
                aria-label="Previous Slide"
                className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white transition-colors shadow-sm active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => sliderRef.current?.slickNext()}
                aria-label="Next Slide"
                className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white transition-colors shadow-sm active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}