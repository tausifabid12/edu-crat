import Image from 'next/image';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';

const AboutUs = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 px-3 lg:px-16 py-32 min-h-screen">
      <div>
        <div className="text-primary text-xl  md:text-5xl font-bold md:leading-[55px] ">
          Online aboutUs
          <br />
          solutions that meet your needs.
        </div>
        <p className=" text-primary mt-4 ">
          Use the list below to bring attention to your product’s key <br />
          differentiator.
        </p>
        {/* cards */}
        <div className="space-y-8 mt-10 ">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="bg-[#def5f0] rounded-full w-24 lg:w-40 h-24  flex items-center justify-center">
              <Image
                src="/assets/aboutUs/icons/1.svg"
                height={30}
                width={30}
                alt="icon"
                className="mx-auto block w-12 h-12 mb-2 lg:mb-0"
              />
            </div>
            <div className="lg:pr-16 lg:pl-8 mt-5 lg:mt-0">
              <h1 className="text-lg text-primary text-center lg:text-left">
                Leadership development
              </h1>
              <p className="text-gray-800  mt-1 text-center lg:text-left">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  items-center lg:items-start">
            <div className="bg-[#def5f0] rounded-full w-24 lg:w-40 h-24  flex items-center justify-center ">
              <Image
                src="/assets/aboutUs/icons/2.svg"
                height={50}
                width={50}
                alt="icon"
                className="mx-auto block w-12 h-12 mb-2 lg:mb-0"
              />
            </div>
            <div className="lg:pr-16 lg:pl-8 mt-5 lg:mt-0">
              <h1 className="text-lg text-primary text-center lg:text-left">
                Leadership development
              </h1>
              <p className="text-gray-800  mt-1 text-center lg:text-left">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="bg-[#def5f0] rounded-full w-24 lg:w-40 h-24  flex items-center justify-center">
              <Image
                src="/assets/aboutUs/icons/3.svg"
                height={50}
                width={50}
                alt="icon"
                className="mx-auto block w-12 h-12 mb-2 lg:mb-0"
              />
            </div>
            <div className="lg:pr-16 lg:pl-8 mt-5 lg:mt-0">
              <h1 className="text-lg text-primary text-center lg:text-left">
                Leadership development
              </h1>
              <p className="text-gray-800 mt-1 text-center lg:text-left">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd section */}
      <div className="hidden lg:flex items-center justify-center mt-14 lg:mt-0 lg:ml-10">
        <div className="relative  px-2 ">
          <Image
            src="/assets/aboutUs/1.png"
            height={500}
            width={500}
            alt="aboutUs"
            className=" -z-10 rounded-lg w-full"
          />
          <Image
            src="/assets/aboutUs/2.png"
            height={280}
            width={280}
            alt="aboutUs"
            className="hidden lg:absolute -bottom-24 -left-8 z-20 rounded-lg"
          />
          {/*------- floating divs -------*/}
          <div className="hidden absolute top-16 left-8 bg-white lg:flex py-3 px-7 rounded-lg shadow-md ">
            <Image
              src="/assets/aboutUs/floatingDivs/4.png"
              height={500}
              width={500}
              className="h-20 w-20"
              alt=""
            />
            <div className="pl-4 space-y-1">
              <h5 className="text-primary font-semibold">Ali Tufan</h5>
              <p className="text-gray-700">UX/UI Designer</p>
              <span className="flex text-xs text-yellow-500">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </span>
            </div>
          </div>
          {/* ------------------- */}
          <div className="hidden absolute px-8 top-72 z-20 -left-28 bg-white lg:flex py-3 rounded-lg shadow-md ">
            <div className="bg-[#f7e9e7] rounded-full p-5 flex items-center justify-center">
              <Image
                src="/assets/aboutUs/icons/3.svg"
                height={30}
                width={30}
                alt="icon"
                className=""
              />
            </div>
            <div className="pl-4 space-y-1">
              <h5 className="text-[#e8543e] text-lg">3.000 +</h5>
              <p className="text-gray-700">Free Courses</p>
            </div>
          </div>
          {/* ------------------- */}
          <div className="hidden absolute w-72 px-2 -bottom-12 z-20 left-52 bg-white lg:flex py-3 rounded-lg shadow-md ">
            <div className="bg-secondary/10 rounded-full p-5 flex items-center justify-center">
              <Image
                src="/assets/aboutUs/icons/2.svg"
                height={30}
                width={30}
                alt="icon"
                className=""
              />
            </div>
            <div className="pl-3 space-y-1">
              <h5 className="text-primary font-semibold">Congrats!</h5>
              <p className="text-gray-700">Your Admission Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
