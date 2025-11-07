"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  Wrapper,
  ModalOverlay,
  ModalCard,
  CloseButton,
  ModalContent,
  ModalCTA,
} from "./styles";
import pipelineIllustration from "@/../public/images/kommo-pipeline-ui_es.webp";

const KommoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const closeModal = () => setIsModalOpen(false);

  return (
    <Wrapper id="kommo" style={{ scrollMarginTop: '90px' }}>
      <div className="hero-container">
        {/* texto principal */}
        <p className="subtitle">CRM de ventas conversacionales</p>

        <h1 className="title">
          Todas las formas <br />
          de gestionar clientes — <br />
          combinadas en una app
        </h1>

        <button
          className="cta"
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          Ver más
        </button>

        {/* personajes decorativos */}
        <img
          src="//pcfcdn.kommo.com/images/main/kommo-phone-image.png"
          alt=""
          className="phone"
        />
        <img
          src="//pcfcdn.kommo.com/images/main/kommo-messaging-character.png"
          alt=""
          className="bubble"
        />
        <img
          src="//pcfcdn.kommo.com/images/main/kommo-crm-emailing-character.png"
          alt=""
          className="letter"
        />

        {/* iconos flotantes */}
        <div className="chips">
          <img
            src="https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png"
            alt="Gmail"
            className="chip chip-gmail"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
            alt="Instagram"
            className="chip chip-instagram"
          />
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/TikTok_logo.svg"
            alt="TikTok"
            className="chip chip-tiktok"
          /> */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
            alt="Telegram"
            className="chip chip-telegram"
          />
        </div>
      </div>

      {isMounted && isModalOpen
        ? createPortal(
            <ModalOverlay onClick={closeModal}>
              <ModalCard
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="kommo-modal-title"
              >
                <CloseButton
                  type="button"
                  onClick={closeModal}
                  aria-label="Cerrar modal"
                >
                  ×
                </CloseButton>
                <div className="modal-image">
                  <Image
                    src={pipelineIllustration}
                    alt="Embudo de ventas Kommo"
                    sizes="(max-width: 768px) 94vw, 920px"
                    className="modal-illustration"
                    placeholder="blur"
                    priority
                    quality={100}
                  />
                </div>
                <ModalContent>
                  <h3 id="kommo-modal-title">Embudo visual para tu equipo</h3>
                  <p>
                    Arrastra oportunidades entre etapas, aplica automatizaciones y mantén a
                    todo el equipo alineado con recordatorios inteligentes.
                  </p>
                  <ul>
                    <li>
                      Centraliza leads de WhatsApp, redes y formularios y asígnalos automáticamente al ejecutivo adecuado.
                    </li>
                    <li>
                      Define gatillos que disparan tareas, recordatorios y mensajes cuando un trato avanza o se estanca.
                    </li>
                    <li>
                      Visualiza indicadores en vivo para detectar cuellos de botella y optimizar cada etapa con datos reales.
                    </li>
                  </ul>
                  <p className="smallprint">
                    Este embudo es totalmente editable: personaliza etapas, responsables y
                    automatizaciones para replicar tu proceso comercial.
                  </p>
                  <ModalCTA
                    href="https://es.kommo.com/whatsapp-lead-generation/?device=c&placement=&dkinsertion=&gad_campaignid=18583286796"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explorar Kommo CRM
                  </ModalCTA>
                </ModalContent>
              </ModalCard>
            </ModalOverlay>,
            document.body
          )
        : null}
    </Wrapper>
  );
};

export default KommoSection;
