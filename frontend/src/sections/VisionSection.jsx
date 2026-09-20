import React from 'react';
import { Compass, Sparkles, Rocket, Globe, Target } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { personalInfo } from '../data/profile';

export default function VisionSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background futuristic glow */}
      <div className="ambient-glow-cyan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <SectionHeader
          badge="Future Horizon"
          title="Engineering the"
          highlight="Future"
          subtitle="A clear vision driven by curiosity, architectural mastery, and purposeful software creation."
        />

        {/* Cinematic Vision Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition-opacity duration-700" />
          
          <div className="relative glass-card p-8 sm:p-12 md:p-16 rounded-3xl border border-white/20 text-center space-y-6">
            
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400 shadow-[0_0_30px_rgba(0,242,254,0.3)]">
              <Rocket className="w-8 h-8 animate-bounce" />
            </div>

            <h3 className="text-xl sm:text-2xl font-mono uppercase tracking-widest text-cyan-300">
              My Vision Statement
            </h3>

            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug max-w-3xl mx-auto">
              “{personalInfo.vision}”
            </blockquote>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
              <div className="p-4 rounded-xl glass-pill">
                <Target className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="text-xs font-mono font-bold text-white uppercase">Product Mindset</h4>
                <p className="text-xs text-slate-400 mt-1">Creating tools that genuinely solve user friction.</p>
              </div>

              <div className="p-4 rounded-xl glass-pill">
                <Globe className="w-5 h-5 text-blue-400 mb-2" />
                <h4 className="text-xs font-mono font-bold text-white uppercase">Scalable Tech</h4>
                <p className="text-xs text-slate-400 mt-1">Harnessing cloud, microservices, and modern stacks.</p>
              </div>

              <div className="p-4 rounded-xl glass-pill">
                <Sparkles className="w-5 h-5 text-purple-400 mb-2" />
                <h4 className="text-xs font-mono font-bold text-white uppercase">Lifelong Craft</h4>
                <p className="text-xs text-slate-400 mt-1">Staying ahead of tomorrow's software paradigms.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
