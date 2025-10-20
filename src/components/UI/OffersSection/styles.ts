'use client';
import Image from 'next/image';
import { styled } from 'styled-components';
import grid_background from '../../../../public/images/offer_card_grid_1.png';

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
  border-radius: 0.75rem;
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
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1);

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
