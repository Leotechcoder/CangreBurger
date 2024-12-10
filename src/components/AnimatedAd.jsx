import React, { useState, useEffect } from 'react';

const adImages = [
  "/banner-8.webp",
  "/banner-10.webp"
];

function AnimatedAd() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % adImages.length);
    }, 10000); // Change image every 17 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-28 overflow-hidden bg-zinc-900">
      {adImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Advertisement ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

export default AnimatedAd;

