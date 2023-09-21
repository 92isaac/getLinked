import React from 'react'
import { Navbar } from '../components/navigation/Navbar'
import { TimelineContainer } from '../components/timeline/TimelineContainer'

const Timeline:React.FC = () => {
  return (
    <div className='bg-[#150E28] min-h-screen'>
       <Navbar />
        <TimelineContainer />
    </div>
  )
}

export default Timeline