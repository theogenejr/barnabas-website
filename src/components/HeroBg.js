import React, { useState } from "react"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

const HeroBg = () => {
  return (
    <motion.div
      initial={{ height: 0, borderRadius: 0 }}
      animate={{ height: "100%", borderRadius: "1.5rem" }}
      transition={{ duration: 1 }}
      className={`absolute top-0 right-0 overflow-hidden 
        `}
    >
      <StaticImage
        src="../images/bg3.jpeg"
        alt="hero image"
        className=" h-full w-full object-cover"
      />
    </motion.div>
  )
}

export default HeroBg
