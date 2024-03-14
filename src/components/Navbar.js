// src/components/Navbar.js
import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "./Logo"
import SocialMedia from "./SocialMedia"

const linkStyles =
  "font-black cursor-pointer uppercase text-black text-sm hover:text-goodBlue transition-all"
const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const hamburgerIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
    </svg>
  )

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
    </svg>
  )

  return (
    <header className=" h-16 fixed border-b-[1px] border-b-black/20 top-0 bg-white/95 left-0 right-0 z-30 transform ease-[cubic-bezier(0.25, 0.25, 0, 1)] duration-300">
      <div className="flex mx-4 h-full justify-between px-6 *:w-1/2 lg:px-24 items-center">
        <div className="justify-start flex">
          <Logo />
        </div>

        <ul className="lg:flex justify-end hidden gap-10">
          <li className="">
            <Link
              to="/about"
              activeClassName="text-goodBlue"
              className="text-sm font-black uppercase cursor-pointer text-black hover:text-goodBlue transition duration-200"
            >
              About
            </Link>
          </li>
          <li className="">
            <a
              href=" https://www.bonfire.com/store/barnabas-samuel/"
              className="text-sm font-black uppercase cursor-pointer text-black hover:text-goodBlue transition duration-200"
            >
              Shop
            </a>
          </li>
          <li className="">
            <Link
              to="/blog"
              activeClassName="text-goodBlue"
              className="text-sm font-black uppercase cursor-pointer text-black hover:text-goodBlue transition duration-200"
            >
              Blog
            </Link>
          </li>
          <li className="">
            <Link
              to="/music"
              activeClassName="text-goodBlue"
              className="text-sm font-black uppercase cursor-pointer text-black hover:text-goodBlue transition duration-200"
            >
              music
            </Link>
          </li>
          <li className="">
            <Link
              to="/contact"
              activeClassName="text-goodBlue"
              className="text-sm font-black uppercase cursor-pointer text-black hover:text-goodBlue transition duration-200"
            >
              contact
            </Link>
          </li>

          <Link
            to="/contact"
            activeClassName="text-goodBlue"
            className={`lg:hidden ${linkStyles}`}
          >
            contact
          </Link>
        </ul>

        <div className="z-30 lg:hidden flex justify-end">
          <span
            onClick={() => setMenu(!menu)}
            className={` lg:hidden  font-black cursor-pointer uppercase text-black w-7 h-7 transition-all`}
          >
            {menu ? closeIcon : hamburgerIcon}
          </span>
        </div>
      </div>

      {/* Menu Responsive */}
      <div
        className={`absolute lg:hidden transition-opacity duration-300 left-0 top-0 right-0 bottom-0 h-screen bg-white px-5 py-24 ${
          menu ? "opacity-1" : "opacity-0"
        } ${
          menu ? "flex" : "hidden"
        } pointer-events-none flex-col justify-between items-start menu-mobile backdrop-blur-sm`}
      >
        <div
          className={`${
            menu ? "pointer-events-auto" : "pointer-events-none"
          }  flex flex-col w-full relative h-full justify-between items-center z-10 lg:pointer-events-none`}
        >
          <ul className=" flex flex-col w-full relative">
            <li onClick={() => setMenu(false)} className="p-0 mb-8">
              <Link
                to="/about"
                activeClassName="text-goodBlue"
                className="text-4xl font-black uppercase inline-block align-top cursor-pointer text-black hover:text-goodBlue"
              >
                About
              </Link>
            </li>
            <li onClick={() => setMenu(false)} className="p-0 mb-8">
              <a
                href=" https://www.bonfire.com/store/barnabas-samuel/"
                className="text-4xl font-black uppercase inline-block align-top cursor-pointer text-black hover:text-goodBlue"
              >
                Shop
              </a>
            </li>
            <li onClick={() => setMenu(false)} className="p-0 mb-8">
              <Link
                to="/blog"
                activeClassName="text-goodBlue"
                className="text-4xl font-black uppercase inline-block align-top cursor-pointer text-black hover:text-goodBlue"
              >
                Blog
              </Link>
            </li>
            <li onClick={() => setMenu(false)} className="p-0 mb-8">
              <Link
                to="/music"
                activeClassName="text-goodBlue"
                className="text-4xl font-black uppercase inline-block align-top cursor-pointer text-black hover:text-goodBlue"
              >
                music
              </Link>
            </li>
            <li onClick={() => setMenu(false)} className="p-0 mb-8">
              <Link
                to="/contact"
                activeClassName="text-goodBlue"
                className="text-4xl font-black uppercase inline-block align-top cursor-pointer text-black hover:text-goodBlue"
              >
                contact
              </Link>
            </li>
          </ul>
          <div className="md:hidden flex">
            <SocialMedia effectColor={"goodBlue"} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
