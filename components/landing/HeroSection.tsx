'use client';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:py-10 ">
      <div className="w-full md:w-1/2 transition ease-in-out duration-300 mb-6 md:mb-0">
        <h1 className="text-4xl md:text-7xl font-serif font-bold mb-4 text-lightbluegray">
          Top-tier security solutions
        </h1>
        <p className="text-base md:text-lg mb-6">
          Our security services are designed to protect you and your assets around the clock, with reliable solutions for all your needs.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
          <Link href="/learn-more">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Learn More
            </button>
          </Link>
          <Link href="/get-started">
            <button className="px-4 py-2 bg-gray-600 text-white rounded-md">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8 flex justify-center">
        <Image
          src="/headofficepic.jpeg"
          alt="Example Image"
          width={600}
          height={300}
          className="rounded-md max-h-108"
        />
      </div>
    </div>
  );
};

export default HeroSection;
