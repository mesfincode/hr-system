'use client';
import React from 'react';
import Image from 'next/image';

const ServiceTypes = () => {
  const descriptions = [
    {
      text: "Armed and unarmed security guards",
      image: "/homesec2.jpeg", // Replace with actual image path
    },
    {
      text: "Executive protection",
      image: "/original-Executive protection.png", // Replace with actual image path
    },
    {
      text: "Secure cash transport and emergency response protocols",
      image: "/original-bank.png", // Replace with actual image path
    },
  ];

  return (
    <div className="relative flex flex-col items-center px-10 md:px-44 py-14 ">
     <h1 className="text-2xl md:text-4xl font-bold font-serif text-center text-white mt-10 mb-10 md:mb-20 w-full md:w-2/3 lg:w-1/2">
        Providing top-tier protection and safety services to meet the diverse needs of our clients.
      </h1>
      <div className="absolute top-96 mt-48 left-0 w-full h-52 bg-verylightblue transform -translate-y-1/2 -skew-y-6 z-0"></div>
      <div className="absolute top-96 mt-72 left-0 w-full h-52 bg-verylightblue transform -translate-y-1/2 "></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {descriptions.map((desc, index) => (
          <div key={index} className="flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 shadow-md shadow-gray-500 rounded-md px-2 space-y-5 border-t-2 border-gray-500 pt-2">
            <Image
              src={desc.image}
              alt={desc.text}
              width={450}
              height={350}
              className="rounded-lg shadow-lg"
            />
            <p className="text-lg text-gray-600 mt-4">{desc.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceTypes;
// 'use client';
// import React from 'react';
// import Image from 'next/image';

// const ServiceTypes = () => {
//   const descriptions = [
//     {
//       text: "Armed and unarmed security guards",
//       image: "/homesec2.jpeg", // Replace with actual image path
//     },
//     {
//       text: "Executive protection",
//       image: "/original-Executive protection.png", // Replace with actual image path
//     },
//     {
//       text: "Secure cash transport and emergency response protocols",
//       image: "/original-bank.png", // Replace with actual image path
//     },
//   ];

//   return (
//     <div className="relative flex flex-col items-center px-4 md:px-10 py-14">
//       <h1 className="text-2xl md:text-4xl font-bold font-serif text-center text-white mt-10 mb-10 md:mb-20 w-full md:w-2/3 lg:w-1/2">
//         Providing top-tier protection and safety services to meet the diverse needs of our clients.
//       </h1>
//             <div className="absolute top-96 mt-48 left-0 w-full h-52 bg-verylightblue transform -translate-y-1/2 -skew-y-6 z-0"></div>
//        <div className="absolute top-96 mt-72 left-0 w-full h-52 bg-verylightblue transform -translate-y-1/2 "></div>
//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 md:px-0">
//         {descriptions.map((desc, index) => (
//           <div key={index} className="flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 shadow-md shadow-gray-500 rounded-md p-4 space-y-5 border-t-2 border-gray-500 pt-2 bg-white">
//             <Image
//               src={desc.image}
//               alt={desc.text}
//               width={450}
//               height={350}
//               className="rounded-lg shadow-lg"
//             />
//             <p className="text-base md:text-lg text-gray-600 mt-4 text-center">{desc.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceTypes;
