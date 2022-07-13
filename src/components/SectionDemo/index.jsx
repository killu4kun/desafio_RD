import React, { useState } from "react";
import * as S from "./styles";
import videoThumb from "../../assets/videoThumbnail.jpg";
import Modal from "../VideoModal";

import video from "../../assets/video.mp4";

export default function DemoSection() {
  const [show, setShow] = useState(false);
  return (
    <S.Container>
      <S.BackgroundContainer>
        <S.Content>
          <S.Heading3>
            Entenda melhor como o RD Station Marketing funciona na prática
          </S.Heading3>
          <S.demoButton>ASSISTA A DEMONSTRAÇÃO</S.demoButton>
        </S.Content>
        <S.videoContainer>
          <img src={videoThumb} alt="girl with notebook" />
          <button onClick={() => setShow(true)}>Show Modal</button>
          <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
            <video width="420" height="315" controls autoPlay>
              <source src={video} type="video/mp4"></source>
            </video>
          </Modal>
        </S.videoContainer>
      </S.BackgroundContainer>
    </S.Container>
  );
}
