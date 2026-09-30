import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/weddingData';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    const targetDate = new Date(WEDDING_DATA.couple.weddingDateISO).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft.isPassed) {
    return (
      <div className="py-8 text-center bg-[#5A456E] text-[#D4AF70] rounded-2xl shadow-xl border border-[#D4AF70]/40 max-w-xl mx-auto">
        <h3 className="font-script text-4xl sm:text-5xl text-[#F5E6C8]">
          Today is the Day! ❤️
        </h3>
        <p className="text-sm uppercase tracking-widest text-[#E9DDF0] mt-2">
          Bless the couple as they begin forever
        </p>
      </div>
    );
  }

  const units = [
    { label: 'Days', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'Hours', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Minutes', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Seconds', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto text-center my-8 px-4">
      <p className="text-xs sm:text-sm font-light tracking-[0.3em] uppercase text-[#5A456E] mb-2">
        Counting down to
      </p>
      <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#3E2C4A] mb-8">
        Our Big Day
      </h2>

      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {units.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-[#3E2C4A] text-white p-3 sm:p-6 rounded-2xl shadow-xl border border-[#D4AF70]/40 relative overflow-hidden flex flex-col items-center justify-center gold-border-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#5A456E]/40 to-transparent pointer-events-none" />
            <span className="font-serif-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#D4AF70] mb-1">
              {unit.value}
            </span>
            <span className="text-[10px] sm:text-xs tracking-wider uppercase text-[#E9DDF0]/80 font-medium">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
