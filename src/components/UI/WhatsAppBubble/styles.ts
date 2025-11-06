"use client";
import { styled } from "styled-components";

export const FloatingButton = styled.a`
  position: fixed;
  right: 18px;
  bottom: 18px;
  width: 56px;
  height: 56px;
  border-radius: 999px;
  background: #25d366;
  color: white;
  display: grid;
  place-items: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  z-index: 1100;

  @media (max-width: 640px) {
    width: 48px;
    height: 48px;
    right: calc(2px + env(safe-area-inset-right));
    bottom: calc(2px + env(safe-area-inset-bottom));
    box-shadow: 0 6px 18px rgba(0,0,0,0.30);
  }
`;
