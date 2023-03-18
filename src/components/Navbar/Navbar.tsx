import React, { useEffect } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  BsEnvelope,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Event', href: '/' },
    { label: 'Blogs', href: '/' },
    { label: 'Contact', href: '/' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          isScrolled ? 'bg-primary' : 'bg-primary'
        }  fixed top-0 z-50 w-full  transition-all duration-300 `}
      >
        <div className="bg-secondary py-2 lg:px-16 hidden lg:flex items-center justify-between text-white">
          <div className="flex space-x-5">
            <div className="flex items-center justify-center space-x-3">
              <span>
                <BsEnvelope size={18} />
              </span>{' '}
              <p>(00) 242 844 39 88</p>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <span>
                <BsEnvelope size={18} />
              </span>{' '}
              <p>hello@educrat.com</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 text-sm text-white">
            <BsFacebook />
            <BsLinkedin />
            <BsTwitter />
            <BsGithub />
          </div>
        </div>
        <div className="max-w-7xl mx-auto  py-2 px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-between">
              <div className="flex-shrink-0">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="/assets/logo.svg"
                  alt="Logo"
                />
                <img
                  className="hidden lg:block h-14 w-auto"
                  src="/assets/logo.svg"
                  alt="Logo"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navLinks.map((link, i) => (
                    <Link
                      key={i + 1}
                      href={link.href}
                      className=" text-white px-3 py-2 rounded-md text-md font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="#"
                    className=" text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    Login
                  </Link>
                  <button className=" bg-white px-6 py-3 rounded-full text-primary">
                    signUp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:hidden transition-all duration-500 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {navLinks.map((link, i) => (
              <Link
                key={i + 1}
                href={link.href}
                className=" text-primary px-3 py-2 rounded-md text-md font-medium block"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
