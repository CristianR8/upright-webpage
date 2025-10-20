'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const LinkTo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background: #0d0d12;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.4);
  transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.45);
    background: #111118;
  }
`;
