import React from "react";
import { BgImage } from "gbimage-bridge";
import { getImage } from "gatsby-plugin-image";

import { Wrapper, Content, Heading, SubHeading } from "./style";

export const Hero = ({ heading, subheading, backgroundImage }) => {
  const pluginImage = getImage(backgroundImage);

  return (
    <Wrapper>
      <BgImage image={pluginImage}>
        <Content>
          <Heading>{heading}</Heading>
          <SubHeading>{subheading}</SubHeading>
        </Content>
      </BgImage>
    </Wrapper>
  );
};
