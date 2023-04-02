import React from 'react';

const CoursePromo = () => {
  return (
    <section
      style={{
        background: `  url('/assets/CoursePromo/bg.png')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
      className="w-full h-full grid place-content-center text-center py-48 md:px-5 lg:px-0"
    >
      <div className="space-y-7">
        <h1 className="text-5xl font-bold text-white">
          Find the right learning path for you
        </h1>
        <div className="text-white text-sm">
          <p className="">Match your goals to our programs, explore your</p>
          <p>options and map out your path to success.</p>
        </div>
        <button className="mt-20 py-4 px-16 block mx-auto  rounded-lg border-2 border-white text-lg text-white bg-transparent hover:bg-white hover:text-primary cursor-pointer transition-all duration-300">
          View All Courses
        </button>
      </div>
    </section>
  );
};

export default CoursePromo;
