import React from 'react'
import { HeroSection } from './HeroSection'
import { BigIdea } from './BigIdea'
import { RulesAndRegulation } from './RulesAndRegulation'
import { Criteria } from './Criteria'
import { Faqs } from './Faqs'

export const TimelineContainer:React.FC = () => {
  return (
    <div className='pt-32 text-white'>
        <HeroSection />
        <BigIdea />
        <RulesAndRegulation />
        <Criteria />
        <Faqs />
    </div>
  )
}
