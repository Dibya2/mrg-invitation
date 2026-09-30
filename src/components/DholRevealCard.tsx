import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Shirt } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DholRevealCardProps {
  dateText: string;
  timeText: string;
  dressCodeText?: string;
  venueText: string;
}

export const DholRevealCard: React.FC<DholRevealCardProps> = ({
  dateText,
  timeText,
  dressCodeText,
  venueText,
}) => {
  const [tapCount, setTapCount] = useState<number>(0);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  // Synthesize traditional Dhol drum beat sound using Web Audio API
  const playDholBeat = (intensity = 1) => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Sub-bass drum thump
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(intensity === 2 ? 140 : 120, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.3);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {
      console.warn('Audio beat error', e);
    }
  };

  const handleDholTap = () => {
    if (isRevealed) return;

    const nextCount = tapCount + 1;
    setTapCount(nextCount);
    playDholBeat(nextCount);

    if (nextCount >= 2) {
      setIsRevealed(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF70', '#F5E6C8', '#5A456E', '#FFFFFF'],
      });
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto my-6 bg-gradient-to-br from-[#3E2C4A] via-[#5A456E] to-[#2D2433] text-white rounded-3xl p-6 text-center shadow-2xl border-2 border-[#D4AF70] gold-border-glow overflow-hidden">
      {/* Royal Sparkle Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,112,0.2),transparent)] pointer-events-none" />

      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <motion.div
            key="unrevealed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={handleDholTap}
            className="cursor-pointer select-none py-4 space-y-4 group"
          >
            {/* Animated Dhol Icon */}
            <motion.div
              animate={{
                scale: tapCount === 1 ? [1, 1.25, 1] : [1, 1.06, 1],
                rotate: tapCount === 1 ? [0, -8, 8, 0] : 0,
              }}
              transition={{ duration: 0.4 }}
              className="w-24 h-24 mx-auto rounded-full bg-[#5A456E] border-4 border-[#D4AF70] flex items-center justify-center shadow-xl group-hover:border-[#F5E6C8] transition-colors"
            >
              <span className="text-5xl">🥁</span>
            </motion.div>

            <div className="space-y-1">
              <span className="px-3 py-1 bg-[#D4AF70] text-[#3E2C4A] text-[10px] font-extrabold rounded-full uppercase tracking-wider">
                Double Tap Interactive Reveal
              </span>
              <h3 className="font-serif-heading text-xl font-bold text-[#F5E6C8] pt-1">
                Tap Dhol 2 Times to Reveal Wedding Date!
              </h3>
              <p className="text-xs text-[#E9DDF0]/80">
                {tapCount === 0 && '🪘 Click or tap the Dhol once now!'}
                {tapCount === 1 && '🎉 Great beat! Tap 1 MORE time to unlock!'}
              </p>
            </div>

            {/* Tap indicator dots */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <div
                className={`w-3 h-3 rounded-full transition-all ${
                  tapCount >= 1 ? 'bg-[#D4AF70] scale-110' : 'bg-white/30'
                }`}
              />
              <div
                className={`w-3 h-3 rounded-full transition-all ${
                  tapCount >= 2 ? 'bg-[#D4AF70] scale-110' : 'bg-white/30'
                }`}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="revealed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-4 space-y-4"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF70] text-[#3E2C4A] flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-[#D4AF70] font-bold flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sacred Wedding Details Revealed</span>
                <Sparkles className="w-3.5 h-3.5" />
              </p>
              <h3 className="font-serif-heading text-3xl font-extrabold text-[#F5E6C8]">
                {dateText}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <span className="px-4 py-1 rounded-full bg-[#5A456E] text-[#D4AF70] text-xs font-bold border border-[#D4AF70]/40">
                  ⏰ {timeText}
                </span>
                {dressCodeText && (
                  <span className="px-4 py-1 rounded-full bg-[#5A456E] text-[#D4AF70] text-xs font-bold border border-[#D4AF70]/40 flex items-center gap-1">
                    <Shirt className="w-3.5 h-3.5 text-[#D4AF70]" />
                    <span>{dressCodeText}</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-[#E9DDF0]/90 font-light pt-1">
                📍 {venueText}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
