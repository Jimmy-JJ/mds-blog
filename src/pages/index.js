import React from "react";
import { Link, graphql } from "gatsby";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Moment from "react-moment";

/**
 * React (A library for building UI)
 * Gatsby (A static site generator for React)
 * GraphQL (A query language for your API)
 * Apollo (A state management Library for interacting with your graphql backend)
 */

//  GraphQL query
const APOLLO_QUERY = gql`
  {
    viewAllPosts {
      edges {
        _id
        title
        slug
        content
        image
        category
        createdAt
      }
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(APOLLO_QUERY);

  if (error) {
    console.log(error);
    return (
      <div className="container text-center h-100">
        <h4>Error fetching post</h4>;
      </div>
    );
  }
  if (loading) {
    return (
      <div className="lead text-center d-flex justify-content-center align-items-center py-5 my-5">
        Loading...
      </div>
    );
  }

  return (
    <Layout>
      <SEO title="Collections" />
      <section className="container-fluid p-sm-5">
        {/* <div className="px-sm-5">
          <h4 className="font-weight-light">
            {data.allMarkdownRemark.totalCount} Posts
          </h4>
        </div> */}
        <div className="row px-sm-5">
          {data.viewAllPosts.edges.map(post => {
            return (
              <Link
                to={`/posts/${post.slug}`}
                key={post.slug}
                className="col-12 col-sm-4 pb-5 text-dark"
              >
                {post.image && (
                  <img
                    alt={post.title}
                    src={post.image}
                    className="featured__image mb-3 border w-100"
                  />
                )}
                <p className="text-caption mb-2 text-danger font-weight-semibold">
                  {post.category}
                </p>
                <div className="pb-2">
                  <h3 className="font-weight-bold">{post.title}</h3>
                </div>
                <p>
                  <Moment fromNow date={post.createdAt} />
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
//       totalCount
//       edges {
//         node {
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//             tags
//             featuredImage {
//               childImageSharp {
//                 fluid {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;

// export const Query = graphql`
//   query {
//     Blog {
//       viewAllPosts {
//         edges {
//           _id
//           title
//           slug
//           content
//           image
//           category
//           createdAt
//         }
//       }
//     }
//   }
// `;
