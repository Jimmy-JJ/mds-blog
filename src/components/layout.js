/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useLayoutEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./index.css"
import "./custom.css"

function $$(el) {
  return document.querySelector(el)
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= $$("nav").offsetHeight) {
        $$("body").classList.add("collapsed__navbar")
      } else {
        $$("body").classList.remove("collapsed__navbar")
      }
    }

    window.addEventListener("scroll", handleScroll, {
      capture: true,
      passive: true,
    })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main> {children} </main> <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
