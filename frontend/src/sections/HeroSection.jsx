import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Code2, Sparkles, Send, Briefcase, FileText, ChevronRight, Github, Play, Layers, Image as ImageIcon } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/profile';
import Interactive3DCard from '../components/Interactive3DCard';
import profileSuit from '../assets/intzar-suit.jpg';
import profileBlue from '../assets/intzar-blue-shirt.jpg';
import { heroAnimation } from '../utils/animations';

export default function HeroSection({ onOpenVideo }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [activePhoto, setActivePhoto] = useState('suit'); // 'suit' | 'blue'

  const sectionRef = useRef(null);
  const pillRef = useRef(null);
  const greetingRef = useRef(null);
  const headingRef = useRef(null);
  const bioRef = useRef(null);
  const buttonsRef = useRef(null);
  const tagsRef = useRef(null);
  const profileCardRef = useRef(null);
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);

  const currentPhotoSrc = activePhoto === 'suit' ? profileSuit : profileBlue;

  useEffect(() => {
    const buttons = buttonsRef.current ? Array.from(buttonsRef.current.children) : [];
    const tags = tagsRef.current ? Array.from(tagsRef.current.children) : [];
    const glows = [glow1Ref.current, glow2Ref.current].filter(Boolean);

    const ctx = heroAnimation(sectionRef, {
      pill: pillRef.current,
      greeting: greetingRef.current,
      heading: headingRef.current,
      bio: bioRef.current,
      buttons,
      tags,
      profileCard: profileCardRef.current,
      glows,
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glows */}
      <div
        ref={glow1Ref}
        className="ambient-glow-cyan -top-20 -left-20 animate-pulse-glow pointer-events-none"
      />
      <div
        ref={glow2Ref}
        className="ambient-glow-purple -bottom-20 -right-20 animate-pulse-glow pointer-events-none"
        style={{ animationDelay: '1.5s' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill with 3D Video Reel Trigger */}
            <div
              ref={pillRef}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium shadow-[0_0_20px_rgba(0,242,254,0.15)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for Internships & Projects</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300 font-mono text-xs">TMU Moradabad</span>
              </div>

              {onOpenVideo && (
                <button
                  onClick={onOpenVideo}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-500/20 to-purple-500/20 hover:from-red-500/30 hover:to-purple-500/30 border border-red-500/40 text-red-300 hover:text-white text-xs font-mono font-semibold transition-all shadow-[0_0_15px_rgba(239,68,68,0.2)] group"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>3D Video Story</span>
                  <Play className="w-3 h-3 fill-current text-red-400 group-hover:scale-110 transition-transform" />
                </button>
              )}
            </div>

            {/* Headline with Staggered Reveal */}
            <div className="space-y-2">
              <p
                ref={greetingRef}
                className="text-lg sm:text-xl font-medium text-slate-400 tracking-wide font-mono"
              >
                Hi, I'm <span className="text-cyan-400 font-semibold">{personalInfo.name}</span>
              </p>
              <h1
                ref={headingRef}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.1]"
              >
                Web Developer <br />
                <span className="gradient-text-cyan">MERN Stack</span> Developer
              </h1>
            </div>

            {/* Description */}
            <p
              ref={bioRef}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              {personalInfo.bio}
            </p>

            {/* Action Buttons Grid */}
            <div
              ref={buttonsRef}
              className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5"
            >
              {/* Primary 3D Video Experience Button */}
              {onOpenVideo && (
                <button
                  onClick={onOpenVideo}
                  className="px-5 py-3 rounded-xl flex items-center gap-2.5 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 border border-white/20"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Watch 3D Video Experience</span>
                </button>
              )}

              <button
                onClick={() => scrollToSection('journey')}
                className="btn-primary px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-semibold shadow-lg shadow-cyan-500/20"
              >
                <span>View My Journey</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="btn-secondary px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-medium"
              >
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <span>Explore Projects</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="btn-secondary px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-medium hover:border-purple-500 hover:text-purple-300"
              >
                <Send className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>

              <a
                href="https://github.com/aliintzar8896-pixel"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl glass-pill text-slate-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Academic Credential Quick Tags */}
            <div
              ref={tagsRef}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-400 font-mono"
            >
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/5">
                BCA Full Stack
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/5">
                Semester 5 (Sec E)
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/5">
                Enr: TCA2468220
              </span>
              <span className="px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                CGPA: 78.3%
              </span>
            </div>
          </div>

          {/* Right Column: 3D Interactive Parallax Model Area (5 cols) */}
          <div
            ref={profileCardRef}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Interactive 3D Card with Mouse Parallax Tilt */}
            <Interactive3DCard
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center cursor-grab active:cursor-grabbing"
              maxTilt={18}
              scale={1.03}
            >
              {/* Outer Glowing Holographic Rings (Layer 1 - background) */}
              <div
                className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-spin-slow pointer-events-none"
                style={{ transform: 'translateZ(-20px)' }}
              />
              <div
                className="absolute -inset-4 rounded-full border border-purple-500/20 border-dashed animate-spin-slow pointer-events-none"
                style={{ animationDirection: 'reverse', transform: 'translateZ(-10px)' }}
              />
              <div
                className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-500/30 via-transparent to-purple-600/30 blur-2xl opacity-80 pointer-events-none"
                style={{ transform: 'translateZ(-30px)' }}
              />

              {/* Real Photo Circular 3D Container (Layer 2) */}
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_60px_rgba(0,242,254,0.35)] overflow-hidden"
                style={{ transform: 'translateZ(20px)' }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-900 border-2 border-dark-900 relative group">
                  <img
                    key={activePhoto}
                    src={currentPhotoSrc}
                    alt="Intzar Ali - Professional Portrait"
                    onLoad={() => setImgLoaded(true)}
                    className={`w-full h-full object-cover object-top transition-all duration-700 ${
                      imgLoaded ? 'scale-100 blur-0 opacity-100' : 'scale-105 blur-sm opacity-50'
                    } group-hover:scale-105`}
                  />
                  
                  {/* Subtle 3D Vignette & Glass Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating 3D Depth Badges (Layer 3 - High Z-depth) */}
              <div
                className="absolute -top-2 right-2 glass-card px-3.5 py-2 rounded-xl border border-cyan-400/50 shadow-2xl flex items-center gap-2 pointer-events-none"
                style={{ transform: 'translateZ(45px)' }}
              >
                <Code2 className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white">MERN Stack</span>
              </div>

              <div
                className="absolute -bottom-2 left-2 glass-card px-3.5 py-2 rounded-xl border border-purple-400/50 shadow-2xl flex items-center gap-2 pointer-events-none"
                style={{ transform: 'translateZ(50px)' }}
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono font-bold text-white">GSAP Cinematic</span>
              </div>
            </Interactive3DCard>

            {/* Photo Selector Switcher Underneath */}
            <div className="mt-4 flex items-center gap-2 bg-dark-850/80 px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono">
              <span className="text-slate-400 flex items-center gap-1">
                <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>Profile Look:</span>
              </span>
              <button
                onClick={() => setActivePhoto('suit')}
                className={`px-2.5 py-0.5 rounded-full transition-all ${
                  activePhoto === 'suit'
                    ? 'bg-cyan-500 text-black font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Official (Suit)
              </button>
              <button
                onClick={() => setActivePhoto('blue')}
                className={`px-2.5 py-0.5 rounded-full transition-all ${
                  activePhoto === 'blue'
                    ? 'bg-cyan-500 text-black font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Casual (Blue)
              </button>
            </div>

          </div>

        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="mt-14 md:mt-20 flex flex-col items-center justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors">
              Explore Journey
            </span>
            <div className="w-7 h-11 rounded-full border-2 border-slate-600 group-hover:border-cyan-400 flex items-start justify-center p-1.5 transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
