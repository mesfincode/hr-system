'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiArrowBack, BiArrowFromLeft, BiArrowFromTop, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsArrow90DegDown } from "react-icons/bs";


const Navbar = () => {

    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleServices = () => {
      setIsServicesOpen(!isServicesOpen);
    };

    return (
      <nav className="flex items-center justify-between px-6 py-4 bg-transparent  ">
        <ul className="flex space-x-8 mt-4">
          <Link href="/">
            <li className="-mt-3">
              <Image
                src="/logo.png"
                width={62}
                height={52}
                alt="Security Agency Logo"
              />
            </li>
          </Link>
          <li className="hover:text-lightbluegray">
            {/* <Link href="#hero">Home</Link> */}
            <Link href="/">Home</Link>
          </li>
         
           <li className="hover:text-lightbluegray">
            <Link href="#human-capital">About</Link>
          </li>
           <li className="hover:text-lightbluegray">
            <Link href="#services">Clients</Link>
          </li>
           <li className="hover:text-lightbluegray">
            <Link href="#payment-plans">Get a Quote</Link>
          </li>
          <li
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              onClick={toggleServices}
              className={`focus:outline-none ${isServicesOpen && 'text-lightbluegray'} `}
            >
             Services {isServicesOpen ? <BiChevronUp className="inline-block ml-1"/> : <BiChevronDown className="inline-block ml-1"/>}  
            </button>
            {isServicesOpen && (
              <ul className="mt-2 fixed space-y-2  shadow-md rounded-md p-2">
                 <li className="hover:text-lightbluegray">
                  <Link href="#services" className="hover:underline">
                    Service 1
                  </Link>
                </li>
                 <li className="hover:text-lightbluegray">
                  <Link href="#service-types" className="hover:underline">
                    Service 2
                  </Link>
                </li>
                 <li className="hover:text-lightbluegray">
                  <Link href="#technology" className="hover:underline">
                    Service 3
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <ul className="flex space-x-6 ">
           <li className="hover:text-lightbluegray">
            <Link href="#footer">Contact Us</Link>
          </li>
           <li className="hover:text-blue-400 text-lightbluegray">
            <Link href="/dashboard">
              <div className="flex items-center">
                <span>Sign In</span>
                <span className="ml-1 text-blue-400"><BiArrowFromLeft /></span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;
