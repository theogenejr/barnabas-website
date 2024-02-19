import React from "react"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

const BlogPostCard = () => {
  return (
    <motion.div
      initial={{ translateY: 0 }}
      whileHover={{ translateY: -5 }}
      className="relative flex-grow bg-white cursor-pointer hover:shadow-lg hover:shadow-blue-200 h-[85vh] border-[1px] border-goodBlue md:min-w-[400px] md:max-w-[500px] rounded-2xl"
    >
      <div className="absolute h-full w-full rounded-2xl">
        <StaticImage
          src="../images/son2.jpg"
          alt="blog-image"
          className="h-full w-full rounded-2xl"
        />
      </div>
      <div className="rounded-b-2xl absolute bottom-0 h-1/2 flex items-end bg-gradient-to-t from-blue-600/90 to-transparent text-white text-4xl font-extrabold left-0 p-2 pb-8">
        <h1>Smyrna My Son: Name and Song meaning</h1>
      </div>
    </motion.div>
  )
}

export default BlogPostCard
