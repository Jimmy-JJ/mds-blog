import React from "react";
import { Link } from "gatsby";
//=========================//
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Moment from "react-moment";
//=============================//
import Layout from "../components/layout";
import SEO from "../components/seo";

const FETCHBYCATEGORY = gql`
  {
    viewPublishedPostByCategory(category: "Tips and Tricks") {
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

const Tips = props => {
  // =================================
  const { loading, error, data } = useQuery(FETCHBYCATEGORY);

  if (loading) {
    return (
      <div className="lead text-center d-flex justify-content-center align-items-center py-5 my-5">
        Loading...
      </div>
    );
  }

  if (error) {
    return <h2>Error fetch post</h2>;
  }

  // ============================

  return (
    <Layout>
      <SEO title="Tips and Tricks" />
      {/* ========================== */}
      <section className="container-fluid p-sm-5">
        <div className="row px-sm-5">
          {data.viewPublishedPostByCategory.edges.map(post => {
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
                    className="featured__image mb-3 px-4 border w-100"
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

      {/* ========================== */}
    </Layout>
  );
};

export default Tips;
