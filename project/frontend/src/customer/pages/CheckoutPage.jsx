// import React from 'react';
// import { Button } from '../components/ui/button'; // Corrected path
// import { ArrowBigRight } from 'lucide-react';
// import { useLocation } from 'react-router-dom'; // Import useLocation
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const CheckoutPage = () => {

//     const location = useLocation(); // Use useLocation to access location
//     const subtotal = location.state?.subtotal || 0; // Get subtotal from state or default to 0

//     const delivery = 15; // Delivery fee
//     const taxRate = 0.09; // Tax rate (9%)

//     const tax = subtotal * taxRate; // Calculate tax
//     const total = subtotal + delivery + tax; // Calculate total

//   return (
    
//     <div className="">
//         <Header />
        
//       <h2 className="p-3 bg-green-800 text-xl font-bold text-center text-white"> {/* Corrected text-while to text-white */}
//         Checkout
//       </h2>
//       <div className="p-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8">
//         <div className="col-span-2 mx-20">
//           <h2 className="font-bold text-3xl">Billing Details</h2>
//           <div className="mx-10 border">
//           <h2 className="p-3 bg-gray-200 font-bold text-center">Total Cart {3}</h2>
//           <div className="p-4 flex flex-col gap-4">
//             <h2 className="font-bold flex justify-between">
//             Subtotal : <span>${subtotal.toFixed(2)}</span>
//             </h2>
//             <hr />
//             <h2 className="flex justify-between">
//             Delivery <span>${delivery.toFixed(2)}</span>
//             </h2>
//             <h2 className="flex justify-between">
//             Tax {9}% <span>${tax.toFixed(2)}</span>
//             </h2>
//             <hr />
//             <h2 className="font-bold flex justify-between">
//             Total :<span>${total.toFixed(2)}</span>
//             </h2>
           
//           </div>
//         </div>
//           <div className="grid grid-cols-2 gap-10 mt-3">
          
//             <input type="text" placeholder="Name" />
//             <input type="email" placeholder="Email" /> {/* corrected Email to email */}
//           </div>
//           <div className="grid grid-cols-2 gap-10 mt-3">
//             <input type="text" placeholder="Phone" />
//             <input type="text" placeholder="Zip" />
//           </div>
//           <div className="mt-3">
//             <input type="text" placeholder="Address" />
//           </div>
//         </div>
//         <div className="mx-10 border">
//           <h2 className="p-3 bg-gray-200 font-bold text-center">Total Cart {3}</h2>
//           <div className="p-4 flex flex-col gap-4">
//             <h2 className="font-bold flex justify-between">
//             Subtotal : <span>${subtotal.toFixed(2)}</span>
//             </h2>
//             <hr />
//             <h2 className="flex justify-between">
//             Delivery <span>${delivery.toFixed(2)}</span>
//             </h2>
//             <h2 className="flex justify-between">
//             Tax {9}% <span>${tax.toFixed(2)}</span>
//             </h2>
//             <hr />
//             <h2 className="font-bold flex justify-between">
//             Total :<span>${total.toFixed(2)}</span>
//             </h2>
//             <Button className={`bg-green-700 text-white cursor-pointer`}>
//               Payment <ArrowBigRight />
//             </Button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CheckoutPage;