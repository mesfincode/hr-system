'use client';
import React from 'react';
import { CgCheck } from 'react-icons/cg';

const PaymentPlans = () => {
  const plans = [
    {
      title: "Basic Security",
      description: "Basic security services including armed and unarmed guards.",
      price: "$500 - $1000 / month",
      features: [
        "24/7 Surveillance",
        "Emergency Response",
        "Trained Security Personnel",
      ],
    },
    {
      title: "Executive Protection",
      description: "Premium security services for high-profile individuals.",
      price: "$2000 - $5000 / month",
      features: [
        "Personal Bodyguards",
        "Secure Transport",
        "Advanced Threat Detection",
      ],
    },
    {
      title: "Secure Transport",
      description: "Secure cash transport and emergency response protocols.",
      price: "$1500 - $3000 / month",
      features: [
        "Armored Vehicles",
        "GPS Tracking",
        "Real-Time Monitoring",
      ],
    },
  ];

  return (
    <div className="relative flex flex-col items-center px-10 md:px-44 py-14">
     <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-serif text-center text-white mt-10 mb-10 md:mb-16 lg:mb-20 px-4 md:px-16 lg:px-80">
  Find the right plan for your business
</h1>

      <div className="absolute top-96 mt-48 left-0 w-full h-52 bg-white transform -translate-y-1/2 -skew-y-2 z-0"></div>
      <div className="absolute top-96 mt-72 left-0 w-full h-52 bg-white transform -translate-y-1/2 "></div>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="flex flex-col      bg-white rounded-sm shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-xl font-semibold text-gray-800 mt-2 text-start">{plan.title}</h2>
            <p className="text-2xl font-bold font-serif mt-4">{plan.price}</p>
            <p className="text-gray-600 mt-2">{plan.description}</p>
            <hr className="border-gray-200 my-8" />
            <h2 className="text-md text-gray-800 font-sans text-start">Features Include:</h2>
           
            <ul className="list-disc text-gray-400 brightness-75 mt-4 pl-6">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex}><CgCheck className='inline-block text-start text-green-300 text-xl '/>{feature}</div>
              ))}
            </ul>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition duration-300">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentPlans;