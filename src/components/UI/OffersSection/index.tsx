'use client';
import {
  Wrapper,
  Inner,
  Header,
  Offers,
  OfferCard,
  TextCtn,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  desktopParagraphPhrase,
  mobileParagraphPhrase,
  offers,
} from './constants';

const OffersSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrases} tag="h1" />

          {isMobile ? (
            <MaskText phrases={mobileParagraphPhrase} tag="p" />
          ) : (
            <MaskText phrases={desktopParagraphPhrase} tag="p" />
          )}
        </Header>
        {Array.from({ length: Math.ceil(offers.length / 2) }, (_, idx) =>
          offers.slice(idx * 2, idx * 2 + 2)
        ).map((pair, index) => (
          <Offers key={`offers-row-${index}`}>
            {pair.map((offer) => (
              <OfferCard key={offer.title} $bg={offer.illustration}>
                <TextCtn>
                  <MaskText phrases={[offer.title]} tag="h2" />
                  <p>{offer.details}</p>
                </TextCtn>
              </OfferCard>
            ))}
          </Offers>
        ))}
      </Inner>
    </Wrapper>
  );
};

export default OffersSection;
