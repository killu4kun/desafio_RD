import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 16px;

  width: 328px;
  height: 374px;

  /* bw/color-white */

  background: #ffffff;
  /* shadow/sm */

  box-shadow: 0px 4px 12px rgba(33, 36, 41, 0.14);
  border-radius: 2px;

  img {
    border-radius: 50%;
    height: 30px;
    width: 24px;
  }

  div {
    display: flex;
    width: 48px;
    height: 48px;
    left: 24px;
    top: 24px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    /* bw/color-gray-10 */

    background: #f1f3f5;
  }
`;

export const Heading3 = styled.h3`
  width: 280px;
  height: 78px;

  font-family: "Darker Grotesque";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 110%;
  /* or 26px */

  display: flex;
  align-items: center;

  color: #212429;
`;

export const Paragraph = styled.p`
  width: 280px;
  height: 168px;

  /* body/md/regular */

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */

  display: flex;
  align-items: center;

  /* bw/color-gray-100 */

  color: #212429;
`;
