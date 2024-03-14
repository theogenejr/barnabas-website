// import { Link } from "gatsby"
import React from "react"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import RecentBlogPosts from "./RecentBlogPosts"

const WelcomingSection = () => {
  return (
    <div className="py-2 md:py-16">
      <div className="flex flex-col uppercase sm:mb-24 mb-8">
        <span className="text-4xl font-black">Madan ILOT</span>
        <span className="text-xl font-bold">(That's Hello in Bari)</span>
        <motion.div
          initial={{ height: 16, width: 0 }}
          whileInView={{ height: 16, width: 100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className=" bg-goodBlue"
        ></motion.div>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:gap-16">
        <motion.div className="flex flex-col md:flex-row md:even:flex-row-reverse w-full  md:h-[80vh] gap-6 items-center ">
          <div className="md:w-1/2  rounded-2xl overflow-hidden max-h-96">
            <StaticImage
              src="../images/img3.jpg"
              className=" w-full h-full object-cover"
              alt="descriptive image"
            />
          </div>
          <div className="md:w-1/2 mb-10">
            <p className="text-base md:text-base lg:text-lg">
              Welcome! I'm Barnabas Samuel, a musician, community activist, and
              changemaker. My life has faced numerous challenges, including
              being a refugee twice and experiencing homelessness. Yet, these
              experiences fuel my commitment to uplifting others and changing
              the narrative for those struggling. Explore my website to learn
              about my music, community work, and personal journey. I invite you
              to join me on a path of growth, learning, and making a positive
              impact. Thank you for visiting! I believe you'll find something
              inspiring here.
            </p>
            <div className="mt-4">
              <Link to="/about" className="">
                <span className=" capitalize hover:text-goodBlue transition duration-200 font-bold underline">
                  Read More about my story
                </span>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div className="flex flex-col md:flex-row md:even:flex-row-reverse w-full  md:h-[80vh] gap-6 items-center ">
          <div className="md:w-1/2 p-x-4 rounded-2xl overflow-hidden max-h-96">
            <StaticImage
              src="../images/bsf-img01.jpg"
              className=" w-full h-full object-cover"
              alt="descriptive image"
            />
          </div>
          <div className="md:w-1/2 ">
            <p className="text-base md:text-base lg:text-lg">
              My foundation empowers individuals to lead fulfilling lives. I
              believe everyone deserves a chance at a healthy, meaningful
              existence. Through collaboration and support, we can build a
              brighter future, together.
            </p>
            <p>
              Learn more about the {""}
              <Link to="/about" className="">
                <span className=" capitalize hover:text-goodBlue transition duration-200 font-bold underline">
                  Barnabas Samuel Foundation.
                </span>
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div className="flex mt-20 flex-col w-full gap-6 items-center ">
        <div className="md:w-1/2 mb-4">
          <p className="text-lg font-bold mb-2 lg:text-2xl text-center">
            Read Professional Advice & Personal Stories on my Blog
          </p>
          <div className="text-xs sm:text-sm text-center">
            Dive into my blog and discover a unique perspective on overcoming
            challenges, embracing resilience, and making a positive impact
          </div>
        </div>
        <div className="text-center flex flex-col items-center w-full">
          <RecentBlogPosts />

          <div className="mt-2 underline underline-offset-8 font-semibold capitalize hover:text-goodBlue cursor-pointer">
            <Link to="/blog">See more blog posts</Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default WelcomingSection
