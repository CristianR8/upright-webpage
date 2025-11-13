"use client";
import React from "react";
import {
  Wrapper,
  Inner,
  HeroTextContainer,
  HeroContent,
  HeroActions,
  SecondaryAction,
  Title,
  FirstLine,
  Emphasis,
} from "./styles";
import MaskText from "@/components/Common/MaskText";
import { useIsMobile } from "../../../../libs/useIsMobile";
import { mobileParagraphPhrases, paragraphPhrases } from "../HeroSection/constants";

const Message = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper aria-labelledby="message-title">
      <Inner>
        <HeroContent>
          <HeroTextContainer>
            <Title id="message-title">
              <FirstLine>Transforma tus ideas en</FirstLine>
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

export default Message;
