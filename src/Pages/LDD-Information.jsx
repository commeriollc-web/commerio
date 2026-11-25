import React, { useState } from "react";
import LDDHero from "../components/LddHero";
import LDDIntroSection from "../components/LDDIntroSection";
import LDDtrusted from "../components/LDDtrusted";
import LDDManigmint from "../components/LDDManigmint";
import LDDChose from "../components/LDDChose";
import Testimonials from "../components/Testimonials";

const LDDInformation = () => {
  return (
    <div className="">
      <LDDHero />

      <LDDIntroSection />

      <LDDtrusted />

      <LDDManigmint />

      <LDDChose />
      <Testimonials />
    </div>
  );
};

export default LDDInformation;
