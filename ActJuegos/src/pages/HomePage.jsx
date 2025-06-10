// Esta es la página principal donde se muestra y gestiona la lista de juegos.
import React, { useState, useEffect } from 'react';

// Aquí se traen componentes que ya están hechos, como una tarjeta para mostrar cada juego, un formulario para agregar o editar, una barra de búsqueda y las pestañas.
import GameCard from '../components/GameCard';
import GameForm from '../components/GameForm';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';

// Este archivo se encarga de manejar los datos: obtener juegos, agregarlos, modificarlos o eliminarlos.
import useDataGames from '../components/Games/hooks/useDataGames';

// Esta es la función principal que muestra todo lo que verá el usuario en la página.
const HomePage = () => {
  // Se guarda qué pestaña está activa: si se está viendo la lista de juegos o el formulario.
  const [activeTab, setActiveTab] = useState('listado');

  // Se usan funciones que permiten trabajar con los juegos: obtener la lista, crear, actualizar y eliminar.
  const { dataGames: games, createGame, updateGame, deleteGame } = useDataGames();

  // Aquí se guarda el juego que se va a editar (si hay uno).
  const [gameToEdit, setGameToEdit] = useState(null);

  // Aquí se guarda la lista de juegos después de hacer una búsqueda.
  const [filteredGames, setFilteredGames] = useState([]);

  // Cada vez que se obtiene una nueva lista de juegos, se actualiza lo que se muestra en pantalla.
  useEffect(() => {
    setFilteredGames(games || []);
  }, [games]);

  // Esta función se usa cuando se quiere editar un juego: se guarda el juego a modificar y se cambia a la pestaña del formulario.
  const handleEditGame = (game) => {
    setGameToEdit(game);
    setActiveTab('form');
  };

  // Cuando se envía el formulario (ya sea para crear o editar), se actualiza la lista de juegos y se vuelve a la pestaña de lista.
  const handleFormSubmit = (data) => {
    if (gameToEdit) {
      updateGame(gameToEdit.id, data);
    } else {
      createGame(data);
    }
    setGameToEdit(null);
    setActiveTab('listado');
  };

  // Esta función se activa al buscar un juego. Filtra la lista para mostrar solo los que coincidan con el texto buscado.
  const handleSearch = (query) => {
    const filtered = (games || []).filter((game) =>
      game.juego.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGames(filtered);
  };

  // Aquí es donde se "arma" lo que el usuario ve.
  return (
    <div className="homepage font-poppins px-4 md:px-10 py-8 pt-[150px]">
      <div className="max-w-screen-xl mx-auto">

        {/* Se muestra la barra de búsqueda */}
        <div className="mb-8 sm:mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Se muestran las pestañas para cambiar entre lista y formulario */}
        <div className="mb-8 sm:mb-12">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Dependiendo de la pestaña, se muestra la lista de juegos o el formulario */}
        {activeTab === 'listado' ? (
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 mt-10">
            {/* Si hay juegos que mostrar, se muestran uno por uno */}
            {Array.isArray(filteredGames) && filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <GameCard
                  key={game.id}
                  title={game.juego}
                  genre={game.genero}
                  difficulty={game.dificultad}
                  platform={game.plataforma}
                  release={game.lanzamiento ?? game.fechaLanzamiento}
                  onEdit={() => handleEditGame(game)}
                  onDelete={() => deleteGame(game.id)}
                />
              ))
            ) : (
              // Si no hay juegos, se muestra un mensaje avisando
              <p className="text-center text-gray-500">No hay juegos disponibles.</p>
            )}
          </div>
        ) : (
          // Si se está en la pestaña del formulario, se muestra el formulario para crear o editar un juego
          <div className="flex justify-center mt-12">
            <GameForm onSubmit={handleFormSubmit} gameToEdit={gameToEdit} />
          </div>
        )}
      </div>
    </div>
  );
};

// Se exporta esta página para que se pueda usar en otras partes de la aplicación.
export default HomePage;
