import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  X,
  SkipForward,
  SkipBack,
  Sparkles,
  GraduationCap,
  Award,
  Code2,
  FolderGit2,
  Target,
  Compass,
  Laptop,
  Share2,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { videoChapters, personalInfo, academicPerformance, techSetup, careerGoals } from '../data/profile';
import profileSuit from '../assets/intzar-suit.jpg';
import profileBlue from '../assets/intzar-blue-shirt.jpg';

export default function CinematicVideoPlayer({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [progressInChapter, setProgressInChapter] = useState(0); // 0 to 100%
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showChaptersDrawer, setShowChaptersDrawer] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const containerRef = useRef(null);
  const audioCtxRef = useRef(null);
  const synthIntervalRef = useRef(null);

  const currentChapter = videoChapters[currentChapterIndex] || videoChapters[0];
  const totalDuration = videoChapters.reduce((acc, ch) => acc + ch.duration, 0);

  // Compute overall elapsed seconds
  const elapsedSeconds =
    videoChapters.slice(0, currentChapterIndex).reduce((acc, ch) => acc + ch.duration, 0) +
    (progressInChapter / 100) * currentChapter.duration;

  // Format seconds to mm:ss
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Web Audio Synth for ambient futuristic soundtrack
  const playSynthNote = (freq, duration = 0.6) => {
    if (isMuted) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // AudioContext policy
    }
  };

  // Sound generator loop when playing & not muted
  useEffect(() => {
    if (isPlaying && !isMuted && isOpen) {
      const chords = [220, 261.63, 329.63, 392.0, 440, 523.25];
      let noteIdx = 0;
      synthIntervalRef.current = setInterval(() => {
        playSynthNote(chords[noteIdx % chords.length], 1.2);
        noteIdx++;
      }, 1400 / playbackSpeed);
    } else {
      if (synthIntervalRef.current) clearInterval(synthIntervalRef.current);
    }

    return () => {
      if (synthIntervalRef.current) clearInterval(synthIntervalRef.current);
    };
  }, [isPlaying, isMuted, isOpen, playbackSpeed]);

  // Main video ticker loop
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const intervalMs = 50;
    const step = (100 / (currentChapter.duration * (1000 / intervalMs))) * playbackSpeed;

    const timer = setInterval(() => {
      setProgressInChapter((prev) => {
        if (prev + step >= 100) {
          // Advance to next chapter or loop
          if (currentChapterIndex < videoChapters.length - 1) {
            setCurrentChapterIndex((c) => c + 1);
            return 0;
          } else {
            // Finished all
            setIsPlaying(false);
            return 100;
          }
        }
        return prev + step;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying, currentChapterIndex, playbackSpeed, currentChapter.duration]);

  // Jump to specific chapter
  const goToChapter = (index) => {
    setCurrentChapterIndex(index);
    setProgressInChapter(0);
    setIsPlaying(true);
  };

  // Jump via timeline click
  const handleTimelineClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickRatio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const targetSeconds = clickRatio * totalDuration;

    let accumulated = 0;
    for (let i = 0; i < videoChapters.length; i++) {
      const chDuration = videoChapters[i].duration;
      if (accumulated + chDuration >= targetSeconds) {
        setCurrentChapterIndex(i);
        const chapterOffset = targetSeconds - accumulated;
        setProgressInChapter((chapterOffset / chDuration) * 100);
        break;
      }
      accumulated += chDuration;
    }
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if (e.key === ' ' && isOpen) {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Alternate real photo based on scene for dynamic variety
  const activePhoto = currentChapterIndex % 2 === 0 ? profileSuit : profileBlue;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-2 sm:p-4 md:p-6 animate-fade-in">
      
      {/* Video Player Modal Container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl bg-dark-900/95 rounded-2xl md:rounded-3xl border border-cyan-500/30 shadow-[0_0_80px_rgba(0,242,254,0.25)] overflow-hidden flex flex-col"
        style={{ aspectRatio: '16/9', maxHeight: '92vh' }}
      >
        {/* Top Video Header Bar */}
        <div className="absolute top-0 left-0 right-0 z-30 px-4 py-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>LIVE 3D REEL</span>
            </div>
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide hidden sm:inline">
              Intzar Ali — Journey & Portfolio 3D Experience
            </span>
            <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
              4K 60FPS
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowChaptersDrawer(!showChaptersDrawer)}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 transition-colors"
            >
              Chapters ({currentChapterIndex + 1}/{videoChapters.length})
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-red-500/30 text-slate-300 hover:text-white transition-colors"
              title="Close Video (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cinematic Video Canvas (Simulated 3D Camera Scene) */}
        <div className="relative flex-1 w-full h-full overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-850 flex items-center justify-center select-none">
          
          {/* Animated 3D Ambient Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f2fe08_1px,transparent_1px),linear-gradient(to_bottom,#00f2fe08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Dynamic Light Sweeps */}
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Cinematic Scene Content with Ken-Burns Camera Zoom */}
          <div
            className="relative z-10 w-full h-full p-6 sm:p-10 md:p-12 flex flex-col items-center justify-center transition-transform duration-1000 ease-out"
            style={{
              transform: `scale(${1 + (progressInChapter / 100) * 0.08})`,
            }}
          >
            {/* Split Layout: Left Info & Right Real Photo 3D Frame */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Scene Milestone Details (7 cols) */}
              <div className="md:col-span-7 space-y-4 text-left">
                {/* Chapter Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{currentChapter.tag}</span>
                </div>

                {/* Chapter Main Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight drop-shadow-md">
                  {currentChapter.title}
                </h2>

                {/* Subtitle / Key Milestone Data */}
                <p className="text-cyan-300 text-sm sm:text-base font-mono font-medium leading-relaxed">
                  {currentChapter.subtitle}
                </p>

                {/* Narrative Caption */}
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-xl bg-dark-900/60 p-3 rounded-xl border border-white/5 backdrop-blur-sm">
                  {currentChapter.caption}
                </p>

                {/* Highlight Chip */}
                <div className="pt-1 flex items-center gap-2">
                  <div className="px-3 py-1 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>{currentChapter.highlight}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Real Photo in 3D Animated Frame (5 cols) */}
              <div className="md:col-span-5 flex items-center justify-center">
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64">
                  
                  {/* Rotating 3D Rings */}
                  <div className="absolute inset-0 rounded-full border border-cyan-400/40 animate-spin-slow" />
                  <div
                    className="absolute -inset-3 rounded-full border border-purple-500/30 border-dashed animate-spin-slow"
                    style={{ animationDirection: 'reverse' }}
                  />
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-500/30 via-transparent to-purple-600/30 blur-lg" />

                  {/* Real Photo with Cinematic Filter & Lighting */}
                  <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_40px_rgba(0,242,254,0.4)] overflow-hidden">
                    <div className="w-full h-full rounded-full overflow-hidden bg-dark-900 border-2 border-dark-900 relative">
                      <img
                        src={activePhoto}
                        alt="Intzar Ali Real Photo"
                        className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
                      />
                      {/* Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* 3D Floating Scene Badge */}
                  <div className="absolute -bottom-2 right-2 px-3 py-1 rounded-xl glass-card border border-cyan-400/40 shadow-xl flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono font-bold text-white">Intzar Ali</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Simulated Film Grain & Scanline Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Side Drawer for Chapter Quick Jump */}
          {showChaptersDrawer && (
            <div className="absolute top-12 right-0 bottom-16 w-72 bg-dark-900/95 border-l border-cyan-500/30 backdrop-blur-2xl z-30 p-4 overflow-y-auto space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Select Chapter
                </span>
                <button
                  onClick={() => setShowChaptersDrawer(false)}
                  className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {videoChapters.map((ch, idx) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    goToChapter(idx);
                    setShowChaptersDrawer(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between ${
                    idx === currentChapterIndex
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-semibold'
                      : 'hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <div className="truncate pr-2">
                    <span className="font-mono text-[10px] text-slate-500 block">
                      {ch.tag.split('/')[0]}
                    </span>
                    <span className="truncate">{ch.title}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Video Player Controls Bottom Bar */}
        <div className="relative z-30 bg-dark-950/90 border-t border-white/10 px-4 py-2.5 flex flex-col gap-2">
          
          {/* Timeline Scrubber Bar with Chapter Markers */}
          <div
            onClick={handleTimelineClick}
            className="relative w-full h-2.5 bg-white/10 hover:h-3.5 rounded-full cursor-pointer transition-all flex items-center group"
          >
            {/* Played Progress Bar */}
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full relative"
              style={{
                width: `${(elapsedSeconds / totalDuration) * 100}%`,
              }}
            >
              {/* Scrubber Knob */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_10px_rgba(0,242,254,1)] scale-0 group-hover:scale-100 transition-transform" />
            </div>

            {/* Chapter Notch Markers */}
            {videoChapters.map((ch, idx) => {
              const startSecs = videoChapters
                .slice(0, idx)
                .reduce((acc, c) => acc + c.duration, 0);
              const leftPercent = (startSecs / totalDuration) * 100;
              return (
                <div
                  key={ch.id}
                  style={{ left: `${leftPercent}%` }}
                  className="absolute top-0 bottom-0 w-0.5 bg-black/60 pointer-events-none"
                  title={ch.title}
                />
              );
            })}
          </div>

          {/* Controls Strip */}
          <div className="flex items-center justify-between text-slate-300">
            {/* Left Controls: Play, Prev, Next, Time */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => goToChapter(Math.max(0, currentChapterIndex - 1))}
                className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                title="Previous Scene"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-transform active:scale-95 shadow-md shadow-cyan-500/30"
                title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button
                onClick={() => goToChapter(Math.min(videoChapters.length - 1, currentChapterIndex + 1))}
                className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                title="Next Scene"
              >
                <SkipForward className="w-4 h-4" />
              </button>

              <button
                onClick={() => goToChapter(0)}
                className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                title="Replay from Beginning"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* Time Display */}
              <div className="text-xs font-mono text-slate-400">
                <span className="text-white font-semibold">{formatTime(elapsedSeconds)}</span>
                <span> / </span>
                <span>{formatTime(totalDuration)}</span>
              </div>
            </div>

            {/* Right Controls: Speed, Audio, Fullscreen */}
            <div className="flex items-center gap-2">
              {/* Playback Speed Selector */}
              <button
                onClick={() => {
                  const speeds = [1, 1.25, 1.5, 2];
                  const nextSpeed = speeds[(speeds.indexOf(playbackSpeed) + 1) % speeds.length];
                  setPlaybackSpeed(nextSpeed);
                }}
                className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-[11px] font-mono font-medium text-slate-300"
                title="Playback Speed"
              >
                {playbackSpeed}x
              </button>

              {/* Sound Synthesizer Toggle */}
              <button
                onClick={() => {
                  setIsMuted(!isMuted);
                  if (isMuted) {
                    playSynthNote(330, 0.4);
                  }
                }}
                className={`p-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                  !isMuted
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                    : 'hover:bg-white/10 text-slate-400'
                }`}
                title={isMuted ? 'Unmute Ambient Sound' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                {!isMuted && (
                  <span className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 bg-purple-400 h-2 animate-pulse" />
                    <span className="w-0.5 bg-purple-400 h-3 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <span className="w-0.5 bg-purple-400 h-1.5 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </span>
                )}
              </button>

              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="p-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                title="Toggle Fullscreen"
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
