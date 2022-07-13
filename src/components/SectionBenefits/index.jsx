import React from "react";
import Benefits from "../BenefitsContent";
import Slider from "../Slider";
import * as S from "./styles";

export default function SectionBenefits() {
  return (
    <S.Container>
      <S.Heading2>
        A ferramenta de Automação de Marketing líder na América Latina
      </S.Heading2>
      <Benefits />
      <Slider />
    </S.Container>
  );
}
