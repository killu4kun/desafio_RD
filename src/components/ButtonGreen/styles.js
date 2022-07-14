import styled from "styled-components";

export const GreenButton = styled.button`
  height: 44px;
  width: 256px;

  border-radius: 0px;
  background-color: #19c1ce;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 150%;

  margin-top: ${(props) => props.mT};

  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #212429;

  a {
    text-decoration: none;
    color: #212429;
  }
`;
