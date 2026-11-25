import React from 'react';

export default function StatsSection() {
  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "$10M+", label: "Revenue Generated" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "5+", label: "Years of Experience" },
  ];

  return (
    <section className="bg-[#FEFEFE] text-white px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32 w-full">
      <div className="max-w-[1920px] mx-auto py-6 sm:py-8 md:py-10 2xl:py-14 px-4 sm:px-6 rounded-2xl sm:rounded-3xl bg-neutral-900">
        
        {/* Responsive Grid System */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 md:gap-8 text-center divide-y-0 md:divide-x divide-zinc-800">
          {stats.map((st, i) => (
            <div 
              key={i} 
              className={`flex flex-col justify-center font-sans ${
                i >= 2 ? "pt-4 md:pt-0 border-t border-zinc-800 md:border-t-0" : ""
              }`}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                {st.value}
              </p>
              <p className="text-xs sm:text-sm 2xl:text-base text-gray-400 mt-1 font-medium">
                {st.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}