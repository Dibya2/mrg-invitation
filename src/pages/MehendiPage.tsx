import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Music } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';
import { PetalsCanvas } from '../components/PetalsCanvas';
import { MehendiSlideUpCard } from '../components/MehendiSlideUpCard';

export const MehendiPage: React.FC = () => {
  const event = WEDDING_DATA.events.mehendi;

  return (
    <div className="space-y-12 pb-20 pt-20 px-4 max-w-5xl mx-auto">
      <PetalsCanvas petalType="mehendi" />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 text-white rounded-3xl p-8 sm:p-14 text-center shadow-2xl overflow-hidden border-2 border-emerald-300"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.3),transparent)]" />
        <div className="relative z-10 space-y-4">
          <span className="text-5xl sm:text-6xl inline-block animate-pulse">🌿</span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-extrabold text-emerald-100">
            {event.title}
          </h1>
          <p className="font-serif italic text-lg sm:text-2xl text-emerald-200">
            {event.subTitle}
          </p>
          <div className="w-20 h-[2px] bg-emerald-200/60 mx-auto" />
          <p className="text-xs sm:text-base max-w-2xl mx-auto font-light leading-relaxed text-emerald-50">
            {event.description}
          </p>
        </div>
      </motion.div>

      {/* Interactive Mehendi Cone Slide Up Reveal Card */}
      <div className="space-y-3 text-center">
        <h2 className="font-serif-heading text-2xl font-bold text-emerald-900">
          ✨ Interactive Slide Up Mehendi Reveal ✨
        </h2>
        <p className="text-xs text-emerald-800">
          Slide up the Mehendi Cone packet logo below to unlock Mehendi Date & Henna Timings!
        </p>
        <MehendiSlideUpCard
          dateText={event.date}
          timeText={event.time}
          dressCodeText={event.dressCode}
          venueText={event.venue}
        />
      </div>



      {/* Timeline Section */}
      <div className="bg-white border border-emerald-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-serif-heading text-3xl font-bold text-emerald-900">
            Mehendi Evening Timeline
          </h2>
          <p className="text-xs text-emerald-800/80">Intricate henna, acoustic tunes & celebration</p>
        </div>

        <div className="relative border-l-2 border-emerald-300 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          {event.timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center text-white text-xs font-bold shadow-md">
                <Music className="w-3 h-3" />
              </div>
              <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold rounded-full mb-1">
                {item.time}
              </div>
              <h3 className="font-serif-heading text-lg font-bold text-emerald-950">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-xs text-emerald-900/80 font-light mt-0.5">
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
        className="block bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-300 rounded-3xl p-8 text-center shadow-md space-y-4 hover:border-emerald-400 hover:scale-[1.01] transition-all cursor-pointer group"
      >
        <MapPin className="w-10 h-10 text-emerald-600 mx-auto group-hover:scale-110 transition-transform" />
        <h3 className="font-serif-heading text-2xl font-bold text-emerald-950">
          Venue Location
        </h3>
        <p className="text-sm font-medium text-emerald-900">{event.venue}</p>
        <p className="text-xs text-emerald-800 max-w-lg mx-auto">{event.address}</p>

        <div className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-700 group-hover:bg-emerald-800 text-white font-semibold text-xs rounded-full shadow-lg transition-all uppercase tracking-wider min-h-[44px]">
          <MapPin className="w-4 h-4" />
          <span>OPEN IN GOOGLE MAPS</span>
        </div>
      </a>
    </div>
  );
};
