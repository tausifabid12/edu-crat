import Image from 'next/image';
import React from 'react';

interface ISlideBodyData {
  data: {
    id: number;
    title: string;
    imageSrc: string;
    description: string;
  };
}

const SlideBody: React.FC<ISlideBodyData> = ({ data }) => {
  const { imageSrc, title, description } = data;
  return (
    <div
      style={{
        background: `linear-gradient( rgba(20, 3, 66, .6), rgba(20, 3, 66, .5)),  url(${imageSrc})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="w-full lg:min-h-[580px] pb-5  pt-12 flex items-end justify-end"
    >
      {/* top section - heading and search */}
      <div className="w-full pr-8">
        <h1 className="text-md  text-white font-bold   text-end">{title}</h1>

        {/* <p className="text-white text-md font-semibold  ">{description}</p> */}
      </div>
      {/* bottom info section
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
      </div> */}
    </div>
  );
};

export default SlideBody;
