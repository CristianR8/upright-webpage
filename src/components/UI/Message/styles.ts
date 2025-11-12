'use client';
import { keyframes, styled } from 'styled-components';

/* ---------- Animations ---------- */
const shimmer = keyframes`
  0% { background-position: 0% 50%;}
  100%{ background-position: 100% 50%;}
`;

/* ---------- Wrapper & Background ---------- */
export const Wrapper = styled.section`
  position: relative;
  isolation: isolate;
  min-height: 100svh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  /* smoother cyan fade into background */
  background:
    linear-gradient(
      180deg,
      var(--cyan) 0%,
      rgba(58, 193, 192, 0.55) 28%,
      rgba(58, 193, 192, 0.30) 50%,
      rgba(58, 193, 192, 0.14) 70%,
      rgba(58, 193, 192, 0.06) 85%,
      var(--Background) 100%
    ),
    var(--Background);
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

  @media (min-width: 769px) and (max-width: 980px) {
    padding-top: clamp(4rem, 10vw, 6rem);
    background:
  }

  @media (max-width: 768px) {
    min-height: 80svh;
    flex-direction: column;
    gap: clamp(2rem, 6vw, 3rem);
    padding: 4.5rem 0 1.5rem;
    background:
    radial-gradient(450px 450px at 85% 85%, rgba(58, 193, 192, 0.45), transparent 62%),
    radial-gradient(500px 500px at 15% 20%, rgba(58, 193, 192, 0.45), transparent 62%),
    linear-gradient(180deg, var(--Background) 60%, var(--Background) 100%);

  }
`;

/* ---------- Layout ---------- */
export const Inner = styled.div`
  display: flex;
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
  justify-items: center;
  gap: clamp(1.5rem, 5vw, 1.5rem);

  @media (max-width: 980px) { grid-template-columns: 1fr; }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(1.5rem, 6vw, 2.5rem);
    width: 100%;
    text-align: center;
  }
`;

/* ---------- Text Column ---------- */
export const HeroTextContainer = styled.div`
  overflow: visible;
  display: flex;
  flex-direction: column;
  gap: clamp(0.6rem, 1.3vw, 1.25rem);
  padding-bottom: 0.5rem;
  align-items: center;
  text-align: center;
  grid-column: 1 / -1;
  justify-self: center;
  max-width: 46rem;

  p {
    max-width: 60ch;
    color: #fff;
    font-size: clamp(0.98rem, 1.2vw, 1.05rem);
    line-height: 1.6;
    margin: 0;
    text-wrap: balance;
    text-shadow: 0 2px 8px rgba(0,0,0,0.35);
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
  justify-content: center;
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
    box-shadow: 0 14px 32px rgba(0,0,0,0.25);
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 8px 18px rgba(0,0,0,0.22);
  }
`;

/* ---------- Headline ---------- */
export const Title = styled.h1`
  margin: 0.2rem 0 0;
  text-align: center;
  font-size: clamp(1.9rem, 4vw, 4.2rem);
  font-weight: 900;
  line-height: 1.06;
  letter-spacing: -0.03em;
  text-shadow: 0 4px 18px rgba(0,0,0,0.55);
  max-width: 18ch;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

export const Emphasis = styled.span`
  background: var(--white);
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${shimmer} 6s linear infinite;
  background-size: 200% 100%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: -2px; right: -2px; bottom: -7px;
    height: 9px;
    border-radius: 999px;
    background: radial-gradient(32% 160% at 50% 100%, var(--white), transparent 70%);
    filter: blur(7px);
    pointer-events: none;
  }
`;
