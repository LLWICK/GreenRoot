import React, { useState, useEffect } from "react";
import axios from "axios";
import Cart from "../components/cart";
import Crop from "../components/cropCard";
import SideBar from "../components/sideBar(seller)";

const SellerHome = () => {
    const [cartOpen, setCartOpen] = useState(false);

    // Crop fetching state
    const [crops, setCrops] = useState(null);
    const [isCropsPending, setIsCropsPending] = useState(true);

    // Fetch crops
    useEffect(() => {
        const fetchCrops = async () => {
            setIsCropsPending(true);
            try {
                const res = await axios.get("http://localhost:3000/api/retailSeller/crops");
                setCrops(res.data);
            } catch (err) {
                console.error("Error fetching crops:", err);
            } finally {
                setIsCropsPending(false);
            }
        };
        fetchCrops();
    }, []);

    // Cart fetching state
    const [cart, setCart] = useState(null);
    const [isCartPending, setIsCartPending] = useState(true);

    // Fetch cart according to the user
    const fetchCart = async () => {
        setIsCartPending(true);
        try {
            const res = await axios.get("http://localhost:3000/api/RetailSeller/cart/get/67d8e72067646fe0d3f87794"); 
            setCart(res.data);
        } catch (err) {
            console.error("Error fetching cart:", err);
        } finally {
            setIsCartPending(false);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    // Add to Cart Function
    const handleAddToCart = async (cropId) => {
        try {
            const sellerId = "67d8e72067646fe0d3f87794"; // Replace with dynamic sellerId if needed
            
            const response = await axios.post("http://localhost:3000/api/RetailSeller/cart/add", {
                cropId,
                sellerId,
            });

            console.log("Cart updated:", response.data);
            alert("Item added to cart!");

            // Refresh cart after adding an item
            fetchCart();
        } catch (error) {
            console.error("Error adding to cart:", error);
            alert(error.response?.data?.message || "Something went wrong!");
        }
    };

    // Remove item from Cart
    const handleRemoveFromCart = async (itemId) => {
        try {
            //'/remove/:cropId/:sellerId'
            const response = await axios.delete(`http://localhost:3000/api/RetailSeller/cart/remove/${itemId}/67d8e72067646fe0d3f87794`);
            console.log("Item removed from cart:", response.data);
            fetchCart();
        } catch (error) {
            console.error("Error removing item:", error);
        }
    };

    // Get the number of items in the cart
    const getCartItemCount = () => {
        return cart ? cart.items.length : 0;
    };

    return (
        <>
            {/* Navbar */}
            <nav className="bg-gray-300 p-4 text-center font-semibold">NAV</nav>

            <div className="grid grid-cols-12 min-h-screen">
                {/* Sidebar */}
                <SideBar />

                {/* Main Content */}
                <div className="col-span-10 flex flex-col p-6">
                    <h1 className="text-lg font-semibold mb-4">Crops</h1>

                    {/* Categories & Cart Icon */}
                    <div className="flex justify-center items-center gap-12 mb-10">
                        <a href="#" className="text-gray-700 hover:text-green-600">cat 1</a>
                        <a href="#" className="text-gray-700 hover:text-green-600">cat 2</a>
                        <a href="#" className="text-gray-700 hover:text-green-600">cat 3</a>
                        <a href="#" className="text-gray-700 hover:text-green-600">cat 4</a>

                        {/* Cart Icon */}
                        <button className="text-gray-700 hover:text-green-600 relative" onClick={() => setCartOpen(true)}>
                            🛒 Cart
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                                {getCartItemCount()} {/* Dynamic cart item count */}
                            </span>
                        </button>
                    </div>

                    {/* Cart Component */}
                    {cartOpen && cart && cart.items && (
                        <Cart cart={cart} onClose={() => setCartOpen(false)} onRemoveItem={handleRemoveFromCart} />
                    )}

                    {/* Crop Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
                        {isCropsPending && <div className="text-red-300">Loading crops.......</div>}

                        {crops && crops.map((crop) => (
                            <Crop key={crop._id} crop={crop} cart={cart} onAddToCart={handleAddToCart} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SellerHome;
