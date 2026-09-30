import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarPlus, Share2, Heart, ArrowRight, X, ZoomIn } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';
import { CountdownTimer } from '../components/CountdownTimer';
import { ThreeDAnimationVideo } from '../components/ThreeDAnimationVideo';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab }) => {
  const [activePhoto, setActivePhoto] = useState<{ url: string; title: string } | null>(null);
  const handleSaveTheDate = () => {
    // Generate .ics calendar download file
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Subhasmita & Dibyajyoti Wedding//EN
BEGIN:VEVENT
SUMMARY:Subhasmita Nath & Dibyajyoti Das Wedding
DESCRIPTION:Together with their families, Subhasmita & Dibyajyoti invite you to celebrate their wedding.
LOCATION:${WEDDING_DATA.venue.name}, ${WEDDING_DATA.venue.address}
DTSTART:20261202T180000Z
DTEND:20261202T230000Z
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Dibya_Subha_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      WEDDING_DATA.whatsappShare.message + window.location.href
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden rounded-b-[40px] shadow-2xl bg-[#3E2C4A]">
        {/* Divine Background Image with Gentle Soft Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-top opacity-50 transition-all duration-700 scale-105"
          style={{
            backgroundImage: `url('/images/hero_bg.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C4A] via-[#3E2C4A]/55 to-[#3E2C4A]/30" />

        <div className="relative z-20 text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center mb-2"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#D4AF70] bg-[#3E2C4A] p-1 shadow-2xl gold-border-glow overflow-hidden">
              <img
                src="/assets/ganesha_emblem.png"
                alt="Shree Ganesha Emblem"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-xs sm:text-sm text-[#D4AF70] tracking-[0.25em] font-serif font-bold mt-2.5 uppercase">
              ॥ श्री गणेशाय नमः ॥
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#D4AF70] font-light"
          >
            Together with their families
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-2"
          >
            <h1 className="font-script text-5xl sm:text-7xl lg:text-8xl text-[#F5E6C8] drop-shadow-md">
              {WEDDING_DATA.couple.bride.fullName}
            </h1>
            <div className="font-script text-3xl sm:text-5xl text-[#D4AF70] my-2">&</div>
            <h1 className="font-script text-5xl sm:text-7xl lg:text-8xl text-[#F5E6C8] drop-shadow-md">
              {WEDDING_DATA.couple.groom.fullName}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-lg text-[#E9DDF0] max-w-xl mx-auto font-light leading-relaxed pt-2"
          >
            are delighted to invite you to celebrate their wedding
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-4 space-y-6"
          >
            <div className="inline-block px-6 py-2 rounded-full border border-[#D4AF70]/40 bg-[#5A456E]/80 backdrop-blur-md text-[#D4AF70] font-serif text-base sm:text-lg tracking-widest gold-border-glow">
              {WEDDING_DATA.couple.weddingDateFormatted}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={handleSaveTheDate}
                className="px-6 py-3.5 bg-gradient-to-r from-[#D4AF70] via-[#F5E6C8] to-[#B88E4B] text-[#3E2C4A] font-semibold text-xs sm:text-sm tracking-widest rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 uppercase font-bold min-h-[44px]"
              >
                <CalendarPlus className="w-4 h-4" />
                <span>SAVE THE DATE</span>
              </button>

              <button
                onClick={handleShareWhatsApp}
                className="px-6 py-3.5 bg-[#5A456E] hover:bg-[#3E2C4A] text-white border border-[#D4AF70]/40 font-semibold text-xs sm:text-sm tracking-widest rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 uppercase min-h-[44px]"
              >
                <Share2 className="w-4 h-4 text-[#D4AF70]" />
                <span>SHARE INVITATION</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. COUPLE SECTION */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="text-center space-y-3 mb-12">
          <p className="text-xs sm:text-sm tracking-[0.25em] text-[#5A456E] uppercase font-light">
            Two Souls
          </p>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#3E2C4A] font-bold">
            One Beautiful Journey
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF70] to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-6 sm:p-8 rounded-3xl text-center space-y-4 shadow-xl border border-[#D4AF70]/30 hover:shadow-2xl transition-shadow"
          >
            <div 
              onClick={() => setActivePhoto({ url: WEDDING_DATA.couple.bride.image, title: WEDDING_DATA.couple.bride.fullName })}
              className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full p-2 bg-gradient-to-tr from-[#D4AF70] via-[#F5E6C8] to-[#5A456E] shadow-2xl cursor-pointer group overflow-hidden"
            >
              <img
                src={WEDDING_DATA.couple.bride.image}
                alt={WEDDING_DATA.couple.bride.fullName}
                className="w-full h-full object-cover object-top rounded-full border-2 border-white group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 rounded-full transition-opacity flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <div className="absolute -bottom-1 right-3 bg-[#5A456E] text-[#D4AF70] p-2.5 rounded-full border border-[#D4AF70] shadow-md">
                <Heart className="w-4 h-4 fill-[#D4AF70]" />
              </div>
            </div>

            <div>
              <h3 className="font-script text-4xl text-[#3E2C4A] font-bold">
                {WEDDING_DATA.couple.bride.fullName}
              </h3>
              <p className="text-xs tracking-widest uppercase text-[#5A456E] font-medium mt-1">
                {WEDDING_DATA.couple.bride.role}
              </p>
              <p className="text-xs text-[#5A456E]/80 font-serif italic mt-1">
                {WEDDING_DATA.couple.bride.parents}
              </p>
            </div>
            <p className="text-xs text-[#2D2433]/80 leading-relaxed font-light">
              {WEDDING_DATA.couple.bride.bio}
            </p>
          </motion.div>

          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-6 sm:p-8 rounded-3xl text-center space-y-4 shadow-xl border border-[#D4AF70]/30 hover:shadow-2xl transition-shadow"
          >
            <div 
              onClick={() => setActivePhoto({ url: WEDDING_DATA.couple.groom.image, title: WEDDING_DATA.couple.groom.fullName })}
              className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full p-2 bg-gradient-to-tr from-[#5A456E] via-[#F5E6C8] to-[#D4AF70] shadow-2xl cursor-pointer group overflow-hidden"
            >
              <img
                src={WEDDING_DATA.couple.groom.image}
                alt={WEDDING_DATA.couple.groom.fullName}
                className="w-full h-full object-cover object-top rounded-full border-2 border-white group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 rounded-full transition-opacity flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <div className="absolute -bottom-1 right-3 bg-[#5A456E] text-[#D4AF70] p-2.5 rounded-full border border-[#D4AF70] shadow-md">
                <Heart className="w-4 h-4 fill-[#D4AF70]" />
              </div>
            </div>

            <div>
              <h3 className="font-script text-4xl text-[#3E2C4A] font-bold">
                {WEDDING_DATA.couple.groom.fullName}
              </h3>
              <p className="text-xs tracking-widest uppercase text-[#5A456E] font-medium mt-1">
                {WEDDING_DATA.couple.groom.role}
              </p>
              <p className="text-xs text-[#5A456E]/80 font-serif italic mt-1">
                {WEDDING_DATA.couple.groom.parents}
              </p>
            </div>
            <p className="text-xs text-[#2D2433]/80 leading-relaxed font-light">
              {WEDDING_DATA.couple.groom.bio}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. COUNTDOWN TIMER */}
      <section className="bg-gradient-to-b from-transparent via-[#E9DDF0]/40 to-transparent py-6">
        <CountdownTimer />
      </section>

      {/* 4. EVENTS PREVIEW CARDS */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-3 mb-12">
          <p className="text-xs sm:text-sm tracking-[0.25em] text-[#5A456E] uppercase font-light">
            Celebrations & Ceremonies
          </p>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#3E2C4A] font-bold">
            The Wedding Events
          </h2>
          <p className="text-xs sm:text-sm text-[#2D2433]/70">
            Click any event to view full schedule, venue maps & timings
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Haldi Card */}
          <motion.div
            whileHover={{ y: -8 }}
            onClick={() => setActiveTab('haldi')}
            className="cursor-pointer bg-amber-50/90 border-2 border-amber-300 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 text-[9px] font-bold tracking-wider uppercase border border-amber-300 flex items-center gap-1">
              <span>✨ Scratch Reveal</span>
            </div>
            <div>
              <div className="text-4xl mb-3">🌼</div>
              <h3 className="font-serif-heading text-2xl font-bold text-amber-900 mb-1">
                HALDI
              </h3>
              <p className="text-xs text-amber-800/80 mb-4 line-clamp-2">
                A celebration filled with turmeric, laughter & blessings.
              </p>
              <div className="text-xs space-y-1 text-amber-900/90 font-medium">
                <div>📅 {WEDDING_DATA.events.haldi.date}</div>
                <div>⏰ {WEDDING_DATA.events.haldi.time}</div>
              </div>
            </div>
            <button className="mt-6 text-xs font-bold text-amber-900 flex items-center gap-1 hover:gap-2 transition-all">
              <span>Scratch & View Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Mehendi Card */}
          <motion.div
            whileHover={{ y: -8 }}
            onClick={() => setActiveTab('mehendi')}
            className="cursor-pointer bg-emerald-50/90 border-2 border-emerald-300 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="font-serif-heading text-2xl font-bold text-emerald-900 mb-1">
                MEHENDI
              </h3>
              <p className="text-xs text-emerald-800/80 mb-4 line-clamp-2">
                An evening of beautiful designs, music, dance & happiness.
              </p>
              <div className="text-xs space-y-1 text-emerald-900/90 font-medium">
                <div>📅 {WEDDING_DATA.events.mehendi.date}</div>
                <div>⏰ {WEDDING_DATA.events.mehendi.time}</div>
              </div>
            </div>
            <button className="mt-6 text-xs font-bold text-emerald-900 flex items-center gap-1 hover:gap-2 transition-all">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Wedding Card (Most Premium) */}
          <motion.div
            whileHover={{ y: -8 }}
            onClick={() => setActiveTab('wedding')}
            className="cursor-pointer bg-[#3E2C4A] text-white border-2 border-[#D4AF70] rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between gold-border-glow relative overflow-hidden"
          >
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#D4AF70] text-[#3E2C4A] text-[9px] font-bold tracking-wider uppercase">
              Main Event
            </div>
            <div>
              <div className="text-4xl mb-3">💍</div>
              <h3 className="font-serif-heading text-2xl font-bold text-[#D4AF70] mb-1">
                WEDDING
              </h3>
              <p className="text-xs text-[#E9DDF0]/80 mb-4 line-clamp-2">
                Two hearts. One forever. Witness our sacred vows.
              </p>
              <div className="text-xs space-y-1 text-[#F5E6C8] font-medium">
                <div>📅 {WEDDING_DATA.events.wedding.date}</div>
                <div>⏰ {WEDDING_DATA.events.wedding.time}</div>
              </div>
            </div>
            <button className="mt-6 text-xs font-bold text-[#D4AF70] flex items-center gap-1 hover:gap-2 transition-all">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Reception Card */}
          <motion.div
            whileHover={{ y: -8 }}
            onClick={() => setActiveTab('reception')}
            className="cursor-pointer bg-purple-50/90 border-2 border-purple-300 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-serif-heading text-2xl font-bold text-purple-900 mb-1">
                RECEPTION
              </h3>
              <p className="text-xs text-purple-800/80 mb-4 line-clamp-2">
                Join us for an evening of celebration & togetherness.
              </p>
              <div className="text-xs space-y-1 text-purple-900/90 font-medium">
                <div>📅 {WEDDING_DATA.events.reception.date}</div>
                <div>⏰ {WEDDING_DATA.events.reception.time}</div>
              </div>
            </div>
            <button className="mt-6 text-xs font-bold text-purple-900 flex items-center gap-1 hover:gap-2 transition-all">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 5. WEDDING QUOTES CAROUSEL */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-[#5A456E] text-white rounded-3xl p-8 sm:p-12 text-center border border-[#D4AF70]/40 shadow-xl relative overflow-hidden">
          <div className="text-[#D4AF70] text-4xl font-serif mb-4">“</div>
          <p className="font-serif-heading text-xl sm:text-2xl text-[#F5E6C8] italic leading-relaxed max-w-2xl mx-auto">
            {WEDDING_DATA.quotes[0].text}
          </p>
          <p className="text-xs tracking-widest uppercase text-[#D4AF70] font-medium mt-4">
            — {WEDDING_DATA.quotes[0].author}
          </p>
        </div>
      </section>

      {/* 6. 3D REEL VIDEO ANIMATION */}
      <ThreeDAnimationVideo />

      {/* Full Resolution Photo Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative max-w-3xl w-full bg-[#3E2C4A] rounded-3xl p-5 sm:p-7 shadow-2xl border-2 border-[#D4AF70] text-center space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top-Right Cancel / Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                aria-label="Close photo"
                className="absolute -top-3 -right-3 sm:top-4 sm:right-4 text-[#3E2C4A] bg-gradient-to-r from-[#D4AF70] via-[#F5E6C8] to-[#B88E4B] hover:scale-110 p-2.5 rounded-full shadow-2xl border-2 border-white transition-all z-50 cursor-pointer"
              >
                <X className="w-6 h-6 stroke-[2.5]" />
              </button>

              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#F5E6C8] pt-1">
                {activePhoto.title}
              </h3>

              <div className="overflow-hidden rounded-2xl max-h-[75vh] flex items-center justify-center bg-black/60 border border-[#D4AF70]/30 shadow-2xl">
                <img
                  src={activePhoto.url}
                  alt={activePhoto.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                />
              </div>

              <p className="text-xs text-[#E9DDF0]/80 font-light">
                Click ✕ or tap anywhere outside to close full view
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
