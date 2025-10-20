'use client';
import { styled } from 'styled-components';
import { motion, Variants } from 'framer-motion';

/* ---------- Shell ---------- */
export const Wrapper = styled.section`
  position: relative;
  isolation: isolate;
  background: radial-gradient(1200px 800px at 15% 55%, var(--blue), transparent 50%),
              radial-gradient(900px 700px at 85% 40%, var(--blue), transparent 50%),
              linear-gradient(180deg, #000000b3 0%, var(--Background) 50%);
  color: var(--white);
  padding: clamp(2rem, 5vw, 4rem) 0;
  overflow: hidden;
`;

export const Inner = styled.div`
  width: min(1200px, 92vw);
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: clamp(1rem, 2.5vw, 2rem);
`;

/* ---------- Header copy ---------- */
export const Header = styled.header`
  display: grid;
  gap: clamp(0.5rem, 1.4vw, 1rem);
  justify-items: center;          /* center children */
  text-align: center;             /* center text */

  /* keep a readable width */
  max-width: 75ch;
  margin-inline: auto;

  h1 {
    font-size: clamp(1.9rem, 4.8vw, 3.2rem);
    line-height: 1.06;
    letter-spacing: -0.02em;
    margin: 0;
    color: var(--white);
    text-shadow: 0 4px 18px rgba(0,0,0,0.45);
  }

  p {
    margin: 0;
    color: #d8dbe7;
    max-width: 65ch;
    line-height: 1.6;
  }
`;

export const BriefNote = styled.p`
  margin: 0;
  color: var(--gray);
`;

/* ---------- Banner container ---------- */
export const BannerCtn = styled.div`
  position: relative;
  z-index: 1;                     /* banner layer */
  height: clamp(18rem, 42vw, 28rem);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 35px 70px -30px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06) inset;
  &::after { /* ...keep existing... */ }
`;

/* ---------- Edge cards ---------- */
export const Edges = styled.div`
  position: relative;
  z-index: 2;
  margin: clamp(1rem, 2.5vw, 1.75rem) 0 clamp(1.25rem, 3vw, 2rem);

  display: grid;
  grid-template-columns: 1fr;              
  gap: clamp(0.9rem, 1.8vw, 1.25rem);
  align-items: stretch;                     
  justify-items: stretch;
  grid-auto-rows: 1fr;                       

  @media (min-width: 640px) {               
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {             
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

/* subtle idle float animation */
const floatKey = `
  @keyframes edgeFloat {
    0%   { transform: translateY(0px); }
    50%  { transform: translateY(-6px); }
    100% { transform: translateY(0px); }
  }
`;
export const EdgeBase= styled(motion.article as unknown as 'article')`
  ${floatKey}
  pointer-events: auto;
  background: linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.04) 100%);
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(8px);
  border-radius: 18px;
  padding: clamp(0.9rem, 1.2vw, 1.1rem);
  box-shadow: 0 16px 32px rgba(0,0,0,0.35);
  color: var(--white);
  display: grid;
  gap: 0.5rem;
  transform-origin: center;

  /* idle float stagger by position */
  animation: edgeFloat 8s ease-in-out infinite;
  &:nth-child(2) { animation-delay: .6s; }
  &:nth-child(3) { animation-delay: 1.2s; }
  &:nth-child(4) { animation-delay: 1.8s; }

  /* hover lift + sheen using global cyan */
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 48px rgba(0,0,0,0.45);
    border-color: rgba(58,193,192,0.45);
  }

  h3 {
    margin: 0;
    font-size: clamp(1rem, 1.8vw, 1.1rem);
    letter-spacing: -0.01em;
    font-weight: 700;
    color: var(--white);
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    color: #d8dbe7;
    line-height: 1.55;
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  /* Desktop anchoring: stick cards to banner edges without overlapping text */
  @media (min-width: 1024px) {
    max-width: 24rem;

    &:nth-child(1) {
      justify-self: start;
      align-self: start;
      transform: translate(-6px, -32%);
    }
    &:nth-child(2) {
      justify-self: end;
      align-self: start;
      transform: translate(6px, -24%);
    }
    &:nth-child(3) {
      justify-self: start;
      align-self: end;
      transform: translate(-6px, 24%);
    }
    &:nth-child(4) {
      justify-self: end;
      align-self: end;
      transform: translate(6px, 32%);
    }
  }
`;

/* Title row inside card */
export const Title = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;
  gap: .6rem;

  h3 {
    color: var(--white);
  }
`;
