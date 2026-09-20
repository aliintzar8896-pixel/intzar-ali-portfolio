import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';
import { personalInfo, navLinks, socialLinks } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-dark-900/90 pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow */}
      <div className="ambient-glow-cyan -top-40 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white">
                Intzar <span className="gradient-text-cyan">Ali</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-light">
              BCA Full Stack Student at Teerthankar Mahaveer University, Moradabad. Dedicated to building modern, robust, and cinematic web products.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg glass-pill flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg glass-pill flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg glass-pill flex items-center justify-center text-slate-400 hover:text-white hover:border-pink-400 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-lg glass-pill flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Info Column (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Academic Credentials
            </h4>
            <div className="p-4 rounded-xl glass-card text-xs space-y-2 border border-white/5 font-mono">
              <div className="flex justify-between text-slate-400">
                <span>University:</span>
                <span className="text-slate-200">TMU, Moradabad</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Program:</span>
                <span className="text-slate-200">BCA – Full Stack</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Current Status:</span>
                <span className="text-cyan-300">5th Sem (Section E)</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Enrollment No:</span>
                <span className="text-purple-300">TCA2468220</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>
            © {new Date().getFullYear()} Intzar Ali. All rights reserved. Built with React & Express.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors p-2 rounded-lg glass-pill"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
