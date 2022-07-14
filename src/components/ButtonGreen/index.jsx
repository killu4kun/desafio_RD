import React from "react";
import { GreenButton } from "./styles";

export default function PrimaryButton({ text, mT }) {
  return (
    <GreenButton mT={mT}>
      <a href="https://app.rdstation.com.br/signup" target="_blank">
        {text}
      </a>
    </GreenButton>
  );
}
