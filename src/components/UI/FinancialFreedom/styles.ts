'use client';
import { styled } from 'styled-components';
import future_banner from '../../../../public/images/future_banner.png';

export const Wrapper = styled.section`
  margin-top: 11.25rem;

  @media (max-width: 768px) {
    margint-top: 6.25rem;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto 8.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 6rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 56rem;
  margin: 0 auto 7.75rem;
  text-align: center;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--white);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 5rem;

    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const BannerCtn = styled.div`
  margin-bottom: 5rem;
  width: 100%;
  position: relative;
  width: 100%;
  height: 38.4375rem;
  overflow: hidden;
  border-radius: 0.75rem;

  img {
    border-radius: 0.75rem;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Edges = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Edge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;

  p {
    max-width: 26rem;
    color: var(--white);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const BriefNote = styled.div`
  position: relative;
  isolation: isolate;
  max-height: 54.75rem;
  padding: 8.25rem 4.5rem;
  background: var(--indigo);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url(${future_banner.src}) center/cover no-repeat;
    opacity: 0.35;
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(14, 1, 66, 0.6);
    z-index: -1;
  }

  p {
    color: var(--white, #070606);
    font-size: 7rem;
    font-weight: 400;
    max-width: 1440px;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    p {
      font-size: 3.75rem;
    }
  }
`;
