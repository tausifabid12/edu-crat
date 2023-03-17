import React from 'react';

interface category {
  data: {
    id: number;
    title: string;
    desc: string;
    imgSrc: string;
  };
}

const CategoryCard: React.FC<category> = ({ data }) => {
  return (
    <div
      style={{
        background: `  url(${data.imgSrc})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex flex-col items-center justify-center text-white py-14 rounded-lg"
    >
      <h4 className="text-lg ">{data.title}</h4>
      <p>{data.desc}</p>
    </div>
  );
};

export default CategoryCard;
