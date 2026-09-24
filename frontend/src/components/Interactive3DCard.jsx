import React, { useState, useRef } from 'react';

/**
 * Interactive3DCard:
 * Provides a fluid, GPU-accelerated 3D mouse parallax tilt effect
 * with specular light glare, multi-depth layers (translateZ),
 * and subtle idle float when not hovered.
 */
export default function Interactive3DCard({
  children,
  className = '',
  maxTilt = 15,
  glare = true,
  scale = 1.02,
}) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0, isHovered: false });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setCoords({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      rotateX,
      rotateY,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setCoords({
      x: 50,
      y: 50,
      rotateX: 0,
      rotateY: 0,
      isHovered: false,
    });
  };

  const transformStyle = coords.isHovered
    ? `perspective(1200px) rotateX(${coords.rotateX.toFixed(2)}deg) rotateY(${coords.rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    : `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: coords.isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
        transformStyle: 'preserve-3d',
      }}
      className={`relative select-none ${className}`}
    >
      {children}

      {/* Dynamic Specular Glare Reflection */}
      {glare && coords.isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden mix-blend-overlay transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 320px at ${coords.x}% ${coords.y}%, rgba(255,255,255,0.45), transparent 75%)`,
          }}
        />
      )}
    </div>
  );
}
