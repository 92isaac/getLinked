import React from 'react'

interface Millestone {
    content: string
    className: string
    smallCircle: string
    bigCircle: string
}

export const Millestone:React.FC<Millestone> = ({content, className, smallCircle, bigCircle}) => {
  return (
<div className={`flex justify-center items-center ${className}`}>
  <div className={`${bigCircle} bg-[#2e2053] rounded-full flex justify-center items-center relative`}>
    <div className="absolute">
      <div className={`${smallCircle} bg-[#D434FE] rounded-full flex justify-center items-center`}>
      {content}
      </div>
    </div>
  </div>
</div>
  )
}
