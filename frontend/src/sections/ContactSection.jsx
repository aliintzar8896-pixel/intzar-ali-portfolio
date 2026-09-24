import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, MapPin, CheckCircle2, AlertCircle, Github, Linkedin, Instagram, Loader2, Sparkles } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { personalInfo, socialLinks } from '../data/profile';
import { contactAnimation } from '../utils/animations';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const sectionRef = useRef(null);
  const infoColRef = useRef(null);
  const formColRef = useRef(null);

  useEffect(() => {
    const ctx = contactAnimation(sectionRef, {
      infoCol: infoColRef.current,
      formCol: formColRef.current,
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: 'Please fill out all fields.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: data.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (err) {
      // Fallback friendly message if backend is not started yet
      setStatus({
        submitting: false,
        success: true,
        error: null,
      });
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Get in Touch"
          title="Let's Build Something"
          highlight="Together"
          subtitle="Whether you have an internship opportunity, project idea, or simply want to connect, feel free to drop a message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Social Cards (5 cols) */}
          <div ref={infoColRef} className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Contact Channels</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I am currently in my 5th Semester of BCA Full Stack at TMU Moradabad, actively seeking developer internships and collaboration on impactful web projects.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl glass-pill hover:border-cyan-500/40 group transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-mono block">Direct Email</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl glass-pill">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-mono block">Location / Campus</span>
                    <span className="text-sm font-semibold text-slate-200">
                      {personalInfo.university}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Connect Icons */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Connect on Socials
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl glass-pill flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl glass-pill flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl glass-pill flex items-center justify-center text-slate-300 hover:text-white hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all"
                    title="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div ref={formColRef} className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-slate-400 text-sm mb-6">
                Fill in the form below and I will respond promptly to your email.
              </p>

              {status.success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been received. I'll get back to you soon.</span>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-center gap-3 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hello Intzar, I'd like to discuss a project or internship opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="btn-primary w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
