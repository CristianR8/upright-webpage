import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
} from "@/components";

export default function Home() {
  return (
    <main>
      <section id="inicio" style={{ scrollMarginTop: '90px' }}>
        <HeroSection />
      </section>
      <Featured />
      {/* <FinancialFuture /> */}
      <section id="nosotros" style={{ scrollMarginTop: '90px' }}>
        <FinancilaFreedom />
      </section>
      <section id="servicios" style={{ scrollMarginTop: '90px' }}>
        <OffersSection />
      </section>
      {/* <IntroSection /> */}
      {/* <JoinSection /> */}
      {/* <FAQ /> */}
    </main>
  );
}
