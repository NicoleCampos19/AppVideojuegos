import { useState, useEffect } from 'react';
import './App.css';
// Importo el navbar 
import Navbar from './components/Nav/NavBar';
// Importo la página de bienvenida que se ve al principio
import WelcomePage from './pages/WelcomePage';
// Importo el dashboard
import HomePage from './pages/HomePage';


function App() {
  // Creo un estado para controlar si se muestra la bienvenida o no (empieza en true)
  const [mostrarBienvenida, setMostrarBienvenida] = useState(true);

  // Esto es para que después de 2 segundos la bienvenida desaparezca sola
  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarBienvenida(false); // apaga la bienvenida
    }, 2000); // para que dure 2000 ms = 2 segundos

    // Esto limpia el timer si el componente se desmonta 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <HomePage/>
      {/* Muestro el navbar solo cuando la bienvenida ya no está */}
      {!mostrarBienvenida && <Navbar />}
      {/* Siempre muestro la página de bienvenida, pero esta se oculta adentro según el estado */}
      <WelcomePage mostrarBienvenida={mostrarBienvenida} />
    </>
  );
}

export default App;
