import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, GlassWater, Utensils, Music2, PartyPopper } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';
import { PetalsCanvas } from '../components/PetalsCanvas';

export const ReceptionPage: React.FC = () => {
  const event = WEDDING_DATA.events.reception;

  const highlights = [
    { name: 'Welcome Drinks', icon: GlassWater, desc: 'Signature mocktails & refreshing brews' },
    { name: 'Gourmet Dinner', icon: Utensils, desc: 'Extravagant global culinary buffet' },
    { name: 'Live Music', icon: Music2, desc: 'Melodic acoustic bands & singer performances' },
    { name: 'DJ Dance Floor', icon: PartyPopper, desc: 'Celebratory dancing until late night' },
  ];

  return (
    <div className="space-y-12 pb-20 pt-20 px-4 max-w-5xl mx-auto">
      <PetalsCanvas petalType="rose" />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-purple-900 via-indigo-950 to-[#3E2C4A] text-white rounded-3xl p-8 sm:p-14 text-center shadow-2xl overflow-hidden border-2 border-purple-400"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(192,132,252,0.25),transparent)]" />
        <div className="relative z-10 space-y-4">
          <span className="text-5xl sm:text-6xl inline-block animate-pulse">✨</span>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-extrabold text-purple-100">
            {event.title}
          </h1>
          <p className="font-serif italic text-lg sm:text-2xl text-purple-200">
            {event.subTitle}
          </p>
          <div className="w-20 h-[2px] bg-purple-300/60 mx-auto" />
          <p className="text-xs sm:text-base max-w-2xl mx-auto font-light leading-relaxed text-purple-100">
            {event.description}
          </p>
        </div>
      </motion.div>



      {/* Evening Highlights Grid */}
      <div className="space-y-6">
        <h2 className="font-serif-heading text-3xl font-bold text-[#3E2C4A] text-center">
          Evening Experience Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, idx) => {
            const Icon = h.icon;
            return (
              <div key={idx} className="bg-white border border-purple-100 p-6 rounded-2xl shadow-md text-center space-y-3 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 mx-auto flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-heading font-bold text-purple-950 text-lg">{h.name}</h3>
                <p className="text-xs text-purple-900/70 font-light">{h.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white border border-purple-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-serif-heading text-3xl font-bold text-purple-950">
            Reception Timeline
          </h2>
          <p className="text-xs text-purple-800/80">Toast, grand dinner & dancing</p>
        </div>

        <div className="relative border-l-2 border-purple-300 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          {event.timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-purple-600 border-4 border-white flex items-center justify-center text-white text-xs font-bold shadow-md">
                <Sparkles className="w-3 h-3" />
              </div>
              <div className="inline-block px-3 py-1 bg-purple-100 text-purple-900 text-xs font-bold rounded-full mb-1">
                {item.time}
              </div>
              <h3 className="font-serif-heading text-lg font-bold text-purple-950">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-xs text-purple-900/80 font-light mt-0.5">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Venue Map */}
      <a
        href={event.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gradient-to-r from-purple-900 to-[#3E2C4A] text-white rounded-3xl p-8 text-center shadow-xl border border-purple-400 space-y-4 hover:border-purple-300 hover:scale-[1.01] transition-all cursor-pointer group"
      >
        <MapPin className="w-10 h-10 text-[#D4AF70] mx-auto group-hover:scale-110 transition-transform" />
        <h3 className="font-serif-heading text-2xl font-bold text-purple-100">
          Reception Venue
        </h3>
        <p className="text-sm font-medium text-purple-200">{event.venue}</p>
        <p className="text-xs text-purple-300 max-w-lg mx-auto">{event.address}</p>

        <div className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#D4AF70] via-[#F5E6C8] to-[#B88E4B] text-[#3E2C4A] font-bold text-xs rounded-full shadow-lg group-hover:shadow-2xl transition-all uppercase tracking-widest min-h-[44px]">
          <MapPin className="w-4 h-4" />
          <span>OPEN GOOGLE MAPS</span>
        </div>
      </a>
    </div>
  );
};
