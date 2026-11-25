import React from "react";

const teamMembers = [
  {
    name: "Amir Khan",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    bio: "Amir Khan is the founder & CEO leading tech solutions and business growth strategies to drive continuous innovation.",
  },
  {
    name: "Sarah Patel",
    role: "Chief Strategy Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "Sarah Patel leads strategic growth and product direction to scale operations across global markets effectively.",
  },
  {
    name: "Ayaan Ahmed",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Ayaan Ahmed oversees operations to ensure smooth execution, quality deliverable management, and team alignment.",
  },
  {
    name: "Ayaan Ahmed",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Ayaan Ahmed oversees operations to ensure smooth execution, quality deliverable management, and team alignment.",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#fefefe] py-10 lg:py-16 border">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32">
        {/* Section Heading */}

        <h2 className="text-3xl mb-12 lg:mb-16 sm:text-4xl text-center font-extrabold text-gray-900 tracking-tight ">
          Meet the Minds Driving Commerio
        </h2>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl  text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
            >
              {/* Profile Image */}
              <div className=" h-96  w-full lg:h-64 2xl:h-[40rem] rounded-t-2xl mb-6  overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-[center_3%]"
                />
              </div>
              <div className="p-4">
                {/* Name & Role */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
