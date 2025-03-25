// import { TrashIcon } from 'lucide-react';
// import React, { useState, useEffect } from 'react';
// import { Button } from './ui/button';
// import { useNavigate } from 'react-router-dom';

// const CartItemList = () => {
//     const [cartItems, setCartItems] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [Subtotal,setSubtotal] = useState(0);
//     const navigate = useNavigate();

//     //fetch data to cart
//     useEffect(() => {
//         const fetchCartItems = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const response = await fetch('http://localhost:4000/api/AddtoCart');//change
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch cart items');
//                 }
//                 const data = await response.json();
//                 setCartItems(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCartItems();
//     }, []); // Added empty dependency array






//     //calculate total price in cart
//    useEffect(() => {
//     // Change is here: added a check to see if cartItems is not null and has a length greater than zero.
//     if (cartItems && cartItems.length > 0) {
//         let total = 0;
//         cartItems.forEach((item) => {
//             total += item.totalPrice;
//         });
//         setSubtotal(total);
//     } else {
//         // Change is here: if cartItems is null or empty, set subtotal to 0.
//         setSubtotal(0);
//     }

// }, [cartItems]);


    



//     //delete item from cart
//     const handleDelete = async (itemId) => {
//         try {
//             const response = await fetch(`http://localhost:4000/api/AddtoCart/${itemId}`, {//change
//                 method: 'DELETE',
//             });
//             if (!response.ok) {
//                 throw new Error('Failed to delete item');
//             }
//             // Refetch cart items after deletion
//             fetch('http://localhost:4000/api/AddtoCart')//change
//                 .then((response) => response.json())
//                 .then((data) => setCartItems(data));

//                 alert('Item was deleted!');

//         } catch (err) {
//             console.error('Error deleting item:', err);
//         }
//     };

//     //navigate  to checkout page
//     const handleCheckout = () => {
//         navigate('/Home/Checkout', { state: { subtotal: Subtotal } }); // Pass subtotal as state
//     };


//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     if (!cartItems) {
//         return <div>No cart items found.</div>;
//     }


    

    
    

//     return (
//         <div>  
//                 <div className='h-[500px] overflow-auto'>
//                     {cartItems.map((item) => (
//                         <div className='flex justify-between items-center p-2 mb-5'>
//                         <div key={item._id} className='flex gap-6 items-center'>
                            
                            
//                             <div>
//                             {item.image && <img src={item.image} alt={item.name} 
//                             style={{ width: '70px', height: '70px' }} className='border p-2 '/>}
//                             </div>
//                             <div>
//                             <h2 className='font-bold'>{item.name}</h2>
//                             <h2>Quantity {item.quantity}</h2>
//                             <h2 className='text-lg font-bold'>$ {item.totalPrice}</h2>
//                             </div>
                           
//                             <div className='absolute w-[90%] bottom-6 flex flex-col'>

//                     <h2 className='text-lg font-bold flex justify-between'>Subtotal <span>${Subtotal}</span></h2>
//                     <Button onClick={handleCheckout}>Checkout</Button>
//                      </div>
                            
//                         </div>

//                         <TrashIcon className='cursor-pointer' onClick={() => handleDelete(item._id)}/>
//                         </div>
                        


//                     ))}

                    
//                 </div>
                
//             </div>
        
//     );
// };

// export default CartItemList;