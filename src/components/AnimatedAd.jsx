import React, { useState, useEffect } from 'react';

const adImages = [
  "/ad1.jpg",
  "/ad2.jpg",
  "/ad3.jpg"
];

function AnimatedAd() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % adImages.length);
    }, 17000); // Change image every 17 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 overflow-hidden">
      {adImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Advertisement ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

export default AnimatedAd;

