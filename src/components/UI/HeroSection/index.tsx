'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Pill,
  HeroTextContainer,
  HeroContent,
  HeroActions,
  SecondaryAction,
} from './styles';
import { GetStartedButton } from '@/components';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  mobileParagraphPhrases,
  paragraphPhrases,
} from './constants';
import upright_logo from '../../../../public/svgs/upright.svg';

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <HeroContent>
          <HeroTextContainer>
            <Image
              src={upright_logo}
              alt="Upright logo"
              className="hero-logo"
              priority
            />
            {isMobile ? (
              <MaskText phrases={mobileParagraphPhrases} tag="p" />
            ) : (
              <MaskText phrases={paragraphPhrases} tag="p" />
            )}
          </HeroTextContainer>
          <HeroActions>
            <SecondaryAction href="#servicios">
              Conoce nuestros servicios
            </SecondaryAction>
          </HeroActions>
        </HeroContent>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
