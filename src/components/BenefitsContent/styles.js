import styled from "styled-components";

export const Container = styled.div`
  width: 1224px;
  height: 810px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;
