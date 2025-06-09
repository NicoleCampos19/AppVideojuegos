import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import logo from '../assets/logo.png';

const GameForm = ({ onSubmit, gameToEdit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
      if (gameToEdit) {
        reset({
          juego: gameToEdit.juego,
          genero: gameToEdit.genero,
          dificultad: gameToEdit.dificultad,
          plataforma: gameToEdit.plataforma,
          lanzamiento: gameToEdit.lanzamiento,
        }, { shouldValidate: true });
      }
    }, [gameToEdit, reset]);

  const handleFormSubmit = (data) => {
    const formattedData = {
      juego: data.juego,
      genero: data.genero,
      dificultad: data.dificultad,
      plataforma: data.plataforma,
      lanzamiento: data.lanzamiento, 
    };

    onSubmit(formattedData);
    reset(); 
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
      <div className="flex justify-center mb-6">
        <img src={logo} alt="logo" className="w-35 h-16" />
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-pink-500">Juego</label>
          <input
            {...register('juego', { required: 'Este campo es obligatorio' })}
            className="w-full border rounded px-3 py-2"
            placeholder="Nombre del juego"
          />
          {errors.juego && <p className="text-red-500 text-sm">{errors.juego.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-pink-500">Género</label>
          <input
            {...register('genero', { required: 'Este campo es obligatorio' })}
            className="w-full border rounded px-3 py-2"
            placeholder="Género del juego"
          />
          {errors.genero && <p className="text-red-500 text-sm">{errors.genero.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-pink-500">Dificultad</label>
          <input
            {...register('dificultad', { required: 'Este campo es obligatorio' })}
            className="w-full border rounded px-3 py-2"
            placeholder="Dificultad del juego"
          />
          {errors.dificultad && <p className="text-red-500 text-sm">{errors.dificultad.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-pink-500">Plataforma</label>
          <input
            {...register('plataforma', { required: 'Este campo es obligatorio' })}
            className="w-full border rounded px-3 py-2"
            placeholder="Plataforma del juego"
          />
          {errors.plataforma && <p className="text-red-500 text-sm">{errors.plataforma.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-pink-500">Lanzamiento</label>
          <input
            {...register('lanzamiento', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-[0-9]{4}$/,
                message: 'Formato inválido, use DD-MM-YYYY'
              }
            })}
            className="w-full border rounded px-3 py-2"
            placeholder="Ej: 20-12-2024"
          />
          {errors.lanzamiento && <p className="text-red-500 text-sm">{errors.lanzamiento.message}</p>}
        </div>

        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-all"
          >
            {gameToEdit ? 'Actualizar Juego' : 'Agregar Juego'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GameForm;