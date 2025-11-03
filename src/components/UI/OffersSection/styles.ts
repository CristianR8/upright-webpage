'use client';
import Image from 'next/image';
import { styled } from 'styled-components';
import grid_background from '../../../../public/images/offer_card_grid_1.png';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const popIn = keyframes`
  from { transform: translate(-50%, -48%) scale(0.96); opacity: 0; }
  to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
`;

export const Wrapper = styled.section`
  position: relative;
  background:
    radial-gradient(1200px 800px at 15% 85%, var(--blue), transparent 75%),
    radial-gradient(900px 700px at 85% 40%, var(--blue), transparent 80%),
    linear-gradient(180deg, var(--Background) 0%, var(--Background) 95%);
  color: var(--white);
  overflow: hidden;
  padding-bottom: 6rem;
`;

export const Inner = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 12.38rem auto 0;
  padding: 0 0.75rem; /* outer gutter equals cards' gap */

  @media (max-width: 768px) {
    margin-top: 6.44rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 6.75rem;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: #989898;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const ButtonsRow = styled.div`
  position: absolute;
  left: 50%;
  top: 34%; 
  transform: translate(-50%, -50%);
  display: flex;
  gap: 0.5rem;
  z-index: 4;

  @media (max-width: 768px) {
    top: 36%;
    
  }
`;

export const ActionButton = styled.button<{ $variant: 'indigo' | 'gray' }>`
  appearance: none;
  border: ${({ $variant }) => ($variant === 'gray' ? '1px solid var(--Background)' : 'none')};
  cursor: pointer;
  padding: 0.8rem 1.25rem; 
  border-radius: 999px;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  font-family: inherit; /* match site font */
  transition: transform 0.15s ease, box-shadow 0.2s ease, opacity 0.2s ease;

  color: ${({ $variant }) => ($variant === 'indigo' ? 'var(--white)' : 'var(--blue)')};
  background: ${({ $variant }) => ($variant === 'indigo' ? 'var(--blue)' : 'var(--gray)')};
  box-shadow: 0 10px 22px rgba(0,0,0,0.35);

  &:hover { transform: translateY(-1px); opacity: 0.95; }
  &:active { transform: translateY(0); opacity: 0.9; }
  &:focus-visible { outline: 2px solid rgba(58,193,192,0.6); outline-offset: 2px; }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.6rem 1rem;
  }
`;

export const Offers = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  /* Minimal gutter between cards */
  gap: 0.75rem;

  &:not(:first-child) {
    /* Match vertical gutter between rows */
    margin-top: 0.75rem;
  }

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const OfferCard = styled.div`
  overflow: hidden;
  min-height: 26rem;
  border-radius: 0; /* remove rounded corners */
  border: 1px solid rgba(58, 193, 192, 0.18);
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  position: relative;
  background: linear-gradient(
      180deg,
      rgba(46, 45, 115, 0.35) 0%,
      rgba(14, 1, 66, 0.6) 45%,
      rgba(10, 10, 10, 0.92) 100%
    );
  cursor: default; /* no longer clickable */
  transition: none; /* remove hover transition */

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    mix-blend-mode: screen;
    opacity: 0.28;
    z-index: 2;
    transition: opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }

  /* disable hover/active effects */
  &:hover { transform: none; box-shadow: none; border-color: rgba(58, 193, 192, 0.18); }
  &:active { transform: none; }

  &:focus-visible {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    min-height: 21rem;
  }
`;

export const CardImage = styled(Image)`
  display: block;
  height: auto;
  width: auto;
`;

/* ---------- Modal for Offer details ---------- */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background:
    radial-gradient(120% 140% at 10% 20%, rgba(58,193,192,0.10), transparent 45%),
    radial-gradient(120% 140% at 90% 80%, rgba(90,140,255,0.10), transparent 40%),
    rgba(5, 9, 18, 0.62);
  backdrop-filter: blur(3px);
  z-index: 9999;
  animation: ${fadeIn} 160ms ease-out;
  cursor: pointer;
`;

export const ModalCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(880px, 92vw);
  max-height: 80vh;
  overflow: auto;
  padding: 2rem clamp(1.25rem, 3vw, 2rem);
  background:
    radial-gradient(120% 160% at -10% -20%, rgba(58,193,192,0.12), transparent 35%),
    radial-gradient(120% 160% at 120% 120%, rgba(90,140,255,0.12), transparent 35%),
    linear-gradient(180deg, rgba(18,20,34,0.95) 0%, rgba(12,14,24,0.96) 100%);
  border-radius: 16px;
  border: 1px solid rgba(58, 193, 192, 0.28);
  box-shadow:
    0 40px 100px rgba(0,0,0,0.55),
    0 0 0 1px rgba(255,255,255,0.04) inset;
  z-index: 10000;
  animation: ${popIn} 160ms ease-out;
  color: #f2f2f2;
  cursor: pointer;
  position: fixed;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, rgba(58,193,192,0.65), rgba(90,140,255,0.45), rgba(255,255,255,0.12));
    -webkit-mask: 
      linear-gradient(#000 0 0) content-box, 
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    pointer-events: none;
    opacity: 0.8;
    z-index: 3; /* keep border sheen above content */
  }

  /* Dark overlay above background image for readability */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      linear-gradient(180deg, rgba(8, 10, 18, 0.60), rgba(8,10,18,0.58));
    z-index: 1;
    pointer-events: none;
  }

  /* background image inside the card */
  > .modal-bg {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
    object-position: 50% 40%; /* move visual focus slightly upward */
    border-radius: inherit;
    z-index: 0;
    filter: saturate(0.9) brightness(0.9);
    opacity: 0.28; /* subtle to prioritize text */
    pointer-events: none;
  }

  /* ensure main content sits above overlays */
  > .modal-content {
    position: relative;
    z-index: 2;
  }

  h3 {
    margin: 0 0 0.75rem 0;
    font-size: clamp(1.35rem, 2.4vw, 1.7rem);
    letter-spacing: -0.01em;
    font-weight: 700;
  }
  h4 {
    margin: 1rem 0 0.5rem;
    font-size: 1.05rem;
    color: #bfe9e8;
    letter-spacing: 0.02em;
  }
  p { margin: 0.5rem 0 1rem; line-height: 1.65; color: #e8f6f6; }
  ul { margin: 0.5rem 0 0; padding-left: 1.2rem; }
  li { margin: 0.4rem 0; }

  /* nice-looking scroll */
  &::-webkit-scrollbar { width: 10px; }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, rgba(58,193,192,0.6), rgba(90,140,255,0.5));
    border-radius: 999px;
  }
  &::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 999px; }

  @media (max-width: 768px) {
    border-radius: 12px;
    max-height: 82vh;
  }
`;
