import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

function ProductList({ products, category, onAddToCart, favorites, onToggleFavorite, onProductClick }) {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const filtered = category === "Todo"
        ? products
        : products.filter(product => product.category === category);
      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 1000); // Simulating a 1 second load time

    return () => clearTimeout(timer);
  }, [category, products]);

  return (
    <div className="p-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                isFavorite={favorites.some(fav => fav.id === product.id)}
                onClick={() => onProductClick(product)}
                onToggleFavorite={() => onToggleFavorite(product.id)}
              />
            ))
        }
      </div>
    </div>
  );
}

export default ProductList;

