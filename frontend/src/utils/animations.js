import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Check if the user has requested reduced motion for accessibility & performance.
 */
export const isReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * 1. Navbar Entrance Animation
 * Runs on initial load with a smooth drop-in and fade.
 */
export const navbarAnimation = (navElement) => {
  if (!navElement || isReducedMotion()) return null;

  return gsap.fromTo(
    navElement,
    { y: -70, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.1,
      ease: 'power3.out',
      delay: 0.1,
    }
  );
};

/**
 * 2. Hero Section Cinematic Entrance & Parallax
 * Staggered text reveal, smooth button ascent, profile 3D card zoom-in, and scroll parallax.
 */
export const heroAnimation = (containerRef, targets = {}) => {
  if (!containerRef?.current || isReducedMotion()) return null;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Status pill entrance
    if (targets.pill) {
      tl.fromTo(
        targets.pill,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.2 }
      );
    }

    // Greeting line
    if (targets.greeting) {
      tl.fromTo(
        targets.greeting,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.7 },
        '-=0.5'
      );
    }

    // Heading staggered lines
    if (targets.heading) {
      tl.fromTo(
        targets.heading,
        { opacity: 0, y: 35, skewY: 1.5 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.9 },
        '-=0.4'
      );
    }

    // Subtitle / Bio
    if (targets.bio) {
      tl.fromTo(
        targets.bio,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      );
    }

    // Action buttons staggered upward float
    if (targets.buttons && targets.buttons.length > 0) {
      tl.fromTo(
        targets.buttons,
        { opacity: 0, y: 25, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08 },
        '-=0.4'
      );
    }

    // Academic credentials tags
    if (targets.tags && targets.tags.length > 0) {
      tl.fromTo(
        targets.tags,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06 },
        '-=0.3'
      );
    }

    // 3D Profile Card & Avatar Entrance
    if (targets.profileCard) {
      tl.fromTo(
        targets.profileCard,
        { opacity: 0, scale: 0.82, rotateY: 15, z: -80 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          z: 0,
          duration: 1.3,
          ease: 'elastic.out(1, 0.75)',
        },
        '-=1.2'
      );
    }

    // Subtle scroll-driven parallax for hero visuals (scrub)
    if (targets.profileCard) {
      gsap.to(targets.profileCard, {
        y: 60,
        scale: 0.95,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }

    // Ambient background lights subtle parallax
    if (targets.glows && targets.glows.length > 0) {
      gsap.to(targets.glows, {
        y: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
      });
    }
  }, containerRef);

  return ctx;
};

/**
 * 3. General Section Header & Element Reveal
 * Viewport entry trigger for badges, titles, and text blocks.
 */
export const sectionReveal = (containerRef, targets = {}) => {
  if (!containerRef?.current || isReducedMotion()) return null;

  const ctx = gsap.context(() => {
    // Header elements
    if (targets.header) {
      gsap.fromTo(
        targets.header,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: targets.header,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Generic child cards / items with stagger
    if (targets.items && targets.items.length > 0) {
      gsap.fromTo(
        targets.items,
        { opacity: 0, y: 45, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, containerRef);

  return ctx;
};

/**
 * 4. Education Journey Timeline Animation
 * Progressive line reveal with scrub, milestone node pops, and card slide-ins.
 */
export const timelineAnimation = (timelineContainerRef, targets = {}) => {
  if (!timelineContainerRef?.current || isReducedMotion()) return null;

  const ctx = gsap.context(() => {
    // Progressive vertical line draw with scrub
    if (targets.line) {
      gsap.fromTo(
        targets.line,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineContainerRef.current,
            start: 'top 75%',
            end: 'bottom 85%',
            scrub: 1,
          },
        }
      );
    }

    // Overview milestone horizontal bar
    if (targets.milestoneBar) {
      gsap.fromTo(
        targets.milestoneBar,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: targets.milestoneBar,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Individual milestone entries: 2020, 2022, 2024, etc.
    if (targets.entries && targets.entries.length > 0) {
      targets.entries.forEach((entry, idx) => {
        if (!entry) return;

        const node = entry.querySelector('.timeline-node');
        const card = entry.querySelector('.timeline-card');
        const year = entry.querySelector('.timeline-year');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: entry,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
          defaults: { ease: 'power3.out' },
        });

        // Node pop
        if (node) {
          tl.fromTo(
            node,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)' }
          );
        }

        // Year badge pop
        if (year) {
          tl.fromTo(
            year,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.4 },
            '-=0.3'
          );
        }

        // Card slide & fade with subtle directional motion
        if (card) {
          const isEven = idx % 2 === 0;
          const xOffset = isEven ? -40 : 40;
          tl.fromTo(
            card,
            { opacity: 0, x: window.innerWidth > 768 ? xOffset : 0, y: 30 },
            { opacity: 1, x: 0, y: 0, duration: 0.8 },
            '-=0.4'
          );
        }
      });
    }
  }, timelineContainerRef);

  return ctx;
};

/**
 * 5. Projects Section Animation
 * Cinematic entrance of project cards (Motor Doctor, Job Portal, Portfolio),
 * image scale effects, and GSAP hover physics.
 */
export const projectAnimation = (projectsContainerRef, targets = {}) => {
  if (!projectsContainerRef?.current || isReducedMotion()) return null;

  const ctx = gsap.context(() => {
    if (targets.cards && targets.cards.length > 0) {
      targets.cards.forEach((card, idx) => {
        if (!card) return;

        const isEven = idx % 2 === 0;
        const imgWrap = card.querySelector('.project-img-wrap');
        const contentWrap = card.querySelector('.project-content-wrap');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
          defaults: { ease: 'power3.out' },
        });

        // Card container entrance
        tl.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9 }
        );

        // Content slide-in
        if (contentWrap) {
          tl.fromTo(
            contentWrap.children,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
            '-=0.6'
          );
        }

        // Image zoom-in reveal
        if (imgWrap) {
          tl.fromTo(
            imgWrap,
            { opacity: 0, scale: 0.94 },
            { opacity: 1, scale: 1, duration: 0.8 },
            '-=0.7'
          );
        }

        // Subtle scrub parallax on project image
        if (imgWrap) {
          gsap.to(imgWrap, {
            y: -25,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          });
        }
      });
    }
  }, projectsContainerRef);

  return ctx;
};

/**
 * 6. Skills Section Animation
 * Staggered cards reveal and individual skill chip sequence.
 */
export const skillsAnimation = (skillsContainerRef, targets = {}) => {
  if (!skillsContainerRef?.current || isReducedMotion()) return null;

  const ctx = gsap.context(() => {
    // Category tabs bar
    if (targets.tabs) {
      gsap.fromTo(
        targets.tabs,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: targets.tabs,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Category boxes
    if (targets.groups && targets.groups.length > 0) {
      targets.groups.forEach((group) => {
        if (!group) return;

        const chips = group.querySelectorAll('.skill-chip');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: group,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
          defaults: { ease: 'power3.out' },
        });

        tl.fromTo(
          group,
          { opacity: 0, y: 40, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 }
        );

        if (chips && chips.length > 0) {
          tl.fromTo(
            chips,
            { opacity: 0, scale: 0.9, y: 15 },
            { opacity: 1, scale: 1, y: 0, duration: 0.45, stagger: 0.05 },
            '-=0.5'
          );
        }
      });
    }
  }, skillsContainerRef);

  return ctx;
};

/**
 * 7. About Me Section Animation
 * Text reveal, portrait image reveal, and stats cards entrance.
 */
export const aboutAnimation = (aboutContainerRef, targets = {}) => {
  if (!aboutContainerRef?.current || isReducedMotion()) return null;

  const ctx = gsap.context(() => {
    // Photo Card entrance + Parallax
    if (targets.photoCard) {
      gsap.fromTo(
        targets.photoCard,
        { opacity: 0, x: -50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: targets.photoCard,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Subtle parallax on scroll
      gsap.to(targets.photoCard, {
        y: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: targets.photoCard,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }

    // Text & Story blocks
    if (targets.storyBlock) {
      gsap.fromTo(
        targets.storyBlock.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: targets.storyBlock,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Academic table / Verification card
    if (targets.verificationCard) {
      gsap.fromTo(
        targets.verificationCard,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: targets.verificationCard,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, aboutContainerRef);

  return ctx;
};

/**
 * 8. Vision / Setup Section Animation
 */
export const visionAnimation = (visionContainerRef, targets = {}) => {
  if (!visionContainerRef?.current || isReducedMotion()) return null;

  const ctx = gsap.context(() => {
    if (targets.cards && targets.cards.length > 0) {
      gsap.fromTo(
        targets.cards,
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: visionContainerRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, visionContainerRef);

  return ctx;
};

/**
 * 9. Contact Section Animation
 */
export const contactAnimation = (contactContainerRef, targets = {}) => {
  if (!contactContainerRef?.current || isReducedMotion()) return null;

  const ctx = gsap.context(() => {
    if (targets.infoCol) {
      gsap.fromTo(
        targets.infoCol,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: targets.infoCol,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (targets.formCol) {
      gsap.fromTo(
        targets.formCol,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: targets.formCol,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, contactContainerRef);

  return ctx;
};

/**
 * Clean up all GSAP ScrollTrigger instances (useful for page transitions or re-renders).
 */
export const refreshScrollTriggers = () => {
  if (typeof window !== 'undefined' && ScrollTrigger) {
    ScrollTrigger.refresh();
  }
};
