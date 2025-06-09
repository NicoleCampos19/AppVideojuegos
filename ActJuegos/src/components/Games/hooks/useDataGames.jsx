import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const API_URL = "https://retoolapi.dev/9mznW9/videojuegos";

const useDataGames = () => {
  const [dataGames, setDataGames] = useState([]); 

const getGames = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener los juegos");
    const data = await response.json();
    setDataGames(data);
    console.log("Juegos obtenidos:", data); // Verifica los datos
  } catch (error) {
    console.error("Error:", error);
    toast.error("No se pudieron cargar los juegos");
  }
};

  const createGame = async (newGame) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGame),
      });
      if (!response.ok) throw new Error("Error al crear el juego");
      toast.success("Juego agregado correctamente");
      getGames();
    } catch (error) {
      console.error("Error:", error);
      toast.error("No se pudo crear el juego");
    }
  };

  const updateGame = async (id, updatedGame) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedGame),
      });
      if (!response.ok) throw new Error("Error al actualizar el juego");
      toast.success("Juego actualizado correctamente");
      getGames();
    } catch (error) {
      console.error("Error:", error);
      toast.error("No se pudo actualizar el juego");
    }
  };

  const deleteGame = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Error al eliminar el juego");
      toast.success("Juego eliminado correctamente");
      getGames();
    } catch (error) {
      console.error("Error:", error);
      toast.error("No se pudo eliminar el juego");
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  return {
    dataGames,  // Devolviendo 'dataGames'
    getGames,
    createGame,
    updateGame,
    deleteGame,
  };
};

export default useDataGames;
