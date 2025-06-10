// Se importa React y una herramienta que ayuda a manejar formularios fácilmente.
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import logo from '../assets/logo.png'; // Se importa el logo que se muestra en el formulario

// Este componente es un formulario donde las personas pueden escribir o editar los datos de un videojuego.
const GameForm = ({ onSubmit, gameToEdit }) => {
  // Se preparan herramientas para manejar el formulario: registrar datos, enviarlos y mostrar errores.
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // Si el formulario va a editar un juego existente, se llenan los campos con esa información.
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

  // Cuando se envía el formulario, se organizan los datos y se llama a una función para guardarlos.
  const handleFormSubmit = (data) => {
    const formattedData = {
      juego: data.juego,
      genero: data.genero,
      dificultad: data.dificultad,
      plataforma: data.plataforma,
      lanzamiento: data.lanzamiento, 
    };

    onSubmit(formattedData); // Se envían los datos al componente principal
    reset(); // Se limpia el formulario
  };

  return (
    // Esta es la caja visual que contiene todo el formulario
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
      
      {/* Aquí se muestra el logo arriba del formulario */}
      <div className="flex justify-center mb-6">
        <img src={logo} alt="logo" className="w-35 h-16" />
      </div>

      {/* Aquí comienza el formulario como tal */}
      <form onSubmit={handleSubmit(handleFormSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Campo para escribir el nombre del juego */}
        <div>
          <label className="block text-sm font-medium text-pink-500">Juego</label>
          <input
            {...register('juego', { required: 'Este campo es obligatorio' })}
            className="w-full border rounded px-3 py-2"
            placeholder="Nombre del juego"
          />
          {errors.juego && <p className="text-red-500 text-sm">{errors.juego.message}</p>}
        </div>

        {/* Campo para escribir el género del juego */}
        <div>
          <label className="block text-sm font-medium text-pink-500">Género</label>
          <input
            {...register('genero', { required: 'Este campo es obligatorio' })}
            className="w-full border rounded px-3 py-2"
            placeholder="Género del juego"
          />
          {errors.genero && <p className="text-red-500 text-sm">{errors.genero.message}</p>}
        </div>

        {/* Campo para indicar la dificultad del juego */}
        <div>
          <label className="block text-sm font-medium text-pink-500">Dificultad</label>
          <input
            {...register('dificultad', { required: 'Este campo es obligatorio' })}
            className="w-full border rounded px-3 py-2"
            placeholder="Dificultad del juego"
          />
          {errors.dificultad && <p className="text-red-500 text-sm">{errors.dificultad.message}</p>}
        </div>

        {/* Campo para escribir en qué plataforma se juega */}
        <div>
          <label className="block text-sm font-medium text-pink-500">Plataforma</label>
          <input
            {...register('plataforma', { required: 'Este campo es obligatorio' })}
            className="w-full border rounded px-3 py-2"
            placeholder="Plataforma del juego"
          />
          {errors.plataforma && <p className="text-red-500 text-sm">{errors.plataforma.message}</p>}
        </div>

        {/* Campo para indicar la fecha de lanzamiento del juego */}
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

        {/* Botón para enviar el formulario */}
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-all"
          >
            {/* El texto cambia dependiendo de si se está editando o agregando un juego nuevo */}
            {gameToEdit ? 'Actualizar Juego' : 'Agregar Juego'}
          </button>
        </div>
      </form>
    </div>
  );
};

// Permite que este formulario se use en otras partes del sitio
export default GameForm;
