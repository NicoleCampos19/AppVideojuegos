import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputField = ({ name, label, type = "text" }) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      {/* Etiqueta */}
      <label htmlFor={name} className="text-lg font-medium text-gray-800">{label}</label>
      
      {/* Campo de Entrada */}
      <input
        type={type}
        id={name}
        {...register(name)}
        className="w-full px-4 py-3 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out placeholder:text-gray-500"
        placeholder={`Escribe tu ${label.toLowerCase()}`}
      />
      
      {/* Agregar un mensaje de error si es necesario */}
      {/* <p className="text-sm text-red-500">Error message</p> */}
    </div>
  );
};

export default InputField;