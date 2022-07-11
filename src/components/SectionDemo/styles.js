import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 390px;
  border: 1px solid green;
  align-items: center;
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