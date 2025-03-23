import React from "react";

const Cart = ({ cart, onClose, onRemoveItem }) => {
  // Ensure cart.items is being passed correctly
  const cartItems = cart ? cart.items : [];
  const tot = cart.totalPrice;

  const handleRemove = (itemId) => {
    // Call onRemoveItem function passed down from parent to remove item from cart
    onRemoveItem(itemId);
  };

  return (
    <div className="fixed inset-y-0 right-0 w-screen max-w-md bg-white shadow-xl transform transition-transform ease-in-out duration-500 sm:duration-700">
      <div className="flex flex-col h-full">
        {/* Cart Header */}
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button onClick={onClose} className="text-teal-700 hover:text-gray-500">
            <span className="sr-only">Close panel</span> ✖
          </button>
        </div>

        {/* Cart Items (Scrollable) */}
        <div className="flex-grow overflow-y-auto mt-4 px-4"> {/* Added px-4 for left padding */}
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <li key={index} className="flex py-6">
                  <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.cropId.image} // ✅ Fix: Access image from cropId
                      alt={item.name}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.name}</h3>
                        <p className="ml-4">${item.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{item.color || "N/A"}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty {item.quantity || 1}</p>
                      <button
                        type="button"
                        className="font-medium text-teal-600 hover:text-indigo-500"
                        onClick={() => handleRemove(item._id)} // Pass item._id to remove function
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-500">Your cart is empty</p>
            )}
          </ul>
        </div>

        {/* Subtotal & Checkout (Fixed at the bottom) */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${tot.toFixed(2)}</p> {/* Format the total price to 2 decimal places */}
            </div>
            <div className="mt-6">
              <button className="flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-white font-medium shadow-xs hover:bg-green-700 w-full">
                Checkout
              </button>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{" "}
                <button
                  id="continue-shopping"
                  onClick={onClose}
                  className="font-medium text-teal-600 hover:text-teal-500"
                >
                  Continue Shopping &rarr;
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
