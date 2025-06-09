import React from 'react';
// Traigo la imagen que va a ser el fondito
import fondo from "../assets/image.png";
// Traigo la librería para poder hacer la animación
import { motion, AnimatePresence } from 'framer-motion';

function HomePage({ mostrarBienvenida }) {
  return (
    // contenedor que ocupa toda la pantalla
    <div className="w-full min-h-screen overflow-hidden relative">
      {/* Aquí se maneja que la animación aparezca y desaparezca */}
      <AnimatePresence>
        {/* Si mostrarBienvenida está prendido, se muestra la animación */}
        {mostrarBienvenida && (
          // El div para la animación
          <motion.div
            key="bienvenida" 
            initial={{ opacity: 0 }} // empieza invisible
            animate={{ opacity: 1 }} // aparece poco a poco
            exit={{ opacity: 0 }}    // desaparece poco a poco
            transition={{ duration: 1 }} // la animación dura 1 segundo
            className="fixed inset-0 z-50" 
          >
            {/* Fondo que muestra la bienvenida */}
            <img
              src={fondo}
              alt="Fondito"
              className="w-full h-full object-cover" // se ajusta para llenar toda la pantalla bien
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HomePage;
