import React from "react";
import { graphql } from "gatsby";
import { Layout, SeoData, RichText } from "components";

const Post = ({ data }) => {
  const {
    contentfulPost: { title, description, content },
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

export const query = graphql`
  query PostQuery($id: String) {
    contentfulPost(contentful_id: { eq: $id }) {
      slug
      publishedDate(formatString: "DD MMM YYYY")
      contentful_id
      description
      title
      content {
        raw
      }
    }
  }
`;

export default Post;
