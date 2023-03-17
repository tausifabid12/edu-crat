import React from 'react';
import { useSwiper } from 'swiper/react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const SwipeButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="hidden absolute top-1/2 left-0  w-full lg:flex items-center justify-between z-40 bg-transparent px-8">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-white/20 backdrop-blur-md text-white w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-white hover:text-primary"
      >
        <BsArrowLeft size={22} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-white/20 backdrop-blur-md text-white w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-white hover:text-primary"
      >
        <BsArrowRight size={22} />
      </button>
    </div>
  );
};

export default SwipeButtons;
