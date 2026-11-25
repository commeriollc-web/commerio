import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import GetStartedModal from "./GetStartedModal"; // Modal Import Kiya

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dropdownRef = useRef(null);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith("/services");

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold transition-colors"
      : "text-gray-300 hover:text-orange-500 transition-colors";

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "block text-orange-500 font-semibold py-1"
      : "block text-gray-300 hover:text-orange-500 font-medium py-1";

  return (
    <>
      <nav className="bg-[#0E121D] text-white sticky top-0 z-50 border-b border-gray-800">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32 py-1 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex space-x-2 items-center">
            <img
              src="/favicon_icon-removebg-preview.png"
              alt="Commerio Logo"
              className="h-16 w-auto object-contain"
            />
            <span className="font-bold text-xl tracking-wider text-white">
              COMMERIO
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            {/* Services Dropdown (Desktop) */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center space-x-1 group focus:outline-none transition-colors ${
                  isServicesActive ? "text-orange-500 font-semibold" : "text-gray-300 hover:text-orange-500"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen
                      ? "rotate-180 text-orange-500"
                      : "group-hover:translate-y-0.5"
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 mt-3 w-56 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl py-2 z-50 transition-all duration-200">
                  <NavLink
                    to="/services/amazon-private-label-management"
                    onClick={() => setIsServicesOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-xs transition-colors ${
                        isActive ? "text-orange-500 font-semibold" : "text-gray-300 hover:text-orange-500"
                      }`
                    }
                  >
                    Amazon Private Label Management
                  </NavLink>

                  <NavLink
                    to="/services/ppc-management"
                    onClick={() => setIsServicesOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-xs transition-colors ${
                        isActive ? "text-orange-500 font-semibold" : "text-gray-300 hover:text-orange-500"
                      }`
                    }
                  >
                    PPC Management
                  </NavLink>

                  <NavLink
                    to="/services/amazon-fba-wholesale"
                    onClick={() => setIsServicesOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-xs transition-colors ${
                        isActive ? "text-orange-500 font-semibold" : "text-gray-300 hover:text-orange-500"
                      }`
                    }
                  >
                    Amazon FBA Wholesale
                  </NavLink>

                  <NavLink
                    to="/services/tiktok-shop"
                    onClick={() => setIsServicesOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-xs transition-colors ${
                        isActive ? "text-orange-500 font-semibold" : "text-gray-300 hover:text-orange-500"
                      }`
                    }
                  >
                    TikTok Shop 
                  </NavLink>

                  <NavLink
                    to="/services/llc-formation"
                    onClick={() => setIsServicesOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-xs transition-colors ${
                        isActive ? "text-orange-500 font-semibold" : "text-gray-300 hover:text-orange-500"
                      }`
                    }
                  >
                    LLC formation 
                  </NavLink>

                  <NavLink
                    to="/services/ltd-formation"
                    onClick={() => setIsServicesOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-xs transition-colors ${
                        isActive ? "text-orange-500 font-semibold" : "text-gray-300 hover:text-orange-500"
                      }`
                    }
                  >
                    LTD Formation  
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 transition-all text-sm block cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950 border-b border-gray-800 px-4 pt-4 pb-6 space-y-3">
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              Home
            </NavLink>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full flex items-center justify-between py-1 font-medium transition-colors ${
                  isServicesActive ? "text-orange-500 font-semibold" : "text-gray-300 hover:text-orange-500"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-orange-500" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-zinc-800">
                  <NavLink
                    to="/services/amazon-private-label-management"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className={({ isActive }) =>
                      `block text-xs py-1 transition-colors ${
                        isActive ? "text-orange-500 font-semibold" : "text-gray-400 hover:text-orange-500"
                      }`
                    }
                  >
                    Amazon Private Label Management
                  </NavLink>

                  <NavLink
                    to="/services/ppc-management"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className={({ isActive }) =>
                      `block text-xs py-1 transition-colors ${
                        isActive ? "text-orange-500 font-semibold" : "text-gray-400 hover:text-orange-500"
                      }`
                    }
                  >
                    PPC Management
                  </NavLink>

                  <NavLink
                    to="/services/amazon-fba-wholesale"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className={({ isActive }) =>
                      `block text-xs py-1 transition-colors ${
                        isActive ? "text-orange-500 font-semibold" : "text-gray-400 hover:text-orange-500"
                      }`
                    }
                  >
                    Amazon FBA Wholesale
                  </NavLink>

                  <NavLink
                    to="/services/tiktok-shop"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className={({ isActive }) =>
                      `block text-xs py-1 transition-colors ${
                        isActive ? "text-orange-500 font-semibold" : "text-gray-400 hover:text-orange-500"
                      }`
                    }
                  >
                    TikTok Shop 
                  </NavLink>

                  <NavLink
                    to="/services/llc-formation"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className={({ isActive }) =>
                      `block text-xs py-1 transition-colors ${
                        isActive ? "text-orange-500 font-semibold" : "text-gray-400 hover:text-orange-500"
                      }`
                    }
                  >
                    LLC Formation 
                  </NavLink>

                  <NavLink
                    to="/services/ltd-formation"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className={({ isActive }) =>
                      `block text-xs py-1 transition-colors ${
                        isActive ? "text-orange-500 font-semibold" : "text-gray-400 hover:text-orange-500"
                      }`
                    }
                  >
                    LTD Formation  
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              Contact
            </NavLink>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full text-center mt-2 bg-orange-500 text-white font-semibold px-6 py-2.5 rounded-full text-sm block cursor-pointer"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Modal Reusable Call */}
      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}