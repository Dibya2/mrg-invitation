import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';
import { Lightbox } from '../components/Lightbox';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Pre-Wedding', 'Haldi', 'Mehendi', 'Wedding', 'Reception'];

  const filteredImages = selectedCategory === 'All'
    ? WEDDING_DATA.gallery
    : WEDDING_DATA.gallery.filter((img) => img.category === selectedCategory);

  return (
    <div className="space-y-10 pb-20 pt-20 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3">
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#5A456E] font-light">
          Visual Memories
        </p>
        <h1 className="font-serif-heading text-4xl sm:text-5xl text-[#3E2C4A] font-bold">
          Our Photo Gallery
        </h1>
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF70] to-transparent mx-auto" />
        <p className="text-xs sm:text-sm text-[#2D2433]/70 max-w-xl mx-auto">
          Explore magical glimpses from Dibya & Subha's wedding journey
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 min-h-[44px] ${
                isActive
                  ? 'bg-[#3E2C4A] text-[#D4AF70] border border-[#D4AF70] shadow-md font-bold'
                  : 'bg-white text-[#5A456E] border border-[#E9DDF0] hover:border-[#D4AF70]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Masonry Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredImages.map((img, index) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightboxIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[#3E2C4A] shadow-md hover:shadow-2xl transition-all duration-300 border border-[#D4AF70]/20"
            >
              <img
                src={img.url}
                alt={img.caption}
                loading="lazy"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C4A]/90 via-[#3E2C4A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] tracking-widest text-[#D4AF70] uppercase font-bold mb-1">
                  {img.category}
                </span>
                <p className="font-serif italic text-sm text-[#F5E6C8]">
                  {img.caption}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs text-[#D4AF70] font-semibold">
                  <Maximize2 className="w-4 h-4" />
                  <span>Tap to enlarge</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onSelectIndex={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}
    </div>
  );
};
