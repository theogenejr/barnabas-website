// import { Link } from "gatsby"
import React from "react"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import RecentBlogPosts from "./RecentBlogPosts"

const WelcomingSection = () => {
  return (
    <div className="py-2 md:py-8">
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
        <motion.div className="flex flex-col md:flex-row md:even:flex-row-reverse w-full  md:h-[80vh] gap-10 items-center ">
          <motion.div
            initial={{ translateY: 150, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:w-1/2  rounded-2xl overflow-hidden max-h-96"
          >
            <StaticImage
              src="../images/img3.jpg"
              className=" w-full h-full object-cover"
              alt="descriptive image"
            />
          </motion.div>
          <motion.div
            initial={{ translateY: 150, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-10"
          >
            <p className="text-sm md:text-base leading-loose lg:text-lg">
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
            <div className="mt-8">
              <Link to="/about" className="flex items-center w-fit gap-4 group">
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
                  Read More about my story
                </span>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="flex flex-col md:flex-row md:even:flex-row-reverse w-full  md:h-[80vh] gap-10 items-center ">
          <motion.div
            initial={{ translateY: 150, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:w-1/2 p-x-4 rounded-2xl overflow-hidden max-h-96"
          >
            <StaticImage
              src="../images/bsf-img01.jpg"
              className=" w-full h-full object-cover"
              alt="descriptive image"
            />
          </motion.div>
          <motion.div
            initial={{ translateY: 150, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2 "
          >
            <p className="text-sm md:text-base lg:text-lg">
              My foundation empowers individuals to lead fulfilling lives. I
              believe everyone deserves a chance at a healthy, meaningful
              existence. Through collaboration and support, we can build a
              brighter future, together.
            </p>

            <div className="mt-8">
              <a
                href="https://bsf.barnabas.one/"
                target="_blank"
                className="flex items-center w-fit gap-4 group"
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
                  Learn More about the Barnabas Samuel Foundation
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ translateY: 150, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex mt-24 flex-col w-full gap-6 items-center "
      >
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

          <div className="mt-4">
            <Link to="/blog" className="flex items-center w-fit gap-4 group">
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
                See more of my stories
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default WelcomingSection
