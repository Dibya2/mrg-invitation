import React, { useRef, useEffect, useState } from 'react';
import { Sparkles, Eye, Shirt } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ScratchCardProps {
  revealTitle?: string;
  dateText: string;
  timeText: string;
  dressCodeText?: string;
  venueText: string;
  onRevealed?: () => void;
}

export const ScratchCard: React.FC<ScratchCardProps> = ({
  revealTitle = "Scratch to Reveal Haldi Date & Time 🌼",
  dateText,
  timeText,
  dressCodeText,
  venueText,
  onRevealed,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [, setScratchPercent] = useState(0);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.parentElement?.clientWidth || 320;
    const height = 210;
    canvas.width = width;
    canvas.height = height;

    // Fill foil overlay pattern (Royal Gold/Silver shimmering pattern)
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#D4AF70');
    gradient.addColorStop(0.3, '#F5E6C8');
    gradient.addColorStop(0.6, '#B88E4B');
    gradient.addColorStop(1, '#E9DDF0');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add decorative text & sparkles on top of the scratch foil
    ctx.fillStyle = '#3E2C4A';
    ctx.font = 'bold 15px "Playfair Display", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ ' + revealTitle + ' ✨', width / 2, height / 2 - 12);

    ctx.fillStyle = '#5A456E';
    ctx.font = '12px "Poppins", sans-serif';
    ctx.fillText('👆 Scratch with your finger or mouse', width / 2, height / 2 + 16);
  }, [revealTitle]);

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) {
        transparentPixels++;
      }
    }

    const percentage = Math.round((transparentPixels / (pixels.length / 4)) * 100);
    setScratchPercent(percentage);

    if (percentage > 40 && !isRevealed) {
      setIsRevealed(true);
      if (onRevealed) onRevealed();

      // Launch yellow confetti burst for Haldi reveal
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#FBBF24', '#FCD34D', '#D4AF70'],
      });
    }
  };

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();

    checkScratchPercentage();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDrawing.current = true;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing.current) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDrawing.current = true;
    scratch(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDrawing.current) return;
    scratch(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleRevealAll = () => {
    setIsRevealed(true);
    if (onRevealed) onRevealed();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#FBBF24', '#FCD34D', '#D4AF70'],
    });
  };

  return (
    <div className="relative w-full max-w-md mx-auto my-4 bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-3xl p-6 text-center shadow-xl overflow-hidden">
      {/* Revealed Content (Hidden underneath the scratch canvas) */}
      <div className="space-y-3 py-2">
        <div className="inline-flex p-2.5 rounded-full bg-amber-200 text-amber-900 shadow-inner">
          <Sparkles className="w-6 h-6 animate-spin" />
        </div>
        <p className="text-xs uppercase tracking-widest text-amber-800 font-bold">
          🌼 Haldi Date & Schedule Unveiled 🌼
        </p>
        <h3 className="font-serif-heading text-2xl font-extrabold text-amber-950">
          {dateText}
        </h3>
        
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <span className="text-xs font-bold text-amber-900 bg-amber-200/80 py-1 px-3 rounded-full border border-amber-300">
            ⏰ {timeText}
          </span>
          {dressCodeText && (
            <span className="text-xs font-bold text-amber-900 bg-amber-200/80 py-1 px-3 rounded-full border border-amber-300 flex items-center gap-1">
              <Shirt className="w-3.5 h-3.5 text-amber-700" />
              <span>{dressCodeText}</span>
            </span>
          )}
        </div>

        <p className="text-xs text-amber-800 font-medium pt-1">
          📍 {venueText}
        </p>
      </div>

      {/* Canvas Scratch Foil Layer */}
      {!isRevealed && (
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          className="absolute inset-0 w-full h-full cursor-pointer touch-none z-10 transition-opacity duration-500 rounded-3xl"
        />
      )}

      {/* Helper Reveal Button */}
      {!isRevealed && (
        <button
          onClick={handleRevealAll}
          className="absolute bottom-2 right-2 z-20 px-3 py-1 bg-[#3E2C4A] text-[#D4AF70] text-[10px] rounded-full font-bold shadow-md hover:bg-[#5A456E] flex items-center gap-1 opacity-90 hover:opacity-100"
        >
          <Eye className="w-3 h-3" />
          <span>Quick Reveal</span>
        </button>
      )}
    </div>
  );
};
