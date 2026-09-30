import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Heart, Film } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export const ThreeDAnimationVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto space-y-8 text-center">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#5A456E] text-[#D4AF70] text-xs font-bold rounded-full border border-[#D4AF70]/40 uppercase tracking-widest shadow-md">
          <Film className="w-4 h-4 text-[#D4AF70]" />
          <span>Exclusive 3D Video Experience</span>
        </div>
        <h2 className="font-serif-heading text-3xl sm:text-5xl font-extrabold text-[#3E2C4A]">
          Dibya ❤️ Subha 3D Story
        </h2>
        <p className="text-xs sm:text-sm text-[#5A456E]/90 max-w-xl mx-auto font-light">
          A short 3D animation reel bringing our special journey and portraits to life.
        </p>
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF70] to-transparent mx-auto" />
      </div>

      {/* 3D Video Player Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-sm sm:max-w-md mx-auto rounded-[36px] p-3 sm:p-4 bg-gradient-to-tr from-[#3E2C4A] via-[#5A456E] to-[#3E2C4A] shadow-2xl border-2 border-[#D4AF70] gold-border-glow overflow-hidden group"
      >
        {/* Floating Ambient Sparkles */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <Sparkles className="w-6 h-6 text-[#D4AF70] animate-bounce" />
        </div>
        <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
          <Heart className="w-6 h-6 text-[#D4AF70] fill-[#D4AF70] animate-pulse" />
        </div>

        {/* Video Element */}
        <div className="relative aspect-[9/16] rounded-[28px] overflow-hidden bg-black/60 shadow-inner">
          <video
            ref={videoRef}
            src="/videos/couple_3d_animation.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover rounded-[28px]"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Video Control Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
            <div className="text-left text-white space-y-1">
              <span className="text-[10px] tracking-widest uppercase text-[#D4AF70] font-bold">
                Wedding Celebration Reel
              </span>
              <h3 className="font-script text-2xl text-white">
                {WEDDING_DATA.couple.title}
              </h3>
            </div>

            {/* Play/Pause Center Button */}
            <div className="flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="w-14 h-14 rounded-full bg-[#D4AF70]/90 hover:bg-[#F5E6C8] text-[#3E2C4A] flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
              </button>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between text-white">
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                title={isMuted ? "Unmute Sound" : "Mute Sound"}
              >
                {isMuted ? <VolumeX className="w-5 h-5 text-white/80" /> : <Volume2 className="w-5 h-5 text-[#D4AF70]" />}
              </button>

              <span className="text-[11px] font-medium text-[#F5E6C8]">
                3D Animation
              </span>

              <button
                onClick={toggleFullScreen}
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                title="Fullscreen"
              >
                <Maximize2 className="w-5 h-5 text-white/80" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
