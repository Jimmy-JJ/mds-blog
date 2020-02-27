const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `content` });
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug
//     });
//   }
// };
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  console.log("Im here");
  try {
    const data = await graphql(`
      query {
        viewAllPosts {
          edges {
            _id
            title
            content
            image
            category
            createdAt
          }
        }
      }
    `);
    data.viewAllPosts.edges.forEach(({ edges }) => {
      createPage({
        path: edges._id,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: edges.slug
        }
      });
    });
    console.log(data);
  } catch (err) {
    console.log(err);
    return null;
  }
};

// exports.createResolvers = ({
//   actions,
//   cache,
//   createNodeId,
//   createResolvers,
//   store,
//   reporter
// }) => {
//   const { createNode } = actions;
//   createResolvers({
//     Blog_postWithId: {
//       createdAt: {
//         type: `String`,
//         resolve(source, args, context, info) {
//           return dateformat(source.date, `fullDate`);
//         }
//       },
//       post: {
//         resolve(source, args, context, info) {
//           return remark()
//             .use(html)
//             .processSync(source.post).contents;
//         }
//       }
//     },
//     Blog_Asset: {
//       imageFile: {
//         type: `File`,
//         // projection: { url: true },
//         resolve(source, args, context, info) {
//           return createRemoteFileNode({
//             url: source.url,
//             store,
//             cache,
//             createNode,
//             createNodeId,
//             reporter
//           });
//         }
//       }
//     }
//   });
// };
