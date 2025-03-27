import React, { useState, useEffect } from 'react';
import Product from "../components/productCard";
import SideBar from "../components/sideBar(seller)";
import axios from 'axios';

const SellerInventroy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    fertilizer: '',
    image: '',
    category: '',
    supplier: '',
    sellerId: "67d8e72067646fe0d3f87794",
    price: '',
  });

  // Fetch all products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/RetailSeller/products/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Function to create a new product
  const createProduct = async () => {
    try {
        console.log(formData)
      const response = await axios.post('http://localhost:3000/api/RetailSeller/products/product', formData);
      console.log('Product created successfully:', response.data);
      setProducts((prevProducts) => [...prevProducts, response.data.product]);
      setIsModalOpen(false); // Close the modal after creating product
    } catch (error) {
      console.error('Error creating product:', error.response ? error.response.data : error.message);
    }
  };

  // Function to update a product by ID
  const updateProduct = async (productId, productData) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/products/${productId}`, productData);
      console.log('Product updated successfully:', response.data);
      setProducts((prevProducts) =>
        prevProducts.map((product) => (product._id === productId ? response.data.product : product))
      );
    } catch (error) {
      console.error('Error updating product:', error.response ? error.response.data : error.message);
    }
  };

  // Function to delete a product by ID
  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/RetailSeller/products/product/${productId}`);
      console.log('Product deleted successfully:', response.data);
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
      window.alert('product deleted successfully')
    } catch (error) {
      console.error('Error deleting product:', error.response ? error.response.data : error.message);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(); // Submit the form to create a new product
  };

  return (
    <div className="bg-gray-100">
      <nav className="bg-gray-300 p-4 text-center font-semibold">NAV</nav>
      <div className="grid grid-cols-12 min-h-screen">
        {/* Sidebar */}
        <SideBar />
        
        {/* Main Content */}
        <div className="col-span-10 flex flex-col p-6">
          <h1 className="text-xl font-semibold mb-4">My products</h1>
          
          {/* Category Links */}
          <div className="flex justify-end items-center gap-12 mb-10 mr-10">
            <a href="#" className="text-gray-700 hover:text-green-600">cat 1</a>
            <a href="#" className="text-gray-700 hover:text-green-600">cat 2</a>
            <a href="#" className="text-gray-700 hover:text-green-600">cat 3</a>
            <a href="#" className="text-gray-700 hover:text-green-600">cat 4</a>
          </div>
          
          {/* Add Button */}
          <div className="flex justify-start items-center gap-12 mb-10 mr-10">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold text-xl py-4 px-8 border border-green-700 rounded-lg"
              onClick={() => setIsModalOpen(true)}
            >
              +ADD
            </button>
          </div>
          
          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {products && products.map((product) => (
              <Product
                key={product._id}
                product={product}
                updateProduct={updateProduct}
                deleteProduct={deleteProduct}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm  bg-opacity-30 ">
          <div className="w-[600px] bg-white shadow-lg rounded-lg overflow-hidden my-10">
            <div className="text-2xl py-4 px-6 bg-green-700 text-white text-center font-bold uppercase">
              Add a Product
            </div>
            <form className="py-4 px-6" onSubmit={handleSubmit}>
              {/* Product Name */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Product Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  required
                />
              </div>

              {/* Quantity */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Quantity</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3"
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Enter quantity"
                  required
                />
              </div>

              {/* Fertilizer Used */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Fertilizer Used</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3"
                  type="text"
                  name="fertilizer"
                  value={formData.fertilizer}
                  onChange={handleChange}
                  placeholder="Enter fertilizer name"
                />
              </div>

              {/* Image URL */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Image URL</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3"
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Enter product image URL"
                />
              </div>

              {/* Category */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Category</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3"
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Enter product category"
                  required
                />
              </div>

              {/* Supplier Name */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Supplier Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3"
                  type="text"
                  name="supplier"
                  value={formData.supplier}
                  onChange={handleChange}
                  placeholder="Enter supplier name"
                  required
                />
              </div>

              {/* Price */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Price</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3"
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400" type="submit">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerInventroy;
