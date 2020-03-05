const path = require("path");

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/posts/)) {
    createPage({
      path: "/posts",
      matchPath: "/posts/*",
      component: path.resolve("src/pages/posts.js")
    });
  }
};
