import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../../utils/Button'
import { CgMenuLeft } from 'react-icons/cg'

export const Navbar:React.FC = () => {
  return (
    <nav className='fixed px-5 md:px-20 flex justify-between items-center w-full bg-[#150E28] text-white py-6 border-b-[1px] border-[#2e2053] mx-auto z-50'>
        <Link to='/' className='class-display font-bold text-2xl'>get<span className='text-[#d434fe]'>linked</span></Link>

    <div className='hidden md:flex justify-between items-center text-sm'>
    <ul className='flex justify-between items-center gap-12'>
           {navItems.map((item)=>(
             <li key={item.id}>
             <NavLink to='/' className='font-[Montserrat]' >{item.name}</NavLink>
         </li>
           ))}
        </ul>
        <Button title='Register' className='ml-10' OnClick/>
    </div>
    <div className='block md:hidden'>
        <CgMenuLeft className='text-lg inline-block text-white' />
    </div>
    </nav>
  )
}


const navItems= [
    {
        id:'1',
        name: 'Timeline',
        path:'/',
    },
    {
        id:'2',
        name: 'Overview',
        path:'/overview',
    },
    {
        id:'3',
        name: 'FAQs',
        path:'/faqs',
    },
    {
        id:'4',
        name: 'Contact',
        path:'/contact',
    },
]