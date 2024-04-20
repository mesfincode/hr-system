"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className="bg-secondary w-full flex justify-between items-center  rounded-xl  shadow-sm px-16 py-4">
              <UserButton />
            <div className="flex gap-x-2">
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
    )
}