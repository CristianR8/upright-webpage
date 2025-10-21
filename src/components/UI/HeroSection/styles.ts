'use client';
import { keyframes, styled } from 'styled-components';

/* ---------- Animations ---------- */
const float = keyframes`
  0%   { transform: translate3d(0, 0, 0) rotate(0deg); }
  50%  { transform: translate3d(0, -8px, 0) rotate(-0.4deg); }
  100% { transform: translate3d(0, 0, 0) rotate(0deg); }
`;

const shimmer = keyframes`
  0% { background-position: 0% 50%;}
  100%{ background-position: 100% 50%;}
`;

/* ---------- Wrapper & Background ---------- */
export const Wrapper = styled.section`
  position: relative;
  isolation: isolate;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);

  background:
    radial-gradient(1200px 800px at 15% 15%, #2e2d73, transparent 60%),
    radial-gradient(900px 700px at 85% 30%, #2e2d73, transparent 60%),
    linear-gradient(180deg, #0b1020 80%, #000000ff 100%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/fi%3Elter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E");
    mix-blend-mode: soft-light;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px) 0 0 / 48px 48px,
      linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px) 0 0 / 48px 48px;
    mask-image: radial-gradient(70% 60% at 30% 40%, black 55%, transparent 75%);
    z-index: 0;
  }

  /* Medium screens: create space for absolute logo */
  @media (min-width: 769px) and (max-width: 980px) {
    padding-top: clamp(4rem, 10vw, 6rem);
  }

  @media (max-width: 768px) {
    min-height: 80svh;
    flex-direction: column;
    gap: clamp(2rem, 6vw, 3rem);
    padding: 4.5rem 0 1.5rem; /* ↓ tighter on mobile too */
  }
`;

/* ---------- Layout ---------- */
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: min(1800px, 80vw);
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const HeroContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  gap: clamp(1.5rem, 5vw, 1.5rem);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(1.5rem, 6vw, 2.5rem);
    width: 100%;
    text-align: center;
  }
`;

export const TopCenterLogo = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  pointer-events: none;
  display: grid;
  place-items: center;

  img {
    width: clamp(40rem, 26vw, 30rem);
    height: auto;
  }

  /* Medium screens: slightly smaller to avoid overlap */
  @media (min-width: 769px) and (max-width: 1080px) {
    img {
      width: clamp(24rem, 28vw, 22rem);
    }
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
  

    img {
      width: clamp(24rem, 68vw, 50rem);
      height: auto;
    }
  }
`;

export const TopRightBadge = styled.div`
  position: absolute;
  top: clamp(1.5rem, 4vw, 3rem);
  right: clamp(1.5rem, 4vw, 3rem);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  background: var(--indigo);
  border: 1px solid var(--indigo);
  box-shadow: 0 18px 40px var(--blue);
  backdrop-filter: blur(10px);

  img {
    width: clamp(6rem, 12vw, 5.5rem);
    height: auto;
  }

  @media (min-width: 769px) and (max-width: 1080px) {
    img {
      width: clamp(3rem, 10vw, 4rem);
    }
  }


  @media (max-width: 768px) {
    top: 1.25rem;
    right: 1rem;
    padding: 0.4rem 1rem;

    img {
      width: clamp(3.25rem, 22vw, 4.5rem);
    }
  }
`;

/* ---------- Text Column ---------- */
export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.6rem, 1.3vw, 1.25rem);
  padding-bottom: 0.5rem;
  align-items: flex-start;
  text-align: left;
  max-width: 46rem;

  p {
    max-width: 60ch;
    color: #ffffffff;
    font-size: clamp(0.98rem, 1.2vw, 1.05rem);
    line-height: 1.6;
    margin: 0;
    text-wrap: balance;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  @media (max-width: 980px) {
    align-items: center;
    text-align: center;
    gap: clamp(0.9rem, 4vw, 1.5rem);
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0 clamp(1.5rem, 6vw, 2.5rem);
  }
`;

/* ---------- Actions ---------- */
export const HeroActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 0.65rem;
    align-items: center;

    a {
      width: clamp(12rem, 60vw, 20rem);
      max-width: 100%;
      text-align: center;
      justify-content: center;
    }
  }
`;

export const SecondaryAction = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem 2.2rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  color: #0a0d14;
  background: rgba(255, 255, 255, 0.96);
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
  backdrop-filter: blur(6px);
  will-change: transform;

  &:hover {
    border-color: #fff;
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.22);
  }

  /* @media (max-width: 980px) {
    display: none;
  } */
`;

/* ---------- Headline ---------- */
export const Title = styled.h1`
  margin: 0.2rem 0 0;
  text-align: left;
  font-size: clamp(1.8rem, 4vw, 4rem);
  font-weight: 900;
  line-height: 1.06;
  letter-spacing: -0.025em;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.5);
  max-width: 17ch;

  /* soft underline accent under the line containing Emphasis */
  .accent-underline {
    position: relative;
    display: inline-block;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

export const Emphasis = styled.span`
  background: #3ac1c0;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${shimmer} 6s linear infinite;
  background-size: 200% 100%;

  /* underline glow */
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: -2px;
    right: -2px;
    bottom: -6px;
    height: 10px;
    border-radius: 999px;
    background: radial-gradient(30% 130% at 50% 100%, #3ac1c0, transparent 65%);
    filter: blur(6px);
    pointer-events: none;
  }
`;

/* ---------- Visual Column ---------- */
export const HeroVisual = styled.div`
  place-self: center end;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    filter: blur(42px);
    opacity: 0.55;
    z-index: -1;
  }

  &::before {
    width: 28rem; height: 28rem; border-radius: 10%;
    background: radial-gradient(circle at 30% 30%, rgba(80,200,255,0.45), rgba(0,0,0,0));
    top: -12%; left: -8%;
  }

  &::after {
    width: 22rem; height: 22rem; border-radius: 10%;
    background: radial-gradient(circle at 70% 70%, rgba(120,255,210,0.35), rgba(0,0,0,0));
    bottom: -8%; right: -6%;
  }

  > span {
    display: block !important;
    width: 100% !important;
    max-width: 38rem;
    border-radius: 10%; 
    overflow: hidden;
    border: 1.5px solid rgba(255, 255, 255, 0.18);
    box-shadow:
      0 25px 60px -25px rgba(0, 0, 0, 0.6),
      0 0 0 1px rgba(255,255,255,0.06) inset;
    transform-style: preserve-3d;
    animation: ${float} 8s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  img.hero-image {
    width: 80%;
    height: auto;
    object-fit: cover;
    display: block;
    transform: translateZ(0);
    border-radius: 10%;
  }

  @media (max-width: 980px) {
    display:none;
  }
`;
