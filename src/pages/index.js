import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroWords from "../components/HeroWords"
import HeroBg from "../components/HeroBg"
import WelcomingSection from "../components/WelcomingSection"
import Subscription from "../components/Subscription"

const ContactPage = () => (
  <Layout>
    <div className="flex items-center justify-between my-2 mx-4 h-[calc(100vh-80px)] relative">
      <HeroBg />
      <HeroWords />
    </div>
    <div className=" min-w-screen mx-2 sm:mx-4 border-x-2 border-goodBlue py-4 px-2 sm:px-8 mt-8 sm:mb-4">
      <WelcomingSection />
    </div>
    <div className="mt-24">
      <Subscription />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default ContactPage
