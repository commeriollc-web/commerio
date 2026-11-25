import React from 'react'

function GridSection() {
  return (
    <section className="py-10 bg-[#fefefe] lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32 ">
        <div className="text-center space-y-2 mb-10">
          <p className="text-orange-600 font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-widest rounded-full mb-6 ">Partner with precision</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-gray-900 leading-tight">
            Why choose Commerio for your Amazon journey
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-200 hover:border-orange-500/50 transition-all bg-white shadow-sm space-y-3">
            <h3 className="font-semibold  text-base">Brand-focused approach</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We cook up a strategy that fits your brand like a glove, ensuring every detail aligns perfectly with your vision.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl border border-zinc-200 hover:border-orange-500/50 transition-all bg-white shadow-sm space-y-3">
            <h3 className="font-semibold  text-base">End-to-end management</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              From the initial idea to the buzz of the launch day, we smooth out the journey.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 hover:border-orange-500/50 transition-all bg-white shadow-sm space-y-3">
            <h3 className="font-semibold  text-base">Proven planning approach</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Witness the impact of data-driven strategies and history of elevating brands on Amazon.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 hover:border-orange-500/50 transition-all bg-white shadow-sm space-y-3">
            <h3 className="font-semibold  text-base">Comprehensive support</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Experience seamless support at every phase, from initial consultation to ongoing optimization.
            </p>
          </div>
        </div>
      </section>
  )
}

export default GridSection