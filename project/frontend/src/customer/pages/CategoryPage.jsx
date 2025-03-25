// import ProductItem from '@/components/ProductItem';
// import TopCategoryList from '@/components/TopCategoryList';
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const CategoryPage = () => {
//     const { categoryName } = useParams();
//     const [products, setProducts] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const response = await fetch('http://localhost:4000/api/products');//change
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch products');
//                 }
//                 const json = await response.json();
//                 const filteredProducts = json.filter(
//                     (product) => product.category.toLowerCase() === categoryName.toLowerCase()
//                 );
//                 setProducts(filteredProducts);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, [categoryName]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     if (!products || products.length === 0) {
//         return <div>No products found for {categoryName}.</div>;
//     }

//     return (
        
//         <div>
//             <Header />
            
//             <h2 className="p-4 bg-green-700 text-white font-bold text-3xl text-center">
//                 {categoryName}
//             </h2>

//             <TopCategoryList selectedCategory={categoryName} />

//             <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6'>
//                 {products.map((product) => (
//                     <ProductItem key={product._id} product={product} />
//                 ))}
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default CategoryPage;