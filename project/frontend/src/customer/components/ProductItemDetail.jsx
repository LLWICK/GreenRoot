import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBasket } from 'lucide-react';


const ProductItemDetail = ({ product }) => {
    if (!product) {
        return <div>Product not available.</div>;
    }

    const [productPrice, setProductPrice] = useState(product.price);//price
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(productPrice);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
        const calculatedTotalPrice = newQuantity * productPrice;
        setTotalPrice(calculatedTotalPrice.toFixed(2));
        //khkhjhjkh
    };

    

    const handleAddToCart = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/AddtoCart', {//change
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    price: productPrice, // productPrice stored in price
                    name: product.name,
                    image: product.image,
                    quantity: quantity,
                    totalPrice: totalPrice,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to add to cart');
            }

            console.log('Product added to cart successfully');
            // Optionally, close the dialog or provide feedback to the user

             // Add the product details to cart

            alert('Item was added!'); // Alert message
        } catch (error) {
            console.error('Error adding to cart:', error);
            // Optionally, display an error message to the user
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black">
             <img

          src={product.image}

          alt={product.name}

          width={300}

          height={300}

          className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg" />
            <div className='flex flex-col gap-3'>
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <h2 className="text-sm  text-gray-500">${product.supplier}</h2>{/*supplier*/}
                <h2 className="font-bold text-3xl">${product.price}</h2>
                <h2 className="font-medium text-lg">Quantity({product.quantity})</h2>
                <div className='flex flex-col items-baseline gap-3'>
                    <div className='flex gap-3 items-center'>
                        <div className='p-2 border flex gap-10 items-center px-5'>
                            <button disabled={quantity === 1} onClick={() => handleQuantityChange(quantity - 1)}>-</button>
                            <h2>{quantity}</h2>
                            <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
                        </div>
                        <h2 className='text-2xl font-bold'>= ${totalPrice}</h2>
                    </div>
                    <Button className="flex gap-3 w-37 bg-green-500" onClick={handleAddToCart}>
                        <ShoppingBasket />
                        Add To Cart
                    </Button>
                </div>
                <h2><span className='font-bold'>Category:</span> {product.category}</h2>
            </div>
        </div>
    );
};

export default ProductItemDetail;