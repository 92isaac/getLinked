import React from 'react'


interface RadialProps {
    classes: string
}

export const Radial:React.FC<RadialProps> = ({classes}) => {
  return (
    <div className={`w-32 h-32 bg-gradient-to-br from-purple-700 via-purple-800 to-gray-800 absolute1 ${classes}`}>

    </div>
  )
}
