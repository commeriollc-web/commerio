import React, { useState } from "react";
import LLCHero from "../components/LlcHero";
import LLCIntroSection from "../components/LLCIntroSection";
import LLCtrusted from "../components/LLCtrusted";
import LLCManigmint from "../components/LLCManigmint";
import LLCChose from "../components/LLCChose";
import Testimonials from "../components/Testimonials";

const LLC_Information = () => {
  return (
    <div className="">
      <LLCHero />
      <LLCIntroSection />

      <LLCtrusted />

      <LLCManigmint />
      <LLCChose />

      <Testimonials />
    </div>
  );
};

export default LLC_Information;
