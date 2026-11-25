

import  {React, useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { BiChevronDown } from 'react-icons/bi';



const RevampPPC = () => {

  const [openAccordion, setOpenAccordion] = useState(0);

  const accordionItems = [
    {
      title: "Data Normalization & Optimization",
      desc: "Streamline relationships across 1NF, 2NF, and 3NF rules to eliminate redundant data points and ensure high transactional throughput."
    },
    {
      title: "Schema Cardinality & Attribute Mapping",
      desc: "Define strict One-to-One, One-to-Many, and Many-to-Many relational frameworks designed for seamless API integrations."
    },
    {
      title: "Enterprise Data Integrity",
      desc: "Implement robust foreign keys, unique constraints, and schema validation rules to prevent system failure and data drift."
    }
  ];
  

    // const [openAccordion, setOpenAccordion] = useState(0);

    // const accordionItems = [
    //   {
    //     title: "Seamless State Filing & Compliance",
    //     desc: "We handle all state-level documentation, Articles of Organization, and ongoing annual reporting to keep your business in good standing."
    //   },
    //   {
    //     title: "Registered Agent & Address Service",
    //     desc: "Gain privacy and corporate compliance with our dedicated registered agent services, ensuring all official notices are handled promptly."
    //   },
    //   {
    //     title: "EIN & Business Banking Setup",
    //     desc: "Get your Employer Identification Number (EIN) fast to open commercial bank accounts and establish credit for your enterprise."
    //   }
    // ];

  return (
    <>
      <section className="py-10   px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32  bg-zinc-100 rounded-3xl  border border-zinc-200">
        <div className="max-w-3xl space-y-3 mb-10">
          <span className="text-orange-600 font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-widest rounded-full mb-6">
          SYSTEM DESIGN
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-gray-900 leading-tight">
          Architect Your Data with Commerio
          </h2>
          {/* <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Ready to scale? We have proved our process with brands across
            different industries and niches, from startups to market leaders. We
            help brands manage their TikTok Shop, optimize their advertising
            strategy, and scale efficiently. Connect with us today to discuss
            your business goals and get a custom strategy from our experts.
          </p>{" "} */}
        </div>


        <div className="space-y-4">
          {accordionItems.map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
                className="w-full p-5 text-left font-bold text-gray-900 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
              >
                <span>{item.title}</span>
                <BiChevronDown className={`w-6 h-6 transition-transform ${openAccordion === idx ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === idx && (
                <div className="p-5 text-sm text-gray-600 bg-white border-t border-gray-100 leading-relaxed">
                  {item.desc}
                </div>
              )}
            </div>
          ))}
        </div>

       
      </section>
    </>
  );
};

export default RevampPPC;
