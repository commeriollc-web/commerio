import React from "react";
import Hero from "../components/PpcManagement";
import PpIntroSection from "../components/PpIntroSection";
import PChose from "../components/PpChose";
import PManigmint from "../components/PpManigmint";
import PGrid from "../components/PpGrid";
import PTrusted from "../components/PpTrusted";
import Testimonials from "../components/Testimonials";

function PpcManagement() {
  return (
    <div>
      <Hero />
      <PpIntroSection />
      <PTrusted />
      <PGrid />
      <PManigmint />
      <PChose />
      <Testimonials />
    </div>
  );
}

export default PpcManagement;
