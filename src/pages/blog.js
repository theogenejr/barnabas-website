import * as React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogPostCard from "../components/BlogPostCard"
import { StaticImage } from "gatsby-plugin-image"
import Subscription from "../components/Subscription"

const BlogPage = () => (
  <Layout>
    <div className="">
      <motion.div className="mx-4 mt-2 relative max-h-96 rounded-3xl bg-gray-700">
        <StaticImage
          src="../images/art2.jpeg"
          alt="banner-image"
          className="h-full w-full object-cover max-h-96 rounded-3xl mix-blend-overlay"
        />
        <div className="absolute rounded-3xl w-full h-full bg-black/30 top-0 left-0 flex items-start pt-32 sm:pt-32 sm:pl-24 pl-6">
          <div className="flex relative ">
            <span className="uppercase text-white text-6xl sm:text-8xl lg:text-9xl font-black z-20">
              blog
            </span>
            <div className="bg-blue-800/50 sm:w-52 w-32 h-32  sm:h-52 md:w-72 md:h-72 absolute right-1/2 left-1/2 -top-10 sm:-right-36 md:-right-56 lg:-right-52 rounded-full z-10 sm:-top-14 md:-top-24 lg:-top-20"></div>
          </div>
        </div>
      </motion.div>
      <div className="mx-4 my-2 border-blue-200 bg-white border-[1px] font-semibold rounded-2xl shadow-md">
        <p className="p-4">
          Welcome to my blog, where I share my insights on life, mindset,
          productivity, survival, and more. Here, you can find inspiration and
          practical tips to help you navigate life's challenges and find your
          way upward. Let's explore together!
        </p>
      </div>
      <div className="flex flex-col justify-center md:flex-row flex-wrap md:mx-24 mt-16 mx-4 my-8 gap-16">
        <BlogPostCard />
      </div>
      <Subscription />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Blog" />

export default BlogPage
