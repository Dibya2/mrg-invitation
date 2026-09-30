import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, User, Phone, Users, MessageSquare, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RSVPRecord {
  fullName: string;
  phone: string;
  guestCount: number;
  events: string[];
  message: string;
  submittedAt: string;
}

export const RSVPPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [selectedEvents, setSelectedEvents] = useState<string[]>([
    'Haldi',
    'Mehendi',
    'Wedding',
    'Reception',
  ]);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const existing = localStorage.getItem('wedding_rsvp_submission');
    if (existing) {
      setIsSubmitted(true);
    }
  }, []);

  const handleEventToggle = (eventName: string) => {
    if (selectedEvents.includes(eventName)) {
      setSelectedEvents(selectedEvents.filter((e) => e !== eventName));
    } else {
      setSelectedEvents([...selectedEvents, eventName]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !phone.trim()) {
      alert('Please provide your Full Name and Phone Number.');
      return;
    }

    setIsSubmitting(true);

    const record: RSVPRecord = {
      fullName,
      phone,
      guestCount,
      events: selectedEvents,
      message,
      submittedAt: new Date().toISOString(),
    };

    // Send confirmation email to dibyajyotidas2401@gmail.com via FormSubmit API
    try {
      await fetch('https://formsubmit.co/ajax/dibyajyotidas2401@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `✨ New Wedding RSVP: ${fullName} (${guestCount} Guest${guestCount > 1 ? 's' : ''})`,
          _template: 'table',
          _captcha: 'false',
          'Guest Full Name': fullName,
          'Phone Number': phone,
          'Number of Guests': guestCount,
          'Events Attending': selectedEvents.join(', '),
          'Best Wishes / Message': message || 'No message provided',
          'Submitted At': new Date().toLocaleString(),
        }),
      });
    } catch (err) {
      console.warn('FormSubmit email notice warning:', err);
    } finally {
      localStorage.setItem('wedding_rsvp_submission', JSON.stringify(record));
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Launch celebratory confetti
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF70', '#5A456E', '#E9DDF0', '#F5E6C8'],
      });
    }
  };

  return (
    <div className="space-y-10 pb-20 pt-20 px-4 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3">
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#5A456E] font-light">
          Your Presence is Our Blessed Gift
        </p>
        <h1 className="font-serif-heading text-4xl sm:text-5xl text-[#3E2C4A] font-bold">
          RSVP Confirmation
        </h1>
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF70] to-transparent mx-auto" />
        <p className="text-xs sm:text-sm text-[#2D2433]/70">
          Kindly confirm your presence by filling out the form below
        </p>
      </div>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#3E2C4A] text-white rounded-3xl p-8 sm:p-14 text-center shadow-2xl border-2 border-[#D4AF70] space-y-6 gold-border-glow"
        >
          <div className="w-20 h-20 rounded-full bg-[#5A456E] border-2 border-[#D4AF70] flex items-center justify-center mx-auto text-[#D4AF70]">
            <CheckCircle className="w-10 h-10" />
          </div>

          <h2 className="font-script text-5xl text-[#F5E6C8]">
            Thank You!
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[#D4AF70] max-w-lg mx-auto leading-relaxed">
            We are so happy to celebrate this special occasion with you. ❤️
          </p>

          <div className="w-20 h-[1px] bg-[#D4AF70]/40 mx-auto" />

          <div className="space-y-2 text-xs text-[#E9DDF0]/90">
            <p>Your RSVP response has been saved and confirmation details sent to <span className="text-[#D4AF70] font-bold">dibyajyotidas2401@gmail.com</span>!</p>
            <p className="text-[11px] text-[#E9DDF0]/70">We look forward to welcoming you to our wedding celebrations! ❤️</p>
          </div>

          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-2.5 text-xs text-[#D4AF70] underline hover:text-white transition-colors"
          >
            Edit your RSVP details
          </button>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="glass-card p-6 sm:p-10 rounded-3xl shadow-xl border border-[#D4AF70]/40 space-y-6"
        >
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#3E2C4A] flex items-center gap-2">
              <User className="w-4 h-4 text-[#5A456E]" />
              <span>Full Name *</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Priyabrata Mohanty"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#E9DDF0] bg-white focus:outline-none focus:border-[#5A456E] focus:ring-2 focus:ring-[#5A456E]/20 text-sm text-[#2D2433]"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#3E2C4A] flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#5A456E]" />
              <span>Phone Number *</span>
            </label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#E9DDF0] bg-white focus:outline-none focus:border-[#5A456E] focus:ring-2 focus:ring-[#5A456E]/20 text-sm text-[#2D2433]"
            />
          </div>

          {/* Number of Guests */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#3E2C4A] flex items-center gap-2">
              <Users className="w-4 h-4 text-[#5A456E]" />
              <span>Number of Guests</span>
            </label>
            <select
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-[#E9DDF0] bg-white focus:outline-none focus:border-[#5A456E] focus:ring-2 focus:ring-[#5A456E]/20 text-sm text-[#2D2433]"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>

          {/* Events Attending Checkboxes */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-[#3E2C4A]">
              Events Attending
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Haldi', icon: '🌼' },
                { name: 'Mehendi', icon: '🌿' },
                { name: 'Wedding', icon: '💍' },
                { name: 'Reception', icon: '✨' },
              ].map((ev) => {
                const checked = selectedEvents.includes(ev.name);
                return (
                  <button
                    type="button"
                    key={ev.name}
                    onClick={() => handleEventToggle(ev.name)}
                    className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all min-h-[44px] ${
                      checked
                        ? 'bg-[#3E2C4A] text-white border-[#D4AF70] font-bold shadow-md'
                        : 'bg-white text-[#5A456E] border-[#E9DDF0] hover:border-[#D4AF70]'
                    }`}
                  >
                    <span className="text-xs sm:text-sm flex items-center gap-2">
                      <span>{ev.icon}</span>
                      <span>{ev.name}</span>
                    </span>
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                        checked ? 'bg-[#D4AF70] border-[#D4AF70] text-[#3E2C4A]' : 'border-gray-300'
                      }`}
                    >
                      {checked && <CheckCircle className="w-4 h-4 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Special Message */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#3E2C4A] flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#5A456E]" />
              <span>Special Message / Best Wishes for the Couple</span>
            </label>
            <textarea
              rows={4}
              placeholder="Write your warm wishes for Dibya & Subha..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#E9DDF0] bg-white focus:outline-none focus:border-[#5A456E] focus:ring-2 focus:ring-[#5A456E]/20 text-sm text-[#2D2433]"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-[#D4AF70] via-[#F5E6C8] to-[#B88E4B] text-[#3E2C4A] font-extrabold text-sm tracking-widest rounded-full shadow-xl hover:shadow-2xl transition-all uppercase flex items-center justify-center gap-2 min-h-[44px] disabled:opacity-75"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-[#3E2C4A]" />
                <span>SENDING RSVP CONFIRMATION...</span>
              </>
            ) : (
              <>
                <span>CONFIRM RSVP</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.form>
      )}
    </div>
  );
};
