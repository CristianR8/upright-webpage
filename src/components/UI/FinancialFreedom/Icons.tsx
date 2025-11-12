"use client";
import React from "react";

export const FaMagnifyingGlass: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M416 208c0 114.9-93.1 208-208 208S0 322.9 0 208 93.1 0 208 0s208 93.1 208 208zm-64 0c0-79.5-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144 144-64.5 144-144z"/>
    <path d="M505 457L384 336c-7.5-7.5-19.8-7.5-27.3 0l-18.7 18.7c-7.5 7.5-7.5 19.8 0 27.3l121 121c7.5 7.5 19.8 7.5 27.3 0L505 484.3c7.5-7.5 7.5-19.8 0-27.3z"/>
  </svg>
);

export const FaBullseye: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm0-400c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144S335.4 112 256 112zm0 224c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/>
  </svg>
);

// GiBullseye style: concentric rings with strokes (distinct look)
export const GiBullseye: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="256" cy="256" r="200"/>
    <circle cx="256" cy="256" r="130"/>
    <circle cx="256" cy="256" r="60"/>
    <circle cx="256" cy="256" r="6" fill="currentColor" stroke="none"/>
  </svg>
);

export const TbArrowsSort: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M7 3v14m0 0l-4-4m4 4l4-4"/>
    <path d="M17 21V7m0 0l4 4m-4-4l-4 4"/>
  </svg>
);

export default null;
