import React from 'react'
import Hero from "../components/AmazonPrivateHero"
import IntroSection from "../components/AmazonIntroSection"
import TrustBannerSection from '../components/TrustBannerSection'
import GridSection from "../components/GridSection"
import PLmanagement from '../components/PLmanagement'
import Whychoose from '../components/Whychoose'
import Testimonials from "../components/Testimonials"

function AmazonPrivate() {
  return (
    <div>
        <Hero/>
        <IntroSection/>
        <TrustBannerSection/>
        <GridSection/>
        <PLmanagement/>
        <Whychoose/>
        <Testimonials/>
    </div>
  )
}

export default AmazonPrivate 