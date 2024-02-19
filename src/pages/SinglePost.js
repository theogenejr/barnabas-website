import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SinglePost = () => (
  <Layout>
    <h1>Hi from the shop page</h1>
    <p>Welcome to shop</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Shop" />

export default SinglePost
