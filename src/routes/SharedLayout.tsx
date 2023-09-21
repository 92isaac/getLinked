import React from 'react'
import { Outlet } from "react-router-dom";
import { Navbar } from '../components/navigation/Navbar';


const SharedLayout:React.FC = () => {
  return (
    <div className='bg-[#150E28] min-h-screen'>
        <Navbar />
        <main className='pt-32 text-white'>
        <Outlet/>
        </main>
    </div>
  )
}

export default SharedLayout