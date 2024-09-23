import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaPlay, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Gallery = ({ media }) => {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
  const carouselRef = useRef(null);

  const handleSelectMedia = (index) => {
    setSelectedMediaIndex(index);
  };

  const handleCloseMedia = () => {
    setSelectedMediaIndex(null);
  };

  const handleNext = () => {
    if (selectedMediaIndex !== null) {
      setSelectedMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
    }
  };

  const handlePrev = () => {
    if (selectedMediaIndex !== null) {
      setSelectedMediaIndex((prevIndex) =>
        prevIndex === 0 ? media.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    if (selectedMediaIndex !== null && carouselRef.current) {
      const selectedThumbnail = carouselRef.current.querySelectorAll('div')[selectedMediaIndex];
      selectedThumbnail.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }, [selectedMediaIndex]);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {media.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => handleSelectMedia(index)}
            whileHover={{ scale: 1.05 }}
            className="relative sombra cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out border border-primary"
          >
            {item.type === 'image' ? (
              <div className="aspect-w-16 aspect-h-9">
                <img loading='lazy' src={item.src} alt={item.alt} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="relative aspect-w-16 aspect-h-9">
                <video className="w-full h-full object-cover" muted>
                  <source src={item.src} type="video/mp4" />
                  Tu navegador no soporta videos.
                </video>
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
          onClick={handleCloseMedia}
        >
          <div
            className="relative p-4 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative bg-primary rounded-lg overflow-hidden"
            >
              <button
                onClick={handleCloseMedia}
                className="absolute top-2 right-2 text-white bg-accent hover:bg-accent-hover p-3 rounded-full z-10"
                style={{ pointerEvents: 'auto' }}
              >
                <FaTimes className="text-2xl" />
              </button>

              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-accent hover:bg-accent-hover p-3 rounded-full z-10"
                style={{ pointerEvents: 'auto' }}
              >
                <FaArrowLeft className="text-2xl" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-accent hover:bg-accent-hover p-3 rounded-full z-10"
                style={{ pointerEvents: 'auto' }}
              >
                <FaArrowRight className="text-2xl" />
              </button>

              {media[selectedMediaIndex].type === 'image' ? (
                <img loading='lazy'
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
            <div
              className="carousel-container mt-4 flex overflow-x-auto space-x-4 pb-4"
              ref={carouselRef}
              style={{ maxWidth: '100%', display: 'flex', gap: '16px' }}
            >
              {media.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectMedia(index)}
                  className={`cursor-pointer border-2 rounded-lg flex-shrink-0 w-24 h-24 ${
                    index === selectedMediaIndex ? 'border-accent' : 'border-primary'
                  }`}
                  style={{ flex: '0 0 100px', height: '100px' }} // Ajustar el tamaño de las miniaturas
                >
                  {item.type === 'image' ? (
                    <img loading='lazy'
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      style={{ width: '100px', height: '100px' }} // Miniaturas de tamaño fijo 100x100
                    />
                  ) : (
                    <div className="relative w-24 h-24">
                      <video
                        className="w-full h-full object-cover"
                        muted
                        style={{ width: '100px', height: '100px' }} // Miniaturas de tamaño fijo 100x100
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
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
