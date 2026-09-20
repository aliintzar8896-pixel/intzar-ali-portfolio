import React from 'react';
import { GraduationCap, Award, BookOpen, User, CheckCircle2, School } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import StatCounter from '../components/StatCounter';
import { personalInfo, statistics } from '../data/profile';
import profileImg from '../assets/intzar-profile.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="About Me"
          title="Passion, Discipline &"
          highlight="Growth"
          subtitle="Continuous learning from academic excellence to modern full-stack web engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image & Academic Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:opacity-100 transition-opacity opacity-70" />
              <div className="relative glass-card rounded-2xl overflow-hidden border border-white/10 p-4">
                <div className="aspect-square rounded-xl overflow-hidden bg-dark-850 relative">
                  <img
                    src={profileImg}
                    alt="Intzar Ali profile preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-card border border-white/10">
                    <p className="text-xs font-mono text-cyan-300">Teerthankar Mahaveer University</p>
                    <p className="text-sm font-bold text-white">BCA Full Stack • Semester 5</p>
                  </div>
                </div>
              </div>
            </div>

            {/* University Credentials Card */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm font-semibold">
                <School className="w-4 h-4" />
                <span>University Verification</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-white/5">
                  <span className="text-slate-500 block">Enrollment ID</span>
                  <span className="text-slate-200 font-bold">{personalInfo.enrollmentNo}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5">
                  <span className="text-slate-500 block">Section & Sem</span>
                  <span className="text-slate-200 font-bold">{personalInfo.currentSemester} ({personalInfo.section})</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Animated Counters (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
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
