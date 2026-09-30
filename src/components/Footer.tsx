import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3E2C4A] text-white pt-12 pb-24 md:pb-12 px-4 border-t border-[#D4AF70]/30 text-center relative overflow-hidden">
      {/* Gold pattern accents */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="w-full flex items-center justify-center gap-4 text-[#D4AF70]/60">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF70]/40 to-transparent" />
          <Sparkles className="w-5 h-5 text-[#D4AF70]" />
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF70]/40 to-transparent" />
        </div>

        <div className="space-y-2">
          <h2 className="font-script text-4xl sm:text-5xl text-[#F5E6C8]">
            {WEDDING_DATA.couple.bride.shortName} <span className="text-[#D4AF70]">♡</span> {WEDDING_DATA.couple.groom.shortName}
          </h2>
          <p className="font-serif italic text-lg text-[#D4AF70]">
            Forever Begins Here
          </p>
          <p className="text-xs uppercase tracking-widest text-[#E9DDF0]/70">
            {WEDDING_DATA.couple.weddingDateFormatted}
          </p>
        </div>

        <div className="pt-4 flex items-center justify-center gap-1 text-xs text-[#E9DDF0]/60">
          <span>Made with Love</span>
          <Heart className="w-3.5 h-3.5 fill-red-400 text-red-400 inline" />
          <span>for Dibyajyoti & Subhasmita</span>
        </div>
      </div>
    </footer>
  );
};
