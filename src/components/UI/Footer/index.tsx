import Image from "next/image";
import upright_logo from "../../../../public/svgs/upright.svg";
import qr_code from "../../../../public/svgs/qr_code.svg";
import ic_google_playstore from "../../../../public/svgs/ic_google_playstore.svg";
import ic_baseline_apple from "../../../../public/svgs/ic_baseline_apple.svg";
import ic_chevron_down from "../../../../public/svgs/ic_chevron_down.svg";
import ic_copyright from "../../../../public/svgs/ic_copyright.svg";

const linksArr = [
  
  {
    title: "Sobre nosotros",
    links: ["Inicio", "Servicios", "Kommo CRM"],
  },
  
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  QRImageCtn,
  TextCtn,
  IconCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from "./styles";

const Footer = () => {
  const handleNavClick = (targetId: string) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toId = (label: string) => {
    const t = label.toLowerCase();
    if (/^inicio/.test(t)) return 'inicio';
    if (/servicios/.test(t)) return 'servicios';
    if (/kommo/.test(t)) return 'kommo';
    return '';
  };

  return (
    <Wrapper>
      <Inner>
        <FooterMainContent>
          <FooterMiddle>
            <FooterLogo>
              <Image src={upright_logo} alt="Upright logo" />
            </FooterLogo>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => {
                      const id = toId(link);
                      return (
                        <li key={i}>
                          <button type="button" onClick={() => id && handleNavClick(id)}>
                            {link}
                          </button>
                        </li>
                      );
                    })}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <Translator>
              <h3>Español (Colombia)</h3>
              <Image src={ic_chevron_down} alt="chevron down" />
            </Translator>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              Upright
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
