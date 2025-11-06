'use client';
import { keyframes, styled } from 'styled-components';

/* Subtle float for decor (slightly intensified). 
   Include translateX(var(--tx)) so we can center elements on mobile
   without losing the float animation on Y. */
const float = keyframes`
  0% { transform: translateX(var(--tx, 0)) translateY(0); }
  50% { transform: translateX(var(--tx, 0)) translateY(-10px); }
  100% { transform: translateX(var(--tx, 0)) translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const popIn = keyframes`
  from { transform: translateY(16px) scale(0.96); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
`;

export const Wrapper = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  text-align: center;
  display: grid;
  align-items: center; /* center vertically */
  justify-items: stretch; /* keep full width */
  grid-template-columns: 1fr; /* avoid shrink-to-fit */
  padding: clamp(3.5rem, 10vw, 6.5rem) 1rem clamp(5rem, 12vw, 7.5rem);
  min-height: 72svh;
  color: var(--white);

  /* Match HeroSection background */
  background:
    radial-gradient(1200px 800px at 15% 75%, #2e2d73, transparent 60%),
    radial-gradient(900px 700px at 85% 20%, #2e2d73, transparent 60%),
    linear-gradient(180deg, #0b1020 80%, #000 100%);

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

  .hero-container {
    position: relative;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    z-index: 1; /* keep above background decorations */
  }

  /* Text: inherit site font, keep above decor */
  .subtitle, .title, .cta {
    position: relative;
    z-index: 5; /* keep text above any decor */
    font-family: inherit;
  }

  .subtitle {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .title {
    font-size: clamp(2.1rem, 5.4vw, 3.9rem);
    line-height: 1.08;
    font-weight: 900;
    color: var(--white);
    max-width: 18ch;
    margin: 0 auto 2rem;
    text-shadow: 0 4px 18px rgba(0,0,0,0.45);
  }

  .cta {
    appearance: none;
    border: none;
    cursor: pointer;
    padding: 0.8rem 1.25rem;
    border-radius: 999px;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    color: var(--white);
    background: var(--blue);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);
    transition: transform 0.15s ease, box-shadow 0.2s ease, opacity 0.2s ease;
    &:hover { transform: translateY(-1px); opacity: 0.95; }
    &:active { transform: translateY(0); opacity: 0.9; }
    &:focus-visible { outline: 2px solid rgba(58,193,192,0.6); outline-offset: 2px; }

    @media (max-width: 768px) {
      font-size: 0.9rem; /* slightly larger on small screens */
      padding: 0.75rem 1.25rem;
    }
  }

  /* Decorative characters — smaller and out of the text area */
  .phone, .bubble, .letter, .chips { z-index: 1; }

  .phone {
    position: absolute;
    left: -2%;
    bottom: 6%;
    width: clamp(120px, 20vw, 200px); /* reduced size and pushed out */
    animation: ${float} 7s ease-in-out infinite;
    pointer-events: none;
  }

  .bubble {
    position: absolute;
    right: -10%;
    top: 8%;
    width: clamp(140px, 16vw, 240px); /* reduced size and pushed out */
    animation: ${float} 8s ease-in-out infinite;
    pointer-events: none;
  }

  .letter {
    position: absolute;
    right: 4%;
    bottom: 2%;
    width: clamp(100px, 10vw, 150px); /* reduced size */
    animation: ${float} 6s ease-in-out infinite;
    pointer-events: none;
  }

  /* Floating chips positioned outside the headline area */
  .chips { position: absolute; inset: 0; pointer-events: none; }

  .chip {
    position: absolute;
    width: clamp(35px, 4vw, 58px);
    height: clamp(35px, 4vw, 58px);
    border-radius: 50%;
    background: #f5f5f5;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    animation: ${float} 5.5s ease-in-out infinite;
    z-index: 1; /* behind text (text z-index is 5) */
  }

  .chip-gmail { top: 12%; left: 12%; animation-delay: 0s; }
  .chip-instagram { bottom: 1%; right: 15%; animation-delay: 0.3s; }
  .chip-telegram { bottom: 5%; right: 1%; background: #2AABEE; animation-delay: 0.9s; }

  /* Responsive tweaks */
  @media (max-width: 900px) {
    .phone { left: 0%; bottom: 15%; width: clamp(110px, 26vw, 160px); }
    .bubble { right: 0%; top: 24%; width: clamp(120px, 24vw, 180px); }
    .letter { right: 4%; bottom: 1%; width: clamp(90px, 18vw, 120px); }
    .chip { opacity: 0.9; }
  }

  /* Smartphone layout: stack decor above and below text */
  @media (max-width: 768px) {
    /* override grid centering on wrapper */
    display: block; /* stop using grid on mobile */

    /* center only the in-flow text (subtitle, title, cta) */
    .hero-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; /* vertical centering for text only */
      min-height: 60svh;
      padding-top: 0;
      padding-bottom: 0;
    }


    /* Hide bubble on smartphones */
    .bubble { display: none; }

    /* Elements below text/CTA */
    .phone {
      left: 50%;
      bottom: -4%;
      --tx: -50%;
      width: clamp(140px, 44vw, 180px);
    }

    .letter {
      left: 50%;
      right: auto;
      top: -1%;
      bottom: auto;
      --tx: -50%;
      width: clamp(100px, 42vw, 160px);
    }

    /* Reposition chips around center (top and bottom clusters) */
    .chip-gmail {
      top: 1%;
      left: 90%;
      --tx: -120%;
      width: clamp(55px, 5vw, 78px);
      height: clamp(55px, 5vw, 78px);
    }
    .chip-instagram {
      top: 17%;
      left: 20%;
      --tx: -10%;
      width: clamp(55px, 5vw, 78px);
      height: clamp(55px, 5vw, 78px);
    }
    .chip-telegram {
      top: 14%;
      left: 58%;
      --tx: 70%;
      width: clamp(55px, 5vw, 78px);
      height: clamp(55px, 5vw, 78px);
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background:
    radial-gradient(120% 140% at 10% 20%, rgba(58,193,192,0.15), transparent 45%),
    radial-gradient(120% 140% at 90% 80%, rgba(90,140,255,0.15), transparent 40%),
    rgba(5, 9, 18, 0.75);
  backdrop-filter: blur(4px);
  z-index: 2000;
  display: grid;
  place-items: center;
  padding: clamp(1rem, 4vw, 2rem);
  animation: ${fadeIn} 160ms ease-out;
`;

export const ModalCard = styled.div`
  position: relative;
  width: min(960px, 92vw);
  border-radius: 20px;
  border: 1px solid rgba(90, 140, 255, 0.35);
  background:
    radial-gradient(120% 160% at -10% -20%, rgba(58,193,192,0.12), transparent 35%),
    radial-gradient(120% 160% at 120% 120%, rgba(90,140,255,0.12), transparent 35%),
    #070b16; /* solid background without transparency */
  box-shadow:
    0 40px 80px rgba(0,0,0,0.55),
    0 0 0 1px rgba(255,255,255,0.04) inset;
  padding: clamp(1.25rem, 3vw, 2.25rem);
  display: grid;
  gap: clamp(1.25rem, 3vw, 2rem);
  overflow: hidden;
  color: #eff6ff;
  animation: ${popIn} 160ms ease-out;

  .modal-image {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 45px rgba(0,0,0,0.45);
  }

  @media (max-width: 768px) {
    border-radius: 16px;
    padding: 1.25rem;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  h3 {
    margin: 0;
    font-size: clamp(1.4rem, 2.6vw, 1.9rem);
  }

  p {
    margin: 0;
    line-height: 1.6;
    color: rgba(239, 246, 255, 0.92);
  }

  ul {
    margin: 0;
    padding-left: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  li {
    line-height: 1.5;
  }

  .smallprint {
    font-size: 0.9rem;
    color: rgba(239, 246, 255, 0.7);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(15, 20, 35, 0.65);
  color: var(--white);
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.45);
  transition: opacity 0.2s ease;

  &:hover { opacity: 0.85; }
  &:focus-visible { outline: 2px solid rgba(90,140,255,0.8); outline-offset: 3px; }
`;

export const ModalCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem 1.9rem;
  border-radius: 999px;
  background: var(--blue);
  color: var(--white);
  font-weight: 600;
  letter-spacing: 0.01em;
  text-decoration: none;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
  transition: transform 0.15s ease, opacity 0.2s ease;

  &:hover { transform: translateY(-1px); opacity: 0.95; }
  &:active { transform: translateY(0); opacity: 0.9; }
  &:focus-visible { outline: 2px solid rgba(58,193,192,0.6); outline-offset: 2px; }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    padding: 1rem 2.25rem; /* slightly larger on small screens */
  }
`;
