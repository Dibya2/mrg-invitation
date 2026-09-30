import { Home, Calendar, HeartHandshake, MapPin, Heart } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeTab, setActiveTab }) => {
  const bottomItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'wedding', label: 'Wedding', icon: HeartHandshake },
    { id: 'venue', label: 'Venue', icon: MapPin },
    { id: 'rsvp', label: 'RSVP', icon: Heart },
  ];

  const handleClick = (id: string) => {
    const targetId = id === 'events' ? 'haldi' : id;
    setActiveTab(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#3E2C4A]/98 backdrop-blur-lg border-t border-[#D4AF70]/30 shadow-2xl px-2 py-1 flex items-center justify-around">
      {bottomItems.map((item) => {
        const Icon = item.icon;
        const isActive =
          activeTab === item.id ||
          (item.id === 'events' && ['haldi', 'mehendi', 'reception'].includes(activeTab));

        return (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-300 min-h-[44px] min-w-[44px] ${
              isActive
                ? 'text-[#D4AF70] scale-105 font-bold'
                : 'text-white/70 hover:text-white'
            }`}
          >
            <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'text-[#D4AF70]' : 'text-white/70'}`} />
            <span className="text-[10px] tracking-wider uppercase">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
