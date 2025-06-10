// Importamos React y una herramienta que nos ayuda a conectar este campo con el formulario principal
import React from 'react';
import { useFormContext } from 'react-hook-form';

// Definimos un componente que representa un campo de entrada de datos (como nombre, correo, etc.)
const InputField = ({ name, label, type = "text" }) => {
  // Usamos la herramienta para enlazar este campo al formulario general
  const { register } = useFormContext();

  return (
    // Contenedor que apila las cosas una debajo de otra con espacio entre ellas
    <div className="flex flex-col gap-2">

      {/* Muestra una palabra o frase encima del campo de entrada para indicar qué se debe escribir */}
      <label htmlFor={name} className="text-lg font-medium text-gray-800">{label}</label>
      
      {/* Este es el espacio donde el usuario escribe (puede ser texto, número, etc.) */}
      <input
        type={type} // Define qué tipo de dato se espera (texto, número, etc.)
        id={name}   // El identificador del campo (para enlazarlo con la etiqueta de arriba)
        {...register(name)} // Conecta este campo con el formulario para que se registre su valor
        className="w-full px-4 py-3 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out placeholder:text-gray-500"
        placeholder={`Escribe tu ${label.toLowerCase()}`} // Texto que aparece dentro del campo antes de escribir
      />
      
      {/* Aquí se podría mostrar un mensaje si algo está mal, como si el campo está vacío. Está comentado por ahora */}
      {/* <p className="text-sm text-red-500">Error message</p> */}
    </div>
  );
};

// Exportamos el campo para que pueda usarse en otras partes de la app
export default InputField;
