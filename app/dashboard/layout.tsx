import React, { Children } from 'react'
import { Navbar } from './_components/navbar/navbar';
interface ProtectedLayoutProps{
    children: React.ReactNode;
}

const ProtectedLayout = ({children}:ProtectedLayoutProps)=>{
    return (
    <div>
        <Navbar/>
      {children}
    </div>
  )
}

export default ProtectedLayout
