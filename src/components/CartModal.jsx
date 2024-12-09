import React from 'react';
import { X } from 'lucide-react';

function CartModal({ items, onClose }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="mb-4 text-2xl font-bold">Carrito de Compras</h2>
        {items.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.id} className="mb-4 flex items-center border-b pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="mr-4 h-20 w-20 rounded-lg object-cover"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  {item.size && <p className="text-sm">Tamaño: {item.size}</p>}
                  {item.type && <p className="text-sm">Tipo: {item.type}</p>}
                  {item.toppings && item.toppings.length > 0 && (
                    <p className="text-sm">Toppings: {item.toppings.join(", ")}</p>
                  )}
                  <p className="text-sm">Cantidad: {item.quantity}</p>
                  <p className="text-sm font-semibold">
                    Precio: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <div className="mt-4 border-t pt-4">
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            </div>
            <button className="mt-4 w-full rounded bg-pink-600 py-2 text-white hover:bg-pink-700">
              Proceder al pago
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;

