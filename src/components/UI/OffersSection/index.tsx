"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Wrapper,
  Inner,
  Header,
  Offers,
  OfferCard,
  TextCtn,
  CardImage,
  PartnerBadge,
  ModalOverlay,
  ModalCard,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  desktopParagraphPhrase,
  mobileParagraphPhrase,
  offers,
  serviceModals,
  type ServiceModalKey,
} from './constants';
import badgeLight from '../../../../public/partner/Badge_light.svg';

const OffersSection = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState<null | ServiceModalKey>(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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
              <OfferCard
                key={offer.title}
                role="button"
                tabIndex={0}
                onClick={() => {
                  const t = offer.title.toLowerCase();
                  if (/desarrollo/.test(t)) setOpen('web');
                  else if (/dron/.test(t)) setOpen('drones');
                  else if (/(google|ads|pauta)/.test(t)) setOpen('ads');
                  else if (/automat/.test(t)) setOpen('automation');
                  else if (/(lista|difusi[oó]n|whatsapp)/.test(t)) setOpen('broadcast');
                  else if (/(optimización|plataformas)/.test(t)) setOpen('optimize');
                  else if (/(comunicaci[oó]n|redes|social)/.test(t)) setOpen('communication');
                  else if (/branding/.test(t)) setOpen('branding');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const t = offer.title.toLowerCase();
                    if (/desarrollo/.test(t)) setOpen('web');
                    else if (/dron/.test(t)) setOpen('drones');
                    else if (/(google|ads|pauta)/.test(t)) setOpen('ads');
                    else if (/automat/.test(t)) setOpen('automation');
                    else if (/(lista|difusi[oó]n|whatsapp)/.test(t)) setOpen('broadcast');
                    else if (/(optimización|plataformas)/.test(t)) setOpen('optimize');
                    else if (/(comunicaci[oó]n|redes|social)/.test(t)) setOpen('communication');
                    else if (/branding/.test(t)) setOpen('branding');
                  }
                }}
              >
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
      {open && (
        <ModalOverlay onClick={() => setOpen(null)}>
          <ModalCard onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            {/* Background image from the matching service */}
            {(() => {
              const match = offers.find(o => {
                const t = o.title.toLowerCase();
                if (open === 'web') return /desarrollo/.test(t);
                if (open === 'drones') return /dron/.test(t);
                if (open === 'ads') return /(google|ads|pauta)/.test(t);
                if (open === 'automation') return /automat/.test(t);
                if (open === 'broadcast') return /(lista|difusi[oó]n|whatsapp)/.test(t);
                if (open === 'optimize') return /(optimización|plataformas)/.test(t);
                if (open === 'communication') return /(comunicaci[oó]n|redes|social)/.test(t);
                if (open === 'branding') return /branding/.test(t);
                return false;
              });
              return match ? (
                <Image
                  className="modal-bg"
                  src={match.illustration}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 92vw, 880px"
                  priority
                />
              ) : null;
            })()}
            <div className="modal-content">
              <h3>{serviceModals[open].title}</h3>
              {serviceModals[open].intro.map((p, i) => (
                <p key={`intro-${i}`}>{p}</p>
              ))}
              {serviceModals[open].benefitsTitle && (
                <h4>{serviceModals[open].benefitsTitle}</h4>
              )}
              <ul>
                {serviceModals[open].benefits.map((b, i) => (
                  <li key={`b-${i}`}>{b}</li>
                ))}
              </ul>
            </div>
          </ModalCard>
        </ModalOverlay>
      )}
    </Wrapper>
  );
};

export default OffersSection;
