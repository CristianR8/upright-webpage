'use client';
import { ReactLenis } from '@studio-freight/react-lenis';
import StyledComponentsRegistry from '../../../libs/registry';
import { GlobalStyles } from './GlobalStyles';
import { Footer, Header } from '..';

import dynamic from "next/dynamic";

const WhatsAppBubble = dynamic(() => import("@/components/UI/WhatsAppBubble"), {
  ssr: false,
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
        easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
      >
        <GlobalStyles />
        <div>
          <Header />
          {children}
          <Footer />
          <WhatsAppBubble />
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;
