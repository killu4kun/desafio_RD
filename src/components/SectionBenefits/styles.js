import styled from "styled-components";

export const Container = styled.section`
  width: 360px;
  height: 558px;

  @media (min-width: 1440px) {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    top: 168%;
    height: 954px;
  
  }
`;

export const Heading2 = styled.h2`
  font-family: "Darker Grotesque";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 100%;

  width: 328px;
  height: 96px;
  margin-bottom: 1rem;
  /* or 32px */

  display: flex;
  align-items: center;

  /* bw/color-gray-100 */

  color: #212429;
`;
