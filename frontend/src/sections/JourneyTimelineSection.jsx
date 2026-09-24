import React, { useEffect, useRef } from 'react';
import { Calendar, GraduationCap, Award, MapPin, CheckCircle, ArrowRight, Sparkles, BookOpen, School } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { educationTimeline } from '../data/profile';
import { timelineAnimation } from '../utils/animations';

export default function JourneyTimelineSection() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const milestoneBarRef = useRef(null);
  const entriesRef = useRef([]);

  useEffect(() => {
    const validEntries = entriesRef.current.filter(Boolean);

    const ctx = timelineAnimation(sectionRef, {
      line: lineRef.current,
      milestoneBar: milestoneBarRef.current,
      entries: validEntries,
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden bg-dark-850/40">
      {/* Background ambient lighting */}
      <div className="ambient-glow-purple top-1/3 -right-40 pointer-events-none" />
      <div className="ambient-glow-cyan bottom-10 -left-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Chronological Roadmap"
          title="From Student to"
          highlight="Developer"
          subtitle="A cinematic journey tracing academic roots, disciplined milestones, and my progression into modern software engineering."
        />

        {/* Milestone Steps Bar (Horizontal Overview) */}
        <div
          ref={milestoneBarRef}
          className="mb-16 hidden md:flex items-center justify-between p-4 rounded-2xl glass-card border border-white/10"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-xs font-mono font-bold text-cyan-400">2020</span>
            <span className="text-xs font-medium text-slate-300">High School (73.67%)</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-600" />
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-xs font-mono font-bold text-cyan-400">2022</span>
            <span className="text-xs font-medium text-slate-300">Intermediate (79.20%)</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-600" />
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-xs font-mono font-bold text-purple-400">2024</span>
            <span className="text-xs font-medium text-purple-300">BCA Full Stack (TMU)</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-600" />
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xs font-mono font-bold text-emerald-400">Now</span>
            <span className="text-xs font-medium text-emerald-300">Full Stack Engineer</span>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Vertical Connecting Line with GSAP Scrub Draw */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-full shadow-[0_0_12px_rgba(0,242,254,0.5)] origin-top"
          />

          <div className="space-y-12">
            {educationTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const isCurrent = item.status.includes('Progress') || item.status.includes('Active');

              return (
                <div
                  key={index}
                  ref={(el) => (entriesRef.current[index] = el)}
                  className={`timeline-entry relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Dot */}
                  <div className="timeline-node absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-transform duration-300 hover:scale-125 ${
                        isCurrent
                          ? 'bg-purple-600 border-white shadow-[0_0_20px_rgba(168,85,247,0.8)]'
                          : 'bg-dark-900 border-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.6)]'
                      }`}
                    >
                      {isCurrent ? (
                        <Sparkles className="w-4 h-4 text-white animate-spin-slow" />
                      ) : (
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pr-12 lg:pr-16 text-left md:text-right' : 'md:pl-12 lg:pl-16 text-left'
                    } w-full`}
                  >
                    <div
                      className={`timeline-card glass-card p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${
                        isCurrent
                          ? 'border-purple-500/40 glass-card-glow-purple bg-purple-950/20'
                          : 'border-white/10 hover:border-cyan-500/30'
                      }`}
                    >
                      {/* Year & Status Pill */}
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-3 ${
                          isEven ? 'md:justify-end' : 'justify-start'
                        }`}
                      >
                        <span className="timeline-year px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-cyan-300 border border-cyan-500/30">
                          {item.year}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${
                            isCurrent
                              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                              : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      {/* Institution */}
                      <div
                        className={`flex items-center gap-2 text-sm text-slate-400 mt-1 mb-3 ${
                          isEven ? 'md:justify-end' : 'justify-start'
                        }`}
                      >
                        <School className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="font-medium">{item.institution}</span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                        {item.description}
                      </p>

                      {/* Highlight Badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono ${
                          isCurrent
                            ? 'bg-purple-500/15 text-purple-200 border border-purple-500/30'
                            : 'bg-cyan-500/10 text-cyan-200 border border-cyan-500/20'
                        }`}
                      >
                        <Award className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
