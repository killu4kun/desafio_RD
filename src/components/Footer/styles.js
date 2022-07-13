import styled from "styled-components";

export const Content = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    width: 90%;
    height: 50%;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid white;
  }
`;

export const Container = styled.footer`
  display: flex;
  height: 221px;
  width: 360px;
  border-radius: 0px;
  background-color: #19c1ce;
  flex-direction: column;

  align-items: center;

  @media (min-width: 1440px) {
    position: absolute;
    top: 365%;
    width: 100%;
  }

  .alternative-logo {
    width: 174px;
    height: 32px;
  }
`;

export const imgContainer = styled.div`
  display: flex;
  height: 50%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  width: 90%;

  @media (min-width: 1440px) {
    border-bottom: 1px solid #19c1ce;
  }

  ::after {
    border: 1px solid yellow;
    width: 100px;
  }
`;

export const socialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  width: 70%;
  height: 40px;

  img {
    height: 100%;
    width: 100%;
  }

  img:first-of-type {
    height: 70%;
  }
`;

export const Copyright = styled.p`
  padding-top: 1rem;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;

  @media (min-width: 1440px) {
    width: 90%;
    text-align: end;
  }

  .bold-text-footer {
    text-decoration: none;
    font-weight: bold;
  }
  span {
    text-decoration: underline;
  }
`;
