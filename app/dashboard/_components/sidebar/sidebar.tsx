"use clinet"

import React, { useState } from 'react'
import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HomeIcon, MenuIcon } from 'lucide-react';
import { MdOutlineClose } from "react-icons/md";
import { DashboardIcon, PersonIcon } from '@radix-ui/react-icons';

const SideBar = ({ open, toggleMenu }: { open: boolean, toggleMenu: () => void }) => {
    const pathname = usePathname();
    return (
        <>
            {
                open ?
                    <>
                        <div className='hidden lg:block w-[350px] fixed top-0 bottom-0 left-0 bg-slate-200 '>
                            <div className=' m-4' >
                                <div className=' flex justify-between' >
                                    <a href="">UES PLC </a>
                                    <MenuIcon onClick={() => toggleMenu()} className='cursor-pointer' />
                                </div>
                                <MenuComponent />
                            </div>

                        </div>

                        <div className='block lg:hidden w-[350px] z-50 fixed top-0 bottom-0 left-0 bg-slate-200 '>
                            <div className=' m-4' >
                                <div className=' flex justify-between' >
                                    <a href="">UES PLC </a>
                                    <MdOutlineClose onClick={() => toggleMenu()} className='cursor-pointer' />
                                </div>
                                <MenuComponent />

                            </div>

                        </div>
                    </> : <>
                        <div className='hidden lg:block w-[150px] fixed top-0 bottom-0 left-0 bg-slate-200'>
                            <div className=' m-4' >
                                <div className=' flex justify-between' >
                                    <a href="">UES PLC </a>
                                    <MenuIcon onClick={() => toggleMenu()} className='cursor-pointer' />
                                </div>
                                <MenuComponent />

                            </div>

                        </div>
                    </>
            }
        </>
    )
}

const LinkComponent = ({path,name,active,icon}:{path:string,name:string,active:boolean ,icon: React.ReactNode}) => {
    const route = useRouter()

return (
    <>
      <div onClick={()=>route.push(path)} className={`flex gap-4 items-center w-full cursor-pointer border-4 p-2  ${active?"bg-slate-400":""}`}>
       {icon}  {name}
      </div>
    </>
)
}
const MenuComponent = () => {
    const pathname = usePathname();
    return (
        <>
            <div>
                <div className="flex gap-3 flex-col pt-6">
                    <LinkComponent name={"Home"} active={pathname === "/dashboard"} path='/dashboard' icon={<HomeIcon/>}/>
                    <LinkComponent name={"Management"} active={pathname === "/dashboard/management" }  path='/dashboard/management' icon={<DashboardIcon/>}/>

                    <LinkComponent name={"Finance"} active={pathname === "/dashboard/finance" }  path='/dashboard/finance' icon={<PersonIcon/>}/>

                    <LinkComponent name={"Operation"} active={pathname === "/dashboard/operation" }  path='/dashboard/operation' icon={<PersonIcon/>}/>

                    <LinkComponent name={"Supervisors"} active={pathname === "/dashboard/supervisor" }  path='/dashboard/supervisor' icon={<PersonIcon/>}/>
                    <LinkComponent name={"Client"} active={pathname === "/dashboard/client" }  path='/dashboard/client' icon={<PersonIcon/>}/>
                    <LinkComponent name={"Branch"} active={pathname === "/dashboard/branch" }  path='/dashboard/branch' icon={<PersonIcon/>}/>
                    <LinkComponent name={"Employee"} active={pathname === "/dashboard/employee" }  path='/dashboard/employee' icon={<PersonIcon/>}/>
                

{/* 
                    <Button

                        variant={pathname === "/dashboard/employee" ? "default" : "ghost"} asChild>
                        <Link href="/dashboard/employee">
                            Employee
                        </Link>
                    </Button>

                    <Button

                        variant={pathname === "/dashboard/main-branch" ? "default" : "ghost"} asChild>
                        <Link href="/dashboard/main-branch">
                            Main Branch
                        </Link>
                    </Button>
                    <Button

                        variant={pathname === "/dashboard/branch" ? "default" : "ghost"} asChild>
                        <Link href="/dashboard/branch">
                            Branch
                        </Link>
                    </Button>
                    <Button

                        variant={pathname === "/dashboard/client" ? "default" : "ghost"} asChild>
                        <Link href="/dashboard/client">
                            Client
                        </Link>
                    </Button>
                    <Button

                        variant={pathname === "/dashboard/super-admin" ? "default" : "ghost"} asChild>
                        <Link href="/dashboard/super-admin">
                            Super Admin
                        </Link>
                    </Button> */}


                </div>
            </div>
        </>
    )
}





export default SideBar
