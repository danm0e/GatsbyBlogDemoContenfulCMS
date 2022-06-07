import React from "react";
import { Layout, Seo } from "components";

import {
  Content,
  Post,
  Title,
  Description,
  Date,
  Pagination,
  PageLink,
} from "./style";

const Blog = ({ pageContext }) => {
  const { title, posts, slug, totalPages, currentPage } = pageContext;

  return (
    <Layout>
      <Seo title={title} description={""} />
      <Content>
        <h1>{title}</h1>

        {posts.map(
          ({ contentful_id, slug: url, title, description, publishedDate }) => (
            <Post key={contentful_id} to={`/${slug}/${url}`}>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <Date>{publishedDate}</Date>
            </Post>
          )
        )}

        <Pagination>
          {Array.from({ length: totalPages }, (_, i) => {
            const count = i + 1;
            const isActive = currentPage === count;

            return (
              <PageLink
                key={`page-no-${count}`}
                to={`/${slug}/${i === 0 ? "" : count}`}
                active={`${isActive}`}
              >
                {count}
              </PageLink>
            );
          })}
        </Pagination>
      </Content>
    </Layout>
  );
};

export default Blog;
