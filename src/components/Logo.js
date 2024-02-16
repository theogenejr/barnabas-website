import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Logo = () => {
  return (
    <div className="flex items-center justify-center md:mt-2">
      <div className="w-12 h-auto md:hidden">
        <Link to="/">
          {/* Logo for smaller screens */}
          <StaticImage
            src="../images/sm-logo-trans.png"
            alt="Mobile Logo"
            className="" // Hide on medium and larger screens
          />
        </Link>
      </div>
      <div className="hidden md:block w-32 h-auto">
        <Link to="/">
          {/* Logo for larger screens */}
          <StaticImage
            src="../images/lg-logo-trans.png"
            alt="Desktop Logo"
            className="" // Show on medium and larger screens
          />
        </Link>
      </div>
    </div>
  )
}

export default Logo
