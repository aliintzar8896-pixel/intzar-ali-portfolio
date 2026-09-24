import React, { useState, useEffect, useRef } from 'react';
import {
  Code2,
  FileCode2,
  Layout,
  Palette,
  Server,
  Cpu,
  Terminal,
  Database,
  Table2,
  BarChart3,
  GitBranch,
  Zap,
  Network,
  Check,
  Layers,
  Sparkles
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { skillsData } from '../data/profile';
import { skillsAnimation } from '../utils/animations';

// Icon mapper for dynamic icons
const iconMap = {
  Code2,
  FileCode2,
  Layout,
  Palette,
  Server,
  Cpu,
  Terminal,
  Database,
  Table2,
  BarChart3,
  GitBranch,
  Zap,
  Network,
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const sectionRef = useRef(null);
  const tabsRef = useRef(null);
  const groupsRef = useRef([]);

  const categories = ['All', ...skillsData.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((c) => c.category === selectedCategory);

  useEffect(() => {
    const validGroups = groupsRef.current.filter(Boolean);
    const ctx = skillsAnimation(sectionRef, {
      tabs: tabsRef.current,
      groups: validGroups,
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, [selectedCategory]);

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Technical Arsenal"
          title="Skills, Frameworks &"
          highlight="Technologies"
          subtitle="Honest technical competencies honed through rigorous practice, academic coursework, and production-grade project builds. No fake percentages."
        />

        {/* Category Tabs */}
        <div
          ref={tabsRef}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                  : 'text-slate-400 glass-pill hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories & Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group, groupIdx) => (
            <div
              key={group.category}
              ref={(el) => (groupsRef.current[groupIdx] = el)}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    {group.category}
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    {group.skills.length} competencies
                  </span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm mb-6 font-light">
                  {group.description}
                </p>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {group.skills.map((skill, sIdx) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={sIdx}
                        className="skill-chip p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_20px_rgba(0,242,254,0.1)] transition-all duration-300 group cursor-default"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-dark-900 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </h4>
                            <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                              {skill.level}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-cyan-400/80">
                  <Sparkles className="w-3.5 h-3.5" />
                  Hands-on MERN Integration
                </span>
                <span>Active Stack</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
