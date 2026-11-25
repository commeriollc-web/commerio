import React from "react";
import { Network, Cpu, Layers, GitBranch } from "lucide-react";

const WholesaleIntro = () => {
  return (
    <div className="bg-[#fefefe]">
      <section className="py-10 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32 ">
        <div className=" text-center space-y-4">
          <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            A Logical Data Diagram (LTD) forms the essential structural
            blueprint for complex software architectures. Commerio designs
            scalable entity models that bridge business requirements with robust
            database schemas.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
          <div className="space-y-2">
            <Network className="text-orange-500 w-8 h-8 mb-4" />
            <h3 className="font-semibold  text-base">
              Entity Relationship Mapping
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Clean visual and structural mapping of business entities and
              dependencies.{" "}
            </p>
          </div>
          <div className="space-y-2">
            <Cpu className="text-orange-500 w-8 h-8 mb-4" />

            <h3 className="font-semibold  text-base">Database Optimization</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Designing queries and data paths to handle enterprise workloads
              with ease.{" "}
            </p>
          </div>
          <div className="space-y-2">
            <GitBranch className="text-orange-500 w-8 h-8 mb-4" />

            <h3 className="font-semibold  text-base">Operating Agreement</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Flexible architectures that allow smooth future migrations and
              features.{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WholesaleIntro;
