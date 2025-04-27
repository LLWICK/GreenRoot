import React, { useState, useEffect, useRef } from 'react';

const Slider = () => {
  const imageUrls = [
    '/customer_images/second.png',
    '/customer_images/last.jpg',
    '/customer_images/products.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 3000; // 3 seconds

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[300px] md:h-[600px] p-5 md:p-10 px-8 overflow-hidden">
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg">
        {imageUrls.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-3xl transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {imageUrls.map((_, idx) => (
          <div
            key={idx}
            className={`w-4 h-4 rounded-full ${
              idx === currentIndex ? 'bg-green-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
