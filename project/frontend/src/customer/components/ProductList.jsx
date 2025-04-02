import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/customer/products");

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const json = await response.json();
            setProducts(json.products);
            console.log(json.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    fetchProducts();
}, []);

  return (
    <div className="mt-10">
      <h2 className="text-green-600 font-bold text-2xl">
        Our Popular products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
        {products &&
          products.length > 0 &&
          products.map(
            (product, index) =>
              index < 32 && <ProductItem key={product._id} product={product} />
          )}
      </div>
    </div>
  );
};

export default ProductList;
