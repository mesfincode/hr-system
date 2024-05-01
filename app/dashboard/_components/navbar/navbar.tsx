"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = ({open,toggleMenu}: {open: boolean,toggleMenu:()=>void}) => {
    const pathname = usePathname();
    return (
        <div className={`fixed top-0 max-lg:w-full ${open?"lg:left-[350px]":"lg:left-[150px]"} right-0 bg-slate-100 h-16 justify-center items-center`}>
            <div className="flex w-full h-full justify-between lg:justify-end px-8 items-center">
            <div className="block lg:hidden cursor-pointer"><MenuIcon onClick={()=>toggleMenu()}/></div>
            <UserButton />
            {/* <div><input type="text" /></div> */}
            </div>

            
           
            
        </div>
    )
}