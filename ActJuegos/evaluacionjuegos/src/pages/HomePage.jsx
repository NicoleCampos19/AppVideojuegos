// HomePage.jsx
import React, { useState } from 'react';
import GameCard from '../components/GameCard';
import GameForm from '../components/GameForm';
import SearchBar from '../components/SearchBar';
import TabTitle from '../components/Tabs';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('list');

  // Simulación de datos para renderizar (serán reemplazados con hooks personalizados)
  const dummyGames = [
    {
      title: 'Leena Skirling',
      genre: 'Annadiana Kiddey',
      difficulty: 'Enterprise Plan',
      platform: 'account__266',
      release: '1892',
    },
    {
      title: 'Leena Skirling',
      genre: 'Annadiana Kiddey',
      difficulty: 'Enterprise Plan',
      platform: 'account__266',
      release: '1892',
    },
    {
      title: 'Leena Skirling',
      genre: 'Annadiana Kiddey',
      difficulty: 'Enterprise Plan',
      platform: 'account__266',
      release: '1892',
    },
  ];

  return (
    <div className="homepage font-poppins p-4 md:px-10" style={{ paddingTop: "150px" }}>
      <SearchBar />
      <div className="flex justify-center mt-4 space-x-10 text-lg font-semibold">
        <TabTitle
          active={activeTab === 'list'}
          onClick={() => setActiveTab('list')}
          label="Listado de videojuegos"
        />
        <TabTitle
          active={activeTab === 'manage'}
          onClick={() => setActiveTab('manage')}
          label="Gestionar videojuegos"
        />
      </div>

      {activeTab === 'list' ? (
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {dummyGames.map((game, idx) => (
            <GameCard key={idx} {...game} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center mt-10">
          <GameForm />
        </div>
      )}
    </div>
  );
};

export default HomePage;
