"use client";
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
  HeroVisual,
  TopCenterLogo,
  TopRightBadge,
} from "./styles";
import MaskText from "@/components/Common/MaskText";
import { useIsMobile } from "../../../../libs/useIsMobile";
import { mobileParagraphPhrases, paragraphPhrases } from "./constants";
import upright_logo from "../../../../public/svgs/upright.svg";
import big_banner from "../../../../public/images/big_banner.png";
import badgeLight from "../../../../public/partner/Badge_light.svg";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper aria-labelledby="hero-title">
      <TopCenterLogo aria-hidden="true">
        <Image src={upright_logo} alt="" priority width={240} height={80} />
      </TopCenterLogo>
      <TopRightBadge>
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
            <Title id="hero-title">
              Transforma tus ideas <br />
              <Emphasis>en comunidad</Emphasis>
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
            <HeroVisual>
              <Image
                src={big_banner}
                alt="Personas colaborando"
                priority
                className="hero-image"
              />
            </HeroVisual>
        </HeroContent>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
