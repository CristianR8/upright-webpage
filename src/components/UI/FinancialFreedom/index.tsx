"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Wrapper,
  Inner,
  Header,
  BannerCtn,
  Edges,
  EdgeBase,
  Title,
  BriefNote,
} from "./styles";
import MaskText from "@/components/Common/MaskText";
import RevealCover from "@/components/Common/RevealCover";
import { BannerImage } from "./styles";
import { useIsMobile } from "../../../../libs/useIsMobile";
import financial_freedom_banner from "../../../../public/images/financial_freedom_banner.png";
import {
  desktopBriefNotePhrase,
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileBriefNotePhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from "./constants";

const Edge = motion(EdgeBase);

/** subtle lift-in + float animation for edge cards */
const edgeVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.08 * i,
      duration: 0.5,
      ease: [0.22, 0.61, 0.36, 1],
    },
  }),
};

// Local image reveal variants for the banner (decoupled from Featured)
const imageVariants = {
  hidden: { scale: 1.6 },
  visible: {
    scale: 1,
    transition: { duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9], delay: 0.2 },
  },
};

const FinancialFreedom = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Header>
          {isMobile ? (
            <>
              <MaskText phrases={mobileHeaderPhrase} tag="h1" />
              <MaskText phrases={mobileParagraphPhrase} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={desktopHeaderPhrase} tag="h1" />
              {/* <MaskText phrases={desktopParagraphPhrase} tag="p" /> */}
            </>
          )}
        </Header>

        <Edges>
          {edges.map((edge, i) => (
            <Edge
              key={i}
              custom={i}
              variants={edgeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4, once: true }}
              whileHover="hover"
            >
              <Title>
                <Image src={edge.icon} alt="icon" />
                <MaskText phrases={[edge.point]} tag="h3" />
              </Title>
              <MaskText phrases={[edge.details]} tag="p" />
            </Edge>
          ))}
        </Edges>

        <BannerCtn>
          <RevealCover />
          <BannerImage
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            <Image src={financial_freedom_banner} alt="banner_img" fill />
          </BannerImage>
        </BannerCtn>
      </Inner>
    </Wrapper>
  );
};

export default FinancialFreedom;
