import React from "react";
import { Layout, RichText, SeoData } from "components";
import { graphql } from "gatsby";

const ContentfulPage = ({ data }) => {
  const {
    contentfulPage: { title, description, content },
  } = data;

  return (
    <Layout>
      <SeoData title={title} description={description} />
      {!!content && (
        <RichText content={content.raw} references={content.references} />
      )}
    </Layout>
  );
};

export default ContentfulPage;

// You can export a graphQL query from page components and Gatsby
// automatically injects the data from the query in to the props
export const query = graphql`
  query PageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      id
      slug
      title
      description
      content {
        raw
        references {
          ... on ContentfulHero {
            __typename
            contentful_id
            heading
            subheading
            backgroundImage {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
          ... on ContentfulAsset {
            contentful_id
            title
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
