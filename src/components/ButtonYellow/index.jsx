import React from "react";
import { YellowButton } from "./styles";

export default function SecondaryButton({ text, mT }) {
  return (
    <YellowButton mT={mT}>
      <a href="https://app.rdstation.com.br/signup" target="_blank">
        {text}
      </a>
    </YellowButton>
  );
}
