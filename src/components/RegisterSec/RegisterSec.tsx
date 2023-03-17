import Image from 'next/image';
import React from 'react';

const RegisterSec = () => {
  return (
    <section className="px-3 md:px-7 lg:px-32 space-y-16 ">
      <div className="flex flex-col lg:flex-row  items-center justify-center ">
        <Image
          src="/assets/register/1.png"
          width={500}
          height={500}
          alt="teacher register"
        />
        <div className="lg:pl-16 space-y-6 mt-10 lg:mt-0">
          <h3 className="text-primary font-bold text-3xl">
            Become an Instructor
          </h3>
          <p className="text-gray-500 lg:pr-10">
            Join millions of people from around the world learning together.
            Online learning is as easy and natural as chatting
          </p>
          <button className="bg-white text-secondary py-3 px-9  rounded-lg border-2 border-secondary hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center ">
            Apply Now
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  lg:mt-0 items-center justify-center ">
        <div className="lg:pl-16 space-y-6 mb-8 lg:mb-0">
          <h3 className="text-primary font-bold text-3xl">Become a Student</h3>
          <p className="text-gray-500 lg:pr-10">
            Join millions of people from around the world learning together.
            Online learning is as easy and natural as chatting..
          </p>
          <button className="bg-white text-secondary py-3 px-9  rounded-lg border-2 border-secondary hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center ">
            Apply Now
          </button>
        </div>
        <Image
          src="/assets/register/1.png"
          width={500}
          height={500}
          alt="teacher register "
        />
      </div>
    </section>
  );
};

export default RegisterSec;
