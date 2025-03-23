import Cart from "../components/cart";
import Crop from "../components/cropCard";
import SideBar from "../components/sideBar(seller)";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const SellerHome = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([
        { name: "Fresh Organic Crop", price: 20 },
        { name: "Premium Fresh Crop", price: 25 }
    ]);

    // Crop fetching state
    const [crops, setCrops] = useState(null);
    const [isCropsPending, setIsCropsPending] = useState(true); // Separate loading state for crops

    // Fetch crops
    useEffect(() => {
        const fetchCrops = async () => {
            setIsCropsPending(true);
            try {
                const res = await axios.get("http://localhost:3000/api/retailSeller/crops");
                setCrops(res.data);
                setIsCropsPending(false);
            } catch (err) {
                console.error("Error fetching crops:", err);
                setIsCropsPending(false);
            }
        };

        fetchCrops();
        console.log("Crop data refreshed");
    }, []);

    // Cart fetching state
    const [cart, setCart] = useState(null);
    const [isCartPending, setIsCartPending] = useState(true); // Separate loading state for cart

    // Fetch cart according to the user
    useEffect(() => {
        const fetchCart = async () => {
            setIsCartPending(true);
            try {
                const res = await axios.get("http://localhost:3000/api/RetailSeller/cart/get/67d8e72067646fe0d3f87794"); // Ensure correct URL format
                setCart(res.data);
                setIsCartPending(false);
            } catch (err) {
                console.error("Error fetching cart:", err);
                setIsCartPending(false);
            }
        };

        fetchCart();
        console.log("Cart data refreshed");
    }, []);

    // Get the number of items in the cart
    const getCartItemCount = () => {
        return cart ? cart.items.length : 0;
    };

    return (
        <>
            <nav className="bg-gray-300 p-4 text-center font-semibold">NAV</nav>
            <div className="grid grid-cols-12 min-h-screen">
                {/* Sidebar */}
                <SideBar />

                {/* Main Content */}
                <div className="col-span-10 flex flex-col p-6">
                    <h1 className="text-lg font-semibold mb-4">Crops</h1>
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

                    {/*cartOpen && <Cart cartItems={cart} onClose={() => setCartOpen(false)} />*/}
                    {/* Inside SellerHome component*/}
                    {cartOpen && cart && cart.items && (
                    <Cart cart={cart} onClose={() => setCartOpen(false)} />
                    )}


                    {/* Cards in a grid layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
                        {isCropsPending && <div className="text-red-300">Loading crops.......</div>}

                        {crops && 
                            crops.map((crop) => (
                                <Crop key={crop._id} crop={crop} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default SellerHome;
