// GameCard.jsx
import React from 'react';

// Componente individual que muestra los datos de un videojuego
const GameCard = ({ title, genre, difficulty, platform, release }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-72 text-center">
      <p className="text-sm font-semibold">Juego: {title}</p>
      <p className="text-sm">Género: {genre}</p>
      <p className="text-sm">Dificultad: {difficulty}</p>
      <p className="text-sm">Plataforma: {platform}</p>
      <p className="text-sm mb-4">Lanzamiento: {release}</p>

      <div className="flex justify-center gap-6">
        <button className="bg-indigo-500 text-white text-sm px-4 py-1 rounded-md hover:bg-indigo-600 transition-all">Eliminar</button>
        <button className="text-indigo-600 text-sm hover:underline">Editar</button>
      </div>
    </div>
  );
};

export default GameCard;
