"use client";
import Image from "next/image";
import ParallaxText from "@/components/Common/ParallaxImages";
import { useEffect, useState } from "react";
import { useSpring } from "framer-motion";
import {
  Wrapper,
  Inner,
  ParallaxWrap,
  AllyItem,
  CarouselRow,
  Heading,
} from "./styles";
import { alliesImages } from "./constants";

const Featured = () => {
  const [hover, setHover] = useState(false);
  // Smooth velocity scaling on hover
  const velocitySpring = useSpring(1, { stiffness: 120, damping: 24 });
  useEffect(() => {
    velocitySpring.set(hover ? 0.25 : 1); // slower and smooth
  }, [hover, velocitySpring]);
  return (
    <Wrapper>
      <Inner>
        <Heading>
          <h2>Nuestros clientes</h2>
        </Heading>

        {/* Carrusel único en una sola línea; desacelera al hover */}
        <ParallaxWrap onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <ParallaxText baseVelocity={-2} velocityScale={velocitySpring}>
            <CarouselRow aria-label="aliados">
              {alliesImages.map((img, i) => (
                <AllyItem key={`ally-${i}`}>
                  <Image src={img} alt={`cliente-${i + 1}`} fill sizes="320px" />
                </AllyItem>
              ))}
            </CarouselRow>
          </ParallaxText>
        </ParallaxWrap>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
