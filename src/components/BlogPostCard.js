import React from "react"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

const BlogPostCard = ({ title, date, excerpt }) => {
  return (
    <div className="w-full border-2 border-blue-800 rounded-3xl shadow-md h-fit">
      <div className=" border-b-2 h-96 border-blue-800 border-dotted">
        <StaticImage
          src="../images/son2.jpg"
          alt="smyrna"
          className="h-full rounded-t-3xl"
        />
      </div>
      <div className="p-6 h-1/2">
        <div className="text-[#6b7280] flex flex-wrap mb-6 text-lg gap-4 items-center">
          <span className="">Monday, February 19, 2024</span>
          <div className="w-[2px] h-[2px] rounded-full bg-[#6b7280]"></div>
          <span className="">3 Min Read</span>
        </div>
        <div className="text-[#141414] cursor-pointer text-3xl font-bold">
          Discovering new ideas on hello world.
        </div>
        <div className="text-[#6b7280] text-xl mt-2 text-ellipsis overflow-hidden">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
          perferendis! Tempore facilis pariatur praesentium minima minus
          voluptas asperiores dolores? Unde veritatis at autem consequatur
          cupiditate, vero amet iure iste non.
        </div>
        <div className="my-6 group text-blue-500 transition-all duration-300 ease-in-out w-fit">
          <div className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out capitalize cursor-pointer font-bold text-lg">
            read more
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostCard
