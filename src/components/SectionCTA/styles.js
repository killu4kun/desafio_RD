import styled from "styled-components";
import imageGraph from "../../assets/graphs.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 408px;
  width: 328px;
  background-image: url(${imageGraph});
  background-repeat: no-repeat;
  background-position: center;
  align-items: center;
  margin-left: 1.3rem;
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
`;

export const Paragraph = styled.p`
  width: 296px;
  height: 120px;
  left: 16px;
  top: 184px;

  margin-top: 1.5rem;

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  text-align: center;

  color: #ffffff;
`;
