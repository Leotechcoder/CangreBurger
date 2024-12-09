import React, { useEffect, useRef } from 'react';
import { X, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

function SideMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
      >
        <div className="h-full flex flex-col p-4 overflow-y-auto">
          <button onClick={onClose} className="self-end text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
          
          <div className="mt-8 text-center">
            <img src="/logo-1.png" alt="Logo" className="w-20 h-20 mx-auto rounded-full bg-pink-600 p-2" />
            <h2 className="mt-4 text-2xl font-bold text-pink-600">Tu Empresa</h2>
          </div>
          
          <div className="mt-6">
            <p className="text-sm text-gray-600 text-center">
              ¡Bienvenido! Ofrecemos la mejor experiencia culinaria con productos frescos y de alta calidad.
            </p>
          </div>
          
          <nav className="mt-8">
            <ul className="space-y-4">
              <li><a href="/" className="text-gray-800 hover:text-pink-600">Inicio</a></li>
              <li><a href="/menu" className="text-gray-800 hover:text-pink-600">Menú</a></li>
              <li><a href="/about" className="text-gray-800 hover:text-pink-600">Sobre Nosotros</a></li>
              <li><a href="/contact" className="text-gray-800 hover:text-pink-600">Contacto</a></li>
            </ul>
          </nav>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Contáctanos</h3>
            <p className="text-sm text-gray-600">
              Teléfono: (123) 456-7890<br />
              Email: info@tuempresa.com<br />
              Dirección: Calle Principal 123, Ciudad
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-600"><Facebook /></a>
              <a href="#" className="text-gray-600 hover:text-pink-600"><Twitter /></a>
              <a href="#" className="text-gray-600 hover:text-pink-600"><Instagram /></a>
              <a href="#" className="text-gray-600 hover:text-pink-600"><Youtube /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;

