import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Slider = () => {
  const imageUrls = [
    '/customer_images/second.png',
    '/customer_images/last.jpg',
    '/customer_images/products.jpg',
  ];

  return (
    <div className="p-5 md:p-10 px-16">
      <Carousel>
        <CarouselContent>
          {imageUrls.map((imageUrl, index) => (
            <CarouselItem key={index}>
              <img
                src={imageUrl}
                alt={`slider ${index + 1}`}
                width={1000}
                height={400}
                className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;