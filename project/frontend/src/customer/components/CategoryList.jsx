import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const categoryImages = [
    '/customer_images/fruits.jpg',
    '/customer_images/vegetables.webp',
    '/customer_images/grains.jpg',
  ];

  const categoryNames = ['Fruits', 'Vegetables', 'Grains'];

  return (
    <div className="mt-5 ">
      <h2 className="text-green-600 font-bold text-2xl">Shop by Category</h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-2">
        {categoryImages.map((imageUrl, index) => (
          <Link
            to={`/products-category/${categoryNames[index]}`}
            key={index}
            className="flex flex-col items-center bg-green-50 gap-2 p-6 rounded-lg group cursor-pointer hover:bg-green-200"
          >
            <img
              src={imageUrl}
              alt={`category ${index + 1}`}
              width={100}
              height={100}
              className="group-hover:scale-125 transition-all ease-in-out rounded-lg"
            />
            <h2 className="text-green-800">{categoryNames[index]}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;