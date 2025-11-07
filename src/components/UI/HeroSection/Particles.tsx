"use client";
import React, { useEffect, useRef } from "react";
import { ParticlesLayer } from "./styles";
import { useIsMobile } from "../../../../libs/useIsMobile";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  r: number;
  hue: number;
  twinkle: number;
  phase: number;
};

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = true;
    const dpr = clamp(window.devicePixelRatio || 1, 1, 2);
    let width = 0, height = 0, centerX = 0, centerY = 0;

    const pickCount = () => {
      const area = width * height;
      const base = Math.floor(area / (isMobile ? 30000 : 18000));
      return clamp(base, isMobile ? 40 : 70, isMobile ? 80 : 160);
    };

    let particles: Particle[] = [];
    let maxLineDist = 140; // px (CSS pixels)
    const mouse = { x: 0, y: 0, has: false };

    const resize = () => {
      const { clientWidth, clientHeight } = canvas.parentElement || document.body;
      width = clientWidth;
      height = clientHeight;
      centerX = width / 2;
      centerY = height / 2;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Rebuild particles when size changes significantly
      seedParticles();
    };

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const seedParticles = () => {
      const count = pickCount();
      particles = new Array(count).fill(0).map(() => {
        const speed = rand(0.08, 0.42) * (isMobile ? 0.8 : 1);
        const angle = rand(0, Math.PI * 2);
        const baseVx = Math.cos(angle) * speed;
        const baseVy = Math.sin(angle) * speed * 0.6; // sutil deriva vertical
        return {
          x: rand(0, width),
          y: rand(0, height),
          vx: baseVx,
          vy: baseVy,
          baseVx,
          baseVy,
          r: rand(0.8, 2.2) * (isMobile ? 0.9 : 1),
          hue: rand(175, 250), // cian-violeta
          twinkle: rand(0, Math.PI * 2),
          phase: rand(0, Math.PI * 2),
        } as Particle;
      });

      maxLineDist = isMobile ? 100 : 140;
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.has = true;
    };

    const onPointerLeave = () => { mouse.has = false; };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement || canvas);
    resize();

    const step = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      // Gentle parallax forces around center / mouse
      const parallax = mouse.has ? { x: mouse.x - centerX, y: mouse.y - centerY } : { x: 0, y: 0 };
      const parallaxFactor = isMobile ? 0.0006 : 0.0011;

      // Update + draw particles
      for (let p of particles) {
        // Noise-like sway
        p.phase += 0.015;
        const swayX = Math.sin(p.phase * 1.7) * 0.15;
        const swayY = Math.cos(p.phase * 1.2) * 0.12;

        // Mouse parallax influence
        const ax = parallax.x * parallaxFactor;
        const ay = parallax.y * parallaxFactor;

        p.vx = p.baseVx + swayX + ax;
        p.vy = p.baseVy + swayY + ay;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Twinkle
        p.twinkle += 0.04 + Math.random() * 0.02;
        const tw = (Math.sin(p.twinkle) + 1) * 0.5; // 0..1
        const r = p.r * (0.7 + tw * 0.6);

        // Soft glow dot
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${0.65 + tw * 0.25})`;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 60%, ${0.75})`;
        ctx.shadowBlur = 12 + tw * 16;
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Connect lines for nearby particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxLineDist) {
            const alpha = (1 - dist / maxLineDist) * 0.45;
            // Subtle hue mix across the segment
            const hue = (a.hue + b.hue) * 0.5;
            ctx.strokeStyle = `hsla(${hue}, 85%, 65%, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [isMobile]);

  return <ParticlesLayer ref={canvasRef} aria-hidden="true" />;
};

export default Particles;
