import React, { useState, useEffect } from "react";
import { mockBurgers } from "../Data/products";

const SliderArticles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  // Ajustar el número de artículos visibles según el tamaño de pantalla
  const updateItemsPerSlide = () => {
    if (window.innerWidth >= 1024) {
      setItemsPerSlide(Math.floor(window.innerWidth / 350)); // Calcular cuántos entran con ancho máx. de 350px
    } else {
      setItemsPerSlide(1); // En pantallas pequeñas, solo uno a la vez
    }
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.ceil(mockBurgers.length / itemsPerSlide) - 1;
      return prevIndex === maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.ceil(mockBurgers.length / itemsPerSlide) - 1;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 15000);
    return () => clearInterval(timer);
  }, [itemsPerSlide]);

  return (
    <div className="relative w-full overflow-hidden px-4 py-6">
      {/* Contenedor del slider */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${(mockBurgers.length / itemsPerSlide) * 100}%`,
        }}
      >
        {mockBurgers.map((article, index) => (
          <div
            key={article.id}
            className="flex-shrink-0 p-4"
            style={{
              flex: `0 0 ${100 / itemsPerSlide}%`, // Ancho dinámico según los artículos visibles
              maxWidth: itemsPerSlide === 1 ? "350px" : "100%", // 100% para pantallas pequeñas
            }}
          >
            {/* Contenido del artículo */}
            <div className="h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                </div>
                <p className="text-lg font-bold text-blue-600">
                  ${article.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 focus:outline-none z-10"
      >
        ◀
      </button>

      {/* Flecha derecha */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700 focus:outline-none z-10"
      >
        ▶
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({
          length: Math.ceil(mockBurgers.length / itemsPerSlide),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-blue-600"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SliderArticles;
