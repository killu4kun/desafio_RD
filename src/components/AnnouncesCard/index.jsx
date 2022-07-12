import React from "react";
import { Container, Heading3, Paragraph } from "./styles";

export default function AnnouncesCard({ src, title, content, alt }) {
  return (
    <Container>
      <div>
        <img src={src} alt={alt} />
      </div>
      <Heading3>{title}</Heading3>
      <Paragraph>{content}</Paragraph>
    </Container>
  );
}
