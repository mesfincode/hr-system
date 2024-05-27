// SecurityServiceCards.js

import Image from "next/image";

const SecurityServiceCards = () => {
  const cards = [
    
    {
      title: "Services Offered",
      image: "/padlock.png",
      description:
        "Representing a wide range of security services like manned guarding and surveillance.",
    },
    {
      title: "Experience and Expertise",
      image: "/restwithstars.png",
      description:
        "Highlighting years of experience, expertise, and quality service.",
    },
    {
      title: "Clientele and Testimonials",
      image: "/testimonials.png",
      description:
        "Displaying client testimonials and satisfaction with security services.",
    },
    {
        title: "Compliance and Accreditation",
        image: "/Accreditation.png",
        description:
          "Detailing adherence to industry standards and certifications.",
      },
      {
        title: "Technological Solutions",
        image: "/biometrics.png",
        description:
          "Highlighting advanced security technology like biometric access control.",
      },
      {
        title: "Community Engagement",
        image: "/handshake.png",
        description:
          "Showcasing involvement in community outreach and corporate social responsibility.",
      },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-60 px-2 md:px-44 bg-white  ">
    {cards.map((card, index) => (
      <div key={index} className="bg-white shadow-sm rounded-lg p-6 mb-2 md:mb-20 transition-opacity duration-500 ease-in-out ">
        <div className="flex justify-start mb-4">
          <Image
            src={card.image}
            alt={card.title}
            width={64} // Adjust width as needed
            height={64} // Adjust height as needed
            className="rounded-full"
          />
        </div>
        <h2 className="text-2xl font-semibold text-start text-black font-serif mb-2">
          {card.title}
        </h2>
        <p className="text-sm text-gray-600">{card.description}</p>
      </div>
    ))}
  </div>

    
  );
};

export default SecurityServiceCards;
