// import React from 'react';
// import { Link } from 'react-router-dom';

// const TopCategoryList = ({ selectedCategory }) => {
//     const categoryImages = ['/fruits.jpg', '/vegetables.webp', '/grains.jpg'];
//     const categoryNames = ['Fruits', 'Vegetables', 'Grains'];

//     return (
//         <div className="mt-5 ">
//             <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-2 ">
//                 {categoryImages.map((imageUrl, index) => (
//                     <Link
//                         to={`/products-category/${categoryNames[index]}`}
//                         key={index}
//                         className={`flex flex-col items-center bg-green-50 gap-2 p-6 rounded-lg group cursor-pointer hover:bg-green-600 min-w-[100px] ${
//                             selectedCategory === categoryNames[index] ? 'bg-green-600 text-white' : ''
//                         }`}
//                     >
//                         <img
//                             src={imageUrl}
//                             alt={`category ${index + 1}`}
//                             width={100}
//                             height={100}
//                             className="group-hover:scale-125 transition-all ease-in-out rounded-lg"
//                         />
//                         <h2 className={`text-green-800 group-hover:text-white ${
//                             selectedCategory === categoryNames[index] ? ' text-white' : ''
//                         }`}>{categoryNames[index]}</h2>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TopCategoryList;