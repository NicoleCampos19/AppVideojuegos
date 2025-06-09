import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar por nombre..."
      value={query}
      onChange={handleInputChange}
      className="w-full max-w-md px-4 py-2 border rounded shadow"
    />
  );
};

export default SearchBar;