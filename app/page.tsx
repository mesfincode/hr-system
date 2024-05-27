// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//        <div className="flex justify-center items-center  w-full min-h-screen flex-col">
//         <h1 className="text-8xl font-bold">Welcome to HR system</h1>
//          <Link href={"/dashboard"}>
//            <Button size="lg">
//               Home
//            </Button>
//         </Link>
//        </div>
//   );
// }
import Advertisement from "@/components/landing/Advertisement";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HumanCapital from "@/components/landing/HumanCapital";
import MobileNavbar from "@/components/landing/MobileNavbar";
import Navbar from "@/components/landing/Navbar";
import PaymentPlans from "@/components/landing/PaymentPlans";
import SecurityServiceCards from "@/components/landing/SecurityServiceCards";
import ServiceTypes from "@/components/landing/ServiceTypes";
import TechnologyComponent from "@/components/landing/TechnologyComponent";
import InclinedBorderComponent from "@/components/landing/test";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" text-darkbluegray bg-verydarkblue text-textdarkblue ">
      <div className=" md:px-44 ">
       <div className="hidden md:block"><Navbar/></div>
       <div className="block md:hidden"><MobileNavbar/></div>
       <div id="hero">
          <HeroSection />
        </div>
      </div>

      <div className="  ">
        <InclinedBorderComponent />
      </div>
    
      <div className="top-56 bg-verylightblue " id="services">
        <SecurityServiceCards />
        <Advertisement />
      </div>
       
      <div className="bg-gradient-to-b from-verylightblue to-white" id="technology">
        <TechnologyComponent />
      </div>
       
      <div className=" z-50" id="service-types">
        <ServiceTypes />
      </div>
     
      <div className=" mt-18 bg-verylightblue" id="human-capital">
        <HumanCapital />
        
      </div>
      
      <div className=" " id="payment-plans">
        <PaymentPlans />
        
      </div>
      
      <div className="mt-20 " id="footer">
        <Footer />
        
      </div> 
    </div>
  );
}
