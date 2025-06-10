// Se están trayendo funciones necesarias para manejar datos y mostrar mensajes emergentes al usuario.
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// Esta es la dirección de internet donde están guardados los juegos. Es como una base de datos en línea.
const API_URL = "https://retoolapi.dev/9mznW9/videojuegos";

// Esta función sirve para manejar todo lo relacionado con los juegos: verlos, agregarlos, editarlos o eliminarlos.
const useDataGames = () => {
  // Aquí se guarda la lista de juegos. Al principio está vacía.
  const [dataGames, setDataGames] = useState([]); 

  // Esta función se encarga de obtener todos los juegos de la base de datos.
  const getGames = async () => {
    try {
      const response = await fetch(API_URL); // Se hace una solicitud a la dirección para obtener los datos
      if (!response.ok) throw new Error("Error al obtener los juegos"); // Si algo sale mal, se lanza un error
      const data = await response.json(); // Se convierte la respuesta a formato entendible
      setDataGames(data); // Se guarda la lista de juegos
      console.log("Juegos obtenidos:", data); // Esto sirve solo para ver los datos en consola (modo desarrollador)
    } catch (error) {
      console.error("Error:", error); // Si hay un problema, se muestra en la consola
      toast.error("No se pudieron cargar los juegos"); // También se muestra un mensaje en pantalla
    }
  };

  // Esta función permite agregar un nuevo juego.
  const createGame = async (newGame) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST", // Se indica que se quiere enviar un nuevo dato
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGame), // Se convierte el juego a texto
      });
      if (!response.ok) throw new Error("Error al crear el juego");
      toast.success("Juego agregado correctamente"); // Mensaje para el usuario
      getGames(); // Se vuelve a cargar la lista con el nuevo juego incluido
    } catch (error) {
      console.error("Error:", error);
      toast.error("No se pudo crear el juego");
    }
  };

  // Esta función permite editar un juego existente.
  const updateGame = async (id, updatedGame) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT", // PUT significa que se actualizará algo
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedGame), // Se manda la versión editada del juego
      });
      if (!response.ok) throw new Error("Error al actualizar el juego");
      toast.success("Juego actualizado correctamente");
      getGames(); // Se actualiza la lista para mostrar los cambios
    } catch (error) {
      console.error("Error:", error);
      toast.error("No se pudo actualizar el juego");
    }
  };

  // Esta función permite eliminar un juego.
  const deleteGame = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE", // DELETE significa que se quiere borrar algo
      });
      if (!response.ok) throw new Error("Error al eliminar el juego");
      toast.success("Juego eliminado correctamente");
      getGames(); // Se actualiza la lista para quitar el juego borrado
    } catch (error) {
      console.error("Error:", error);
      toast.error("No se pudo eliminar el juego");
    }
  };

  // Esta parte se ejecuta automáticamente cuando se abre la página por primera vez. Carga la lista de juegos.
  useEffect(() => {
    getGames();
  }, []);

  // Aquí se dice qué cosas se pueden usar fuera de esta función: los juegos y todas las acciones (ver, agregar, editar, eliminar).
  return {
    dataGames,  
    getGames,
    createGame,
    updateGame,
    deleteGame,
  };
};

// Se exporta esta función para que pueda ser utilizada en otras partes del proyecto.
export default useDataGames;
