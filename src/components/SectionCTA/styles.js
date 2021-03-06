import styled from "styled-components";
import imageGraph from "../../assets/graphs.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 408px;
  width: 360px;
  background-image: url(${imageGraph});
  background-repeat: no-repeat;
  background-position: 100%;
  align-items: center;

  @media (min-width: 1440px) {
    position: absolute;
    top: 245%;
    left: 100px;
    width: 1224px;
    height: 396px;
    justify-content: center;
  }
`;

export const Heading2 = styled.h2`
  font-family: "Darker Grotesque";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 100%;
  width: 296px;
  height: 128px;

  margin-top: 1.5rem;

  text-align: center;

  color: #ffffff;

  @media (min-width: 1440px) {
    width: 600px;
    height: 80px;
    font-size: 40px;
  }
`;

export const Paragraph = styled.p`
  width: 296px;
  height: 120px;

  margin-top: 1.5rem;

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  text-align: center;

  color: #ffffff;

  @media (min-width: 1440px) {
    width: 808px;
    height: 48px;
  }
`;
