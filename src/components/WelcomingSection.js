// import { Link } from "gatsby"
import React, { useRef } from "react"
import { motion, useTransform, useScroll, useSpring } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

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
    <div className="min-h-screen py-16">
      <div className="flex flex-col uppercase ">
        <span className="text-xl font-bold">a little bit</span>
        <span className="text-4xl font-black">about me</span>
        <motion.div
          initial={{ height: 16, width: 0 }}
          whileInView={{ height: 16, width: 100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className=" bg-goodBlue"
        ></motion.div>
      </div>
      <div className="mt-6">
        <motion.div
          ref={targetRef1}
          style={{ opacity: opacity1, scale: scale1 }}
          className="flex flex-col md:flex-row md:even:flex-row-reverse w-full  h-[80vh] gap-6 items-center "
        >
          <div className="md:w-1/2 mb-10">
            <p className="text-base md:text-base lg:text-lg first-letter:font-bold first-letter:text-6xl snap-start">
              Welcome to my website, where I share my passion for music,
              community activism, and making a positive impact in the world. My
              name is Barnabas Samuel, and my life's journey has been shaped by
              various challenges, including being a refugee twice and living on
              the streets. But despite these struggles, I remain committed to
              changing the narrative for people like me and uplifting those in
              need.
            </p>
          </div>
          <div className="md:w-1/2 p-x-4 rounded-2xl overflow-hidden max-h-80">
            <StaticImage
              src="../images/hero2.jpg"
              className=" w-full object-cover"
              alt="descriptive image"
            />
          </div>
        </motion.div>

        <motion.div
          ref={targetRef2}
          style={{ opacity: opacity2, scale: scale2 }}
          className="flex flex-col md:flex-row md:even:flex-row-reverse w-full  h-[80vh] gap-6 items-center "
        >
          {" "}
          <div className="md:w-1/2 mb-10">
            <p className="text-base md:text-base lg:text-lg first-letter:font-bold first-letter:text-6xl">
              Through my foundation, I engage in philanthropic work, creating
              opportunities for all to lead fulfilling lives. By sharing my
              story and experiences, I aim to inspire others and raise awareness
              about the plight of refugees. I firmly believe that by working
              together and supporting one another, we can create a brighter
              future for all.
            </p>
          </div>
          <div className="md:w-1/2 p-x-4 rounded-2xl overflow-hidden max-h-80">
            <StaticImage
              src="../images/img2.png"
              className=" w-full object-cover"
              alt="descriptive image"
            />
          </div>
        </motion.div>

        <motion.div
          ref={targetRef3}
          style={{ opacity: opacity3, scale: scale3 }}
          className="flex flex-col md:flex-row md:even:flex-row-reverse w-full  h-[80vh] gap-6 items-center "
        >
          {" "}
          <div className="md:w-1/2 mb-10">
            <p className="text-base md:text-base lg:text-lg first-letter:font-bold first-letter:text-6xl">
              I invite you to take a look around and explore my website. Here,
              you'll find information about my music, my community work, and my
              personal journey. I hope you'll stay a while and join me on this
              journey of growth, learning, and making a difference.
            </p>
          </div>
          <div className="md:w-1/2 p-x-4 rounded-2xl overflow-hidden max-h-80">
            <StaticImage
              src="../images/img3.jpg"
              className=" w-full object-cover"
              alt="descriptive image"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default WelcomingSection

// import { motion, useViewportScroll, useTransform } from "framer-motion"

// const OpacityScrollEffect = () => {
//   const { scrollYProgress } = useViewportScroll()

//   // Define the opacity range (from 0 to 1) based on scroll progress
//   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

//   return (
//     <div className="container">
//       <motion.div
//         className="w-full h-[30vh] bg-black my-20"
//         style={{ opacity }}
//       >
//         Content 1
//       </motion.div>
//       <motion.div
//         className="w-full h-[30vh] bg-red-950 my-20"
//         style={{ opacity }}
//       >
//         Content 2
//       </motion.div>
//       <motion.div
//         className="w-full h-[30vh] bg-blue-950 my-20"
//         style={{ opacity }}
//       >
//         Content 3
//       </motion.div>
//     </div>
//   )
// }

// export default OpacityScrollEffect
