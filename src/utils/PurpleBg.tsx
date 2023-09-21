import React from 'react'
import { radial } from '../assets/images'


interface Radial {
    className: string
}

export const PurpleBg:React.FC<Radial> = ({className}) => {
  return (
    <div className={className}>
        <img src={radial} alt="" className='object-cover w-full'/>
    </div>
  )
}
