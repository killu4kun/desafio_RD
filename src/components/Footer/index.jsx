import React from "react";
import * as S from "./styles";
import AlternativeLogo from "../../assets/alternative_logo.svg";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";
import Youtube from "../../assets/youtube.svg";

export default function Footer() {
  return (
    <S.Container>
      <S.Content>
        <S.imgContainer>
          <img className="alternative-logo" src={AlternativeLogo} />
        </S.imgContainer>
        <S.socialContainer>
          <a href="https://twitter.com/rd_station" target="_blank">
            <img src={Twitter} />
          </a>
          <a href="https://www.facebook.com/ResultadosDigitais/" target="_blank">
          <img src={Facebook} />
          </a>
          <a href="https://www.linkedin.com/company/resultadosdigitais" target="_blank">
          <img src={Linkedin} />
          </a>
          <a href="https://www.instagram.com/resdigitais/" target="_blank">
          <img src={Instagram} />
          </a>
          <a href="https://www.youtube.com/channel/UC5lPKvmw6-DFya_qreisENQ" target="_blank">
          <img src={Youtube} />
          </a>
        </S.socialContainer>
      </S.Content>
      <S.Copyright>
        © 2021 <span className="bold-text-footer">RD Station.</span>{" "}
        <a
          href="https://legal.rdstation.com/pt/privacy-policy/"
          target="_blank"
        >
          Política de Privacidade.
        </a>
      </S.Copyright>
    </S.Container>
  );
}
