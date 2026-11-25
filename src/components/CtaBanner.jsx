import React from "react";
import { Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


export default function CtaBanner() {
  return (
    <>
      <section className="w-full py-8 bg-[#fefefe] ">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#212328] via-[#3a2c26] to-[#c85a17] p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">


            <div className="absolute right-[3%] bottom-0 top-0 pointer-events-none opacity-20 md:opacity-30 flex items-center justify-center">
              <svg
                className="w-48 h-48 sm:w-64 sm:h-64 animate-pulse"
                clipRule="evenodd"
                fillRule="evenodd"
                imageRendering="optimizeQuality"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                viewBox="0 0 42.8412 43.3492"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_x0020_1">
                  <g id="_276574856">
                    {/* Animated Curved Arrow */}
                    <path
                      id="_276576008"
                      d="m38.6762 6.6225c-2.7713 5.7017-7.0844 10.6395-12.2907 14.249-6.416 4.4481-14.1156 6.8123-21.9364 6.4185l-1.1187-.0564.1127-2.2374 1.1187.0564c7.3275.3689 14.5371-1.8554 20.5473-6.0222 4.9305-3.4184 9.0178-8.1096 11.6184-13.5243l-2.0491-1.174 5.3146-2.2186.7738 5.7068z"
                      className="fill-[#f97815] transition-transform duration-700 ease-in-out hover:scale-105"
                    />

                    {/* Bottom Base Line */}
                    <path
                      id="_276575960"
                      d="m-.254 39.7843h43.3492v1.4515h-43.3492z"
                      fillRule="nonzero"
                      className="fill-[#f97815]"
                    />

                    {/* Signal Bars with staggered scaling animation */}
                    <path
                      id="_276575528"
                      d="m3.3304 33.7591v6.7993h4.3582v-6.7993z"
                      className="fill-[#f97815] transition-all duration-300 opacity-80"
                    />
                    <path
                      id="_276575840"
                      d="m11.286 30.882v9.6764h4.3581v-9.6764z"
                      className="fill-[#f97815] transition-all duration-300 opacity-85"
                    />
                    <path
                      id="_276575264"
                      d="m19.2415 28.7185v11.8399h4.3582v-11.8399z"
                      className="fill-[#f97815] transition-all duration-300 opacity-90"
                    />
                    <path
                      id="_276574928"
                      d="m27.197 23.6779v16.8805h4.3582v-16.8805z"
                      className="fill-[#f97815] transition-all duration-300 opacity-95"
                    />
                    <path
                      id="_276575024"
                      d="m35.1526 15.837v24.7214h4.3582v-24.7214z"
                      className="fill-[#f97815] transition-all duration-300 opacity-100"
                    />
                  </g>
                </g>
              </svg>
            </div>

            {/* Left Text Content */}
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
                Discover How Commerio Can Transform Your Specific Business
                Model.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-normal">
                Explore personalized solutions for your brand, wholesale, or
                private label.
              </p>
            </div>

            {/* Right Action Button */}
            {/* <div className="relative z-10 flex-shrink-0 w-full sm:w-auto">
              <Link
                to="/roadmap"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 bg-white text-gray-900 font-semibold text-sm sm:text-base rounded-xl shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <span>Download Our Success Roadmap</span>
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
