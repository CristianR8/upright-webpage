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
  TopCenterLogo,
  TopRightBadge,
} from "./styles";
import SectionDivider from "@/components/Common/SectionDivider";
import MaskText from "@/components/Common/MaskText";
import { useIsMobile } from "../../../../libs/useIsMobile";
import { mobileParagraphPhrases, paragraphPhrases } from "./constants";
import upright_logo from "../../../../public/svgs/upright.svg";
import badgeLight from "../../../../public/partner/Badge_light.svg";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper aria-labelledby="hero-title">
      {/* Logo superior centrado */}
      <TopCenterLogo aria-hidden="true">
        <Image src={upright_logo} alt="" priority />
      </TopCenterLogo>

      {/* Insignia superior derecha */}
      <TopRightBadge aria-label="Partner badge">
        <Image
          src={badgeLight}
          alt="Partner badge"
          width={120}
          height={120}
          loading="lazy"
        />
      </TopRightBadge>

      <Inner>
        <HeroContent>
          <HeroTextContainer>
            {/* Divider full-bleed justo encima del título */}
            <SectionDivider aria-hidden="true" />

            <Title id="hero-title">
              Transforma tus ideas en <br />
              <Emphasis>comunidad</Emphasis>
            </Title>

            {isMobile ? (
              <MaskText phrases={mobileParagraphPhrases} tag="p" />
            ) : (
              <MaskText phrases={paragraphPhrases} tag="p" />
            )}

            <HeroActions>
              <SecondaryAction href="#servicios">
                Conoce nuestros servicios
              </SecondaryAction>
            </HeroActions>
          </HeroTextContainer>
        </HeroContent>
      </Inner>
    </Wrapper>
    
  );
};

export default HeroSection;
