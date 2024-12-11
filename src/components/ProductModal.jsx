import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useBackButton } from '../hooks/useBackButton';

const pizzaSizes = ['Personal', 'Mediana', 'Familiar'];
const extraToppings = ['Queso extra', 'Champiñones', 'Aceitunas', 'Cebolla', 'Pimiento'];
const hamburgerExtras = ['Bacon', 'Huevo frito', 'Queso extra', 'Cebolla caramelizada'];
const lomitoExtras = ['Huevo frito', 'Queso extra', 'Jamón', 'Panceta'];

function ProductModal({ product, onClose, onAddToCart, onUpdateCart, isEditing }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [additionalComments, setAdditionalComments] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product.category === 'Pizzas') {
      setSelectedSize(product.size || pizzaSizes[0]);
    }
    if (product.extras) {
      setSelectedExtras(product.extras);
    }
    if (product.additionalComments) {
      setAdditionalComments(product.additionalComments);
    }
    if (product.quantity) {
      setQuantity(product.quantity);
    }
  }, [product]);

  const handleSubmit = () => {
    const updatedItem = {
      ...product,
      size: selectedSize,
      extras: selectedExtras,
      additionalComments,
      quantity,
    };
    if (isEditing) {
      onUpdateCart(updatedItem);
    } else {
      onAddToCart(updatedItem);
    }
    onClose();
  };

  const toggleExtra = (extra) => {
    setSelectedExtras(prev =>
      prev.includes(extra)
        ? prev.filter(e => e !== extra)
        : [...prev, extra]
    );
  };

  const getExtraOptions = () => {
    switch (product.category) {
      case 'Pizzas':
        return extraToppings;
      case 'Hamburguesas':
        return hamburgerExtras;
      case 'Lomito':
        return lomitoExtras;
      default:
        return [];
    }
  };

  useBackButton(true, onClose);

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

        {product.category === 'Pizzas' && (
          <div className="mb-4">
            <h3 className="mb-2 font-semibold">Tamaño:</h3>
            <div className="flex flex-wrap gap-2">
              {pizzaSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-full px-3 py-1 text-sm ${
                    selectedSize === size
                      ? 'bg-pink-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}


        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Extras:</h3>
          <div className="flex flex-wrap gap-2">
            {getExtraOptions().map((extra) => (
              <button
                key={extra}
                onClick={() => toggleExtra(extra)}
                className={`rounded-full px-3 py-1 text-sm ${
                  selectedExtras.includes(extra)
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {extra}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Comentarios adicionales:</h3>
          <textarea
            value={additionalComments}
            onChange={(e) => setAdditionalComments(e.target.value)}
            className="w-full rounded border p-2"
            rows="3"
          />
        </div>

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
          onClick={handleSubmit}
          className="w-full rounded bg-pink-600 py-2 text-white hover:bg-pink-700"
        >
          {isEditing ? 'Actualizar producto' : 'Agregar al carrito'}
        </button>
      </div>
    </div>
  );
}

export default ProductModal;

