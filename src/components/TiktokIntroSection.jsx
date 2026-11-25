import React from 'react';
import { BiPackage, BiVideo, BiBullseye } from 'react-icons/bi';

const WholesaleIntro = () => {
  return (
    <div className="bg-[#fefefe]">
      <section className="py-10 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32">
        <div className="text-center space-y-4">
          <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Unlock the full revenue potential of TikTok Shop with Commerio's end-to-end management solutions. We help brands build a powerful presence, optimize product listings, and leverage viral content to drive engagement and turn casual viewers into loyal customers.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            From seamless shop integration to creator affiliate outreach, we streamline your social commerce operations for maximum profitability and sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
          <div className="space-y-2">
            <BiPackage size={32} className="text-orange-500" /> 
            <h3 className="font-semibold text-base">
              TikTok Product Setup
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Seamlessly set up your TikTok Shop catalog, optimize product pages, and sync inventory for maximum visibility and effortless buying.
            </p>
          </div>
          <div className="space-y-2">
            <BiVideo size={32} className="text-orange-500" /> 
            <h3 className="font-semibold text-base">
              Content Strategy
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Develop compelling, trend-focused video content and LIVE strategies designed to grab attention, boost engagement, and drive high conversions.
            </p>
          </div>
          <div className="space-y-2">
            <BiBullseye size={32} className="text-orange-500" /> 
            <h3 className="font-semibold text-base">
              Affiliate Marketing
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Partner with top TikTok creators and influencers that align with your brand to scale product recommendations and generate organic sales.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WholesaleIntro;