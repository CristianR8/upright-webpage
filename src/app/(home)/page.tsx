import {
  Featured,
  FinancilaFreedom,
  HeroSection,
  OffersSection,
} from "@/components";

export default function Home() {
  return (
    <main>
      <section id="inicio" style={{ scrollMarginTop: '90px' }}>
        <HeroSection />
      </section>
      <Featured />
      <section id="nosotros" style={{ scrollMarginTop: '90px' }}>
        <FinancilaFreedom />
      </section>
      <section id="servicios" style={{ scrollMarginTop: '90px' }}>
        <OffersSection />
      </section>
   
    </main>
  );
}
