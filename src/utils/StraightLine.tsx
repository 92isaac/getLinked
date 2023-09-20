import React from 'react'

interface LineProps {
    className: string
}

export const StraightLine:React.FC<LineProps> = ({className}) => {
  return (
    <div className={`w-1 bg-[#D434FE] ${className}`}>
        
    </div>
  )
}
