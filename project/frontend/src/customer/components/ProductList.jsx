import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await fetch('http://localhost:4000/api/products');//change
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-green-600 font-bold text-2xl">Our Popular products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
        {products &&
          products.length > 0 &&
          products.map((product,index) => index<8 &&(
            <ProductItem key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;