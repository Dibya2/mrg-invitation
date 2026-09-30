import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';
import { PetalsCanvas } from '../components/PetalsCanvas';
import { DholRevealCard } from '../components/DholRevealCard';

export const WeddingPage: React.FC = () => {
  const event = WEDDING_DATA.events.wedding;

  return (
    <div className="space-y-12 pb-20 pt-20 px-4 max-w-5xl mx-auto">
      <PetalsCanvas petalType="gold" />

      {/* Royal Wedding Hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-[#3E2C4A] via-[#5A456E] to-[#2D2433] text-white rounded-3xl p-8 sm:p-16 text-center shadow-2xl overflow-hidden border-2 border-[#D4AF70] gold-border-glow"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,112,0.25),transparent)] pointer-events-none" />
        
        <div className="relative z-10 space-y-6">
          <div className="inline-flex p-3 rounded-full border border-[#D4AF70] bg-[#3E2C4A]">
            <Sparkles className="w-8 h-8 text-[#D4AF70]" />
          </div>

          <h1 className="font-serif-heading text-4xl sm:text-6xl font-extrabold text-[#F5E6C8]">
            {event.title}
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-[#D4AF70]">
            {event.subTitle}
          </p>

          <div className="my-6">
            <h2 className="font-script text-4xl sm:text-6xl text-[#F5E6C8] inline-block">
              {WEDDING_DATA.couple.bride.fullName}
            </h2>
            <div className="text-3xl text-[#D4AF70] my-2">♡</div>
            <h2 className="font-script text-4xl sm:text-6xl text-[#F5E6C8] inline-block">
              {WEDDING_DATA.couple.groom.fullName}
            </h2>
          </div>

          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF70] to-transparent mx-auto" />

          <p className="text-xs sm:text-base max-w-2xl mx-auto font-light leading-relaxed text-[#E9DDF0]/90">
            {event.description}
          </p>
        </div>
      </motion.div>

      {/* Interactive Dhol Double-Tap Reveal Card */}
      <div className="space-y-3 text-center">
        <h2 className="font-serif-heading text-2xl font-bold text-[#3E2C4A]">
          🥁 Interactive Dhol Beat Reveal 🥁
        </h2>
        <p className="text-xs text-[#5A456E]">
          Click or tap the Dhol drum 2 times to unlock the official Wedding Date & Sacred Mandap Time!
        </p>
        <DholRevealCard
          dateText={event.date}
          timeText={event.time}
          dressCodeText={event.dressCode}
          venueText={event.venue}
        />
      </div>

      {/* Main Mandap Showcase Image */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF70]/40 group">
        <img
          src={event.bannerImage}
          alt="Royal Wedding Mandap"
          className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C4A]/90 via-transparent to-transparent flex items-end p-6 sm:p-8">
          <div className="text-white space-y-1">
            <p className="text-xs tracking-widest text-[#D4AF70] uppercase font-semibold">
              Sacred Atmosphere
            </p>
            <h3 className="font-serif-heading text-2xl font-bold text-white">
              {event.venue}
            </h3>
          </div>
        </div>
      </div>



      {/* Wedding Timeline */}
      <div className="bg-[#3E2C4A] text-white border border-[#D4AF70]/40 rounded-3xl p-6 sm:p-12 shadow-2xl space-y-8 gold-border-glow">
        <div className="text-center space-y-2">
          <h2 className="font-serif-heading text-3xl font-bold text-[#D4AF70]">
            Wedding Ceremony Timeline
          </h2>
          <p className="text-xs text-[#E9DDF0]/80">From Baraat arrival to final blessings</p>
        </div>

        <div className="relative border-l-2 border-[#D4AF70]/50 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          {event.timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#D4AF70] border-4 border-[#3E2C4A] flex items-center justify-center text-[#3E2C4A] text-xs font-bold shadow-md">
                <Heart className="w-3 h-3 fill-[#3E2C4A]" />
              </div>
              <div className="inline-block px-3 py-1 bg-[#5A456E] text-[#D4AF70] text-xs font-bold rounded-full mb-1 border border-[#D4AF70]/30">
                {item.time}
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-[#F5E6C8]">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-xs text-[#E9DDF0]/80 font-light mt-0.5">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map Location Action */}
      <a
        href={event.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#5A456E] text-white rounded-3xl p-8 text-center shadow-xl border border-[#D4AF70]/40 space-y-4 hover:border-[#D4AF70] hover:scale-[1.01] transition-all cursor-pointer group"
      >
        <MapPin className="w-10 h-10 text-[#D4AF70] mx-auto group-hover:scale-110 transition-transform" />
        <h3 className="font-serif-heading text-2xl font-bold text-[#F5E6C8]">
          Wedding Mandap Venue
        </h3>
        <p className="text-sm font-medium text-[#E9DDF0]">{event.venue}</p>
        <p className="text-xs text-[#E9DDF0]/70 max-w-lg mx-auto">{event.address}</p>

        <div className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#D4AF70] via-[#F5E6C8] to-[#B88E4B] text-[#3E2C4A] font-bold text-xs rounded-full shadow-lg group-hover:shadow-2xl transition-all uppercase tracking-widest min-h-[44px]">
          <MapPin className="w-4 h-4" />
          <span>VIEW LOCATION ON MAP</span>
        </div>
      </a>
    </div>
  );
};
