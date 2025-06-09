import React from 'react';
// Importo los estilos específicos para el navbar
import './NavBar.css';
// Importo el logo desde la carpeta de assets
import logo from '../../assets/logo.png';

// Componente funcional del Navbar
const Navbar = () => {
  return (
    // Contenedor principal del navbar con clases para aplicar estilos desde el CSS
    <div className="navbar-wrapper">
      <div className="navbar">
        
        {/* Sección izquierda del navbar: solo muestro el logo */}
        <div className="navbar-left">
          {/* Logo con dimensiones específicas y fondo rojo (temporal para visualizar mejor) */}
          <img src={logo} style={{ width: '180px', height: '90px', backgroundColor: 'red' }} />
        </div>

        {/* Sección derecha del navbar: email, redes sociales y etiqueta personalizada */}
        <div className="navbar-right">
          {/* Correo electrónico visible */}
          <span className="email">davidgranados@gmail.com</span>
          
          {/* Línea divisora entre elementos (escondida en móviles con Tailwind) */}
          <div className="divider" />
          
          {/* Íconos de redes sociales (usando Font Awesome) */}
          <div className="socials">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-whatsapp"></i>
          </div>

          {/* Otra línea divisora */}
          <div className="divider" />

          {/* Etiqueta personalizada al final del navbar */}
          <span className="label">David Gaming!</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
