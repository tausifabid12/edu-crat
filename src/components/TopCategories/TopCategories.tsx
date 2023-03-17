import React from 'react';
import CategoryCard from './CategoryCard/CategoryCard';

type categoryData = {
  id: number;
  title: string;
  desc: string;
  imgSrc: string;
};

const TopCategories = () => {
  let categories: categoryData[];

  categories = [
    {
      id: 1,
      title: 'Digital Marketing',
      desc: '553+ Courses',
      imgSrc: '/assets/categories/1.png',
    },
    {
      id: 1,
      title: 'Digital Marketing',
      desc: '553+ Courses',
      imgSrc: '/assets/categories/1.png',
    },
    {
      id: 1,
      title: 'Digital Marketing',
      desc: '553+ Courses',
      imgSrc: '/assets/categories/1.png',
    },
    {
      id: 1,
      title: 'Digital Marketing',
      desc: '553+ Courses',
      imgSrc: '/assets/categories/1.png',
    },
    {
      id: 1,
      title: 'Digital Marketing',
      desc: '553+ Courses',
      imgSrc: '/assets/categories/1.png',
    },
    {
      id: 1,
      title: 'Digital Marketing',
      desc: '553+ Courses',
      imgSrc: '/assets/categories/1.png',
    },
    {
      id: 1,
      title: 'Digital Marketing',
      desc: '553+ Courses',
      imgSrc: '/assets/categories/1.png',
    },
    {
      id: 1,
      title: 'Digital Marketing',
      desc: '553+ Courses',
      imgSrc: '/assets/categories/1.png',
    },
    {
      id: 1,
      title: 'Digital Marketing',
      desc: '553+ Courses',
      imgSrc: '/assets/categories/1.png',
    },
  ];
  return (
    <section className="px-3 lg:px-16 py-32">
      <div className="text-center ">
        <h1 className="text-primary text-3xl font-bold">Top Categories</h1>
        <p className="text-gray-600 mt-3">
          Lorem ipsum dolor sit amet, consectetur.
        </p>
      </div>
      <div className="grid grid-cols-1  lg:grid-rows-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {categories.slice(0, 2).map((cat) => (
          <CategoryCard key={cat.id} data={cat} />
        ))}
        {categories.slice(2, 2).map((cat) => (
          <div key={cat.id} className="lg:row-span-2 bg-red-700">
            <CategoryCard data={cat} />
          </div>
        ))}
        {categories.slice(3, categories.length).map((cat) => (
          <CategoryCard key={cat.id} data={cat} />
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
