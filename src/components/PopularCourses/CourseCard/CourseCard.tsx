import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsFillStarFill, BsBookmarkFill } from 'react-icons/bs';

interface CourseInfo {
  data: {
    id: number;
    title: string;
    imgSrc: string;
    lessons: number;
    duration: string;
    level: string;
  };
}

const CourseCard: React.FC<CourseInfo> = ({ data }) => {
  const { title, imgSrc, lessons, duration, level, id } = data;
  return (
    <Link
      href={`/courseDetails/${id}`}
      className="w-full h-full pb-4  shadow-md rounded-lg relative"
    >
      <button className="text-white text-lg p-2 rounded-full absolute top-2 right-2 hover:bg-black/30">
        <BsBookmarkFill />
      </button>
      <div>
        <Image
          src={imgSrc}
          height={200}
          width={300}
          alt="course1"
          className="rounded-t-lg w-full"
        />
      </div>
      {/**********  body **********/}
      <div className="px-3 pt-2 space-y-4">
        <div className="flex text-yellow-500 items-center  space-x-2">
          <p>4.5</p>
          <div className="flex text-xs">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </div>
          <p className="text-gray-500">(1991)</p>
        </div>
        <h1 className="text-primary text-lg">{title}</h1>
        <div className="flex  items-center justify-between text-gray-600 text-sm">
          <div className="flex items-center justify-center space-x-1 ">
            <Image
              src="/assets/coursesCards/icons/1.svg"
              height={15}
              width={15}
              alt="lessons"
            />
            <p>{lessons} Lessons</p>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <Image
              src="/assets/coursesCards/icons/2.svg"
              height={15}
              width={15}
              alt="lessons"
            />
            <p>{duration}</p>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <Image
              src="/assets/coursesCards/icons/3.svg"
              height={15}
              width={15}
              alt="lessons"
            />
            <p>{level}</p>
          </div>
        </div>
      </div>
      {/*********  footer ************/}
      <div className="px-5 mt-3 ">
        <div className="border-t border-gray-200 flex items-center justify-between px-1 pt-3">
          <div className=" flex items-center justify-center space-x-2 text-sm text-gray-600">
            <Image
              src="/assets/general/avatar-1.png"
              height={40}
              width={40}
              alt="user"
            />
            <p>Ali Tufan</p>
          </div>
          <div className="flex items-center justify-center text-primary space-x-3">
            <p className="line-through text-gray-500">179</p>
            <p className="font-semibold">179</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
