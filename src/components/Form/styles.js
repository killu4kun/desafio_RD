import styled from "styled-components";

export const Content = styled.div`
  @media (min-width: 1440px) {
    position: absolute;
    top: 130px;
    
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;

  height: 1119px;
  width: 328px;

  box-shadow: 0px 4px 12px rgba(33, 36, 41, 0.14);
  border-radius: 2px;

  @media (min-width: 1440px) {
    position: absolute;
    width: 496px;
    height: 1083px;
    left: 836px;
    top: 120px;
    z-index: 2;
  }

  h4 {
    font-family: "Darker Grotesque";
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 110%;
    /* or 22px */

    text-align: center;
    padding-bottom: 1.3rem;

    /* bw/color-gray-100 */

    color: #212429;
  }

  subtitle {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;

    text-align: center;

    color: #7e8a98;

    @media (min-width: 1440px) {
      position: absolute;
      left: 90px;
    }
  }

  input[type="text"],
  select {
    height: 40px;
    width: 280px;
    border: 2px solid #000000;
    box-shadow: inset 6px 6px 0px #eefbfb;
  }

  label {
    margin-left: 10px;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }

  p {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    /* or 18px */

    /* bw/color-gray-70 */

    color: #7e8a98;
    padding-bottom: 1rem;
  }

  a {
    color: #19c1ce;
    text-decoration: underline;
  }

  .terms-div {
    margin-top: 1rem;
    height: 126px;
    width: 280px;
    margin-bottom: 3rem;
  }

  button {
    height: 44px;
    width: 281px;
    background-color: #f2bf4e;
    color: #212429;

    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

export const Label = styled.label`
  width: 280px;
  height: 24px;

  /* text-md/bold */

  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* bw/color-black */

  color: #000000;
`;

export const Heading = styled.div`
  height: 109px;
  width: 280px;

  border-bottom: 1px solid #cfd3d8;

  margin-bottom: 2rem;

  @media (min-width: 1440px) {
    position: absolute;
    width: 448px;
    height: 109px;
    left: 35px;
    top: 25px;
  }
`;
