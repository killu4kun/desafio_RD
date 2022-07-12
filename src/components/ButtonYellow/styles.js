import styled from "styled-components";

export const YellowButton = styled.button`
  height: 44px;
  width: 256px;

  border-radius: 0px;
  background-color: #f2bf4e;
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
`;
