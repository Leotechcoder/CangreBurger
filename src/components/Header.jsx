import React, { useState } from 'react';
import { Heart, Menu, Search } from 'lucide-react';
import SideMenu from './SideMenu';
import SearchModal from './SearchModal';
import FavoritesModal from './FavoritesModal';

function Header({ onSearch, favorites, onToggleFavorite, onProductClick, searchResults, onFavoritesClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  //const [isFavoritesOpen, setIsFavoritesOpen] = useState(false); //Removed

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-pink-600 px-4 py-2">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img
            src="/logo-1.png"
            alt="Logo"
            className="w-12 h-12 rounded-full bg-white p-2"
          />
        </a>
        <div className="flex items-center gap-4">
          <button className="text-white" onClick={onFavoritesClick}>
            <Heart className={`h-6 w-6 ${favorites.length > 0 ? 'fill-current' : ''}`} />
          </button>
          <button className="text-white" onClick={() => setIsSearchOpen(true)}>
            <Search className="h-6 w-6" />
          </button>
          <button className="text-white" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {isSearchOpen && (
        <SearchModal
          onClose={() => setIsSearchOpen(false)}
          onSearch={onSearch}
          searchResults={searchResults}
          onProductClick={onProductClick}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      )}
      {/* Removed FavoritesModal */}
    </header>
  );
}

export default Header;

