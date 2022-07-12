import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

import graphIcon from "../../assets/icons/graphicon.svg";
import dotsIcon from "../../assets/icons/icondots.svg";
import megaphoneIcon from "../../assets/icons/iconmegaphone.svg";
import pizzaIcon from "../../assets/icons/iconpizza.svg";
import worldIcon from "../../assets/icons/iconworld.svg";
import starIcon from "../../assets/icons/staricon.svg";

import { Pagination } from "swiper";

import React from "react";
import AnnouncesCard from "../AnnouncesCard";

export default function Slider() {
  return (
    <>
      <Swiper pagination modules={[Pagination]} slidesPerView={0.9} className="mySwiper">
        {array.map((icon, index) => (
          <SwiperSlide>
            <AnnouncesCard
              src={icon.src}
              alt={icon.alt}
              content={icon.content}
              title={icon.title}
              key={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const array = [
  {
    src: graphIcon,
    alt: "graph icon",
    title: "Torne sua operação de Marketing Digital mais produtiva",
    content:
      "Chega de usar várias ferramentas separadas e perder as informações no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos os principais recursos de Marketing Digital em um só lugar para sua operação ser mais eficaz.",
  },
  {
    src: dotsIcon,
    alt: "dots icon",
    title: "Construa jornadas personalizadas e gere vendas em escala",
    content:
      "Envie a mensagem certa na hora certa e construa jornadas personalizadas que geram até 5x mais conversões e guiam Leads até a compra. Automatize também suas tarefas e aumente a produtividade de Marketing e Vendas.",
  },
  {
    src: megaphoneIcon,
    alt: "megaphone icon",
    title: "Crie facilmente campanhas que funcionam",
    content:
      "É fácil usar o RD Station Marketing, porque suas funcionalidades são simples, mas poderosas, e contam com dezenas de modelos — como de Landing Pages, Pop-ups, emails — para diversas ocasiões e segmentos que você pode personalizar de acordo com a sua campanha.",
  },
  {
    src: pizzaIcon,
    alt: "pizza icon",
    title: "Saia da incerteza e comprove resultados",
    content:
      "Ao invés de fazer uma série de ações isoladas, sem saber qual funciona, junte as informações de todos os seus contatos e suas ações em diferentes canais com recursos de análise para provar que Marketing Digital traz mais vendas e clientes.",
  },
  {
    src: worldIcon,
    alt: "wolrd icon",
    title: "Suporte ágil e na sua língua",
    content:
      "Nosso time de suporte técnico está disponível quando você precisar, com uma taxa de satisfação de 97% entre nossos clientes e um tempo médio de resolução de 6 horas. E o melhor: tudo isso em português.",
  },
  {
    src: starIcon,
    alt: "star icon",
    title: "Encontre automaticamente as melhores oportunidades",
    content:
      "Conheça melhor seu público, de acordo com as informações capturadas nas suas páginas e formulários. Defina critérios para identificar automaticamente Leads com maior potencial de compra e envie para o comercial oportunidades qualificadas.",
  },
];
