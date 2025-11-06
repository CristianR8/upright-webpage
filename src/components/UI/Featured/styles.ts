// styles.ts
"use client";
import { styled, keyframes } from "styled-components";

const underlineSlide = keyframes`
  0% { transform: scaleX(0); transform-origin: left; }
  100% { transform: scaleX(1); transform-origin: left; }
`;

/* ---------- Layout ---------- */
export const Wrapper = styled.section`
  position: relative;
  padding: 1.5rem;
  background: var(--white);
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;

  &::before {
    content: "";
    position: absolute;
    inset: -10% -10% auto -10%;
    height: 45%;
    filter: blur(32px);
    pointer-events: none;
  }
`;

export const Inner = styled.div`
  position: relative;
  display: grid;
  gap: clamp(1.25rem, 3vw, 2rem);
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  width: min(92vw, 1200px);
  padding: 0;
`;

export const Heading = styled.header`
  text-align: center;
  display: grid;
  gap: 0.5rem;

  h2 {
    color: var(--Background);
    font-size: clamp(1.8rem, 4vw, 2.4rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    text-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
    position: relative;
    display: inline-block;
    margin-inline: auto;
    text-transform: uppercase;
    opacity: 0.9;
    margin: 0; /* avoid extra top/bottom margin */

    /* subrayado cian animado */
    &::after {
      content: "";
      position: absolute;
      left: 10%;
      right: 10%;
      bottom: -0.5rem;
      height: 3px;
      border-radius: 3px;
      background: linear-gradient(90deg, transparent, var(--cyan), transparent);
      transform: scaleX(0);
      animation: ${underlineSlide} 900ms cubic-bezier(0.2, 0.7, 0, 1) forwards
        180ms;
    }
  }
`;

/* ---------- Carrusel ---------- */
export const ParallaxWrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  display: block;
  overflow: hidden;
  /* spacing token shared between items and seam */
  --ally-gap: clamp(0.6rem, 1.4vw, 1rem);


  /* máscara lateral para fade elegante */
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );


  /* remover separación extra entre repeticiones del carrusel */
  & .parallax .scroller span {
    margin-right: var(--ally-gap) !important;
  }
`;

export const CarouselRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--ally-gap);
  padding: 0.5rem 0;
`;

export const AllyItem = styled.div`
  position: relative;
  width: clamp(180px, 22vw, 300px);
  height: clamp(80px, 20vw, 300px);
  flex: 0 0 auto;
  display: grid;
  place-items: center;

  border-radius: 16px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* contain → cover para que ocupe todo el espacio */
    border-radius: inherit;
    background-color: #ffffff; /* evita bordes duros en logos con fondo transparente */
    transition: filter 0.35s ease, transform 0.35s ease;
    filter: grayscale(1) opacity(0.85);
  }
  &:hover img {
    filter: grayscale(0) opacity(1);
  }

  @media (max-width: 768px) {
  width: clamp(180px, 22vw, 300px);
  height: clamp(100px, 30vw, 300px);
    img {
      filter: none !important;
    }
  }
`;
