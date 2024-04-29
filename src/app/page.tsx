// import ECommerce from "@/components/Dashboard/E-commerce";
// import { Metadata } from "next";
// import DefaultLayout from "@/components/Layouts/DefaultLayout";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title:
//     "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
//   description: "This is Next.js Home for TailAdmin Dashboard Template",
// };

// export default function Home() {
//   return (
//     <>
//       <DefaultLayout>
//       <div className="flex justify-center items-center  w-full min-h-screen flex-col">
//         <h1 className="text-8xl font-bold">Welcome to HR system</h1>
//          <Link href={"/dashboard"}>
//            <Button className="bg-black hover:bg-black-2 text-white" size="lg">
//               Home
//            </Button>
//         </Link>
//        </div>
//       </DefaultLayout>
//     </>
//   );
// }
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
       <div className="flex justify-center items-center  w-full min-h-screen flex-col">
        <h1 className="text-8xl font-bold">Welcome to HR system</h1>
         <Link href={"/dashboard"}>
           <Button className="bg-black hover:bg-black-2 text-white" size="lg">
              Home
           </Button>
        </Link>
       </div>
  );
}
