import React from "react";
import { YellowButton } from "./styles";

export default function SecondaryButton({ text, mT }) {
  return <YellowButton mT={mT}>{text}</YellowButton>;
}
