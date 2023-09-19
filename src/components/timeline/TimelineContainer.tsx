import React from 'react'
import { HeroSection } from './HeroSection'
import { BigIdea } from './BigIdea'

export const TimelineContainer:React.FC = () => {
  return (
    <div className='pt-32 text-white'>
        <HeroSection />
        <BigIdea />
    </div>
  )
}
