import React, { useState, useEffect, useRef } from 'react';

const categories = ["Todo", "Hamburguesas", "Pizzas", "Lomito"];

function CategoryMenu({ onCategoryChange }) {
  const [selected, setSelected] = useState("Todo");
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current && placeholderRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        const placeholderRect = placeholderRef.current.getBoundingClientRect();
        
        if (placeholderRect.top <= 0 && !isSticky) {
          setIsSticky(true);
        } else if (placeholderRect.top > 0 && isSticky) {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky]);

  const handleCategoryClick = (category) => {
    setSelected(category);
    onCategoryChange(category);
  };

  return (
    <>
      <div ref={placeholderRef} style={{ height: isSticky ? '56px' : '0' }} />
      <div
        ref={menuRef}
        className={`bg-white shadow-md transition-all duration-300 ${
          isSticky ? 'fixed top-0 left-0 right-0 z-40' : ''
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="no-scrollbar flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  selected === category
                    ? "bg-pink-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryMenu;

