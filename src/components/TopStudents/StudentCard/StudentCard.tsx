import Image from 'next/image';
import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter, BsFacebook } from 'react-icons/bs';

interface studentData {
  data: { name: string; title: string; imgSrc: string };
}

const StudentCard: React.FC<studentData> = ({ data }) => {
  return (
    <div className="flex flex-col  justify-center shadow-lg text-center space-y-3 px-10 py-12 rounded-lg border-t">
      <Image
        src={data.imgSrc}
        height={80}
        width={80}
        alt="student"
        className="mx-auto"
      />
      <h1 className="text-lg text-primary">{data.name}</h1>
      <p className="text-gray-500">{data.title}</p>
      <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
        <BsFacebook />
        <BsLinkedin />
        <BsTwitter />
        <BsGithub />
      </div>
      <div className="flex flex-wrap space-x-3 items-center justify-center ">
        <button className="text-gray-500 border border-gray-300 rounded-full w-20 py-1">
          Design
        </button>
        <button className="text-gray-500 border border-gray-300 rounded-full w-20 py-1">
          Art
        </button>
        <button className="text-gray-500 border border-gray-300 rounded-full w-20 py-1 mt-2">
          Graph
        </button>
      </div>
      <button className="bg-white text-secondary py-3 px-9 mt-10 rounded-full border-2 border-secondary hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center ">
        View Profile
      </button>
    </div>
  );
};

export default StudentCard;
