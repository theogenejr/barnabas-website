// src/components/Navbar.js
import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "./Logo"
import SocialMedia from "./SocialMedia"

const linkStyles =
  "font-black cursor-pointer uppercase text-black text-sm hover:text-goodBlue transition-all"
const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <header className=" h-16 fixed top-0 left-0 right-0 z-20 transform ease-[cubic-bezier(0.25, 0.25, 0, 1)] duration-300">
      <div className="flex mx-4 rounded-b-3xl  shadow-md bg-white/95 h-full justify-between px-6 *:w-1/3 lg:px-24 items-center">
        <ul className="lg:flex hidden gap-10">
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
        </ul>
        <div className="z-30 lg:hidden">
          <span
            onClick={() => setMenu(!menu)}
            className={` lg:hidden ${linkStyles} `}
          >
            {menu ? "close" : "menu"}
          </span>
        </div>
        <Logo />
        <div className="flex items-center gap-2 justify-end">
          <div className="hidden md:flex">
            <SocialMedia effectColor={"goodBlue"} />
          </div>
          <div className="">
            <Link to="/contact">
              <button className="hidden lg:flex font-bold bg-black uppercase px-7 hover:bg-goodBlue transition-all py-2 rounded-full text-white">
                contact
              </button>
            </Link>
            <Link
              to="/contact"
              activeClassName="text-goodBlue"
              className={`lg:hidden ${linkStyles}`}
            >
              contact
            </Link>
          </div>
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
