import React from "react";
import { BiCaretDown } from "react-icons/bi";

const RevampPPC = () => {
  return (
    <>
      <section className="py-10 px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32 bg-zinc-100 rounded-3xl border border-zinc-200">
        <div className="max-w-3xl space-y-3 mb-10">
          <span className="text-orange-600 font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-widest rounded-full mb-6">
            TikTok Shop Growth Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-gray-900 leading-tight">
            Scale Your Brand with TikTok Shop Integration
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Ready to turn views into sales? We help brands seamlessly set up, 
            manage, and scale their TikTok Shop presence. From viral video strategy 
            to affiliate influencer outreach and paid ad optimization, our end-to-end 
            management drives consistent growth and maximizes revenue.
          </p>
        </div>

        <div className="space-y-3">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <h3 className="font-semibold flex items-center justify-between text-base mb-1">
              TikTok Shop Setup & Fulfillment Sync <BiCaretDown />
            </h3>
            {/* <p className="text-gray-700 text-md leading-relaxed">Complete shop setup, catalog synchronization, and seamless integration with your fulfillment center for fast order processing.</p> */}
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm">
            <h3 className="font-semibold flex items-center justify-between text-base mb-1">
              Affiliate & Creator Partnership Program <BiCaretDown />
            </h3>
            {/* <p className="text-gray-700 text-md leading-relaxed">We connect your brand with top-performing TikTok creators to run high-converting affiliate campaigns at scale.</p> */}
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm">
            <h3 className="font-semibold flex items-center justify-between text-base mb-1">
              LIVE Shopping & Short Video Ad Scaling <BiCaretDown />
            </h3>
            {/* <p className="text-gray-700 text-md leading-relaxed">Boost sales through structured LIVE shopping streams and targeted TikTok Spark Ads designed to convert viral interest into buyers.</p> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default RevampPPC;