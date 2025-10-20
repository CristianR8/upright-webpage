'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  Offers,
  OfferCard,
  TextCtn,
  CardImage,
  PartnerBadge,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  desktopParagraphPhrase,
  mobileParagraphPhrase,
  offers,
} from './constants';
import badgeLight from '../../../../public/partner/Badge_light.svg';

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
              <OfferCard key={offer.title}>
                <CardImage
                  src={offer.illustration}
                  alt={offer.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 580px"
                  loading="lazy"
                  placeholder="blur"
                />
                <TextCtn>
                  <MaskText phrases={[offer.title]} tag="h2" />
                  <p>{offer.details}</p>
                </TextCtn>
              </OfferCard>
            ))}
          </Offers>
        ))}
      </Inner>

      <PartnerBadge>
        <Image
          src={badgeLight}
          alt="Partner badge"
          width={160}
          height={160}
          loading="lazy"
        />
      </PartnerBadge>
    </Wrapper>
  );
};

export default OffersSection;
