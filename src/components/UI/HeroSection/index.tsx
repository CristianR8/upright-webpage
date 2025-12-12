"use client";
import React from "react";
import Image from "next/image";
import {
  Wrapper,
  LogoOnly,
} from "./styles";
import upright_logo from "../../../../public/svgs/upright.svg";
import Particles from "./Particles";

const HeroSection = () => {
  return (
    <>
      {/* Vista 1: Solo logo a pantalla completa */}
      <Wrapper aria-label="Upright TIC agencia digital">
        {/* Capa de partículas con seguimiento del mouse en Hero */}
        <Particles trackMouse />
        <h1 className="sr-only">
          Upright TIC: agencia digital de marketing, desarrollo web, CRM Kommo y
          automatizaciones multicanal
        </h1>
        <LogoOnly>
          <Image src={upright_logo} alt="Upright" priority />
        </LogoOnly>
      </Wrapper>
    </>
  );
};

export default HeroSection;
