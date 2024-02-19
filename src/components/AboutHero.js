import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { motion } from "framer-motion"

const AboutHero = () => {
  return (
    <div className="m-4 bg-gradient-to-tr from-goodBlue to-black rounded-3xl justify-between my-2 mx-4 h-[60vh] relative">
      <div className="rounded-3xl overflow-hidden mix-blend-overlay">
        <StaticImage
          src="../images/prison.png"
          alt="hero image"
          className="absolute w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="flex flex-col absolute h-full text-white uppercase m-8 my-8 sm:m-16">
        <span className="text-xl font-bold sm:text-4xl">who is</span>
        <span className="text-4xl font-black sm:text-6xl">
          barnabas samuel <span className="ml-2">?</span>
        </span>
        <motion.div
          initial={{ height: 16, width: 0 }}
          whileInView={{ height: 16, width: 100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className=" bg-goodBlue"
        ></motion.div>
      </div>
    </div>
  )
}

export default AboutHero
