import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroWords from "../components/HeroWords"
import HeroBg from "../components/HeroBg"
import { StaticImage } from "gatsby-plugin-image"
import WelcomingSection from "../components/WelcomingSection"

const ContactPage = () => (
  <Layout>
    <div className="flex items-center justify-between my-2 mx-4 h-[calc(100vh-100px)] relative">
      <HeroBg />
      <HeroWords />
    </div>
    <div className="w-full min-w-screen bg-goodBlue py-8 px-8 rounded-3xl mb-10">
      <WelcomingSection />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default ContactPage
