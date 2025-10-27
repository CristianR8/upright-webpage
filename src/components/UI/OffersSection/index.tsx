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
} from './constants';
import badgeLight from '../../../../public/partner/Badge_light.svg';

const OffersSection = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState<null | 'web'>(null);

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
                  if (offer.title.toLowerCase().includes('desarrollo')) setOpen('web');
                }}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && offer.title.toLowerCase().includes('desarrollo')) {
                    e.preventDefault();
                    setOpen('web');
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
          <ModalCard onClick={() => setOpen(null)} role="dialog" aria-modal="true">
            <h3>Desarrollo de Páginas Web</h3>
            <p>
              Nos especializamos en diseñar y construir sitios web personalizados que se
              adaptan perfectamente a las necesidades específicas de tu negocio. El diseño
              está enfocado en la usabilidad, asegurando que los usuarios puedan interactuar
              con el sitio de manera intuitiva y agradable.
            </p>
            <h4>Ventajas de Desarrollo Web</h4>
            <ul>
              <li>
                <strong>Diseño único y exclusivo:</strong> Creamos una identidad visual original y atractiva, lo que
                ayuda a diferenciar tu marca y genera una impresión profesional y de calidad para tus usuarios.
              </li>
              <li>
                <strong>Personalización total:</strong> Integramos funcionalidades específicas que responden a las
                particularidades de tu negocio, sin las limitaciones de las plantillas genéricas y sin plugins
                innecesarios que ralenticen el sitio.
              </li>
              <li>
                <strong>Optimización para SEO y velocidad:</strong> Al construir el sitio desde cero con código limpio y
                eficiente, conseguimos que tu web cargue rápidamente y esté optimizada para los motores de búsqueda,
                mejorando su posicionamiento y visibilidad.
              </li>
              <li>
                <strong>Seguridad reforzada:</strong> Implementamos protocolos y medidas de seguridad personalizadas
                para proteger los datos de tu negocio y la información de tus clientes frente a posibles ataques.
              </li>
              <li>
                <strong>Escalabilidad:</strong> A medida que tu empresa crece, tu sitio podrá adaptarse fácilmente para
                incluir nuevas funciones o integrarse con sistemas internos como CRM o herramientas de gestión.
              </li>
              <li>
                <strong>Experiencia de usuario mejorada:</strong> Un sitio intuitivo que guía a los visitantes hacia
                sus objetivos con claridad, logrando así una mayor tasa de conversión y satisfacción del cliente.
              </li>
            </ul>
          </ModalCard>
        </ModalOverlay>
      )}
    </Wrapper>
  );
};

export default OffersSection;
