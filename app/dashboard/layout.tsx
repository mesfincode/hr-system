"use client"
import React, { Children } from 'react'
import { Navbar } from './_components/navbar/navbar';
import SideBar from './_components/sidebar/sidebar';
interface ProtectedLayoutProps{
    children: React.ReactNode;
}

const ProtectedLayout = ({children}:ProtectedLayoutProps)=>{
    return (
    <div>
        <div className='lg:pl-[350px]'>
        <Navbar/>
        </div>
        <SideBar/>
        <div className='lg:pl-[350px] pt-16'>
        {children}
        </div>
    </div>
  )
}

export default ProtectedLayout
