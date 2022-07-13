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
import PrimaryButton from "../../components/ButtonGreen";

export default function Integration() {
  return (
    <S.Container>
      <S.Content>
        <S.Header>Torne sua operação de Marketing ainda mais poderosa</S.Header>
        <S.Paragraph>
          O RD Station Marketing se conecta as principais ferramentas nacionais
          e internacionais
        </S.Paragraph>
      </S.Content>
      <S.imgsContainer>
        {array.map((logo, index) => (
          <div className={`div ${index + 1}`} key={logo.alt}>
            <img src={logo.src} alt={logo.alt} />
            <span>{logo.name}</span>
          </div>
        ))}
      </S.imgsContainer>
      <PrimaryButton className='mobile' mT="1rem" text="CRIAR CONTA GRATUITA" />
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
    src: Google,
    alt: "Google logo",
    name: "Google",
  },
  {
    src: Linkedin,
    alt: "linkedin logo",
    name: "Linkedin",
  },
  {
    src: Hotmart,
    alt: "hotmart logo",
    name: "Hotmart",
  },
  {
    src: Shopify,
    alt: "shopify logo",
    name: "Shopify",
  },
  {
    src: Salesforce,
    alt: "Salesforce logo",
    name: "Salesforce",
  },
  {
    src: Facebook,
    alt: "facebook logo",
    name: "Facebook",
  },
  {
    src: Wordpress,
    alt: "wordpress logo",
    name: "Wordpress",
  },
  {
    src: Pagseguro,
    alt: "pagseguro logo",
    name: "Pagseguro",
  },
  {
    src: Zapier,
    alt: "zapier logo",
    name: "Zapier",
  },
];
