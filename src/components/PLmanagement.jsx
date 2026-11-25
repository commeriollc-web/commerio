import React from 'react'

function PLmanagement() {
  return (
    <section className="py-10   px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32  bg-zinc-100 rounded-3xl  border border-zinc-200">
    <div className="max-w-3xl space-y-3 mb-10">
      <span className="text-orange-600 font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-widest rounded-full mb-6">Your brand our expertise</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-gray-900 leading-tight">
        Navigate Amazon PL management with Commerio
      </h2>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        Commerio can help you building and growing your own brand on the world's largest ecommerce platform. We take the time to understand your brand identity, target audience, and unique selling propositions.
      </p>
    </div>

    <div className="space-y-3">
      <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
        <h3 className="font-semibold  text-base mb-1">Market insights</h3>
        <p className="text-gray-700 text-md leading-relaxed">We initiate with a thorough market analysis, forming a robust strategy foundation.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm">
        <h3 className="font-semibold  text-base mb-1">Product selection</h3>
        <p className="text-gray-700 text-md leading-relaxed">Selecting the right product is crucial. We combine market insights and manufacturing feasibility.</p>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm">
        <h3 className="font-semibold  text-base mb-1">Launch and growth</h3>
        <p className="text-gray-700 text-md leading-relaxed">Launch your brand on Amazon with precision, ensuring a successful start and continuous growth.</p>
      </div>
    </div>
  </section>
  )
}

export default PLmanagement