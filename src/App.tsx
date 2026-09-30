import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { MusicPlayer } from './components/MusicPlayer';
import { DigitalEnvelope } from './components/DigitalEnvelope';
import { PetalsCanvas } from './components/PetalsCanvas';
import { Footer } from './components/Footer';

// Pages / Sections
import { HomePage } from './pages/HomePage';
import { HaldiPage } from './pages/HaldiPage';
import { MehendiPage } from './pages/MehendiPage';
import { WeddingPage } from './pages/WeddingPage';
import { ReceptionPage } from './pages/ReceptionPage';
import { VenuePage } from './pages/VenuePage';
import { RSVPPage } from './pages/RSVPPage';

export function App() {
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('home');

  const sectionIds = ['home', 'haldi', 'mehendi', 'wedding', 'reception', 'venue', 'rsvp'];

  // ScrollSpy: Automatically update active tab based on scroll position top-to-down
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9FC] text-[#2D2433] flex flex-col relative selection:bg-[#5A456E] selection:text-[#D4AF70] overflow-x-hidden">
      {/* 1. DIGITAL INVITATION ENVELOPE OVERLAY */}
      {!hasOpenedEnvelope && (
        <DigitalEnvelope onOpen={() => setHasOpenedEnvelope(true)} />
      )}

      {/* 2. BACKGROUND PETALS / GOLD SPARKLE CANVAS */}
      <PetalsCanvas
        petalType={
          activeTab === 'haldi'
            ? 'haldi'
            : activeTab === 'mehendi'
            ? 'mehendi'
            : activeTab === 'wedding'
            ? 'gold'
            : 'rose'
        }
      />

      {/* 3. MUSIC PLAYER TOGGLE */}
      <MusicPlayer />

      {/* 4. TOP NAVBAR */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 5. SINGLE PAGE TOP-TO-DOWN AUTOMATIC CONTINUOUS LAYOUT */}
      <main className="flex-1 w-full space-y-16">
        <section id="home" className="scroll-mt-16">
          <HomePage setActiveTab={handleNavigateToSection} />
        </section>

        <section id="haldi" className="scroll-mt-16">
          <HaldiPage />
        </section>

        <section id="mehendi" className="scroll-mt-16">
          <MehendiPage />
        </section>

        <section id="wedding" className="scroll-mt-16">
          <WeddingPage />
        </section>

        <section id="reception" className="scroll-mt-16">
          <ReceptionPage />
        </section>

        <section id="venue" className="scroll-mt-16">
          <VenuePage />
        </section>

        <section id="rsvp" className="scroll-mt-16">
          <RSVPPage />
        </section>
      </main>

      {/* 6. FOOTER */}
      <Footer />

      {/* 7. MOBILE BOTTOM NAV BAR */}
      <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
