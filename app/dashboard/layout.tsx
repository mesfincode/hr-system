"use client"
import React, { Children, useState } from 'react'
import { Navbar } from './_components/navbar/navbar';
import SideBar from './_components/sidebar/sidebar';
interface ProtectedLayoutProps{
    children: React.ReactNode;
}

const ProtectedLayout = ({children}:ProtectedLayoutProps)=>{
        const [open, setOpen] = useState<boolean>(true);
  const toggleMenu = ()=>{
   setOpen(!open);
  }
    return (
    <div>
        <div className='lg:pl-[350px]'>
        <Navbar open={open} toggleMenu={toggleMenu}/>
        </div>
        <SideBar open={open} toggleMenu={toggleMenu}/>
        <div className={`${open?"lg:pl-[350px]":"lg:pl-[150px]"} pt-16 m-4`}>
        {children}
        </div>
    </div>
  )
}

export default ProtectedLayout
