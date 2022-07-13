import styled from "styled-components";

export const Content = styled.div`
  @media (min-width: 1440px) {
    position: absolute;
    top: 10%;
    left: 60%;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  height: 1030px;
  width: 360px;
  align-items: center;

  background-color: #f1f3f5;

  @media (min-width: 1440px) {
    position: absolute;
    width: 100vw;
    top: 90%;
  }

  .container {
    height: 504px;
    width: 328px;
  }

  .content {
    display: flex;
    flex-direction: row;
    height: 72px;
    width: 328px;
    margin-top: 1.5rem;
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    gap: 0.7rem;

    @media (min-width: 1440px) {
      width: 496px;
      height: 48px;
    }
  }

  .space {
    margin-top: 3rem;
  }

  span {
    font-weight: bold;
  }

  img {
    height: 24px;
    width: 24px;
  }

  .girl {
    height: 325px;
    width: 325px;

    @media (min-width: 1440px) {
      width: 600px;
      height: 600px;
    }
  }

  .girl-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    height: 500px;
    width: 100%;
    z-index: 1;

    @media (min-width: 1440px) {
      position: absolute;
      left: -20%;
      top: 7%;
      background-color: none;
    }
  }
`;

export const Heading3 = styled.h3`
  width: 328px;
  height: 70px;

  font-family: "Darker Grotesque";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 110%;

  text-align: center;

  display: flex;
  align-items: center;

  color: #000000;

  @media (min-width: 1440px) {
    font-size: 32px;
    width: 496px;
    height: 72px;
    margin-bottom: 1rem;
  }
`;

export const Subtitle = styled.sub`
  width: 328px;
  height: 17px;

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  /* identical to box height, or 17px */

  text-align: center;

  /* bw/color-gray-100 */

  color: #212429;

  margin-bottom: 1rem;

  @media (min-width: 1440px) {
    font-size: 20px;
    width: 495px;
  }
`;
