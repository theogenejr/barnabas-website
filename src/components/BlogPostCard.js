import React from "react"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

const BlogPostCard = () => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.005 }}
      className="relative flex-grow bg-white cursor-pointer hover:shadow-xl hover:shadow-blue-200 h-[85vh] border-[1px] border-goodBlue md:min-w-[400px] md:max-w-[500px] rounded-2xl"
    >
      <div className="absolute h-full w-full rounded-2xl">
        <StaticImage
          src="../images/son2.jpg"
          alt="blog-image"
          className="h-full w-full rounded-2xl"
        />
      </div>
      <div className="rounded-b-2xl flex-col absolute bottom-0 h-1/2 flex justify-end bg-gradient-to-t from-black/60 to-transparent text-white  left-0 px-4 pb-6">
        <h1 className="text-4xl font-extrabold">
          Smyrna My Son: Name and Song meaning
        </h1>
        <div className="flex justify-between mt-4">
          <span>5 min read</span>
          <div className="text-white w-5 h-w-5 mr-8 relative">
            <span className="absolute -bottom-2 -right-2">5</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BlogPostCard
