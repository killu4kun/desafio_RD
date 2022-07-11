import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  height: 221px;
  width: 100vw;
  border-radius: 0px;
  background-color: #19c1ce;
  flex-direction: column;

  align-items: center;

  .alternative-logo {
    width: 100%;
    height: 50px;
  }
`;

export const imgContainer = styled.div`
  display: flex;
  height: 50%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  width: 90%;
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

  .bold-text-footer {
    text-decoration: none;
    font-weight: bold;
  }
  span {
    text-decoration: underline;
  }
`;
