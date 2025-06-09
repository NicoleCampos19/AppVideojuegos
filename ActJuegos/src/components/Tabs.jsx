// Tabs.jsx
import React from 'react';

// Componente que permite cambiar entre "Listado" y "Gestionar"
const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center gap-10 mt-10">
      <button
        onClick={() => setActiveTab('listado')}
        className={`text-lg font-semibold transition-all ${
          activeTab === 'listado' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-black'
        }`}
      >
        Listado de videojuegos
      </button>
      <button
        onClick={() => setActiveTab('gestionar')}
        className={`text-lg font-semibold transition-all ${
          activeTab === 'gestionar' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-black'
        }`}
      >
        Gestionar videojuegos
      </button>
    </div>
  );
};

export default Tabs;
