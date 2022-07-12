import React from "react";
import SecondaryButton from "../ButtonYellow";
import * as S from "./styles";

export default function SectionCTA() {
  return (
    <S.Container>
      <S.Heading2>
        Por que mais de 25.000 empresas escolheram o RD Station?
      </S.Heading2>
      <S.Paragraph>
        Combinamos nossos produtos de Marketing e Vendas com pessoas que se
        importam com seus resultados e um ecossistema que apoia o seu negócio do
        planejamento à prática.
      </S.Paragraph>
      <SecondaryButton mT="1rem" text="CRIAR CONTA GRATUITA" />
    </S.Container>
  );
}
