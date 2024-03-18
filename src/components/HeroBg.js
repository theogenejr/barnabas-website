import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const HeroBg = () => {
  return (
    <div
      className={`h-full rounded-3xl absolute top-0 right-0 overflow-hidden 
        `}
    >
      <StaticImage
        src="../images/bg3.jpeg"
        alt="hero image"
        className=" h-full w-full object-cover"
      />
    </div>
  )
}

export default HeroBg
