import {
  Featured,
  FinancilaFreedom,
  HeroSection,
  OffersSection,
  Message,
  KommoSection,
} from "@/components";
import SectionDivider from "@/components/Common/SectionDivider";

export default function Home() {
  return (
    <main>
      <section id="inicio" style={{ scrollMarginTop: "90px" }}>
        <HeroSection />
        <Message />
      </section>
      <section id="nosotros" style={{ scrollMarginTop: "90px" }}>
        <FinancilaFreedom />
      </section>
      <section id="servicios" style={{ scrollMarginTop: "90px" }}>
        <OffersSection />
      </section>
      <KommoSection />
      <Featured />
    </main>
  );
}
