/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import Navbar from "./Navbar"
import { Footer } from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="scroll-smooth font-sofia bg-blue-50">
      <Navbar />
      <div>
        <main className="py-16">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
