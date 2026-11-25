import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import Contect from "./Pages/contect";
import AmazonPrivate from "./Pages/AmazonPrivate";
import PPCManagement from "./Pages/PpcManagement";
import LLD from "./Pages/LDD-Information";
import LLC from "./Pages/LLC-Information";
import Amazon from "./Pages/Amazon-PA-Wholesale";
import Tiktok from "./Pages/Tiktok-Shop";


export default function App() {
  const whatsappNumber =  "17868872630"; // Apna WhatsApp Number yahan likhein
  const defaultMessage = encodeURIComponent(
    "Hello! Mujhe aapki services ke bare me enquiry karni hai.",
  );

  return (
    <div className="font-sans bg-gray-50 text-gray-800 antialiased min-h-screen flex flex-col justify-between selection:bg-orange-500 selection:text-white relative">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contect />} />
          <Route
            path="/services/amazon-private-label-management"
            element={<AmazonPrivate />}
          />
          <Route path="/services/ppc-management" element={<PPCManagement />} />
          <Route path="/services/ltd-formation" element={<LLD />}/>
          <Route path="/services/llc-formation" element={<LLC />}/>
         <Route path="/services/amazon-FBA-wholesale" element={< Amazon />}/>
           <Route path="/services/tiktok-shop" element={< Tiktok />}/>






        </Routes>
      </main>

      {/* Floating WhatsApp Icon */}
      

<a
  href={`https://wa.me/${whatsappNumber}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className="fixed bottom-20 right-2 w-14 h-14 z-50 bg-[#25D366] hover:bg-[#20ba5a] p-2.5 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="60 60 335 335"
    className="w-full h-full object-contain"
  >
    <path
      fill="#FFFFFF"
      d="M68.494,387.41l22.323-79.284c-14.355-24.387-21.913-52.134-21.913-80.638 c0-87.765,71.402-159.167,159.167-159.167s159.166,71.402,159.166,159.167c0,87.765-71.401,159.167-159.166,159.167 c-27.347,0-54.125-7-77.814-20.292L68.494,387.41z M154.437,337.406l4.872,2.975c20.654,12.609,44.432,19.274,68.762,19.274 c72.877,0,132.166-59.29,132.166-132.167S300.948,95.321,228.071,95.321S95.904,154.611,95.904,227.488 c0,25.393,7.217,50.052,20.869,71.311l3.281,5.109l-12.855,45.658L154.437,337.406z"
    />
    <path
      fill="#FFFFFF"
      d="M183.359,153.407l-10.328-0.563c-3.244-0.177-6.426,0.907-8.878,3.037 c-5.007,4.348-13.013,12.754-15.472,23.708c-3.667,16.333,2,36.333,16.667,56.333c14.667,20,42,52,90.333,65.667 c15.575,4.404,27.827,1.435,37.28-4.612c7.487-4.789,12.648-12.476,14.508-21.166l1.649-7.702c0.524-2.448-0.719-4.932-2.993-5.98 l-34.905-16.089c-2.266-1.044-4.953-0.384-6.477,1.591l-13.703,17.764c-1.035,1.342-2.807,1.874-4.407,1.312 c-9.384-3.298-40.818-16.463-58.066-49.687c-0.748-1.441-0.562-3.19,0.499-4.419l13.096-15.15 c1.338-1.547,1.676-3.722,0.872-5.602l-15.046-35.201C187.187,154.774,185.392,153.518,183.359,153.407z"
    />
  </svg>
</a>

      <Footer />
    </div>
  );
}
