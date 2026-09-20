import React, { useState } from 'react';
import { ArrowDown, Code2, Sparkles, Send, Briefcase, FileText, ChevronRight, Github, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/profile';
import profileImg from '../assets/intzar-profile.jpg';

export default function HeroSection() {
  const [imgLoaded, setImgLoaded] = useState(false);

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
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow-cyan -top-20 -left-20 animate-pulse-glow" />
      <div className="ambient-glow-purple -bottom-20 -right-20 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium shadow-[0_0_20px_rgba(0,242,254,0.15)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Internships & Projects</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 font-mono text-xs">TMU Moradabad</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <p className="text-lg sm:text-xl font-medium text-slate-400 tracking-wide font-mono">
                Hi, I'm <span className="text-cyan-400 font-semibold">{personalInfo.name}</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.1]">
                Web Developer <br />
                <span className="gradient-text-cyan">MERN Stack</span> Developer
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {personalInfo.bio}
            </p>

            {/* Action Buttons Grid */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
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
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-400 font-mono">
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/5">
                BCA Full Stack
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/5">
                Semester 5 (Sec E)
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/5">
                Enr: TCA2468220
              </span>
            </div>
          </div>

          {/* Right Column: Profile Image Area (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-soft-float">
              
              {/* Outer Glowing Rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-spin-slow" />
              <div className="absolute -inset-3 rounded-full border border-purple-500/20 border-dashed animate-spin-slow" style={{ animationDirection: 'reverse' }} />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-500/30 via-transparent to-purple-600/30 blur-xl opacity-75" />

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_50px_rgba(0,242,254,0.3)] overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-900 border-2 border-dark-900 relative">
                  <img
                    src={profileImg}
                    alt="Intzar Ali - Web Developer"
                    onLoad={() => setImgLoaded(true)}
                    className={`w-full h-full object-cover object-center transition-all duration-700 ${
                      imgLoaded ? 'scale-100 blur-0 opacity-100' : 'scale-105 blur-sm opacity-50'
                    } hover:scale-105`}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Floating Badges */}
              <div className="absolute -top-3 right-4 glass-card px-3.5 py-2 rounded-xl border border-cyan-500/40 shadow-xl flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-semibold text-white">MERN Stack</span>
              </div>

              <div className="absolute -bottom-2 left-4 glass-card px-3.5 py-2 rounded-xl border border-purple-500/40 shadow-xl flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono font-semibold text-white">From Student to Dev</span>
              </div>
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
