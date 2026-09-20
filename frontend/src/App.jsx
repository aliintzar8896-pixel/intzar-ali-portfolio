import React from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import JourneyTimelineSection from './sections/JourneyTimelineSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import VisionSection from './sections/VisionSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-900 text-slate-100 selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Interactive Constellation Particle Canvas */}
      <BackgroundCanvas />

      {/* Top Page Scroll Reading Indicator */}
      <ScrollProgress />

      {/* Sticky Glassmorphic Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <JourneyTimelineSection />
        <SkillsSection />
        <ProjectsSection />
        <VisionSection />
        <ContactSection />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}
