import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="container-fluid p-sm-5">
      <div
        className="row justify-content-center px-sm-5"
        style={{ minHeight: `50vh` }}
      >
        <div className="col-12 col-sm-6 m-auto">
          <h1 className="display-34 font-weight-bolder">NOT FOUND</h1>
          <p>You just hit a route that does not&#39;t exist... the sadness.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
