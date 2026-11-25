import React from "react";
import Hero from "../components/WalmartManagementHero";
import WelmartIntroSection from "../components/WelmartIntroSection";
import WelmartTrusted from "../components/WelmartTrusted";
import WelmartGrid from "../components/WelmartGrid";
import WelmartManigmint from "../components/WelmartManigmint";
import WelmartChose from "../components/WelmartChose";
import Testimonials from "../components/Testimonials";

function WalmartManagement() {
  return (
    <div>
      <Hero />
      <WelmartIntroSection />
      <WelmartTrusted />
      <WelmartGrid />
      <WelmartManigmint />
      <WelmartChose />
      {/* <Testimonials /> */}
    </div>
  );
}

export default WalmartManagement;
