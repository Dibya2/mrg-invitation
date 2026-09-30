export interface EventTimeline {
  time: string;
  title: string;
  description?: string;
}

export interface EventDetail {
  id: string;
  title: string;
  subTitle: string;
  icon: string;
  accentColor: string;
  badgeBg: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  googleMapsUrl: string;
  dressCode: string;
  description: string;
  timeline: EventTimeline[];
  bannerImage: string;
  galleryImages: string[];
}

export interface GalleryItem {
  id: string;
  category: 'Haldi' | 'Mehendi' | 'Wedding' | 'Reception' | 'Pre-Wedding';
  url: string;
  caption: string;
}

export const WEDDING_DATA = {
  couple: {
    bride: {
      shortName: 'Subha',
      fullName: 'Subhasmita Nath',
      role: 'The Bride',
      parents: 'Daughter of Mr. & Mrs. Nath',
      bio: 'A gentle soul with a heart full of joy, elegance, and dreams of a beautiful forever.',
      image: '/images/bride.jpg',
    },
    groom: {
      shortName: 'Dibya',
      fullName: 'Dibyajyoti Das',
      role: 'The Groom',
      parents: 'Son of Mr. & Mrs. Das',
      bio: 'A visionary heart filled with warmth, endless laughter, and unconditional love.',
      image: '/images/groom.jpg',
    },
    title: 'Dibya ❤️ Subha',
    tagline: 'Two hearts. One love. One beautiful forever.',
    weddingDateISO: '2026-12-02T18:00:00',
    weddingDateFormatted: 'December 02, 2026',
    weddingDay: 'Wednesday',
  },
  
  venue: {
    name: 'Nitayi Gaura Mandap',
    address: 'Bagada, Kendrapada, Odisha',
    phone: '+91 98765 43210',
    email: 'dibyajyotidas2401@gmail.com',
    rsvpEmail: 'dibyajyotidas2401@gmail.com',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=20.4575295,86.4261678&t=&z=15&ie=UTF8&iwloc=&output=embed',
    googleMapsUrl: 'https://maps.app.goo.gl/41PcEuJHKpVbyWPB9',
    amenities: [
      { name: 'Valet Parking Available', icon: '🅿️' },
      { name: 'Luxury Guest Accommodation', icon: '🏨' },
      { name: 'Wheelchair Accessible Ramp', icon: '♿' },
      { name: 'Fully Air Conditioned', icon: '❄️' },
      { name: 'Gourmet Catering Hall', icon: '🍽️' },
    ]
  },

  quotes: [
    {
      text: "Two hearts, two lives, one beautiful forever.",
      author: "Dibya & Subha"
    },
    {
      text: "Where there is love, there is life.",
      author: "Mahatma Gandhi"
    },
    {
      text: "From this day forward, you shall not walk alone. My heart will be your shelter, and my arms will be your home.",
      author: "Wedding Vow"
    }
  ],

  events: {
    haldi: {
      id: 'haldi',
      title: 'Haldi Ceremony',
      subTitle: 'A day filled with love, laughter, blessings & sunshine.',
      icon: '🌼',
      accentColor: '#EAB308', // Amber/Yellow
      badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
      date: 'December 01, 2026',
      time: '10:00 AM Onwards',
      venue: "Groom's Residence (My Home)",
      address: 'Location: 20.388149, 86.543059, Odisha',
      googleMapsUrl: 'https://www.google.com/maps?q=20.388149,86.543059',
      dressCode: 'Traditional Yellow / Mustard / Floral Ethnic',
      description: 'Let the celebrations begin! Join us as we smear golden turmeric paste on Dibya & Subha, showering them with warmth, laughter, and heartfelt blessings.',
      timeline: [
        { time: '10:00 AM', title: 'Guest Arrival & Welcome Drinks', description: 'Fresh tender coconut & rose cooler' },
        { time: '10:30 AM', title: 'Haldi Ritual Begins', description: 'Traditional songs and turmeric blessings' },
        { time: '12:00 PM', title: 'Traditional Festive Lunch', description: 'Authentic traditional Odia feast' },
        { time: '01:00 PM', title: 'Dhol & Sunshine Dance', description: 'Celebratory dhol and splash of yellow' }
      ],
      bannerImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop',
      galleryImages: [
        'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop'
      ]
    } as EventDetail,

    mehendi: {
      id: 'mehendi',
      title: 'Mehendi Ceremony',
      subTitle: 'Where love meets art and every design tells a story.',
      icon: '🌿',
      accentColor: '#10B981', // Emerald Green
      badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      date: 'December 01, 2026',
      time: '05:00 PM Onwards',
      venue: "Groom's Residence (My Home)",
      address: 'Location: 20.388149, 86.543059, Odisha',
      googleMapsUrl: 'https://www.google.com/maps?q=20.388149,86.543059',
      dressCode: 'Emerald Green / Teal / Bohemian Ethnic',
      description: 'An evening where intricate henna patterns meet acoustic melodies, laughter, and fragrant jasmine. Come celebrate the beautiful beginning of Dibya & Subha\'s forever.',
      timeline: [
        { time: '05:00 PM', title: 'Guest Arrival & High Tea', description: 'Artisanal teas & delicate savories' },
        { time: '05:30 PM', title: 'Henna Application Begins', description: 'Master Mehendi artists for all guests' },
        { time: '07:00 PM', title: 'Live Folk Music & Sangeet', description: 'Dance performances & festive beats' },
        { time: '08:30 PM', title: 'Royal Buffet Dinner', description: 'Multi-cuisine culinary delight' }
      ],
      bannerImage: 'https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?q=80&w=1200&auto=format&fit=crop',
      galleryImages: [
        'https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop'
      ]
    } as EventDetail,

    wedding: {
      id: 'wedding',
      title: 'The Wedding Ceremony',
      subTitle: 'Two families. Two hearts. One beautiful beginning.',
      icon: '💍',
      accentColor: '#D4AF70', // Soft Gold
      badgeBg: 'bg-[#5A456E] text-[#D4AF70] border-[#D4AF70]',
      date: 'December 02, 2026',
      time: '06:00 PM Onwards',
      venue: 'Nitayi Gaura Mandap',
      address: 'Bagada, Kendrapada, Odisha',
      googleMapsUrl: 'https://maps.app.goo.gl/41PcEuJHKpVbyWPB9',
      dressCode: 'Royal Indian Formal / Velvet / Silk Sarees & Sherwanis',
      description: 'Together with their families, Dibyajyoti Das & Subhasmita Nath invite you to witness the sacred union of their souls and the beginning of their eternal journey.',
      timeline: [
        { time: '06:00 PM', title: 'Grand Baraat Procession', description: 'Joyous music & dancing entry of groom' },
        { time: '07:00 PM', title: 'Jaimala (Garland Exchange)', description: 'Bride entrance under flower canopy' },
        { time: '07:30 PM', title: 'Sacred Vedic Wedding Rituals', description: 'Seven vows around holy fire' },
        { time: '09:00 PM', title: 'Gala Royal Wedding Feast', description: 'Lavish traditional & global buffet' },
        { time: '10:00 PM', title: 'Blessings & Family Photo Session', description: 'Creating timeless memories together' }
      ],
      bannerImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      galleryImages: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop'
      ]
    } as EventDetail,

    reception: {
      id: 'reception',
      title: 'The Grand Reception',
      subTitle: 'Join us as we celebrate love, laughter, family and friendship.',
      icon: '✨',
      accentColor: '#8B5CF6', // Purple Glow
      badgeBg: 'bg-purple-100 text-purple-800 border-purple-300',
      date: 'December 03, 2026',
      time: '07:00 PM Onwards',
      venue: "Groom's Residence (My Home)",
      address: 'Location: 20.388149, 86.543059, Odisha',
      googleMapsUrl: 'https://www.google.com/maps?q=20.388149,86.543059',
      dressCode: 'Black Tie / Evening Gowns & Formal Suits / Indo-Western',
      description: 'Join us for an unforgettable evening filled with toasts, live musical performances, fine dining, and endless dancing to celebrate the newly married couple.',
      timeline: [
        { time: '07:00 PM', title: 'Red Carpet Welcome & Cocktails', description: 'Sparkling drinks & acoustic tunes' },
        { time: '07:45 PM', title: 'Couple Entrance & Cake Cutting', description: 'Grand celebration Toast' },
        { time: '08:15 PM', title: 'First Dance & Toast Speeches', description: 'Heartfelt messages from family & friends' },
        { time: '09:00 PM', title: 'Grand Dinner & DJ Floor', description: 'Gourmet banquet & dancing all night' }
      ],
      bannerImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
      galleryImages: [
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800&auto=format&fit=crop'
      ]
    } as EventDetail,
  },

  gallery: [
    {
      id: 'g1',
      category: 'Pre-Wedding',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
      caption: 'Sunset Promise — Subha & Dibya in Odisha Coast'
    },
    {
      id: 'g2',
      category: 'Haldi',
      url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop',
      caption: 'Golden Blossoms & Turmeric Smiles'
    },
    {
      id: 'g3',
      category: 'Mehendi',
      url: 'https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?q=80&w=800&auto=format&fit=crop',
      caption: 'Intricate Henna Motifs of Love'
    },
    {
      id: 'g4',
      category: 'Wedding',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
      caption: 'The Sacred Seven Vows under Royal Mandap'
    },
    {
      id: 'g5',
      category: 'Reception',
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
      caption: 'Evening of Elegance & Pure Joy'
    },
    {
      id: 'g6',
      category: 'Pre-Wedding',
      url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop',
      caption: 'Walk by the Lake'
    },
    {
      id: 'g7',
      category: 'Wedding',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
      caption: 'Jaimala Flower Garland Moment'
    },
    {
      id: 'g8',
      category: 'Haldi',
      url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
      caption: 'Laughter with Family'
    }
  ] as GalleryItem[],

  whatsappShare: {
    message: `You're Invited! ❤️

Join us in celebrating the wedding of
Subhasmita Nath & Dibyajyoti Das.

📅 December 02, 2026
📍 Nitayi Gaura Mandap, Bagada, Kendrapada

We can't wait to celebrate with you!
View full invitation online: `
  }
};
