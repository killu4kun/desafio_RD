import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 360px;
  height: 802px;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  width: 328px;
  height: 96px;
  margin-bottom: 1rem;

  font-family: "Darker Grotesque";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 100%;

  color: #212429;
`;

export const Paragraph = styled.p`
  width: 328px;
  height: 66px;

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;

  color: #212429;
`;

export const imgsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 30px;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;

  div {
    display: flex;
    flex-direction: column;
    text-align: center;

    span {
      margin-top: 1rem;
    }
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .div3 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div4 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .div5 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .div6 {
    grid-area: 3 / 2 / 4 / 3;
  }
  .div7 {
    grid-area: 4 / 1 / 5 / 2;
  }
  .div8 {
    grid-area: 4 / 2 / 5 / 3;
  }
  .div9 {
    grid-area: 5 / 1 / 6 / 2;
  }
  .div10 {
    grid-area: 5 / 2 / 6 / 3;
  }

  img {
    height: 40.00032043457031px;
    width: 40.0000114440918px;
    margin: 0 auto;
  }
`;
