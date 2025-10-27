import {
  Featured,
  FinancilaFreedom,
  HeroSection,
  OffersSection,
} from "@/components";
import SectionDivider from "@/components/Common/SectionDivider";

export default function Home() {
  return (
    <main>
      <section id="inicio" style={{ scrollMarginTop: '90px' }}>
        <HeroSection />
      </section>
      <SectionDivider aria-hidden="true" />
      <Featured />
      <SectionDivider aria-hidden="true" />
      <section id="nosotros" style={{ scrollMarginTop: '90px' }}>
        <FinancilaFreedom />
      </section>
      <SectionDivider aria-hidden="true" />
      <section id="servicios" style={{ scrollMarginTop: '90px' }}>
        <OffersSection />
      </section>
   
    </main>
  );
}
