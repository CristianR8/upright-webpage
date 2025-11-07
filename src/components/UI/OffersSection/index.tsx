"use client";
import Image from "next/image";
import { useEffect, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import {
  Wrapper,
  Inner,
  Header,
  Offers,
  OfferCard,
  ButtonsRow,
  ActionButton,
  CardImage,
  ModalOverlay,
  ModalCard,
} from "./styles";
import MaskText from "@/components/Common/MaskText";
import { useIsMobile } from "../../../../libs/useIsMobile";
import { useBodyScrollLock } from "../../../../libs/useBodyScrollLock";
import {
  desktopHeaderPhrases,
  desktopParagraphPhrase,
  mobileParagraphPhrase,
  offers,
  serviceModals,
  type ServiceModalKey,
} from "./constants";
import dynamic from "next/dynamic";
const GifBanner = dynamic(() => import("@/components/UI/GifBanner/GifBanner"), {
  ssr: false, // importante
});

const OffersSection = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState<null | ServiceModalKey>(null);
  const [hasMounted, setHasMounted] = useState(false);

  // Close on ESC
  useEffect(() => {
    setHasMounted(true);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useBodyScrollLock(Boolean(open), "offers-modal");

  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrases} tag="h1" />
        </Header>
        <GifBanner />
        {Array.from({ length: Math.ceil(offers.length / 2) }, (_, idx) =>
          offers.slice(idx * 2, idx * 2 + 2)
        ).map((pair, index) => (
          <Offers key={`offers-row-${index}`}>
            {pair.map((offer) => {
              const openForOffer = () => {
                const t = offer.title.toLowerCase();
                if (/desarrollo/.test(t)) setOpen("web");
                else if (/dron/.test(t)) setOpen("drones");
                else if (/(google|ads|pauta)/.test(t)) setOpen("ads");
                else if (/(portafolio)/.test(t)) setOpen("metaPortfolio");
                else if (/(crm|kommo)/.test(t)) setOpen("crm");
                else if (/automat/.test(t)) setOpen("automation");
                else if (/(lista|difusi[oó]n|whatsapp)/.test(t))
                  setOpen("broadcast");
                else if (/(optimización|plataformas)/.test(t))
                  setOpen("optimize");
                else if (/(comunicaci[oó]n|redes|social)/.test(t))
                  setOpen("communication");
                else if (/branding/.test(t)) setOpen("branding");
              };

              return (
                <OfferCard key={offer.title}>
                  <CardImage
                    src={offer.illustration}
                    alt={offer.title}
                    loading="lazy"
                    placeholder="blur"
                  />
                  <ButtonsRow>
                    <ActionButton
                      $variant="indigo"
                      type="button"
                      onClick={openForOffer}
                    >
                      Ver más
                    </ActionButton>
                    <ActionButton
                      as="a"
                      href="https://wa.me/message/BDRPYGZON5JOL1"
                      target="_blank"
                      rel="noopener noreferrer"
                      $variant="gray"
                    >
                      Adquirir
                    </ActionButton>
                  </ButtonsRow>
                </OfferCard>
              );
            })}
          </Offers>
        ))}
      </Inner>

      {hasMounted && open
        ? createPortal(
            <ModalOverlay onClick={() => setOpen(null)}>
              <ModalCard
                onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
              >
                <button
                  type="button"
                  className="close-btn"
                  aria-label="Cerrar modal"
                  onClick={() => setOpen(null)}
                >
                  ×
                </button>
                {/* Background image from the matching service */}
                {(() => {
                  const match = offers.find((o) => {
                    const t = o.title.toLowerCase();
                    if (open === "web") return /desarrollo/.test(t);
                    if (open === "drones") return /dron/.test(t);
                    if (open === "ads") return /(google|ads|pauta)/.test(t);
                    if (open === "metaPortfolio") return /(portafolio)/.test(t);
                    if (open === "crm") return /(crm|kommo)/.test(t);
                    if (open === "automation") return /automat/.test(t);
                    if (open === "broadcast")
                      return /(lista|difusi[oó]n|whatsapp)/.test(t);
                    if (open === "optimize")
                      return /(optimización|plataformas)/.test(t);
                    if (open === "communication")
                      return /(comunicaci[oó]n|redes|social)/.test(t);
                    if (open === "branding") return /branding/.test(t);
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
            </ModalOverlay>,
            document.body
          )
        : null}
    </Wrapper>
  );
};

export default OffersSection;
