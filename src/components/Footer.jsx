import React from "react";
import { Link } from "react-router-dom";
import { Send, Link2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0E121D] text-gray-400 pt-10 sm:pt-12 md:pt-16 pb-8 border-t border-zinc-900 w-full">
      {/* Main Grid Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 max-w-[1920px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-10 border-b border-zinc-900">
        {/* Brand Info */}
        <div className="sm:col-span-2 lg:col-span-2 space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="/favicon_icon-removebg-preview.png"
              alt="Commerio Logo"
              className="h-14 sm:h-16 lg:h-20 2xl:h-24 w-auto object-contain"
            />
            <span className="font-bold text-lg sm:text-xl 2xl:text-2xl tracking-wider text-white">
              COMMERIO
            </span>
          </div>

          <p className="text-xs 2xl:text-sm text-gray-400 max-w-sm 2xl:max-w-md leading-relaxed">
            We help resellers and wholesalers build profitable Amazon businesses
            through expert management and proven strategies.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3 sm:space-x-4 pt-2">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1GNhe1xyf8/" // Admin Facebook Page URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Page"
              className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors text-gray-400"
            >
              <svg
                className="w-4 h-4 2xl:w-5 2xl:h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/commerio.co?stkn=Yjg2dWNkdXQxZ3Rw" // Admin Instagram Profile URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors text-gray-400"
            >
              <svg
                className="w-4 h-4 2xl:w-5 2xl:h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/commerio-llc/" // Admin LinkedIn Page URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors text-gray-400"
            >
              <svg
                className="w-4 h-4 2xl:w-5 2xl:h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* tik-tok */}
            <a
  href="https://www.tiktok.com/@commerio_llc?_r=1&_t=ZS-99ujgn26zx7" // Yahan apna TikTok profile link daalein
  target="_blank"
  rel="noopener noreferrer"
  aria-label="TikTok Profile"
  className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors text-gray-400"
>
  <svg
    className="w-4 h-4 2xl:w-5 2xl:h-5 fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.31 1.56-1.28 2.55.02.82.42 1.62 1.08 2.11.7.53 1.63.7 2.48.51 1.01-.22 1.87-.99 2.18-1.98.13-.48.16-.98.16-1.48V.02z" />
  </svg>
</a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@commerio-co?si=laSYwo4-Kbb3s3E_" // Admin YouTube Channel URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors text-gray-400"
            >
              <svg
                className="w-4 h-4 2xl:w-5 2xl:h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm sm:text-md 2xl:text-lg">
            {" "}
            Quick Links{" "}
          </h4>
          <ul className="space-y-2 text-xs 2xl:text-sm">
            <li>
              <Link
                to="/home"
                className="hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-orange-500 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-orange-500 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/why"
                className="hover:text-orange-500 transition-colors"
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-orange-500 transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-orange-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm sm:text-md 2xl:text-lg">
            Services
          </h4>
          <ul className="space-y-2 text-xs 2xl:text-sm">
            <li>
              <Link
                to="/services/amazon-private-label-management"
                className="hover:text-orange-500 transition-colors"
              >
                Amazon Private Label Management
              </Link>
            </li>
            <li>
              <Link
                to="/services/ppc-management"
                className="hover:text-orange-500 transition-colors"
              >
                PPC Management
              </Link>
            </li>

            <li>
              <Link
                to="/services/amazon-fba-wholesale"
                className="hover:text-orange-500 transition-colors"
              >
                Amazon FBA Wholesale
              </Link>
            </li>
            <li>
              <Link
                to="/services/tiktok-shop"
                className="hover:text-orange-500 transition-colors"
              >
                Tiktok Shop
              </Link>
            </li>
            <li>
              <Link
                to="/services/llc-formation "
                className="hover:text-orange-500 transition-colors"
              >
                LLC Formation
              </Link>
            </li>
            <li>
              <Link
                to="/services/ltd-Formation  "
                className="hover:text-orange-500 transition-colors"
              >
                LTD Formation
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-3 sm:col-span-2 lg:col-span-1">
          <h4 className="text-white font-bold text-sm sm:text-md 2xl:text-lg">
            Newsletter
          </h4>
          <p className="text-xs 2xl:text-sm text-gray-400">
            Subscribe for updates.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-2 max-w-xs sm:max-w-none"
          >
            <input
              type="email"
              placeholder="Enter email"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs 2xl:text-sm text-white focus:outline-none focus:border-orange-500"
            />
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg text-xs 2xl:text-sm transition-colors flex items-center justify-center space-x-1">
              <span>Subscribe</span>
              <Send size={12} className="2xl:w-4 2xl:h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-center text-xs 2xl:text-sm text-gray-500">
        © 2026 Commerio. All rights reserved.
      </div>
    </footer>
  );
}
