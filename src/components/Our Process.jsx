import React from "react";

import { UserCheck, Search, ShieldCheck, TrendingUp } from "lucide-react";



export default function ProcessSection() {

  const steps1 = [

    {

      step: "1",

      title: "Consultation",

      desc: "We understand your goals and budget.",

    },

    {

      step: "2",

      title: "Product Research",

      desc: "We find profitable products for you.",

    },

    {

      step: "3",

      title: "Launch & Manage",

      desc: "We handle everything and launch your business.",

    },

    {

      step: "4",

      title: "Scale & Grow",

      desc: "We optimize and scale your profits.",

    },

  ];



  const steps = [

    {

      id: 1,

      title: "Consultation",

      description: "We understand your goals and budget.",

      Icon: UserCheck,

    },

    {

      id: 2,

      title: "Product Research",

      description: "We find profitable products for you.",

      Icon: Search,

    },

    {

      id: 3,

      title: "Launch & Manage",

      description: "We handle everything and launch your business.",

      Icon: ShieldCheck,

    },

    {

      id: 4,

      title: "Scale & Grow",

      description: "We optimize and scale your profits.",

      Icon: TrendingUp,

    },

  ];



  return (

    <>

      <section id="process" className="py-20 bg-[#fefefe]">

        <div className="px-4 sm:px-6 lg:px-8  xl:px-20">

          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">

            <span className="text-orange-600 font-bold text-md uppercase tracking-widest rounded-full">

              Our Process

            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">

              Simple Process, Maximum Results

            </h2>

          </div>



         



          <section className="w-full  ">

            <div className="">

              {/* Process Steps Grid Container */}

              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">

                {/* Connecting Line for Large Screens */}

                <div className="hidden lg:block absolute top-0 left-[4%] right-[12%] h-[1px] bg-gray-200 -z-0" />

                {/* first line */}

                <div className="hidden lg:block absolute top-[21px] left-[23%] max-w-[35px] -traslate-x-1/2 -right-1/2 h-[2px] bg-gray-200 -z-0 rotate-45" />

                <div className="hidden lg:block absolute top-[4px] left-[23%] max-w-[10px] -traslate-x-1/2 -right-1/2 h-[2px] bg-gray-200 -z-0 rotate-90" />

                {/* second line */}

                <div className="hidden lg:block absolute top-[21px] left-[49%] max-w-[35px] -traslate-x-1/2 -right-1/2 h-[2px] bg-gray-200 -z-0 rotate-45" />

                <div className="hidden lg:block absolute top-[4px] left-[49%] max-w-[10px] -traslate-x-1/2 -right-1/2 h-[2px] bg-gray-200 -z-0 rotate-90" />

                {/* third line  */}

                <div className="hidden lg:block absolute top-[21px] left-[74%] max-w-[35px] -traslate-x-1/2 -right-1/2 h-[2px] bg-gray-200 -z-0 rotate-45" />

                <div className="hidden lg:block absolute top-[4px] left-[74%] max-w-[10px]  -traslate-x-1/2 -right-1/2 h-[2px] bg-gray-200 -z-0 rotate-90" />



                {steps.map((step) => {

                  const Icon = step.Icon;

                  return (

                    <div

                      key={step.id}

                      className="relative z-10 flex flex-col sm:flex-row lg:flex-row items-center sm:items-start text-center sm:text-left gap-4"

                    >

                      {/* Icon Circle Container */}

                      <div className="relative shrink-0">

                        <div className="w-24 h-24 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center">

                          <Icon className="w-7 h-7 text-gray-800 stroke-[2]" />

                        </div>

                        {/* Badge Step Number */}

                        <span className="absolute top-0 lg:-top-3 left-20 lg:left-28  w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center shadow-sm">

                          {step.id}

                        </span>

                      </div>



                      {/* Content Details */}

                      <div className="pt-6 max-w-[200px] sm:max-w-none">

                        <h3 className="text-base font-bold text-gray-900 leading-snug">

                          {step.title}

                        </h3>

                        <p className="mt-1 text-xs text-gray-500 leading-relaxed font-normal">

                          {step.description}

                        </p>

                      </div>

                    </div>

                  );

                })}

              </div>

            </div>

          </section>

        </div>

      </section>

    </>

  );

} 

