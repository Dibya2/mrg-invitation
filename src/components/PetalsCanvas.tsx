import React, { useEffect, useRef } from 'react';

interface PetalsCanvasProps {
  petalType?: 'rose' | 'haldi' | 'mehendi' | 'gold';
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  opacity: number;
  type: 'petal' | 'sparkle';
}

export const PetalsCanvas: React.FC<PetalsCanvasProps> = ({ petalType = 'rose' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const getColors = () => {
      switch (petalType) {
        case 'haldi':
          return ['#F59E0B', '#FBBF24', '#FCD34D', '#D4AF70'];
        case 'mehendi':
          return ['#10B981', '#34D399', '#D4AF70', '#E9DDF0'];
        case 'gold':
          return ['#D4AF70', '#F5E6C8', '#B88E4B', '#FFFFFF'];
        case 'rose':
        default:
          return ['#E9DDF0', '#5A456E', '#D4AF70', '#F472B6', '#FFFFFF'];
      }
    };

    const colors = getColors();
    const particleCount = window.innerWidth < 768 ? 24 : 45; // Performance optimization for mobile Android

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 4,
        speedY: Math.random() * 0.8 + 0.3,
        speedX: Math.random() * 0.6 - 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.3,
        type: Math.random() > 0.3 ? 'petal' : 'sparkle'
      });
    }

    const drawPetal = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      if (p.type === 'petal') {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-p.size, -p.size * 1.5, -p.size * 1.5, p.size, 0, p.size * 1.8);
        ctx.bezierCurveTo(p.size * 1.5, p.size, p.size, -p.size * 1.5, 0, 0);
        ctx.fill();
      } else {
        // Sparkle star
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.01) * p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [petalType]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70"
    />
  );
};
