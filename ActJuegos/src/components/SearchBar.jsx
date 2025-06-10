// Importamos React y una herramienta para guardar y manejar valores que cambian (como lo que escribe el usuario)
import React, { useState } from 'react';

// Este componente es una barra donde el usuario puede escribir para buscar algo
const SearchBar = ({ onSearch }) => {
  // Creamos un espacio donde se guarda lo que el usuario va escribiendo
  const [query, setQuery] = useState('');

  // Esta función se activa cada vez que el usuario escribe algo
  const handleInputChange = (e) => {
    const value = e.target.value;  // Guardamos lo que escribió el usuario
    setQuery(value);               // Actualizamos ese valor
    onSearch(value);               // Llamamos a la función de búsqueda con ese valor
  };

  return (
    // Mostramos una caja donde el usuario puede escribir lo que quiere buscar
    <input
      type="text"                             // Es un campo de texto
      placeholder="Buscar por nombre..."      // Texto que aparece dentro antes de escribir
      value={query}                           // El contenido actual del campo
      onChange={handleInputChange}            // Cada vez que se escribe algo, se ejecuta la función
      className="w-full max-w-md px-4 py-2 border rounded shadow" // Estilo visual del campo
    />
  );
};

// Exportamos el componente para que se pueda usar en otras partes del proyecto
export default SearchBar;
