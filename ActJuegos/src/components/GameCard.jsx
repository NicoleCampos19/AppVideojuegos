// Se importa React para poder crear el componente visual
import React from 'react';

// Esta es una pequeña parte visual (componente) que representa un solo videojuego.
// Muestra su información (como el nombre, género y más) y también botones para eliminar o editar.
const GameCard = ({ id, title, genre, difficulty, platform, release, onEdit, onDelete }) => {
  return (
    // Esta es la “tarjeta” que envuelve toda la información del juego.
    <div className="bg-white shadow-md rounded-lg p-6 w-72 text-center mb-10">
      
      {/* Aquí se muestran los datos del videojuego */}
      <p className="text-sm font-semibold">Juego: {title}</p>
      <p className="text-sm">Género: {genre}</p>
      <p className="text-sm">Dificultad: {difficulty}</p>
      <p className="text-sm">Plataforma: {platform}</p>
      <p className="text-sm mb-4">Lanzamiento: {release}</p>

      {/* Aquí están los dos botones: uno para eliminar el juego y otro para editarlo */}
      <div className="flex justify-center gap-6">
        <button
          onClick={() => onDelete(id)} // Este botón borra el juego cuando se hace clic
          className="bg-pink-500 text-white text-sm px-4 py-1 rounded-md hover:bg-pink-500 transition-all"
        >
          Eliminar
        </button>
        <button
          onClick={() => onEdit(id)} // Este botón permite editar el juego
          className="text-pink-500 text-sm hover:underline"
        >
          Editar
        </button>
      </div>
    </div>
  );
};

// Esta parte permite que este componente se pueda usar en otras partes del sitio o aplicación.
export default GameCard;
