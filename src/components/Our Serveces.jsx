import React from 'react';
import { Search, UserCheck, Package, ShoppingCart, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // React Router Link import kiya

export default function ServicesSection() {

  const services = [
    { icon: <Search size={28} />, link: "/services/amazon-private-label-management", title: "Amazon Private Label Management", desc: "Find high-profit, low competition products that sell consistently." },
    { icon: <UserCheck size={28} />, link: "/services/ppc-management", title: "PPC Management", desc: "Daily account handling and performance monitoring." },
    { icon: <Package size={28} />, link: "/services/amazon-ppa-wholesale", title: "Amazon PA Wholesale", desc: "Stock planning, shipment creation & inventory replenishment." },
    { icon: <ShoppingCart size={28} />, link: "/services/tiktok-shop", title: "TikTok Shop", desc: "Order fulfillment, tracking & customer service management." },
    { icon: <DollarSign size={28} />, link: "/services/llc-information", title: "LLC Information", desc: "Buy Box strategies and pricing optimization for maximum profits." },
    { icon: <DollarSign size={28} />, link: "/services/lld-information", title: "LDD Information", desc: "Buy Box strategies and pricing optimization for maximum profits." },
  ];

  return (
    <section id="services" className="pb-12 scroll-mt-24 sm:pb-16 md:pb-20 2xl:pb-28 bg-[#FEFEFE] w-full">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl 2xl:max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14 space-y-2 sm:space-y-3">
          <span className="text-orange-600 font-bold text-xs sm:text-sm 2xl:text-base uppercase tracking-widest rounded-full">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-gray-900 leading-tight">
            Complete Amazon Reseller Solutions
          </h2>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 2xl:gap-8">
          {services.map((srv, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-5 sm:p-6 2xl:p-8 border border-gray-100 hover:border-orange-500/30 hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-orange-500 group-hover:text-white transition-colors shrink-0">
                  {srv.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base 2xl:text-lg mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs 2xl:text-sm text-gray-500 leading-relaxed mb-4">
                  {srv.desc}
                </p>
              </div>

              {/* <a> tag ko <Link> se replace kiya aur path fixing ki */}
              <Link 
                to={srv.link} 
                className="text-xs 2xl:text-sm font-bold text-orange-600 flex items-center space-x-1 group-hover:translate-x-1 transition-transform pt-2"
              >
                <span>Learn More</span>
                <ArrowRight size={14} className="2xl:w-4 2xl:h-4" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}





