import React from 'react';
import { Heart } from 'lucide-react';

function ProductCard({ id, name, description, price, oldPrice, image, bestSeller, isFavorite, onClick, onToggleFavorite }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-lg">
      {bestSeller && (
        <span className="absolute left-4 top-4 bg-pink-600 text-white px-2 py-1 rounded-full text-xs font-bold">
          Más Vendido
        </span>
      )}
      <img
        src={image}
        alt={name}
        className="h-48 w-full rounded-2xl object-cover"
        onClick={onClick}
      />
      <span className="mt-4" onClick={onclick}>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <button
            onClick={() => onToggleFavorite(id)}
            className={`p-2 rounded-full ${isFavorite ? 'text-pink-600' : 'text-gray-400'}`}
          >
            <Heart className="h-6 w-6" fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-2xl font-bold text-pink-600">
            ${price.toFixed(2)}
          </span>
          {oldPrice && (
            <span className="text-lg text-gray-400 line-through">
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </span>
    </div>
  );
}

export default ProductCard;

