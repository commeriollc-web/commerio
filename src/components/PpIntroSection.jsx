import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Rocket,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";

export default function AmazonPrivateLabelFullPage() {
  return (
    <div className="bg-[#fefefe]   ">
      {/* 1. TOP INTRO SECTION */}
      <section className="py-10 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32 ">
        <div className=" text-center space-y-4">
          {/* <p className=" text-base sm:text-xl font-medium leading-relaxed ">
            At Commerio, we weave success stories on Amazon by sculpting your
            private label into a standout brand.
          </p> */}
          <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
          Unleash the power of your PPC campaigns with Commerio's meticulous and results-driven PPC management service.

In the ever-evolving world of PPC, we bring a laid-back yet powerful approach to elevate your advertising game. Ready to transform your PPC spend into ROI gold? Knock on our door, and let's turn your brand into a standout success at the top-rated PPC agency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
          <div className="space-y-2">
            <h3 className="font-semibold  text-base">
            Performance focused</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
            Boost your campaigns with our performance focused approach, ensuring every dollar in your budget delivers efficient results.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold  text-base">Transparent reporting</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
            Our transparent reporting provides a clear breakdown of bid performance, revealing the impact on your ACOS and overall campaign success.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold  text-base">Risk-free trial</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
            Embark on your PPC journey risk-free with our limited-time PPC audit. Monitor progress, explore insights, and make informed decisions without any cost.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
