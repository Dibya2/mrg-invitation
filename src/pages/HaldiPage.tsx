import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';
import { PetalsCanvas } from '../components/PetalsCanvas';
import { ScratchCard } from '../components/ScratchCard';

export const HaldiPage: React.FC = () => {
  const event = WEDDING_DATA.events.haldi;

  return (
    <div className="space-y-12 pb-20 pt-20 px-4 max-w-5xl mx-auto">
      <PetalsCanvas petalType="haldi" />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 text-white rounded-3xl p-8 sm:p-14 text-center shadow-2xl overflow-hidden border-2 border-amber-300"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,240,138,0.3),transparent)]" />
        <div className="relative z-10 space-y-4">
          <span className="text-5xl sm:text-6xl inline-block animate-bounce">🌼</span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-extrabold text-amber-100">
            {event.title}
          </h1>
          <p className="font-serif italic text-lg sm:text-2xl text-amber-200">
            {event.subTitle}
          </p>
          <div className="w-20 h-[2px] bg-amber-200/60 mx-auto" />
          <p className="text-xs sm:text-base max-w-2xl mx-auto font-light leading-relaxed text-amber-50">
            {event.description}
          </p>
        </div>
      </motion.div>

      {/* Interactive Scratch Card to Reveal Haldi Date */}
      <div className="space-y-3 text-center">
        <h2 className="font-serif-heading text-2xl font-bold text-amber-900">
          ✨ Interactive Scratch Reveal ✨
        </h2>
        <p className="text-xs text-amber-800/80">
          Scratch the golden foil card below with your finger or mouse to unlock Haldi Date & Time!
        </p>
        <ScratchCard
          revealTitle="Scratch to Reveal Haldi Date & Time 🌼"
          dateText={event.date}
          timeText={event.time}
          dressCodeText={event.dressCode}
          venueText={event.venue}
        />
      </div>




      {/* Timeline Section */}
      <div className="bg-white border border-amber-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-serif-heading text-3xl font-bold text-amber-900">
            Haldi Celebration Timeline
          </h2>
          <p className="text-xs text-amber-800/80">Schedule of turmeric, laughter & blessings</p>
        </div>

        <div className="relative border-l-2 border-amber-300 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          {event.timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-amber-400 border-4 border-white flex items-center justify-center text-white text-xs font-bold shadow-md">
                <Sparkles className="w-3 h-3" />
              </div>
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full mb-1">
                {item.time}
              </div>
              <h3 className="font-serif-heading text-lg font-bold text-amber-950">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-xs text-amber-900/80 font-light mt-0.5">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Venue & Map Button */}
      <a
        href={event.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-300 rounded-3xl p-8 text-center shadow-md space-y-4 hover:border-amber-400 hover:scale-[1.01] transition-all cursor-pointer group"
      >
        <MapPin className="w-10 h-10 text-amber-600 mx-auto group-hover:scale-110 transition-transform" />
        <h3 className="font-serif-heading text-2xl font-bold text-amber-950">
          Venue Location
        </h3>
        <p className="text-sm font-medium text-amber-900">{event.venue}</p>
        <p className="text-xs text-amber-800 max-w-lg mx-auto">{event.address}</p>

        <div className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-600 group-hover:bg-amber-700 text-white font-semibold text-xs rounded-full shadow-lg transition-all uppercase tracking-wider min-h-[44px]">
          <MapPin className="w-4 h-4" />
          <span>OPEN IN GOOGLE MAPS</span>
        </div>
      </a>
    </div>
  );
};
