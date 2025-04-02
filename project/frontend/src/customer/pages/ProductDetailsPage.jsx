import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

const ProductDetailsPage = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true); // Set loading to true at the start
            try {
                const response = await fetch(
                    "http://localhost:3000/api/customer/products"
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setProducts(json.products);
                console.log(json.products);
            } catch (error) {
                console.error("Error fetching products:", error);
                setError(error);
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="flex h-screen">
            <Sidebar className="w-60" />
            <div className="p-5 w-[60%] mx-auto">
                <h2 className="text-lg font-bold mb-4 text-center">Product Details</h2>
                <div className="grid grid-cols-1 gap-4">
                    {products &&
                        products.length > 0 &&
                        products.map((product) => (
                            <div
                                key={product._id}
                                className="bg-white text-black border p-4 rounded-md flex items-center"
                            >
                                <img
                                    src={product.image}
                                    alt={product.status}
                                    className="w-20 h-20 object-contain rounded-md mr-4"
                                />
                                <div>
                                    <h2 className="text-md font-semibold"> {product.name}</h2>
                                    <p className="text-sm text-gray-600">These delicious, organic {product.category} are cultivated with care at Auckland Farms, known for their commitment to sustainable and natural farming practices. Fertilizer:{product.fertilizer}</p>
                                    
                                    <p className="text-sm text-gray-600">Supplier:{product.supplier}</p>
                                    
                                    {/* <h2 className="text-md font-semibold">{product.category}</h2>
                                    <h2 className="text-sm text-gray-600">{product.supplier}</h2>
                                    <h2 className="text-sm text-gray-600">{product.sellerId}</h2> */}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;