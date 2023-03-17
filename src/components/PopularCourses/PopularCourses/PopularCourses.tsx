import React from 'react';
import CourseCard from '../CourseCard/CourseCard';

type courseData = {
  id: number;
  title: string;
  imgSrc: string;
  lessons: number;
  duration: string;
  level: string;
};

const PopularCourses = () => {
  let courses: courseData[];

  courses = [
    {
      id: 1,
      title: 'Learn Figma - UI/UX Design Essential Training',
      imgSrc: '/assets/coursesCards/1.png',
      lessons: 6,
      duration: '3h 56m',
      level: 'Beginner',
    },
    {
      id: 2,
      title: 'Complete Python Bootcamp From Zero to Hero in Python',
      imgSrc: '/assets/coursesCards/2.png',
      lessons: 6,
      duration: '3h 56m',
      level: 'Beginner',
    },
    {
      id: 3,
      title: 'Angular - The Complete Guide (2022 Edition)',
      imgSrc: '/assets/coursesCards/3.png',
      lessons: 6,
      duration: '3h 56m',
      level: 'Beginner',
    },
    {
      id: 4,
      title: 'The Ultimate Drawing Course Beginner to Advanced',
      imgSrc: '/assets/coursesCards/4.png',
      lessons: 6,
      duration: '3h 56m',
      level: 'Beginner',
    },
    {
      id: 5,
      title: 'Photography Masterclass: A Complete Guide to Photography',
      imgSrc: '/assets/coursesCards/5.png',
      lessons: 6,
      duration: '3h 56m',
      level: 'Beginner',
    },
    {
      id: 6,
      title: 'Instagram Marketing 2021: Complete Guide To Instagram',
      imgSrc: '/assets/coursesCards/6.png',
      lessons: 6,
      duration: '3h 56m',
      level: 'Beginner',
    },
    {
      id: 7,
      title: 'Complete Blender Creator: Learn 3D Modelling for Beginners',
      imgSrc: '/assets/coursesCards/7.png',
      lessons: 6,
      duration: '3h 56m',
      level: 'Beginner',
    },
    {
      id: 8,
      title: 'The Complete Financial Analyst Training & Investing Course',
      imgSrc: '/assets/coursesCards/8.png',
      lessons: 6,
      duration: '3h 56m',
      level: 'Beginner',
    },
  ];

  return (
    <section className="min-h-screen w-full bg-white px-3 lg:px-16 py-32">
      {/* top heading */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-primary text-xl lg:text-3xl font-bold">
            Our Most Popular Courses
          </h1>
          <p className="text-xs lg:text-sm text-gray-500 mt-3">
            10,000+ unique online course list designs
          </p>
        </div>
        <div>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2  ">
            <option className="py-2" selected>
              Choose a country
            </option>
            <option className="py-2" value="US">
              United States
            </option>
            <option className="py-2" value="CA">
              Canada
            </option>
            <option className="py-2" value="FR">
              France
            </option>
            <option className="py-2" value="DE">
              Germany
            </option>
          </select>
        </div>
      </div>
      {/* course cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-8 pt-14">
        {courses.map((course) => (
          <CourseCard key={course.id} data={course} />
        ))}
      </div>
      {/* bottom button */}
      <button className="mt-20 py-4 px-16 block mx-auto  rounded-lg border-2 border-secondary text-lg text-secondary bg-white hover:bg-secondary hover:text-white cursor-pointer transition-all duration-300">
        View All Courses
      </button>
    </section>
  );
};

export default PopularCourses;
