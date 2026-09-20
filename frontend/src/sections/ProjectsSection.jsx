import React, { useState } from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight, CheckCircle2, Eye, X, Image as ImageIcon } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { projectsData } from '../data/profile';

// Import local images directly for reliable Vite bundling
import motorDoctorCover from '../assets/motor-doctor/Screenshot 2026-09-15 225336.png';
import motorDoctorArch from '../assets/motor-doctor/arch_diagram_motor_doctor.png';
import motorDoctorDfd from '../assets/motor-doctor/dfd_diagram_motor_doctor.png';
import motorDoctorScreen2 from '../assets/motor-doctor/Screenshot 2026-09-15 225408.png';
import jobPortalCover from '../assets/job-portal/job-portal-preview.svg';

const projectImages = {
  'motor-doctor': {
    cover: motorDoctorCover,
    gallery: [motorDoctorCover, motorDoctorScreen2, motorDoctorArch, motorDoctorDfd],
  },
  'job-portal': {
    cover: jobPortalCover,
    gallery: [jobPortalCover],
  },
};

export default function ProjectsSection() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const openGallery = (project, index = 0) => {
    setActiveModalProject(project);
    setActiveGalleryIndex(index);
  };

  const closeModal = () => {
    setActiveModalProject(null);
    setActiveGalleryIndex(0);
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-dark-850/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Featured Work"
          title="Engineered Projects &"
          highlight="Solutions"
          subtitle="Real-world applications solving tangible challenges in automotive assistance and career recruitment, backed by scalable code architectures."
        />

        {/* Project Cards Grid */}
        <div className="space-y-16">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const images = projectImages[project.id] || { cover: project.image, gallery: [] };

            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl border border-white/10 hover:border-cyan-500/30 overflow-hidden transition-all duration-500 group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  
                  {/* Left (or Right) Content Column (6 cols) */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? '' : 'lg:order-2'}`}>
                    
                    {/* Badge & Category */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                        {project.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-cyan-400/90 mt-1 font-mono">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 pt-1">
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/5 text-slate-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3.5 pt-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                      )}

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target={project.liveDemoUrl.startsWith('http') ? '_blank' : '_self'}
                          rel="noreferrer"
                          className="btn-primary px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2"
                        >
                          <span>Live Showcase</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                      {images.gallery.length > 1 && (
                        <button
                          onClick={() => openGallery(project, 0)}
                          className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium glass-pill text-cyan-300 hover:text-white flex items-center gap-2"
                        >
                          <ImageIcon className="w-4 h-4" />
                          <span>Gallery ({images.gallery.length})</span>
                        </button>
                      )}
                    </div>

                  </div>

                  {/* Image & Interactive Mockup Column (6 cols) */}
                  <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-1'}`}>
                    <div
                      onClick={() => openGallery(project, 0)}
                      className="relative rounded-2xl overflow-hidden bg-dark-900 border border-white/10 group/img cursor-pointer shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                    >
                      {/* Browser Mockup Top Bar */}
                      <div className="px-4 py-3 bg-dark-850 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="text-[11px] font-mono text-slate-500 truncate max-w-[200px]">
                          {project.id === 'motor-doctor' ? 'motor-doctor.live' : 'jobsphere.dev'}
                        </div>
                        <Eye className="w-3.5 h-3.5 text-slate-500 group-hover/img:text-cyan-400 transition-colors" />
                      </div>

                      {/* Cover Image Container */}
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img
                          src={images.cover}
                          alt={`${project.title} Preview`}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-dark-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                          <span className="px-4 py-2 rounded-xl bg-cyan-500 text-dark-900 font-bold text-xs shadow-lg flex items-center gap-1.5">
                            <Eye className="w-3.5 h-3.5" />
                            Click to View Gallery & Architecture
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gallery / Screenshot Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-5xl w-full glass-card p-6 rounded-3xl border border-white/20 max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {activeModalProject.title} — Assets & Architecture
                </h3>
                <p className="text-xs text-cyan-400 font-mono mt-0.5">
                  Screenshot {activeGalleryIndex + 1} of{' '}
                  {projectImages[activeModalProject.id]?.gallery.length || 1}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Preview Image */}
            <div className="my-4 flex-1 overflow-hidden rounded-xl bg-black/40 border border-white/10 flex items-center justify-center max-h-[60vh]">
              <img
                src={projectImages[activeModalProject.id]?.gallery[activeGalleryIndex]}
                alt="Preview"
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-3 overflow-x-auto py-2">
              {projectImages[activeModalProject.id]?.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveGalleryIndex(i)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                    activeGalleryIndex === i
                      ? 'border-cyan-400 shadow-[0_0_12px_rgba(0,242,254,0.6)]'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
