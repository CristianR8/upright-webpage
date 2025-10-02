'use client';
import { styled } from 'styled-components';
import type { StaticImageData } from 'next/image';
import grid_background from '../../../../public/images/offer_card_grid_1.png';

export const Wrapper = styled.section``;

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
  z-index: 1;
  background: rgba(10, 10, 10, 0.65);
  backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 255, 255, 0.12);

  h2 {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.6rem;
  }

  p {
    color: var(--white);
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.45rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Offers = styled.div`
  display: flex;
  align-items: stretch;
  gap: 2rem;
  justify-content: center;

  &:not(:first-child) {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;

export const OfferCard = styled.div<{ $bg: StaticImageData }>`
  overflow: hidden;
  min-height: 23rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  position: relative;
  background: ${({ $bg }) =>
    `linear-gradient(180deg, rgba(10, 10, 10, 0.25) 0%, rgba(10, 10, 10, 0.9) 100%), url(${$bg.src}) center/cover no-repeat`};

  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url(${grid_background.src}) center/cover no-repeat;
    mix-blend-mode: screen;
    opacity: 0.3;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 60px rgba(58, 193, 192, 0.35);

    &::before {
      opacity: 0.6;
    }

    ${TextCtn} {
      background: rgba(10, 10, 10, 0.8);
      border-top-color: rgba(58, 193, 192, 0.45);
    }
  }

  @media (max-width: 768px) {
    min-height: 21rem;
  }
`;
