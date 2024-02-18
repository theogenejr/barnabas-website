import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <div className="flex flex-col gap-3 h-screen w-screen justify-center items-center">
      <span className="text-6xl font-black">404</span>
      <span className="text-4xl font-bold text-goodBlue">Page not found</span>
      <div className="flex flex-col items-center font-semibold text-lg">
        <span className="">Looks like somebody pressed the wrong button</span>
        <span className="">Sorry for the incovenience</span>
      </div>
      <Link to="/">
        <button className="bg-goodBlue uppercase px-8 py-3 mt-8 rounded-full font-bold text-white">
          go back home
        </button>
      </Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
