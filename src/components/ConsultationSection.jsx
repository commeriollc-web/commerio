import React, { useState } from "react";
import { Clock, Video, ChevronLeft, ChevronRight } from "lucide-react";
// import Logo from "../"; // Ensure you have a logo image in the specified path

export default function ConsultationSection() {
  const [selectedDate, setSelectedDate] = useState(14);

  // Calendar Days Setup
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <section className="w-full bg-[#F7F4EE]  py-10 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 2xl:px-32 ">
      <div className=" grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        {/* Left Side: Heading & Subtext */}
        <div className="lg:col-span-5 space-y-4 text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Schedule a free <br className="hidden sm:inline" />
            consultation call
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
            Schedule a free meeting with our experts to get tailored solutions for your business needs.
          </p>
        </div>

        {/* Right Side: Calendly-style Widget Card */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative">

            {/* Top Ribbon / Badge */}
            <div className="absolute top-0 right-0 overflow-hidden w-24 h-24 pointer-events-none">
              <div className="bg-gray-700 text-white text-[9px] font-bold tracking-wider uppercase py-1 text-center rotate-45 transform translate-x-7 translate-y-3 w-32 shadow-md">
                POWERED BY
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Header Logo & Title */}
              <div className="text-center pb-6 border-b border-gray-100">
                <div className="flex justify-center items-center mb-3">
                  <img
                    src="/logo.jpeg"
                    alt="Logo"
                    className="w-20 h-auto object-contain"
                  />
                </div>
                {/* <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                  Ventures Co
                </p> */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                  Commerio consultation
                </h2>
              </div>

              {/* Consultation Details */}
              <div className="py-5 border-b border-gray-100 space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-3 justify-center sm:justify-start">
                  <Clock className="w-4 h-4 text-gray-700 shrink-0" />
                  <span>30 min</span>
                </div>
                <div className="flex items-center space-x-3 justify-center sm:justify-start">
                  <Video className="w-4 h-4 text-gray-700 shrink-0" />
                  <span className="text-xs sm:text-sm">
                    Web conferencing details provided upon confirmation
                  </span>
                </div>
              </div>

              {/* Calendar Picker Section */}
              <div className="pt-6">
                {/* Calendar Header Navigation */}
                <div className="flex items-center justify-between mb-6 px-2">
                  <button className="p-1 rounded-full hover:bg-gray-100 transition text-gray-600">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <h3 className="text-base font-bold text-gray-800">
                    Select a Day
                  </h3>
                  <button className="p-1 rounded-full hover:bg-gray-100 transition text-gray-600">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Days of Week */}
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {daysOfWeek.map((day, idx) => (
                    <span key={idx} className="text-xs font-semibold text-gray-400">
                      {day}
                    </span>
                  ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  {daysInMonth.map((day) => {
                    const isSelected = day === selectedDate;
                    return (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`h-9 w-9 mx-auto rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition ${isSelected
                          ? "bg-blue-600 text-white shadow-md font-bold"
                          : "text-blue-600 hover:bg-blue-50 bg-blue-50/40"
                          }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}