'use client';
import React from "react";
import Image from "next/image";

const HumanCapital = () => {
  const data = {
    malePercentage: 60,
    femalePercentage: 40,
    militaryTrainedPercentage: 40,
    image: "/staffs2.jpg", // Replace with actual image path
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-56 py-14 bg-gradient-to-b from-white to-blue-50">
      <h1 className="text-2xl md:text-4xl font-bold font-serif mb-8 md:mb-12 text-center text-black mt-10 md:mt-16">
        Our Human Capital and Personnel Capability
      </h1>
      <p className="text-base md:text-xl text-center px-2 md:px-48 mb-8">
        Our dedicated team is composed of a diverse group of highly skilled
        professionals, including a significant number of military-trained
        personnel, ensuring the highest standards of security and protection for
        our clients.
      </p>
      <div className="flex flex-col md:flex-row items-center w-full mt-10 md:mt-20">
        <div className="flex flex-col items-start md:w-1/2 space-y-6 mb-10 md:mb-0 font-sans">
          <div className="p-4 bg-gray-50 rounded-lg w-full">
            <p className="text-3xl md:text-5xl text-gray-700">
              {data.malePercentage}%
            </p>
            <h2 className="text-sm md:text-xl text-gray-500 brightness-75 mb-2">
              The majority of our team are dedicated male professionals, committed to exceptional protection.
            </h2>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg w-full">
            <p className="text-3xl md:text-5xl text-gray-700">
              {data.femalePercentage}%
            </p>
            <h2 className="text-sm md:text-xl text-gray-500 brightness-75 mb-2">
              Our team includes skilled female professionals, enhancing diversity and strength in our services.
            </h2>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg w-full">
            <p className="text-3xl md:text-5xl text-gray-700">
              {data.militaryTrainedPercentage}%
            </p>
            <h2 className="text-sm md:text-xl text-gray-500 brightness-75 mb-2">
              Our military-trained personnel bring extensive experience and expertise to our security operations.
            </h2>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-10">
          <Image
            src={data.image}
            alt="Security Team"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HumanCapital;
