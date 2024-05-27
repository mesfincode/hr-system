'use client';
import React, { useState } from 'react';
import { FaCogs, FaChartLine, FaUserFriends } from 'react-icons/fa';

const images = [
  '/istockphoto-1320734586-612x612.jpg', // Replace with actual image paths
  '/istockphoto-1351013701-612x612.jpg',
  '/istockphoto-1488294044-612x612.jpg ',
];

const descriptions = [
  {
    text: "Our ERP software offers seamless integration with your existing systems, enhancing productivity and efficiency.",
    image: images[0],
    icon: <FaCogs />
  },
  {
    text: "With real-time data analytics, our ERP solution provides actionable insights to help you make informed decisions.",
    image: images[1],
    icon: <FaChartLine />
  },
  {
    text: "Our user-friendly interface ensures that your team can easily navigate and utilize the full potential of our ERP software.",
    image: images[2],
    icon: <FaUserFriends />
  },
];

const TechnologyComponent = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleParagraphClick = (image: React.SetStateAction<string>) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex flex-col items-center  md:px-44 py-14 pb-28">
      <h1 className="text-5xl font-bold font-serif mb-16 text-center text-black">Technology-Based Solutions</h1>
      <div className="flex flex-col md:flex-row w-full space-x-10">
        <div className="md:w-1/2 mb-10 md:mb-0 mt-10">
          <img src={selectedImage} alt="ERP software" className="w-full h-auto shadow-lg rounded-lg min-h-144" />
        </div>
        <div className="md:w-1/2 pr-5 md:pl-10">
          <h2 className="text-2xl font-semibold font-serif mb-6 text-black text-start">ERP Software Features</h2>
          {descriptions.map((desc, index) => (
            <div
              key={index}
              onClick={() => handleParagraphClick(desc.image)}
              className={`p-4 mb-6 rounded-lg shadow-lg cursor-pointer transition-colors duration-300 ${selectedImage === desc.image ? 'border-2 border-blue-500' : 'border'}`}
            >
              <div className="flex items-center mb-4">
                <div className="text-2xl text-blue-500 mr-4">
                  {desc.icon}
                </div>
                <p className="text-lg text-gray-600 hover:text-blue-500">
                  {desc.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyComponent;
