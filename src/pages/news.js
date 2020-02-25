import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const News = () => (
  <Layout>
    <SEO title="News &amp; Updates" />
    <section className="container-fluid p-sm-5">
      <div className="row px-sm-5">
        <div className="col-12">
          <h1 className="font-weight-bolder">News</h1>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default News
