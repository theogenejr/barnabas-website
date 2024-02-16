import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Logo = () => {
  return (
    <div className="flex items-center justify-center md:mt-2">
      <Link to="/">
        {/* Logo for smaller screens */}
        <StaticImage
          src="../images/sm-logo-trans.png"
          alt="Mobile Logo"
          className="w-12 h-auto md:hidden" // Hide on medium and larger screens
        />

        {/* Logo for larger screens */}
        <StaticImage
          src="../images/lg-logo-trans.png"
          alt="Desktop Logo"
          className="hidden md:block w-32 h-auto" // Show on medium and larger screens
        />
      </Link>
    </div>
  )
}

export default Logo
