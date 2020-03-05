import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Moment from "react-moment";

const Post = props => {
  // graphql query
  const { loading, error, data } = useQuery(gql`
    {
      postWithId(slug: "${props.slug}") {
        image
        slug
        is_published
        createdAt
        updatedAt
        content
        title
        category
      }
    }
  `);

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

  return (
    <section className="container-fluid py-5 p-sm-5">
      <div className="row px-sm-5 pb-5 article">
        <div className="col-12 col-sm-10 col-lg-8 col-xl-7 mx-auto text-sm-center pb-5">
          <h1 className="font-weight-bolder display-34 mt-sm-5 mb-3">
            {data.postWithId.title}
          </h1>
          <p className="text-secondary mb-2">
            📆&nbsp;
            <Moment fromNow date={data.postWithId.createdAt} />
          </p>
        </div>

        {data.postWithId.image && (
          <figure className="col-12 px-0 px-sm-4 pb-5 text-center">
            <img className="img-fluid" src={data.postWithId.image} />
            <figcaption className="mt-3 text-secondary">
              Image courtesy of Cezer.
            </figcaption>
          </figure>
        )}

        <div className="w-100" />
        <div className="col-12 col-sm-10 col-lg-8 col-xl-7 mx-auto">
          {data.postWithId.content}
        </div>
      </div>
    </section>
  );
};

export default Post;
