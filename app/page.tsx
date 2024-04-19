import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
       <div className="flex justify-center items-center  w-full min-h-screen flex-col  bg-slate-300">
        <h1 className="text-8xl font-bold">Welcome to HR system</h1>
         <Link href={"/auth/login"}>
           <Button size="lg">
              Home
           </Button>
        </Link>
       </div>
  );
}
