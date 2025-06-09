import React, { useEffect } from 'react';
import fondo from "../assets/image.png";
import { motion, AnimatePresence } from 'framer-motion';

function HomePage({ mostrarBienvenida, setMostrarBienvenida }) {
  // Oculta la pantalla de bienvenida después de 3 segundos
  useEffect(() => {
    if (mostrarBienvenida) {
      const timeout = setTimeout(() => {
        setMostrarBienvenida(false);
      }, 3000); // 3 segundos

      return () => clearTimeout(timeout); // Limpieza
    }
  }, [mostrarBienvenida]);

  return (
    <div className="w-full min-h-screen overflow-hidden relative bg-white">
      <AnimatePresence>
        {mostrarBienvenida && (
          <motion.div
            key="bienvenida"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <img
              src={fondo}
              alt="Fondito"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HomePage;
