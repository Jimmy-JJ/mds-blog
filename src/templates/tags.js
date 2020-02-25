import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  <Layout>
    <SEO title="Tips and Tricks" />
    <section className="container-fluid p-sm-5">
      <div className="row px-sm-5">
        <div className="col-12">
          <h1 className="font-weight-bolder">Tips and Tricks</h1>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    </section>
  </Layout>
)
