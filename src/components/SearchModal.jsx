import React, { useState } from 'react';
import { X } from 'lucide-react';
import ProductCard from './ProductCard';

function SearchModal({ onClose, onSearch, searchResults, onProductClick, favorites, onToggleFavorite }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleClose = () => {
    setSearchTerm('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Buscar Productos</h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSearch} className="mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar productos..."
            className="w-full rounded border p-2"
          />
          <button
            type="submit"
            className="mt-4 w-full rounded bg-pink-600 py-2 text-white hover:bg-pink-700"
          >
            Buscar
          </button>
        </form>
        {searchResults.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {searchResults.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                isFavorite={favorites.some(fav => fav.id === product.id)}
                onClick={() => {
                  onProductClick(product);
                  handleClose();
                }}
                onToggleFavorite={() => onToggleFavorite(product.id)}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
}

export default SearchModal;

