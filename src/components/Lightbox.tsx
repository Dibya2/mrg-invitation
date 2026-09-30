import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import type { GalleryItem } from '../config/weddingData';

interface LightboxProps {
  images: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onSelectIndex,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const handleNext = () => {
    setIsZoomed(false);
    onSelectIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIsZoomed(false);
    onSelectIndex((currentIndex - 1 + images.length) % images.length);
  };

  if (!currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#3E2C4A]/95 backdrop-blur-xl flex flex-col justify-between p-4"
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between z-10 text-white pt-2 px-2">
          <div className="text-xs sm:text-sm font-medium tracking-wider text-[#D4AF70]">
            {currentIndex + 1} / {images.length} — {currentImage.category}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Zoom"
            >
              {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#5A456E] hover:bg-[#D4AF70] text-white hover:text-[#3E2C4A] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center border border-[#D4AF70]/40"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main Image Display */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
          {/* Navigation Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-[#3E2C4A]/70 text-white hover:bg-[#D4AF70] hover:text-[#3E2C4A] transition-colors border border-[#D4AF70]/30 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <motion.img
            key={currentImage.id}
            src={currentImage.url}
            alt={currentImage.caption}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: isZoomed ? 1.6 : 1,
              opacity: 1,
            }}
            transition={{ duration: 0.3 }}
            className={`max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl transition-transform duration-300 ${
              isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />

          {/* Navigation Next */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-[#3E2C4A]/70 text-white hover:bg-[#D4AF70] hover:text-[#3E2C4A] transition-colors border border-[#D4AF70]/30 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Caption */}
        <div className="text-center pb-4 text-[#F5E6C8] font-serif italic text-sm sm:text-base px-4">
          {currentImage.caption}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
