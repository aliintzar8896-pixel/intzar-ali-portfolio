import React from 'react';

export default function SectionHeader({ badge, title, highlight, subtitle, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-300 glass-pill mb-4 border border-cyan-500/20 shadow-[0_0_15px_rgba(0,242,254,0.15)] ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
        {title}{' '}
        {highlight && (
          <span className="gradient-text-rainbow">{highlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
