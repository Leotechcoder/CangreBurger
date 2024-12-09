import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CategoryMenu from './components/CategoryMenu';
import ProductList from './components/ProductList';
import FloatingButtons from './components/FloatingButtons';
import CartModal from './components/CartModal';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';

const initialProducts = [
  // Pizzas
  { id: 1, name: "Margherita", description: "Tomate, mozzarella, albahaca", price: 7500, image: "/placeholder.svg", category: "Pizzas" },
  { id: 2, name: "Pepperoni", description: "Pepperoni, mozzarella", price: 8000, image: "/placeholder.svg", category: "Pizzas" },
  { id: 3, name: "Hawaiana", description: "Jamón, piña, mozzarella", price: 8200, image: "/placeholder.svg", category: "Pizzas" },
  { id: 4, name: "Cuatro Quesos", description: "Mozzarella, gorgonzola, parmesano, provolone", price: 8500, image: "/placeholder.svg", category: "Pizzas" },
  { id: 5, name: "Vegetariana", description: "Pimientos, cebolla, champiñones, aceitunas", price: 8300, image: "/placeholder.svg", category: "Pizzas" },
  { id: 6, name: "BBQ Chicken", description: "Pollo, salsa BBQ, cebolla roja", price: 8700, image: "/placeholder.svg", category: "Pizzas" },
  { id: 7, name: "Mexicana", description: "Carne molida, jalapeños, maíz", price: 8600, image: "/placeholder.svg", category: "Pizzas" },
  { id: 8, name: "Marinara", description: "Ajo, orégano, aceite de oliva", price: 7200, image: "/placeholder.svg", category: "Pizzas" },
  { id: 9, name: "Carbonara", description: "Panceta, huevo, parmesano", price: 8800, image: "/placeholder.svg", category: "Pizzas" },
  { id: 10, name: "Napolitana", description: "Anchoas, alcaparras, ajo", price: 8400, image: "/placeholder.svg", category: "Pizzas" },

  // Hamburguesas
  { id: 11, name: "Clásica", description: "Carne, lechuga, tomate, queso", price: 6500, image: "/placeholder.svg", category: "Hamburguesas" },
  { id: 12, name: "Doble Queso", description: "Doble carne, doble queso", price: 7500, image: "/placeholder.svg", category: "Hamburguesas" },
  { id: 13, name: "Bacon Lover", description: "Carne, bacon, queso cheddar", price: 7800, image: "/placeholder.svg", category: "Hamburguesas" },
  { id: 14, name: "Vegetariana", description: "Hamburguesa de lentejas, aguacate", price: 7000, image: "/placeholder.svg", category: "Hamburguesas" },
  { id: 15, name: "BBQ", description: "Carne, aros de cebolla, salsa BBQ", price: 7600, image: "/placeholder.svg", category: "Hamburguesas" },
  { id: 16, name: "Mexicana", description: "Carne, jalapeños, guacamole", price: 7700, image: "/placeholder.svg", category: "Hamburguesas" },
  { id: 17, name: "Pollo Crujiente", description: "Pollo empanizado, lechuga, mayonesa", price: 7200, image: "/placeholder.svg", category: "Hamburguesas" },
  { id: 18, name: "Mediterránea", description: "Carne de cordero, tzatziki", price: 8000, image: "/placeholder.svg", category: "Hamburguesas" },
  { id: 19, name: "Hawaiana", description: "Carne, piña, queso", price: 7400, image: "/placeholder.svg", category: "Hamburguesas" },
  { id: 20, name: "Tres Quesos", description: "Carne, cheddar, mozzarella, queso azul", price: 7900, image: "/placeholder.svg", category: "Hamburguesas" },

  // Lomitos
  { id: 21, name: "Lomito Clásico", description: "Lomo, lechuga, tomate, mayonesa", price: 8500, image: "/placeholder.svg", category: "Lomito" },
  { id: 22, name: "Lomito Completo", description: "Lomo, jamón, queso, huevo frito", price: 9000, image: "/placeholder.svg", category: "Lomito" },
  { id: 23, name: "Lomito Árabe", description: "Lomo, lechuga, tomate, salsa árabe", price: 8800, image: "/placeholder.svg", category: "Lomito" },
  { id: 24, name: "Lomito Mexicano", description: "Lomo, guacamole, jalapeños", price: 8900, image: "/placeholder.svg", category: "Lomito" },
  { id: 25, name: "Lomito Caprese", description: "Lomo, mozzarella, tomate, albahaca", price: 8700, image: "/placeholder.svg", category: "Lomito" },
  { id: 26, name: "Lomito BBQ", description: "Lomo, bacon, cebolla caramelizada, salsa BBQ", price: 9100, image: "/placeholder.svg", category: "Lomito" },
  { id: 27, name: "Lomito Vegetariano", description: "Berenjena, zucchini, pimientos asados", price: 8300, image: "/placeholder.svg", category: "Lomito" },
  { id: 28, name: "Lomito de Pollo", description: "Pechuga de pollo, lechuga, tomate", price: 8200, image: "/placeholder.svg", category: "Lomito" },
  { id: 29, name: "Lomito Hawaiano", description: "Lomo, piña, queso", price: 8600, image: "/placeholder.svg", category: "Lomito" },
  { id: 30, name: "Lomito al Roquefort", description: "Lomo, queso roquefort, rúcula", price: 9200, image: "/placeholder.svg", category: "Lomito" },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todo');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [favorites, setFavorites] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filteredProducts = initialProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredProducts);
    } else {
      setSearchResults([]);
    }
  };

  const handleToggleFavorite = (productId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.some(product => product.id === productId)) {
        return prevFavorites.filter(product => product.id !== productId);
      } else {
        const productToAdd = initialProducts.find(product => product.id === productId);
        return [...prevFavorites, productToAdd];
      }
    });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  useEffect(() => {
    if (selectedCategory === 'Todo') {
      setProducts(initialProducts);
    } else {
      const filteredProducts = initialProducts.filter(product => product.category === selectedCategory);
      setProducts(filteredProducts);
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onSearch={handleSearch}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        onProductClick={handleProductClick}
        searchResults={searchResults}
      />
      <main className="flex-grow">
        <HeroBanner />
        <CategoryMenu onCategoryChange={handleCategoryChange} />
        <ProductList
          products={products}
          category={selectedCategory}
          onAddToCart={handleAddToCart}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onProductClick={handleProductClick}
        />
        <FloatingButtons
          cartItemCount={cartItems.length}
          onCartClick={() => setIsCartOpen(true)}
        />
        {isCartOpen && (
          <CartModal items={cartItems} onClose={() => setIsCartOpen(false)} />
        )}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
            isFavorite={favorites.some(fav => fav.id === selectedProduct.id)}
            onToggleFavorite={() => handleToggleFavorite(selectedProduct.id)}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
