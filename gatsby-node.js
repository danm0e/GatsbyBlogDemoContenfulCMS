const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const {
    data: { contentfulBlog, allContentfulPost },
  } = await graphql(`
    {
      contentfulBlog {
        postsPerPage
        slug
        title
      }
      allContentfulPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
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
      }
    }
  `);

  const { title, slug, postsPerPage } = contentfulBlog;
  const posts = allContentfulPost.edges;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  posts.forEach((post) => {
    createPage({
      path: `${slug}/${post.node.slug}`,
      context: {
        id: post.node.contentful_id,
      },
      component: path.resolve("./src/templates/Post/index.js"),
    });
  });

  Array.from({ length: totalPages }).forEach((_, i) => {
    const from = i * postsPerPage;
    const to = from + postsPerPage;
    const paginatedPosts = posts.map((post) => post.node).slice(from, to);

    createPage({
      path: `${slug}${i === 0 ? "" : `/${i + 1}`}`,
      component: path.resolve("./src/templates/Blog/index.js"),
      context: {
        title,
        slug,
        totalPages,
        currentPage: i + 1,
        posts: paginatedPosts,
      },
    });
  });
};
