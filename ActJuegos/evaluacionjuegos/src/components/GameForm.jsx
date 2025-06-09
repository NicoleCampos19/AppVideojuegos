// GameForm.jsx
import React from 'react';
import logo from '../assets/logo.png';

// Formulario para registrar nuevos videojuegos
const GameForm = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
      <div className="flex justify-center mb-6">
        <img src={logo} alt="logo" className="w-16 h-16" />
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-pink-500">Juego</label>
          <input className="w-full border rounded px-3 py-2" placeholder="Nombre del juego" />
        </div>

        <div>
          <label className="block text-sm font-medium text-pink-500">Género</label>
          <input className="w-full border rounded px-3 py-2" placeholder="Género del juego" />
        </div>

        <div>
          <label className="block text-sm font-medium text-pink-500">Dificultad</label>
          <input className="w-full border rounded px-3 py-2" placeholder="Dificultad del juego" />
        </div>

        <div>
          <label className="block text-sm font-medium text-pink-500">Plataforma</label>
          <input className="w-full border rounded px-3 py-2" placeholder="Plataforma del juego" />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-pink-500">Lanzamiento</label>
          <input className="w-full border rounded px-3 py-2" placeholder="Lanzamiento del juego" />
        </div>

        <div className="md:col-span-2 mt-4">
          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-all">
            Agregar Juego
          </button>
        </div>
      </form>
    </div>
  );
};

export default GameForm;
