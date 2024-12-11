import React from 'react';

function ProductCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-lg animate-pulse">
      <div className="h-48 w-full rounded-2xl bg-gray-300 mb-4"></div>
      <div className="h-6 w-3/4 bg-gray-300 mb-2"></div>
      <div className="h-4 w-1/2 bg-gray-300 mb-4"></div>
      <div className="h-6 w-1/4 bg-gray-300"></div>
    </div>
  );
}

export default ProductCardSkeleton;

