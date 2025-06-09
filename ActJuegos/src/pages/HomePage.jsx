import React, { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';
import GameForm from '../components/GameForm';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';
import useDataGames from '../components/Games/hooks/useDataGames';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('listado');
  const { dataGames: games, createGame, updateGame, deleteGame } = useDataGames();
  const [gameToEdit, setGameToEdit] = useState(null);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    setFilteredGames(games || []);
  }, [games]);

  const handleEditGame = (game) => {
    setGameToEdit(game);
    setActiveTab('form');
  };

  const handleFormSubmit = (data) => {
    if (gameToEdit) {
      updateGame(gameToEdit.id, data);
    } else {
      createGame(data);
    }
    setGameToEdit(null);
    setActiveTab('listado');
  };  

  const handleSearch = (query) => {
    const filtered = (games || []).filter((game) =>
      game.juego.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGames(filtered);
  };

  return (
    <div className="homepage font-poppins px-4 md:px-10 py-8 pt-[150px]">
      <div className="max-w-screen-xl mx-auto">
        {/* Search Bar */}
        <div className="mb-8 sm:mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Tabs */}
        <div className="mb-8 sm:mb-12">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Content */}
        {activeTab === 'listado' ? (
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 mt-10">
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
              <p className="text-center text-gray-500">No hay juegos disponibles.</p>
            )}
          </div>
        ) : (
          <div className="flex justify-center mt-12">
            <GameForm onSubmit={handleFormSubmit} gameToEdit={gameToEdit} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
