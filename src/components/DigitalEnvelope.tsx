import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';
import { weddingAudio } from '../utils/audioSynth';

interface DigitalEnvelopeProps {
  onOpen: () => void;
}

export const DigitalEnvelope: React.FC<DigitalEnvelopeProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    weddingAudio.play();

    // Show big Lord Ganesha & Stuti for 2.6 seconds as the royal doors swing open!
    setTimeout(() => {
      setIsDone(true);
      onOpen();
    }, 2600);
  };

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
        className="fixed inset-0 z-50 overflow-hidden bg-[#1D0F25] flex items-center justify-center [perspective:1400px]"
      >
        {/* Divine Golden Light & Big Size Lord Ganesha Image with Stuti (Sits behind the doors!) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,112,0.7),rgba(62,44,74,0.95))] z-0 flex flex-col items-center justify-center p-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: isOpening ? 1 : 0,
              scale: isOpening ? [0.8, 1.05, 1] : 0.7,
            }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="space-y-4 max-w-lg"
          >
            {/* Big Size Golden Lord Ganesha Emblem Image */}
            <div className="relative w-52 h-52 sm:w-72 sm:h-72 mx-auto rounded-full border-4 border-[#D4AF70] p-1.5 shadow-2xl gold-border-glow overflow-hidden bg-[#3E2C4A]">
              <img
                src="/assets/ganesha_emblem.png"
                alt="Lord Ganesha Golden Emblem"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Sacred Ganesha Stuti (Mantra) */}
            <div className="space-y-2 pt-2 text-[#F5E6C8] drop-shadow-lg">
              <p className="font-serif font-bold text-lg sm:text-2xl leading-relaxed text-[#F5E6C8]">
                वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।
              </p>
              <p className="font-serif font-bold text-lg sm:text-2xl leading-relaxed text-[#F5E6C8]">
                निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
              </p>
              <p className="text-xs sm:text-sm text-[#D4AF70] tracking-[0.3em] uppercase pt-2 font-bold">
                ॥ श्री गणेशाय नमः ॥
              </p>
            </div>
          </motion.div>
        </div>

        {/* 1. LEFT ROYAL WOODEN PALACE DOOR */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpening ? -115 : 0 }}
          transition={{ duration: 2.2, ease: [0.645, 0.045, 0.355, 1.0] }}
          style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#2A1307] via-[#442211] to-[#291307] border-r-4 border-[#D4AF70] shadow-2xl z-20 overflow-hidden flex flex-col justify-between p-4 sm:p-8"
        >
          {/* Wood Texture Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px)] [background-size:20px_100%]" />
          
          {/* Top Gold Studs Frame */}
          <div className="relative z-10 flex justify-between items-center px-2 py-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-gradient-to-b from-[#F5E6C8] via-[#D4AF70] to-[#B88E4B] shadow-md border border-[#3E2C4A]" />
            ))}
          </div>

          {/* Left Door Carved Wood Panel */}
          <div className="relative z-10 my-auto h-3/5 border-2 border-[#D4AF70]/40 rounded-2xl bg-[#371A0B]/80 backdrop-blur-sm p-4 flex flex-col justify-center items-end pr-6 shadow-inner">
            {/* Left Brass Ring Knocker Handle */}
            <div className="relative flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5E6C8] via-[#D4AF70] to-[#8C6428] border-2 border-[#3E2C4A] shadow-xl flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#2A1307]" />
              </div>
              <div className="w-12 h-16 rounded-full border-4 border-[#D4AF70] shadow-2xl -mt-4 bg-transparent" />
            </div>
          </div>

          {/* Bottom Gold Studs Frame */}
          <div className="relative z-10 flex justify-between items-center px-2 py-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-gradient-to-b from-[#F5E6C8] via-[#D4AF70] to-[#B88E4B] shadow-md border border-[#3E2C4A]" />
            ))}
          </div>
        </motion.div>

        {/* 2. RIGHT ROYAL WOODEN PALACE DOOR */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpening ? 115 : 0 }}
          transition={{ duration: 2.2, ease: [0.645, 0.045, 0.355, 1.0] }}
          style={{ transformOrigin: 'right center', transformStyle: 'preserve-3d' }}
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2A1307] via-[#442211] to-[#291307] border-l-4 border-[#D4AF70] shadow-2xl z-20 overflow-hidden flex flex-col justify-between p-4 sm:p-8"
        >
          {/* Wood Texture Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px)] [background-size:20px_100%]" />

          {/* Top Gold Studs Frame */}
          <div className="relative z-10 flex justify-between items-center px-2 py-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-gradient-to-b from-[#F5E6C8] via-[#D4AF70] to-[#B88E4B] shadow-md border border-[#3E2C4A]" />
            ))}
          </div>

          {/* Right Door Carved Wood Panel */}
          <div className="relative z-10 my-auto h-3/5 border-2 border-[#D4AF70]/40 rounded-2xl bg-[#371A0B]/80 backdrop-blur-sm p-4 flex flex-col justify-center items-start pl-6 shadow-inner">
            {/* Right Brass Ring Knocker Handle */}
            <div className="relative flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5E6C8] via-[#D4AF70] to-[#8C6428] border-2 border-[#3E2C4A] shadow-xl flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#2A1307]" />
              </div>
              <div className="w-12 h-16 rounded-full border-4 border-[#D4AF70] shadow-2xl -mt-4 bg-transparent" />
            </div>
          </div>

          {/* Bottom Gold Studs Frame */}
          <div className="relative z-10 flex justify-between items-center px-2 py-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-gradient-to-b from-[#F5E6C8] via-[#D4AF70] to-[#B88E4B] shadow-md border border-[#3E2C4A]" />
            ))}
          </div>
        </motion.div>

        {/* 3. ROYAL INVITATION CARD (Sits in front until OPEN INVITATION is clicked, then doors swing open!) */}
        <motion.div
          animate={{
            scale: isOpening ? 0.85 : 1,
            opacity: isOpening ? 0 : 1,
          }}
          transition={{ duration: 0.6 }}
          className="relative z-30 w-full max-w-lg mx-4 bg-[#5A456E]/95 backdrop-blur-xl border-2 border-[#D4AF70] rounded-3xl p-8 sm:p-12 text-center shadow-2xl gold-border-glow overflow-hidden"
        >
          {/* Corner Decorative Accents */}
          <div className="absolute top-4 left-4 text-[#D4AF70] text-xl font-serif">✤</div>
          <div className="absolute top-4 right-4 text-[#D4AF70] text-xl font-serif">✤</div>
          <div className="absolute bottom-4 left-4 text-[#D4AF70] text-xl font-serif">✤</div>
          <div className="absolute bottom-4 right-4 text-[#D4AF70] text-xl font-serif">✤</div>

          {/* Top Lord Ganesha Emblem */}
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="w-20 h-20 rounded-full border-2 border-[#D4AF70] bg-[#3E2C4A] p-0.5 shadow-xl gold-border-glow overflow-hidden">
              <img
                src="/assets/ganesha_emblem.png"
                alt="Shree Ganesha Emblem"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-[11px] text-[#D4AF70] tracking-widest font-serif font-bold mt-2 uppercase">
              ॥ श्री गणेशाय नमः ॥
            </p>
          </div>

          <p className="text-xs sm:text-sm tracking-[0.25em] text-[#D4AF70] uppercase font-light mb-4">
            Together with their families
          </p>

          <h1 className="font-script text-4xl sm:text-5xl text-[#F5E6C8] mb-2 leading-tight">
            {WEDDING_DATA.couple.bride.shortName}
          </h1>

          <div className="flex items-center justify-center gap-3 my-2 text-[#D4AF70]">
            <div className="w-8 h-[1px] bg-[#D4AF70]/50" />
            <Heart className="w-4 h-4 fill-[#D4AF70] text-[#D4AF70]" />
            <div className="w-8 h-[1px] bg-[#D4AF70]/50" />
          </div>

          <h1 className="font-script text-4xl sm:text-5xl text-[#F5E6C8] mt-2 mb-6 leading-tight">
            {WEDDING_DATA.couple.groom.shortName}
          </h1>

          <p className="text-xs sm:text-sm tracking-[0.2em] text-[#E9DDF0]/90 uppercase font-medium mb-8 leading-relaxed">
            REQUEST THE PLEASURE<br />OF YOUR COMPANY
          </p>

          <p className="text-sm font-serif italic text-[#D4AF70] mb-8">
            {WEDDING_DATA.couple.weddingDateFormatted}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenClick}
            disabled={isOpening}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF70] via-[#F5E6C8] to-[#B88E4B] text-[#3E2C4A] font-medium tracking-widest text-sm rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 mx-auto uppercase font-bold"
          >
            <span>OPEN INVITATION</span>
            <Sparkles className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
