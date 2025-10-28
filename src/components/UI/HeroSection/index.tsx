"use client";
import React from "react";
import Image from "next/image";
import {
  Wrapper,
  Inner,
  HeroTextContainer,
  HeroContent,
  HeroActions,
  SecondaryAction,
  Title,
  Emphasis,
  LogoOnly,
} from "./styles";
import { useIsMobile } from "../../../../libs/useIsMobile";
import { mobileParagraphPhrases, paragraphPhrases } from "./constants";
import upright_logo from "../../../../public/svgs/upright.svg";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Vista 1: Solo logo a pantalla completa */}
      <Wrapper aria-label="Upright intro">
        <LogoOnly>
          
          <Image src={upright_logo} alt="Upright" priority />
        </LogoOnly>
      </Wrapper>
    </>
  );
};

export default HeroSection;
