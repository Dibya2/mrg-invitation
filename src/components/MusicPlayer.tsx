import { useState, useEffect } from 'react';
import { VolumeX, Volume2 } from 'lucide-react';
import { weddingAudio } from '../utils/audioSynth';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const savedPref = localStorage.getItem('wedding_music_pref');
    if (savedPref === 'true') {
      setIsPlaying(true);
      weddingAudio.play();
    }
  }, []);

  const toggleMusic = () => {
    const nextState = weddingAudio.toggle();
    setIsPlaying(nextState);
    localStorage.setItem('wedding_music_pref', String(nextState));
  };

  return (
    <button
      onClick={toggleMusic}
      aria-label={isPlaying ? 'Music ON' : 'Music OFF'}
      className={`fixed top-20 right-4 sm:top-24 sm:right-6 z-40 p-3 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs font-medium border ${
        isPlaying
          ? 'bg-[#3E2C4A] text-[#D4AF70] border-[#D4AF70] shadow-[#D4AF70]/30 animate-pulse'
          : 'bg-[#5A456E]/90 text-white border-white/20 hover:bg-[#3E2C4A]'
      }`}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 text-[#D4AF70]" />
          <span className="hidden sm:inline text-[#D4AF70]">Music ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-white/70" />
          <span className="hidden sm:inline text-white/70">Music OFF</span>
        </>
      )}
    </button>
  );
};
