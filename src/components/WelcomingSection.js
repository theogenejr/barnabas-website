// import { Link } from "gatsby"
import React, { useRef } from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import RecentBlogPosts from "./RecentBlogPosts"

const WelcomingSection = () => {
  const targetRef1 = useRef(null)
  const targetRef2 = useRef(null)
  const targetRef3 = useRef(null)

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: targetRef1,
    smooth: true,
    offset: ["start end", "center start"],
  })

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
    smooth: true,
    offset: ["start end", "center start"],
  })

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: targetRef3,
    smooth: true,
    offset: ["start end", "center start"],
  })

  const opacity1 = useTransform(scrollYProgress1, [0, 0.5, 1], [0, 1, 0])
  const scale1 = useTransform(scrollYProgress1, [0, 0.5, 1], [0.8, 1, 0.8])

  const opacity2 = useTransform(scrollYProgress2, [0, 0.5, 1], [0, 1, 0])
  const scale2 = useTransform(scrollYProgress2, [0, 0.5, 1], [0.8, 1, 0.8])

  const opacity3 = useTransform(scrollYProgress3, [0, 0.5, 1], [0, 1, 0])
  const scale3 = useTransform(scrollYProgress3, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <div className="min-h-screen py-16 mb-8">
      <div className="flex flex-col uppercase mb-24">
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
      <div className="mt-6 flex flex-col gap-16">
        <motion.div className="flex flex-col md:flex-row md:even:flex-row-reverse w-full  md:h-[80vh] gap-6 items-center ">
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
          <div className="md:w-1/2 p-x-4 rounded-2xl overflow-hidden max-h-96">
            <StaticImage
              src="../images/img3.jpg"
              className=" w-full h-full object-cover"
              alt="descriptive image"
            />
          </div>
        </motion.div>

        <motion.div className="flex flex-col md:flex-row md:even:flex-row-reverse w-full  md:h-[80vh] gap-6 items-center ">
          {" "}
          <div className="md:w-1/2 mb-10">
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
          <div className="md:w-1/2 p-x-4 rounded-2xl overflow-hidden max-h-96">
            <StaticImage
              src="../images/bsf-img01.jpg"
              className=" w-full h-full object-cover"
              alt="descriptive image"
            />
          </div>
        </motion.div>
      </div>
      <motion.div className="flex mt-24 flex-col w-full  md:h-[80vh] gap-6 items-center ">
        <div className="md:w-1/2 mb-10">
          <p className="text-lg font-bold mb-2 lg:text-2xl text-center">
            Read Professional Advice & Personal Stories on my Blog
          </p>
          <div className="text-xs sm:text-sm text-center">
            Dive into my blog and discover a unique perspective on overcoming
            challenges, embracing resilience, and making a positive impact
          </div>
        </div>
        <div className="text-center w-full">
          <RecentBlogPosts />

          <div className="mt-4 underline underline-offset-8 font-semibold capitalize hover:text-goodBlue cursor-pointer">
            <Link to="/blog">See more blog posts</Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default WelcomingSection
