import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6 md:px-44">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <Image
            src="/logo.png"
            width={62}
            height={52}
            alt="Security Agency Logo"
            className="mx-auto md:mx-0"
          />
          <p className="text-gray-400 mt-2">
            Your company's motto or tagline goes here.
          </p>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 md:w-screen md:space-x-2 md:px-20">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Service 1
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Service 2
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Service 3
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Service 4
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Mission
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Live Chat
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Disclaimer
              </a>
            </li>
          </ul>
        </div>

        </div>
        
      </div>
      <hr className="border-gray-700 my-8" />
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-gray-400 mb-4 md:mb-0">
          &copy; 2024 Your Company. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Image
              src="/facebook-color-svgrepo-com.svg"
              width={32}
              height={32}
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Image
              src="/twitter-color-svgrepo-com.svg"
              width={32}
              height={32}
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Image
              src="/linkedin-color-svgrepo-com.svg"
              width={32}
              height={32}
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
