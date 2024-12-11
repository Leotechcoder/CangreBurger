import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AnimatedAd from "./components/AnimatedAd"
import HeroBanner from './components/HeroBanner';
import CategoryMenu from './components/CategoryMenu';
import ProductList from './components/ProductList';
import FloatingButtons from './components/FloatingButtons';
import CartModal from './components/CartModal';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import FavoritesModal from './components/FavoritesModal';
import SearchModal from './components/SearchModal';
import SideMenu from './components/SideMenu';

const initialProducts = [
  // Pizzas
  { id: 1, name: "Margherita", description: "Tomate, mozzarella, albahaca", price: 7500, image: "/background-1", category: "Pizzas" },
  { id: 2, name: "Pepperoni", description: "Pepperoni, mozzarella", price: 8000, image: "/background-2.webp", category: "Pizzas" },
  { id: 3, name: "Hawaiana", description: "Jamón, piña, mozzarella", price: 8200, image: "/background-3.jfif", category: "Pizzas" },
  { id: 4, name: "Cuatro Quesos", description: "Mozzarella, gorgonzola, parmesano, provolone", price: 8500, image: "/background-4.avif", category: "Pizzas" },
  { id: 5, name: "Vegetariana", description: "Pimientos, cebolla, champiñones, aceitunas", price: 8300, image: "/background-5.avif", category: "Pizzas" },
  { id: 6, name: "BBQ Chicken", description: "Pollo, salsa BBQ, cebolla roja", price: 8700, image: "/background-1", category: "Pizzas" },
  { id: 7, name: "Mexicana", description: "Carne molida, jalapeños, maíz", price: 8600, image: "/background-2.webp", category: "Pizzas" },
  { id: 8, name: "Marinara", description: "Ajo, orégano, aceite de oliva", price: 7200, image: "/background-3.jfif", category: "Pizzas" },
  { id: 9, name: "Carbonara", description: "Panceta, huevo, parmesano", price: 8800, image: "/background-4.avif", category: "Pizzas" },
  { id: 10, name: "Napolitana", description: "Anchoas, alcaparras, ajo", price: 8400, image: "/background-5.avif", category: "Pizzas" },

  // Hamburguesas
  { id: 11, name: "Clásica", description: "Carne, lechuga, tomate, queso", price: 6500, image: "/background-1", category: "Hamburguesas" },
  { id: 12, name: "Doble Queso", description: "Doble carne, doble queso", price: 7500, image: "/background-2.webp", category: "Hamburguesas" },
  { id: 13, name: "Bacon Lover", description: "Carne, bacon, queso cheddar", price: 7800, image: "/background-3.jfif", category: "Hamburguesas" },
  { id: 14, name: "Vegetariana", description: "Hamburguesa de lentejas, aguacate", price: 7000, image: "/background-4.avif", category: "Hamburguesas" },
  { id: 15, name: "BBQ", description: "Carne, aros de cebolla, salsa BBQ", price: 7600, image: "/background-5.avif", category: "Hamburguesas" },
  { id: 16, name: "Mexicana", description: "Carne, jalapeños, guacamole", price: 7700, image: "/background-1", category: "Hamburguesas" },
  { id: 17, name: "Pollo Crujiente", description: "Pollo empanizado, lechuga, mayonesa", price: 7200, image: "/background-2.webp", category: "Hamburguesas" },
  { id: 18, name: "Mediterránea", description: "Carne de cordero, tzatziki", price: 8000, image: "/background-3.jfif", category: "Hamburguesas" },
  { id: 19, name: "Hawaiana", description: "Carne, piña, queso", price: 7400, image: "/background-4.avif", category: "Hamburguesas" },
  { id: 20, name: "Tres Quesos", description: "Carne, cheddar, mozzarella, queso azul", price: 7900, image: "/background-5.avif", category: "Hamburguesas" },

  // Lomitos
  { id: 21, name: "Lomito Clásico", description: "Lomo, lechuga, tomate, mayonesa", price: 8500, image: "/background-1", category: "Lomito" },
  { id: 22, name: "Lomito Completo", description: "Lomo, jamón, queso, huevo frito", price: 9000, image: "/background-2.webp", category: "Lomito" },
  { id: 23, name: "Lomito Árabe", description: "Lomo, lechuga, tomate, salsa árabe", price: 8800, image: "/background-3.jfif", category: "Lomito" },
  { id: 24, name: "Lomito Mexicano", description: "Lomo, guacamole, jalapeños", price: 8900, image: "/background-4.avif", category: "Lomito" },
  { id: 25, name: "Lomito Caprese", description: "Lomo, mozzarella, tomate, albahaca", price: 8700, image: "/background-5.avif", category: "Lomito" },
  { id: 26, name: "Lomito BBQ", description: "Lomo, bacon, cebolla caramelizada, salsa BBQ", price: 9100, image: "/background-1", category: "Lomito" },
  { id: 27, name: "Lomito Vegetariano", description: "Berenjena, zucchini, pimientos asados", price: 8300, image: "/background-2.webp", category: "Lomito" },
  { id: 28, name: "Lomito de Pollo", description: "Pechuga de pollo, lechuga, tomate", price: 8200, image: "/background-3.jfif", category: "Lomito" },
  { id: 29, name: "Lomito Hawaiano", description: "Lomo, piña, queso", price: 8600, image: "/background-4.avif", category: "Lomito" },
  { id: 30, name: "Lomito al Roquefort", description: "Lomo, queso roquefort, rúcula", price: 9200, image: "/background-5.avif", category: "Lomito" },
];


function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todo');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    // Simular una carga de datos
    const timer = setTimeout(() => {
      setProducts(initialProducts);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, cartId: Date.now() }]);
  };

  const handleUpdateCart = (updatedItem) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.cartId === updatedItem.cartId ? updatedItem : item
      )
    );
    setEditingProduct(null);
  };

  const handleRemoveFromCart = (cartId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.cartId !== cartId));
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filteredProducts = products.filter(product =>
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
        const productToAdd = products.find(product => product.id === productId);
        return [...prevFavorites, productToAdd];
      }
    });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleEditCartItem = (item) => {
    setEditingProduct(item);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header
        onSearch={() => setIsSearchOpen(true)}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        onProductClick={handleProductClick}
        searchResults={searchResults}
        onFavoritesClick={() => setIsFavoritesOpen(true)}
      />
      <main className="flex-grow">
        <AnimatedAd />
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
          <CartModal
            items={cartItems}
            onClose={() => setIsCartOpen(false)}
            onEditItem={handleEditCartItem}
            onRemoveFromCart={handleRemoveFromCart}
          />
        )}
        {isFavoritesOpen && (
          <FavoritesModal
            favorites={favorites}
            onClose={() => setIsFavoritesOpen(false)}
            onProductClick={handleProductClick}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
        {isSearchOpen && (
          <SearchModal
            onClose={() => setIsSearchOpen(false)}
            onSearch={handleSearch}
            searchResults={searchResults}
            onProductClick={handleProductClick}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
        {isSideMenuOpen && (
          <SideMenu
            isOpen={isSideMenuOpen}
            onClose={() => setIsSideMenuOpen(false)}
          />
        )}
        {(selectedProduct || editingProduct) && (
          <ProductModal
            product={editingProduct || selectedProduct}
            onClose={() => {
              setSelectedProduct(null);
              setEditingProduct(null);
            }}
            onAddToCart={handleAddToCart}
            onUpdateCart={handleUpdateCart}
            isEditing={!!editingProduct}
            isFavorite={favorites.some(fav => fav.id === (editingProduct || selectedProduct).id)}
            onToggleFavorite={() => handleToggleFavorite((editingProduct || selectedProduct).id)}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;