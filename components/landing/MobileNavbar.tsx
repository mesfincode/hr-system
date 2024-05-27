'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiChevronDown, BiChevronUp, BiMenu, BiX } from "react-icons/bi";

const MobileNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="md:hidden top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-4 shadow-md ">
        <Link href="/">
          <span className="cursor-pointer">
            <Image
              src="/logo.png"
              width={62}
              height={52}
              alt="Security Agency Logo"
             className=""
            />
          </span>
        </Link>

        <button
          className="text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 w-2/3 h-full bg-gray-900 bg-opacity-90 z-40 flex flex-col p-6">
          
          <button
            className="text-3xl text-white self-end mb-4"
            onClick={toggleMobileMenu}
          >
            <BiX />
          </button>
          <ul className="flex flex-col items-start space-y-6 text-white mt-10">
            <li className="w-full">
              <Link
                href="/"
                onClick={toggleMobileMenu}
                className="block w-full px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/about"
                onClick={toggleMobileMenu}
                className="block w-full px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/clients"
                onClick={toggleMobileMenu}
                className="block w-full px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300"
              >
                Clients
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/signin"
                onClick={toggleMobileMenu}
                className="block w-full px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300"
              >
                Get a Quote
              </Link>
            </li>
            <li className="w-full relative">
              <button
                onClick={toggleServices}
                className="w-full flex items-center px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
              >
                Services{" "}
                {isServicesOpen ? (
                  <BiChevronUp className="ml-1" />
                ) : (
                  <BiChevronDown className="ml-1" />
                )}
              </button>
              {isServicesOpen && (
                <ul className="mt-2 bg-gray-800 rounded-md p-2 space-y-2 z-50">
                  <li>
                    <Link
                      href="/services/service1"
                      onClick={toggleMobileMenu}
                      className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300"
                    >
                      Service 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/service2"
                      onClick={toggleMobileMenu}
                      className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300"
                    >
                      Service 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/service3"
                      onClick={toggleMobileMenu}
                      className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300"
                    >
                      Service 3
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="w-full">
              <Link
                href="/contact"
                onClick={toggleMobileMenu}
                className="block w-full px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li className="w-full flex items-center">
              <Link
                href="/get-quote"
                onClick={toggleMobileMenu}
                className="block w-full px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300 flex items-center"
              >
                <span>Sign In</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
