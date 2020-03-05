import React from "react";
import { Router } from "@reach/router";
import Post from "../components/post";
import SEO from "../components/seo";
import Layout from "../components/layout";

const Posts = props => {
  return (
    <Layout>
      <SEO title="Collections" />
      <Router>
        <Post path="/posts/:slug" />
      </Router>
    </Layout>
  );
};

export default Posts;
