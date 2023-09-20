import React from 'react'
import { HeroSection } from './HeroSection'
import { BigIdea } from './BigIdea'
import { RulesAndRegulation } from './RulesAndRegulation'
import { Criteria } from './Criteria'
import { Faqs } from './Faqs'
import { PriceAndReward } from './PriceAndReward'
import { EventTimeline } from './EventTimeline'
import { PartnersAndSponsors } from './PartnersAndSponsors'
import { PrivacyPolicyAndTerms } from './PrivacyPolicyAndTerms'
import { Footer } from './Footer'

export const TimelineContainer:React.FC = () => {
  return (
    <div className='pt-32 text-white'>
        <HeroSection />
        <BigIdea />
        <RulesAndRegulation />
        <Criteria />
        <Faqs />
        <EventTimeline />
        <PriceAndReward />
        <PartnersAndSponsors />
        <PrivacyPolicyAndTerms />
        <Footer />
    </div>
  )
}
