import React from 'react'

interface CountdownProps {
    className: string
}

export const Countdowm:React.FC<CountdownProps> = ({className}) => {
  return (
    <div className={`flex ${className} items-center`}>
        <div className="flex montserrat justify-between items-center gap-4 text-4xl">
            <h1 className='unica'>00<small className='text-[10px]'>H</small></h1>
            <h1 className='unica'>00<small className='text-[10px]'>M</small></h1>
            <h1 className='unica'>00<small className='text-[10px]'>S</small></h1>
        </div>
    </div>
  )
}
