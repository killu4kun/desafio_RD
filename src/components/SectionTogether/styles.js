import styled from "styled-components";

export const Container = styled.div`
  height: 340px;
  width: 360px;
  background-color: #0b485b;

  /* ::before {
    content: "";
    position: absolute;
    border-top: 80px solid #f1f3f5;
    border-right: 80px solid #0b485b;
    width: 0;

  } */

  span {
    font-weight: bold;
  }
`;

export const Heading3 = styled.h3`
  height: 52px;
  width: 328px;
  border-radius: nullpx;

  left: 16px;
  top: 100px;

  font-family: "Darker Grotesque";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 110%;
  /* or 26px */

  /* bw/color-white */

  color: #ffffff;
`;

export const Paragraph = styled.p`
  width: 328px;
  height: 184px;
  left: 16px;
  top: 165px;

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */

  /* bw/color-white */

  color: #ffffff;
`;

export const SecondParagraph = styled(Paragraph)`
  top: 300px;
  font-weight: bold;
`;
