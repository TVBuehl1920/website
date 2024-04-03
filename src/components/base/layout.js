import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "./header"
import Footer from "./footer"


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

  return (
    <div className="container-fluid p-0">
      <Analytics />
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
