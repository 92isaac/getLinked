/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface ButtonProps{
    title: string;
    className: string;
    OnClick: any | null;
}

export const Button:React.FC<ButtonProps> = ({className, title, OnClick}) => {
  return (
    <div>
        <button className={`border-0 text-white px-5 py-1.5 rounded-sm bg-gradient-to-br from-[#d434fe] to-[#903aff] hover:from-[#903aff] hover:to-[#d434fe] ${className}`} onClick={OnClick} type='button'>{title}</button>
    </div>
  )
}
