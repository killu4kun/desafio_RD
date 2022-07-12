import React, { useState } from "react";
import * as S from "./styles";
import videoThumb from "../../assets/videoThumbnail.jpg";
import Modal from "../VideoModal";

export default function DemoSection() {
  const [show, setShow] = useState(false);
  return (
    <S.Container>
      <S.Heading3>
        Entenda melhor como o RD Station Marketing funciona na prática
      </S.Heading3>
      <S.demoButton>ASSISTA A DEMONSTRAÇÃO</S.demoButton>
      <S.videoContainer>
        <img src={videoThumb} alt="girl with notebook" />
        <button onClick={() => setShow(true)}>Show Modal</button>
        <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/watch?v=lGCesaaLi4s?autoplay=1"
            allow="autoplay"
          ></iframe>
        </Modal>
      </S.videoContainer>
    </S.Container>
  );
}
