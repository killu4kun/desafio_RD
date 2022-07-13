import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 1519px;
  width: 360px;
  align-items: center;

  background: #f1f3f5;

  @media (min-width: 1440px) {
    width: 100vw;
  }

  span {
    color: #19c1ce;
  }
`;

export const Heading1 = styled.h1`
  height: 120px;
  width: 328px;

  @media (min-width: 1440px) {
    position: absolute;
    left: 108px;
    top: 200px;
    width: 600px;
    height: 112px;

    width: 600px;
    height: 112px;
    left: 108px;
    top: 200px;

    /* heading/lg/normal */

    font-family: "Darker Grotesque";
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 100%;
    /* or 56px */
  }

  font-family: "Darker Grotesque";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 100%;
  /* or 40px */

  /* bw/color-gray-100 */

  color: #212429;
`;

export const Paragraph = styled.p`
  height: 96px;
  width: 328px;

  @media (min-width: 1440px) {
    position: absolute;
    width: 600px;
    height: 90px;
    left: 108px;
    top: 352px;

    width: 600px;
    height: 90px;
    left: 108px;
    top: 352px;

    /* body/lg/regular */

    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
  }

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */

  /* bw/color-gray-100 */

  color: #212429;
`;
