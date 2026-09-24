import React, { useEffect, useRef } from 'react';
import { Compass, Sparkles, Rocket, Globe, Target, Laptop, Cpu, HardDrive, Monitor, CheckCircle2, Music, Heart, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Interactive3DCard from '../components/Interactive3DCard';
import { personalInfo, careerGoals, techSetup, interestsList } from '../data/profile';
import { visionAnimation } from '../utils/animations';

export default function VisionSection() {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    const cards = [card1Ref.current, card2Ref.current, card3Ref.current, bannerRef.current].filter(Boolean);
    const ctx = visionAnimation(sectionRef, { cards });

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section id="setup-goals" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background futuristic glow */}
      <div className="ambient-glow-cyan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Goals & Rig"
          title="Ambition, Mindset &"
          highlight="Developer Setup"
          subtitle="The targets driving my ambition, everyday coding workstation, and core philosophy."
        />

        {/* 3-Column Grid: Career Goals | Tech Setup | Interests & Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Column 1: Career Goals */}
          <div ref={card1Ref} className="h-full">
            <Interactive3DCard className="h-full" maxTilt={10}>
              <div className="h-full glass-card p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Target className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-cyan-300 font-bold">Goals & Ambition</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Career Objectives</h3>

                  <ul className="space-y-3">
                    {careerGoals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>TMU Placement Target</span>
                  <span className="text-cyan-400 font-semibold">Delhi NCR / Noida</span>
                </div>
              </div>
            </Interactive3DCard>
          </div>

          {/* Column 2: Tech Setup */}
          <div ref={card2Ref} className="h-full">
            <Interactive3DCard className="h-full" maxTilt={10}>
              <div className="h-full glass-card p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-purple-500/40 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-purple-300 font-bold">Daily Dev Rig</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">My Tech Setup</h3>

                  <div className="space-y-3 text-xs font-mono">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Laptop className="w-3.5 h-3.5 text-purple-400" />
                        Device
                      </span>
                      <span className="text-white font-semibold">{techSetup.laptop}</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                        Processor
                      </span>
                      <span className="text-white font-semibold">{techSetup.processor}</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-slate-400 flex items-center gap-2">
                        <HardDrive className="w-3.5 h-3.5 text-emerald-400" />
                        RAM & SSD
                      </span>
                      <span className="text-white font-semibold">{techSetup.ram} • {techSetup.storage}</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Monitor className="w-3.5 h-3.5 text-pink-400" />
                        Operating System
                      </span>
                      <span className="text-white font-semibold">{techSetup.os}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Environment</span>
                  <span className="text-purple-400 font-semibold">VS Code + Vite</span>
                </div>
              </div>
            </Interactive3DCard>
          </div>

          {/* Column 3: Interests & Philosophy */}
          <div ref={card3Ref} className="h-full">
            <Interactive3DCard className="h-full" maxTilt={10}>
              <div className="h-full glass-card p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-pink-500/40 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400">
                      <Heart className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-pink-300 font-bold">Personal Mindset</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">Interests & Hobbies</h3>
                  <p className="text-xs font-mono text-cyan-300 mb-4">
                    "Big Dreams, Hard Work, Better Me"
                  </p>

                  <div className="space-y-3">
                    {interestsList.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-pink-400" />
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5 font-light">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Core Philosophy</span>
                  <span className="text-pink-400 font-semibold">Continuous Evolution</span>
                </div>
              </div>
            </Interactive3DCard>
          </div>

        </div>

        {/* Cinematic Vision Quote Banner */}
        <div ref={bannerRef} className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
          
          <div className="relative glass-card p-8 sm:p-10 rounded-3xl border border-white/15 text-center space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-300">
              Future Horizon
            </h4>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug max-w-3xl mx-auto">
              “{personalInfo.vision}”
            </blockquote>
            <p className="text-xs font-mono text-slate-400">
              Intzar Ali • BCA Full Stack • Teerthankar Mahaveer University
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
