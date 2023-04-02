import Image from 'next/image';
import React from 'react';

interface ISlideBodyData {
  data: {
    id: number;
    title: string;
    imageSrc: string;
    description: string;
    highlight: string;
  };
}

const SlideBody: React.FC<ISlideBodyData> = ({ data }) => {
  const { imageSrc, title, description, highlight } = data;
  return (
    <div
      style={{
        background: `linear-gradient( rgba(20, 3, 66, .5), rgba(20, 3, 66, .5)),  url(${imageSrc})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="w-full lg:min-h-screen pb-14 pt-12"
    >
      {/* top section - heading and search */}
      <div className="w-full lg:w-1/2 lg:px-20  py-20 md:py-28 lg:py-14  mx-auto lg:min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl lg:text-6xl text-white font-bold text-center lg:leading-[80px]">
          {title}
        </h1>
        <h2 className="text-white text-4xl lg:text-6xl  font-bold text-center">
          {highlight}
        </h2>
        <p className="text-white text-md font-semibold mt-4 lg:mt-10">
          {description}
        </p>
        <div className="hidden  bg-white lg:flex p-2 w-[80%] mx-auto rounded-full mt-14 focus:ring-2 focus:ring-gray-700">
          <input
            type="text"
            className="outline-none bg-transparent  flex-grow px-4 placeholder:text-gray-800"
            placeholder="What do you want to learn today?"
          />
          <button className="bg-secondary py-3 px-12 rounded-full border-2 transition-all duration-150 border-secondary text-white hover:text-secondary hover:bg-white ">
            Search
          </button>
        </div>
        {/* small device search */}
        <div className="  lg:hidden p-2 w-[80%] md:w-[40%]  mx-auto  mt-5 focus:ring-2 focus:ring-gray-700">
          <input
            type="text"
            className="outline-none bg-white w-full py-3 rounded-lg flex-grow pl-2 placeholder:text-gray-800"
            placeholder="What do you want to learn today?"
          />
          <button className="bg-secondary py-3 rounded-xl w-full mt-3 border-2 transition-all duration-150 border-secondary text-white hover:text-secondary hover:bg-white ">
            Search
          </button>
        </div>
      </div>

      {/* bottom info section  */}
      <div className="flex items-center flex-col md:flex-row space-y-5 md:space-y-0 justify-center md:space-x-5 lg:space-x-12 ">
        <div className="flex flex-col space-y-3 text-white text-center">
          <Image
            src="/assets/Hero/icons/1.svg"
            height={50}
            width={50}
            alt="icons"
            className="mx-auto"
          />
          <h1 className="text-xl font-semibold">100,000 online courses</h1>
          <p className="text-sm">Explore a variety of fresh topics</p>
        </div>

        <div className="flex flex-col space-y-3 text-white text-center">
          <Image
            src="/assets/Hero/icons/2.svg"
            height={50}
            width={50}
            alt="icons"
            className="mx-auto"
          />
          <h1 className="text-xl font-semibold">Expert instruction</h1>
          <p className="text-sm">Find the right instructor for you</p>
        </div>
        <div className="flex flex-col space-y-3 text-white text-center">
          <Image
            src="/assets/Hero/icons/3.svg"
            height={50}
            width={50}
            alt="icons"
            className="mx-auto"
          />
          <h1 className="text-xl font-semibold">Lifetime access</h1>
          <p className="text-sm">Learn on your schedule</p>
        </div>
      </div>
    </div>
  );
};

export default SlideBody;
