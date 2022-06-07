import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Hero } from "components";

import { Wrapper, Content } from "./style";

export const RichText = ({ content, references = [] }) => {
  const referencesMap = {};

  references.forEach((reference) => {
    referencesMap[reference.contentful_id] = reference;
  });

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const data = referencesMap[node.data.target.sys.id];

        return (
          <Content>
            <GatsbyImage alt={data.title} image={data.gatsbyImageData} />
          </Content>
        );
      },

      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const data = referencesMap[node.data.target.sys.id];

        if (data.__typename !== "ContentfulHero") {
          return null;
        }

        const {
          heading,
          subheading,
          backgroundImage: { gatsbyImageData },
        } = data;

        return (
          <Hero
            heading={heading}
            subheading={subheading}
            backgroundImage={gatsbyImageData}
          />
        );
      },
    },
  };

  return (
    <Wrapper>{documentToReactComponents(JSON.parse(content), options)}</Wrapper>
  );
};
