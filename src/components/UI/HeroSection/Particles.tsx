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

type Props = { trackMouse?: boolean };

const Particles: React.FC<Props> = ({ trackMouse = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = false;
    let inView = true;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = prefersReducedMotion ? 1 : clamp(window.devicePixelRatio || 1, 1, 1.25);
    let width = 0, height = 0, centerX = 0, centerY = 0;

    const pickCount = () => {
      const area = width * height;
      // higher density so particles are more noticeable (kept sane on mobile)
      const denom = isMobile ? 32000 : 22000;
      const base = Math.floor(area / denom);
      const min = isMobile ? 36 : 70;
      const max = isMobile ? 90 : 140;
      return clamp(base, min, max);
    };

    let particles: Particle[] = [];
    let maxLineDist = prefersReducedMotion ? 0 : (isMobile ? 100 : 140);
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
          r: rand(0.9, 2.4) * (isMobile ? 0.95 : 1),
          hue: rand(175, 250), // cian-violeta
          twinkle: rand(0, Math.PI * 2),
          phase: rand(0, Math.PI * 2),
        } as Particle;
      });

      // keep existing maxLineDist (set from user/device prefs)
    };

    // Optional mouse interaction for parallax
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.has = true;
    };
    const onPointerLeave = () => { mouse.has = false; };

    if (trackMouse && !prefersReducedMotion) {
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerleave", onPointerLeave);
    }
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement || canvas);
    resize();

    const step = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      // Mouse parallax when enabled, otherwise zero influence
      let ax = 0, ay = 0;
      if (trackMouse && mouse.has) {
        const parallaxFactor = isMobile ? 0.0006 : 0.0011;
        ax = (mouse.x - centerX) * parallaxFactor;
        ay = (mouse.y - centerY) * parallaxFactor;
      }

      // Update + draw particles
      for (let p of particles) {
        // Noise-like sway
        p.phase += 0.012; // slightly slower
        const swayX = Math.sin(p.phase * 1.4) * 0.12;
        const swayY = Math.cos(p.phase * 1.1) * 0.10;

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
        p.twinkle += 0.03 + Math.random() * 0.015;
        const tw = (Math.sin(p.twinkle) + 1) * 0.5; // 0..1
        const r = p.r * (0.7 + tw * 0.5);

        // Soft glow dot
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 85%, 70%, ${0.55 + tw * 0.2})`;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 60%, ${0.55})`;
        ctx.shadowBlur = 6 + tw * 8;
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Connect lines for nearby particles
      if (maxLineDist > 0) {
        for (let i = 0; i < particles.length; i++) {
          const a = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.hypot(dx, dy);
            if (dist < maxLineDist) {
              const baseAlpha = isMobile ? 0.35 : 0.5; // make lines a bit more visible
              const alpha = (1 - dist / maxLineDist) * baseAlpha;
              const hue = (a.hue + b.hue) * 0.5;
              ctx.strokeStyle = `hsla(${hue}, 80%, 65%, ${alpha})`;
              ctx.lineWidth = isMobile ? 0.8 : 1.05;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    // pause when tab hidden
    const onVisibility = () => {
      if (document.hidden) stop(); else if (inView) start();
    };
    document.addEventListener('visibilitychange', onVisibility);

    // only run when in viewport
    const io = new IntersectionObserver((entries) => {
      inView = entries.some(e => e.isIntersecting);
      if (inView && !document.hidden) start(); else stop();
    }, { root: null, threshold: 0.05 });
    io.observe(canvas);

    // kick things off if visible
    start();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      if (trackMouse && !prefersReducedMotion) {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerleave", onPointerLeave);
      }
    };
  }, [isMobile, trackMouse]);

  return <ParticlesLayer ref={canvasRef} aria-hidden="true" />;
};

export default Particles;
