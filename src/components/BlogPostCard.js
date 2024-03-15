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
    <div className="w-full border-2 border-blue-800 rounded-3xl shadow-md">
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
        <Link to={`/blog${uri}`} as={GatsbyImage}>
          <div className=" my-6 group text-blue-500 transition-all duration-300 ease-in-out w-fit">
            <div className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out capitalize cursor-pointer font-bold text-lg">
              read more
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default BlogPostCard
