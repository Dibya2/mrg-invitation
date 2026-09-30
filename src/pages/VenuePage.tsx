import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Navigation } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export const VenuePage: React.FC = () => {
  const v = WEDDING_DATA.venue;

  return (
    <div className="space-y-12 pb-20 pt-20 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3">
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#5A456E] font-light">
          Location & Directions
        </p>
        <h1 className="font-serif-heading text-4xl sm:text-5xl text-[#3E2C4A] font-bold">
          📍 Wedding Venue
        </h1>
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF70] to-transparent mx-auto" />
      </div>

      {/* Main Venue Overview Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#3E2C4A] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#D4AF70]/40 gold-border-glow space-y-6 text-center sm:text-left"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-[#5A456E] text-[#D4AF70] text-xs font-bold rounded-full uppercase tracking-wider border border-[#D4AF70]/30">
              Official Celebration Grounds
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#F5E6C8] font-bold pt-1">
              {v.name}
            </h2>
            <p className="text-sm text-[#E9DDF0]/90 font-light flex items-center justify-center sm:justify-start gap-2 max-w-xl">
              <MapPin className="w-4 h-4 text-[#D4AF70] shrink-0" />
              <span>{v.address}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={v.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-gradient-to-r from-[#D4AF70] via-[#F5E6C8] to-[#B88E4B] text-[#3E2C4A] font-bold text-xs rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider min-h-[44px]"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </a>

            <a
              href={`tel:${v.phone}`}
              className="px-6 py-3.5 bg-[#5A456E] hover:bg-[#3E2C4A] text-white border border-[#D4AF70]/40 font-bold text-xs rounded-full shadow-md transition-all flex items-center justify-center gap-2 uppercase tracking-wider min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-[#D4AF70]" />
              <span>Contact Venue</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Venue Facilities & Amenities */}
      <div className="space-y-6">
        <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3E2C4A] text-center">
          Guest Amenities & Facilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {v.amenities.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-[#D4AF70]/30 shadow-sm"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-[#3E2C4A] text-sm">{item.name}</h3>
                <p className="text-[11px] text-[#5A456E]/80">Available for all invited guests</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
