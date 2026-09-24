import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Award, BookOpen, User, CheckCircle2, School, TrendingUp, Sparkles, Image as ImageIcon } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import StatCounter from '../components/StatCounter';
import Interactive3DCard from '../components/Interactive3DCard';
import { personalInfo, statistics, academicPerformance } from '../data/profile';
import profileSuit from '../assets/intzar-suit.jpg';
import profileBlue from '../assets/intzar-blue-shirt.jpg';
import { aboutAnimation } from '../utils/animations';

export default function AboutSection() {
  const [activePhoto, setActivePhoto] = useState('suit'); // default to new sharp suit portrait
  const currentPhotoSrc = activePhoto === 'suit' ? profileSuit : profileBlue;

  const sectionRef = useRef(null);
  const photoCardRef = useRef(null);
  const storyBlockRef = useRef(null);
  const verificationCardRef = useRef(null);

  useEffect(() => {
    const ctx = aboutAnimation(sectionRef, {
      photoCard: photoCardRef.current,
      storyBlock: storyBlockRef.current,
      verificationCard: verificationCardRef.current,
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="About Me"
          title="Passion, Discipline &"
          highlight="Growth"
          subtitle="Continuous learning from academic excellence to modern full-stack web engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Real Photo in 3D Card & Academic Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div ref={photoCardRef}>
              <Interactive3DCard className="relative group rounded-3xl" maxTilt={14} scale={1.02}>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:opacity-100 transition-opacity opacity-70" />
                <div className="relative glass-card rounded-2xl overflow-hidden border border-white/10 p-4">
                  <div className="aspect-square rounded-xl overflow-hidden bg-dark-850 relative">
                    <img
                      key={activePhoto}
                      src={currentPhotoSrc}
                      alt="Intzar Ali - Professional Portrait"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                    
                    {/* Floating University Card */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-card border border-white/10">
                      <p className="text-xs font-mono text-cyan-300">Teerthankar Mahaveer University</p>
                      <p className="text-sm font-bold text-white">BCA Full Stack • Semester 5</p>
                    </div>
                  </div>
                </div>
              </Interactive3DCard>

              {/* Photo Selector Switcher Underneath */}
              <div className="mt-3 flex items-center justify-center gap-2 bg-dark-850/80 px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono w-fit mx-auto">
                <span className="text-slate-400 flex items-center gap-1">
                  <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Photo:</span>
                </span>
                <button
                  onClick={() => setActivePhoto('suit')}
                  className={`px-2.5 py-0.5 rounded-full transition-all ${
                    activePhoto === 'suit'
                      ? 'bg-cyan-500 text-black font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Suit Portrait
                </button>
                <button
                  onClick={() => setActivePhoto('blue')}
                  className={`px-2.5 py-0.5 rounded-full transition-all ${
                    activePhoto === 'blue'
                      ? 'bg-cyan-500 text-black font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Casual Blue
                </button>
              </div>
            </div>

            {/* University Credentials & Academic Performance Card */}
            <div
              ref={verificationCardRef}
              className="glass-card p-5 rounded-2xl border border-white/10 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-cyan-400 font-mono text-sm font-semibold">
                  <School className="w-4 h-4" />
                  <span>University Verification</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                  Enr: {personalInfo.enrollmentNo}
                </span>
              </div>

              {/* Semester Breakdown Table (From Infographic) */}
              <div className="space-y-2 pt-1 border-t border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    Semester Breakdown
                  </span>
                  <span className="text-cyan-300 font-bold">CGPA: {academicPerformance.cgpa}</span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
                  {academicPerformance.semesters.map((s, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-white/5 border border-white/5">
                      <span className="text-slate-400 block text-[10px]">{s.sem}</span>
                      <span className="text-white font-bold text-sm">{s.gpa}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Animated Counters (7 cols) */}
          <div ref={storyBlockRef} className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                "From Student to Developer"
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                {personalInfo.aboutDetailed}
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                By combining academic discipline in computer fundamentals with hands-on practice in the MERN ecosystem, I build applications that are clean, performant, and user-centric. My goal is to continually push boundaries and bring ideas to life through code.
              </p>
            </div>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl glass-pill">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Clean Code & Architecture</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Focus on scalable, decoupled, and maintainable systems.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl glass-pill">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Continuous Evolution</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Evolving from classroom theory to building production-ready apps.</p>
                </div>
              </div>
            </div>

            {/* Animated Counters Section */}
            <div className="pt-4">
              <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                Key Milestones & Numbers
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {statistics.map((stat, idx) => (
                  <StatCounter
                    key={idx}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
