import React from "react"
import { motion } from "framer-motion"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const BlogPostCard = ({
  title,
  date,
  excerpt,
  featuredImage,
  uri,
  readTime,
}) => {
  const formatDate = dateString => {
    const dateObj = new Date(dateString)
    const weekday = dateObj.toLocaleDateString("en-US", { weekday: "long" })
    const month = dateObj.toLocaleDateString("en-US", { month: "long" })
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()

    return `${weekday}, ${month} ${day}, ${year}`
  }

  return (
    <div className="w-full hover:-translate-y-1 border-[1px] transition duration-500 group/wrapper border-blue-800 rounded-3xl shadow-md shadow-goodBlue/10">
      <div className=" border-b-2 rounded-t-3xl overflow-hidden h-56 sm:h-96 border-blue-800 border-dotted">
        <GatsbyImage
          image={featuredImage}
          src={featuredImage.sourceUrl}
          alt={title}
          className="h-full"
        />
      </div>
      <div className="relative p-2 md:p-6 h-1/2">
        <div className="text-[#6b7280] flex flex-wrap mb-6 text-lg gap-4 items-center">
          <span className="">{formatDate(date)}</span>
          <div className="w-[2px] h-[2px] rounded-full bg-[#6b7280]"></div>
          <span className="">{readTime} Min Read</span>
        </div>
        <Link to={`/blog${uri}`} as={GatsbyImage}>
          <div className="text-[#141414] cursor-pointer text-xl sm:text-3xl font-bold">
            {title}
          </div>
        </Link>
        <div
          className="text-[#6b7280] text-base sm:text-xl mt-2 text-ellipsis overflow-hidden"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <Link
          to={`/blog${uri}`}
          as={GatsbyImage}
          className="w-fit flex items-center gap-4 mt-10 group"
        >
          <div className="rounded-full bg-goodBlue/50 group-hover:bg-goodBlue transition duration-500 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 p-2 text-white"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </div>
          <span className=" capitalize group-hover:text-goodBlue transition duration-500 font-bold text-lg">
            Read More
          </span>
        </Link>
      </div>
    </div>
  )
}

export default BlogPostCard
