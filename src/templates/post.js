import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />{" "}
      <section className="container-fluid py-5 p-sm-5">
        <div className="row px-sm-5 pb-5 article">
          <div className="col-12 col-sm-10 col-lg-8 col-xl-7 mx-auto text-sm-center pb-5">
            <h1 className="font-weight-bolder display-34 mt-sm-5 mb-3">
              {post.frontmatter.title}
            </h1>
            <p className="text-secondary mb-2">
              📆&nbsp;{post.frontmatter.date}
            </p>
          </div>
          <figure className="col-12 px-0 px-sm-4 pb-5">
            <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
            <figcaption className="text-center mt-3 text-secondary">
              Image courtesy of Cezer.
            </figcaption>
          </figure>
          <div className="w-100" />
          <div className="col-12 col-sm-10 col-lg-8 col-xl-7 mx-auto">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "dddd DD, MMM YYYY")
        tags
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
