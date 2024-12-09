import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, category, onAddToCart, favorites, onToggleFavorite, onProductClick }) {
  const filteredProducts = category === "Todo"
    ? products
    : products.filter(product => product.category === category);

  return (
    <div className="px-4 py-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            isFavorite={favorites.some(fav => fav.id === product.id)}
            onClick={() => onProductClick(product)}
            onToggleFavorite={() => onToggleFavorite(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

