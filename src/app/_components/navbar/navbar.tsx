"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className="fixed top-0 max-lg:w-full lg:left-[350px] right-0 bg-slate-100 h-16 justify-center items-center">
            <div className="flex w-full h-full justify-end px-8 items-center">
            <UserButton />
            {/* <div><input type="text" /></div> */}
            </div>

            
           
            
        </div>
    )
}