'use client';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const Div = styled(motion.button)`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: transparent;
  border: none;
  padding: 0;
  text-align: left;
  font: inherit;
`;

export const Word = styled(motion.span)`
  white-space: nowrap;
  position: relative;
`;

export const Span = styled(motion.span)`
  position: relative;
  display: inline-block;
  white-space: nowrap;
  color: var(--white);
  font-size: 0.95rem;
  font-weight: 500;

  @media (max-width: 768px) {
    color: var(--white);
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
  top: 0;
`;
