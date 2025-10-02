'use client';
import { styled } from 'styled-components';
import hero_background from '../../../../public/images/grid_background.png';
import big_banner from '../../../../public/images/big_banner.png';

export const Wrapper = styled.section`
  position: relative;
  isolation: isolate;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6.5rem 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url(${big_banner.src}) center/cover no-repeat;
    opacity: 0.55;
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: -1;
  }

  @media (max-width: 768px) {
    min-height: 100vh;
    padding: 6rem 0 1.5rem;
  }
`;

export const Inner = styled.div`
  background: url(${hero_background.src}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
  background-position: top center;
  background-size: contain;
  width: 90%;
`;

export const HeroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3.5rem 3rem;
  border-radius: 1.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(
      140deg,
      rgba(14, 1, 66, 0.8) 0%,
      rgba(46, 45, 115, 0.55) 45%,
      rgba(10, 10, 10, 0.55) 100%
    );
  backdrop-filter: blur(20px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);

  @media (max-width: 768px) {
    padding: 2.5rem 1.75rem;
    gap: 1.5rem;
  }
`;

export const Pill = styled.div`
  display: inline-flex;
  padding: 0.5rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 999px;
  background: rgba(58, 193, 192, 0.18);
  border: 1px solid rgba(58, 193, 192, 0.4);
  color: var(--white);
  font-size: 0.875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
  box-shadow: 0 10px 30px rgba(58, 193, 192, 0.25);

  span {
    color: var(--white);
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
  align-items: center;

  .hero-logo {
    width: 22rem;
    height: auto;
  }

  p {
    max-width: 41.75rem;
    color: #bdbdbd;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 auto;
    line-height: 2.125rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 1.5rem;

    .hero-logo {
      width: 14rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const HeroActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;

    a {
      width: 100%;
      text-align: center;
      justify-content: center;
    }
  }
`;

export const SecondaryAction = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: var(--white);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.35s ease;
  background: rgba(0, 0, 0, 0.25);

  &:hover {
    border-color: var(--cyan);
    box-shadow: 0 12px 35px rgba(58, 193, 192, 0.25);
    transform: translateY(-2px);
  }
`;
