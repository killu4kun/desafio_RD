import React from "react";
import Forms from "../Form";
import { Container, Heading1, Paragraph } from "./styles";

export default function HeroSection() {
  return (
    <Container>
      <Heading1>
        Gere mais <span>oportunidades</span> para seu negócio
      </Heading1>
      <Paragraph>
        RD Station Marketing é um software para sua empresa fazer campanhas
        melhores, nutrir Leads, gerar oportunidades comerciais qualificadas e
        alcançar mais resultados.
      </Paragraph>
      <Forms />
    </Container>
  );
}
