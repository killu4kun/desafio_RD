import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 390px;
  align-items: center;

  @media (min-width: 1440px) {
    position: absolute;
    align-items: flex-start;
    top: 280%;
    width: 100vw;
  }
`;

export const Content = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BackgroundContainer = styled.div`
  display: flex;
  background-color: #f1f3f5;
  width: 360px;
  height: 300px;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1440px) {
    width: 91%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const videoContainer = styled.div`
  height: 184px;
  width: 328px;
  margin-top: 1rem;
  @media (min-width: 1440px) {
    width: 600px;
    height: 365px;
  }
  img {
    height: 184px;
    width: 328px;
    @media (min-width: 1440px) {
      width: 600px;
      height: 365px;
    }
  }
  button {
    position: relative;
    top: -7rem;
    left: 8rem;

    @media (min-width: 1440px) {
      top: -12rem;
      left: 17rem;
    }
  }
`;

export const Heading3 = styled.h3`
  width: 328px;
  height: 78px;

  font-family: "Darker Grotesque";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 110%;

  color: #212429;
  margin-bottom: 1rem;
`;

export const demoButton = styled.button`
  height: 40px;
  width: 271px;

  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 140%;

  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #212429;

  border: 2px solid #212429;
`;
