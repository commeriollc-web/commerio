import React from "react";
import HeroSection from "../components/ContectHeroSection";
import ContectSection from "../components/ContactSection";
import ConsultationSection from "../components/ConsultationSection";
import TransformSection from "../components/TransformSection";
import OurPartner from "../components/Ourpartners";
import CtaBanner from "../components/CtaBanner";

function contect() {
  return (
    <div>
      <HeroSection />
      <ContectSection />
      <ConsultationSection/>
      <TransformSection />
      <OurPartner />
      <CtaBanner />
    </div>
  );
}

export default contect;
