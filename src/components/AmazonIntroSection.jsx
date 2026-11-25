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
          <p className=" text-base sm:text-xl font-medium leading-relaxed ">
            At Commerio, we weave success stories on Amazon by sculpting your
            private label into a standout brand.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            In a cluttered ecommerce world, our experts navigate the Amazon
            landscape with finesse, ensuring your brand identity shines. From
            meticulous product selection to a captivating brand launch, we're
            your partner in every step of the journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
          <div className="space-y-2">
            <h3 className="font-semibold  text-base">Market mastery</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Your brand deserves to stand out. With market mastery, we decipher
              trends and insights, ensuring your private label thrives in the
              competitive Amazon marketplace.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold  text-base">Product precision</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Precision is key. We guide you in selecting ideal products,
              validating demand, and ensuring manufacturing feasibility for a
              seamless product journey.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold  text-base">Brand building</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Craft a brand that resonates. From logo design to packaging
              aesthetics, we collaborate on building a distinctive brand
              identity that captivates your target audience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
