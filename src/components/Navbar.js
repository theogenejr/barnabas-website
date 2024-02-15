// src/components/Navbar.js
import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const linkStyles =
  "font-black cursor-pointer uppercase text-black text-sm hover:text-blue-700 transition-all"
const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <header className="mx-4 rounded-b-3xl shadow-md bg-white h-16 sticky top-0 left-0 right-0 z-20 transform ease-[cubic-bezier(0.25, 0.25, 0, 1)] duration-300">
      <div className="flex h-full justify-between mx-6 *:w-1/3 lg:mx-24 items-center">
        <ul className="lg:flex hidden gap-10">
          <li className="">
            <Link
              to="/about"
              activeClassName="text-blue-700"
              className="text-sm font-black uppercase cursor-pointer text-black hover:text-blue-700 transition duration-200"
            >
              About
            </Link>
          </li>
          <li className="">
            <Link
              to="/shop"
              activeClassName="text-blue-700"
              className="text-sm font-black uppercase cursor-pointer text-black hover:text-blue-700 transition duration-200"
            >
              Shop
            </Link>
          </li>
        </ul>
        <span
          onClick={() => setMenu(!menu)}
          className={`z-30 lg:hidden ${linkStyles} `}
        >
          {menu ? "close" : "menu"}
        </span>
        <Link to="/" className="flex items-center justify-center">
          <StaticImage
            src="../images/blue-logo-white-bg.jpg"
            alt="Logo"
            className="w-8 h-8 lg:hidden"
          />
          <StaticImage
            src="../images/full-logo-transparent-blue.png"
            alt="Logo"
            className="w-28 h-14 hidden lg:block"
          />
        </Link>
        <div className="flex items-center gap-10 justify-end">
          <ul className="lg:flex gap-10 hidden">
            <li className="">
              <Link
                to="/blog"
                activeClassName="text-blue-700"
                className="text-sm font-black uppercase cursor-pointer text-black hover:text-blue-700 transition duration-200"
              >
                Blog
              </Link>
            </li>
            <li className="">
              <Link
                to="/music"
                activeClassName="text-blue-700"
                className="text-sm font-black uppercase cursor-pointer text-black hover:text-blue-700 transition duration-200"
              >
                music
              </Link>
            </li>
          </ul>
          <div className="">
            <Link to="/contact">
              <button className="hidden lg:flex font-bold bg-black uppercase px-7 hover:bg-blue-700 transition-all py-2 rounded-full text-white">
                contact
              </button>
            </Link>
            <Link
              to="/contact"
              activeClassName="text-blue-700"
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
        } pointer-events-none flex-col justify-between items-start menu-mobile`}
      >
        <ul
          className={`${
            menu ? "pointer-events-auto" : "pointer-events-none"
          }  flex flex-col w-full relative z-10 mt-20 lg:pointer-events-none`}
        >
          <li onClick={() => setMenu(false)} className="p-0 mb-8">
            <Link
              to="/about"
              activeClassName="text-blue-700"
              className="text-4xl font-black uppercase inline-block align-top cursor-pointer text-black hover:text-blue-700"
            >
              About
            </Link>
          </li>
          <li onClick={() => setMenu(false)} className="p-0 mb-8">
            <Link
              to="/shop"
              activeClassName="text-blue-700"
              className="text-4xl font-black uppercase inline-block align-top cursor-pointer text-black hover:text-blue-700"
            >
              Shop
            </Link>
          </li>
          <li onClick={() => setMenu(false)} className="p-0 mb-8">
            <Link
              to="/blog"
              activeClassName="text-blue-700"
              className="text-4xl font-black uppercase inline-block align-top cursor-pointer text-black hover:text-blue-700"
            >
              Blog
            </Link>
          </li>
          <li onClick={() => setMenu(false)} className="p-0 mb-8">
            <Link
              to="/music"
              activeClassName="text-blue-700"
              className="text-4xl font-black uppercase inline-block align-top cursor-pointer text-black hover:text-blue-700"
            >
              music
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
