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
  padding-bottom: 20rem;
`;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 12.38rem auto 0;

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

export const TextCtn = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: auto;
  position: relative;
  z-index: 3;
  background: rgba(14, 1, 66, 0.72);
  backdrop-filter: blur(12px);
  border-top: 1px solid rgba(58, 193, 192, 0.25);

  /* hidden by default (desktop) */
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.4s ease;

  h2 {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.6rem;
    color: var(--white);
  }

  p {
    color: rgba(242, 242, 242, 0.88);
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.45rem;
  }

  @media (max-width: 768px) {
    /* always visible on mobile */
    opacity: 1;
    transform: none;
    padding: 1.5rem;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Offers = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 2rem;

  &:not(:first-child) {
    margin-top: 2rem;
  }

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const OfferCard = styled.div`
  overflow: hidden;
  min-height: 23rem;
  border-radius: 0; /* remove rounded corners */
  border: 1px solid rgba(58, 193, 192, 0.18);
  box-shadow:
    0 18px 45px rgba(14, 1, 66, 0.45),
    0 0 0 1px rgba(58, 193, 192, 0.05) inset;
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
  cursor: pointer;
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.25s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      210deg,
      rgba(58, 193, 192, 0.22) 0%,
      rgba(46, 45, 115, 0.4) 40%,
      rgba(14, 1, 66, 0.75) 80%,
      rgba(10, 10, 10, 0.95) 100%
    );
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(65% 65% at 80% 20%, rgba(58, 193, 192, 0.35), transparent 70%),
      url(${grid_background.src}) center/cover no-repeat;
    mix-blend-mode: screen;
    opacity: 0.28;
    z-index: 2;
    transition: opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }

  /* hover reveal */
  &:hover {
    transform: translateY(-10px);
    box-shadow:
      0 30px 70px rgba(9, 188, 180, 0.35),
      0 0 0 1px rgba(58, 193, 192, 0.3) inset;
    border-color: rgba(58, 193, 192, 0.45);

    &::after {
      opacity: 0.55;
    }

    ${TextCtn} {
      opacity: 1;
      transform: translateY(0);
      background: rgba(14, 1, 66, 0.85);
      border-top-color: rgba(58, 193, 192, 0.6);
    }
  }

  &:active {
    transform: translateY(-6px) scale(0.995);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(58, 193, 192, 0.55),
      0 18px 45px rgba(14, 1, 66, 0.45),
      0 0 0 1px rgba(58, 193, 192, 0.2) inset;
  }

  @media (max-width: 768px) {
    min-height: 21rem;
  }
`;

export const CardImage = styled(Image)`
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  z-index: 0;
`;

export const PartnerBadge = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  margin: 8rem auto;
  border-radius: 5%;
  background: rgba(14, 1, 66, 0.75);
  border: 1px solid var(--indigo);
  backdrop-filter: blur(12px);
  box-shadow: 0 18px 40px var(--blue);

  img {
    width: 240px;
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      width: 150px;
    }
  }
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
