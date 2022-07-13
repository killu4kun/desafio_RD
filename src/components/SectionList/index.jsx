import React from "react";
import { Container, Content, Heading3, Subtitle } from "./styles";
import check from "../../assets/check.svg";
import girlImg from "../../assets/img.png";

export default function SectionList() {
  return (
    <Container>
      <Content>
        <Heading3>
          Resultados previsíveis e mais clientes para sua empresa
        </Heading3>
        <Subtitle>Torne sua atuação no Marketing Digital mais eficaz</Subtitle>
        <div className="container">
          <div className="content">
            <img src={check} alt="checked" />
            <div>
              <span>Ferramentas intuitivas</span> e com modelos prontos, vídeos
              explicativos e passo a passo guiado
            </div>
          </div>
          <div className="content">
            <img src={check} alt="checked" />
            <div>
              <span>Implementação com especialistas</span> focada em
              planejamento e prática (nos planos Marketing Pro e Enterprise)
            </div>
          </div>
          <div className="content ">
            <img src={check} alt="checked" />
            <div>
              <span>Time de especialistas em Sucesso do Cliente</span> para
              apoiar na otimização da estratégia em cada fase da sua jornada
              (nos planos Marketing Pro e Enterprise)
            </div>
          </div>
          <div className="content space">
            <img src={check} alt="checked" />
            <div>
              <span>Suporte técnico</span> em português, espanhol e inglês para
              tirar dúvidas, <span>com 97% de satisfação</span> entre nossos
              clientes
            </div>
          </div>
          <div className="content">
            <img src={check} alt="checked" />
            <div>
              <span>Muito conteúdo educativo</span>, eventos, cursos da RD
              University e comunidades para você continuar evoluindo
            </div>
          </div>
        </div>
      </Content>
      <div className="girl-container">
        <img className="girl" src={girlImg} alt="girl image" />
      </div>
    </Container>
  );
}
