// "use client";
// // Advertisement.js
// import React, { useState } from "react";
// import { FaAward, FaHandshake, FaLock, FaQuoteLeft } from "react-icons/fa";

// const iconMap = {
//   FaAward: <FaAward />,
//   FaQuoteLeft: <FaQuoteLeft />,
//   FaLock: <FaLock />,
//   FaHandshake: <FaHandshake />,
// };

// type TabLabel = keyof typeof iconMap;

// interface Tab {
//   image: string;
//   label: TabLabel;
//   title: String;
// }

// const tabs: Tab[] = [
//   {
//     image: "/accredations3.jpeg", // Replace with actual image path
//     label: "FaAward",
//     title: "Accredetations",
//   },
//   {
//     image: "/accredations1.jpeg", // Replace with actual image path
//     label: "FaQuoteLeft",
//     title: "Testimonials",
//   },
//   {
//     image: "/accredations2.jpeg", // Replace with actual image path
//     label: "FaLock",
//     title: "Services",
//   },
//   {
//     image: "/clients.jpeg", // Replace with actual image path
//     label: "FaHandshake",
//     title: "Clients",
//   },
// ];

// const Advertisement = () => {
//   const [selectedTab, setSelectedTab] = useState(0);

//   const handleTabClick = (index: number) => {
//     setSelectedTab(index);
//   };

//   return (
//     <div className="flex flex-col items-center mt-20   ">
//       <h1 className="text-5xl font-bold font-serif mb-6 text-center text-black">
//         Events and Announcements
//       </h1>
//       <div className="px-96">
//         <p className="text-lg mb-8 text-center brightness-75 text-wrap p-10">
//           Our latest security updates and announcements ensure you stay informed
//           about new services, industry standards, and upcoming events designed
//           to enhance your safety and security.
//         </p>
//       </div>
//       <div className="flex justify-center space-x-36 mb-12">
//         {tabs.map((tab, index) => (
//           <div>
//             <button
//               key={index}
//               onClick={() => handleTabClick(index)}
//               className={`w-16 h-16 ml-2 mb-3 rounded-full border-2 flex justify-center items-center shadow-lg focus:outline-none transition-colors duration-300 ${
//                 selectedTab === index
//                   ? "bg-blue-500 text-white"
//                   : "bg-white text-blue-500 hover:bg-blue-200"
//               }`}
//             >
//               {iconMap[tab.label]}
//             </button>
//             {tab.title}
//           </div>
//         ))}
//       </div>
//       <img
//         src={tabs[selectedTab].image}
//         alt={tabs[selectedTab].label}
//         className="w-1/2 h-148 shadow-gray-700 shadow-2xl  "
//       />
//       <div className="container mx-auto p-10 px-40 mt-10">
//         <div className="border-t border-gray-300 my-4"></div>
//       </div>
//     </div>
//   );
// };

// export default Advertisement;
'use client';
// Advertisement.js
import React, { useState } from "react";
import { FaAward, FaHandshake, FaLock, FaQuoteLeft } from "react-icons/fa";

const iconMap = {
  FaAward: <FaAward />,
  FaQuoteLeft: <FaQuoteLeft />,
  FaLock: <FaLock />,
  FaHandshake: <FaHandshake />,
};

type TabLabel = keyof typeof iconMap;

interface Tab {
  image: string;
  label: TabLabel;
  title: String;
}

const tabs: Tab[] = [
  {
    image: "/accredations3.jpeg", // Replace with actual image path
    label: "FaAward",
    title: "Accredetations",
  },
  {
    image: "/accredations1.jpeg", // Replace with actual image path
    label: "FaQuoteLeft",
    title: "Testimonials",
  },
  {
    image: "/accredations2.jpeg", // Replace with actual image path
    label: "FaLock",
    title: "Services",
  },
  {
    image: "/clients.jpeg", // Replace with actual image path
    label: "FaHandshake",
    title: "Clients",
  },
];

const Advertisement = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div className="flex flex-col items-center mt-20 px-4 md:px-0">
      <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-center text-black">
        Events and Announcements
      </h1>
      <div className="md:px-32 lg:px-96">
        <p className="text-base md:text-lg mb-8 text-center text-gray-700">
          Our latest security updates and announcements ensure you stay informed
          about new services, industry standards, and upcoming events designed
          to enhance your safety and security.
        </p>
      </div>
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-36 mb-12">
        {tabs.map((tab, index) => (
          <div key={index} className="flex flex-col items-center">
            <button
              onClick={() => handleTabClick(index)}
              className={`w-12 h-12 md:w-16 md:h-16 mb-3 rounded-full border-2 flex justify-center items-center shadow-lg focus:outline-none transition-colors duration-300 ${
                selectedTab === index
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500 hover:bg-blue-200"
              }`}
            >
              {iconMap[tab.label]}
            </button>
            <span className="text-sm md:text-base">{tab.title}</span>
          </div>
        ))}
      </div>
      <img
        src={tabs[selectedTab].image}
        alt={tabs[selectedTab].label}
        className="w-full md:w-1/2 max-h-96 md:min-h-140 object-cover shadow-lg"
      />
      <div className="w-full px-4 md:px-10 mt-10">
        <div className="border-t border-gray-300 my-4"></div>
      </div>
    </div>
  );
};

export default Advertisement;
