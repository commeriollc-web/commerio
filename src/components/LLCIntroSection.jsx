





import React from 'react';
import {  FileText, Landmark, Award, } from 'lucide-react';


const WholesaleIntro = () => {
  return (
    <div className="bg-[#fefefe]">

<section className="py-10 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32 ">
        <div className=" text-center space-y-4">
          <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
          Forming an LLC is the essential backbone for modern digital brands. Commerio provides complete hassle-free setup, ensuring legally sound corporate structures tailored specifically for cross-border eCommerce and enterprise operations.
          </p>
          {/* <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
          {" "}
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
          <div className="space-y-2">
          <FileText className="text-orange-500 w-8 h-8 mb-4" />
            <h3 className="font-semibold  text-base">
            Articles of Organization
                 </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
            Precision drafting and filing of your company setup documents with state authorities.
            </p>
          </div>
          <div className="space-y-2">
          <Landmark className="text-orange-500 w-8 h-8 mb-4" />

            <h3 className="font-semibold  text-base">
            Tax Structure Optimization
                  </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
            Maximize pass-through tax benefits while staying fully compliant with international laws.
            </p>
          </div>
          <div className="space-y-2">
          <Award className="text-orange-500 w-8 h-8 mb-4" />

            <h3 className="font-semibold  text-base">
            Operating Agreement
                 </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
            Custom internal governance frameworks to define clear ownership and operational rules.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WholesaleIntro;