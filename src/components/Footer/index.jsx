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
        <img src={Twitter} />
        <img src={Facebook} />
        <img src={Linkedin} />
        <img src={Instagram} />
        <img src={Youtube} />
      </S.socialContainer>
      </S.Content>
      <S.Copyright>
        © 2021 <span className="bold-text-footer">RD Station.</span> <span>Política de Privacidade.</span>
      </S.Copyright>
    </S.Container>
  );
}
