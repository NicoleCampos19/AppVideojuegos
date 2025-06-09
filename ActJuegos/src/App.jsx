import { useState, useEffect } from 'react';
import './App.css';

// Importar react-hot-toast
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Nav/NavBar';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';

function App() {
  const [mostrarBienvenida, setMostrarBienvenida] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarBienvenida(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Toaster para mostrar notificaciones en cualquier parte de la app */}
      <Toaster position="top-right" reverseOrder={false} />

      <HomePage />

      {!mostrarBienvenida && <Navbar />}
      <WelcomePage mostrarBienvenida={mostrarBienvenida} />
    </>
  );
}

export default App;