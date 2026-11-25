import React from 'react'
import AboutHero from "../components/AboutHeroSection"
import AboutCommerio from "../components/AboutCommerio"
import FoundingStory from '../components/FoundingStory'
import TeamSection from '../components/TeamSection'
import TransformSection from '../components/TransformSection'
import CtaBanner from '../components/CtaBanner'
import OurPartner from "../components/Ourpartners"


function About() {
  return (
    <div>
      <AboutHero/>
      <AboutCommerio/>
      <FoundingStory/>
      <TeamSection/>
      <TransformSection/>
      <OurPartner/>
      <CtaBanner/>
       </div>
  )
}

export default About