import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutHero from "../components/AboutHero"
import AboutSlides from "../components/AboutSlides"

const About = () => (
  <Layout>
    <AboutHero />
    <AboutSlides />
  </Layout>
)

export const Head = () => <Seo title="About" />

export default About
