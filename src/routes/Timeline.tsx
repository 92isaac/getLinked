import React from 'react'
import { Navbar } from '../components/navigation/Navbar'
import { TimelineContainer } from '../components/timeline/TimelineContainer'

const Timeline:React.FC = () => {
  return (
    <div className='bg-[#150E28] min-h-screen'>
    {/* <div className='bg-gradient-to-r from-[#150E28] from-5% via-[#ab72f6] via-30% to-[#150E28] to-40% min-h-screen'> */}
       <Navbar />
        <TimelineContainer />
    </div>
  )
}

export default Timeline