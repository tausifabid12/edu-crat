import Image from 'next/image';
import React from 'react';

const EventCard = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/assets/events/1.png"
        className="rounded-lg w-full"
        height={450}
        width={350}
        alt="event"
      />
      <div className="p-4 bg-white space-y-2 absolute block rounded-lg h-auto -bottom-20 left-1/2 transform -translate-x-1/2 w-[80%] mx-auto shadow-lg z-20">
        <h1 className="text-lg text-primary">Summer School 2022</h1>
        <div className="flex items-center space-x-6 text-gray-500">
          <p>6 April, 2022</p>
          <p>London, UK</p>
        </div>
        <button className="bg-secondary text-white py-2 px-7 rounded-full border-2 border-secondary hover:bg-white hover:text-secondary transition-all duration-300">
          Buy
        </button>
      </div>
    </div>
  );
};

export default EventCard;
