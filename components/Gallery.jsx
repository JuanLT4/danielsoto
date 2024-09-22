import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaPlay, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Librería para íconos

const Gallery = ({ media }) => {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null); // Índice del elemento seleccionado

  // Función para seleccionar un medio (imagen o video)
  const handleSelectMedia = (index) => {
    setSelectedMediaIndex(index);
  };

  // Función para cerrar el zoom del elemento seleccionado
  const handleCloseMedia = () => {
    setSelectedMediaIndex(null);
  };

  // Función para navegar al siguiente elemento
  const handleNext = () => {
    if (selectedMediaIndex !== null) {
      setSelectedMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
    }
  };

  // Función para navegar al elemento anterior
  const handlePrev = () => {
    if (selectedMediaIndex !== null) {
      setSelectedMediaIndex((prevIndex) =>
        prevIndex === 0 ? media.length - 1 : prevIndex - 1
      );
    }
  };

  // Eventos de teclado para navegación
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedMediaIndex !== null) {
        if (event.key === 'ArrowRight') {
          handleNext();
        } else if (event.key === 'ArrowLeft') {
          handlePrev();
        } else if (event.key === 'Escape') {
          handleCloseMedia();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMediaIndex]);

  return (
    <div className="p-4">
      {/* Grid responsive para imágenes y videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {media.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => handleSelectMedia(index)}
            whileHover={{ scale: 1.05 }}
            className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out border border-primary"
          >
            {item.type === 'image' ? (
              <div className="aspect-w-16 aspect-h-9">
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="relative aspect-w-16 aspect-h-9">
                {/* Video en preview sin controles */}
                <video className="w-full h-full object-cover" muted>
                  <source src={item.src} type="video/mp4" />
                  Tu navegador no soporta videos.
                </video>
                {/* Ícono de Play superpuesto */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary bg-opacity-50 p-3 rounded-full">
                    <FaPlay className="text-accent text-4xl" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {selectedMediaIndex !== null && (
        <div
          className="fixed inset-0 bg-primary bg-opacity-90 flex flex-col justify-center items-center z-50"
          onClick={handleCloseMedia} // Cerrar modal al hacer clic fuera del contenido
        >
          <div
            className="relative p-4 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()} // Evitar cierre al hacer clic en el contenido
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative bg-primary rounded-lg overflow-hidden"
            >
              {/* Botón de cierre mejorado */}
              <button
                onClick={handleCloseMedia}
                className="absolute top-2 right-2 text-white bg-accent hover:bg-accent-hover p-3 rounded-full z-10"
                style={{ pointerEvents: 'auto' }} // Asegurarse de que el botón pueda recibir clics
              >
                <FaTimes className="text-2xl" />
              </button>

              {/* Botón de navegación izquierda */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-accent hover:bg-accent-hover p-3 rounded-full z-10"
                style={{ pointerEvents: 'auto' }}
              >
                <FaArrowLeft className="text-2xl" />
              </button>

              {/* Botón de navegación derecha */}
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-accent hover:bg-accent-hover p-3 rounded-full z-10"
                style={{ pointerEvents: 'auto' }}
              >
                <FaArrowRight className="text-2xl" />
              </button>

              {/* Mostrar imagen o video seleccionado */}
              {media[selectedMediaIndex].type === 'image' ? (
                <img
                  src={media[selectedMediaIndex].src}
                  alt={media[selectedMediaIndex].alt}
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
              ) : (
                <video className="w-full h-auto max-h-[60vh] object-contain pointer-events-auto" controls autoPlay>
                  <source src={media[selectedMediaIndex].src} type="video/mp4" />
                </video>
              )}
            </motion.div>

            {/* Carrusel de miniaturas debajo del elemento en zoom */}
            <div className="mt-4 flex overflow-x-auto space-x-4 pb-4">
              {media.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectMedia(index)}
                  className={`cursor-pointer border-2 rounded-lg ${
                    index === selectedMediaIndex ? 'border-accent' : 'border-primary'
                  }`}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-20 h-20 object-cover"
                    />
                  ) : (
                    <div className="relative w-20 h-20">
                      <video className="w-full h-full object-cover" muted>
                        <source src={item.src} type="video/mp4" />
                      </video>
                      {/* Ícono de Play superpuesto en miniatura */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-primary bg-opacity-50 p-1 rounded-full">
                          <FaPlay className="text-accent text-xl" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
