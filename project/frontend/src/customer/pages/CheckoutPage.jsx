import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowBigRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const location = useLocation();
  const subtotal = location.state?.subtotal || 0;

  const delivery = 15;
  const taxRate = 0.09;

  const tax = subtotal * taxRate;
  const total = subtotal + delivery + tax;

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [Subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:3000/api/customer/addtocart');
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        const data = await response.json();
        setCartItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.totalPrice;
      });
      setSubtotal(total);
    } else {
      setSubtotal(0);
    }
  }, [cartItems]);
  //

  const handleOrder = async () => {
    try {
      const orderDetails = {
        totalPrice: total,
        cartItems: cartItems.map((item) => ({
          name: item.name,
          image: item.image,
          
          quantity: item.quantity,
          sellerId: item.sellerId,
          
          totalPrice: item.totalPrice,

        })),
        delivery,
        tax,
        finalTotal: total,
      };

      const response = await fetch('http://localhost:3000/api/customer/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });

      if (!response.ok) {
        throw new Error('Failed to place order');
      }

      console.log('Order placed successfully');
      alert('Order placed successfully!');

      // Delete all items from the cart
      for (const item of cartItems) {
        await fetch(`http://localhost:3000/api/customer/addtocart/${item._id}`, {
          method: 'DELETE',
        });
      }

      // Refetch cart items to update the UI
      const updatedCartResponse = await fetch('http://localhost:3000/api/customer/addtocart');
      if (updatedCartResponse.ok) {
        const updatedCartData = await updatedCartResponse.json();
        setCartItems(updatedCartData);
        setSubtotal(0); // Reset subtotal
      }

    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing order. Please try again.');
    }
  };



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="">
      <Header />
      <h2 className="p-3 bg-green-800 text-xl font-bold text-center text-white">
        Checkout
      </h2>
      <div className="p-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8">
        <div className="col-span-2 mx-20">
          <h2 className="font-bold text-3xl">Billing Details</h2>
          <div className="mx-10 border p-4">
            <h2 className="text-lg font-bold flex justify-between">
              Subtotal <span>${Subtotal}</span>
            </h2>
            {cartItems.map((item) => (
              <div key={item._id} className="flex gap-6 items-center mb-4">
                <div>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.status}
                      style={{ width: '70px', height: '70px' }}
                      className="border p-2 "
                    />
                  )}
                </div>
                <div>
                  <h2 className="font-bold">{item.name}</h2>
                  <h2>Quantity {item.quantity}</h2>
                  <h2>Seller ID:{item.sellerId}</h2>{/*sellerid*/}
                  <h2 className="text-lg font-bold">$ {item.totalPrice}</h2>
                </div>
              </div>
            ))}
          </div>
          
          
          
        </div>
        <div className="mx-10 border">
          <h2 className="p-3 bg-gray-200 font-bold text-center">Total Cart {cartItems.length}</h2>
          <div className="p-4 flex flex-col gap-4">
            <h2 className="font-bold flex justify-between">
              Subtotal : <span>${Subtotal.toFixed(2)}</span>
            </h2>
            <hr />
            
            <Link to='/Customer/Orderhistory'>
            <Button  onClick={handleOrder} className={`bg-green-700 text-white cursor-pointer`}>
              OK <ArrowBigRight />
            </Button>
            </Link>

          </div>


         

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;