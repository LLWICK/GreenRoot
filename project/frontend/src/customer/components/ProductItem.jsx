import React from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import ProductItemDetail from "../components/ProductItemDetail"

  

const ProductItem = ({ product,custId }) => {
  return (
    <div className="p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg
    hover:scale-105 hover:shadow-lg transition-all ease-in-out cursor-pointer">
      <img src={product.image} alt="image" width={500} height={200} className='h-[200px] w-[200px] object-contain' />
      <h2 className='font-bold text-lg'>{product.name}</h2>
      <h2 className='font-bold '>Rs.{product.price}</h2>{/*price*/}
      
      <Dialog >
  <DialogTrigger asChild >
  <Button variant="outline" className="text-green-600
       hover:text-black hover:bg-green-600 cursor-pointer">Add to cart</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      
      <DialogDescription>
        <ProductItemDetail custId={custId} product={product}/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  );
};

export default ProductItem;