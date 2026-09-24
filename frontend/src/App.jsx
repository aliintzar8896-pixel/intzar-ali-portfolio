import React, { useState, useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CinematicVideoPlayer from './components/CinematicVideoPlayer';
import { Play } from 'lucide-react';
import { refreshScrollTriggers } from './utils/animations';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import JourneyTimelineSection from './sections/JourneyTimelineSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import VisionSection from './sections/VisionSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    // Refresh ScrollTrigger calculations after initial DOM layout settle
    const timer = setTimeout(() => {
      refreshScrollTriggers();
    }, 350);

    const handleResize = () => {
      refreshScrollTriggers();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-900 text-slate-100 selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Interactive Constellation Particle Canvas */}
      <BackgroundCanvas />

      {/* Top Page Scroll Reading Indicator */}
      <ScrollProgress />

      {/* Sticky Glassmorphic Navigation */}
      <Navbar onOpenVideo={() => setIsVideoOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection onOpenVideo={() => setIsVideoOpen(true)} />
        <AboutSection />
        <JourneyTimelineSection />
        <SkillsSection />
        <ProjectsSection />
        <VisionSection />
        <ContactSection />
      </main>

      {/* Floating 3D Story Video Quick Launcher */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsVideoOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-red-600 via-purple-600 to-cyan-500 hover:from-red-500 hover:to-cyan-400 text-white text-xs font-mono font-bold shadow-[0_0_25px_rgba(0,242,254,0.4)] border border-white/20 transition-all hover:scale-105 active:scale-95 group cursor-pointer"
          title="Watch 3D Video Experience"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-ping" />
          <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
          <span className="tracking-wide">Play 3D Story</span>
        </button>
      </div>

      {/* Cinematic 3D Video Player Modal */}
      <CinematicVideoPlayer
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}
