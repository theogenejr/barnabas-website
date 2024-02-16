import React, { useState } from "react"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

const HeroBg = () => {
  const [fullHeight, setfullHeight] = useState("100%")
  return (
    <motion.div
      initial={{ height: "95%", height: 0, borderRadius: 0 }}
      animate={{ height: "95%", height: fullHeight, borderRadius: "1.5rem" }}
      transition={{ duration: 2 }}
      className={`absolute top-0 right-0 overflow-hidden 
        `}
    >
      <StaticImage
        src="../images/bg3.jpeg"
        placeholder="blurred"
        alt="hero image"
        className=" h-full w-full object-cover"
      />
    </motion.div>
  )
}

export default HeroBg
