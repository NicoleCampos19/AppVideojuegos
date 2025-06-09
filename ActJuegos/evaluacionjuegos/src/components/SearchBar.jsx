// SearchBar.jsx
import React from 'react';
import { Search } from 'lucide-react';

// Componente que representa una barra de búsqueda
const SearchBar = () => {
  return (
    <div className="flex items-center justify-center mt-6">
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          placeholder="Buscar videojuego"
          className="w-full pl-4 pr-10 py-2 rounded-lg border shadow focus:outline-none"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      </div>
    </div>
  );
};

export default SearchBar;
