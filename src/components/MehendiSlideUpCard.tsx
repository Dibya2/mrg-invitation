import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUp, CheckCircle2, Shirt } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MehendiSlideUpCardProps {
  dateText: string;
  timeText: string;
  dressCodeText?: string;
  venueText: string;
}

export const MehendiSlideUpCard: React.FC<MehendiSlideUpCardProps> = ({
  dateText,
  timeText,
  dressCodeText,
  venueText,
}) => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const triggerReveal = () => {
    if (isRevealed) return;
    setIsRevealed(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10B981', '#34D399', '#D4AF70', '#A7F3D0'],
    });
  };

  const handleDragEnd = (_: any, info: { offset: { y: number } }) => {
    if (info.offset.y < -40) {
      triggerReveal();
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto my-6 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white rounded-3xl p-6 text-center shadow-2xl border-2 border-emerald-400 overflow-hidden">
      {/* Emerald Sparkle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.2),transparent)] pointer-events-none" />

      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <motion.div
            key="unrevealed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-4 space-y-4"
          >
            <div className="space-y-1">
              <span className="px-3 py-1 bg-emerald-400 text-emerald-950 text-[10px] font-extrabold rounded-full uppercase tracking-wider">
                Slide Up Mehendi Cone
              </span>
              <h3 className="font-serif-heading text-xl font-bold text-emerald-100 pt-1">
                Slide Up Mehendi Cone to Reveal Details 🌿
              </h3>
              <p className="text-xs text-emerald-200/80">
                Drag the Mehendi Pack upward or click the button below!
              </p>
            </div>

            {/* Draggable Mehendi Cone Pack Logo */}
            <div className="relative h-32 flex items-center justify-center my-2">
              {/* Slide Up Animated Indicator Arrow */}
              <motion.div
                animate={{ y: [-4, -14, -4], opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute top-0 text-emerald-300 flex flex-col items-center"
              >
                <ArrowUp className="w-6 h-6 stroke-[3]" />
                <span className="text-[9px] uppercase font-bold tracking-widest">SLIDE UP</span>
              </motion.div>

              {/* Mehendi Pack Icon Container (Draggable) */}
              <motion.div
                drag="y"
                dragConstraints={{ top: -80, bottom: 0 }}
                dragElastic={0.4}
                onDragEnd={handleDragEnd}
                whileTap={{ scale: 1.1 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-emerald-300 border-2 border-white shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing z-10"
              >
                <span className="text-4xl select-none">🪔</span>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={triggerReveal}
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-400 to-teal-300 text-emerald-950 font-bold text-xs rounded-full shadow-lg hover:shadow-xl uppercase tracking-wider flex items-center justify-center gap-2 mx-auto"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Slide Up to Unlock Details</span>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="revealed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-4 space-y-4"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-400 text-emerald-950 flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-emerald-300 font-bold flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Mehendi Ceremony Details Unlocked</span>
                <Sparkles className="w-3.5 h-3.5" />
              </p>
              <h3 className="font-serif-heading text-3xl font-extrabold text-emerald-50">
                {dateText}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <span className="text-xs font-bold text-emerald-950 bg-emerald-300 py-1 px-3 rounded-full">
                  ⏰ {timeText}
                </span>
                {dressCodeText && (
                  <span className="text-xs font-bold text-emerald-950 bg-emerald-300 py-1 px-3 rounded-full flex items-center gap-1">
                    <Shirt className="w-3.5 h-3.5 text-emerald-800" />
                    <span>{dressCodeText}</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-emerald-200/90 font-light pt-1">
                📍 {venueText}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
