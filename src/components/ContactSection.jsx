// import React from "react";
// import { MapPin, Mail } from "lucide-react";

// export default function ContactSection() {
//   return (
//     <section className="w-full bg-[#fefefe] py-10 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 2xl:px-32">
//       <div className=" grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
//         {/* Left Side: Info Card */}
//         <div className="lg:col-span-6 bg-[#F8F5EE] rounded-2xl p-8 sm:p-10 flex flex-col justify-center space-y-6">
//           {/* Head Office Info */}
//           <div className="flex items-center space-x-4">
//             <div className="w-12 h-12 rounded-xl bg-[#E86D1F] flex items-center justify-center shrink-0 shadow-sm">
//               <MapPin className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <h4 className="font-bold text-gray-900 text-base">Head Office</h4>
//               <p className="text-sm text-gray-600">Karachi - Pakistan</p>
//             </div>
//           </div>

//           {/* Email Info */}
//           <div className="flex items-center space-x-4">
//             <div className="w-12 h-12 rounded-xl bg-[#E86D1F] flex items-center justify-center shrink-0 shadow-sm">
//               <Mail className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <h4 className="font-bold text-gray-900 text-base">Email Us</h4>
//               <p className="text-sm text-gray-600">info@ventures.co</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Form Card */}
//         <div className="lg:col-span-6 bg-[#0E121D] border border-gray-100 rounded-2xl p-6 sm:p-10 shadow-sm">
//           <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 tracking-tight mb-3">
//             Send us a message
//           </h2>
          
//           <div className="text-white text-xs sm:text-sm leading-relaxed space-y-3 mb-6">
//             <p>
//               Connecting with us is the first step toward unlocking solutions crafted for your needs
//             </p>
//             <p>
//               Find answers, or simply have a more general chat about our solutions. Feel free to reach out - we're here to answer your queries and provide assistance, turn your ideas into reality. Your journey with us starts with a simple "hello!"
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full px-4 py-3 rounded-lg  text-sm text-gray-900 focus:outline-none transition"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-4 py-3 rounded-lg  text-sm text-gray-900 focus:outline-none transition"
//               />
//             </div>


//             <input
//               type="text"
//               placeholder="Subject"
//               className="w-full px-4 py-3 rounded-lg  text-sm text-gray-900 focus:outline-none  transition"
//             />

//             <textarea
//               rows="4"
//               placeholder="Message"
//               className="w-full px-4 py-3 rounded-lg  text-sm text-gray-900 focus:outline-none  transition resize-y"
//             ></textarea>

//             <button
//               type="submit"
//               className="bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-lg transition duration-200 shadow-sm"
//             >
//               Contact form
//             </button>
//           </form>
//         </div>

//       </div>
//     </section>
//   );
// }





import React from "react";
import { MapPin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#fefefe] py-10 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 2xl:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        <div className="lg:col-span-6  rounded-2xl    overflow-hidden ">
          
        

        <div className="w-full h-full">
  <iframe
    title="Head Office Location"
    src="https://www.google.com/maps?q=Plot%20No%20398%20Service%20Rd%20E%2C%20I-9%2F3%2C%20Islamabad%2C%2044000&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className=""
  ></iframe>
</div>


        </div>

        {/* Right Side: Form Card */}
        <div className="lg:col-span-6 bg-[#0E121D] border border-gray-100 rounded-2xl p-6 sm:p-10 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 tracking-tight mb-3">
            Send us a message
          </h2>
          
          <div className="text-white text-xs sm:text-sm leading-relaxed space-y-3 mb-6">
            <p>
              Connecting with us is the first step toward unlocking solutions crafted for your needs
            </p>
            <p>
              Find answers, or simply have a more general chat about our solutions. Feel free to reach out - we're here to answer your queries and provide assistance, turn your ideas into reality. Your journey with us starts with a simple "hello!"
            </p>
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg text-sm text-gray-900 focus:outline-none transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg text-sm text-gray-900 focus:outline-none transition"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg text-sm text-gray-900 focus:outline-none transition"
            />

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full px-4 py-3 rounded-lg text-sm text-gray-900 focus:outline-none transition resize-y"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-lg transition duration-200 shadow-sm"
            >
              Contact form
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}