// "use client"

import { logout } from "@/actions/logout";

// import { cookies } from "next/headers";

// import { logout } from "@/actions/logout";
// import { Cookie } from 'universal-cookie';
import { useRouter } from "next/navigation";

interface LogoutButtonProps{
    children?: React.ReactNode
}

export const LogoutButton = ({children}:LogoutButtonProps)=>{
    const router = useRouter();

   const onClick = ()=>{
    // logout();
    // const cookieVal = cookies().get("session_token")?.value;
    // cookies().delete("session_token");
      logout();
    localStorage.clear();

    router.push("/auth/login");

   }

   return (
    <span onClick ={onClick} className="cursor-pointer">
        {children}
    </span>
   )
}