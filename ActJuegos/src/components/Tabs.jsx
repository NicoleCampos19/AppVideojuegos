// Importamos React para poder crear el componente
import React from 'react';

// Este componente muestra dos botones que sirven para cambiar de vista: "Listado" o "Gestionar"
const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    // Usamos un contenedor para colocar los dos botones uno al lado del otro y centrados
    <div className="flex justify-center gap-10 mt-10">
      
      {/* Botón para ver el listado de videojuegos */}
      <button
        onClick={() => setActiveTab('listado')} // Al hacer clic, se activa la vista de listado
        className={`text-lg font-semibold transition-all ${
          // Si este botón está activo, se pinta en color rosa y con una línea abajo
          activeTab === 'listado' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-black'
        }`}
      >
        Listado de videojuegos
      </button>

      {/* Botón para ir a la parte donde se gestionan los videojuegos (agregar o editar) */}
      <button
        onClick={() => setActiveTab('gestionar')} // Al hacer clic, cambia a la vista de gestionar
        className={`text-lg font-semibold transition-all ${
          // Si este botón está activo, también se pinta en rosa y con una línea abajo
          activeTab === 'gestionar' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-black'
        }`}
      >
        Gestionar videojuegos
      </button>
    </div>
  );
};

// Exportamos el componente para poder usarlo desde otras partes del proyecto
export default Tabs;
