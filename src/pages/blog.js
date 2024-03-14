import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogPostCard from "../components/BlogPostCard"
import { StaticImage } from "gatsby-plugin-image"
import Subscription from "../components/Subscription"
import useLatestBlogPosts from "../hooks/useLatestBlogPosts"

const BlogPage = () => {
  const data = useLatestBlogPosts()

  return (
    <Layout>
      <div className="px-4">
        <div className="h-[calc(100vh-80px)] rounded-3xl overflow-hidden relative my-2 ">
          <div className="w-full h-full bg-black/50 rounded-3xl">
            <StaticImage
              src="../images/art2.jpeg"
              alt="hero image"
              className=" h-full w-full object-cover rounded-3xl grayscale"
            />
          </div>
          <div className="absolute w-full h-full bg-black/40 top-0 left-0 flex items-start pt-48 sm:pt-32 sm:pl-24 pl-6">
            <div className="flex relative flex-col">
              <span className="uppercase text-white text-6xl sm:text-8xl lg:text-9xl font-black z-20">
                blog
              </span>

              <div className="bg-blue-800/50 sm:w-52 w-32 h-32  sm:h-52 md:w-72 md:h-72 absolute right-1/2 left-1/2 -top-10 sm:-right-36 md:-right-56 lg:-right-52 rounded-full z-10 sm:-top-14 md:-top-24 lg:-top-20"></div>
            </div>
          </div>
        </div>
        <div className="my-2 flex justify-center mt-12 font-semibold rounded-2xl">
          <p className="p-4 md:w-2/3 text-xl font-light">
            Welcome to my blog, where I share my insights on life, mindset,
            productivity, survival, and more. Here, you can find inspiration and
            practical tips to help you navigate life's challenges and find your
            way upward. Let's explore together!
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 semiLg:grid-cols-2  md:p-8 mt-8 p-4 my-8">
          {data.allWpPost.nodes.map(post => (
            <BlogPostCard
              key={post.id}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              featuredImage={post.featuredImage.node}
              uri={post.uri}
            />
          ))}
        </div>
        <Subscription />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Blog" />

export default BlogPage
