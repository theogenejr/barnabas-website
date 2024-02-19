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
      <motion.div
        initial={{ height: 0, borderRadius: 0 }}
        animate={{ height: "100%", borderRadius: "1.5rem" }}
        transition={{ duration: 1 }}
        className="mx-4 mt-2 relative max-h-96 rounded-3xl bg-blue-900"
      >
        <StaticImage
          src="../images/art2.jpeg"
          alt="banner-image"
          className="h-full w-full object-cover max-h-96 rounded-3xl mix-blend-overlay"
        />
        <div className="absolute top-1/2 bottom-1/2 left-1/2 right-1/2 capitalize font-black text-white text-6xl sm:text-9xl flex items-center justify-center">
          blog
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
      <div className="flex flex-col md:flex-row flex-wrap md:mx-24 mt-16 mx-4 my-8 gap-16">
        <BlogPostCard />
      </div>
      <Subscription />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Blog" />

export default BlogPage
