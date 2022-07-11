import React from "react";
import * as S from "./styles";
import Facebook from "../../assets/brands/facebook.svg";
import RDStation from "../../assets/brands/rd-station-crm.svg";
import Salesforce from "../../assets/brands/salesforce.svg";
import Google from "../../assets/brands/google.svg";
import Linkedin from "../../assets/brands/linkedin.svg";
import Wordpress from "../../assets/brands/wordpress.svg";
import Hotmart from "../../assets/brands/hotmart.svg";
import Pagseguro from "../../assets/brands/pagseguro.svg";
import Shopify from "../../assets/brands/shopify.svg";
import Zapier from "../../assets/brands/zapier.svg";
import GreenButton from "../ButtonGreen";

export default function Integration() {
  return (
    <S.Container>
      <S.Header>Torne sua operação de Marketing ainda mais poderosa</S.Header>
      <S.Paragraph>
        O RD Station Marketing se conecta as principais ferramentas nacionais e
        internacionais
      </S.Paragraph>
      <S.imgsContainer>
        {array.map((logo, index) => (
          <div className={`div ${index + 1}`} key={logo.alt}>
            <img src={logo.src} alt={logo.alt} />
            <span>{logo.name}</span>
          </div>
        ))}
      </S.imgsContainer>
      <GreenButton text="CRIAR CONTA GRATUITA" />
    </S.Container>
  );
}

const array = [
  {
    src: RDStation,
    alt: "RDStation logo",
    name: "RD Station CRM",
  },
  {
    src: Salesforce,
    alt: "Salesforce logo",
    name: "Salesforce",
  },
  {
    src: Google,
    alt: "Google logo",
    name: "Google",
  },
  {
    src: Facebook,
    alt: "facebook logo",
    name: "Facebook",
  },
  {
    src: Linkedin,
    alt: "linkedin logo",
    name: "Linkedin",
  },
  {
    src: Wordpress,
    alt: "wordpress logo",
    name: "Wordpress",
  },
  {
    src: Hotmart,
    alt: "hotmart logo",
    name: "Hotmart",
  },
  {
    src: Pagseguro,
    alt: "pagseguro logo",
    name: "Pagseguro",
  },
  {
    src: Shopify,
    alt: "shopify logo",
    name: "Shopify",
  },
  {
    src: Zapier,
    alt: "zapier logo",
    name: "Zapier",
  },
];
