import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsGooglePlay, BsApple, BsGlobe } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="px-3 lg:px-32 bg-primaryLight pt-16">
      {/* top - section -  */}
      <div className=" flex  flex-col lg:flex-row items-center justify-between  ">
        <div className="w-full lg:w-1/2 px-2 lg:px-0 mb-12 lg:mb-0 ">
          <p className="text-white pb-5">GET IN TOUCH</p>
          <div className="bg-white/10 text-white flex p-3 w-full md:w-1/2 lg:w-full lg:mx-auto rounded-full focus:ring-2 focus:ring-gray-700">
            <input
              type="text"
              className="outline-none bg-transparent  flex-grow px-4 placeholder:text-gray-200"
              placeholder="Enter your email"
            />
            <button className="bg-white flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-150 border-white text-secondary hover:text-white hover:bg-secondary ">
              <BsArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className=" w-full lg:w-1/2 space-y-8 px-2 lg:px-20">
          <Image src="/assets/logo.svg" height={160} width={160} alt="logo" />
          <div className="flex space-x-7">
            <div>
              <p className="text-white/70">Toll Free Customer Care</p>
              <p className="text-white text-lg">+(1) 123 456 7890</p>
            </div>
            <div>
              <p className="text-white/70">Toll Free Customer Care</p>
              <p className="text-white text-lg">+(1) 123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  middle section */}
      <div className="mt-8">
        <div className="px-3 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8">
          <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="text-xl tracking-wide text-gray-300">Category</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      World
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Games
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      References
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl tracking-wide text-gray-300">Partners</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Partner Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Partner Register
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl tracking-wide text-gray-300"> </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Brochure
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Nonprofit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Educational
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:max-w-md lg:col-span-2 mt-14 lg:mt-0">
              <p className="text-white text-xl">TAKE YOUR LEARNING WITH YOU</p>
              <div className="flex space-x-4 mt-7">
                <div className="flex bg-white/10 items-center justify-center space-x-4 text-white rounded-md p-2 lg:p-4">
                  <p>
                    <BsApple size={30} />
                  </p>
                  <div>
                    <p>Get in on</p>
                    <p className="text-xs">Apple Store</p>
                  </div>
                </div>
                <div className="flex bg-white/10 items-center justify-center space-x-4 text-white rounded-md py-4 px-5">
                  <p>
                    <BsGooglePlay size={30} />
                  </p>
                  <div>
                    <p>Get in on</p>
                    <p className="text-xs">Play Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
            <p className="text-sm text-white">
              © 2022 Educrat. All Right Reserved.
            </p>
            <div className="flex flex-wrap items-center mt-4 space-x-4 sm:mt-0 space-y-2 ">
              <Link
                href="/"
                className="text-white text-sm p-0 lg:text-md transition-colors duration-300 hover:text-teal-accent-400"
              >
                <p>Help</p>
              </Link>
              <Link
                href="/"
                className="text-white text-sm lg:text-md transition-colors duration-300 hover:text-teal-accent-400"
              >
                <p>Privacy Policy</p>
              </Link>
              <Link
                href="/"
                className="text-white text-sm lg:text-md transition-colors duration-300 hover:text-teal-accent-400"
              >
                <p>Cookie Notice</p>
              </Link>
              <Link
                href="/"
                className="text-white text-sm lg:text-md transition-colors duration-300 hover:text-teal-accent-400"
              >
                <p>Security</p>
              </Link>
              <Link
                href="/"
                className="text-white text-sm lg:text-md transition-colors duration-300 hover:text-teal-accent-400"
              >
                <p>Privacy Policy</p>
              </Link>
              <button className="flex items-center text-sm lg:text-md justify-center bg-white/10 text-white px-5 lg:px-8 py-1 lg:py-3 rounded-full">
                <span>
                  <BsGlobe />
                </span>
                <p className="pl-2">English</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
