import React, { useEffect, useState, useRef } from 'react';

export default function StatCounter({ value, suffix = '', label }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const numericTarget = parseInt(value, 10);
  const isNumeric = !isNaN(numericTarget);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          if (!isNumeric) {
            return;
          }

          let start = 0;
          const duration = 1600; // ms
          const stepTime = 25;
          const steps = duration / stepTime;
          const increment = numericTarget / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= numericTarget) {
              setDisplayValue(numericTarget);
              clearInterval(timer);
            } else {
              setDisplayValue(Math.floor(start));
            }
          }, stepTime);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, isNumeric, numericTarget]);

  return (
    <div
      ref={ref}
      className="glass-card p-5 rounded-2xl text-center border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group"
    >
      <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight group-hover:scale-105 transition-transform flex items-center justify-center">
        <span className="gradient-text-cyan">
          {isNumeric ? (hasAnimated ? displayValue : 0) : value}
        </span>
        {suffix && <span className="text-cyan-400 text-2xl font-bold ml-0.5">{suffix}</span>}
      </div>
      <div className="text-xs sm:text-sm text-slate-400 mt-2 font-medium tracking-wide">
        {label}
      </div>
    </div>
  );
}
