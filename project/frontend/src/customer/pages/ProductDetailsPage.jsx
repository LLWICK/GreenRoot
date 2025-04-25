import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

const ProductDetailsPage = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3000/api/customer/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setProducts(json.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-green-700 text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500 text-xl">Error: {error.message}</div>;
  }

  return (
    <div className="flex h-screen bg-green-50">
      {/* Fixed Sidebar */}
      <div className="w-60 h-screen fixed">
        <Sidebar className="w-60 h-screen" />
      </div>

      {/* Main Content - Scrollable */}
      <div className="ml-60 p-6 md:p-10 w-full overflow-auto h-screen">
        <h2 className="text-3xl font-semibold text-green-900 mb-6 text-center">Product Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-28 h-28 object-cover rounded-lg shadow-md"
                />
                <h2 className="text-lg font-bold text-green-800 mt-4">{product.name}</h2>
                <p className="text-sm text-gray-600 text-center mt-2">
                  These delicious, organic <span className="font-semibold">{product.category}</span> are cultivated with care at Auckland Farms, known for their commitment to sustainable and natural farming practices.
                </p>
                <p className="text-sm text-gray-600 mt-2"><strong>Fertilizer:</strong> {product.fertilizer}</p>
                <p className="text-sm text-gray-600 mt-1"><strong>Supplier:</strong> {product.supplier}</p>

                {/* Explore More Button */}
                <button
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                  onClick={() => alert(`More details about ${product.name}`)}
                >
                  Explore More
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
