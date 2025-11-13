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
  /* smoother vertical blend without harsh plateaus */
  background: linear-gradient(
    180deg,
    var(--blue) 0%,
    var(--Background) 100%
  );

  /* subtle grid overlay across the whole section */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px) 0 0 / 48px 48px,
      linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px) 0 0 / 48px 48px;
    mask-image: none;
    pointer-events: none;
    z-index: 0;
  }

  
  /* Desktop: align and size like FinancialFreedom */
  @media (min-width: 769px) {
    /* approximate FinancialFreedom banner height */
    --ff-height: clamp(18rem, 42vw, 28rem);
    /* room for heading + spacing */
    min-height: calc(var(--ff-height) + clamp(4rem, 6vw, 6rem));
    display: grid;
    align-items: center;
  }
  
  /* match Message/Hero height on medium+ screens only */
  @media (min-width: 769px) {
    min-height: 90svh;
  }

  @media (max-width: 768px){
     background: linear-gradient(
    180deg,
    var(--blue) 0%,
    var(--Background) 100%
  );
  min-height: 60svh;
  display: grid;
  align-items: center;
  }

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
  z-index: 1; /* keep content above the grid overlay */
  display: grid;
  gap: clamp(1.25rem, 3vw, 2rem);
  align-items: center;
  margin: 0 auto;
  max-width: 1400px;
  width: min(96vw, 1400px);

  @media (min-width: 769px) {
    /* let the carousel occupy the vertical space and center */
    min-height: var(--ff-height);
    grid-template-rows: auto 1fr;
    align-content: center;
  }
`;

export const Heading = styled.header`
  text-align: center;
  display: grid;
  gap: 0.5rem;

  h2 {
    color: var(--white);
    /* base (mobile) size */
    font-size: clamp(1.8rem, 4vw, 2.4rem);
    font-weight: 800;
    color: var(--white);
    letter-spacing: -0.02em;
    text-shadow: 0 8px 32px var(--cyan);
    position: relative;
    display: inline-block;
    margin-inline: auto;
    text-transform: uppercase;
    opacity: 0.9;
    margin: 0; 

    /* larger only on md+ */
    @media (min-width: 769px) {
      font-size: clamp(2.4rem, 5vw, 3.2rem);
    }

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
  width: 100%;
  display: block;
  overflow: hidden;
  /* spacing token shared between items and seam */
  --ally-gap: clamp(2rem, 2vw, 1.5rem);

  @media (min-width: 769px) {
    /* match FinancialFreedom banner height and center row */
    height: var(--ff-height);
    display: grid;
    place-items: center;
  }

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

  @media (min-width: 769px) {
    height: 100%;
  }
`;

export const AllyItem = styled.div`
  position: relative;
  width: clamp(220px, 26vw, 380px);
  height: clamp(120px, 24vw, 310px);
  flex: 0 0 auto;
  display: grid;
  place-items: center;

  border-radius: 8px;
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

  @media (max-width: 600px) {
    width: clamp(180px, 22vw, 300px);
    height: clamp(110px, 40vw, 350px);
    img {
      filter: none !important;
    }
  }
`;
