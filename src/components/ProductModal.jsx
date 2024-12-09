import React, { useState } from 'react';
import { X } from 'lucide-react';

function ProductModal({ product, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [selectedType, setSelectedType] = useState(product.types?.[0] || "");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      size: selectedSize,
      type: selectedType,
      toppings: selectedToppings,
      quantity
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="mb-4 h-48 w-full rounded-lg object-cover"
        />
        <h2 className="mb-2 text-2xl font-bold">{product.name}</h2>
        <p className="mb-4 text-gray-600">{product.description}</p>
        <p className="mb-4 text-xl font-bold text-pink-600">
          ${product.price.toFixed(2)}
        </p>
        {product.sizes && (
          <div className="mb-4">
            <h3 className="mb-2 font-semibold">Tamaño:</h3>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full rounded border p-2"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}
        {product.types && (
          <div className="mb-4">
            <h3 className="mb-2 font-semibold">Tipo:</h3>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full rounded border p-2"
            >
              {product.types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}
        {product.toppings && (
          <div className="mb-4">
            <h3 className="mb-2 font-semibold">Toppings:</h3>
            {product.toppings.map((topping) => (
              <label key={topping} className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  checked={selectedToppings.includes(topping)}
                  onChange={() => {
                    setSelectedToppings((prev) =>
                      prev.includes(topping)
                        ? prev.filter((t) => t !== topping)
                        : [...prev, topping]
                    );
                  }}
                  className="mr-2"
                />
                {topping}
              </label>
            ))}
          </div>
        )}
        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Cantidad:</h3>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-full rounded border p-2"
          />
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full rounded bg-pink-600 py-2 text-white hover:bg-pink-700"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductModal;

