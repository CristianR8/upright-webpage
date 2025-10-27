'use client';
import { styled } from 'styled-components';

const SectionDivider = styled.div`
  position: relative;
  pointer-events: none;

  /* full-bleed estable */
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  height: 36px;
  background: transparent;
  z-index: 2;

  &::after{
    content:"";
    position:absolute;
    left:0; right:0;
    top:50%;
    height:2px;
    transform: translateY(-50%);
    background: linear-gradient(90deg,
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0.95) 12%,
      #ffffff 50%,
      rgba(255,255,255,0.95) 88%,
      rgba(255,255,255,0) 100%);
    box-shadow:
      0 0 16px rgba(255,255,255,0.22),
      0 0 2px rgba(255,255,255,0.9);
  }

  &::before{
    content:"";
    position:absolute;
    left:0; right:0;
    top:50%;
    transform: translateY(-50%);
    height:20px;
    background: radial-gradient(ellipse at center,
      rgba(255,255,255,0.10) 0%,
      rgba(255,255,255,0.05) 40%,
      rgba(255,255,255,0) 70%);
    filter: blur(8px);
  }

  @media (max-width: 768px){
    height:24px;
    &::after{ height:1.5px; }
  }
`;

export default SectionDivider;

/* Fila de ancho completo dentro del grid */
export const FullBleedRow = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  position: relative;
`;