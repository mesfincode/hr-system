"use clinet"

import React from 'react'
import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
    const pathname = usePathname();

  return (
    <div className='hidden lg:block w-[350px] fixed top-0 bottom-0 left-0 bg-slate-100'>
       <div className='pt-1 m-4' >
       <div >
            UES PLC
        </div>
        <div>
        <div className="flex gap-3 flex-col pt-6">
                <Button

                    variant={pathname === "/dashboard/employee" ? "default" : "outline"} asChild>
                    <Link href="/dashboard/employee">
                        Employee
                    </Link>
                </Button>

                <Button

                    variant={pathname === "/dashboard/main-branch" ? "default" : "outline"} asChild>
                    <Link href="/dashboard/main-branch">
                        Main Branch
                    </Link>
                </Button>
                <Button

                    variant={pathname === "/dashboard/branch" ? "default" : "outline"} asChild>
                    <Link href="/dashboard/branch">
                        Branch
                    </Link>
                </Button>
                <Button

                    variant={pathname === "/dashboard/client" ? "default" : "outline"} asChild>
                    <Link href="/dashboard/client">
                        Client
                    </Link>
                </Button>
                <Button

variant={pathname === "/dashboard/super-admin" ? "default" : "outline"} asChild>
<Link href="/dashboard/super-admin">
    Super Admin
</Link>
</Button>

           
            </div>
        </div>
       </div>

    </div>
  )
}

export default SideBar
