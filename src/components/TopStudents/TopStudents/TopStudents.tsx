import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper';
import StudentCard from '../StudentCard/StudentCard';

type studentData = {
  id: number;
  name: string;
  title: string;
  imgSrc: string;
};

const TopStudents = () => {
  let students: studentData[];

  students = [
    {
      id: 1,
      name: 'Jhon Doe',
      title: 'Web Developer',
      imgSrc: '/assets/students/1.png',
    },
    {
      id: 2,
      name: 'Jhon Doe',
      title: 'Web Developer',
      imgSrc: '/assets/students/2.png',
    },
    {
      id: 3,
      name: 'Jhon Doe',
      title: 'Web Developer',
      imgSrc: '/assets/students/3.png',
    },
    {
      id: 4,
      name: 'Jhon Doe',
      title: 'Web Developer',
      imgSrc: '/assets/students/4.png',
    },
    {
      id: 5,
      name: 'Jhon Doe',
      title: 'Web Developer',
      imgSrc: '/assets/students/5.png',
    },
  ];
  return (
    <section className="px-3 lg:px-16 py-32">
      <div className="flex items-center justify-between flex-wrap">
        <div>
          <h1 className="text-3xl font-bold text-primary">Top Students</h1>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
        <button className="bg-white text-secondary py-3 px-9 mt-10 rounded-lg border-2 border-secondary hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center ">
          View All Event{' '}
          <span className="ml-2">
            <BsArrowUpRight />
          </span>
        </button>
      </div>
      <div className="mt-16 pl-0">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={5}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 3.3,
              spaceBetween: 18,
            },
          }}
        >
          {/* {students.map((student) => (
            <SwiperSlide key={student.id} className="pb-28 px-2">
              <StudentCard data={student} />
            </SwiperSlide>
          ))} */}
          <SwiperSlide className="pb-28 lg:px-2">
            <StudentCard
              data={{
                name: 'Jhon Doe',
                title: 'Web Developer',
                imgSrc: '/assets/students/5.png',
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="pb-28 px-2">
            <StudentCard
              data={{
                name: 'Jhon Doe',
                title: 'Web Developer',
                imgSrc: '/assets/students/5.png',
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="pb-28 px-2">
            <StudentCard
              data={{
                name: 'Jhon Doe',
                title: 'Web Developer',
                imgSrc: '/assets/students/5.png',
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="pb-28 px-2">
            <StudentCard
              data={{
                name: 'Jhon Doe',
                title: 'Web Developer',
                imgSrc: '/assets/students/5.png',
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="pb-28 px-2">
            <StudentCard
              data={{
                name: 'Jhon Doe',
                title: 'Web Developer',
                imgSrc: '/assets/students/5.png',
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="pb-28 px-2">
            <StudentCard
              data={{
                name: 'Jhon Doe',
                title: 'Web Developer',
                imgSrc: '/assets/students/5.png',
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TopStudents;
