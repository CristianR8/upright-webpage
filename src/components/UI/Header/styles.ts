'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  position: sticky;
  top: 0;
  z-index: 1000; /* keep header above content */
  padding: 0.6rem 0; /* reduced header height */
  background-color: #000;
  border-bottom: 0.5px solid #3d3d3d;

  @media (max-width: 768px) {
    padding: 0.5rem 0; /* reduced on mobile as well */
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  img {
    width: 3rem;
    height: auto;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    img {
      width: clamp(1.75rem, 9vw, 2.25rem);
    }
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  position: relative;

  @media (max-width: 768px) {
    display: block;
    padding: 0.25rem;

    div {
      display: none;
    }

    img {
      position: relative;
      z-index: 2;
      object-fit: cover;
      width: clamp(1.5rem, 12vw, 2rem);
      height: auto;
    }

    @media (max-width: 480px) {
      div {
        width: 200px;
        height: 200px;
        border-radius: 16px;
        top: 46px;
      }
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 3.75rem;
  position: relative;
  flex: 1;
  justify-content: center;
  margin-right: 0;

  a {
    color: var(--white);
    font-size: 1.125rem; /* larger nav text */
    font-weight: 500;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 58px;
    flex-direction: column;
    gap: 0.9rem;
    align-items: flex-start;
    right: 12px;
    z-index: 3;
    visibility: hidden;
    opacity: 0;
    transition: all 0.22s cubic-bezier(0.2, 0.9, 0.22, 1);
    transition-delay: 0s;
    background: linear-gradient(180deg, rgba(0,0,0,0.90), rgba(0,0,0,0.86));
    border-radius: 14px;
    padding: 1.1rem 1.25rem;
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 12px 30px rgba(0,0,0,0.45);
    -webkit-backdrop-filter: saturate(120%) blur(8px);
            backdrop-filter: saturate(120%) blur(8px);
    min-width: clamp(220px, 60vw, 280px);

    a {
      position: relative;
      display: block;
      font-size: 1.05rem;
      line-height: 1.3;
      color: var(--white);
      text-decoration: none;
      transition: color 0.2s ease, transform 0.15s ease;
    }

    a::before {
      content: '';
      position: absolute;
      left: -8px;
      top: 50%;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--cyan);
      transform: translateY(-50%) scale(0.6);
      opacity: 0;
      transition: opacity 0.2s ease, transform 0.2s ease;
      pointer-events: none;
    }

    a:hover,
    a:focus-visible { color: #f5f7ff; }
    a:hover::before,
    a:focus-visible::before { opacity: 1; transform: translateY(-50%) scale(1); }

    a + a::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: calc(-0.38rem);
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent);
      opacity: 0.6;
      pointer-events: none;
    }

    &.active {
      opacity: 1;
      visibility: visible;
    }

    @media (max-width: 480px) {
      right: 10px;
      gap: 0.75rem;
      padding: 0.95rem 1.1rem;
      min-width: 210px;
      a { font-size: 1rem; }
    }
  }
`;

export const AbsoluteLinks = styled(Link)`
  position: absolute;
  top: 40px;
  color: var(--white);
  font-size: 1rem;
  font-weight: 400;
`;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  justify-content: flex-end;

  div {
    span {
      color: var(--white);
      font-size: 1rem;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 220px;
    z-index: 3;
    right: 50px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s cubic-bezier(0.2, 0.9, 0.22, 1);
    transition-delay: 0s;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;
