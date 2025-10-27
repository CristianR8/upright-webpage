'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
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
      width: 1rem;
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
      position: absolute;
      background: #000;
      width: '250px';
      height: '300px';
      border-radius: 25px;
      z-index: 1;
      top: 50px;
    }

    img {
      position: relative;
      z-index: 2;
      object-fit: cover;
      width: clamp(1.5rem, 12vw, 2rem);
      height: auto;
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
    top: 60px;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    right: 120px;
    z-index: 3;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-delay: 0.5s;

    &.active {
      opacity: 1;
      visibility: visible;
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
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-delay: 0.5s;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;
