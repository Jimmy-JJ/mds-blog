import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  console.log(data)
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
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link
              to={node.fields.slug}
              key={node.id}
              className="col-12 col-sm-4 pb-5 text-dark"
            >
              <Img
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                className="featured__image mb-3"
              />
              <p className="text-caption mb-2 text-danger font-weight-semibold">
                {node.frontmatter.tags}
              </p>
              <div className="pb-2">
                <h3 className="font-weight-bold">{node.frontmatter.title}</h3>
              </div>
              <p>{node.frontmatter.date}</p>
              {/* <p>{node.excerpt}</p> */}
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
